import Image from "next/image";
import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { LogoSymbol } from "@/components/brand/Logo";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { pillars } from "@/content/solutions";
import { team } from "@/content/collections";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import type { IconName } from "@/types/content";

export const metadata = buildMetadata({
  title: "About Zaqron — Technology & Growth Partner",
  description:
    "Zaqron is a technology and growth partner helping startups and established businesses build smarter products, automate operations and accelerate growth. Build smarter. Operate better. Grow faster.",
  path: "/about",
});

const differences: { title: string; text: string; icon: IconName }[] = [
  { title: "Technology and growth under one roof", text: "Engineering, automation and marketing teams that share context — so fixes happen in days, not between vendors.", icon: "network" },
  { title: "Systems, not deliverables", text: "We design how pieces connect: the website feeds the CRM, the CRM triggers automation, automation feeds reporting.", icon: "workflow" },
  { title: "Honest by default", text: "Clear scopes, transparent reporting, no invented numbers. If something isn't working, you'll hear it from us first.", icon: "shield" },
  { title: "You own everything", text: "Code, accounts, data and documentation belong to you. Partnership by choice, never lock-in.", icon: "plug" },
];

const philosophy = [
  { word: "Build smarter.", text: "Choose the simplest architecture that solves today's problem and leaves room for tomorrow's." },
  { word: "Operate better.", text: "Remove manual work, connect systems and make every process visible and measurable." },
  { word: "Grow faster.", text: "Invest where data shows compounding returns — and stop what doesn't work." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", href: "/about/" }]}
        eyebrow="About Zaqron"
        title={
          <>
            A technology partner for businesses <span className="text-gradient">ready for the future.</span>
          </>
        }
        description={site.description}
        aside={
          <div className="relative mx-auto flex aspect-square max-w-[380px] items-center justify-center">
            <div className="anim-spin-slow absolute inset-0 rounded-full border border-dashed border-line" aria-hidden="true" />
            <div className="absolute inset-12 rounded-full border border-line" aria-hidden="true" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgb(20_203_212/0.2),transparent_62%)]" aria-hidden="true" />
            <LogoSymbol className="relative h-28 w-28" />
          </div>
        }
      />

      {/* About */}
      <SectionContainer labelledBy="story" className="!pt-8 lg:!pt-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading id="story" eyebrow="Our story" title="Why Zaqron exists" />
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Businesses today don&apos;t lack tools — they lack connection. A website built by one agency, campaigns run by another, an
              automation freelancer, a CRM nobody fully trusts. Each piece works in isolation, and the business pays for the gaps.
            </p>
            <p>
              Zaqron exists to close those gaps: one partner that understands technology <em>and</em> growth, designing products,
              operations and acquisition as a single system. Our services are for startups finding their footing and established companies
              modernising how they operate — across India, the United States, the United Kingdom, the UAE and beyond.
            </p>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Mission & Vision */}
      <SectionContainer tone="alt" labelledBy="mission">
        <h2 id="mission" className="sr-only">
          Mission and vision
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="hairline-top relative overflow-hidden rounded-[20px] border border-line bg-card/70 p-8 lg:p-12">
            <p className="eyebrow">Mission</p>
            <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              To help businesses of every size build smarter systems, automate operations and grow — through technology that is
              practical, measurable and theirs to own.
            </p>
          </Reveal>
          <Reveal delay={100} className="hairline-top relative overflow-hidden rounded-[20px] border border-line bg-card/70 p-8 lg:p-12">
            <p className="eyebrow">Vision</p>
            <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              A world where every ambitious business — not just the largest — runs on intelligent, connected technology.
            </p>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Philosophy */}
      <SectionContainer labelledBy="philosophy">
        <SectionHeading id="philosophy" eyebrow="Brand philosophy" title={site.philosophy} align="center" />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {philosophy.map((p, i) => (
            <Reveal as="li" key={p.word} delay={i * 80} className="rounded-[16px] border border-line bg-card/60 p-7">
              <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gradient">{p.word}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </SectionContainer>

      {/* What makes us different */}
      <SectionContainer tone="alt" labelledBy="different">
        <SectionHeading id="different" eyebrow="What makes us different" title="A partner, not a vendor" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {differences.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 60} className="flex gap-5 rounded-[16px] border border-line bg-card/60 p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg text-accent-soft">
                <Icon name={d.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* Capabilities */}
      <SectionContainer labelledBy="capabilities">
        <SectionHeading id="capabilities" eyebrow="Our capabilities" title="Four disciplines, one system" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 60} className="rounded-[16px] border border-line bg-card/60 p-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft">{p.label}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {p.highlights.map((h) => (
                  <li key={h}>— {h}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>

      {/* Working approach */}
      <ProcessSection eyebrow="Our working approach" title="How every engagement runs" />

      {/* Team — only with real team data */}
      {team.length > 0 && (
        <SectionContainer labelledBy="team">
          <SectionHeading id="team" eyebrow="Team" title="The people behind Zaqron" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name} className="rounded-[16px] border border-line bg-card/60 p-6">
                {m.photo && <Image src={m.photo} alt={m.name} width={320} height={320} className="mb-5 aspect-square w-full rounded-xl object-cover" />}
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
                {m.bio && <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>}
              </li>
            ))}
          </ul>
        </SectionContainer>
      )}

      <FinalCTA />
    </>
  );
}
