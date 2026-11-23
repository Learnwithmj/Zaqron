"use client";

import { useCallback } from "react";
import { Controller } from "react-hook-form";
import {
  budgetOptions,
  businessSchema,
  industryOptions,
  partnerSchema,
  partnershipOptions,
  serviceOptions,
  sizeOptions,
  startupSchema,
  timelineOptions,
} from "@/lib/inquiry-schema";
import { Field, ChipGroup, Turnstile, aria } from "./fields";
import { FormShell } from "./FormShell";
import { useInquiryForm } from "./useInquiryForm";

type Prefill = { services?: (typeof serviceOptions)[number][]; industry?: string };

function Select({ options, placeholder, ...rest }: { options: readonly string[]; placeholder: string } & React.ComponentProps<"select">) {
  return (
    <select className="field-input" defaultValue="" {...rest}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

const grid = "grid gap-5 sm:grid-cols-2";

/* ───────────────────────── Path A · Startups ───────────────────────── */
export function StartupInquiryForm({ prefill }: { prefill?: Prefill }) {
  const { form, state, onSubmit, resetForm } = useInquiryForm(startupSchema, {
    path: "startup",
    name: "",
    email: "",
    company: "",
    idea: "",
    services: prefill?.services ?? [],
    companyFax: "",
    startedAt: 0,
  });
  const { register, control, formState: { errors }, setValue } = form;
  const onToken = useCallback((t: string) => setValue("turnstileToken", t), [setValue]);

  return (
    <FormShell
      state={state}
      onSubmit={onSubmit}
      onReset={resetForm}
      submitLabel="Build My Idea"
      honeypot={register("companyFax")}
      consent={register("consent")}
      consentError={errors.consent?.message}
      turnstile={<Turnstile onToken={onToken} />}
    >
      <div className={grid}>
        <Field label="Name" required htmlFor="s-name" error={errors.name}>
          <input className="field-input" autoComplete="name" {...aria("s-name", errors.name)} {...register("name")} />
        </Field>
        <Field label="Email" required htmlFor="s-email" error={errors.email}>
          <input type="email" className="field-input" autoComplete="email" {...aria("s-email", errors.email)} {...register("email")} />
        </Field>
      </div>
      <Field label="Company or project name" required htmlFor="s-company" error={errors.company}>
        <input className="field-input" autoComplete="organization" {...aria("s-company", errors.company)} {...register("company")} />
      </Field>
      <Field label="Project idea" required htmlFor="s-idea" error={errors.idea} hint="What problem are you solving, for whom, and where are you today?">
        <textarea rows={5} className="field-input resize-y" {...aria("s-idea", errors.idea, true)} {...register("idea")} />
      </Field>
      <Controller
        control={control}
        name="services"
        render={({ field }) => (
          <ChipGroup label="Required services" required options={serviceOptions} value={field.value as string[]} onChange={field.onChange} error={errors.services} />
        )}
      />
      <div className={grid}>
        <Field label="Estimated budget" required htmlFor="s-budget" error={errors.budget}>
          <Select options={budgetOptions} placeholder="Select a range" {...aria("s-budget", errors.budget)} {...register("budget")} />
        </Field>
        <Field label="Timeline" required htmlFor="s-timeline" error={errors.timeline}>
          <Select options={timelineOptions} placeholder="Select a timeline" {...aria("s-timeline", errors.timeline)} {...register("timeline")} />
        </Field>
      </div>
    </FormShell>
  );
}

/* ───────────────────────── Path B · Established businesses ───────────────────────── */
export function BusinessInquiryForm({ prefill }: { prefill?: Prefill }) {
  const { form, state, onSubmit, resetForm } = useInquiryForm(businessSchema, {
    path: "business",
    name: "",
    email: "",
    company: "",
    website: "",
    challenges: "",
    services: prefill?.services ?? [],
    companyFax: "",
    startedAt: 0,
    ...(prefill?.industry && (industryOptions as readonly string[]).includes(prefill.industry)
      ? { industry: prefill.industry as (typeof industryOptions)[number] }
      : {}),
  });
  const { register, control, formState: { errors }, setValue } = form;
  const onToken = useCallback((t: string) => setValue("turnstileToken", t), [setValue]);

  return (
    <FormShell
      state={state}
      onSubmit={onSubmit}
      onReset={resetForm}
      submitLabel="Transform My Business"
      honeypot={register("companyFax")}
      consent={register("consent")}
      consentError={errors.consent?.message}
      turnstile={<Turnstile onToken={onToken} />}
    >
      <div className={grid}>
        <Field label="Name" required htmlFor="b-name" error={errors.name}>
          <input className="field-input" autoComplete="name" {...aria("b-name", errors.name)} {...register("name")} />
        </Field>
        <Field label="Work email" required htmlFor="b-email" error={errors.email}>
          <input type="email" className="field-input" autoComplete="email" {...aria("b-email", errors.email)} {...register("email")} />
        </Field>
      </div>
      <div className={grid}>
        <Field label="Company" required htmlFor="b-company" error={errors.company}>
          <input className="field-input" autoComplete="organization" {...aria("b-company", errors.company)} {...register("company")} />
        </Field>
        <Field label="Website" htmlFor="b-website" error={errors.website}>
          <input className="field-input" inputMode="url" autoComplete="url" placeholder="example.com" {...aria("b-website", errors.website)} {...register("website")} />
        </Field>
      </div>
      <div className={grid}>
        <Field label="Industry" required htmlFor="b-industry" error={errors.industry}>
          <Select options={industryOptions} placeholder="Select an industry" {...aria("b-industry", errors.industry)} {...register("industry")} />
        </Field>
        <Field label="Business size" required htmlFor="b-size" error={errors.size}>
          <Select options={sizeOptions} placeholder="Number of employees" {...aria("b-size", errors.size)} {...register("size")} />
        </Field>
      </div>
      <Field label="Current challenges" required htmlFor="b-challenges" error={errors.challenges} hint="Where is time, money or opportunity being lost today?">
        <textarea rows={5} className="field-input resize-y" {...aria("b-challenges", errors.challenges, true)} {...register("challenges")} />
      </Field>
      <Controller
        control={control}
        name="services"
        render={({ field }) => (
          <ChipGroup label="Required solutions" required options={serviceOptions} value={field.value as string[]} onChange={field.onChange} error={errors.services} />
        )}
      />
      <Field label="Estimated budget" required htmlFor="b-budget" error={errors.budget} className="sm:max-w-[calc(50%-10px)]">
        <Select options={budgetOptions} placeholder="Select a range" {...aria("b-budget", errors.budget)} {...register("budget")} />
      </Field>
    </FormShell>
  );
}

/* ───────────────────────── Path C · Agency partners ───────────────────────── */
export function PartnershipForm({ prefill }: { prefill?: Prefill }) {
  const { form, state, onSubmit, resetForm } = useInquiryForm(partnerSchema, {
    path: "partner",
    name: "",
    email: "",
    agency: "",
    website: "",
    collaboration: "",
    services: prefill?.services ?? [],
    companyFax: "",
    startedAt: 0,
  });
  const { register, control, formState: { errors }, setValue } = form;
  const onToken = useCallback((t: string) => setValue("turnstileToken", t), [setValue]);

  return (
    <FormShell
      state={state}
      onSubmit={onSubmit}
      onReset={resetForm}
      submitLabel="Become a Partner"
      honeypot={register("companyFax")}
      consent={register("consent")}
      consentError={errors.consent?.message}
      turnstile={<Turnstile onToken={onToken} />}
    >
      <div className={grid}>
        <Field label="Name" required htmlFor="p-name" error={errors.name}>
          <input className="field-input" autoComplete="name" {...aria("p-name", errors.name)} {...register("name")} />
        </Field>
        <Field label="Email" required htmlFor="p-email" error={errors.email}>
          <input type="email" className="field-input" autoComplete="email" {...aria("p-email", errors.email)} {...register("email")} />
        </Field>
      </div>
      <div className={grid}>
        <Field label="Agency" required htmlFor="p-agency" error={errors.agency}>
          <input className="field-input" autoComplete="organization" {...aria("p-agency", errors.agency)} {...register("agency")} />
        </Field>
        <Field label="Website" required htmlFor="p-website" error={errors.website}>
          <input className="field-input" inputMode="url" autoComplete="url" placeholder="youragency.com" {...aria("p-website", errors.website)} {...register("website")} />
        </Field>
      </div>
      <Field label="Partnership type" required htmlFor="p-type" error={errors.partnershipType} className="sm:max-w-[calc(50%-10px)]">
        <Select options={partnershipOptions} placeholder="Select a type" {...aria("p-type", errors.partnershipType)} {...register("partnershipType")} />
      </Field>
      <Controller
        control={control}
        name="services"
        render={({ field }) => (
          <ChipGroup label="Required services" required options={serviceOptions} value={field.value as string[]} onChange={field.onChange} error={errors.services} />
        )}
      />
      <Field label="Expected collaboration" required htmlFor="p-collab" error={errors.collaboration} hint="Typical project types, volume, and how you'd like to work together.">
        <textarea rows={5} className="field-input resize-y" {...aria("p-collab", errors.collaboration, true)} {...register("collaboration")} />
      </Field>
    </FormShell>
  );
}
