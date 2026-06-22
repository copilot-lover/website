---
name: orbit-design
description: Use this skill to generate well-branded interfaces and assets for Orbit, the AI-automation agency for local service businesses (AI voice receptionists, chat assistants, and websites). Use for production work or throwaway prototypes/mocks/decks. Contains Orbit's design guidelines, colors, type, fonts, brand assets, and a website UI kit.
user-invocable: true
---

# Orbit Design Skill

Read `README.md` first — it holds the full brand context (who Orbit is, audience, voice,
pricing, visual foundations, iconography) and a map of every file. Then explore the other files.

## Quick orientation
- **Tokens:** `colors_and_type.css` — all color, type, spacing, radius, and shadow variables.
- **Brand marks:** `assets/` (off-white, white, blue, and navy versions of the planet mark).
- **UI kit:** `ui_kits/website/` — high-fidelity, componentised recreation of the marketing site.
- **Preview cards:** `preview/` — small specimens of colors, type, spacing, components, brand.

## Non-negotiables
- **Dark, premium, quiet.** Deep navy `#0A0E1A` canvas; blue `#3B82F6` used sparingly; orange
  `#F97316` for the one primary CTA and the "missed call" urgency. No gradients on text, no purple
  slabs, no 3D, no particle galaxies.
- **Type = serif display + grotesque body.** The real **Anthropic Serif** (Display cut for
  headlines/wordmark/prices, Text cut for small titles) over **Geist** (body/UI) + **Geist Mono**
  (labels). Bundled in `fonts/` — load `fonts/anthropic-serif.css`. (Licensing finalised before deploy.)
- **Voice:** direct, plain-spoken, money-focused. "You" = reader, "we" = Orbit. Sentence case.
  Lead with the cost of missed calls; use the real proof stats. **Never write "bots"** — say "AI
  assistant / receptionist / automation". One primary CTA: **Get a Free Demo**.
- **Signature interaction:** cards lift `−4px` and gain a blue border glow on hover.
- **Icons:** Lucide, 2px stroke. No emoji on the brand surface.

## How to work
If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/`
and write static HTML files for the user to view — reuse the tokens in `colors_and_type.css` and
the components in `ui_kits/website/`. If working on production code, copy assets and apply the rules
here to design natively in the Orbit brand.

If invoked with no other guidance, ask the user what they want to build, ask a few focused
questions, then act as an expert Orbit designer who outputs either HTML artifacts or production code.
