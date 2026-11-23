# ZAQRON — Design System

Original identity: "precise darkness" — deep navy surfaces, hairline borders, a single blue→violet energy gradient used sparingly to signal motion and intelligence. Inspiration (Stripe, Linear, Vercel, Framer, Raycast) informs quality bar only; no layouts are borrowed.

## Colour tokens (`src/app/globals.css` → `@theme`)

| Token | Hex | Use |
|---|---|---|
| `bg` | #080B14 | page background |
| `bg-2` | #0D1220 | alternate sections |
| `card` | #111827 | cards |
| `elevated` | #172033 | menus, hovered cards, inputs |
| `blue` | #3B82F6 | accents, icons, links, focus rings |
| `blue-hover` / `blue-strong` | #2563EB | **filled buttons** (see a11y note) |
| `purple` | #8B5CF6 | gradient partner, decoration |
| `purple-soft` | #A78BFA | purple text (AA on dark) |
| `fg` | #F8FAFC | primary text |
| `muted` | #94A3B8 | secondary text |
| `subtle` | #7A8BA3 | tertiary labels (≥ 4.7:1 on every surface) |
| `line` | #263247 | borders |

**Accessibility note:** white text on #3B82F6 is 3.7:1 (fails WCAG AA for 15px text). Filled primary buttons therefore use #2563EB (5.2:1) as their resting colour and #1D4ED8 on hover; #3B82F6 remains the brand accent for everything non-text-bearing.

**Gradient:** `linear-gradient(120deg, #3B82F6, #8B5CF6)` — only on: the logo symbol, the hero headline accent, one hairline per featured card, focus/active indicators. No neon glows; a single soft radial "aura" behind the hero.

## Typography

| Role | Font | Desktop | Mobile |
|---|---|---|---|
| H1 | Space Grotesk 600, -0.035em | 72px (`clamp(2.5rem, 6vw, 4.75rem)`) | 40–44px |
| H2 | Space Grotesk 600, -0.03em | 48px | 32px |
| H3 | Space Grotesk 600 | 22–24px | 20px |
| Body | Inter 400 | 17–18px / 1.65 | 16px |
| Label | JetBrains Mono 500, uppercase, 0.14em | 12px | 11px |

Loaded with `next/font/google` (self-hosted, `display: swap`, CSS variables). Space Grotesk and Inter use single variable files and are preloaded; JetBrains Mono is one static 500 weight, not preloaded.

## Layout

- Container: max 1360px, gutters 20px (mobile) → 32px (tablet) → 40px (desktop).
- Section rhythm: 72px mobile, 120px desktop (`.section`).
- Radius: cards 16px, buttons 11px, chips 999px.
- Borders: 1px `line`; cards lift to `elevated` + brighter border on hover.

## Motion

- Scroll reveals: CSS transitions triggered by one shared IntersectionObserver; content is visible without JS and under `prefers-reduced-motion`, and anything in the first viewport is never hidden (protects LCP).
- Header menus, mobile menu and accordion: CSS (`anim-menu-in`, `collapse-grid`) — kept out of the global JS bundle for mobile performance.
- Framer Motion: contact path tabs (shared-layout indicator + panel transitions) and the testimonial slider — loaded only on pages that render them.
- Durations 180–500ms, easing `cubic-bezier(.22,1,.36,1)`.
- Hero 3D: lazy, idle-loaded, paused when off-screen or tab hidden, disabled for reduced motion / save-data / small screens (static SVG used instead).

## Logo

`public/brand/` — "Linked Z": a Z whose two horizontal strokes detach into nodes at the start and end, joined by a forward-leaning gradient diagonal. Reads as connection (nodes), technology (geometric precision) and forward movement (left-to-right flow). The wordmark is geometric strokes drawn to the same grid (no font dependency).

Files: `zaqron-symbol.svg`, `zaqron-symbol-white.svg`, `zaqron-symbol-dark.svg`, `zaqron-logo-horizontal.svg` (blue accent, for dark backgrounds), `zaqron-logo-white.svg`, `zaqron-logo-dark.svg` (for light backgrounds), `zaqron-wordmark.svg`, `zaqron-app-icon.svg`, `favicon.svg`. React source of truth: `src/components/brand/Logo.tsx` (swap there to rebrand).
