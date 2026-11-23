import { LegalPage } from "@/components/content/LegalPage";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

// NOTE: This policy reflects how this website actually processes data. Have it reviewed by
// qualified counsel for each market you operate in (GDPR / UK GDPR, India DPDP Act, CCPA, UAE PDPL)
// and update it whenever integrations change (see README → Legal review).

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Zaqron collects, uses and protects personal information submitted through zaqron.com.",
  path: "/privacy-policy",
});

const sections = [
  {
    heading: "Who we are",
    body: (
      <p>
        This website is operated by {site.legalName} (&ldquo;Zaqron&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). For any privacy question or request, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
  {
    heading: "Information we collect",
    body: (
      <>
        <p>We collect only what is needed to respond to you and run this website:</p>
        <ul>
          <li><strong>Enquiry information</strong> you submit through our forms — such as your name, email, company, website, industry, project details, budget range and timeline.</li>
          <li><strong>Technical information</strong> such as IP address (used briefly for rate limiting and spam prevention), browser type and pages visited.</li>
          <li><strong>Analytics data</strong>, only if analytics is enabled on this site, collected in aggregated or pseudonymised form.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How we use information",
    body: (
      <ul>
        <li>To respond to your enquiry and discuss potential work together.</li>
        <li>To protect the website from spam, abuse and security threats.</li>
        <li>To understand how the website is used and improve it.</li>
        <li>To meet legal and regulatory obligations.</li>
      </ul>
    ),
  },
  {
    heading: "Legal basis",
    body: (
      <p>
        Where data-protection laws such as the GDPR or UK GDPR apply, we process enquiry data on the basis of your consent and our legitimate
        interest in responding to business enquiries, and technical data on the basis of our legitimate interest in operating a secure website.
      </p>
    ),
  },
  {
    heading: "Service providers",
    body: (
      <p>
        We use trusted providers to host the website, deliver email notifications, manage customer relationships (CRM), prevent spam and — where
        enabled — measure website analytics. These providers process data on our behalf under contractual safeguards. We do not sell personal
        information.
      </p>
    ),
  },
  {
    heading: "International transfers",
    body: (
      <p>
        We work with clients in several countries, and our providers may process data outside your country. Where required, we rely on appropriate
        safeguards such as standard contractual clauses.
      </p>
    ),
  },
  {
    heading: "Retention",
    body: <p>We keep enquiry data for as long as needed to handle your enquiry and any resulting relationship, and delete or anonymise it when no longer required.</p>,
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct, delete or export your personal data, to withdraw consent and to
        object to or restrict processing. To exercise these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. You may also complain to
        your local data-protection authority.
      </p>
    ),
  },
  {
    heading: "Cookies",
    body: (
      <p>
        This website does not use advertising cookies. If analytics is enabled, it may use cookies or similar technologies to measure usage; where
        required by law we will ask for your consent first.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy/"
      updated="2026-11-23"
      intro={<p>Your privacy matters to us. This policy explains what personal information we collect through this website, why, and the choices you have.</p>}
      sections={sections}
    />
  );
}
