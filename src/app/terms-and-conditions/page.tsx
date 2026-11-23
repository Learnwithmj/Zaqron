import Link from "next/link";
import { LegalPage } from "@/components/content/LegalPage";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

// NOTE: Website terms of use. Client engagements are governed by separate signed agreements.
// Have these reviewed by qualified counsel and set the governing law (see README → Legal review).

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions governing the use of the Zaqron website.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    heading: "Acceptance of terms",
    body: <p>By accessing or using {site.url.replace("https://", "")}, you agree to these terms. If you do not agree, please do not use the website.</p>,
  },
  {
    heading: "Use of the website",
    body: (
      <ul>
        <li>Use the website only for lawful purposes.</li>
        <li>Do not attempt to disrupt, overload, probe or gain unauthorised access to the website or its systems.</li>
        <li>Do not submit false, misleading, automated or spam enquiries.</li>
      </ul>
    ),
  },
  {
    heading: "Information on this website",
    body: (
      <p>
        Content on this website is provided for general information about our services. It does not constitute professional advice or an offer to
        contract. Service scope, pricing and timelines are agreed only in a written proposal or agreement.
      </p>
    ),
  },
  {
    heading: "Intellectual property",
    body: (
      <p>
        The Zaqron name, logo, website design, text and graphics are owned by or licensed to {site.legalName}. You may not copy, reproduce or
        reuse them without our prior written permission, except for personal, non-commercial reference.
      </p>
    ),
  },
  {
    heading: "Client engagements",
    body: <p>Any work we perform for clients is governed by a separate signed agreement, which takes precedence over these website terms.</p>,
  },
  {
    heading: "Third-party links and services",
    body: <p>The website may link to or embed third-party services (for example, booking tools). We are not responsible for their content or practices.</p>,
  },
  {
    heading: "Disclaimer and limitation of liability",
    body: (
      <p>
        The website is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent permitted by law, Zaqron is not liable
        for any indirect or consequential loss arising from use of the website.
      </p>
    ),
  },
  {
    heading: "Privacy",
    body: (
      <p>
        Our handling of personal information is described in our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    heading: "Changes and contact",
    body: (
      <p>
        We may update these terms at any time; the date above shows the latest revision. Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      path="/terms-and-conditions/"
      updated="2026-11-23"
      intro={<p>These terms govern your use of the Zaqron website. Please read them carefully.</p>}
      sections={sections}
    />
  );
}
