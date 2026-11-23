import { notFound } from "next/navigation";
import { IndustryTemplate } from "@/components/content/templates/IndustryTemplate";
import { getIndustry, industries } from "@/content/industries";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return buildMetadata({ title: ind.seo.title, description: ind.seo.description, path: `/industries/${ind.slug}` });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const studies = (await getCaseStudies()).filter((c) => c.industry.toLowerCase() === industry.name.toLowerCase());
  return <IndustryTemplate industry={industry} studies={studies} />;
}
