import { industries } from "./industries";
import { pillars, solutions } from "./solutions";

const menuLabels: Record<string, string> = {
  "business-systems": "Business Systems",
  "ai-automation": "AI Automation",
};

export const megaMenu = pillars.map((p) => ({
  id: p.id,
  label: p.label,
  title: p.title,
  href: `/solutions/${p.slug}/`,
  items: p.menu.map((slug) => {
    const s = solutions.find((x) => x.slug === slug)!;
    return { name: menuLabels[slug] ?? s.name, href: `/solutions/${slug}/`, short: s.short, icon: s.icon };
  }),
}));

export const industryMenu = industries.map((i) => ({
  name: i.name,
  href: `/industries/${i.slug}/`,
  short: i.short,
  icon: i.icon,
}));

export const primaryNav = [
  { label: "Solutions", href: "/solutions/", menu: "solutions" as const },
  { label: "Industries", href: "/industries/", menu: "industries" as const },
  { label: "Products", href: "/products/" },
  { label: "Our Work", href: "/work/" },
  { label: "Insights", href: "/insights/" },
  { label: "About", href: "/about/" },
];

export const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Digital Engineering", href: "/solutions/digital-engineering/" },
      { label: "AI & Automation", href: "/solutions/ai-automation/" },
      { label: "Growth Marketing", href: "/solutions/growth-marketing/" },
      { label: "Business Systems", href: "/solutions/business-systems/" },
      { label: "AI Agents", href: "/solutions/ai-agents/" },
      { label: "SaaS Development", href: "/solutions/saas-development/" },
      { label: "All solutions", href: "/solutions/" },
    ],
  },
  {
    title: "Industries",
    links: [...industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}/` }))],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Our Work", href: "/work/" },
      { label: "Insights", href: "/insights/" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact", href: "/contact/" },
      { label: "Book a Call", href: "/book-a-call/" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Product Lab", href: "/products/" },
      { label: "Partner with us", href: "/contact/?path=partner" },
    ],
  },
];
