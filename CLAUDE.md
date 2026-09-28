# mattryan.ai — project brief for Claude Code

This is Matt Ryan's personal-brand site, built to become the home of his
consulting practice. Treat it as a thought-leadership site first: the ideas are
the hero, Matt is the credibility behind them.

**Positioning: applied AI and enterprise adoption, not a job search.** The
primary audience is recruiters and event organizers at AI companies. The site
must read as a speaker and thought-leadership brand. Nothing on it should
signal that Matt is job-hunting. Keep copy tight: three sentences max per
paragraph, roughly 50 words, one idea per paragraph, the point in the first
sentence. No em dashes or en dashes anywhere in user-facing copy (headings,
body, alt text, aria-labels) — use commas, colons, or periods; ranges use
"to". Prefer plain words ("use" over "leverage", "build" over "architect")
when both work equally well. GRR/NRR deltas are percentage points: write "pp",
not "%".

Three phrases are signature lines and may each appear exactly once, site-wide:
"made the quota carrier credible" (About section only), "most technical voice
in the executive room" (the About heading), "operating system rather than
disconnected motions" (currently on /speaking, the CCO Summit talk). Don't let
edits accidentally duplicate one of these elsewhere.

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
2. 01 About — story-driven bio, four short paragraphs
3. 02 Lessons earned — the semicolon incident, the pull quote, three
   one-line principles
4. 03 Expertise — four competencies, forward deployed engineering first
5. 04 Selected work — featured card links to `/system`, plus four career projects
6. 05 Things I build myself — personal projects (currently just Infiniti);
   `.work-grid.is-single` keeps a lone card from leaving a dead grid cell
7. 06 Career — the timeline, including the Baxter International entry
8. Contact — email + LinkedIn CTA

The career timeline and the hero's "Built at" logo rail both use
`CompanyLogo` — pass a `slug` for a real logo asset, omit it for a plain-text
fallback chip. Don't put the Workday logo on the Alight row or in the rail:
Matt ran a Workday practice at Alight, he never worked at Workday. There's no
Alight logo asset yet, so that slot renders as text until one is supplied.

**`app/system/page.tsx` — the AI GTM Operating System.** The full framework:
Hero, Foreword, System (SOAR), Proof, Activation, In practice, Governance,
Contact. This page carries no bio; the profile page owns that. "Shared with
G2's permission." runs under the hero stats and again above the GRR/NRR
chart — keep both notes if you touch that content. The four workflow cards'
"How it works" breakdown is a `<details>`/`<summary>` (`.wf-how`), closed by
default; don't force it open or convert it back to a plain div.

**`app/speaking/page.tsx` — speaking.** Numbered sections:
1. Hero — thesis line + mono-treated stage photo + "Book a talk" CTA, plus a
   "Download speaker one-sheet" button (same button repeats near the closing
   CTA) linking to `/matt-ryan-speaker-one-sheet.pdf`
2. 01 Through the years — a five-photo career strip, 2006 to now, all in the
   mono-photo treatment so wildly different cameras and eras read as one story
3. 02 Speaking topics — six bookable pillars, each one sentence plus one
   proof line from the operating history
4. 03 Speaking history — sessions actually delivered, each with a
   `[Month Year]` placeholder date until Matt supplies the real ones; the one
   entry with a confirmed matching photo (Customer Success Summit) carries it
   inline
5. 04 Formats and audiences
6. Contact — same pattern as the other two pages

`public/matt-ryan-speaker-one-sheet.pdf` is a placeholder (a minimal valid
PDF saying so) — swap it for the real one-sheet when Matt supplies it, don't
just relink elsewhere.

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

Matt's real numbers (46% renewal lift, 60% support cost cut, $2.7M savings, $4M
services revenue, 0–8 Pulse Score, 90–180 day lead time) and career facts come
from his resume and the FY27 G2 churn BOD deck. Don't invent new metrics. Links:
LinkedIn `linkedin.com/in/matthewwryan`, GitHub `github.com/imreallyintoit`,
email `matthew773@gmail.com`.

The Pulse Score interpretation matrix on `/system` (the eight-profile table)
separately shows a "48%" and a "93% to 48%" range — that's an unrelated
illustrative renewal rate for one profile, not the renewal-lift metric above.
Don't conflate the two or "fix" the matrix to make a repo-wide search for 48%
return zero; the matrix's numbers are real, if you touch them, verify with
Matt first.

## SEO / metadata

Every route has its own `metadata` export (title, description, matching
openGraph/twitter blocks) — the profile page's default lives in
`app/page.tsx`, not just `app/layout.tsx`. Each of the three pages has an
`opengraph-image.tsx` (1200×630, `next/og`, dark background matching the
brand tokens) — the profile one embeds the headshot, speaking embeds
`g2-stage-hero.jpg`, system uses a plain orbital-rings graphic. `next/og`'s
Satori renderer has limited CSS support: avoid `filter` chains and anything
fancier than flexbox, borders, and border-radius, or the image silently fails
to render. `app/icon.svg` is the favicon (the nav's orbital mark, colors
hardcoded since favicons don't get the page's CSS). `app/robots.ts` and
`app/sitemap.ts` use the Next.js file conventions — add a new route to both
lists if one is added. The profile page also carries a Person JSON-LD script;
keep `sameAs`, `worksFor`, and `alumniOf` in sync with reality if any of them
change.

## Deploy

GitHub → Vercel native integration (auto-deploys on push to `main`). Custom
domain `mattryan.ai`. See README.md for the exact steps.

`www.mattryan.ai` returning a 503 is a Vercel domain-settings issue, not
something fixable from code: in the Vercel project, Settings → Domains, add
`www.mattryan.ai` and set it to redirect (308) to the apex `mattryan.ai`.

## Quality floor

Responsive to mobile, visible keyboard focus, `prefers-reduced-motion`
respected (already handled in globals.css). Keep it.
