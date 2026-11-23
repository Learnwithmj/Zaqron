# ZAQRON — Component Architecture

```
src/
├─ app/                    routes, metadata routes, API route handler
├─ components/
│  ├─ brand/               Logo, LogoSymbol, Wordmark (single source for the identity)
│  ├─ layout/              Header, Navigation, MegaMenu, MobileMenu, Footer, SectionContainer
│  ├─ ui/                  Button, primitives.tsx (Card, Badge, SectionContainer, SectionHeading, Reveal),
│  │                       Accordion, Modal, Breadcrumb, Icon, RevealObserver
│  ├─ home/                HeroSection, HeroVisual(+HeroScene three.js), TrustSection, SolutionsSection,
│  │                       WhyZaqronSection, AudienceSection, ProductsSection, WorkSection, ProcessSection,
│  │                       TestimonialsSection, InsightsSection, FinalCTA
│  ├─ content/             cards.tsx (ServiceCard, IndustryCard, ProductCard, CaseStudyCard, BlogCard), PageHero,
│  │                       EmptyState, ArticleBody, ArticleCover, PillarGlyph, LegalPage, InsightsExplorer,
│  │                       templates/{Solution,Industry}Template
│  ├─ forms/               InquiryExperience (path switcher), InquiryForms.tsx (StartupInquiryForm,
│  │                       BusinessInquiryForm, PartnershipForm), FormShell, fields, useInquiryForm
│  ├─ seo/                 JsonLd
│  └─ analytics/           Analytics (GA4 / Plausible via env)
├─ content/                typed structured content (the "CMS" when Sanity is off)
│  ├─ site.ts  navigation.ts  process.ts  industries.ts  insights.ts
│  ├─ collections.ts       case studies, products, testimonials, team, roles (empty until real)
│  └─ solutions/ {index,build,automate,grow,scale}.ts
├─ lib/
│  ├─ content.ts           data-access layer (local ↔ Sanity)
│  ├─ sanity.ts            dependency-free GROQ client
│  ├─ seo.ts               buildMetadata(), JSON-LD builders
│  ├─ inquiry-schema.ts    zod schemas shared by client + server
│  ├─ rate-limit.ts        sliding-window limiter
│  ├─ integrations/        delivery.ts (CRM webhook, Resend email, Turnstile verify)
│  ├─ analytics.ts         trackEvent() for GA4 / Plausible
│  └─ utils.ts             cn(), formatDate()
└─ types/content.ts        content model types
sanity/schemas/            Sanity Studio schema definitions mirroring types/content.ts
scripts/generate-brand.mjs Generates /public/brand from the master logo geometry
tests/inquiry-api.test.mjs Enquiry API integration tests
```

## Principles

- **Server components by default.** Client components only where interaction is needed: Header (scroll + menus), MobileMenu, Accordion, InsightsExplorer, forms, HeroVisual, TestimonialsSection slider, RevealObserver.
- **Content ≠ layout.** Pages pull typed content through `lib/content.ts`; adding a product, case study, post or testimonial is a data edit.
- **Honest empty states.** `EmptyState` is a first-class component; sections that depend on proof (testimonials, team) return `null` when empty.
- **One template per page type.** 16 solution pages and 6 industry pages share one template each, with unique copy per entry.
