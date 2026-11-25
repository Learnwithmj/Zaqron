"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { Check } from "lucide-react";
import type { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";

export function Field({
  label,
  error,
  hint,
  required,
  children,
  className,
  htmlFor,
}: {
  label: string;
  error?: FieldError | { message?: string };
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  htmlFor: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-fg/90">
        {label}
        {required ? (
          <span className="ml-0.5 text-accent-soft" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-subtle">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error?.message && (
        <p id={`${htmlFor}-hint`} className="text-xs text-subtle">
          {hint}
        </p>
      )}
      {error?.message && (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-danger">
          {error.message}
        </p>
      )}
    </div>
  );
}

/** a11y attributes for an input bound to a Field */
export function aria(id: string, error?: { message?: string }, hint?: boolean) {
  return {
    id,
    "aria-invalid": error?.message ? true : undefined,
    "aria-describedby": error?.message ? `${id}-error` : hint ? `${id}-hint` : undefined,
  } as const;
}

/** Multi-select chip group used for "Required services" */
export function ChipGroup({
  label,
  options,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  options: readonly string[];
  value: string[];
  onChange: (v: string[]) => void;
  error?: { message?: string };
  required?: boolean;
}) {
  const id = useId();
  return (
    <fieldset className="flex flex-col gap-3" aria-describedby={error?.message ? `${id}-error` : undefined}>
      <legend className="mb-1 text-sm font-medium text-fg/90">
        {label}
        {required && (
          <span className="ml-0.5 text-accent-soft" aria-hidden="true">
            *
          </span>
        )}
        <span className="ml-2 text-xs font-normal text-subtle">Select all that apply</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const on = value.includes(opt);
          return (
            <label
              key={opt}
              className={cn(
                "inline-flex min-h-10 cursor-pointer select-none items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
                on ? "border-accent/60 bg-accent/15 text-fg" : "border-line bg-bg-2 text-muted hover:border-line-strong hover:text-fg",
              )}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={on}
                onChange={() => onChange(on ? value.filter((v) => v !== opt) : [...value, opt])}
              />
              <span className={cn("flex h-4 w-4 items-center justify-center rounded border", on ? "border-accent bg-accent" : "border-line-strong")} aria-hidden="true">
                {on && <Check className="h-3 w-3 text-bg" strokeWidth={3} />}
              </span>
              {opt}
            </label>
          );
        })}
      </div>
      {error?.message && (
        <p id={`${id}-error`} role="alert" className="text-xs text-danger">
          {error.message}
        </p>
      )}
    </fieldset>
  );
}

/** Cloudflare Turnstile — rendered only when NEXT_PUBLIC_TURNSTILE_SITE_KEY is configured. */
export function Turnstile({ onToken }: { onToken: (t: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  useEffect(() => {
    if (!siteKey || !ref.current) return;
    type TS = { render: (el: HTMLElement, o: Record<string, unknown>) => string; remove: (id: string) => void };
    const w = window as unknown as { turnstile?: TS };
    let widget: string | undefined;
    const mount = () => {
      if (w.turnstile && ref.current) widget = w.turnstile.render(ref.current, { sitekey: siteKey, theme: "dark", callback: onToken });
    };
    if (w.turnstile) mount();
    else {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.onload = mount;
      document.head.appendChild(s);
    }
    return () => {
      if (widget && w.turnstile) w.turnstile.remove(widget);
    };
  }, [siteKey, onToken]);
  if (!siteKey) return null;
  return <div ref={ref} className="min-h-[65px]" />;
}
