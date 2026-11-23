// Generates every ZAQRON logo variant into /public/brand from a single geometry definition.
// Run: node scripts/generate-brand.mjs
// The React component src/components/brand/Logo.tsx uses the same geometry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = join(process.cwd(), "public", "brand");
mkdirSync(out, { recursive: true });

const BLUE = "#3B82F6";
const PURPLE = "#8B5CF6";
const WHITE = "#F8FAFC";
const DARK = "#080B14";

// ── Symbol: "Linked Z" on a 48×48 grid (180° rotationally symmetric) ──
const symbol = (stroke, nodeA, nodeB) => `
  <path d="M16 12H34L14 36H32" fill="none" stroke="${stroke}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="8.5" cy="12" r="3.75" fill="${nodeA}"/>
  <circle cx="39.5" cy="36" r="3.75" fill="${nodeB}"/>`;

const gradDef = (id) => `<defs><linearGradient id="${id}" x1="8" y1="10" x2="40" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="${BLUE}"/><stop offset="1" stop-color="${PURPLE}"/></linearGradient></defs>`;

// ── Wordmark: geometric stroke letters, cap height 20, stroke 3.2 ──
const wordmark = (color) => `
  <g fill="none" stroke="${color}" stroke-width="3.2" stroke-linejoin="round">
    <path d="M0 1.6H14L0 18.4H14"/>
    <path d="M21.6 20L26.5 1.6H29.5L34.4 20M24.2 13H31.8"/>
    <circle cx="52" cy="10" r="8.4"/><path d="M55 13L61.5 19.5"/>
    <path d="M70.6 20V1.6H77.5A4.9 4.9 0 0 1 77.5 11.4H70.6M77 11.4L82.6 20"/>
    <circle cx="100" cy="10" r="8.4"/>
    <path d="M117.6 20V1.6L130.4 18.4V0"/>
  </g>`;

const svg = (viewBox, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;

const files = {
  "zaqron-symbol.svg": svg("0 0 48 48", gradDef("zg") + symbol("url(#zg)", BLUE, PURPLE), "Zaqron symbol"),
  "zaqron-symbol-white.svg": svg("0 0 48 48", symbol(WHITE, WHITE, WHITE), "Zaqron symbol"),
  "zaqron-symbol-dark.svg": svg("0 0 48 48", symbol(DARK, DARK, DARK), "Zaqron symbol"),
  "zaqron-wordmark.svg": svg("-1 -1 134 23", wordmark(WHITE), "ZAQRON"),
  "zaqron-wordmark-dark.svg": svg("-1 -1 134 23", wordmark(DARK), "ZAQRON"),
  // Blue accent version (primary, for dark backgrounds)
  "zaqron-logo-horizontal.svg": svg(
    "0 0 200 48",
    gradDef("zg") + symbol("url(#zg)", BLUE, PURPLE) + `<g transform="translate(60 13.5) scale(1.05)">${wordmark(WHITE)}</g>`,
    "ZAQRON",
  ),
  "zaqron-logo-white.svg": svg(
    "0 0 200 48",
    symbol(WHITE, WHITE, WHITE) + `<g transform="translate(60 13.5) scale(1.05)">${wordmark(WHITE)}</g>`,
    "ZAQRON",
  ),
  // Dark version, for light backgrounds
  "zaqron-logo-dark.svg": svg(
    "0 0 200 48",
    gradDef("zg") + symbol("url(#zg)", "#2563EB", "#7C3AED").replace(/#3B82F6/g, "#2563EB") +
      `<g transform="translate(60 13.5) scale(1.05)">${wordmark(DARK)}</g>`,
    "ZAQRON",
  ),
  // App icon / favicon: symbol on rounded tile
  "zaqron-app-icon.svg": svg(
    "0 0 512 512",
    gradDef("zg") +
      `<rect width="512" height="512" rx="112" fill="${DARK}"/><rect x="1.5" y="1.5" width="509" height="509" rx="110.5" fill="none" stroke="#263247" stroke-width="3"/>` +
      `<g transform="translate(48 48) scale(8.667)">${symbol("url(#zg)", BLUE, PURPLE)}</g>`,
    "Zaqron",
  ),
};

files["favicon.svg"] = files["zaqron-app-icon.svg"];

for (const [name, content] of Object.entries(files)) writeFileSync(join(out, name), content);
// Next.js app icon convention
writeFileSync(join(process.cwd(), "src", "app", "icon.svg"), files["zaqron-app-icon.svg"]);
console.log(`Wrote ${Object.keys(files).length} brand files to public/brand + src/app/icon.svg`);
