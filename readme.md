# ENOMIS Coffee — Design System

Playful, hand-drawn brand for **ENOMIS Coffee**, a specialty-coffee & artisanal-lemonade café in Satu Mare, Romania. Copy is in Romanian, warm and casual.

**Source:** Figma file `enomis_pro.fig` (mascot barista line-art logo, illustrated lemonade glasses, the "LIMO" menu poster, moka/machine icons). Palette seeded from a Color Hunt palette: `#FFF6DE #8BDFDD #F48F68 #FFE394`.

---

## Content fundamentals
- **Language:** Romanian. Diacritics are **omitted** on purpose (e.g. "CAFEA BUNA", "limonada", "lamaie") — the brand font set doesn't carry them.
- **Tone:** friendly, cozy, gen-z. Short lines, lowercase body, occasional `✦` sparkle and `☕`.
- **Voice:** "noi" (we) talking to "tu" (you) — "Te asteptam cu drag", "Vino la noi".
- **Tagline:** *Cafea buna, vibe si mai bun.*

## Visual foundations
- **Colors (no black, ever):** cream `#FFF6DE` base; teal `#8BDFDD`, orange `#F48F68` (primary accent / CTAs), yellow `#FFE394`. Warm "cocoa" `#7A5638` for text/icons instead of black; soft tints mint/peach/lilac for section blocks.
- **Type:** **Gaegu** (rounded handwritten) for everything — display & body. Self-hosted from `fonts/`.
- **Shape language:** wobbly hand-drawn border-radii (`--wob`, `--wob2`), dashed borders & dividers, washi-tape strips, animated sparkles, sketch underlines that draw on scroll, organic morphing "swatch" blobs, dashed rotating rings. No hard geometric circles, no gradients, no purple-blue clichés.
- **Motion:** gentle float/bob loops, scroll-reveal with stagger, marquee, springy hover (lift + slight rotate), press = scale down.
- **Cards:** cream-soft fill, 3px solid cocoa outline, wobbly radius, soft warm shadow on hover.

## Iconography
- **Logo / mascot:** line-art barista pouring coffee — `assets/mascot-orange.svg` (primary), `assets/mascot-cream.svg` (on dark/orange). Base `assets/mascot.svg` is black, recolor per use.
- **UI icons:** hand-drawn stroke icons inline as SVG (1.7–1.8 stroke, round caps) — cup, jar, pin, arrow. Brand icons from Figma copied to `assets/` (`icon-moka.svg`, `icon-machine.svg`).
- **Illustrations:** transparent PNG lemonade glasses (`lemonade-clasica/-capsuni/-fructe.png`), the LIMO menu poster (`photo-1/-2.png`).
- Emoji used sparingly (`☕ ✦`); no icon font.

---

## Index
- `ENOMIS Website.html` + `ENOMIS Website.css` + `ENOMIS Website.js` — the full animated marketing site (hero, marquee, "De ce ENOMIS", limonade, poster, vino la noi, footer).
- `ENOMIS Website.css` — also the token source: `:root` brand colors, `--font`, `--wob*` radii, shadows + `@font-face` for Gaegu.
- `components/core/Button.{jsx,d.ts,prompt.md}` + `buttons.card.html` — brand button (primary / ghost / soft).
- `assets/` — mascot SVGs, lemonade illustrations, menu posters, icons.
- `fonts/` — Gaegu Light/Regular/Bold (self-hosted).
- `SKILL.md` — agent-skill entry point.

> **Caveat:** there is no separate illustration for "limonada cu soc" (elderflower) as a transparent glass — the third lemonade card uses "Fructe de padure" instead. Upload a soc glass PNG to add it.
