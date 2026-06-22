# Orbit Website — UI Kit

A high-fidelity, interactive recreation of Orbit's marketing site. This is the primary brand
surface: a dark, premium, single-page landing built to convert local service-business owners.

Open **`index.html`** to see it assembled.

## Stack
- React 18 + Babel standalone (inline JSX, no build step).
- [Lucide](https://lucide.dev) icons via UMD CDN, rendered through the `<Icon>` primitive.
- Fonts: **Anthropic Serif** (Display + Text optical cuts, the real licensed face, loaded from
  `../../fonts/anthropic-serif.css`) for headlines + **Geist** / **Geist Mono** for body & labels.

## Files & components
| File | Exports | Notes |
|---|---|---|
| `Primitives.jsx` | `Icon`, `Button`, `Eyebrow`, `Wordmark` | Shared atoms. `Button` has primary/blue/secondary/ghost × sm/md/lg, hover+press states. |
| `NavHero.jsx` | `Nav`, `Hero`, `Pill` | Sticky nav (transparent → blurred on scroll); hero with radial planet glow. |
| `Sections.jsx` | `Problem`, `WhatWeBuild`, `HowItWorks`, `SectionHead`, `BuildCard` | The three core content sections. Cards lift + blue-glow on hover. |
| `Pricing.jsx` | `Pricing`, `PriceCard` | Four real tiers; Pro highlighted as "Most popular". |
| `Closing.jsx` | `FinalCTA`, `Footer` | Orange+blue glow CTA band with `seth@gotorbit.net`; footer. |

Components export to `window` (each `<script type="text/babel">` is its own scope), so later
files can use earlier components. Keep that pattern when adding sections.

## Page order
`Nav → Hero → Problem → WhatWeBuild → HowItWorks → Pricing → FinalCTA → Footer`

## Interactions to preserve
- **Card hover** = `−4px` lift + blue border glow + soft blue shadow. The signature Orbit move.
- **Buttons** darken one step + grow shadow on hover, `scale(0.97)` on press.
- **Nav** is transparent at top, `rgba(10,14,26,0.72)` + 12px blur once scrolled.
- Easing `cubic-bezier(.2,.7,.3,1)`, 120–220ms. No bounces.

## Copy rules (see root README §3)
Sentence case. Address the reader as "you", Orbit as "we". Never the word "bots" — use
"AI assistant / receptionist / automation". Lead with the cost of missed calls. One primary
CTA: **Get a Free Demo** (orange).
