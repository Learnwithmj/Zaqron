import type { Solution } from "@/types/content";

export const buildSolutions: Solution[] = [
  {
    slug: "digital-engineering",
    pillar: "build",
    isPillar: true,
    name: "Digital Engineering",
    icon: "layers",
    short: "Websites, applications, software and digital products designed for modern businesses.",
    seo: {
      title: "Digital Engineering — Products, Platforms & Software",
      description:
        "End-to-end digital engineering by Zaqron: product strategy, design, web and mobile applications, custom software and cloud platforms built to scale.",
    },
    hero: {
      eyebrow: "Build · Digital Engineering",
      headline: "Engineering the products your business runs on.",
      subheadline:
        "From a first release to a platform serving thousands of users, we design and build digital products with the architecture to keep up with your ambition.",
    },
    intro: {
      heading: "One team from concept to production",
      body: [
        "Most digital projects fail in the gaps — between the strategist and the designer, the designer and the engineer, the launch and the first real customer. Digital Engineering at Zaqron closes those gaps with one accountable team that owns the outcome end to end.",
        "We combine product thinking, interface design and modern engineering practice to ship software that is fast, secure and genuinely maintainable — so the second year of your product costs less than the first.",
      ],
    },
    problems: [
      { title: "Fragmented vendors", description: "Separate agencies for design, frontend and backend create hand-off friction, finger-pointing and missed deadlines." },
      { title: "Products that don't scale", description: "Quick builds on brittle foundations become expensive rewrites the moment traction arrives." },
      { title: "Unclear scope, unclear cost", description: "Projects start without a defined first release, so budgets drift and value arrives late." },
      { title: "Technical debt from day one", description: "No tests, no documentation and no deployment pipeline make every change risky." },
    ],
    approach: [
      { title: "Product-first scoping", description: "We define the smallest release that proves value and design the architecture for what comes after it." },
      { title: "Design and engineering in one loop", description: "Designers and engineers work in the same sprint, so interfaces are buildable and builds are usable." },
      { title: "Production standards from sprint one", description: "Typed code, automated tests, CI/CD and observability are part of the first deliverable, not an afterthought." },
      { title: "Ownership you keep", description: "You own the code, the infrastructure accounts and the documentation. No lock-in." },
    ],
    deliverables: [
      "Product discovery and technical roadmap",
      "UX flows, design system and high-fidelity UI",
      "Web, mobile or desktop applications",
      "APIs, integrations and backend services",
      "Cloud infrastructure, CI/CD and monitoring",
      "Documentation, handover and team training",
    ],
    capabilities: [
      { title: "Web platforms", description: "High-performance websites, portals and web applications." },
      { title: "Mobile applications", description: "Cross-platform and native apps for iOS and Android." },
      { title: "Custom software", description: "Internal tools and line-of-business systems built around your workflow." },
      { title: "SaaS products", description: "Multi-tenant platforms with billing, roles and analytics." },
      { title: "Integrations", description: "Payment, CRM, ERP, messaging and data integrations." },
      { title: "Cloud & DevOps", description: "Secure, observable infrastructure with automated delivery." },
    ],
    useCases: [
      { title: "Launching a new digital product", description: "A founder moves from validated idea to a production MVP with a roadmap for the next three releases." },
      { title: "Replacing spreadsheets with software", description: "An operations team retires a web of spreadsheets for one purpose-built system with permissions and audit trails." },
      { title: "Modernising a legacy platform", description: "A business migrates an ageing application to a modern stack incrementally, without a risky big-bang rewrite." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "React Native", "Flutter", "PostgreSQL", "AWS", "Vercel", "Docker"],
    engagementNote: "Digital Engineering engagements usually start with a two-to-three week discovery sprint that produces a fixed-scope plan for the first release.",
    faqs: [
      { question: "Do you work with early-stage startups or only established companies?", answer: "Both. For startups we focus on a lean, investable first release; for established businesses we focus on integration, security and change management." },
      { question: "Who owns the code and intellectual property?", answer: "You do. Repositories, cloud accounts and design files are created in your organisation or transferred to you at handover." },
      { question: "Can you take over an existing codebase?", answer: "Yes. We start with a technical audit covering architecture, security, test coverage and deployment, then propose a stabilisation plan before adding features." },
      { question: "How do you price projects?", answer: "Discovery is a fixed fee. Delivery is either fixed-scope per release or a dedicated monthly team, depending on how defined the roadmap is." },
    ],
    cta: { heading: "Have a product to build?", body: "Tell us what you're building and where you are today. We'll come back with a clear first step." },
    related: ["web-development", "app-development", "custom-software", "saas-development"],
  },
  {
    slug: "web-development",
    pillar: "build",
    name: "Web Development",
    icon: "code",
    short: "Fast, secure websites and web apps engineered for performance and conversion.",
    seo: {
      title: "Web Development — High-Performance Websites & Web Apps",
      description:
        "Zaqron builds fast, accessible, SEO-ready websites and web applications with Next.js and modern headless architecture — designed to convert and easy to manage.",
    },
    hero: {
      eyebrow: "Build · Web Development",
      headline: "Websites that load fast, rank well and actually convert.",
      subheadline:
        "Your website is your hardest-working salesperson. We engineer it like one — measurable, fast on every device and simple for your team to update.",
    },
    intro: {
      heading: "Beyond a pretty homepage",
      body: [
        "A modern website has to do several jobs at once: earn trust in seconds, rank in search, load instantly on a mid-range phone, capture leads into your CRM and let your marketing team publish without a developer.",
        "We build on headless, component-driven architecture so performance, SEO and content editing are designed in rather than bolted on.",
      ],
    },
    problems: [
      { title: "Slow pages, lost visitors", description: "Heavy themes and plugins push load times past the point where visitors leave." },
      { title: "Developer dependency", description: "Every copy change or new landing page needs a ticket and a wait." },
      { title: "Invisible in search", description: "Poor technical SEO, missing structured data and thin page architecture limit organic reach." },
      { title: "Leads that go nowhere", description: "Forms email a shared inbox instead of routing into a CRM with context." },
    ],
    approach: [
      { title: "Performance budget first", description: "We set Core Web Vitals targets up front and test against them on every release." },
      { title: "Content-modelled CMS", description: "Pages are assembled from structured content blocks your team can reuse safely." },
      { title: "Technical SEO built in", description: "Semantic markup, metadata, sitemaps, schema and internal linking are part of the build." },
      { title: "Conversion paths, wired up", description: "Forms, booking and analytics connect directly to your CRM and reporting." },
    ],
    deliverables: [
      "Information architecture and sitemap",
      "Responsive UI design and component library",
      "Next.js frontend with headless CMS",
      "Technical SEO and structured data",
      "Analytics, consent and conversion tracking",
      "CRM-connected forms and booking flows",
    ],
    capabilities: [
      { title: "Corporate & brand websites", description: "Premium marketing sites that represent the business accurately." },
      { title: "Landing page systems", description: "Reusable blocks for campaign pages launched in hours, not weeks." },
      { title: "Web applications", description: "Customer portals, dashboards and authenticated experiences." },
      { title: "Headless commerce", description: "Fast storefronts on top of Shopify or other commerce engines." },
      { title: "Multilingual & multi-region", description: "Localised content and routing for international markets." },
      { title: "Accessibility", description: "WCAG-aligned interfaces that work for every visitor." },
    ],
    useCases: [
      { title: "Brand relaunch", description: "Replacing an outdated site with a fast, modern platform that reflects where the company is going." },
      { title: "Campaign velocity", description: "Giving a marketing team a block library to launch and test landing pages without engineering support." },
      { title: "Customer portal", description: "Adding a secure logged-in area where customers track orders, documents or service requests." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity", "Contentful", "Shopify", "Vercel", "Cloudflare", "GA4"],
    engagementNote: "Typical website projects run in four phases — architecture, design, build and launch — with content migration planned from week one.",
    faqs: [
      { question: "Can our team edit the website without developers?", answer: "Yes. We model your content in a headless CMS so your team can create pages from approved components while the design system stays consistent." },
      { question: "Do you migrate content and protect our existing SEO?", answer: "Yes. We map every existing URL, set up redirects, preserve metadata and monitor search console after launch." },
      { question: "Which CMS do you recommend?", answer: "It depends on your team and content complexity. Sanity is our default for flexibility; we also work with Contentful, Strapi and WordPress as a headless backend." },
      { question: "Will the website be fast on mobile?", answer: "Performance targets are agreed in discovery and measured throughout the build on real mid-range devices, not just desktop." },
    ],
    cta: { heading: "Ready for a website that works harder?", body: "Share your current site and goals. We'll outline what to keep, what to rebuild and what it will take." },
    related: ["ui-ux-design", "seo", "lead-generation", "digital-engineering"],
  },
  {
    slug: "app-development",
    pillar: "build",
    name: "App Development",
    icon: "smartphone",
    short: "Cross-platform and native mobile apps users keep coming back to.",
    seo: {
      title: "Mobile App Development — iOS & Android",
      description:
        "Zaqron designs and builds cross-platform and native mobile apps for iOS and Android, from MVP to scale, with secure backends and analytics built in.",
    },
    hero: {
      eyebrow: "Build · App Development",
      headline: "Mobile apps designed for daily use, built for scale.",
      subheadline:
        "We build iOS and Android apps that feel native, perform under load and connect cleanly to the systems behind them.",
    },
    intro: {
      heading: "An app is a product, not a project",
      body: [
        "Getting an app into the store is the easy part. Keeping users engaged, shipping updates safely and connecting the app to payments, notifications and your operations is where most apps struggle.",
        "We treat every app as a living product — with a release pipeline, crash and usage analytics, and an architecture that lets you iterate weekly.",
      ],
    },
    problems: [
      { title: "Two codebases, double the cost", description: "Separate iOS and Android teams slow down every feature and multiply bugs." },
      { title: "Poor retention", description: "Apps launched without onboarding, notifications or analytics lose users in the first week." },
      { title: "Store rejections and delays", description: "Unclear guidelines around privacy, payments and permissions block releases." },
      { title: "Backend as an afterthought", description: "Apps built against fragile APIs break whenever the business changes." },
    ],
    approach: [
      { title: "Right platform choice", description: "Cross-platform by default with React Native or Flutter; native where performance or hardware access demands it." },
      { title: "Retention by design", description: "Onboarding, notifications, offline states and analytics are scoped into the first release." },
      { title: "Release engineering", description: "Automated builds, beta channels and over-the-air updates keep releases predictable." },
      { title: "Store-ready compliance", description: "Privacy manifests, permissions and payment rules handled before submission." },
    ],
    deliverables: [
      "Product scope and user journeys",
      "App UI/UX design and interactive prototype",
      "iOS and Android applications",
      "Backend APIs, auth and push notifications",
      "Analytics, crash reporting and A/B hooks",
      "App store submission and release pipeline",
    ],
    capabilities: [
      { title: "Cross-platform apps", description: "One codebase, native performance on iOS and Android." },
      { title: "Native development", description: "Swift and Kotlin where the use case requires it." },
      { title: "Offline-first", description: "Apps that work reliably on poor connections and sync later." },
      { title: "Payments & subscriptions", description: "In-app purchases, subscriptions and payment gateways." },
      { title: "Real-time features", description: "Chat, live tracking and instant updates." },
      { title: "Device integrations", description: "Camera, location, biometrics, Bluetooth and wearables." },
    ],
    useCases: [
      { title: "Consumer MVP", description: "Launching a subscription app to a first cohort and learning from real usage data within weeks." },
      { title: "Field operations app", description: "Giving technicians or sales teams an offline-capable app synced with back-office systems." },
      { title: "Customer companion app", description: "Extending an existing service with bookings, updates and loyalty in the customer's pocket." },
    ],
    technologies: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase", "Node.js", "Stripe", "Sentry"],
    engagementNote: "App engagements include a clickable prototype tested with real users before full development begins.",
    faqs: [
      { question: "Should we build native or cross-platform?", answer: "For most business and consumer apps, cross-platform delivers near-native experience at a much lower cost. We recommend native only when the app depends on heavy graphics, advanced hardware access or platform-specific features." },
      { question: "Do you handle App Store and Play Store submission?", answer: "Yes, including store listings, privacy declarations, review responses and release management." },
      { question: "Can you add an app to our existing platform?", answer: "Yes. We build against your existing APIs or add a secure API layer where one doesn't exist yet." },
      { question: "What happens after launch?", answer: "We offer ongoing release support covering OS updates, monitoring, fixes and a feature roadmap." },
    ],
    cta: { heading: "Have an app idea or an app that needs rescuing?", body: "Tell us where you are. We'll recommend the fastest responsible path to the store." },
    related: ["ui-ux-design", "custom-software", "saas-development", "digital-engineering"],
  },
  {
    slug: "custom-software",
    pillar: "build",
    name: "Custom Software",
    icon: "cpu",
    short: "Purpose-built software that fits the way your business actually works.",
    seo: {
      title: "Custom Software Development — Built Around Your Operations",
      description:
        "Zaqron builds custom business software, internal tools, portals and integrations that replace manual work and fit your processes exactly.",
    },
    hero: {
      eyebrow: "Build · Custom Software",
      headline: "Software shaped around your business — not the other way round.",
      subheadline:
        "When off-the-shelf tools force workarounds, custom software turns your unique processes into a competitive advantage.",
    },
    intro: {
      heading: "When generic tools stop fitting",
      body: [
        "Every growing business reaches a point where its operations outgrow generic SaaS. Teams copy data between tools, approvals happen in chat threads and nobody trusts the numbers.",
        "We build focused software — internal tools, portals, operational platforms — that model your real workflow, connect to the systems you keep and remove the manual glue in between.",
      ],
    },
    problems: [
      { title: "Workarounds everywhere", description: "Teams bend generic tools with spreadsheets, macros and manual copy-paste." },
      { title: "Disconnected data", description: "Customer, finance and operations data live in silos with no single source of truth." },
      { title: "Per-seat costs that keep rising", description: "Stacks of SaaS subscriptions grow faster than the value they deliver." },
      { title: "Processes that can't be audited", description: "Approvals and changes happen informally with no traceability." },
    ],
    approach: [
      { title: "Process mapping first", description: "We document how work actually flows today before deciding what software should do." },
      { title: "Build only what's unique", description: "We integrate proven tools for commodity functions and build custom only where it creates advantage." },
      { title: "Role-based by design", description: "Permissions, audit logs and approvals are core features, not add-ons." },
      { title: "Incremental rollout", description: "Teams migrate module by module, keeping the business running throughout." },
    ],
    deliverables: [
      "Process maps and system requirements",
      "Data model and solution architecture",
      "Web-based internal tools and portals",
      "Integrations with existing systems",
      "Roles, permissions and audit trails",
      "Training, documentation and support",
    ],
    capabilities: [
      { title: "Internal tools", description: "Admin panels, approval flows and operational dashboards." },
      { title: "Client & vendor portals", description: "Secure self-service for customers, partners and suppliers." },
      { title: "ERP extensions", description: "Custom modules around existing ERP and accounting systems." },
      { title: "Data platforms", description: "Pipelines and reporting that unify data across tools." },
      { title: "Document automation", description: "Generation, approval and e-signature of business documents." },
      { title: "Legacy modernisation", description: "Re-platforming ageing systems without disrupting operations." },
    ],
    useCases: [
      { title: "Operations command centre", description: "One internal platform replacing five spreadsheets for orders, inventory and dispatch." },
      { title: "Partner portal", description: "A self-service portal where distributors place orders, download assets and track status." },
      { title: "Quote-to-invoice system", description: "Automating quotes, approvals and invoicing with full traceability." },
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL", "Prisma", "Redis", "REST & GraphQL", "AWS", "Azure"],
    engagementNote: "Custom software projects begin with process mapping workshops involving the people who do the work, not just the people who manage it.",
    faqs: [
      { question: "Is custom software more expensive than SaaS?", answer: "Upfront, often yes. Over three to five years, a focused custom system frequently costs less than stacked subscriptions and manual effort — we model this with you before recommending a build." },
      { question: "Can it integrate with our accounting or ERP system?", answer: "In most cases, yes. We work with common accounting, ERP and CRM APIs and can build connectors where none exist." },
      { question: "How do you keep custom software maintainable?", answer: "Typed code, automated tests, documented architecture and standard, widely-used technologies — so any competent team can maintain it." },
      { question: "Can we start small?", answer: "Yes. We usually start with the module that removes the most manual effort and expand from there." },
    ],
    cta: { heading: "Outgrown your tools?", body: "Walk us through the workflow that hurts the most. We'll show you what purpose-built could look like." },
    related: ["business-systems", "workflow-automation", "crm-solutions", "digital-engineering"],
  },
  {
    slug: "ui-ux-design",
    pillar: "build",
    name: "UI/UX Design",
    icon: "pen-tool",
    short: "Research-led interfaces and design systems that make complex products feel simple.",
    seo: {
      title: "UI/UX Design — Product Design & Design Systems",
      description:
        "Zaqron's UI/UX design practice delivers user research, product design, prototyping and scalable design systems for web and mobile products.",
    },
    hero: {
      eyebrow: "Build · UI/UX Design",
      headline: "Design that makes complex products feel effortless.",
      subheadline:
        "We combine research, interaction design and visual craft to create interfaces people understand at first glance — and design systems your team can scale.",
    },
    intro: {
      heading: "Clarity is a feature",
      body: [
        "Good design is not decoration. It is the difference between a product users adopt and one they abandon, between a support queue and a self-serve experience.",
        "Our designers work alongside engineers from the start, so every screen we design is feasible, consistent and ready to build.",
      ],
    },
    problems: [
      { title: "Users get lost", description: "Navigation and flows reflect internal structure rather than user goals." },
      { title: "Inconsistent interfaces", description: "Every screen looks slightly different, slowing design and development." },
      { title: "Designs that can't be built", description: "Static mockups ignore real data, edge cases and technical constraints." },
      { title: "Decisions by opinion", description: "Without research, product debates are settled by whoever speaks loudest." },
    ],
    approach: [
      { title: "Research before pixels", description: "Interviews, analytics review and usability testing ground decisions in evidence." },
      { title: "Flows before screens", description: "We design journeys and information architecture before visual detail." },
      { title: "Systems over pages", description: "Every component is designed once, documented and reused." },
      { title: "Prototype and validate", description: "Interactive prototypes are tested with real users before development." },
    ],
    deliverables: [
      "User research and journey maps",
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "High-fidelity UI for web and mobile",
      "Design system with tokens and components",
      "Developer handoff and design QA",
    ],
    capabilities: [
      { title: "Product design", description: "End-to-end design for SaaS, apps and platforms." },
      { title: "UX audits", description: "Heuristic and analytics-led reviews with prioritised fixes." },
      { title: "Design systems", description: "Tokens, components and documentation in Figma and code." },
      { title: "Dashboard & data UX", description: "Making dense information scannable and actionable." },
      { title: "Usability testing", description: "Moderated and unmoderated testing with target users." },
      { title: "Brand-to-product", description: "Translating brand identity into a coherent digital language." },
    ],
    useCases: [
      { title: "SaaS redesign", description: "Simplifying a feature-heavy product so new customers reach value in their first session." },
      { title: "Design system rollout", description: "Unifying several products under one component library shared by design and engineering." },
      { title: "MVP prototyping", description: "Testing a product concept with users before committing to development." },
    ],
    technologies: ["Figma", "FigJam", "Framer", "Maze", "Storybook", "Tailwind CSS", "Design tokens", "Lottie"],
    engagementNote: "Design engagements can run standalone or as the first phase of a build — either way, engineers review designs before sign-off.",
    faqs: [
      { question: "Can you work with our in-house developers?", answer: "Yes. We deliver developer-ready design files, documented components and can provide design QA during implementation." },
      { question: "Do you do user research for small budgets?", answer: "Yes. Even five well-chosen user interviews and a lightweight usability test materially de-risk a product decision." },
      { question: "Do you deliver the design system in code?", answer: "We can deliver it in Figma only, or as a coded component library aligned to your frontend stack." },
    ],
    cta: { heading: "Is your product harder to use than it should be?", body: "Share your product or prototype. We'll identify where users struggle and what to fix first." },
    related: ["web-development", "app-development", "saas-development", "digital-engineering"],
  },
];
