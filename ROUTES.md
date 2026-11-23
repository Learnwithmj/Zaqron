# ZAQRON — Routes

`trailingSlash: true` — every URL ends with `/`. All pages are statically generated.

| Route | File | Template / data |
|---|---|---|
| `/` | `app/page.tsx` | Homepage sections |
| `/about/` | `app/about/page.tsx` | |
| `/solutions/` | `app/solutions/page.tsx` | pillars + all solutions |
| `/solutions/[slug]/` (16) | `app/solutions/[slug]/page.tsx` | `SolutionTemplate` ← `content/solutions` |
| `/industries/` | `app/industries/page.tsx` | |
| `/industries/[slug]/` (6) | `app/industries/[slug]/page.tsx` | `IndustryTemplate` ← `content/industries.ts` |
| `/products/` | `app/products/page.tsx` | `content/products.ts` (empty state) |
| `/work/` | `app/work/page.tsx` | `content/case-studies.ts` (empty state) |
| `/work/[slug]/` | `app/work/[slug]/page.tsx` | generated per published case study; none yet |
| `/insights/` | `app/insights/page.tsx` | search + category filters |
| `/insights/[slug]/` | `app/insights/[slug]/page.tsx` | `content/insights.ts` or Sanity |
| `/contact/` | `app/contact/page.tsx` | three enquiry paths |
| `/book-a-call/` | `app/book-a-call/page.tsx` | booking embed (env) + fallback form |
| `/careers/` | `app/careers/page.tsx` | `content/careers.ts` (no open roles) |
| `/privacy-policy/` | `app/privacy-policy/page.tsx` | |
| `/terms-and-conditions/` | `app/terms-and-conditions/page.tsx` | |
| `/api/inquiry/` | `app/api/inquiry/route.ts` | POST only |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`, `/icon.svg` | metadata routes | |

Solution slugs: digital-engineering, web-development, app-development, custom-software, ui-ux-design, ai-automation, ai-agents, workflow-automation, whatsapp-automation, growth-marketing, performance-marketing, seo, lead-generation, business-systems, crm-solutions, saas-development.

Industry slugs: startups, real-estate, ecommerce, healthcare, education, professional-services.

Unknown slugs return the custom 404 (`dynamicParams = false`).
