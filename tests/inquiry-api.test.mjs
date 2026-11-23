// Integration tests for POST /api/inquiry against the production build.
// Run: npm run build && npm run test:api
// Spawns `next start` under different env configurations and a local mock CRM webhook.
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import assert from "node:assert/strict";

const NEXT = process.platform === "win32" ? "node_modules\\.bin\\next.cmd" : "node_modules/.bin/next";
let passed = 0;
const results = [];

function startNext(port, env) {
  const proc = spawn(NEXT, ["start", "-p", String(port)], {
    env: { ...process.env, ...env, NODE_ENV: "production" },
    shell: process.platform === "win32",
    stdio: "pipe",
  });
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("next start timeout")), 30000);
    const poll = async () => {
      try {
        await fetch(`http://localhost:${port}/robots.txt`);
        clearTimeout(t);
        resolve(proc);
      } catch {
        setTimeout(poll, 300);
      }
    };
    poll();
  });
}

function stop(proc) {
  if (process.platform === "win32") spawn("taskkill", ["/pid", String(proc.pid), "/T", "/F"]);
  else proc.kill("SIGTERM");
}

const old = () => Date.now() - 10_000;
const payloads = {
  startup: () => ({
    path: "startup", name: "Test Founder", email: "founder@example.com", company: "Acme Labs",
    idea: "A booking platform that automates clinic appointment reminders.", services: ["Web Development", "AI Agents"],
    budget: "$15k – $50k", timeline: "1 – 3 months", companyFax: "", startedAt: old(), consent: true,
  }),
  business: () => ({
    path: "business", name: "Ops Lead", email: "ops@example.com", company: "Example Co", website: "example.com",
    industry: "Real Estate", size: "51 – 200", challenges: "Leads arrive from five channels and follow-up is manual.",
    services: ["CRM Solutions"], budget: "$50k – $100k", companyFax: "", startedAt: old(), consent: true,
  }),
  partner: () => ({
    path: "partner", name: "Agency Owner", email: "owner@agency.example", agency: "Studio X", website: "https://studio.example",
    partnershipType: "White-label delivery", services: ["Workflow Automation"],
    collaboration: "Two to three automation projects per quarter under our brand.", companyFax: "", startedAt: old(), consent: true,
  }),
};

async function post(port, body, origin = `http://localhost:${port}`) {
  const res = await fetch(`http://localhost:${port}/api/inquiry/`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(origin ? { Origin: origin } : {}) },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
  return { status: res.status, body: await res.json().catch(() => ({})) };
}

async function test(name, fn) {
  try {
    await fn();
    passed++;
    results.push(`  ✓ ${name}`);
  } catch (e) {
    results.push(`  ✗ ${name}\n      ${e.message}`);
  }
}

// ── Mock CRM webhook ──
const received = [];
const mock = createServer((req, res) => {
  let data = "";
  req.on("data", (c) => (data += c));
  req.on("end", () => {
    if (req.url === "/fail") {
      res.writeHead(500).end();
      return;
    }
    received.push({ headers: req.headers, body: JSON.parse(data) });
    res.writeHead(200, { "Content-Type": "application/json" }).end("{}");
  });
});
await new Promise((r) => mock.listen(4555, r));

// ── Scenario 1: no delivery channel configured ──
const env0 = { CRM_WEBHOOK_URL: "", RESEND_API_KEY: "", INQUIRY_RATE_LIMIT: "50" };
let srv = await startNext(3301, env0);
results.push("Scenario: no integrations configured");
await test("GET → 405", async () => assert.equal((await fetch("http://localhost:3301/api/inquiry/")).status, 405));
await test("missing Origin → 403", async () => assert.equal((await post(3301, payloads.startup(), null)).status, 403));
await test("foreign Origin → 403", async () => assert.equal((await post(3301, payloads.startup(), "https://evil.example")).status, 403));
await test("non-JSON content-type → 415", async () => {
  const r = await fetch("http://localhost:3301/api/inquiry/", { method: "POST", headers: { Origin: "http://localhost:3301", "Content-Type": "text/plain" }, body: "x" });
  assert.equal(r.status, 415);
});
await test("malformed JSON → 400", async () => assert.equal((await post(3301, "{bad")).status, 400));
await test("oversized body → 413", async () => assert.equal((await post(3301, { ...payloads.startup(), idea: "x".repeat(20000) })).status, 413));
await test("invalid fields → 422 with field errors", async () => {
  const r = await post(3301, { path: "startup", startedAt: 1, consent: false });
  assert.equal(r.status, 422);
  for (const f of ["name", "email", "company", "idea", "services", "budget", "timeline", "consent"]) assert.ok(r.body.fieldErrors[f], `missing error for ${f}`);
  assert.equal(r.body.fieldErrors.company, "Company or project name is required");
});
await test("unknown path → 422", async () => assert.equal((await post(3301, { ...payloads.startup(), path: "other" })).status, 422));
await test("honeypot filled → rejected", async () => assert.equal((await post(3301, { ...payloads.startup(), companyFax: "bot" })).status, 422));
await test("submitted too fast (time-trap) → 400", async () => {
  const r = await post(3301, { ...payloads.startup(), startedAt: Date.now() });
  assert.equal(r.status, 400);
  assert.equal(r.body.code, "SPAM_SUSPECTED");
});
await test("invalid website on partner path → 422", async () => {
  const r = await post(3301, { ...payloads.partner(), website: "not a site" });
  assert.equal(r.status, 422);
  assert.ok(r.body.fieldErrors.website);
});
for (const p of Object.keys(payloads)) {
  await test(`valid ${p} enquiry without integrations → 503 NOT_CONFIGURED (never fake success)`, async () => {
    const r = await post(3301, payloads[p]());
    assert.equal(r.status, 503);
    assert.equal(r.body.code, "NOT_CONFIGURED");
    assert.equal(r.body.ok, false);
  });
}
stop(srv);

// ── Scenario 2: CRM webhook configured (mock) + rate limit ──
srv = await startNext(3302, { CRM_WEBHOOK_URL: "http://localhost:4555/hook", CRM_WEBHOOK_SECRET: "test-secret", INQUIRY_RATE_LIMIT: "4" });
results.push("Scenario: CRM webhook configured");
for (const p of Object.keys(payloads)) {
  await test(`valid ${p} enquiry → 200 and delivered to CRM`, async () => {
    const before = received.length;
    const r = await post(3302, payloads[p]());
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.ok(r.body.id);
    assert.equal(received.length, before + 1);
    const got = received.at(-1);
    assert.equal(got.body.lead.path, p);
    assert.ok(got.headers["x-zaqron-signature"], "HMAC signature header missing");
    assert.equal(got.body.lead.companyFax, undefined, "honeypot leaked to CRM");
    assert.equal(got.body.lead.consent, undefined);
  });
}
await test("input is sanitised (control chars stripped, trimmed)", async () => {
  const r = await post(3302, { ...payloads.startup(), name: "  Ada\u0007 Lovelace  " });
  assert.equal(r.status, 200);
  assert.equal(received.at(-1).body.lead.name, "Ada Lovelace");
});
await test("5th request in window → 429 with Retry-After", async () => {
  const res = await fetch("http://localhost:3302/api/inquiry/", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "http://localhost:3302" },
    body: JSON.stringify(payloads.startup()),
  });
  assert.equal(res.status, 429);
  assert.ok(res.headers.get("retry-after"));
});
stop(srv);

// ── Scenario 3: configured but failing integration ──
srv = await startNext(3303, { CRM_WEBHOOK_URL: "http://localhost:4555/fail", INQUIRY_RATE_LIMIT: "50" });
results.push("Scenario: integration failing");
await test("delivery failure → 502 DELIVERY_FAILED (no false success)", async () => {
  const r = await post(3303, payloads.business());
  assert.equal(r.status, 502);
  assert.equal(r.body.code, "DELIVERY_FAILED");
});
stop(srv);
mock.close();

console.log(results.join("\n"));
const total = results.filter((l) => /✓|✗/.test(l)).length;
console.log(`\n${passed}/${total} passed`);
process.exit(passed === total ? 0 : 1);
