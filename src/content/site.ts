/**
 * Global site configuration.
 * Values that may differ per environment can be overridden with NEXT_PUBLIC_* env vars.
 * Anything left empty is simply not rendered — never replace with invented details.
 */
export const site = {
  name: "ZAQRON",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "Zaqron",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://zaqron.com").replace(/\/$/, ""),
  tagline: "Build What's Next.",
  message: "Technology. Automation. Growth.",
  category: "Technology & Growth Partner",
  description:
    "Zaqron is a technology and growth partner. We help startups and established businesses build smarter digital products, automate operations, implement intelligent business systems and accelerate growth through technology.",
  shortDescription:
    "A technology and growth partner for businesses ready for the future — building smarter systems, automating operations and accelerating growth.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@zaqron.com",
  careersEmail: process.env.NEXT_PUBLIC_CAREERS_EMAIL || "careers@zaqron.com",
  partnersEmail: process.env.NEXT_PUBLIC_PARTNERS_EMAIL || "partners@zaqron.com",
  /** Optional — rendered only when provided */
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
  markets: ["India", "United States", "United Kingdom", "UAE"],
  /** Booking page (Cal.com / Calendly). When empty, /book-a-call shows the request form. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  /** Add only real profiles. Empty entries are hidden. */
  socials: {
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X || "",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
    github: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
  },
  /**
   * Verified client / partner / platform logos for the trust bar.
   * Only add logos you have permission to display. While empty, the
   * trust bar shows a technology capability strip instead.
   */
  trustLogos: [] as { name: string; src: string; width: number; height: number; href?: string }[],
  philosophy: "Build smarter. Operate better. Grow faster.",
} as const;

export type Site = typeof site;
