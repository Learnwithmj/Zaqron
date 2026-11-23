import type { Solution } from "@/types/content";

export const automateSolutions: Solution[] = [
  {
    slug: "ai-automation",
    pillar: "automate",
    isPillar: true,
    name: "AI & Business Automation",
    icon: "sparkles",
    short: "Intelligent automation, AI agents and connected business workflows.",
    seo: {
      title: "AI & Business Automation — Intelligent Operations",
      description:
        "Zaqron designs AI-powered automation, AI agents and connected workflows that remove repetitive work, reduce errors and let teams focus on high-value tasks.",
    },
    hero: {
      eyebrow: "Automate · AI & Business Automation",
      headline: "Put repetitive work on autopilot. Keep humans on what matters.",
      subheadline:
        "We combine workflow automation, AI models and your existing systems into operations that run faster, with fewer errors and full visibility.",
    },
    intro: {
      heading: "Automation with judgement",
      body: [
        "Rule-based automation handles predictable steps. AI handles the messy middle — reading documents, classifying requests, drafting responses, extracting data. Together they can take over a large share of the routine work that slows teams down.",
        "We start with your processes, not the hype. Every automation we design has a clear owner, measurable impact, human review where it matters and a fallback when the unexpected happens.",
      ],
    },
    problems: [
      { title: "Skilled people doing data entry", description: "Experienced staff spend hours re-keying information between tools." },
      { title: "Slow response times", description: "Leads, tickets and requests wait in queues because routing is manual." },
      { title: "Errors from copy-paste", description: "Manual transfers introduce mistakes that surface later as rework or lost revenue." },
      { title: "AI pilots that never ship", description: "Experiments stay in demos because nobody connected them to real systems safely." },
    ],
    approach: [
      { title: "Automation opportunity audit", description: "We map processes and rank them by volume, effort, error rate and risk." },
      { title: "Human-in-the-loop by default", description: "AI drafts and recommends; people approve where accuracy or compliance matter." },
      { title: "Connected to real systems", description: "Automations read from and write to your CRM, inbox, ERP and databases." },
      { title: "Measured and monitored", description: "Every workflow reports runs, failures, time saved and exceptions." },
    ],
    deliverables: [
      "Process audit and automation roadmap",
      "AI agents and assistants for defined tasks",
      "Integrated workflow automations",
      "Document and data extraction pipelines",
      "Monitoring dashboards and alerting",
      "Governance, prompt and data-handling policies",
    ],
    capabilities: [
      { title: "AI agents", description: "Task-specific agents that research, qualify, draft and act." },
      { title: "Workflow automation", description: "Event-driven workflows across your SaaS stack." },
      { title: "Conversational automation", description: "WhatsApp, web chat and email assistants." },
      { title: "Document intelligence", description: "Extracting structured data from invoices, forms and contracts." },
      { title: "Knowledge assistants", description: "Internal assistants grounded in your documents and policies." },
      { title: "Reporting automation", description: "Scheduled reports and alerts generated from live data." },
    ],
    useCases: [
      { title: "Lead qualification", description: "New enquiries are enriched, scored and routed to the right salesperson in minutes, with a drafted first reply." },
      { title: "Back-office processing", description: "Invoices and purchase orders are read, validated and entered into accounting with exceptions flagged for review." },
      { title: "Support triage", description: "Incoming requests are categorised, answered from the knowledge base where possible and escalated with context when not." },
    ],
    technologies: ["OpenAI", "Anthropic Claude", "LangGraph", "n8n", "Make", "Zapier", "Python", "Node.js", "Pinecone", "PostgreSQL + pgvector"],
    engagementNote: "Automation engagements start with a short audit that ranks opportunities by value and risk, so the first automation pays for the next.",
    faqs: [
      { question: "Is our data safe with AI models?", answer: "We design for data minimisation, use providers' business tiers that don't train on your data, and keep sensitive processing within your infrastructure where required." },
      { question: "Will automation replace our team?", answer: "Our goal is to remove repetitive work so your team can focus on customers, judgement and growth. Most clients redeploy time rather than reduce headcount." },
      { question: "What if the AI gets something wrong?", answer: "High-impact steps include human review, confidence thresholds and audit logs. Automations fail safely and alert a person when they're unsure." },
      { question: "Do we need a big budget to start?", answer: "No. A single well-chosen automation is often a small, fixed-scope project that proves value quickly." },
    ],
    cta: { heading: "Where is your team losing the most time?", body: "Describe one process that feels manual. We'll show you what automating it could look like." },
    related: ["ai-agents", "workflow-automation", "whatsapp-automation", "crm-solutions"],
  },
  {
    slug: "ai-agents",
    pillar: "automate",
    name: "AI Agents",
    icon: "bot",
    short: "Task-focused AI agents that research, qualify, respond and act inside your systems.",
    seo: {
      title: "AI Agents — Custom AI Agents for Business",
      description:
        "Zaqron builds custom AI agents that handle defined business tasks — lead qualification, support, research and operations — integrated securely with your tools.",
    },
    hero: {
      eyebrow: "Automate · AI Agents",
      headline: "AI agents that do real work — safely, inside your systems.",
      subheadline:
        "Not chatbots that talk in circles. Purpose-built agents with clear jobs, the right tools, guardrails and a human who can step in.",
    },
    intro: {
      heading: "From prompt to production",
      body: [
        "An AI agent is software that can reason over a goal, use tools — your CRM, calendar, database, inbox — and complete multi-step tasks. Done well, it works like a tireless junior teammate. Done badly, it's an unpredictable liability.",
        "We engineer agents the way we engineer software: narrow scope, explicit tools, evaluation datasets, logging, permissions and graceful hand-off to humans.",
      ],
    },
    problems: [
      { title: "Unpredictable outputs", description: "General-purpose chat tools give inconsistent answers with no accountability." },
      { title: "No access to business context", description: "Generic AI doesn't know your products, policies or customers." },
      { title: "Demos that don't survive reality", description: "Prototypes break on edge cases, long conversations and real data." },
      { title: "Security and compliance concerns", description: "Teams worry about data leakage, permissions and audit requirements." },
    ],
    approach: [
      { title: "One agent, one job", description: "Each agent has a defined goal, a limited toolset and clear success criteria." },
      { title: "Grounded in your knowledge", description: "Retrieval over approved documents keeps answers accurate and current." },
      { title: "Evaluated before release", description: "We test against real scenarios and edge cases, tracking accuracy over time." },
      { title: "Guardrails and hand-off", description: "Permission scopes, approval steps and escalation to humans are designed in." },
    ],
    deliverables: [
      "Agent design: goals, tools, guardrails",
      "Knowledge base ingestion and retrieval",
      "Tool integrations (CRM, calendar, email, database)",
      "Evaluation suite and quality benchmarks",
      "Admin console with conversation logs",
      "Deployment on web, WhatsApp, email or Slack",
    ],
    capabilities: [
      { title: "Sales development agents", description: "Research prospects, qualify inbound leads and book meetings." },
      { title: "Customer support agents", description: "Resolve common questions and escalate complex cases with context." },
      { title: "Operations agents", description: "Reconcile data, chase approvals and update records." },
      { title: "Research agents", description: "Gather, summarise and structure information from many sources." },
      { title: "Internal knowledge agents", description: "Answer staff questions from policies and documentation." },
      { title: "Multi-agent workflows", description: "Coordinated agents that pass work between specialised roles." },
    ],
    useCases: [
      { title: "Inbound lead concierge", description: "An agent replies to new enquiries within minutes, asks qualifying questions and books a call on the sales calendar." },
      { title: "Support deflection", description: "An agent resolves routine order and account questions using live data and hands complex issues to staff." },
      { title: "Proposal preparation", description: "An agent assembles first-draft proposals from templates, past work and the client brief for human review." },
    ],
    technologies: ["Anthropic Claude", "OpenAI", "LangGraph", "Vercel AI SDK", "Model Context Protocol", "pgvector", "Pinecone", "Langfuse", "Python", "TypeScript"],
    engagementNote: "Every agent project includes an evaluation phase — we agree on test scenarios and quality thresholds before going live.",
    faqs: [
      { question: "What's the difference between a chatbot and an AI agent?", answer: "A chatbot answers messages. An agent pursues a goal: it can look up data, use tools, take actions and complete tasks across several steps, within the permissions you give it." },
      { question: "Which AI model do you use?", answer: "We're model-agnostic and choose per task based on accuracy, latency, cost and data requirements. Agents can be switched between providers as models improve." },
      { question: "Can an agent take actions without approval?", answer: "Only if you want it to, and only for actions you've approved. Sensitive actions can require a human confirmation step." },
      { question: "How do you measure agent quality?", answer: "With evaluation datasets built from real scenarios, plus production metrics such as resolution rate, escalation rate and user feedback." },
    ],
    cta: { heading: "Have a task an agent could own?", body: "Tell us about the task, the tools involved and the volume. We'll assess whether an agent is the right fit." },
    related: ["ai-automation", "workflow-automation", "whatsapp-automation", "custom-software"],
  },
  {
    slug: "workflow-automation",
    pillar: "automate",
    name: "Workflow Automation",
    icon: "workflow",
    short: "Connected workflows that move data and decisions between your tools automatically.",
    seo: {
      title: "Workflow Automation — Connect Your Business Tools",
      description:
        "Zaqron designs reliable workflow automation that connects your CRM, finance, operations and communication tools, eliminating manual hand-offs.",
    },
    hero: {
      eyebrow: "Automate · Workflow Automation",
      headline: "Stop moving data by hand. Let your tools talk to each other.",
      subheadline:
        "We connect the apps your business already uses into reliable, monitored workflows — so information flows the moment something happens.",
    },
    intro: {
      heading: "The invisible operations layer",
      body: [
        "Most businesses run on a dozen tools that don't share information. People become the integration layer: exporting, copying, reminding and reconciling.",
        "We design an automation layer that listens for events — a new lead, a signed contract, a paid invoice — and triggers the right actions across every system, with logging and alerts when something needs attention.",
      ],
    },
    problems: [
      { title: "Humans as middleware", description: "Staff copy information between CRM, spreadsheets, accounting and messaging." },
      { title: "Things fall through the cracks", description: "Follow-ups, renewals and hand-offs depend on someone remembering." },
      { title: "Fragile automations", description: "Quick zaps built years ago fail silently and nobody knows who owns them." },
      { title: "No process visibility", description: "Managers can't see where work is stuck or how long steps take." },
    ],
    approach: [
      { title: "Map the event chain", description: "We identify the trigger, data, decisions and outcomes for each process." },
      { title: "Pick the right engine", description: "No-code platforms where they fit, custom code where reliability or volume demands it." },
      { title: "Design for failure", description: "Retries, error queues and alerts mean nothing fails silently." },
      { title: "Document and hand over", description: "Every workflow is documented with an owner and change process." },
    ],
    deliverables: [
      "Process maps and automation specification",
      "Integrated multi-step workflows",
      "Custom connectors and API integrations",
      "Error handling, retries and alerting",
      "Workflow monitoring dashboard",
      "Runbooks and team training",
    ],
    capabilities: [
      { title: "Lead-to-customer flows", description: "From form submission to CRM, assignment, follow-up and onboarding." },
      { title: "Order & fulfilment", description: "Orders synced across commerce, inventory, shipping and accounting." },
      { title: "Finance operations", description: "Invoicing, reminders, reconciliation and reporting." },
      { title: "HR & onboarding", description: "Account provisioning, document collection and checklists." },
      { title: "Approvals", description: "Structured approval chains with notifications and audit trails." },
      { title: "Scheduled reporting", description: "Automated KPI reports delivered to inbox or Slack." },
    ],
    useCases: [
      { title: "Client onboarding", description: "A signed proposal automatically creates the project, invoice, shared folder, kickoff booking and welcome email." },
      { title: "E-commerce operations", description: "Orders, stock levels and shipping updates stay in sync across storefront, warehouse and accounting." },
      { title: "Renewal management", description: "Contracts approaching renewal trigger reminders, account reviews and draft quotes automatically." },
    ],
    technologies: ["n8n", "Make", "Zapier", "Pipedream", "Node.js", "Python", "Webhooks", "REST APIs", "Google Workspace", "Microsoft 365"],
    engagementNote: "We typically automate one end-to-end process first, measure the time saved, then expand to adjacent workflows.",
    faqs: [
      { question: "Should we use Zapier, Make, n8n or custom code?", answer: "It depends on volume, complexity, data sensitivity and who will maintain it. We often combine them — no-code for simple flows, code or self-hosted n8n for critical or high-volume processes." },
      { question: "What happens when an automation fails?", answer: "Failures are retried automatically where safe, logged, and routed to a named owner with the context needed to fix them." },
      { question: "Can you fix automations someone else built?", answer: "Yes. We audit existing automations, document them, remove duplicates and rebuild fragile ones." },
    ],
    cta: { heading: "Which process do you repeat every week?", body: "Tell us the tools involved and the steps your team takes. We'll map the automation." },
    related: ["ai-automation", "crm-solutions", "business-systems", "ai-agents"],
  },
  {
    slug: "whatsapp-automation",
    pillar: "automate",
    name: "WhatsApp Automation",
    icon: "message-circle",
    short: "WhatsApp Business API flows for sales, support and notifications at scale.",
    seo: {
      title: "WhatsApp Automation — WhatsApp Business API Solutions",
      description:
        "Zaqron builds WhatsApp Business API automation for lead capture, AI-assisted support, notifications and CRM-connected conversations.",
    },
    hero: {
      eyebrow: "Automate · WhatsApp Automation",
      headline: "Meet customers where they already are — and respond instantly.",
      subheadline:
        "We build WhatsApp Business API experiences that capture leads, answer questions, send updates and sync every conversation with your CRM.",
    },
    intro: {
      heading: "Conversation as a channel",
      body: [
        "In markets like India, the UAE and the UK, WhatsApp is often where customers prefer to talk to businesses. But managing it from a single phone doesn't scale, and generic broadcast tools feel spammy.",
        "We design compliant, two-way WhatsApp experiences on the official Business Platform: guided flows, AI-assisted replies, team inboxes and notifications triggered by real business events.",
      ],
    },
    problems: [
      { title: "One phone, many conversations", description: "Teams share a device, lose context and miss messages." },
      { title: "Slow first responses", description: "Leads go cold while waiting for someone to reply." },
      { title: "No CRM visibility", description: "Conversations never reach the CRM, so history and attribution are lost." },
      { title: "Compliance risk", description: "Unofficial tools risk number bans and breach messaging policies." },
    ],
    approach: [
      { title: "Official API only", description: "Built on the WhatsApp Business Platform through approved providers." },
      { title: "Guided flows + AI", description: "Structured menus for common journeys, AI for natural-language questions." },
      { title: "CRM as source of truth", description: "Contacts, conversations and outcomes are logged automatically." },
      { title: "Opt-in and template governance", description: "Consent capture and pre-approved templates keep messaging compliant." },
    ],
    deliverables: [
      "WhatsApp Business API setup and verification support",
      "Conversation flow design",
      "AI assistant trained on your knowledge base",
      "Shared team inbox with routing",
      "CRM and system integrations",
      "Event-triggered notification templates",
    ],
    capabilities: [
      { title: "Lead capture", description: "Click-to-WhatsApp ads and website widgets that qualify leads." },
      { title: "Appointment booking", description: "Book, reschedule and remind without leaving the chat." },
      { title: "Order updates", description: "Confirmations, shipping and delivery notifications." },
      { title: "AI-assisted support", description: "Instant answers with smooth hand-off to agents." },
      { title: "Catalogue & payments", description: "Product browsing and payment links in conversation." },
      { title: "Broadcasts with consent", description: "Segmented, opt-in campaigns with performance tracking." },
    ],
    useCases: [
      { title: "Property enquiries", description: "Prospects from ads receive instant replies, share preferences and book site visits automatically." },
      { title: "Clinic reminders", description: "Patients confirm, reschedule or cancel appointments with a single reply." },
      { title: "Order support", description: "Shoppers check order status and request returns without waiting for an agent." },
    ],
    technologies: ["WhatsApp Business Platform", "Meta Cloud API", "Twilio", "Gupshup", "Interakt", "OpenAI", "Anthropic Claude", "HubSpot", "Zoho CRM", "n8n"],
    engagementNote: "WhatsApp projects include business verification and template approval planning, which can take a few days on Meta's side.",
    faqs: [
      { question: "Do we need the WhatsApp Business API or is the app enough?", answer: "The app works for a single person. For multiple agents, automation, CRM integration and scale, the Business API is required." },
      { question: "Can we keep our existing number?", answer: "Usually yes, though the number must be migrated from the WhatsApp app to the Business Platform. We guide you through the process." },
      { question: "Will customers know they're talking to AI?", answer: "We recommend being transparent, and always offering an easy route to a human." },
      { question: "Are there messaging costs?", answer: "Yes. Meta charges per conversation category, and providers may add fees. We help you estimate costs before launch." },
    ],
    cta: { heading: "Want WhatsApp to work like a sales and support team?", body: "Tell us how customers contact you today. We'll design the conversation flows." },
    related: ["ai-agents", "lead-generation", "crm-solutions", "ai-automation"],
  },
];
