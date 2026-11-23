"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Building2, Handshake, Rocket } from "lucide-react";
import { serviceOptions } from "@/lib/inquiry-schema";
import { cn } from "@/lib/utils";
import { BusinessInquiryForm, PartnershipForm, StartupInquiryForm } from "./InquiryForms";

type PathId = "startup" | "business" | "partner";

const paths: { id: PathId; label: string; cta: string; blurb: string; icon: typeof Rocket }[] = [
  { id: "startup", label: "Startups", cta: "Build My Idea", blurb: "From idea to launch — MVPs, products and first growth.", icon: Rocket },
  { id: "business", label: "Established Businesses", cta: "Transform My Business", blurb: "Automation, systems and growth for operating companies.", icon: Building2 },
  { id: "partner", label: "Agency Partners", cta: "Become a Partner", blurb: "White-label delivery and technology partnerships.", icon: Handshake },
];

// Solution slug → form service option (prefill from ?service=)
const serviceBySlug: Record<string, (typeof serviceOptions)[number]> = {
  "web-development": "Web Development",
  "app-development": "App Development",
  "custom-software": "Custom Software",
  "ui-ux-design": "UI/UX Design",
  "saas-development": "SaaS Development",
  "ai-agents": "AI Agents",
  "ai-automation": "Workflow Automation",
  "workflow-automation": "Workflow Automation",
  "whatsapp-automation": "WhatsApp Automation",
  "performance-marketing": "Performance Marketing",
  "growth-marketing": "Performance Marketing",
  seo: "SEO",
  "lead-generation": "Lead Generation",
  "crm-solutions": "CRM Solutions",
  "business-systems": "Business Systems",
};

const industryBySlug: Record<string, string> = {
  startups: "Startups / Technology",
  "real-estate": "Real Estate",
  ecommerce: "E-commerce / Retail",
  healthcare: "Healthcare",
  education: "Education",
  "professional-services": "Professional Services",
};

export function InquiryExperience() {
  const params = useSearchParams();
  const qPath = params.get("path");
  const qIndustry = params.get("industry") ?? "";
  const qService = params.get("service") ?? "";
  const initial: PathId =
    qPath === "startup" || qPath === "business" || qPath === "partner" ? qPath : qIndustry === "startups" ? "startup" : "business";
  const [active, setActive] = useState<PathId>(initial);
  const reduce = useReducedMotion();
  const prefill = {
    services: serviceBySlug[qService] ? [serviceBySlug[qService]] : [],
    industry: industryBySlug[qIndustry],
  };

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + paths.length) % paths.length;
    setActive(paths[next].id);
    document.getElementById(`tab-${paths[next].id}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Choose your enquiry type" className="grid gap-3 md:grid-cols-3">
        {paths.map((p, i) => {
          const on = active === p.id;
          return (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`panel-${p.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(p.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={cn(
                "group relative flex items-start gap-4 overflow-hidden rounded-[16px] border p-5 text-left transition-[border-color,background-color] duration-300",
                on ? "border-blue/60 bg-blue/[0.08]" : "border-line bg-card/60 hover:border-line-strong",
              )}
            >
              {on && <motion.span layoutId="tab-glow" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue via-purple to-transparent" aria-hidden="true" />}
              <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border", on ? "border-blue/50 bg-blue/15 text-blue-soft" : "border-line bg-bg text-muted")}>
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">Path {String.fromCharCode(65 + i)}</span>
                <span className="mt-1 block font-semibold text-fg">{p.label}</span>
                <span className="mt-1 block text-sm leading-snug text-muted">{p.blurb}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-[20px] border border-line bg-card/60 p-5 sm:p-8 lg:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">{paths.find((p) => p.id === active)!.cta}</h2>
            {active === "startup" && <StartupInquiryForm prefill={prefill} />}
            {active === "business" && <BusinessInquiryForm prefill={prefill} />}
            {active === "partner" && <PartnershipForm prefill={prefill} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
