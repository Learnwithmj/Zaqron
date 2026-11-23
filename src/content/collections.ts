/**
 * Proof-based collections. These are intentionally EMPTY until real,
 * permissioned content exists. Every section that reads them renders a
 * designed empty state (or hides itself) while they are empty.
 *
 * Never add placeholder or invented entries here.
 */
import type { CaseStudy, Product, Role, TeamMember, Testimonial } from "@/types/content";

/**
 * Example shape (do not publish until real):
 * {
 *   slug: "acme-operations-platform",
 *   title: "Operations platform for Acme",
 *   industry: "Professional Services",           // must match an industry `name` to appear on that page
 *   client: { name: "Acme Ltd", permissionConfirmed: true },
 *   summary: "...",
 *   services: ["custom-software", "workflow-automation"], // solution slugs
 *   coverImage: { src: "/work/acme/cover.jpg", alt: "...", width: 1600, height: 1000 },
 *   challenge: ["..."], strategy: ["..."], solution: ["..."],
 *   techStack: ["Next.js", "PostgreSQL"],
 *   screenshots: [],
 *   outcomes: [{ label: "Manual hours removed per week", value: "..." , note: "Client-reported" }],
 *   publishedAt: "2027-01-15",
 * }
 */
export const caseStudies: CaseStudy[] = [];

/**
 * Products built by Zaqron. Add an entry only when a product genuinely exists.
 * `status` must reflect reality: "live" | "beta" | "coming-soon".
 */
export const products: Product[] = [];

/** Only verified testimonials with the client's written permission. */
export const testimonials: Testimonial[] = [];

/** Real team members only. The About page hides the team section while empty. */
export const team: TeamMember[] = [];

/** Open roles. The careers page shows a general-application path while empty. */
export const roles: Role[] = [];
