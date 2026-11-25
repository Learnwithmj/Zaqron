import { SectionContainer, SectionHeading, Reveal } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/content/cards";
import { EmptyState } from "@/components/content/EmptyState";
import { products } from "@/content/collections";

export function ProductsSection() {
  return (
    <SectionContainer tone="alt" labelledBy="products-title">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          id="products-title"
          eyebrow="Products"
          title="Tools That Make Business Simpler."
          description="Focused software tools from Zaqron, listed here as they become available."
        />
        {products.length > 0 && (
          <Reveal className="shrink-0">
            <ButtonLink href="/products/" variant="secondary" arrow>
              All products
            </ButtonLink>
          </Reveal>
        )}
      </div>

      {products.length > 0 ? (
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <EmptyState
          className="mt-14"
          eyebrow="Product Lab"
          title="No products announced yet."
          description="We only list products once they're real. Anything we release will appear here with its status."
          actions={
            <>
              <ButtonLink href="/products/" variant="secondary">
                Visit the Product Lab
              </ButtonLink>
              <ButtonLink href="/contact/?path=business" variant="ghost" arrow>
                Need a custom tool now?
              </ButtonLink>
            </>
          }
        />
      )}
    </SectionContainer>
  );
}
