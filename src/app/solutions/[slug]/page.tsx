import { notFound } from "next/navigation";
import { SolutionTemplate } from "@/components/content/templates/SolutionTemplate";
import { getSolution, solutions } from "@/content/solutions";
import { getCaseStudies } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return buildMetadata({ title: s.seo.title, description: s.seo.description, path: `/solutions/${s.slug}` });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const studies = (await getCaseStudies()).filter((c) => c.services.includes(solution.slug));
  return <SolutionTemplate solution={solution} studies={studies} />;
}
