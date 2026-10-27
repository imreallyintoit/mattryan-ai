import type { Metadata } from "next";
import { topics, rawEngagements } from "@/lib/speaking-data";

// This route is the source of truth for the speaker one-sheet. It renders at
// a fixed US Letter size and is captured to PDF by scripts/build-one-sheet.mjs
// (see package.json's "one-sheet" script), which overwrites
// public/matt-ryan-speaker-one-sheet.pdf. Edit copy here, regenerate, commit
// both. Deliberately has no SiteNav or SiteFooter: unlike app/layout.tsx,
// those are opted into per page on this site rather than rendered by the
// root layout, so a page that omits them never shows site chrome.
export const metadata: Metadata = {
  title: "Matt Ryan, Speaker One-Sheet",
  description: "Speaker bio, signature talks, and stages for Matt Ryan.",
  robots: { index: false, follow: false },
};

const todayISO = new Date().toISOString().slice(0, 10);

// The four most recent stages, same source and the same startDate-vs-today
// "Upcoming" convention as the Engagements timeline on /speaking, so the two
// surfaces never disagree about what counts as upcoming.
const stages = rawEngagements.slice(0, 4).map((e) => ({
  ...e,
  isUpcoming: e.startDate > todayISO,
}));

const proofStrip = [
  { figure: "49% to 80%", label: "booked renewal rate at G2" },
  { figure: "60%", label: "support cost cut" },
  { figure: "90 to 180 days", label: "of churn warning before renewal" },
  { figure: "$100K to $11M", label: "forward deployed engineering at Slack" },
];

// Flattened-to-white marks from the same set the site's "Built at" rail uses
// (see components/CompanyLogo.tsx). On white paper they're inverted to black
// in CSS: every asset here is confirmed solid white on transparent with no
// secondary color to lose, so invert() is a safe, lossless flip for print.
const logos = [
  { name: "G2", src: "/logos/g2-mono.png" },
  { name: "Slack", src: "/logos/slack-mono.svg" },
  { name: "Salesforce", src: "/logos/salesforce-mono.png" },
  { name: "Upwork", src: "/logos/upwork-mono.svg" },
  { name: "IBM", src: "/logos/ibm-mono.svg" },
];

export default function OneSheetPage() {
  return (
    <div className="one-sheet-screen">
      <a
        href="/matt-ryan-speaker-one-sheet.pdf"
        target="_blank"
        rel="noopener"
        className="one-sheet-download screen-only"
      >
        Download PDF
      </a>

      <main className="sheet">
        <header className="os-band">
          <div className="os-band-text">
            <div className="os-name">Matt Ryan</div>
            <div className="os-role">VP, Global Solutions &amp; Customer Success at G2</div>
            <h1 className="os-headline">
              The health score is already too late. AI isn&apos;t.
            </h1>
            <p className="os-subhead">
              I speak on AI-native customer success, predictive retention, and
              forward deployed engineering. Every talk is backed by a system I
              built and ran.
            </p>
          </div>
          <img src="/headshot.png" alt="Matt Ryan" className="os-headshot" />
        </header>

        <section className="os-proof">
          {proofStrip.map((p) => (
            <div className="os-proof-item" key={p.label}>
              <div className="os-proof-figure">{p.figure}</div>
              <div className="os-proof-label">{p.label}</div>
            </div>
          ))}
        </section>

        <section className="os-body">
          <div className="os-col os-col-talks">
            <h2>Signature talks</h2>
            <ul className="os-talks">
              {topics.map((t) => (
                <li className="talk" key={t.n}>
                  <strong>{t.title}{/[.!?]$/.test(t.title) ? "" : "."}</strong> {t.body} {t.proof}
                </li>
              ))}
            </ul>
          </div>

          <div className="os-col os-col-side">
            <section>
              <h2>About Matt</h2>
              <p>
                Matt Ryan is VP of Global Solutions and Customer Success at
                G2. He architected G2&apos;s AI GTM Operating System: a
                predictive health score, a 30-day activation model, and 14
                live agentic workflows running from onboarding to renewal. He
                also co-launched G2&apos;s commercial MCP strategy.
              </p>
              <p>
                He started as a software engineer and has spent 20 years
                building the teams that get enterprise software adopted. At
                Slack he grew forward deployed engineering from a $100K pilot
                to an $11M business with 65+ architects. At Alight he scaled
                a Workday practice toward a business approaching $200M under
                private equity ownership.
              </p>
            </section>

            <section>
              <h2>Stages</h2>
              <ul className="os-stages">
                {stages.map((s) => (
                  <li className="os-stage" key={s.event}>
                    <div className="os-stage-top">
                      <span className="os-stage-event">{s.event}</span>
                      {s.isUpcoming && <span className="os-stage-badge">Upcoming</span>}
                    </div>
                    <div className="os-stage-meta">
                      {s.dates} &middot; {s.city}
                    </div>
                    <div className="os-stage-title">&quot;{s.title}&quot;</div>
                  </li>
                ))}
              </ul>
              <p className="os-past-stages">
                Workday Rising (five times, 2012 to 2019), Oracle OpenWorld
                (2006, 2010), Slack Frontiers 2021, Upwork Work Without Limits
                (2022, 2023), SIA CWS Summit 2022, SIA Collaboration in the
                Gig Economy 2023.
              </p>
            </section>

            <section>
              <h2>Formats</h2>
              <p className="os-formats">
                Keynote, fireside chat, panel, half-day workshop, and live
                demo (signal to outreach through MCP).
              </p>
            </section>
          </div>
        </section>

        <footer className="os-footer">
          <div className="os-contact">
            <a href="mailto:matthew773@gmail.com?subject=Speaking%20inquiry">
              matthew773@gmail.com
            </a>
            <a
              href="https://mattryan.ai/speaking"
              target="_blank"
              rel="noopener noreferrer"
            >
              mattryan.ai/speaking
            </a>
            <a
              href="https://www.linkedin.com/in/matthewwryan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/matthewwryan
            </a>
          </div>
          <div className="os-logos">
            {logos.map((l) => (
              <img key={l.name} src={l.src} alt={l.name} className="os-logo" />
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
