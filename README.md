# ZAQRON — Website

**Build What's Next.** · Technology. Automation. Growth.
Official website for Zaqron, a technology & growth partner — https://zaqron.com

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · three.js · React Hook Form + Zod · Sanity-ready content layer.

| Document | Contents |
|---|---|
| [PROJECT_PLAN.md](PROJECT_PLAN.md) | Goals, stack decisions, content policy |
| [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) | Tokens, typography, motion, logo |
| [ROUTES.md](ROUTES.md) | Every route and its data source |
| [COMPONENT_ARCHITECTURE.md](COMPONENT_ARCHITECTURE.md) | Folder structure and principles |
| [TESTING_REPORT.md](TESTING_REPORT.md) | What was tested and the results |

---

## Quick start

```bash
npm install
cp .env.example .env.local   # optional — the site runs with no env vars
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / server |
| `npm run lint` · `npm run typecheck` | ESLint · TypeScript |
| `npm run test:api` | Integration tests for the enquiry API (run after `npm run build`) |
| `npm run brand` | Regenerate `/public/brand/*` logo files from the master geometry |

Requires Node.js 20.9+.

## Editing content

All copy lives in typed data files — pages are templates.

| What | Where |
|---|---|
| Company details, email, socials, trust logos | `src/content/site.ts` (or `NEXT_PUBLIC_*` env vars) |
| 16 solution pages | `src/content/solutions/{build,automate,grow,scale}.ts` |
| 6 industry pages | `src/content/industries.ts` |
| Navigation & footer | `src/content/navigation.ts` |
| Insights articles | `src/content/insights.ts` — or Sanity (see below) |
| Case studies, products, testimonials, team, open roles | `src/content/collections.ts` |
| Process steps | `src/content/process.ts` |

**Content rules:** case studies, products, testimonials, team and client logos ship **empty**. Sections that depend on them show a designed empty state or hide themselves (testimonials, team) until real, permissioned entries are added. Testimonials need `verified: true`; case-study clients need `permissionConfirmed: true`. Add an entry and the homepage, listing pages, related-work blocks, sitemap and `/work/[slug]` page update automatically.

## Brand assets

`public/brand/` — symbol (accent / white / dark), horizontal logo (accent / white / dark), wordmark, app icon and favicon, all SVG. All geometry lives in `src/components/brand/geometry.mjs`; edit it and run `npm run brand`.

## Integrations

Every integration is **off until configured** — nothing fakes success.

| Integration | Env vars | Without it |
|---|---|---|
| **Enquiry → CRM / automation webhook** (HubSpot, Zoho Flow, Make, Zapier, n8n, custom) | `CRM_WEBHOOK_URL`, optional `CRM_WEBHOOK_SECRET` | — |
| **Enquiry → email notification** (Resend) | `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` | — |
| ↳ if neither of the above | | API returns **503 NOT_CONFIGURED**; the form tells visitors to email `hello@zaqron.com` |
| Cloudflare Turnstile | `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Honeypot + time-trap + rate limit still active |
| Shared rate limiting (Upstash Redis) | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | In-memory limiter per server instance |
| Booking (Cal.com / Calendly) | `NEXT_PUBLIC_BOOKING_URL` | `/book-a-call` shows the enquiry form |
| Google Analytics 4 | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No analytics |
| Plausible | `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No analytics |
| Search Console | `GOOGLE_SITE_VERIFICATION` | — |
| Sanity CMS | `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, optional `SANITY_API_READ_TOKEN` | Local content files |

### Webhook payload

`POST {CRM_WEBHOOK_URL}` with header `X-Zaqron-Signature: hex(HMAC-SHA256(body, CRM_WEBHOOK_SECRET))`:

```json
{ "event": "inquiry.created",
  "lead": { "id": "uuid", "submittedAt": "ISO-8601", "path": "startup | business | partner",
            "name": "…", "email": "…", "services": ["…"], "budget": "…", "source": "/contact/?path=startup", "...path-specific fields": "…" } }
```

Conversion events: a successful submission fires `generate_lead` to GA4 / Plausible (`src/lib/analytics.ts`).

### Sanity

1. Create a Studio (`npm create sanity@latest`) and register `schemaTypes` from `sanity/schemas/index.ts`.
2. Set the Sanity env vars. Insights and case studies are then read via GROQ (`src/lib/content.ts`, no SDK dependency) with hourly revalidation; local files remain the fallback.
3. Add `cdn.sanity.io` images freely — already allowed in `next.config.ts` (images + CSP).

## Security

- Strict security headers and CSP (`next.config.ts`); third-party origins are limited to the supported integrations.
- Enquiry API: JSON-only, 16 KB body limit, same-origin check, rate limiting, zod validation (shared with the client), control-character sanitisation, honeypot, minimum fill time, optional Turnstile, HTML-escaped emails, signed webhooks, no secrets in client bundles.
- Article bodies are rendered from structured blocks — no raw HTML injection. JSON-LD is escaped.

## Deployment

### Vercel (recommended)
1. Import the repository → framework **Next.js** (defaults are correct).
2. Add environment variables from `.env.example` — at minimum one enquiry delivery channel. For production add Upstash for shared rate limiting.
3. Add domains `zaqron.com` and `www.zaqron.com`; redirect `www` → apex (or set `NEXT_PUBLIC_SITE_URL` and `ALLOWED_ORIGINS` accordingly).
4. Set `NEXT_PUBLIC_ALLOW_INDEXING=false` for Preview environments.
5. After launch: submit `https://zaqron.com/sitemap.xml` in Google Search Console.

### Any Node host / Docker
```bash
npm ci && npm run build && npm start   # PORT env var supported
```
Run behind HTTPS (HSTS is sent). With multiple instances, configure Upstash so rate limits are shared.

## Before going live — checklist

- [ ] Configure at least one enquiry delivery channel and send a test enquiry from each of the three paths.
- [ ] Confirm `hello@`, `partners@` and `careers@zaqron.com` mailboxes exist (or override via env).
- [ ] Add real social profiles, phone and legal entity name (optional, only if real).
- [ ] **Legal review:** have the Privacy Policy and Terms reviewed for each market (GDPR / UK GDPR, India DPDP Act, CCPA, UAE PDPL) and set governing law. If GA4 is enabled for UK/EU visitors, add a consent banner.
- [ ] Confirm trademark clearance for the logo.
- [ ] Add real case studies, products, testimonials and team as they become available.
