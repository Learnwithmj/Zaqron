import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyZaqronSection } from "@/components/home/WhyZaqronSection";
import { AudienceSection } from "@/components/home/AudienceSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { testimonials } from "@/content/collections";
import { articleReadingTime, getArticles, getCaseStudies } from "@/lib/content";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Build What's Next. | Technology & Growth Partner` },
  description: site.description,
  alternates: { canonical: absoluteUrl("/") },
};

export default async function HomePage() {
  const [articles, studies] = await Promise.all([getArticles(), getCaseStudies()]);
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      <WhyZaqronSection />
      <AudienceSection />
      <ProductsSection />
      <WorkSection studies={studies} />
      <ProcessSection />
      {testimonials.length > 0 && <TestimonialsSection items={testimonials} />}
      <InsightsSection articles={articles.map((a) => ({ article: a, minutes: articleReadingTime(a) }))} />
      <FinalCTA />
    </>
  );
}
