# ZAQRON — Project Plan

**Domain:** https://zaqron.com · **Tagline:** Build What's Next. · **Message:** Technology. Automation. Growth.

## 1. Inspection (Step 1)

- `D:\zaqron` was empty: no existing code, no git repository, no brand assets, no content.
- Scaffolded with `create-next-app@latest` → Next.js 16.4 (App Router, Turbopack), React 19.3, TypeScript 5, Tailwind CSS 4, ESLint 9.
- The scaffold enabled `cacheComponents` + `partialPrefetching`. **Decision:** both disabled. Every page on this site is built from local, versioned content data (or a CMS at build/revalidate time), so classic static generation (SSG + `dynamicParams = false`) is the simplest, fastest model. It also allows `/work/[slug]` to exist with zero published case studies (Cache Components forbids an empty `generateStaticParams`).

## 2. Goals

1. A premium, original technology-company website — not an agency template.
2. All 34 approved routes + dynamic `/work/[slug]` and `/insights/[slug]`.
3. Content-driven templates: one solution template, one industry template, one article template, one case-study template.
4. Honest content: **no invented clients, logos, metrics, testimonials, team members or products.** Sections that need real data render a designed empty state, or are hidden (testimonials).
5. Lighthouse 90+/95+/95+/95+, CWV within targets, WCAG AA contrast.
6. Real lead capture: validated, rate-limited, spam-protected API that delivers to a CRM webhook and/or email — and refuses honestly (HTTP 503) when not configured.

## 3. Stack (minimal)

| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js 16 App Router, TS | SSG, metadata API, route handlers |
| Styling | Tailwind CSS 4 tokens (`@theme`) | design tokens in CSS, zero runtime |
| UI primitives | Hand-built, shadcn-style (`cn`, variants) | shadcn's copy-in pattern without its CLI/Radix weight |
| Icons | lucide-react | tree-shaken |
| Motion | framer-motion (menus, accordion, tabs, slider); CSS + one IntersectionObserver for scroll reveals | reveals never hide SSR content behind hydration |
| 3D | three (raw, ~no R3F) lazy-loaded after idle, desktop + capable devices only | one 3D object; SVG fallback is the LCP-safe default |
| Forms | react-hook-form + zod (shared client/server schemas) | |
| CMS | Sanity-ready content layer via HTTP GROQ (no SDK dependency) | toggled by env |
| DB | none | not needed yet; no Prisma |
| GSAP / R3F | not installed | no timeline complex enough to justify them |

## 4. Phases

1. Inspect ✔ 2. Plan (this file, DESIGN_SYSTEM, ROUTES, COMPONENT_ARCHITECTURE) 3. Foundation: tokens, fonts, logo, layout chrome 4. Homepage 5. All templates + pages 6. Integrations: forms API, CRM/email, analytics, CMS, SEO 7. Test: tsc, eslint, build, link crawl, form API tests, a11y/HTML checks 8. Final review → `TESTING_REPORT.md`.

## 5. Content policy

| Content | Source | State at launch |
|---|---|---|
| Solutions (16) | `src/content/solutions/*` | Written, unique per page |
| Industries (6) | `src/content/industries.ts` | Written; no claims of past industry work |
| Insights | `src/content/insights.ts` or Sanity | 4 original Zaqron articles |
| Case studies | `src/content/case-studies.ts` or Sanity | **Empty** → designed empty state |
| Products | `src/content/products.ts` | **Empty** → "product lab" empty state |
| Testimonials | `src/content/testimonials.ts` | **Empty** → section hidden |
| Team | `src/content/team.ts` | **Empty** → section hidden |
| Client / partner logos | `src/content/site.ts` (`trustLogos`) | **Empty** → capability strip shown |
| Socials, phone, address | `src/content/site.ts` / env | Only rendered when set |
