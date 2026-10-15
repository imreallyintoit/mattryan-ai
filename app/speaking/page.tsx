import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import EngagementsTimeline, { type EngagementItem, type YearGroup } from "@/components/EngagementsTimeline";
import { topics, rawEngagements } from "@/lib/speaking-data";

export const metadata = {
  title: "Speaking · Matt Ryan · AI-Native Customer Success",
  description:
    "Matt Ryan speaks on AI-native customer success, predictive retention, MCP and AI agents, and enterprise platforms. Sessions at ChurnZero ZERO-IN, Pavilion GTM, Customer Success Summit, Workday Rising and Oracle OpenWorld.",
};

const photoStrip = [
  {
    src: "/speaking/career-2006-ibm.jpg",
    caption: "IBM Global Business Services. Early technical delivery, first time in front of a room.",
  },
  {
    src: "/speaking/career-aon-hewitt.jpg",
    caption: "Aon Hewitt, the HR consulting practice that later spun off into Alight.",
  },
  {
    src: "/speaking/csc-summit-stage.jpg",
    caption: "Customer Success Summit, Chicago. Customer Success Collective.",
  },
  {
    src: "/speaking/g2-mid-year-meetup.jpg",
    caption: "G2 Mid-Year Meetup.",
  },
  {
    src: "/speaking/g2-stage-explain.jpg",
    caption: "G2, on the main stage.",
  },
  {
    src: "/speaking/g2-r4r-panel.jpg",
    caption: "G2 revenue leadership offsite. Looking back on twenty years in the room.",
  },
];

// Upcoming is computed once, here, from today's date at build time, by
// comparing ISO date strings directly (they sort lexicographically the same
// as chronologically, so no Date parsing or timezone handling is needed).
// The result is baked into plain data and handed to the client component,
// which does no date math of its own, so there is nothing for hydration to
// disagree with between the build-time render and the browser.
const todayISO = new Date().toISOString().slice(0, 10);

const engagementsByYear: YearGroup[] = (() => {
  const byYear = new Map<number, EngagementItem[]>();
  for (const raw of rawEngagements) {
    const year = Number(raw.startDate.slice(0, 4));
    const item: EngagementItem = { ...raw, isUpcoming: raw.startDate > todayISO };
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(item);
  }
  for (const items of byYear.values()) {
    items.sort((a, b) => (a.startDate > b.startDate ? -1 : 1));
  }
  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
})();

export default function SpeakingPage() {
  return (
    <>
      <SiteNav />

      {/* ---------------- HERO ---------------- */}
      <header className="hero speaking-hero" id="top">
        <div className="container speaking-hero-grid">
          <div>
            <span className="eyebrow">Matt Ryan · Speaking</span>
            <h1 className="display">
              The health score is already too late. AI isn&apos;t.
            </h1>
            <p className="lede hero-lede">
              I speak on AI-native customer success, predictive retention,
              and forward deployed engineering. Every talk is backed by a
              system I built and ran.
            </p>
            <div className="hero-actions">
              <a href="mailto:matthew773@gmail.com" className="btn btn-primary">
                Book a talk
              </a>
              <a href="#topics" className="btn btn-ghost">
                See the topics
              </a>
              <a
                href="/matt-ryan-speaker-one-sheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Matt-Ryan-Speaker-One-Sheet.pdf"
                aria-label="Download speaker one-sheet (PDF)"
                className="btn btn-ghost"
              >
                Download speaker one-sheet
              </a>
            </div>
          </div>

          <Reveal className="speaking-hero-photo mono-photo">
            <img src="/speaking/g2-stage-hero.jpg" alt="Matt Ryan speaking on stage at G2" />
          </Reveal>
        </div>
      </header>

      {/* ---------------- 01 THROUGH THE YEARS ---------------- */}
      <section className="section pf-section" id="years">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">01</span>
            <span className="sec-label">Through the years</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Twenty years of standing in front of a room.
            </h2>
          </Reveal>

          <div className="photo-strip">
            {photoStrip.map(({ src, caption }, i) => (
              <Reveal key={src} className="photo-strip-item" delay={60 + i * 40}>
                <div className="mono-photo">
                  <img src={src} alt={caption} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 02 SPEAKING TOPICS ---------------- */}
      <section className="section pf-section is-raised" id="topics">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">02</span>
            <span className="sec-label">Speaking topics</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Subjects backed by direct operating experience.
            </h2>
          </Reveal>

          <div className="topic-grid">
            {topics.map(({ n, pillar, title, body, proof }) => (
              <Reveal key={n} className="topic-card" delay={80}>
                <span className="topic-num">{n}</span>
                <div className="topic-pillar">{pillar}</div>
                <h3>{title}</h3>
                <p>{body}</p>
                {proof && <div className="topic-proof">{proof}</div>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 03 ENGAGEMENTS ---------------- */}
      <section className="section pf-section" id="engagements">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">03</span>
            <span className="sec-label">Engagements</span>
            <a href="mailto:matthew773@gmail.com" className="sec-head-link">
              Book a talk →
            </a>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Twenty years on stage.
            </h2>
            <p className="lede" style={{ marginTop: 0, marginBottom: 40 }}>
              From PeopleSoft and Workday to Slack, Upwork and G2.
            </p>
          </Reveal>

          <EngagementsTimeline groups={engagementsByYear} />
        </div>
      </section>

      {/* ---------------- FORMATS & AUDIENCES ---------------- */}
      <section className="section pf-section is-raised" id="formats">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">04</span>
            <span className="sec-label">Formats and audiences</span>
          </Reveal>

          <div className="formats-grid">
            <Reveal className="formats-col" delay={60}>
              <div className="formats-photo mono-photo">
                <img
                  src="/speaking/workshop-enterprise-review.jpg"
                  alt="Matt Ryan leading a working session on enterprise adoption challenges"
                />
              </div>
              <div className="formats-col-label">Formats available</div>
              <ul className="formats-list">
                {[
                  "Solo keynote",
                  "Conference breakout with Q&A",
                  "Short-form spotlight or main-stage talk",
                  "Day chair or emcee",
                  "Moderated fireside chat or executive Q&A",
                  "Panel participation",
                ].map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="formats-col" delay={100}>
              <div className="formats-col-label">Audiences</div>
              <p className="formats-audience-text">
                Customer success and post-sales leadership, RevOps, CCO and
                CRO audiences, professional services and TSIA-adjacent
                groups, GTM and revenue operations, support and CX
                leadership, enterprise HCM and ERP, private equity
                portfolio operations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="section pf-section contact" id="contact">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Bring this to your stage</span>
            <h2 className="display" style={{ marginTop: 18 }}>
              Let&apos;s talk about AI in the enterprise.
            </h2>
            <p className="lede">
              I speak and write about what it actually takes to get AI
              adopted inside complex organizations.
            </p>
            <div className="contact-actions">
              <a href="mailto:matthew773@gmail.com" className="btn btn-primary">
                Book a talk
              </a>
              <a
                href="https://www.linkedin.com/in/matthewwryan/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Connect on LinkedIn
              </a>
              <a
                href="/matt-ryan-speaker-one-sheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Matt-Ryan-Speaker-One-Sheet.pdf"
                aria-label="Download speaker one-sheet (PDF)"
                className="btn btn-ghost"
              >
                Download speaker one-sheet
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
