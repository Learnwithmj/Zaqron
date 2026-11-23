import { NextResponse, type NextRequest } from "next/server";
import { randomUUID } from "node:crypto";
import { inquirySchema } from "@/lib/inquiry-schema";
import { rateLimit } from "@/lib/rate-limit";
import { deliveryChannels, sendEmail, sendToCrm, verifyTurnstile, type LeadPayload } from "@/lib/integrations/delivery";
import { site } from "@/content/site";

/**
 * POST /api/inquiry
 * Order of checks: method/content-type/size → origin → rate limit → schema → spam guards
 * → configuration → delivery. Never reports success unless at least one channel accepted the lead.
 */

const MAX_BYTES = 16 * 1024;
const MIN_FILL_MS = 3000;

function json(status: number, body: Record<string, unknown>, headers?: Record<string, string>) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

function allowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const o = new URL(origin);
    const allowed = new Set([new URL(site.url).host, req.nextUrl.host, ...(process.env.ALLOWED_ORIGINS?.split(",").map((s) => s.trim()) ?? [])]);
    return allowed.has(o.host);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return json(415, { ok: false, code: "UNSUPPORTED_MEDIA_TYPE", message: "Expected JSON." });
  }
  if (!allowedOrigin(req)) {
    return json(403, { ok: false, code: "FORBIDDEN", message: "Request origin not allowed." });
  }

  const ip = (req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown").trim();
  const limit = await rateLimit(ip);
  if (!limit.ok) {
    return json(
      429,
      { ok: false, code: "RATE_LIMITED", message: "Too many submissions. Please try again in a few minutes." },
      { "Retry-After": String(limit.retryAfter) },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BYTES) return json(413, { ok: false, code: "TOO_LARGE", message: "Submission is too large." });

  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, code: "BAD_JSON", message: "Invalid request body." });
  }

  const parsed = inquirySchema.safeParse(data);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return json(422, { ok: false, code: "VALIDATION_ERROR", message: "Please correct the highlighted fields.", fieldErrors });
  }
  const input = parsed.data;

  // Spam guards: honeypot already enforced by schema; time-trap + optional Turnstile.
  if (Date.now() - input.startedAt < MIN_FILL_MS) {
    return json(400, { ok: false, code: "SPAM_SUSPECTED", message: "Submission rejected. Please try again." });
  }
  if (!(await verifyTurnstile(input.turnstileToken, ip))) {
    return json(400, { ok: false, code: "CAPTCHA_FAILED", message: "Verification failed. Please try again." });
  }

  const channels = deliveryChannels();
  if (!channels.crm && !channels.email) {
    console.warn("[inquiry] Received a valid enquiry but no delivery channel is configured (CRM_WEBHOOK_URL or RESEND_API_KEY).");
    return json(503, {
      ok: false,
      code: "NOT_CONFIGURED",
      message: `Online submissions aren't activated yet. Please email us directly at ${site.email}.`,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { companyFax, turnstileToken, startedAt, consent, ...fields } = input;
  const lead: LeadPayload = { ...fields, id: randomUUID(), submittedAt: new Date().toISOString() };

  const tasks: Promise<void>[] = [];
  if (channels.crm) tasks.push(sendToCrm(lead));
  if (channels.email) tasks.push(sendEmail(lead));
  const results = await Promise.allSettled(tasks);
  const delivered = results.filter((r) => r.status === "fulfilled").length;
  results.forEach((r) => r.status === "rejected" && console.error("[inquiry] delivery failed:", r.reason));

  if (delivered === 0) {
    return json(502, {
      ok: false,
      code: "DELIVERY_FAILED",
      message: `We couldn't deliver your message right now. Please try again or email ${site.email}.`,
    });
  }
  return json(200, { ok: true, id: lead.id });
}

export function GET() {
  return json(405, { ok: false, code: "METHOD_NOT_ALLOWED" }, { Allow: "POST" });
}
