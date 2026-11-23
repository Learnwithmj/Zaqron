import Script from "next/script";

/**
 * Analytics integration point. Nothing loads unless configured:
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID   → Google Analytics 4
 * - NEXT_PUBLIC_PLAUSIBLE_DOMAIN    → Plausible (privacy-friendly, cookieless)
 * Scripts load `afterInteractive`/`lazyOnload` so they never block rendering.
 * If you enable GA4 for UK/EU visitors, add a consent banner (see README).
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <>
      {plausible && (
        <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      )}
      {ga && /^G-[A-Z0-9]+$/.test(ga) && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="lazyOnload" />
          <Script id="ga4" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
    </>
  );
}
