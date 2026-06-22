# Orbit — Design System

> AI automation for local service businesses. Every call answered, every lead captured, nothing lost.

This repository is the source of truth for Orbit's brand and product UI. It contains the
visual foundations (color, type, spacing, elevation), brand assets (logo marks), reusable
CSS variables, and a high-fidelity UI kit recreating Orbit's marketing website.

---

## 1. What is Orbit?

**Orbit is a solo-run AI services agency** that sells websites, AI chat assistants, and 24/7
voice receptionists to local service businesses. The product keeps a business's customer flow
in motion: every call answered, every lead captured, nothing lost — even when the owner is on
a job and can't pick up.

**Founder / contact:** Seth · `seth@gotorbit.net` · domain `gotorbit.net` (upgrading to `orbit.co`).

**Core services (what we build):**
| Product | One-liner |
|---|---|
| **AI Voice Receptionist** | Answers and books calls 24/7 in the business's voice (Vapi/Bland). |
| **AI Chat Assistant** | Captures website & text-message leads instantly; FAQ + booking. |
| **Modern Websites** | Fast 5-page conversion sites with click-to-call (Framer). |
| **WhatsApp / SMS automation** | Premium add-on across every messaging channel. |

**Pricing tiers (real, from the business plan):**
| Plan | Setup | Monthly | Scope |
|---|---|---|---|
| Starter | $399 | $127/mo | Chat assistant only |
| Growth | $599 | $197/mo | Chat assistant + website |
| **Pro** (flagship) | $999 | $297/mo | + 24/7 AI voice receptionist |
| Elite | $1,499 | $397/mo | + WhatsApp & SMS automation |

> **Pricing rule:** Never discount. If a prospect pushes back, remove a feature — don't lower the price.

**Audience:** Local home-service business owners in Greensboro, NC first — **HVAC, plumbers,
electricians** (highest pain from missed calls), then **salons, med spas, dental clinics**.
The owner is the decision-maker: practical, often 50+, allergic to fluff and tech jargon. The
site must feel **trustworthy to a 50-year-old HVAC owner**, not just impressive to a tech person.

**The edge:** Orbit builds a custom 90-second demo answering calls for *their actual business*
before ever pitching. Local personalization + relationship is the moat.

---

## 2. Sources

The brand understanding here was assembled from Orbit's Notion workspace (access required):

- **Orbit — Summer 2026 Business Plan** — positioning, services, pricing, niche strategy, voice.
  `https://app.notion.com/p/34c2b60e6d7481a6a99dd6933343e3ab`
- **Brand Name Decision Log** — why the name "Orbit" is locked; brand-language rules.
  `https://app.notion.com/p/3622b60e6d7481d1b09ad058426e3731`
- **Orbit Resource Library** — tech stack, market stats, competitor pricing, proof points.
  `https://app.notion.com/p/34c2b60e6d7481168439de59be097071`
- **Logo source:** `uploads/orbit-logo-src.png` (provided by user — planet + ring + sparkle mark).
- **Brand brief:** color/type/section direction provided directly by the user (see below).

No production codebase or Figma file exists yet — the website UI kit in `ui_kits/website/` is the
first high-fidelity expression of the brand, built from the brief + Notion docs.

---

## 3. Content Fundamentals (voice & copy)

Orbit's voice is **direct, confident, plain-spoken, and money-focused**. It talks to a busy
tradesperson, not a CTO. Premium but never corporate; clear over clever.

- **Person:** Address the reader as **"you"** ("when you're on a job"). Orbit is **"we"** ("we build,
  we learn your business"). Never first-person-singular "I" on the brand surface — the agency must
  read as a real company, not one teenager (this is an explicit brand decision).
- **Casing:** Sentence case everywhere — headlines, buttons, nav. No Title Case, no ALL CAPS except
  the small mono eyebrows/labels.
- **Tone levers — lead with the cost of inaction.** Money and lost jobs are the hook:
  - *"Never miss another customer call."*
  - *"Missed calls = lost jobs."*
  - *"You miss calls when you're on a job. We make sure every lead gets answered 24/7."*
- **Use proof, not adjectives.** Real stats from the docs do the persuading:
  - *78% of callers won't leave a voicemail — they call a competitor.*
  - *Miss 8 calls/week and a typical home-services business loses ~$49,920/year.*
  - *Average job value: $400–800.*
- **Banned word: "bots."** The industry has moved on and it reads hobbyist. Say **"AI assistant,"
  "AI receptionist," "automation."** (Brand-name decision log is explicit about this.)
- **CTAs:** One primary action, repeated — **"Get a Free Demo"** (orange). Secondary is softer:
  "See how it works," "Get started." Demo > "book a call."
- **No emoji** on the brand surface. (Emoji appear only inside the internal Notion workspace, never
  in product/marketing UI.)
- **Numbers & money** are written plainly: `$297/mo`, `+ $999 one-time setup`, `24/7`.

---

## 4. Visual Foundations

The look is **premium SaaS, dark, and quiet** — Linear/Vercel territory. Confident and modern,
never flashy. No heavy 3D, no particle galaxies, no gimmicks.

**Color** — deep near-black navy canvas, used generously, with restrained accents:
- `--bg-0 #0A0E1A` page · `--bg-1 #0D1320` raised bands · `--bg-2 #111829` cards · `--bg-hover #161E30`.
- **Primary accent — Orbit Blue `#3B82F6`** (+ 60A5FA/2563EB/1D4ED8). Used *sparingly*: CTAs to
  secondary actions, icon tints, eyebrows, hover glows, the hero glow.
- **Secondary accent — Signal Orange `#F97316`** (+ FB923C/EA580C). The "never miss a call" urgency
  color. Reserved for the **one** primary CTA and the problem-section icons. One or two elements per
  screen — never a field of orange.
- Text: `--fg-1 #F8FAFC` headings · `--fg-2 #94A3B8` body · `--fg-3 #64748B` captions.

**Type** — uses the real **Anthropic Serif** (licensed display face) paired with a grotesque body/UI.
- Display & headings (hero, H1/H2, wordmark, prices): **Anthropic Serif Display**, weight 500–600, tracking ≈ −0.02em.
- Smaller serif (H3, card titles): **Anthropic Serif Text** (the optical cut tuned for ≤ ~24px).
- Body, UI, buttons, captions: **Geist** (a clean geometric grotesque, in the spirit of Anthropic's *Styrene*).
- Eyebrows, labels, prices-meta, code, stats: **Geist Mono**, uppercase, letter-spacing 0.14–0.16em.
- Big serif headlines, generous whitespace, balanced wrapping (`text-wrap: balance`).

**Backgrounds** — solid navy, never busy. The only ambient detail:
- A **single faint radial glow** behind the hero (blue, ~20% alpha core fading to transparent) —
  "a planet on the horizon," understated.
- A **barely-there star field** (fixed, ~0.5 opacity, 5 tiny dots) — adds depth without noise.
- Section bands alternate `#0A0E1A` ↔ `#0D1320` to create rhythm; separated by 1px hairlines.
  No gradients on text, no purple/blue gradient slabs.

**Borders & hairlines** — white at very low alpha: `rgba(248,250,252,0.08)` default,
`0.14` on hover/stronger. This is how surfaces are defined in the dark — light, not heavy.

**Cards** — `#111829` fill, 16px radius, 1px hairline border, minimal shadow at rest. On hover the
signature move is a **blue border glow** (`rgba(59,130,246,0.45)` border + soft blue box-shadow) and
a **−4px lift**. This is the one consistent "Orbit" interaction.

**Radii** — 8 / 12 / 16 / 20 / pill. Buttons 9–13px. Cards 16px. Big CTA panels 24px. Nothing sharp.

**Elevation / shadow** — shadows are soft and dark (`0 8–24px rgba(0,0,0,.45–.55)`); colored "glow"
shadows (blue/orange) are reserved for hover and the highlighted pricing tier. Glow = attention, not decoration.

**Hover states:** links lighten fg-2 → fg-1; buttons darken one step + grow shadow; cards lift + blue glow.
**Press states:** buttons `scale(0.97)`. **Easing:** quick and crisp — `cubic-bezier(.2,.7,.3,1)`, ~120–220ms.
Fades and small lifts only; no bounces, no infinite loops on content.

**Transparency & blur** — the sticky nav goes from transparent to `rgba(10,14,26,0.72)` + 12px backdrop
blur once scrolled. Used purposefully (overlays/sticky chrome), never as decoration.

**Imagery vibe** — cool, dark, spacious. The brand mark is off-white on navy. If photography is added
later it should be cool-toned and uncluttered (real trades, real shops — no stocky cheese).

---

## 5. Iconography

- **System:** [Lucide](https://lucide.dev) — clean, consistent **2px-stroke line icons**. This matches
  the minimal premium aesthetic and the line-weight of the Orbit planet mark. It is a **substitution**
  (no proprietary Orbit icon set exists yet) — chosen for being open-source, comprehensive, and CDN-available.
- **Delivery:** in the React UI kit, loaded via the Lucide UMD CDN and rendered through the `<Icon>`
  primitive (`Primitives.jsx`). In static preview cards, loaded via the `lucide-static` icon font.
- **Common glyphs:** `phone-call`, `phone-missed`, `message-square`, `layout-template`, `moon`,
  `mouse-pointer-click`, `rocket`, `search`, `trending-up`, `calendar-check`, `check`, `arrow-right`,
  `mail`, `radio`, `clock`, `zap`.
- **Tinting:** icons sit in rounded "chip" tiles — blue-tinted (`rgba(59,130,246,.10)` bg, `#60A5FA`
  glyph) for product/positive, orange-tinted for the problem section.
- **No emoji, no unicode-as-icon** on the brand surface.

---

## 6. Fonts

The display face is the **real Anthropic Serif** (provided by the brand owner), bundled in `fonts/`
and loaded via `fonts/anthropic-serif.css`. It ships in two optical cuts:

| Role | Family | Where used |
|---|---|---|
| Serif display | **Anthropic Serif Display** | Hero, H1/H2, wordmark, prices (≥ ~28px) |
| Serif text | **Anthropic Serif Text** | H3, card titles, inline serif (< ~28px) |
| Body / UI grotesque | **Geist** | Body, buttons, fields, captions (Styrene-style) |
| Mono / labels | **Geist Mono** | Eyebrows, labels, code, metrics |

> ⚠️ **Licensing:** the brand owner will complete Anthropic Serif licensing **before deployment**.
> Weights bundled: Display Light/Regular/Medium/Semibold/Bold + Text Regular/Medium/Semibold/Bold
> (italics available in `uploads/` if needed). Geist & Geist Mono are open-source (Google Fonts).

---

## 7. Index — what's in this folder

```
README.md                  ← you are here
colors_and_type.css        ← all CSS variables (color, type, spacing, radii, shadow) + semantic classes
SKILL.md                   ← Agent-Skill manifest (use this system from Claude Code)

fonts/                     ← Anthropic Serif (licensed display face) + @font-face stylesheet
  anthropic-serif.css        load this from any HTML; relative .otf paths resolve from here
  AnthropicSerif-Display-*.otf   Light / Regular / Medium / Semibold / Bold
  AnthropicSerif-Text-*.otf      Regular / Medium / Semibold / Bold

assets/                    ← brand marks
  orbit-mark.png             off-white planet mark, transparent
  orbit-mark-white.png       crisp #F8FAFC version
  orbit-mark-blue.png        #3B82F6 accent version (favicons / one-color use)
  orbit-mark-navy.png        original mark on solid navy

preview/                   ← Design System tab cards (colors, type, spacing, components, brand)

ui_kits/
  website/                 ← high-fidelity marketing site recreation (the product surface)
    README.md
    index.html               assembled landing page
    Primitives.jsx           Icon, Button, Eyebrow, Wordmark
    NavHero.jsx              sticky nav + hero (radial glow)
    Sections.jsx             problem / what we build / how it works
    Pricing.jsx              four-tier pricing
    Closing.jsx              final CTA band + footer

uploads/                   ← original provided source (logo)
```

**Start here:** open `ui_kits/website/index.html` to see the brand assembled, and
`colors_and_type.css` for every token.
