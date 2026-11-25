import Image from "next/image";
import { site } from "@/content/site";

/**
 * Trust bar. Shows verified logos from site.trustLogos when available;
 * otherwise a capability strip of the platforms and disciplines Zaqron works with.
 * (Technology names describe our stack — they are not presented as clients or partners.)
 */
const capabilities = [
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "OpenAI",
  "Anthropic Claude",
  "LangGraph",
  "n8n",
  "WhatsApp Business API",
  "HubSpot",
  "Zoho CRM",
  "Stripe",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "Sanity",
];

export function TrustSection() {
  const logos = site.trustLogos;
  return (
    <section aria-labelledby="trust-title" className="relative border-y border-line/70 bg-bg-2/60 py-12 lg:py-14">
      <div className="container-z">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 id="trust-title" className="font-display text-lg font-medium tracking-tight text-fg sm:text-xl">
            Technology that moves businesses forward.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
            {logos.length ? "Trusted by teams across markets" : "Platforms & technologies we build with"}
          </p>
        </div>
      </div>

      {logos.length ? (
        <ul className="container-z mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((l) => (
            <li key={l.name} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image src={l.src} alt={l.name} width={l.width} height={l.height} className="h-8 w-auto" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <ul className="anim-marquee flex w-max gap-3" aria-label="Technologies">
            {[...capabilities, ...capabilities].map((c, i) => (
              <li
                key={`${c}-${i}`}
                aria-hidden={i >= capabilities.length ? true : undefined}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-card/60 px-4 py-2 font-mono text-[12px] text-muted"
              >
                <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
