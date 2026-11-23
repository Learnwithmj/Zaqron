"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Mail, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { industryMenu, megaMenu } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [section, setSection] = useState<"solutions" | "industries" | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const toggle = (s: "solutions" | "industries") => setSection(section === s ? null : s);
  // Portal to <body>: the header uses backdrop-filter, which would otherwise
  // become the containing block for this fixed-position overlay.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  if (!mounted) return null;

  return createPortal(
    open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="anim-menu-in fixed inset-0 z-[70] flex flex-col bg-bg lg:hidden"
        >
          <div className="container-z flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-line">
            <Link href="/" onClick={onClose} aria-label="ZAQRON — home">
              <Logo />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="container-z flex-1 overflow-y-auto overscroll-contain py-4"
          >
            <ul className="divide-y divide-line">
              {(["solutions", "industries"] as const).map((key) => (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    aria-expanded={section === key}
                    className="flex w-full items-center justify-between py-4 font-display text-2xl font-semibold capitalize"
                  >
                    {key}
                    <ChevronDown className={cn("h-5 w-5 text-muted transition-transform", section === key && "rotate-180")} aria-hidden="true" />
                  </button>
                  <div className={cn("collapse-grid", section === key && "is-open")}>
                    <div className="overflow-hidden" inert={section !== key}>
                        {key === "solutions" ? (
                          <div className="space-y-5 pb-5">
                            {megaMenu.map((g) => (
                              <div key={g.id}>
                                <Link href={g.href} onClick={onClose} className="eyebrow mb-1 block py-1">
                                  {g.label} · {g.title}
                                </Link>
                                <ul>
                                  {g.items.map((i) => (
                                    <li key={i.href}>
                                      <Link href={i.href} onClick={onClose} className="flex items-center gap-3 rounded-lg py-2.5 text-[1.0625rem] text-fg/90">
                                        <Icon name={i.icon} className="h-[18px] w-[18px] text-muted" />
                                        {i.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <Link href="/solutions/" onClick={onClose} className="block text-sm font-medium text-blue-soft">
                              View all solutions →
                            </Link>
                          </div>
                        ) : (
                          <ul className="pb-5">
                            {industryMenu.map((i) => (
                              <li key={i.href}>
                                <Link href={i.href} onClick={onClose} className="flex items-center gap-3 rounded-lg py-2.5 text-[1.0625rem] text-fg/90">
                                  <Icon name={i.icon} className="h-[18px] w-[18px] text-muted" />
                                  {i.name}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link href="/industries/" onClick={onClose} className="mt-2 block text-sm font-medium text-blue-soft">
                                View all industries →
                              </Link>
                            </li>
                          </ul>
                        )}
                    </div>
                  </div>
                </li>
              ))}
              {[
                ["Products", "/products/"],
                ["Our Work", "/work/"],
                ["Insights", "/insights/"],
                ["About", "/about/"],
                ["Careers", "/careers/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} onClick={onClose} className="block py-4 font-display text-2xl font-semibold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="container-z shrink-0 space-y-3 border-t border-line py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <ButtonLink href="/contact/" size="lg" className="w-full" arrow onClick={onClose}>
              Let&apos;s Talk
            </ButtonLink>
            <div className="flex items-center justify-between text-sm">
              <ButtonLink href="/book-a-call/" variant="link" onClick={onClose}>
                Book a strategy call
              </ButtonLink>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 text-muted">
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
            </div>
          </div>
        </div>
    ) : null,
    document.body,
  );
}
