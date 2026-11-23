"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm, type DefaultValues, type FieldValues, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { trackEvent } from "@/lib/analytics";

export type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; id: string }
  | { status: "error"; code: string; message: string };

/**
 * Shared form logic for every enquiry path: client validation (zod), anti-spam
 * timestamp, server submission and mapping server-side field errors back onto inputs.
 */
export function useInquiryForm<S extends z.ZodType<FieldValues, FieldValues>>(schema: S, defaults: DefaultValues<z.input<S>>) {
  const form = useForm<z.input<S>, unknown, z.output<S>>({
    resolver: zodResolver(schema as never) as never,
    defaultValues: defaults,
    mode: "onTouched",
  });
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  const stamp = useCallback(() => {
    form.setValue("startedAt" as Path<z.input<S>>, Date.now() as never);
    form.setValue("source" as Path<z.input<S>>, (window.location.pathname + window.location.search) as never);
  }, [form]);

  useEffect(stamp, [stamp]);

  const resetForm = useCallback(() => {
    form.reset();
    stamp();
    setState({ status: "idle" });
  }, [form, stamp]);

  const onSubmit = form.handleSubmit(async (values) => {
    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        id?: string;
        code?: string;
        message?: string;
        fieldErrors?: Record<string, string>;
      };
      if (res.ok && data.ok && data.id) {
        setState({ status: "success", id: data.id });
        trackEvent("generate_lead", { path: String((values as Record<string, unknown>).path) });
        return;
      }
      if (data.fieldErrors) {
        for (const [k, message] of Object.entries(data.fieldErrors)) form.setError(k as Path<z.input<S>>, { message });
      }
      setState({
        status: "error",
        code: data.code ?? `HTTP_${res.status}`,
        message: data.message ?? "Something went wrong. Please try again.",
      });
    } catch {
      setState({ status: "error", code: "NETWORK", message: "Network error — check your connection and try again." });
    }
  });

  return { form, state, onSubmit, resetForm };
}
