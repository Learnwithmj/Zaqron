import { Suspense } from "react";
import { Check } from "lucide-react";
import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, Reveal } from "@/components/ui/primitives";
import { InquiryExperience } from "@/components/forms/InquiryExperience";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Strategy Call",
  description: "Book a strategy call with Zaqron to map the fastest path for your product, automation or growth goals.",
  path: "/book-a-call",
});

const agenda = [
  "Your goals, constraints and where you are today",
  "Where technology, automation or growth can create the most value",
  "A recommended first step — whether or not it involves us",
];

/** Only allow embedding known booking providers over HTTPS. */
function bookingEmbed(url: string) {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return null;
    if (!/(^|\.)cal\.com$|(^|\.)calendly\.com$/.test(u.hostname)) return null;
    if (u.hostname.endsWith("calendly.com")) u.searchParams.set("background_color", "111827");
    return u.toString();
  } catch {
    return null;
  }
}

export default function BookACallPage() {
  const embed = site.bookingUrl ? bookingEmbed(site.bookingUrl) : null;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Book a Call", href: "/book-a-call/" }]}
        eyebrow="Strategy call"
        title={
          <>
            Book a <span className="text-gradient">strategy call.</span>
          </>
        }
        description="A focused conversation with our team — no sales script. You'll leave with a clearer view of your options and a practical next step."
      />
      <SectionContainer labelledBy="booking" className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
          <Reveal as="aside" className="space-y-6">
            <div className="rounded-[16px] border border-line bg-card/60 p-6">
              <h2 id="booking" className="font-semibold">
                What we&apos;ll cover
              </h2>
              <ul className="mt-4 space-y-3">
                {agenda.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" /> {a}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted">
              Prefer email? Write to <a className="text-accent-soft hover:text-fg" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Reveal>
          {embed ? (
            <div className="overflow-hidden rounded-[20px] border border-line bg-card">
              <iframe src={embed} title="Book a strategy call with Zaqron" className="h-[760px] w-full" loading="lazy" />
            </div>
          ) : (
            <div>
              <p className="mb-6 rounded-xl border border-line bg-card/60 px-5 py-4 text-sm text-muted">
                Tell us a little about your goals below and we&apos;ll reply with available times for your call.
              </p>
              <Suspense fallback={<div className="h-[720px] animate-pulse rounded-[20px] border border-line bg-card/40" />}>
                <InquiryExperience />
              </Suspense>
            </div>
          )}
        </div>
      </SectionContainer>
    </>
  );
}
