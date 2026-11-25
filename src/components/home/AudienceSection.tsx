import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/types/content";

const audiences: { title: string; from: string; to: string; body: string; icon: IconName; href: string; cta: string }[] = [
  {
    title: "Startups",
    from: "Idea",
    to: "Launch",
    body: "Scope a focused MVP, build it on foundations that scale and set up the growth engine for your first customers.",
    icon: "rocket",
    href: "/industries/startups/",
    cta: "Build my idea",
  },
  {
    title: "Growing Businesses",
    from: "Manual",
    to: "Automated",
    body: "Replace spreadsheets, copy-paste and chasing with connected systems and automation that scale with you.",
    icon: "workflow",
    href: "/solutions/ai-automation/",
    cta: "Automate operations",
  },
  {
    title: "Established Businesses",
    from: "Complex operations",
    to: "Scalable systems",
    body: "Modernise legacy platforms, unify data and give leadership a clear, real-time view of the business.",
    icon: "building",
    href: "/solutions/business-systems/",
    cta: "Transform my business",
  },
  {
    title: "Agencies",
    from: "Capacity limits",
    to: "Extended team",
    body: "Technology execution and white-label partnerships — engineering, automation and AI delivered under your brand.",
    icon: "handshake",
    href: "/contact/?path=partner",
    cta: "Become a partner",
  },
];

export function AudienceSection() {
  return (
    <SectionContainer labelledBy="audience-title">
      <SectionHeading
        id="audience-title"
        eyebrow="Who we help"
        title="Built for Businesses at Every Stage."
        description="Whether you're validating an idea or running a multi-market operation, the work starts from where you are."
        align="center"
      />
      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {audiences.map((a, i) => (
          <Reveal as="li" key={a.title} delay={i * 70}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[16px] border border-line bg-card/60 p-6 transition-[border-color,background-color] duration-300 hover:border-line-strong hover:bg-elevated/50 sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgb(20_203_212/0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-bg text-accent-soft">
                  <Icon name={a.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">{a.title}</h3>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-3 font-display text-lg font-medium">
                <span className="text-muted">From {a.from.toLowerCase()}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg" aria-hidden="true">
                  <ArrowRight className="h-3.5 w-3.5 text-accent" />
                </span>
                <span className="text-gradient">to {a.to.toLowerCase()}.</span>
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-muted">{a.body}</p>
              <Link
                href={a.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft after:absolute after:inset-0 after:content-[''] group-hover:text-fg"
              >
                {a.cta} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}
