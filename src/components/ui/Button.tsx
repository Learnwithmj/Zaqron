import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "md" | "lg" | "sm";

const base =
  "group/btn relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // #2563EB resting colour keeps white text above WCAG AA (see DESIGN_SYSTEM.md)
  primary:
    "rounded-[11px] bg-blue-strong text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_8px_24px_-12px_rgb(59_130_246/0.7)] hover:bg-blue-deep hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_10px_30px_-10px_rgb(59_130_246/0.8)]",
  secondary:
    "rounded-[11px] border border-line-strong bg-white/[0.03] text-fg backdrop-blur hover:border-blue/60 hover:bg-white/[0.06]",
  ghost: "rounded-[11px] text-muted hover:bg-white/[0.05] hover:text-fg",
  link: "text-blue-soft hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[52px] px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  const cls = cn(base, variants[variant], variant !== "link" && sizes[size], className);
  const external = typeof href === "string" && /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a
        href={href as string}
        className={cls}
        {...(String(href).startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  arrow,
  className,
  children,
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(base, variants[variant], variant !== "link" && sizes[size], className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
