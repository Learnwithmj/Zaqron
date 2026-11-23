import { PageHero } from "@/components/content/PageHero";
import { SectionContainer, SectionHeading, Reveal, Badge } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/content/cards";
import { EmptyState } from "@/components/content/EmptyState";
import { FinalCTA } from "@/components/home/FinalCTA";
import { products } from "@/content/collections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products — The Zaqron Product Lab",
  description:
    "Software products built by Zaqron: focused SaaS tools that make business simpler. See what's live, in beta and coming soon.",
  path: "/products",
});

const statuses = [
  { tone: "success" as const, label: "Live", text: "Generally available and supported." },
  { tone: "blue" as const, label: "Beta", text: "Usable today with early customers; evolving quickly." },
  { tone: "muted" as const, label: "Coming Soon", text: "In active development. Early-access list open." },
];

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Products", href: "/products/" }]}
        eyebrow="Product Lab"
        title={
          <>
            Tools that make business <span className="text-gradient">simpler.</span>
          </>
        }
        description="Client work shows us the same problems again and again. The Product Lab is where we turn those patterns into focused software any business can use."
      />

      <SectionContainer labelledBy="products-dir" className="!pt-4 lg:!pt-8">
        <h2 id="products-dir" className="sr-only">
          Product directory
        </h2>
        {products.length > 0 ? (
          <>
            {categories.length > 1 && (
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-subtle">{categories.join(" · ")}</p>
            )}
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 60}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </ul>
          </>
        ) : (
          <EmptyState
            eyebrow="In development"
            title="Our first products are being built."
            description="We list products only when they exist — with an honest status. The first Zaqron tools are in development and will appear here as Beta or Live when they're ready for real users."
            actions={
              <>
                <ButtonLink href="/contact/?path=business&interest=product-lab" arrow>
                  Ask about early access
                </ButtonLink>
                <ButtonLink href="/solutions/saas-development/" variant="secondary">
                  Build your own SaaS
                </ButtonLink>
              </>
            }
          />
        )}
      </SectionContainer>

      <SectionContainer tone="alt" labelledBy="status-legend">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionHeading id="status-legend" eyebrow="Status, honestly" title="What each label means" description="Every product carries one of three statuses, kept accurate as it evolves." />
          <ul className="grid gap-4 sm:grid-cols-3">
            {statuses.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 60} className="rounded-[16px] border border-line bg-card/60 p-6">
                <Badge tone={s.tone} dot={s.label === "Live"}>
                  {s.label}
                </Badge>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <FinalCTA
        title="Need a tool that doesn't exist yet?"
        description="We build custom software and SaaS products for businesses with problems off-the-shelf tools can't solve."
        primary={{ label: "Discuss a custom build", href: "/contact/" }}
        secondary={{ label: "SaaS development", href: "/solutions/saas-development/" }}
      />
    </>
  );
}
