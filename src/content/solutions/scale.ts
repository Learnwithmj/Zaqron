import type { Solution } from "@/types/content";

export const scaleSolutions: Solution[] = [
  {
    slug: "business-systems",
    pillar: "scale",
    isPillar: true,
    name: "Business Systems & SaaS",
    icon: "boxes",
    short: "CRM systems, business intelligence and scalable SaaS solutions.",
    seo: {
      title: "Business Systems & SaaS — Scalable Operating Infrastructure",
      description:
        "Zaqron designs the business systems growing companies run on: CRM, operations platforms, business intelligence dashboards and scalable SaaS products.",
    },
    hero: {
      eyebrow: "Scale · Business Systems & SaaS",
      headline: "The operating system for a business that's ready to scale.",
      subheadline:
        "We design connected systems — CRM, operations, data and dashboards — that give leaders clarity and let teams grow without chaos.",
    },
    intro: {
      heading: "Growth breaks informal systems",
      body: [
        "What worked at ten people breaks at fifty. Customer data lives in inboxes, reports take days to compile and every new hire learns a different version of the process.",
        "We build the system layer a scaling business needs: a single customer record, standardised workflows, real-time dashboards and — when your know-how is the product — SaaS platforms that turn it into recurring revenue.",
      ],
    },
    problems: [
      { title: "No single source of truth", description: "Every team has its own spreadsheet and its own numbers." },
      { title: "Leadership flying blind", description: "Reports are manual, late and argued over." },
      { title: "Processes in people's heads", description: "Knowledge leaves when people do; onboarding is slow." },
      { title: "Tools that don't scale", description: "Systems chosen in the early days can't handle current volume or complexity." },
    ],
    approach: [
      { title: "System architecture", description: "We design how CRM, operations, finance and data tools fit together." },
      { title: "Configure before custom", description: "Proven platforms configured properly, custom-built only where needed." },
      { title: "Data model discipline", description: "Clean, consistent data definitions that make reporting trustworthy." },
      { title: "Adoption plan", description: "Training, documentation and champions so systems actually get used." },
    ],
    deliverables: [
      "Systems audit and target architecture",
      "CRM implementation and migration",
      "Operations and workflow platforms",
      "Business intelligence dashboards",
      "SaaS product strategy and development",
      "Training, documentation and support",
    ],
    capabilities: [
      { title: "CRM solutions", description: "HubSpot, Zoho, Salesforce or custom CRM." },
      { title: "Business intelligence", description: "KPI dashboards across sales, operations and finance." },
      { title: "Operations platforms", description: "Systems for projects, inventory, service and delivery." },
      { title: "SaaS development", description: "Multi-tenant products with billing and analytics." },
      { title: "Data integration", description: "Pipelines that unify data from every tool." },
      { title: "Process standardisation", description: "Documented, repeatable workflows embedded in tools." },
    ],
    useCases: [
      { title: "Founder dashboard", description: "Leadership sees revenue, pipeline, delivery and cash in one live view." },
      { title: "CRM consolidation", description: "Three disconnected tools merged into one CRM with clean history." },
      { title: "Productising a service", description: "A service business turns its methodology into a subscription platform." },
    ],
    technologies: ["HubSpot", "Zoho", "Salesforce", "Odoo", "Power BI", "Looker Studio", "Metabase", "PostgreSQL", "Next.js", "Stripe"],
    engagementNote: "Business systems work starts with a systems audit so recommendations are grounded in how your teams work today.",
    faqs: [
      { question: "Should we buy software or build our own?", answer: "Buy for standard functions where proven platforms exist; build where your process is a genuine differentiator. We'll give you an honest recommendation either way." },
      { question: "Can you migrate our data from old systems?", answer: "Yes. Migration planning, data cleansing and validation are part of our implementation process." },
      { question: "How do you make sure teams adopt the new system?", answer: "We involve end users early, design around their workflows and provide role-based training and documentation." },
    ],
    cta: { heading: "Is your business outgrowing its systems?", body: "Tell us where information gets stuck. We'll map the system architecture you need next." },
    related: ["crm-solutions", "saas-development", "custom-software", "workflow-automation"],
  },
  {
    slug: "crm-solutions",
    pillar: "scale",
    name: "CRM Solutions",
    icon: "users",
    short: "CRM strategy, implementation and automation your sales team will actually use.",
    seo: {
      title: "CRM Solutions — Implementation, Migration & Automation",
      description:
        "Zaqron implements and automates CRM systems including HubSpot, Zoho and Salesforce — or builds custom CRM — with clean data and adoption built in.",
    },
    hero: {
      eyebrow: "Scale · CRM Solutions",
      headline: "A CRM your team trusts — and actually uses.",
      subheadline:
        "We implement, migrate, integrate and automate CRM platforms so every customer interaction is visible and every follow-up happens on time.",
    },
    intro: {
      heading: "Most CRMs fail on adoption, not features",
      body: [
        "Many CRM projects disappoint because the system was configured around the software rather than the sales process. Reps avoid it, data decays and leadership loses visibility.",
        "We start from your pipeline stages, roles and handoffs, then configure the CRM — and automate the admin — so using it is easier than not using it.",
      ],
    },
    problems: [
      { title: "Low adoption", description: "Sales teams keep notes elsewhere because the CRM feels like admin." },
      { title: "Dirty data", description: "Duplicates, missing fields and inconsistent stages make reports useless." },
      { title: "Disconnected channels", description: "Calls, emails, WhatsApp and website leads never reach the CRM." },
      { title: "Manual follow-ups", description: "Tasks and reminders depend on memory, so deals stall." },
    ],
    approach: [
      { title: "Process before platform", description: "Pipeline stages, definitions and ownership agreed first." },
      { title: "Automate the admin", description: "Activity logging, task creation and reminders happen automatically." },
      { title: "Connect every channel", description: "Website, ads, email, phone and WhatsApp feed one record." },
      { title: "Reporting leadership trusts", description: "Dashboards built on clean, validated data." },
    ],
    deliverables: [
      "CRM selection advice and process design",
      "Implementation and configuration",
      "Data migration and deduplication",
      "Integrations with website, ads, email and messaging",
      "Sales automation and sequences",
      "Dashboards, training and documentation",
    ],
    capabilities: [
      { title: "HubSpot", description: "Sales, Marketing and Service Hub implementations." },
      { title: "Zoho CRM", description: "Configuration, Blueprint automation and Zoho One integration." },
      { title: "Salesforce", description: "Sales Cloud configuration and integration." },
      { title: "Custom CRM", description: "Purpose-built CRM for unique sales models." },
      { title: "CRM automation", description: "Workflows, scoring, routing and sequences." },
      { title: "CRM rescue", description: "Clean-up and re-implementation of struggling CRMs." },
    ],
    useCases: [
      { title: "First CRM", description: "A growing team moves from spreadsheets to a CRM with a defined pipeline and automated follow-ups." },
      { title: "CRM migration", description: "Moving years of customer history to a new CRM without losing context." },
      { title: "Multi-channel sales", description: "Unifying website, phone and WhatsApp leads into one pipeline with routing rules." },
    ],
    technologies: ["HubSpot", "Zoho CRM", "Salesforce", "Pipedrive", "Freshsales", "WhatsApp Business API", "n8n", "Make", "Looker Studio"],
    engagementNote: "CRM projects include sales-team workshops in week one — the people who'll use the system shape its design.",
    faqs: [
      { question: "Which CRM is best for us?", answer: "There's no universal answer. We compare options against your sales model, team size, integrations and budget, and recommend one we'd be comfortable supporting long term." },
      { question: "Can you fix a CRM we already have?", answer: "Yes. Many engagements are rescues: cleaning data, simplifying stages, adding automation and retraining teams." },
      { question: "Do you provide ongoing CRM administration?", answer: "Yes, through a monthly support arrangement covering changes, reporting and user support." },
    ],
    cta: { heading: "Ready for a CRM that drives revenue?", body: "Tell us about your sales process and current tools. We'll recommend the right setup." },
    related: ["lead-generation", "workflow-automation", "business-systems", "whatsapp-automation"],
  },
  {
    slug: "saas-development",
    pillar: "scale",
    name: "SaaS Development",
    icon: "rocket",
    short: "Multi-tenant SaaS platforms — from MVP to scale — with billing, roles and analytics.",
    seo: {
      title: "SaaS Development — Build and Scale Your SaaS Product",
      description:
        "Zaqron designs and engineers SaaS products: multi-tenant architecture, subscriptions and billing, roles and permissions, analytics and scalable cloud infrastructure.",
    },
    hero: {
      eyebrow: "Scale · SaaS Development",
      headline: "Turn your idea or expertise into a scalable SaaS product.",
      subheadline:
        "We build SaaS platforms with the foundations that matter from day one — multi-tenancy, billing, security and analytics — so you can focus on customers.",
    },
    intro: {
      heading: "The foundations nobody sees",
      body: [
        "Every SaaS product needs the same invisible foundations: authentication, organisations and roles, subscription billing, usage limits, audit logs, onboarding and analytics. Getting them wrong is expensive to fix later.",
        "We build those foundations properly and quickly, then spend your budget on what makes your product different.",
      ],
    },
    problems: [
      { title: "MVPs that can't scale", description: "Single-tenant prototypes need rebuilding before the first enterprise deal." },
      { title: "Billing complexity", description: "Plans, trials, usage pricing and taxes become a tangle of edge cases." },
      { title: "Security reviews", description: "Larger customers ask for controls the product doesn't have." },
      { title: "No product analytics", description: "Teams can't see activation, retention or feature usage." },
    ],
    approach: [
      { title: "Multi-tenant from the start", description: "Organisation-level data isolation, roles and permissions designed in." },
      { title: "Proven building blocks", description: "Battle-tested services for auth, billing and email reduce risk and time." },
      { title: "Instrumented product", description: "Activation and retention events tracked from the first release." },
      { title: "Enterprise-ready path", description: "SSO, audit logs and data controls planned into the roadmap." },
    ],
    deliverables: [
      "Product strategy and MVP scope",
      "SaaS UX and design system",
      "Multi-tenant application and APIs",
      "Subscription billing and plan management",
      "Admin console and product analytics",
      "Cloud infrastructure and CI/CD",
    ],
    capabilities: [
      { title: "B2B SaaS", description: "Team workspaces, roles, SSO and integrations." },
      { title: "Vertical SaaS", description: "Industry-specific platforms for defined workflows." },
      { title: "AI-native SaaS", description: "Products built around AI models and agents." },
      { title: "Billing & monetisation", description: "Subscriptions, usage-based pricing and invoicing." },
      { title: "Public APIs", description: "Documented APIs and webhooks for customers." },
      { title: "Scale & reliability", description: "Performance, caching and observability at growth stage." },
    ],
    useCases: [
      { title: "Founder MVP", description: "A domain expert launches a SaaS MVP to design partners with billing ready on day one." },
      { title: "Productised service", description: "An agency or consultancy turns its internal tool into a subscription product." },
      { title: "Scaling an existing SaaS", description: "Re-architecting an early product for multi-tenancy and enterprise requirements." },
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Clerk", "Auth.js", "AWS", "Vercel"],
    engagementNote: "SaaS engagements begin with a product definition sprint covering positioning, pricing model and MVP scope.",
    faqs: [
      { question: "How long does it take to build a SaaS MVP?", answer: "It depends on scope. A focused MVP with core workflows, auth and billing is typically a matter of a few months, not a year. Discovery gives you a concrete estimate." },
      { question: "Can you help with pricing and positioning?", answer: "Yes. We help define plans, pricing metrics and the onboarding experience as part of product strategy." },
      { question: "Will the product be ready for enterprise customers?", answer: "We design the architecture so enterprise features like SSO, audit logs and data controls can be added without a rewrite." },
    ],
    cta: { heading: "Building a SaaS product?", body: "Tell us about your idea, market and stage. We'll help you define a launchable MVP." },
    related: ["digital-engineering", "ui-ux-design", "ai-agents", "business-systems"],
  },
];
