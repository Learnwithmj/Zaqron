import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/content/EmptyState";
import { Icon } from "@/components/ui/Icon";
import { roles } from "@/content/collections";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import type { IconName } from "@/types/content";

export const metadata = buildMetadata({
  title: "Careers — Build What's Next With Us",
  description: "Careers at Zaqron. Join engineers, designers, automation specialists and growth strategists building technology that moves businesses forward.",
  path: "/careers",
});

const values: { title: string; text: string; icon: IconName }[] = [
  { title: "Ownership over output", text: "We care about outcomes for clients, not hours logged or tickets closed.", icon: "target" },
  { title: "Craft and pragmatism", text: "High standards, applied with judgement about what matters most right now.", icon: "pen-tool" },
  { title: "Learn in public", text: "We share what we learn — with each other, with clients and in our writing.", icon: "sparkles" },
  { title: "Remote-friendly, globally minded", text: "We work across time zones with clients in multiple markets.", icon: "network" },
];

const disciplines = ["Full-stack engineering", "Mobile engineering", "AI & automation engineering", "Product & UI/UX design", "Performance marketing", "SEO & content", "CRM & business systems"];

export default function CareersPage() {
  const subject = encodeURIComponent("General application — Zaqron");
  return (
    <>
      <PageHero
        crumbs={[{ name: "Careers", href: "/careers/" }]}
        eyebrow="Careers"
        title={
          <>
            Build what&apos;s next — <span className="text-gradient">with us.</span>
          </>
        }
        description="We're building a team of engineers, designers, automation specialists and growth strategists who like solving real business problems."
      />

      <SectionContainer labelledBy="open-roles" className="!pt-0">
        <SectionHeading id="open-roles" eyebrow="Open roles" title="Current openings" />
        <div className="mt-10">
          {roles.length > 0 ? (
            <ul className="divide-y divide-line overflow-hidden rounded-[16px] border border-line bg-card/60">
              {roles.map((r) => (
                <li key={r.slug}>
                  <a href={r.applyUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 p-6 transition-colors hover:bg-elevated/50 sm:flex-row sm:items-center sm:justify-between">
                    <span>
                      <span className="block text-lg font-semibold">{r.title}</span>
                      <span className="mt-1 block text-sm text-muted">{r.summary}</span>
                    </span>
                    <span className="flex items-center gap-4 text-sm text-muted">
                      {r.location} · {r.type}
                      <ArrowUpRight className="h-4 w-4 group-hover:text-fg" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              eyebrow="No open roles right now"
              title="We're not actively hiring — but we're always listening."
              description="If you're exceptional at what you do and our work excites you, send us a short note with your portfolio, GitHub or LinkedIn. We keep strong profiles on file for future roles."
              actions={
                <ButtonLink href={`mailto:${site.careersEmail}?subject=${subject}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" /> Send a general application
                </ButtonLink>
              }
            >
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {disciplines.map((d) => (
                  <li key={d} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {d}
                  </li>
                ))}
              </ul>
            </EmptyState>
          )}
        </div>
      </SectionContainer>

      <SectionContainer tone="alt" labelledBy="culture">
        <SectionHeading id="culture" eyebrow="How we work" title="What it's like at Zaqron" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 60} className="rounded-[16px] border border-line bg-card/60 p-6">
              <Icon name={v.icon} className="h-6 w-6 text-blue-soft" />
              <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </>
  );
}
