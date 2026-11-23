import type { Pillar, Solution } from "@/types/content";
import { buildSolutions } from "./build";
import { automateSolutions } from "./automate";
import { growSolutions } from "./grow";
import { scaleSolutions } from "./scale";

export const solutions: Solution[] = [...buildSolutions, ...automateSolutions, ...growSolutions, ...scaleSolutions];

export const pillars: {
  id: Pillar;
  label: string;
  title: string;
  description: string;
  slug: string;
  icon: Solution["icon"];
  /** Solutions shown in the mega menu, in order */
  menu: string[];
  highlights: string[];
}[] = [
  {
    id: "build",
    label: "Build",
    title: "Digital Engineering",
    description: "Websites, applications, software and digital products designed for modern businesses.",
    slug: "digital-engineering",
    icon: "layers",
    menu: ["digital-engineering", "web-development", "app-development", "custom-software"],
    highlights: ["Web platforms", "Mobile apps", "Custom software", "UI/UX design"],
  },
  {
    id: "automate",
    label: "Automate",
    title: "AI & Business Automation",
    description: "Intelligent automation, AI agents and connected business workflows.",
    slug: "ai-automation",
    icon: "sparkles",
    menu: ["ai-agents", "workflow-automation", "whatsapp-automation"],
    highlights: ["AI agents", "Workflow automation", "WhatsApp automation", "Document intelligence"],
  },
  {
    id: "grow",
    label: "Grow",
    title: "Growth & Performance Marketing",
    description: "Performance campaigns, acquisition systems and conversion-focused marketing.",
    slug: "growth-marketing",
    icon: "trending-up",
    menu: ["performance-marketing", "seo", "lead-generation"],
    highlights: ["Performance marketing", "SEO", "Lead generation", "Analytics & attribution"],
  },
  {
    id: "scale",
    label: "Scale",
    title: "Business Systems & SaaS",
    description: "CRM systems, business intelligence and scalable SaaS solutions.",
    slug: "business-systems",
    icon: "boxes",
    menu: ["crm-solutions", "business-systems", "saas-development"],
    highlights: ["CRM solutions", "Business intelligence", "Operations platforms", "SaaS development"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function getSolutionsByPillar(pillar: Pillar) {
  return solutions.filter((s) => s.pillar === pillar);
}
