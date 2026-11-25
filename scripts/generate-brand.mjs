// Generates every ZAQRON logo file in /public/brand from src/components/brand/geometry.mjs.
// Run: npm run brand
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp"; // installed with Next.js
import { COLORS, GRADIENTS, SYMBOL_BOTTOM, SYMBOL_FOLD, SYMBOL_TOP, SYMBOL_VIEWBOX, TAGLINE, LOCKUP_VIEWBOX, WORDMARK, WORDMARK_VIEWBOX } from "../src/components/brand/geometry.mjs";

const out = join(process.cwd(), "public", "brand");
mkdirSync(out, { recursive: true });

const stop = ([offset, color, opacity]) => `<stop offset="${offset}" stop-color="${color}" stop-opacity="${opacity}"/>`;
const gradient = (g) =>
  `<linearGradient id="${g.key}" gradientUnits="userSpaceOnUse" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}">${g.stops.map(stop).join("")}</linearGradient>`;
const accent =
  `<defs>${GRADIENTS.map(gradient).join("")}</defs><path d="${SYMBOL_TOP}" fill="url(#top)"/>` +
  `<path d="${SYMBOL_BOTTOM}" fill="url(#bottom)"/><path d="${SYMBOL_FOLD}" fill="url(#fold)"/>`;
const flat = (c) => `<path d="${SYMBOL_TOP}${SYMBOL_BOTTOM}" fill="${c}"/>`;
const word = (c) => `<path d="${WORDMARK}" fill="${c}" fill-rule="evenodd"/>`;
// Wordmark + tagline; the tagline is tinted only on the accent logo
const lockup = (c, tint = c) => word(c) + `<path d="${TAGLINE}" fill="${tint}"/>`;
const svg = (viewBox, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;

const horizontal = (sym, c, tint) =>
  svg("0 0 5360 1000", `<g transform="translate(-30 -25)">${sym}</g><g transform="translate(1380 76) scale(2)">${lockup(c, tint)}</g>`, "ZAQRON");
const stacked = (sym, c, tint) =>
  svg("0 0 3620 1890", `<g transform="translate(1215 -50)">${sym}</g><g transform="translate(-28 1130) scale(1.85)">${lockup(c, tint)}</g>`, "ZAQRON");
const icon = svg(
  "0 0 512 512",
  `<rect width="512" height="512" rx="112" fill="${COLORS.dark}"/><g transform="translate(48 72) scale(0.35)">${accent}</g>`,
  "Zaqron",
);

// Favicon: larger symbol and tighter tile so it stays legible at 16px
const favicon = svg(
  "0 0 512 512",
  `<rect width="512" height="512" rx="96" fill="${COLORS.dark}"/><g transform="translate(12.3 40.5) scale(0.41)">${accent}</g>`,
  "Zaqron",
);

const files = {
  "zaqron-symbol.svg": svg(SYMBOL_VIEWBOX, accent, "Zaqron symbol"),
  "zaqron-symbol-white.svg": svg(SYMBOL_VIEWBOX, flat(COLORS.white), "Zaqron symbol"),
  "zaqron-symbol-dark.svg": svg(SYMBOL_VIEWBOX, flat(COLORS.dark), "Zaqron symbol"),
  "zaqron-wordmark.svg": svg(WORDMARK_VIEWBOX, word(COLORS.white), "ZAQRON"),
  "zaqron-wordmark-dark.svg": svg(WORDMARK_VIEWBOX, word(COLORS.dark), "ZAQRON"),
  "zaqron-wordmark-tagline.svg": svg(LOCKUP_VIEWBOX, lockup(COLORS.white, COLORS.tagline), "ZAQRON"),
  "zaqron-logo-horizontal.svg": horizontal(accent, COLORS.white, COLORS.tagline),
  "zaqron-logo-white.svg": horizontal(flat(COLORS.white), COLORS.white),
  "zaqron-logo-dark.svg": horizontal(flat(COLORS.dark), COLORS.dark),
  "zaqron-logo-stacked.svg": stacked(accent, COLORS.white, COLORS.tagline),
  "zaqron-logo-stacked-dark.svg": stacked(flat(COLORS.dark), COLORS.dark),
  "zaqron-app-icon.svg": icon,
  "favicon.svg": favicon,
};
for (const [name, content] of Object.entries(files)) writeFileSync(join(out, name), content);
writeFileSync(join(process.cwd(), "src", "app", "icon.svg"), favicon); // Next.js icon convention
const png = (source, size) => sharp(Buffer.from(source), { density: 300 }).resize(size, size).png().toBuffer();
// iOS applies its own corner mask, so the touch icon is a full square
const square = icon.replace('rx="112"', 'rx="0"');
writeFileSync(join(process.cwd(), "src", "app", "apple-icon.png"), await png(square, 180));
writeFileSync(join(out, "icon-192.png"), await png(square, 192));
writeFileSync(join(out, "icon-512.png"), await png(square, 512));

// favicon.ico: PNG images at 16, 32 and 48px
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((n) => png(favicon, n)));
const head = Buffer.alloc(6 + 16 * sizes.length);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(sizes.length, 4);
let offset = head.length;
sizes.forEach((n, i) => {
  const at = 6 + 16 * i;
  head.writeUInt8(n, at);
  head.writeUInt8(n, at + 1);
  head.writeUInt16LE(1, at + 4);
  head.writeUInt16LE(32, at + 6);
  head.writeUInt32LE(images[i].length, at + 8);
  head.writeUInt32LE(offset, at + 12);
  offset += images[i].length;
});
writeFileSync(join(process.cwd(), "src", "app", "favicon.ico"), Buffer.concat([head, ...images]));
console.log(`Wrote ${Object.keys(files).length} brand files + src/app/icon.svg`);
