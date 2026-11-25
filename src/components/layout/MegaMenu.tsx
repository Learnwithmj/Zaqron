"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { industryMenu, megaMenu } from "@/content/navigation";

function Panel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div
      id={id}
      className="anim-menu-in absolute inset-x-0 top-full border-b border-line bg-bg/[0.985] shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)] backdrop-blur-xl"
    >
      <div className="container-z py-8">{children}</div>
    </div>
  );
}

export function MegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Panel id="menu-solutions">
      <div className="grid grid-cols-4 gap-6">
        {megaMenu.map((group, gi) => (
          <div key={group.id} className="min-w-0">
            <Link
              href={group.href}
              onClick={onNavigate}
              className="group mb-3 flex items-center justify-between rounded-lg px-3 py-1.5"
            >
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-soft">
                <span className="text-subtle">0{gi + 1} </span>
                {group.label}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden="true" />
            </Link>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-elevated/70"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent-soft">
                      <Icon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-fg">{item.name}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted line-clamp-2">{item.short}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-6 rounded-xl border border-line bg-card/70 px-5 py-4">
        <p className="flex items-center gap-3 text-sm text-muted">
          <CalendarClock className="h-4 w-4 text-accent-soft" aria-hidden="true" />
          Not sure where to start? A strategy call helps map your fastest path.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/solutions/" onClick={onNavigate} className="text-muted transition-colors hover:text-fg">
            All solutions
          </Link>
          <Link href="/book-a-call/" onClick={onNavigate} className="inline-flex items-center gap-1.5 font-medium text-accent-soft hover:text-fg">
            Book a strategy call <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Panel>
  );
}

export function IndustriesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Panel id="menu-industries">
      <div className="grid grid-cols-[1fr_2.4fr] gap-10">
        <div className="rounded-xl border border-line bg-card/70 p-6">
          <p className="eyebrow">Industries</p>
          <p className="mt-3 font-display text-xl font-semibold text-fg">Technology shaped around your sector.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Every industry has its own workflows, regulations and customers. We start there.
          </p>
          <Link href="/industries/" onClick={onNavigate} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft hover:text-fg">
            All industries <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-1">
          {industryMenu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onNavigate} className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-elevated/70">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-card text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent-soft">
                  <Icon name={item.icon} className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">{item.name}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-muted">{item.short}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
