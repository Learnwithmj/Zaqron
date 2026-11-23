/** Fire a conversion event to whichever analytics provider is active. Safe to call anywhere on the client. */
export function trackEvent(name: string, props: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props: Record<string, string> }) => void;
  };
  w.gtag?.("event", name, props);
  w.plausible?.(name, { props });
}
