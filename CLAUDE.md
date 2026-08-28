# mattryan.ai — project brief for Claude Code

This is Matt Ryan's personal-brand site, built to become the home of his
consulting practice. Treat it as a thought-leadership site first: the ideas are
the hero, Matt is the credibility behind them.

## What this site is about

The **AI GTM Operating System** — Matt's framework for running go-to-market as a
predictive system: humans, agents, and digital experiences orchestrated around
the customer journey. Its engine is **The Prediction Loop** (predict →
orchestrate → act → learn). The core thesis the whole site defends: *prediction*
is what separates real AI-driven GTM from reactive tooling. The Pulse Score (a
0–8 predictive health model Matt built at G2) is the proof that prediction is
operational, not theoretical.

Do not water this thesis down into generic "AI-powered" copy. The distinction
between predicting and reacting is the point.

## Stack

- Next.js 15 (App Router) + React 19, TypeScript
- Plain CSS in `app/globals.css` — no Tailwind. The entire design system
  (colors, type, components) lives there as CSS variables and classes.
- No database, no API routes. Static marketing site.

## Design system — "war room / command center"

Dark, premium, AI-native. The signature move is **two signal colors doing
opposite jobs**, not one accent on black:

- `--signal` (cold cyan `#38bdf8`) = steady state, the system running.
- `--alert` (amber `#f5a524`) = the prediction firing — a risk seen early.

Everything else is disciplined obsidian + graphite + cool off-white. All tokens
are defined at the top of `globals.css`. Derive every new color/type decision
from those variables; don't introduce ad-hoc hex values.

Type: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data).

The signature elements are the **Prediction Loop** orbital SVG
(`components/PredictionLoop.tsx`) in the hero and the **Pulse Score meter** in
the proof section. Protect these — they carry the brand. If you rework them,
keep the "risk seen early" idea legible.

## Structure

Three pages, sharing a nav and footer. Matt the person is the front door; the
framework and the speaking history each live one click deeper.

**`app/page.tsx` — the profile (home).** Matt's personal brand. Numbered
sections carry the reading order:
1. Hero — thesis line + headshot portrait + "Explore my work" CTA
2. 01 About — story-driven bio
3. 02 Expertise — four competencies
4. 03 Selected work — featured card links to `/system`, plus four career projects
5. 04 Career — the timeline
6. Contact — email + LinkedIn CTA

**`app/system/page.tsx` — the AI GTM Operating System.** The full framework:
Hero, Foreword, System (SOAR), Proof, Activation, In practice, Governance,
Contact. This page carries no bio; the profile page owns that.

**`app/speaking/page.tsx` — speaking.** Numbered sections:
1. Hero — thesis line + mono-treated stage photo + "Book a talk" CTA
2. 01 Through the years — a five-photo career strip, 2006 to now, all in the
   mono-photo treatment so wildly different cameras and eras read as one story
3. 02 Speaking topics — eight bookable pillars, each backed by a real proof
   point from the operating history
4. 03 Speaking history — sessions actually delivered; the one entry with a
   confirmed matching photo (Customer Success Summit) carries it inline
5. 04 Formats and audiences
6. Contact — same pattern as the other two pages

Don't invent a speaking engagement or attach a photo to one it doesn't match.
Every entry in `talks` and `photoStrip` in that file must trace to a real
session or a real photo; if a new one is added without solid proof, leave the
`photo`/`link` fields off rather than guessing.

Shared: `components/SiteNav.tsx` (client component, highlights the active page
via `usePathname`; labels switch to short forms on mobile with `aria-label`
holding the full name) and `components/SiteFooter.tsx`.

`.mono-photo` in `globals.css` is the site's one photo treatment: grayscale
plus a cyan-tinted overlay, so any conference photo (different camera, era,
lighting) reads as part of one system. Apply it to any new photo added
anywhere on the site rather than leaving one photo in full color next to
others in the treatment.

`components/Reveal.tsx` is a scroll-reveal wrapper (renders a `<div>` with the
passed className — that's why grid children like `.metric` get their class via
`<Reveal className="metric">`).

## The headshot

`public/headshot.png` — 500×500, transparent background, which is why it sits
cleanly on the dark `.pf-portrait-frame` card. If you swap it, keep the
transparent background or the square will read as a bright block on the dark
page.

## Content that must stay accurate

Matt's real numbers (48% renewal lift, 60% support cost cut, $2.7M savings, $4M
services revenue, 0–8 Pulse Score, 90–180 day lead time) and career facts come
from his resume and the FY27 G2 churn BOD deck. Don't invent new metrics. Links:
LinkedIn `linkedin.com/in/matthewwryan`, GitHub `github.com/imreallyintoit`,
email `matthew773@gmail.com`.

## Deploy

GitHub → Vercel native integration (auto-deploys on push to `main`). Custom
domain `mattryan.ai`. See README.md for the exact steps.

## Quality floor

Responsive to mobile, visible keyboard focus, `prefers-reduced-motion`
respected (already handled in globals.css). Keep it.
