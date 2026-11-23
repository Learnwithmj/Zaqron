"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Progressive hero visual:
 * 1. The server-rendered SVG (children) is shown immediately.
 * 2. On capable devices (≥1024px, motion allowed, no Save-Data, WebGL available)
 *    the three.js scene is imported after the browser is idle and cross-fades in.
 * 3. Any failure leaves the SVG in place.
 */
export function HeroVisual({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const capable =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !nav.connection?.saveData &&
      (navigator.hardwareConcurrency ?? 4) >= 4 &&
      hasWebGL();
    if (!capable) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;
    const start = () => {
      import("./scene")
        .then(({ startHeroScene }) => {
          if (cancelled) return;
          cleanup = startHeroScene(canvas, () => setLive(true));
        })
        .catch(() => {
          /* keep static fallback */
        });
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    const id = w.requestIdleCallback ? w.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 1200);
    return () => {
      cancelled = true;
      if (w.cancelIdleCallback) w.cancelIdleCallback(id);
      else clearTimeout(id);
      cleanup?.();
    };
  }, []);

  return (
    <div className="relative aspect-square w-full">
      <div className={cn("absolute inset-0 transition-opacity duration-1000", live ? "opacity-0" : "opacity-100")}>
        {children}
      </div>
      <canvas
        ref={canvasRef}
        className={cn("absolute inset-0 h-full w-full transition-opacity duration-1000", live ? "opacity-100" : "opacity-0")}
        aria-hidden="true"
      />
    </div>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}
