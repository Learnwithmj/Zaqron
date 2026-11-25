"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { MegaMenu, IndustriesMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

type MenuId = "solutions" | "industries" | null;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuId>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjust state during render — no effect cascade)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  // Escape + outside click
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [menu]);

  const openMenu = useCallback((id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(id);
  }, []);
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  }, []);

  const solid = scrolled || menu !== null || mobileOpen;
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        solid
          ? "border-b border-line/80 bg-bg/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
      onMouseLeave={scheduleClose}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <div className="container-z flex h-[var(--header-h)] items-center justify-between gap-6">
        <Link href="/" className="relative z-10 -m-1 rounded-lg p-1" aria-label="ZAQRON — home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) =>
              item.menu ? (
                <li key={item.label} onMouseEnter={() => openMenu(item.menu)}>
                  <button
                    type="button"
                    aria-expanded={menu === item.menu}
                    aria-controls={`menu-${item.menu}`}
                    onClick={() => setMenu(menu === item.menu ? null : item.menu)}
                    className={cn(
                      "flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.925rem] xl:px-3.5 transition-colors",
                      menu === item.menu || isActive(item.href) ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform duration-200", menu === item.menu && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ) : (
                <li key={item.label} onMouseEnter={() => openMenu(null)}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.925rem] xl:px-3.5 transition-colors",
                      isActive(item.href) ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact/" size="sm" className="hidden h-10 px-4 sm:inline-flex" arrow>
            Let&apos;s Talk
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-fg lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div onMouseEnter={() => menu && openMenu(menu)} className="hidden lg:block">
        {menu === "solutions" && <MegaMenu onNavigate={() => setMenu(null)} />}
        {menu === "industries" && <IndustriesMenu onNavigate={() => setMenu(null)} />}
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
