"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/types/content";

/**
 * Testimonial slider. Renders nothing unless verified testimonials exist
 * (src/content/collections.ts → testimonials, each with `verified: true`).
 */
export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  const verified = items.filter((t) => t.verified === true);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  if (verified.length === 0) return null;

  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + verified.length) % verified.length);
  };
  const t = verified[index];

  return (
    <section aria-labelledby="testimonials-title" aria-roledescription="carousel" className="section-y">
      <div className="container-z">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-title" className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] sm:text-[2.5rem] lg:text-[3rem]">
            What Our Partners Say.
          </h2>
          <div className="relative mt-12 min-h-[260px] rounded-[16px] border border-line bg-card/60 px-6 py-10 sm:px-14 sm:py-14">
            <Quote className="mx-auto h-8 w-8 text-accent/60" aria-hidden="true" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
              >
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-fg sm:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="font-medium text-fg">{t.name}</span>
                  <span className="text-muted">
                    {" "}
                    — {t.role}, {t.company}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          {verified.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-line hover:border-accent/50">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-mono text-xs text-muted">
                {index + 1} / {verified.length}
              </span>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-line hover:border-accent/50">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
