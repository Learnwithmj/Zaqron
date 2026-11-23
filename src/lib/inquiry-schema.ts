import { z } from "zod";

// Disable zod's eval-based JIT so it never trips the Content-Security-Policy (no unsafe-eval).
z.config({ jitless: true });

/** Shared by the client forms (react-hook-form) and the API route (server-side validation). */

export const serviceOptions = [
  "Web Development",
  "App Development",
  "Custom Software",
  "UI/UX Design",
  "SaaS Development",
  "AI Agents",
  "Workflow Automation",
  "WhatsApp Automation",
  "Performance Marketing",
  "SEO",
  "Lead Generation",
  "CRM Solutions",
  "Business Systems",
  "Not sure yet",
] as const;

export const budgetOptions = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k – $100k", "$100k+", "Not sure yet"] as const;
export const timelineOptions = ["As soon as possible", "1 – 3 months", "3 – 6 months", "6+ months", "Just exploring"] as const;
export const sizeOptions = ["1 – 10", "11 – 50", "51 – 200", "201 – 1,000", "1,000+"] as const;
export const industryOptions = [
  "Startups / Technology",
  "Real Estate",
  "E-commerce / Retail",
  "Healthcare",
  "Education",
  "Professional Services",
  "Manufacturing",
  "Hospitality",
  "Finance",
  "Other",
] as const;
export const partnershipOptions = [
  "White-label delivery",
  "Technology partner",
  "Co-delivery / team extension",
  "Referral partnership",
  "Other",
] as const;

// Strip control characters (keeps \n and \t) and trim
const clean = (s: string) => s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

const text = (min: number, max: number, label: string) =>
  z
    .string({ error: `${label} is required` })
    .transform(clean)
    .pipe(
      z
        .string()
        .min(min, min <= 1 ? `${label} is required` : `${label} must be at least ${min} characters`)
        .max(max, `${label} must be under ${max} characters`),
    );

const optionalUrl = z
  .string({ error: "Enter a valid website" })
  .transform(clean)
  .pipe(
    z
      .string()
      .max(200, "Website is too long")
      .refine((v) => v === "" || /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v), "Enter a valid website, e.g. example.com"),
  );

const requiredUrl = optionalUrl.refine((v) => v !== "", "Website is required");

const oneOf = <T extends readonly [string, ...string[]]>(opts: T, label: string) =>
  z.enum(opts, { message: `Select ${label}` });

const services = z
  .array(z.enum(serviceOptions), { error: "Select at least one service" })
  .min(1, "Select at least one service")
  .max(serviceOptions.length);

/** Anti-spam fields present on every form */
const guard = {
  // Honeypot — real users never see or fill this
  companyFax: z.string().max(0, "Invalid submission").optional().default(""),
  // Render timestamp — bots submit instantly
  startedAt: z.number({ error: "Invalid submission" }).int().positive(),
  turnstileToken: z.string().max(4096).optional(),
  consent: z.literal(true, { message: "Please accept the privacy policy" }),
  source: z.string().max(200).optional(),
};

const contact = {
  name: text(2, 100, "Name"),
  email: z.string({ error: "Email is required" }).transform(clean).pipe(z.email("Enter a valid email address").max(200)),
};

export const startupSchema = z.object({
  path: z.literal("startup"),
  ...contact,
  company: text(1, 120, "Company or project name"),
  idea: text(20, 3000, "Project idea"),
  services,
  budget: oneOf(budgetOptions, "an estimated budget"),
  timeline: oneOf(timelineOptions, "a timeline"),
  ...guard,
});

export const businessSchema = z.object({
  path: z.literal("business"),
  ...contact,
  company: text(1, 120, "Company"),
  website: optionalUrl,
  industry: oneOf(industryOptions, "an industry"),
  size: oneOf(sizeOptions, "a business size"),
  challenges: text(20, 3000, "Current challenges"),
  services,
  budget: oneOf(budgetOptions, "an estimated budget"),
  ...guard,
});

export const partnerSchema = z.object({
  path: z.literal("partner"),
  ...contact,
  agency: text(1, 120, "Agency name"),
  website: requiredUrl,
  partnershipType: oneOf(partnershipOptions, "a partnership type"),
  services,
  collaboration: text(20, 3000, "Expected collaboration"),
  ...guard,
});

export const inquirySchema = z.discriminatedUnion("path", [startupSchema, businessSchema, partnerSchema]);

export type StartupInquiry = z.input<typeof startupSchema>;
export type BusinessInquiry = z.input<typeof businessSchema>;
export type PartnerInquiry = z.input<typeof partnerSchema>;
export type Inquiry = z.output<typeof inquirySchema>;
export type InquiryPath = Inquiry["path"];

export const pathLabels: Record<InquiryPath, string> = {
  startup: "Startup — Build My Idea",
  business: "Established Business — Transform My Business",
  partner: "Agency Partner — Become a Partner",
};
