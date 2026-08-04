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

Single page, `app/page.tsx`, sections in order:
1. Hero — thesis + Prediction Loop visual
2. System — The Prediction Loop (4 stages) + three layers (humans/agents/digital)
3. Proof — G2 metrics + Pulse Score meter
4. About — story-driven bio + timeline + LinkedIn/GitHub links
5. Contact — email + LinkedIn CTA

`components/Reveal.tsx` is a scroll-reveal wrapper (renders a `<div>` with the
passed className — that's why grid children like `.metric` get their class via
`<Reveal className="metric">`).

## The headshot

Currently a styled placeholder in the About section (`app/page.tsx`, search
`headshot`). To add the real photo:
1. Put a portrait image (~4:5, min 800×1000) at `public/headshot.jpg`
2. Uncomment the `<img src="/headshot.jpg" alt="Matt Ryan" />` line
3. Delete the `.headshot-placeholder` div

## Content that must stay accurate

Matt's real numbers (46% renewal lift, $2.7M savings, $4M services revenue, 0–8
Pulse Score, 90–180 day lead time) and career facts come from his resume. Don't
invent new metrics. Links: LinkedIn `linkedin.com/in/matthewwryan`, GitHub
`github.com/imreallyintoit`, email `matthew773@gmail.com`.

## Deploy

GitHub → Vercel native integration (auto-deploys on push to `main`). Custom
domain `mattryan.ai`. See README.md for the exact steps.

## Quality floor

Responsive to mobile, visible keyboard focus, `prefers-reduced-motion`
respected (already handled in globals.css). Keep it.
