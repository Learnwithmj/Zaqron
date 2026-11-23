import { ImageResponse } from "next/og";

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
          background: "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.35), transparent 50%), #080B14",
          color: "#F8FAFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="g" x1="8" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path d="M16 12H34L14 36H32" fill="none" stroke="url(#g)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8.5" cy="12" r="3.75" fill="#3B82F6" />
            <circle cx="39.5" cy="36" r="3.75" fill="#8B5CF6" />
          </svg>
          <div style={{ fontSize: 44, letterSpacing: 10, fontWeight: 600 }}>ZAQRON</div>
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
