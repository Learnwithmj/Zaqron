"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every [data-reveal] element on the page.
 * Elements are visible by default (see globals.css); this only orchestrates
 * the entrance once JS is running, and never hides content that is already in view. New nodes (client navigation, filtered
 * lists) are picked up through a MutationObserver.
 */
export function RevealObserver() {
  useEffect(() => {
    const show = (el: Element) => el.setAttribute("data-shown", "");
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const scan = (root: ParentNode) => {
      root.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => io.observe(el));
    };
    // Anything already on screen at first load is shown as-is (never hidden → no LCP delay,
    // no flash). Only then enable the hide-then-reveal styles for content below the fold.
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    });
    document.documentElement.classList.add("js");
    scan(document);
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (n instanceof Element) {
            if (n.matches("[data-reveal]:not([data-shown])")) io.observe(n);
            scan(n);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
