import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/Icon";
import { LogoSymbol } from "@/components/brand/Logo";
import type { IconName } from "@/types/content";

const principles: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Connected Thinking",
    body: "Your website, operations, data and marketing are one system. We design them together so improvements in one compound across the others.",
    icon: "network",
  },
  {
    title: "Business-First Approach",
    body: "We start with revenue, cost and customer outcomes — then choose the technology. Never the other way round.",
    icon: "compass",
  },
  {
    title: "Automation-First Mindset",
    body: "For every process we ask whether a person really needs to do it. Your team's time goes to judgement, relationships and growth.",
    icon: "zap",
  },
  {
    title: "Growth With Purpose",
    body: "Measured against outcomes you care about, reported honestly — what's working, what isn't, and what we're changing next.",
    icon: "line-chart",
  },
  {
    title: "Partnership Beyond Launch",
    body: "Launch is the starting line. We stay to monitor, optimise and evolve what we built as your business grows.",
    icon: "infinity",
  },
];

/** Orbit diagram: the four capabilities connected through one core */
function SystemDiagram() {
  const nodes = [
    { label: "Build", x: 50, y: 10 },
    { label: "Automate", x: 90, y: 50 },
    { label: "Grow", x: 50, y: 90 },
    { label: "Scale", x: 10, y: 50 },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="why-g" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#263247" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#why-g)" strokeWidth="0.5" strokeDasharray="10 241" className="anim-spin-slow origin-center [animation-duration:14s]" />
        <circle cx="50" cy="50" r="24" fill="none" stroke="#263247" strokeWidth="0.3" strokeDasharray="1 2" />
        {nodes.map((n) => (
          <line key={n.label} x1="50" y1="50" x2={n.x} y2={n.y} stroke="#33415A" strokeWidth="0.3" />
        ))}
        <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="url(#why-g)" strokeOpacity="0.5" strokeWidth="0.35" />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-line bg-card shadow-[0_0_60px_-10px_rgb(59_130_246/0.45)]">
        <LogoSymbol className="h-12 w-12" />
      </div>
      {nodes.map((n) => (
        <span
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg/90"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          {n.label}
        </span>
      ))}
    </div>
  );
}

export function WhyZaqronSection() {
  return (
    <SectionContainer tone="alt" labelledBy="why-title" className="overflow-hidden">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-title"
            eyebrow="Why Zaqron"
            title="More Than a Service Provider."
            description="Most businesses juggle a web agency, a marketing agency, an automation freelancer and an IT vendor — none of whom see the whole picture. Zaqron is one partner that connects them."
          />
          <Reveal delay={120} className="mt-12 hidden lg:block">
            <SystemDiagram />
          </Reveal>
        </div>

        <ol className="relative space-y-3">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70}>
              <div className="group relative grid grid-cols-[auto_1fr] gap-5 rounded-[16px] border border-line bg-card/60 p-6 transition-colors duration-300 hover:border-line-strong hover:bg-elevated/50 sm:p-7">
                <div className="flex flex-col items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg text-blue-soft transition-colors group-hover:border-blue/40">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-subtle">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
      <Reveal className="mt-14 lg:hidden">
        <SystemDiagram />
      </Reveal>
    </SectionContainer>
  );
}
