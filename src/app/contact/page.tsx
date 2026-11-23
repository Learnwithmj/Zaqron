import { Suspense } from "react";
import { CalendarClock, Clock, Globe2, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/content/PageHero";
import { SectionContainer } from "@/components/ui/primitives";
import { InquiryExperience } from "@/components/forms/InquiryExperience";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact — Let's Build What's Next",
  description:
    "Contact Zaqron. Startups, established businesses and agency partners — choose your path and tell us about your project. We reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", href: "/contact/" }]}
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <span className="text-gradient">what&apos;s next.</span>
          </>
        }
        description="Choose the path that fits you best. The more context you share, the more useful our first reply will be."
      />
      <SectionContainer labelledBy="contact-form" className="!pt-0">
        <h2 id="contact-form" className="sr-only">
          Enquiry form
        </h2>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          <Suspense fallback={<div className="h-[720px] animate-pulse rounded-[20px] border border-line bg-card/40" />}>
            <InquiryExperience />
          </Suspense>
          <aside className="space-y-4 lg:pt-1" aria-label="Other ways to reach us">
            <div className="rounded-[16px] border border-line bg-card/60 p-6">
              <h3 className="font-semibold">Prefer email?</h3>
              <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-2.5 text-blue-soft hover:text-fg">
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
              {site.phone && (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-2 flex items-center gap-2.5 text-muted hover:text-fg">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
                </a>
              )}
              <p className="mt-4 text-sm text-muted">
                Partnerships: <a href={`mailto:${site.partnersEmail}`} className="text-fg/90 hover:text-blue-soft">{site.partnersEmail}</a>
              </p>
            </div>
            <div className="rounded-[16px] border border-line bg-card/60 p-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <CalendarClock className="h-4 w-4 text-blue-soft" aria-hidden="true" /> Rather talk live?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Book a free 30-minute strategy call with our team.</p>
              <Link href="/book-a-call/" className="mt-3 inline-block text-sm font-medium text-blue-soft hover:text-fg">
                Book a strategy call →
              </Link>
            </div>
            <ul className="space-y-3 rounded-[16px] border border-line bg-card/60 p-6 text-sm text-muted">
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-soft" aria-hidden="true" /> We aim to reply within one business day.
              </li>
              <li className="flex gap-2.5">
                <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-soft" aria-hidden="true" /> Working with clients in {site.markets.join(", ")} and beyond.
              </li>
            </ul>
          </aside>
        </div>
      </SectionContainer>
    </>
  );
}
