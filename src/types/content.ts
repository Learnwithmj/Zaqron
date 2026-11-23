/**
 * ZAQRON content model.
 * These types are the contract between local content files, the Sanity schemas
 * in /sanity/schemas, and the page templates.
 */

export type IconName =
  | "layers"
  | "code"
  | "smartphone"
  | "cpu"
  | "pen-tool"
  | "sparkles"
  | "bot"
  | "workflow"
  | "message-circle"
  | "trending-up"
  | "target"
  | "search"
  | "magnet"
  | "database"
  | "users"
  | "boxes"
  | "rocket"
  | "building"
  | "shopping-bag"
  | "heart-pulse"
  | "graduation-cap"
  | "briefcase"
  | "handshake"
  | "network"
  | "compass"
  | "shield"
  | "gauge"
  | "zap"
  | "refresh"
  | "line-chart"
  | "plug"
  | "infinity";

export type Pillar = "build" | "automate" | "grow" | "scale";

export interface FAQ {
  question: string;
  answer: string;
}

export interface TitledText {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  pillar: Pillar;
  /** Pillar landing pages (digital-engineering, ai-automation, growth-marketing, business-systems) */
  isPillar?: boolean;
  name: string;
  icon: IconName;
  /** One-line summary used on cards and in the mega menu */
  short: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; headline: string; subheadline: string };
  intro: { heading: string; body: string[] };
  problems: TitledText[];
  approach: TitledText[];
  deliverables: string[];
  capabilities: TitledText[];
  useCases: TitledText[];
  technologies: string[];
  /** Optional service-specific note shown above the shared engagement process */
  engagementNote: string;
  faqs: FAQ[];
  cta: { heading: string; body: string };
  related: string[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  short: string;
  seo: { title: string; description: string };
  hero: { headline: string; subheadline: string };
  intro: string[];
  challenges: TitledText[];
  solutions: { slug: string; why: string }[];
  useCases: TitledText[];
  benefits: TitledText[];
  cta: { heading: string; body: string };
}

export type ProductStatus = "live" | "beta" | "coming-soon";

export interface Product {
  slug: string;
  name: string;
  /** Path under /public or remote URL */
  icon?: string;
  description: string;
  screenshot?: { src: string; alt: string; width: number; height: number };
  category: string;
  status: ProductStatus;
  /** External product website, only when it actually exists */
  website?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  /** Only populated when the client has granted permission to be named */
  client?: { name: string; website?: string; permissionConfirmed: true };
  summary: string;
  services: string[];
  coverImage: { src: string; alt: string; width: number; height: number };
  challenge: string[];
  strategy: string[];
  solution: string[];
  techStack: string[];
  screenshots: { src: string; alt: string; width: number; height: number }[];
  /** Only verified, client-approved outcomes */
  outcomes: { label: string; value: string; note?: string }[];
  publishedAt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Must be true — unverified testimonials are never rendered */
  verified: true;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
}

export interface Author {
  name: string;
  role: string;
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  /** Either an image file or a generated "cover" (abstract gradient art keyed by variant) */
  cover: { src?: string; alt: string; variant: 0 | 1 | 2 | 3 };
  body: ArticleBlock[];
  tags?: string[];
}

export interface Role {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  applyUrl: string;
}
