import { ImageResponse } from "next/og";
import { SymbolGradients } from "@/components/brand/Logo";
import { SYMBOL_BOTTOM, SYMBOL_FOLD, SYMBOL_TOP, SYMBOL_VIEWBOX, WORDMARK, WORDMARK_VIEWBOX } from "@/components/brand/geometry.mjs";

export const alt = "ZAQRON — Build What's Next. Technology. Automation. Growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 20%, rgba(20,203,212,0.35), transparent 50%), #080B14",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="104" height="104" viewBox={SYMBOL_VIEWBOX}>
            {SymbolGradients({ id: "g" })}
            <path d={SYMBOL_TOP} fill="url(#g-top)" />
            <path d={SYMBOL_BOTTOM} fill="url(#g-bottom)" />
            <path d={SYMBOL_FOLD} fill="url(#g-fold)" />
          </svg>
          <svg width="456" height="55" viewBox={WORDMARK_VIEWBOX}>
            <path d={WORDMARK} fill="#F8FAFC" fillRule="evenodd" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Build What&apos;s Next.</div>
          <div style={{ marginTop: 28, fontSize: 36, color: "#94A3B8" }}>Technology. Automation. Growth.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#64748B" }}>
          <span>Technology &amp; Growth Partner</span>
          <span>zaqron.com</span>
        </div>
      </div>
    ),
    size,
  );
}
