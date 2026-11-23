import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { LogoSymbol } from "@/components/brand/Logo";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-[var(--header-h)]">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-z text-center">
        <LogoSymbol className="mx-auto h-14 w-14" />
        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">This page isn&apos;t built yet.</h1>
        <p className="mx-auto mt-5 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you somewhere useful.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/solutions/" variant="secondary">
            Explore solutions
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-muted">
          Or <Link href="/contact/" className="text-blue-soft hover:text-fg">contact us</Link> and tell us what you were looking for.
        </p>
      </div>
    </section>
  );
}
