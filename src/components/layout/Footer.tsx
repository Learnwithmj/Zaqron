import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { LogoSymbol, Logo } from "@/components/brand/Logo";
import { footerColumns } from "@/content/navigation";
import { site } from "@/content/site";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75v5.7h-4v-5.05c0-1.2-.02-2.75-1.7-2.75-1.7 0-1.95 1.3-1.95 2.66v5.14h-4v-11Z" />
  ),
  x: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z" />,
  instagram: (
    <path d="M12 7.25A4.75 4.75 0 1 0 16.75 12 4.76 4.76 0 0 0 12 7.25Zm0 7.83A3.08 3.08 0 1 1 15.08 12 3.08 3.08 0 0 1 12 15.08ZM17.2 5.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1ZM12 3c-2.44 0-2.75.01-3.71.05C5.03 3.2 3.2 5 3.05 8.29 3.01 9.25 3 9.56 3 12s.01 2.75.05 3.71c.15 3.26 1.96 5.09 5.24 5.24.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c3.25-.15 5.1-1.96 5.24-5.24.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71C20.8 5.05 19 3.2 15.71 3.05 14.75 3.01 14.44 3 12 3Z" />
  ),
  github: (
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.08.65-.21.65-.46v-1.6c-2.64.57-3.2-1.27-3.2-1.27-.43-1.1-1.06-1.4-1.06-1.4-.86-.59.07-.58.07-.58.95.07 1.45.98 1.45.98.85 1.45 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.1-.24-4.32-1.05-4.32-4.68 0-1.03.37-1.88.98-2.54-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.97a9.03 9.03 0 0 1 4.75 0c1.81-1.23 2.6-.97 2.6-.97.52 1.31.2 2.28.1 2.52.61.66.98 1.51.98 2.54 0 3.64-2.22 4.44-4.34 4.67.34.3.64.88.64 1.77v2.63c0 .25.17.55.65.46A9.5 9.5 0 0 0 12 2.5Z" />
  ),
  youtube: (
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
};

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  x: "X (Twitter)",
  instagram: "Instagram",
  github: "GitHub",
  youtube: "YouTube",
};

export function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => Boolean(url));
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-z pt-16 pb-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.7fr] lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" aria-label="ZAQRON — home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">{site.shortDescription}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-fg/90 hover:text-blue-soft">
                  <Mail className="h-4 w-4 text-blue-soft" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2.5 text-fg/90 hover:text-blue-soft">
                    <Phone className="h-4 w-4 text-blue-soft" aria-hidden="true" />
                    {site.phone}
                  </a>
                </li>
              )}
              {site.address && (
                <li className="inline-flex items-start gap-2.5 text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-soft" aria-hidden="true" />
                  {site.address}
                </li>
              )}
            </ul>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
              Serving {site.markets.join(" · ")} & beyond
            </p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-2" aria-label="Social media">
                {socials.map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Zaqron on ${socialLabels[key]}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-blue/50 hover:text-fg"
                    >
                      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                        {socialIcons[key]}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[0.925rem] text-muted transition-colors hover:text-fg">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Signature band */}
        <div className="relative mt-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[16px] border border-line bg-card/60 p-6 sm:flex-row sm:items-center sm:p-8 lg:mt-24">
          <div className="flex items-center gap-4">
            <LogoSymbol className="h-10 w-10" />
            <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              ZAQRON <span className="text-subtle">—</span> <span className="text-gradient">Build What&apos;s Next.</span>
            </p>
          </div>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-soft transition-colors hover:text-fg"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy/" className="hover:text-fg">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions/" className="hover:text-fg">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" className="hover:text-fg">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
