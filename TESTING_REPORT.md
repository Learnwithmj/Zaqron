# ZAQRON — Final Testing Report

Date: 2026-11-23 · Build: Next.js 16.4.6 production (`next build && next start`) · Windows 10, Node 26, Chrome headless (Puppeteer / Lighthouse 12)

## Summary

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | ✅ 0 errors |
| ESLint (`eslint .`, next core-web-vitals + TS) | ✅ 0 errors, 0 warnings |
| Production build | ✅ 46 static pages + 1 dynamic API route |
| Broken-link / SEO crawl (38 pages, 23 assets) | ✅ 0 problems |
| Enquiry API integration tests (`npm run test:api`) | ✅ 20 / 20 |
| Browser interaction tests | ✅ 18 / 18 |
| Responsive overflow + console errors | ✅ 38 pages at 360 / 430 px, 15 key pages at 768 / 1024 / 1920 px — no horizontal overflow, no console or CSP errors |
| No-JS rendering | ✅ all content visible (0 of 35 reveal elements hidden) |
| Reduced motion | ✅ CSS animations off, WebGL scene not started, no hidden content |
| Security headers | ✅ CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP |

## Lighthouse (final run)

| Page | Mobile P / A / BP / SEO | Desktop P / A / BP / SEO |
|---|---|---|
| `/` | 89 / 100 / 100 / 100 | 94 / 100 / 100 / 100 |
| `/solutions/ai-agents/` | 91 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/contact/` | 89 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/insights/` | 93 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/products/` | 94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| `/work/`, `/careers/`, `/about/` | 93–94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |

Run-to-run variance is about ±3 points on mobile.

**Core Web Vitals:** CLS 0–0.076 everywhere (target ≤ 0.1 ✅). TBT 30–120 ms mobile (INP proxy ✅). **Observed** LCP is 0.44 s, painted at first contentful paint. **Lighthouse's simulated mobile LCP** (slow 4G, 4× CPU) is 3.1–3.8 s, because the model charges the page for ~320 KB of framework JS and two preloaded fonts. That means **mobile Performance is 89–94, just under the 90+ target on the home and contact pages.** Desktop meets every target. Field LCP should be confirmed with real-user data (Search Console / Vercel Speed Insights) after launch.

Optimisations applied during testing: variable fonts with selective preload and a single-weight mono; framer-motion removed from the global header, menus and accordion (CSS transitions instead); testimonial slider chunk not loaded while empty; reveal animations never hide content in the first viewport; three.js loaded only on ≥ 1024 px capable devices after idle; zod JIT disabled (removed a CSP eval violation); text-subtle token brightened for WCAG AA (Accessibility 96 → 100).

Further mobile gains, if required: drop the hero's floating labels and static SVG detail on mobile (smaller HTML), or set the heading font to `display: "optional"` (removes the swap repaint but may show the fallback font on slow first visits).

## Enquiry API — `tests/inquiry-api.test.mjs`

Scenario **no integrations**: GET→405 · missing / foreign Origin→403 · non-JSON→415 · malformed JSON→400 · >16 KB→413 · invalid fields→422 with per-field messages · unknown path→422 · honeypot→rejected · time-trap→400 · invalid website→422 · valid startup / business / partner→**503 NOT_CONFIGURED (no fake success)**.
Scenario **CRM webhook (mock)**: all three paths→200 and delivered with HMAC signature, spam fields stripped · control characters stripped / trimmed · 5th request in window→429 + Retry-After.
Scenario **failing integration**: →502 DELIVERY_FAILED.

## Browser interactions

Mega menu opens on hover with 19 links, closes on Escape and after navigation · Industries menu on click · header turns solid on scroll · `?path=` and `?service=` prefill the contact form · empty submit shows 7 inline errors without a network request and focuses the first invalid field · filled submit against the unconfigured backend shows the honest "submissions aren't activated yet — email us" message · arrow keys switch the enquiry tabs · mobile menu is full-screen, locks body scroll and closes on Escape · FAQ accordion toggles · no runtime page errors.

## Not covered / requires credentials

- Live delivery to a real CRM or Resend account (tested against a local mock webhook only).
- Turnstile widget verification (needs site and secret keys).
- Upstash shared rate limiting (falls back to in-memory; logic exercised).
- Sanity fetching against a real project (local fallback exercised).
- Real devices and Safari/Firefox (testing used Chromium emulation).
- Screen-reader walkthrough (automated axe checks via Lighthouse only).
