# ZAQRON: Testing Report

2026-11-25, after the logo and colour update. Local production build (`next build`, `next start`), Windows 10, headless Chrome.

| Check | Result |
|---|---|
| TypeScript, ESLint, production build | Pass, 46 static pages generated |
| Link and SEO crawl (38 pages, 23 assets) | 0 problems |
| Enquiry API tests (`npm run test:api`) | 20 / 20 |
| Browser interaction checks | 18 / 18 |
| Overflow, console and HTTP errors: 38 pages at 360, 390, 430, 768, 1024, 1440, 1920 px | 266 combinations, 0 issues |
| JavaScript disabled, reduced motion (home page) | Content visible; animation and WebGL off |

The width sweep loads each page at 360 and 1440 px and resizes through the rest.

## Lighthouse (one run per page)

Accessibility, Best Practices and SEO scored 100 on every page below, mobile and desktop.

| Page | Mobile performance | Mobile LCP (simulated) | Desktop performance |
|---|---|---|---|
| `/` | 89 | 3.8 s | 94 |
| `/solutions/ai-agents/` | 92 | 3.3 s | 100 |
| `/industries/healthcare/` | 93 | 3.3 s | 100 |
| `/contact/` | 89 | 3.6 s | 100 |
| `/insights/` | 93 | 3.3 s | 100 |
| `/products/` | 92 | 3.2 s | 100 |
| `/work/` | 94 | 3.1 s | 100 |
| `/about/` | 93 | 3.3 s | 100 |

**Targets missed on mobile:** LCP exceeds 2.5 s on all eight pages under Lighthouse's simulated slow 4G, and performance is below 90 on Home and Contact. CLS is at most 0.017. INP was not measured; total blocking time was 20–130 ms on mobile and up to 200 ms on desktop (Home).

## Not tested

- Real-user performance, real devices, Safari, Firefox and screen readers
- Delivery to a real CRM or Resend account (a local mock webhook was used)
- Turnstile, Upstash, Sanity, analytics and booking embeds, which all need credentials
- Case study, product, testimonial and team layouts with real entries
