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
6. 05 Things I build myself — five image-topped `.build-card`s (`.build-grid`
   in globals.css): Infiniti and Youthy (personal projects), Pack 5 Wilmette
   and the Village of Wilmette AI advisory (community and civic), and the
   Breast Cancer Research Foundation (volunteer advisory). `.build-grid` uses
   `repeat(auto-fit, minmax(260px, 1fr))` rather than a fixed column count so
   five cards, an odd number, reflow cleanly at any width instead of leaving
   a dead cell. All five cards render `.build-card-image.is-icon`: a single
   small (56px), quiet, thin-stroke motif centered on a flat `--obsidian`
   field, no frame or caption, standing in for a real photo or screenshot
   until Matt supplies one. Each card's icon component lives near the top of
   `app/page.tsx` (`InfinityIcon` for Infiniti, `SportIcon` for Youthy,
   `TentIcon` for Pack 5, `MicrophoneIcon` for the civic advisory, and
   `RibbonIcon`, reused small next to the BCRF card's label too) and is
   chosen to evoke the block without depicting anything literal (no
   identifiable people, no specific screenshots) it would have to later
   contradict. `imageAlt` on each card is already written and wired to the
   icon wrapper's `aria-label`, so swapping an icon for a real
   `<img loading="lazy" width height src="....webp">` (per the quality
   floor: lazy loaded, WebP or AVIF, explicit dimensions to avoid layout
   shift) only means replacing that one card's markup, not its copy or alt
   text. `RibbonIcon` is the one exception meant to stay permanently: a
   breast cancer awareness ribbon drawn in the site's own line art rather
   than the 🎗️ emoji, which renders yellow on most devices, using
   `--bcrf-pink`, the site's one deliberate exception to the signal/alert
   two-color system (a real-world symbol color, not a UI accent) — don't
   reach for `--bcrf-pink` anywhere else, and don't let it drift toward
   being a third site accent.
7. 06 Career — the timeline, including the Baxter International entry
8. Contact — email + LinkedIn CTA

The career timeline and the hero's "Built at" logo rail both use
`CompanyLogo` — pass a `slug` for a real logo asset, omit it for a plain-text
fallback chip. The rail is ordered left to right as a career timeline too,
oldest to newest, ending with G2 today: IBM, Alight, Slack/Salesforce,
Upwork, G2.

Two of those five slots are `.co-logo-stack` (globals.css): a logo with a
small caption underneath instead of a second logo, a static two-row layout
with no animation, since an earlier crossfade-between-two-logos version of
this (swapped on a timer) didn't behave on mobile. Slack is captioned "Owned
by Salesforce" because Salesforce acquired Slack during that era on the
career timeline (2020 to 2022) and showing both logos independently
overstated it as two separate jobs. Alight is captioned "Workday Partner"
for a different reason: Matt ran Alight's Workday HCM practice as a Workday
implementation partner, he never worked at Workday itself. The career
timeline's Alight row states that explicitly in its own text ("VP,
Professional Services"), so it stays plain-text only, no Workday logo there;
the rail's Alight slot has no room for that context, so the caption carries
it instead. Keep that distinction if either section changes: spelled out in
prose on the timeline, "Workday Partner" caption in the rail, a bare Workday
logo in neither place.

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
2. 01 Through the years — a six-photo career strip, 2006 to now, all in the
   mono-photo treatment so wildly different cameras and eras read as one story
3. 02 Speaking topics — six bookable pillars, each one sentence plus one
   proof line from the operating history
4. 03 Engagements (anchor `#engagements`) — a vertical timeline grouped by
   year, newest first, with an era filter chip row (All, G2, Upwork, Slack,
   Workday era, PeopleSoft era); entries with a confirmed matching photo
   (Customer Success Summit Chicago 2025, Workday Rising 2018) carry it inline
5. 04 Formats and audiences, with a small photo of a real working session
   next to the formats list
6. Contact — same pattern as the other two pages

**`app/speaking/one-sheet/page.tsx` — the speaker one-sheet, not a page a
visitor is meant to find.** It renders at a fixed US Letter size (`.sheet` in
globals.css, the "SPEAKER ONE-SHEET" section) and has no `SiteNav` or
`SiteFooter` import, which is enough to keep it chrome-free since those are
opted into per page on this site rather than rendered by the root layout.
Its metadata sets `robots: { index: false, follow: false }` and it's left out
of `app/sitemap.ts` on purpose. `npm run one-sheet` (see README.md's "Speaker
one-sheet" section) captures this route with Playwright and overwrites
`public/matt-ryan-speaker-one-sheet.pdf`; edit the route and regenerate,
never hand-edit the PDF. The build script calls the underlying Chrome
DevTools Protocol `Page.printToPDF` with `generateTaggedPDF: true` directly
rather than Playwright's `page.pdf()`, which is required for the contact
links to come through as clickable PDF link annotations. Don't add a
pdf-lib (or similar) metadata-setting pass after capture: a load and resave
through pdf-lib strips this PDF's link annotations even with no changes
made, which was confirmed by testing a true no-op round trip, so PDF title
and author metadata are left unset rather than traded for working links.

**Engagements and the six speaking topics are data-driven, not hardcoded
markup, and shared with the one-sheet.** `lib/speaking-data.ts` exports
`topics` and `rawEngagements: RawEngagement[]`; both `app/speaking/page.tsx`
and `app/speaking/one-sheet/page.tsx` import from there so the two surfaces
can't drift on a talk title, date, or figure. All 17 engagements render
unconditionally. All date math, year grouping, the newest-first sort within
each year, and the Upcoming flag, happens once in the speaking page's Server
Component by comparing each entry's `startDate` (ISO) against `todayISO` as
plain strings, then gets baked into `engagementsByYear` and handed down as
props. `components/EngagementsTimeline.tsx` is a "use client" component that
only owns the era filter's `useState`; it has no date logic of its own, so
there's nothing to disagree with the server-rendered HTML during hydration.
The one-sheet's Stages section reuses the same startDate-vs-today convention
for its own Upcoming tag, computed from the four newest entries in
`rawEngagements`. Don't invent a speaking engagement or attach an `image` to
one it doesn't match; every entry in `rawEngagements` and `photoStrip` must
trace to a real session or a real photo. If a future entry's date, city, or
title isn't confirmed yet, leave it out of the array rather than rendering a
placeholder like `[CONFIRM]` or guessing a value.

Shared: `components/SiteNav.tsx` (client component, highlights the active page
via `usePathname`; labels switch to short forms on mobile with `aria-label`
holding the full name) and `components/SiteFooter.tsx`. Both render the
wordmark as `public/logos/mattryanai.svg` (an `<img>`, sized via
`.wordmark-logo` in globals.css) rather than styled text; the SVG's own
colors are hardcoded to the site's `--ink`/`--signal` values, the same
reasoning as `app/icon.svg`, since CSS variables aren't reachable inside an
asset loaded through `src`. The nav additionally prefixes it with the
orbital mark (`.nav-mark`, inline SVG so it does use the page's CSS
variables); the footer shows the wordmark alone, no orbital mark, matching
how it looked before this asset existed.

`.mono-photo` in `globals.css` is the site's one photo treatment: grayscale,
an SVG feTurbulence film-grain layer, and a cyan-tinted overlay, so any
conference photo (different camera, era, lighting) reads as part of one
system and none of them reads as AI-generated. Apply it to any new photo
added anywhere on the site rather than leaving one photo in full color next to
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
LinkedIn `linkedin.com/in/matthewwryan`, email `matthew773@gmail.com`. Matt
asked for his GitHub profile link removed site-wide (it no longer appears in
the footer, the profile page's About links, or the Person JSON-LD `sameAs`
array); don't re-add a GitHub link anywhere without asking him first.

The Pulse Score interpretation matrix on `/system` (the eight-profile table)
separately shows a "48%" and a "93% to 48%" range — that's an unrelated
illustrative renewal rate for one profile, not the renewal-lift metric above.
Don't conflate the two or "fix" the matrix to make a repo-wide search for 48%
return zero; the matrix's numbers are real, if you touch them, verify with
Matt first.

## Analytics

`app/layout.tsx` renders `<GoogleAnalytics gaId="G-08RW7TDK58" />` from
`@next/third-parties/google`, as a sibling of `<body>` inside `<html>` (the
pattern that package's docs call for) so it loads on every route, including
`/speaking/one-sheet`. Don't hand-roll the gtag.js `<script>` tags instead;
this package is the officially supported way to wire gtag.js into a Next.js
App Router site and already handles SPA route-change pageviews.

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
