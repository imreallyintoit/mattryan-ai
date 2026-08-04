# mattryan.ai

Personal-brand site for Matt Ryan — the **AI GTM Operating System**, powered by
**The Prediction Loop**. Next.js 15 + React 19, plain CSS, dark "command-center"
aesthetic.

---

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build check before deploying:

```bash
npm run build
```

---

## Add your headshot

1. Drop a portrait image at `public/headshot.jpg` (~4:5 ratio, at least 800×1000).
2. In `app/page.tsx`, find the `About` section and:
   - uncomment `{/* <img src="/headshot.jpg" alt="Matt Ryan" /> */}`
   - delete the `<div className="headshot-placeholder">…</div>` block.

---

## Ship it: GitHub → Vercel → domain

### 1. Push to GitHub

If you're doing this from Claude Code, it can run these for you. Otherwise:

```bash
git init
git add -A
git commit -m "feat: mattryan.ai initial site"
# create an empty repo named 'mattryan-ai' on github.com first, then:
git remote add origin https://github.com/imreallyintoit/mattryan-ai.git
git branch -M main
git push -u origin main
```

> Tip: with the GitHub CLI installed you can skip the web step:
> `gh repo create mattryan-ai --private --source=. --remote=origin --push`

### 2. Connect Vercel (native integration — no config files needed)

1. Go to [vercel.com](https://vercel.com) and sign in **with GitHub**.
2. **Add New… → Project**, then import the `mattryan-ai` repo.
3. Vercel auto-detects Next.js. Leave all build settings at their defaults.
4. Click **Deploy**. First build takes ~1 minute.

From now on, **every push to `main` auto-deploys to production**, and every pull
request gets its own preview URL. No GitHub Actions workflow or tokens required —
the native integration handles CI/CD.

### 3. Point mattryan.ai at it

1. Buy `mattryan.ai` (Porkbun).
2. In Vercel: **Project → Settings → Domains → Add** → enter `mattryan.ai`.
3. Vercel shows the DNS records to set. Easiest path:
   - Add `mattryan.ai` (apex) and `www.mattryan.ai`.
   - At Porkbun, set the **A record** / **CNAME** exactly as Vercel instructs
     (Vercel will show current values — follow those, not hard-coded IPs here).
4. Wait for DNS to propagate (usually minutes). Vercel issues the SSL cert
   automatically.

---

## Project map

```
app/
  layout.tsx      — fonts + metadata
  page.tsx        — the whole single-page site
  globals.css     — the entire design system (colors, type, components)
components/
  PredictionLoop.tsx  — hero orbital SVG (signature element)
  Reveal.tsx          — scroll-reveal wrapper
public/
  headshot.jpg    — (add this)
CLAUDE.md         — brief for Claude Code: intent + design rules
```

See `CLAUDE.md` before making design changes — it explains the two-signal color
logic and what to protect.
