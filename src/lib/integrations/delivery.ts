import "server-only";
import { createHmac } from "node:crypto";
import type { Inquiry } from "@/lib/inquiry-schema";
import { pathLabels } from "@/lib/inquiry-schema";

/**
 * Lead delivery integrations. Each is enabled only by its environment variables.
 *  - CRM / automation webhook: CRM_WEBHOOK_URL (+ optional CRM_WEBHOOK_SECRET for HMAC signing).
 *    Works with HubSpot workflows, Zoho Flow, Make, Zapier, n8n or any custom endpoint.
 *  - Email notification via Resend REST API: RESEND_API_KEY, INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL.
 */

export type LeadPayload = Omit<Inquiry, "companyFax" | "turnstileToken" | "startedAt" | "consent"> & {
  submittedAt: string;
  id: string;
};

export function deliveryChannels() {
  return {
    crm: Boolean(process.env.CRM_WEBHOOK_URL),
    email: Boolean(process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL && process.env.INQUIRY_FROM_EMAIL),
  };
}

export async function sendToCrm(lead: LeadPayload) {
  const url = process.env.CRM_WEBHOOK_URL!;
  const body = JSON.stringify({ event: "inquiry.created", lead });
  const headers: Record<string, string> = { "Content-Type": "application/json", "User-Agent": "Zaqron-Website/1.0" };
  if (process.env.CRM_WEBHOOK_SECRET) {
    headers["X-Zaqron-Signature"] = createHmac("sha256", process.env.CRM_WEBHOOK_SECRET).update(body).digest("hex");
  }
  const res = await fetch(url, { method: "POST", headers, body, cache: "no-store", signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`CRM webhook responded ${res.status}`);
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const labels: Record<string, string> = {
  name: "Name",
  email: "Email",
  company: "Company",
  agency: "Agency",
  website: "Website",
  industry: "Industry",
  size: "Business size",
  idea: "Project idea",
  challenges: "Current challenges",
  services: "Required services",
  budget: "Estimated budget",
  timeline: "Timeline",
  partnershipType: "Partnership type",
  collaboration: "Expected collaboration",
  source: "Source page",
};

export async function sendEmail(lead: LeadPayload) {
  const rows = Object.entries(lead)
    .filter(([k, v]) => labels[k] && v !== "" && v !== undefined)
    .map(([k, v]) => {
      const val = Array.isArray(v) ? v.join(", ") : String(v);
      return `<tr><td style="padding:8px 12px;color:#64748b;vertical-align:top;white-space:nowrap">${labels[k]}</td><td style="padding:8px 12px;color:#0f172a;white-space:pre-wrap">${esc(val)}</td></tr>`;
    })
    .join("");
  const html = `<div style="font-family:Inter,Arial,sans-serif"><h2 style="margin:0 0 4px">New enquiry — ${esc(pathLabels[lead.path])}</h2><p style="color:#64748b;margin:0 0 16px">${lead.submittedAt} · ${lead.id}</p><table style="border-collapse:collapse;font-size:14px">${rows}</table></div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM_EMAIL,
      to: process.env.INQUIRY_TO_EMAIL!.split(",").map((s) => s.trim()),
      reply_to: lead.email,
      subject: `New ${lead.path} enquiry from ${lead.name}`,
      html,
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

/** Cloudflare Turnstile verification — enforced only when TURNSTILE_SECRET_KEY is set. */
export async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const form = new URLSearchParams({ secret, response: token, remoteip: ip });
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form, cache: "no-store" });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}
