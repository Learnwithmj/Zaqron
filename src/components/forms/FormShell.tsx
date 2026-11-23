"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Button, ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import type { SubmitState } from "./useInquiryForm";

/** Shared chrome for every enquiry form: honeypot, consent, status messages and submit button. */
export function FormShell({
  state,
  onSubmit,
  onReset,
  submitLabel,
  honeypot,
  consent,
  consentError,
  turnstile,
  children,
}: {
  state: SubmitState;
  onSubmit: () => void;
  onReset: () => void;
  submitLabel: string;
  honeypot: UseFormRegisterReturn;
  consent: UseFormRegisterReturn;
  consentError?: string;
  turnstile?: ReactNode;
  children: ReactNode;
}) {
  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-center rounded-[16px] border border-success/30 bg-success/5 px-6 py-14 text-center">
        <CheckCircle2 className="h-12 w-12 text-success" aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-semibold">Thank you — we&apos;ve received your enquiry.</h3>
        <p className="mt-3 max-w-md text-muted">
          A member of the Zaqron team will review it and reply by email, usually within one business day.
        </p>
        <p className="mt-2 font-mono text-xs text-subtle">Reference: {state.id.slice(0, 8)}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/insights/" variant="secondary">
            Read our insights
          </ButtonLink>
          <Button variant="ghost" onClick={onReset} type="button">
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  const submitting = state.status === "submitting";
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      aria-busy={submitting}
      className="space-y-6"
    >
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" tabIndex={-1} autoComplete="off" {...honeypot} />
        </label>
      </div>

      {children}

      {turnstile}

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            {...consent}
            aria-invalid={consentError ? true : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-line-strong bg-bg-2 accent-blue-strong"
          />
          <span>
            I agree to Zaqron processing my details to respond to this enquiry, as described in the{" "}
            <Link href="/privacy-policy/" className="text-blue-soft underline underline-offset-2 hover:text-fg">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {consentError && (
          <p role="alert" className="mt-2 text-xs text-danger">
            {consentError}
          </p>
        )}
      </div>

      {state.status === "error" && (
        <div role="alert" className="flex gap-3 rounded-xl border border-danger/30 bg-danger/5 p-4 text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden="true" />
          <div>
            <p className="text-fg">{state.message}</p>
            {(state.code === "NOT_CONFIGURED" || state.code === "DELIVERY_FAILED" || state.code === "NETWORK") && (
              <a href={`mailto:${site.email}`} className="mt-2 inline-flex items-center gap-1.5 text-blue-soft hover:text-fg">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {site.email}
              </a>
            )}
          </div>
        </div>
      )}

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto" arrow={!submitting}>
        {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {submitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
