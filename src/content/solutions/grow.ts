import type { Solution } from "@/types/content";

export const growSolutions: Solution[] = [
  {
    slug: "growth-marketing",
    pillar: "grow",
    isPillar: true,
    name: "Growth & Performance Marketing",
    icon: "trending-up",
    short: "Performance campaigns, acquisition systems and conversion-focused marketing.",
    seo: {
      title: "Growth & Performance Marketing — Acquisition Systems",
      description:
        "Zaqron builds growth systems that connect paid media, SEO, conversion optimisation and CRM data — so marketing spend is measured against revenue, not clicks.",
    },
    hero: {
      eyebrow: "Grow · Growth & Performance Marketing",
      headline: "Growth engineered as a system — not a series of campaigns.",
      subheadline:
        "We connect acquisition, conversion and retention to your data and CRM, so every channel is measured by the revenue it creates.",
    },
    intro: {
      heading: "Marketing with an engineering mindset",
      body: [
        "Many businesses buy traffic but can't say which channels produce customers. Tracking is broken, landing pages are generic and leads disappear between marketing and sales.",
        "We approach growth like engineers: instrument everything, form hypotheses, run disciplined experiments and automate what works. Technology and marketing under one roof means fixes happen in days, not quarters.",
      ],
    },
    problems: [
      { title: "Spend without attribution", description: "Budgets are allocated by platform dashboards rather than closed revenue." },
      { title: "Leaky funnels", description: "Traffic lands on slow, generic pages that don't match the ad's promise." },
      { title: "Marketing–sales disconnect", description: "Leads aren't followed up quickly or consistently." },
      { title: "Plateaued channels", description: "One channel carries the business and costs rise every quarter." },
    ],
    approach: [
      { title: "Measurement foundation", description: "Server-side tracking, clean conversion events and CRM-connected attribution." },
      { title: "Full-funnel planning", description: "Channels, offers and pages designed together around customer intent." },
      { title: "Experiment cadence", description: "A weekly test backlog across creative, audience, landing page and offer." },
      { title: "Automation for follow-up", description: "Instant lead response and nurture sequences close the speed gap." },
    ],
    deliverables: [
      "Growth audit and channel strategy",
      "Tracking plan and analytics implementation",
      "Paid media campaigns across priority channels",
      "SEO roadmap and content strategy",
      "Conversion-focused landing pages",
      "Revenue-level reporting dashboards",
    ],
    capabilities: [
      { title: "Performance marketing", description: "Google, Meta, LinkedIn and other paid channels." },
      { title: "SEO", description: "Technical, content and authority-building programmes." },
      { title: "Lead generation", description: "Systems that capture, qualify and route demand." },
      { title: "Conversion optimisation", description: "Testing pages, forms and offers to lift conversion." },
      { title: "Marketing automation", description: "Nurture, scoring and lifecycle messaging." },
      { title: "Analytics & attribution", description: "Dashboards that connect spend to revenue." },
    ],
    useCases: [
      { title: "Startup go-to-market", description: "Finding the first repeatable acquisition channel with a disciplined testing budget." },
      { title: "Scaling a proven channel", description: "Expanding spend profitably by improving tracking, creative velocity and landing pages." },
      { title: "Diversifying acquisition", description: "Reducing dependence on a single channel by building organic and partner growth." },
    ],
    technologies: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Google Tag Manager", "Looker Studio", "HubSpot", "Search Console", "Ahrefs", "Hotjar"],
    engagementNote: "Growth engagements begin with a tracking and funnel audit — we won't scale spend on data we can't trust.",
    faqs: [
      { question: "Do you guarantee results?", answer: "No responsible partner can guarantee specific numbers. We commit to a transparent process, clear targets agreed together and honest reporting on what is and isn't working." },
      { question: "What budget do we need?", answer: "It depends on your market and goals. We'll recommend a test budget that can produce statistically meaningful learnings before scaling." },
      { question: "Do you work with our existing agency or team?", answer: "Yes. We can own specific channels, the technical layer, or act as a strategic partner to your in-house team." },
    ],
    cta: { heading: "Ready to grow with clarity?", body: "Share your current channels and goals. We'll show you where growth is leaking." },
    related: ["performance-marketing", "seo", "lead-generation", "crm-solutions"],
  },
  {
    slug: "performance-marketing",
    pillar: "grow",
    name: "Performance Marketing",
    icon: "target",
    short: "Paid acquisition across search and social, optimised for revenue.",
    seo: {
      title: "Performance Marketing — Google, Meta & LinkedIn Ads",
      description:
        "Zaqron runs revenue-focused performance marketing across Google, Meta and LinkedIn with clean tracking, creative testing and conversion-focused landing pages.",
    },
    hero: {
      eyebrow: "Grow · Performance Marketing",
      headline: "Paid media measured by revenue, not by clicks.",
      subheadline:
        "We plan, launch and optimise campaigns with the tracking, creative and landing pages needed to turn ad spend into profitable growth.",
    },
    intro: {
      heading: "Every rupee, dollar and pound accountable",
      body: [
        "Ad platforms are increasingly automated. The advantage now comes from what you feed them: accurate conversion signals, strong creative, relevant landing pages and clean audience data.",
        "We focus on those inputs — and report outcomes in terms your finance team recognises: cost per qualified lead, cost per acquisition and return on ad spend.",
      ],
    },
    problems: [
      { title: "Optimising for the wrong signal", description: "Campaigns chase cheap clicks or form fills that never become customers." },
      { title: "Creative fatigue", description: "The same ads run for months while performance quietly declines." },
      { title: "Broken tracking", description: "Browser privacy changes and misconfigured tags undercount conversions." },
      { title: "Generic landing pages", description: "Every ad points at the homepage, wasting intent." },
    ],
    approach: [
      { title: "Conversion signal quality", description: "Server-side events and offline conversion imports teach platforms what a good customer looks like." },
      { title: "Structured creative testing", description: "Regular creative iterations testing hooks, formats and offers." },
      { title: "Intent-matched pages", description: "Dedicated landing pages for each audience and campaign theme." },
      { title: "Budget by marginal return", description: "Spend moves to where the next unit of budget performs best." },
    ],
    deliverables: [
      "Account audit and campaign architecture",
      "Conversion tracking and offline conversion setup",
      "Ad creative concepts and copy",
      "Landing pages and A/B tests",
      "Weekly optimisation and budget management",
      "Monthly performance reviews",
    ],
    capabilities: [
      { title: "Google Ads", description: "Search, Performance Max, YouTube and Demand Gen." },
      { title: "Meta Ads", description: "Facebook and Instagram prospecting and retargeting." },
      { title: "LinkedIn Ads", description: "B2B targeting by role, company and industry." },
      { title: "Retargeting", description: "Re-engaging visitors across channels with relevant messaging." },
      { title: "Lead forms & instant experiences", description: "Native lead capture synced to CRM." },
      { title: "Tracking & attribution", description: "GA4, server-side tagging and CRM attribution." },
    ],
    useCases: [
      { title: "B2B pipeline", description: "LinkedIn and search campaigns targeting decision-makers, measured by qualified pipeline." },
      { title: "E-commerce growth", description: "Shopping and social campaigns optimised for contribution margin, not just revenue." },
      { title: "Local lead generation", description: "Geo-targeted campaigns for service businesses feeding a fast follow-up process." },
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "GA4", "Google Tag Manager", "Server-side GTM", "Meta Conversions API", "Looker Studio"],
    engagementNote: "We start with an audit and tracking fix before changing budgets, so optimisation decisions rest on accurate data.",
    faqs: [
      { question: "Which platform should we advertise on?", answer: "Wherever your customers show intent or attention at a cost your margins support. For most B2B that's search and LinkedIn; for consumer brands it's usually Meta and Google." },
      { question: "Do you charge a percentage of ad spend?", answer: "We prefer a fixed management fee tied to scope, so our advice isn't influenced by how much you spend." },
      { question: "Who owns the ad accounts?", answer: "You do. We work inside accounts owned by your business." },
    ],
    cta: { heading: "Is your ad spend working as hard as it could?", body: "Give us access to your current setup and we'll audit the gaps before you spend another month." },
    related: ["growth-marketing", "lead-generation", "seo", "web-development"],
  },
  {
    slug: "seo",
    pillar: "grow",
    name: "SEO",
    icon: "search",
    short: "Technical, content and authority SEO that compounds organic growth.",
    seo: {
      title: "SEO Services — Technical SEO, Content & Authority",
      description:
        "Zaqron delivers technical SEO, content strategy and authority building for businesses that want sustainable, compounding organic growth and AI search visibility.",
    },
    hero: {
      eyebrow: "Grow · SEO",
      headline: "Organic growth that compounds — in search and in AI answers.",
      subheadline:
        "We combine technical excellence, genuinely useful content and authority building to make your business the obvious answer for the questions your customers ask.",
    },
    intro: {
      heading: "SEO for how people search now",
      body: [
        "Search is changing. Customers ask longer questions, AI overviews summarise answers and assistants cite sources. The fundamentals still win: fast, crawlable sites, clear expertise and content that answers real questions better than anyone else.",
        "Because we build websites as well as optimise them, technical fixes don't wait in a developer queue — they ship.",
      ],
    },
    problems: [
      { title: "Technical barriers", description: "Slow pages, crawl errors and poor site architecture hold rankings back." },
      { title: "Content without strategy", description: "Blog posts are published without search intent, structure or internal linking." },
      { title: "Low authority", description: "Few credible sites reference you, so competitors outrank better content." },
      { title: "Invisible in AI answers", description: "Brands without clear entity signals are rarely cited by AI search tools." },
    ],
    approach: [
      { title: "Technical foundation", description: "Crawlability, Core Web Vitals, structured data and site architecture." },
      { title: "Intent-led content", description: "Topic clusters mapped to the customer journey and commercial priorities." },
      { title: "Authority building", description: "Digital PR, partnerships and expert content that earns links legitimately." },
      { title: "Measure business impact", description: "Reporting on qualified traffic, leads and revenue — not vanity rankings." },
    ],
    deliverables: [
      "Technical SEO audit and fixes",
      "Keyword and topic research",
      "Content strategy and editorial calendar",
      "On-page optimisation and internal linking",
      "Structured data and entity optimisation",
      "Monthly reporting tied to leads",
    ],
    capabilities: [
      { title: "Technical SEO", description: "Audits, migrations, rendering and performance." },
      { title: "Content SEO", description: "Briefs, writing and optimisation by subject." },
      { title: "Local SEO", description: "Google Business Profile and location pages." },
      { title: "International SEO", description: "Hreflang and multi-region site structures." },
      { title: "E-commerce SEO", description: "Category, product and faceted navigation optimisation." },
      { title: "AI search visibility", description: "Entity clarity and citable content for AI answers." },
    ],
    useCases: [
      { title: "Site migration", description: "Moving to a new platform without losing organic traffic." },
      { title: "B2B thought leadership", description: "Building topic authority that brings in decision-makers researching solutions." },
      { title: "Multi-city service business", description: "Ranking in each target city with genuinely useful location content." },
    ],
    technologies: ["Google Search Console", "GA4", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights", "Schema.org", "Next.js"],
    engagementNote: "SEO is a compounding investment — we plan in quarters, with technical fixes front-loaded in the first month.",
    faqs: [
      { question: "How long does SEO take to show results?", answer: "Technical fixes can show impact within weeks; content and authority typically take three to six months to build momentum, depending on competition." },
      { question: "Do you use AI to write content?", answer: "We use AI to speed up research and drafting, but every piece is shaped, fact-checked and edited by people with subject knowledge." },
      { question: "Can you guarantee first-page rankings?", answer: "No. Anyone who guarantees rankings is either targeting irrelevant keywords or taking risks with your domain." },
    ],
    cta: { heading: "Want search to become your most reliable channel?", body: "Share your site and target markets. We'll show you the biggest organic opportunities." },
    related: ["growth-marketing", "web-development", "lead-generation", "performance-marketing"],
  },
  {
    slug: "lead-generation",
    pillar: "grow",
    name: "Lead Generation",
    icon: "magnet",
    short: "Systems that capture, qualify and route demand to sales — automatically.",
    seo: {
      title: "Lead Generation Systems — Capture, Qualify, Convert",
      description:
        "Zaqron builds lead generation systems combining targeted acquisition, conversion-focused funnels, instant follow-up and CRM automation.",
    },
    hero: {
      eyebrow: "Grow · Lead Generation",
      headline: "More qualified conversations — with less manual chasing.",
      subheadline:
        "We build end-to-end lead systems: the offer, the funnel, instant follow-up and the CRM workflow that makes sure no opportunity goes cold.",
    },
    intro: {
      heading: "Lead generation is a system",
      body: [
        "Generating leads is only half the job. Response speed and follow-up discipline matter just as much, and slow replies let good opportunities go cold.",
        "We design the full system — from targeting to the first sales conversation — and automate the steps where speed matters most.",
      ],
    },
    problems: [
      { title: "Low-quality leads", description: "Volume is high but sales can't close what marketing sends." },
      { title: "Slow follow-up", description: "Leads wait hours or days for a first response." },
      { title: "No qualification", description: "Sales time is spent on prospects who were never a fit." },
      { title: "Unclear source of truth", description: "Nobody knows which campaigns produce pipeline." },
    ],
    approach: [
      { title: "Ideal customer definition", description: "Clear fit criteria agreed between marketing and sales." },
      { title: "Value-led offers", description: "Assessments, calculators and consultations that attract the right buyers." },
      { title: "Instant response", description: "Automated replies, booking links and WhatsApp follow-ups within minutes." },
      { title: "Closed-loop reporting", description: "Lead source to closed deal, visible in one dashboard." },
    ],
    deliverables: [
      "Ideal customer profile and qualification criteria",
      "Lead magnets and conversion funnels",
      "Landing pages and multi-step forms",
      "Lead scoring and routing automation",
      "Email and WhatsApp follow-up sequences",
      "Pipeline attribution dashboard",
    ],
    capabilities: [
      { title: "Inbound funnels", description: "Search, social and content-driven lead capture." },
      { title: "Outbound systems", description: "Targeted, personalised outreach with compliant data." },
      { title: "Qualification flows", description: "Smart forms and chat that qualify before booking." },
      { title: "Lead routing", description: "Round-robin, territory or skill-based assignment." },
      { title: "Nurture programmes", description: "Sequences for leads not yet ready to buy." },
      { title: "Booking automation", description: "Self-serve scheduling connected to sales calendars." },
    ],
    useCases: [
      { title: "Consultancy pipeline", description: "A diagnostic offer captures prospects, qualifies them and books calls directly with the right partner." },
      { title: "Real estate enquiries", description: "Property leads from ads are qualified on budget and timeline and routed to agents instantly." },
      { title: "SaaS demo requests", description: "Demo requests are enriched, scored and sent to sales with company context." },
    ],
    technologies: ["HubSpot", "Zoho CRM", "Pipedrive", "Salesforce", "Cal.com", "Calendly", "Apollo", "WhatsApp Business API", "n8n", "Typeform"],
    engagementNote: "Lead generation projects begin with a sales alignment session — defining what a qualified lead means before we generate any.",
    faqs: [
      { question: "Do you sell lead lists?", answer: "No. We build systems that generate and qualify demand for your business; any outbound data is sourced compliantly for your specific targeting." },
      { question: "Can you work with our current CRM?", answer: "Yes. We integrate with most major CRMs, or help you choose and set one up if you don't have one yet." },
      { question: "How quickly can a lead system go live?", answer: "A focused funnel with automated follow-up can typically launch within a few weeks of kickoff, depending on content and approvals." },
    ],
    cta: { heading: "Need a steadier flow of qualified leads?", body: "Tell us who your ideal customer is and how you sell today. We'll design the system." },
    related: ["performance-marketing", "crm-solutions", "whatsapp-automation", "growth-marketing"],
  },
];
