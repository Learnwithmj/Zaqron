import type { Industry } from "@/types/content";

/**
 * Industry landing pages.
 * Copy describes how Zaqron's capabilities apply to each sector. It intentionally
 * makes no claims about past clients or results — add case studies in
 * src/content/case-studies.ts (with an `industry` matching `name`) and they
 * appear on the relevant page automatically.
 */
export const industries: Industry[] = [
  {
    slug: "startups",
    name: "Startups",
    icon: "rocket",
    short: "From idea to launch — and the systems to scale after it.",
    seo: {
      title: "Technology Partner for Startups — MVPs, Automation & Growth",
      description:
        "Zaqron helps startups and founders validate, design and launch MVPs, automate operations from day one and build repeatable growth systems.",
    },
    hero: {
      headline: "From idea to launch, without building twice.",
      subheadline:
        "Founders need speed without shortcuts that cost a rewrite later. We help you launch a focused product, learn fast and scale on solid foundations.",
    },
    intro: [
      "Early-stage companies live and die by how quickly they turn an idea into something customers use, and how efficiently they learn from it. Every month spent building the wrong thing is runway lost.",
      "Zaqron works as an extended product and engineering team for founders: scoping the smallest launchable product, building it to production standards and putting the automation and growth systems in place so a small team can operate like a larger one.",
    ],
    challenges: [
      { title: "Limited runway", description: "Every engineering decision has to balance speed today with cost tomorrow." },
      { title: "No technical co-founder", description: "Non-technical founders need a partner who can translate vision into architecture." },
      { title: "Scope creep", description: "Without discipline, the MVP grows until it's neither minimal nor launched." },
      { title: "Finding repeatable growth", description: "Early traction often comes from founder effort that doesn't scale." },
    ],
    solutions: [
      { slug: "saas-development", why: "Launch a multi-tenant product with auth and billing ready on day one." },
      { slug: "app-development", why: "Reach customers on mobile with a single cross-platform codebase." },
      { slug: "ui-ux-design", why: "Test concepts with real users before committing engineering budget." },
      { slug: "ai-automation", why: "Run lean operations by automating support, onboarding and admin." },
      { slug: "growth-marketing", why: "Find and scale your first repeatable acquisition channel." },
    ],
    useCases: [
      { title: "MVP in a focused scope", description: "Defining and launching the core workflow that proves your value proposition to early users and investors." },
      { title: "Investor-ready product demo", description: "A polished, working prototype that communicates the vision credibly." },
      { title: "Automated founder operations", description: "Lead capture, onboarding emails, invoicing and reporting running without manual effort." },
    ],
    benefits: [
      { title: "Faster time to market", description: "A defined MVP scope and experienced team shorten the path to launch." },
      { title: "Foundations that last", description: "Production-grade architecture avoids an expensive rebuild after traction." },
      { title: "One partner, full stack", description: "Product, engineering, automation and growth without managing multiple vendors." },
    ],
    cta: { heading: "Got an idea worth building?", body: "Tell us about the problem you're solving. We'll help you define a launchable first version." },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "building",
    short: "Lead systems, CRM automation and digital experiences for property businesses.",
    seo: {
      title: "Real Estate Technology — Lead Management, CRM & Automation",
      description:
        "Zaqron builds real estate technology: property websites, lead capture and qualification, CRM automation, WhatsApp follow-up and sales dashboards.",
    },
    hero: {
      headline: "Respond faster, qualify smarter and close more property deals.",
      subheadline:
        "Real estate runs on speed and follow-up. We build the digital systems that capture every enquiry, qualify it instantly and keep your sales team focused on serious buyers.",
    },
    intro: [
      "Developers, brokerages and property consultants generate enquiries across portals, ads, websites, WhatsApp and walk-ins. The challenge isn't just volume — it's responding quickly, qualifying consistently and following up for months-long buying cycles.",
      "Zaqron connects these channels into one system: a fast property website, automated qualification, a CRM built around your sales stages and follow-up that never forgets.",
    ],
    challenges: [
      { title: "Leads from everywhere", description: "Portals, ads, WhatsApp and calls create scattered, duplicated enquiries." },
      { title: "Slow first response", description: "Interested buyers contact several developers; the first credible reply often wins." },
      { title: "Long buying cycles", description: "Prospects need months of relevant follow-up before deciding." },
      { title: "Low visibility on inventory and pipeline", description: "Sales leaders lack a live view of units, site visits and bookings." },
    ],
    solutions: [
      { slug: "lead-generation", why: "Capture and qualify buyers by budget, location and timeline." },
      { slug: "whatsapp-automation", why: "Instant replies, brochures and site-visit booking on WhatsApp." },
      { slug: "crm-solutions", why: "One pipeline from enquiry to booking with automated follow-ups." },
      { slug: "web-development", why: "Fast project and listing pages with rich media and enquiry flows." },
      { slug: "performance-marketing", why: "Geo-targeted campaigns measured by site visits and bookings." },
    ],
    useCases: [
      { title: "Site-visit automation", description: "Qualified leads pick a slot, receive directions and reminders, and agents get a briefing automatically." },
      { title: "Unified lead inbox", description: "Portal, website and ad leads deduplicated into one CRM with source attribution." },
      { title: "Sales dashboard", description: "Leadership sees enquiries, site visits, bookings and inventory status in real time." },
    ],
    benefits: [
      { title: "No missed enquiries", description: "Every lead is captured, logged and assigned automatically." },
      { title: "Faster response", description: "Automated first replies within minutes, at any hour." },
      { title: "Clear attribution", description: "Know which campaigns and portals actually produce bookings." },
    ],
    cta: { heading: "Losing property leads to slow follow-up?", body: "Show us how enquiries reach your team today. We'll map a faster system." },
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: "shopping-bag",
    short: "Fast storefronts, automated operations and profitable acquisition for online brands.",
    seo: {
      title: "E-commerce Technology & Growth — Storefronts, Automation, Marketing",
      description:
        "Zaqron helps e-commerce brands with high-performance storefronts, order and inventory automation, WhatsApp commerce and profitable performance marketing.",
    },
    hero: {
      headline: "Faster storefronts. Leaner operations. More profitable growth.",
      subheadline:
        "We help online brands improve conversion, automate the operations behind every order and scale acquisition with margin in mind.",
    },
    intro: [
      "E-commerce margins are squeezed from every side: rising acquisition costs, operational complexity and customers who expect instant pages and instant answers.",
      "Zaqron works across the stack — storefront performance, operations automation, customer messaging and paid acquisition — because in e-commerce these problems are connected.",
    ],
    challenges: [
      { title: "Rising acquisition costs", description: "Paid social and search get more expensive while attribution gets harder." },
      { title: "Slow, generic storefronts", description: "Heavy themes and apps hurt conversion, especially on mobile." },
      { title: "Manual operations", description: "Orders, stock, returns and accounting are reconciled by hand." },
      { title: "Repetitive support", description: "\"Where is my order?\" questions consume the support team's day." },
    ],
    solutions: [
      { slug: "web-development", why: "Headless or optimised storefronts built for speed and conversion." },
      { slug: "workflow-automation", why: "Orders, inventory, shipping and accounting kept in sync." },
      { slug: "whatsapp-automation", why: "Order updates, abandoned-cart recovery and support in chat." },
      { slug: "performance-marketing", why: "Campaigns optimised for contribution margin, not just revenue." },
      { slug: "seo", why: "Category and product optimisation for compounding organic traffic." },
    ],
    useCases: [
      { title: "Order-status self-service", description: "Customers get instant tracking answers on WhatsApp or chat without contacting support." },
      { title: "Inventory sync", description: "Stock levels stay accurate across storefront, marketplaces and warehouse." },
      { title: "Margin-aware reporting", description: "Daily reports combining ad spend, product costs and revenue by channel." },
    ],
    benefits: [
      { title: "Higher conversion potential", description: "Faster, clearer storefronts remove friction from the buying journey." },
      { title: "Lower operating effort", description: "Automation absorbs repetitive order and support tasks." },
      { title: "Profit-focused growth", description: "Decisions based on margin, not top-line revenue alone." },
    ],
    cta: { heading: "Scaling an online brand?", body: "Tell us about your store, stack and growth goals. We'll find the biggest levers." },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    short: "Patient-friendly digital experiences and automation, built with privacy in mind.",
    seo: {
      title: "Healthcare Technology — Patient Experience & Clinic Automation",
      description:
        "Zaqron builds healthcare digital solutions — patient-friendly websites, appointment automation, WhatsApp reminders and practice systems — designed with privacy and compliance in mind.",
    },
    hero: {
      headline: "Less admin for your team. A smoother journey for every patient.",
      subheadline:
        "We help clinics, practices and health businesses modernise booking, communication and operations — designed with privacy and regulatory requirements in mind.",
    },
    intro: [
      "Healthcare teams spend a significant share of their time on administration: scheduling, reminders, forms and follow-ups. Patients, meanwhile, expect the same convenience they get from other digital services.",
      "Zaqron designs digital experiences and automations that reduce administrative load and improve patient communication, working alongside your compliance requirements — such as HIPAA, GDPR, UK GDPR or India's DPDP Act — rather than around them.",
    ],
    challenges: [
      { title: "Missed appointments", description: "No-shows cost revenue and leave gaps in schedules." },
      { title: "Administrative overload", description: "Front-desk teams juggle calls, forms and manual reminders." },
      { title: "Fragmented patient communication", description: "Updates are spread across calls, SMS, email and messaging apps." },
      { title: "Privacy requirements", description: "Health data demands careful handling, access control and auditability." },
    ],
    solutions: [
      { slug: "whatsapp-automation", why: "Appointment confirmations, reminders and rescheduling in one reply." },
      { slug: "web-development", why: "Accessible, trustworthy websites with online booking." },
      { slug: "workflow-automation", why: "Digital intake forms and follow-ups without manual effort." },
      { slug: "custom-software", why: "Practice tools and portals with role-based access and audit logs." },
      { slug: "seo", why: "Local search visibility for services and locations." },
    ],
    useCases: [
      { title: "Appointment reminder flow", description: "Patients receive reminders and can confirm or reschedule instantly, freeing up slots for others." },
      { title: "Digital intake", description: "Forms are completed before the visit and routed securely to the right system." },
      { title: "Multi-location booking", description: "Patients choose a location, practitioner and slot from one booking experience." },
    ],
    benefits: [
      { title: "Reduced admin load", description: "Routine communication handled automatically." },
      { title: "Better patient experience", description: "Convenient booking and clear communication." },
      { title: "Privacy-conscious design", description: "Data minimisation, access control and audit trails built in." },
    ],
    cta: { heading: "Modernising patient experience?", body: "Tell us about your practice and current tools. We'll suggest practical, privacy-conscious improvements." },
  },
  {
    slug: "education",
    name: "Education",
    icon: "graduation-cap",
    short: "Enrolment funnels, learning platforms and automation for education providers.",
    seo: {
      title: "Education Technology — Enrolment, Learning Platforms & Automation",
      description:
        "Zaqron builds technology for schools, institutes, edtech and training providers: admission funnels, learning platforms, student communication and CRM automation.",
    },
    hero: {
      headline: "From first enquiry to enrolled student — and every lesson after.",
      subheadline:
        "We help education providers attract applicants, automate admissions and deliver learning experiences students actually engage with.",
    },
    intro: [
      "Schools, colleges, coaching institutes, edtech companies and corporate training providers all face a similar challenge: a long, competitive journey from enquiry to enrolment, followed by the work of keeping learners engaged.",
      "Zaqron builds the systems behind that journey — admissions funnels, counsellor CRMs, communication automation and learning platforms — so your team spends time on students rather than spreadsheets.",
    ],
    challenges: [
      { title: "Competitive admissions season", description: "Enquiries spike, and slow responses mean lost applicants." },
      { title: "Manual counselling workflows", description: "Counsellors track leads in spreadsheets and personal phones." },
      { title: "Disengaged learners", description: "Course completion suffers without timely nudges and support." },
      { title: "Disconnected systems", description: "Admissions, fees, LMS and communication tools don't share data." },
    ],
    solutions: [
      { slug: "lead-generation", why: "Admission funnels that capture and qualify applicants by programme." },
      { slug: "crm-solutions", why: "Counsellor pipelines with automated follow-up and reporting." },
      { slug: "whatsapp-automation", why: "Application updates, fee reminders and class notifications." },
      { slug: "saas-development", why: "Learning platforms and student portals." },
      { slug: "ai-agents", why: "Assistants that answer programme and admissions questions instantly." },
    ],
    useCases: [
      { title: "Admissions pipeline", description: "Every enquiry tracked from first contact through application, counselling and enrolment." },
      { title: "Student communication hub", description: "Automated, personalised updates for schedules, fees and results." },
      { title: "Course platform", description: "A branded learning portal with progress tracking and certificates." },
    ],
    benefits: [
      { title: "Faster applicant response", description: "Automated replies and routing during peak admission periods." },
      { title: "Counsellor productivity", description: "Less admin, more meaningful conversations." },
      { title: "Better learner engagement", description: "Timely nudges and a smoother digital experience." },
    ],
    cta: { heading: "Ready to modernise admissions or learning?", body: "Tell us about your institution and goals. We'll map the right systems." },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "briefcase",
    short: "Client acquisition, delivery automation and systems for firms that sell expertise.",
    seo: {
      title: "Technology for Professional Services Firms — Growth & Automation",
      description:
        "Zaqron helps consultancies, agencies, legal, accounting and advisory firms win clients, automate onboarding and delivery, and run on connected business systems.",
    },
    hero: {
      headline: "Spend your hours on clients — not on admin.",
      subheadline:
        "Consultancies, agencies, legal, accounting and advisory firms sell expertise by the hour. We automate everything around it and build systems that make growth predictable.",
    },
    intro: [
      "In professional services, non-billable work quietly erodes margin: proposal writing, onboarding, document chasing, status updates, invoicing and reporting.",
      "Zaqron helps firms productise and automate these processes, build a reliable pipeline of the right clients and give partners a clear view of utilisation, pipeline and profitability.",
    ],
    challenges: [
      { title: "Feast-or-famine pipeline", description: "New business depends on referrals and partner networks with little predictability." },
      { title: "Non-billable admin", description: "Proposals, onboarding and reporting consume expert time." },
      { title: "Document chasing", description: "Collecting client information and signatures delays every engagement." },
      { title: "Limited visibility", description: "Partners lack a live view of pipeline, utilisation and margins." },
    ],
    solutions: [
      { slug: "lead-generation", why: "Expertise-led funnels that attract and qualify the right clients." },
      { slug: "workflow-automation", why: "Automated onboarding, document collection and engagement letters." },
      { slug: "crm-solutions", why: "A pipeline built around referrals, proposals and retainers." },
      { slug: "ai-agents", why: "First-draft proposals, research and knowledge retrieval." },
      { slug: "business-systems", why: "Dashboards for utilisation, pipeline and profitability." },
    ],
    useCases: [
      { title: "Client onboarding autopilot", description: "Signed engagement triggers document requests, workspace setup, billing and kickoff scheduling." },
      { title: "Proposal assistant", description: "AI drafts proposals from templates and past engagements for partner review." },
      { title: "Partner dashboard", description: "Live view of pipeline, active engagements and billing status." },
    ],
    benefits: [
      { title: "More billable time", description: "Admin and coordination handled automatically." },
      { title: "Predictable pipeline", description: "Systematic demand generation beyond referrals alone." },
      { title: "Consistent client experience", description: "Every client onboarded and served the same high-quality way." },
    ],
    cta: { heading: "Want to scale your firm without scaling admin?", body: "Tell us about your practice and where time goes. We'll show what can be automated." },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
