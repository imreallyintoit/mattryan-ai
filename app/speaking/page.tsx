import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Speaking · Matt Ryan · AI-Native Customer Success",
  description:
    "Matt Ryan speaks on applied AI, forward deployed engineering, and enterprise AI adoption in customer success. Past sessions at ChurnZero, Pavilion, and the Customer Success Collective.",
};

const photoStrip = [
  {
    src: "/speaking/career-2006-ibm.jpg",
    caption: "IBM Global Business Services. Early technical delivery, first time in front of a room.",
  },
  {
    src: "/speaking/career-workshop.jpg",
    caption: "Workshop facilitation on the road, the years spent building delivery teams across three continents.",
  },
  {
    src: "/speaking/csc-summit-bio.jpg",
    caption: "Customer Success Summit, Chicago. Customer Success Collective.",
  },
  {
    src: "/speaking/g2-mym-2024.jpg",
    caption: "G2 Mid-Year Meetup.",
  },
  {
    src: "/speaking/g2-stage-gesture.jpg",
    caption: "G2, on the main stage.",
  },
];

const topics = [
  {
    n: "01",
    pillar: "AI-Native Post-Sales Operating Systems",
    title: "Architecting the AI-First Customer Lifecycle",
    body: "Agent-delivered, human-led systems from onboarding to renewal.",
    proof: "60% support cost cut, activation up from 8.6% to 39.1%, 46% renewal lift.",
  },
  {
    n: "02",
    pillar: "Predictive Retention and Customer Outcome Science",
    title: "Churn Is a Product Problem",
    body: "Leading indicators that surface risk long before the renewal window.",
    proof: "0 to 8 health model, 90 to 180 days of warning, about 80% churn recall versus 60%.",
  },
  {
    n: "03",
    pillar: "MCP and AI Agents in B2B SaaS",
    title: "Preparing Your Enterprise Data for AI Agents",
    body: "How MCP lets agents act on customer data safely, and the governance that keeps it coherent.",
    proof: "Co-launched G2's commercial MCP strategy.",
  },
  {
    n: "04",
    pillar: "Forward Deployed Engineering",
    title: "Forward Deployed Engineering",
    body: "Put technical people next to customers, then productize what recurs.",
    proof: "Built Slack's team of 65+ forward deployed architects and grew it from $100K to $11M.",
  },
  {
    n: "05",
    pillar: "Building Services From Zero",
    title: "Building Services From Zero",
    body: "What I learned building services at Slack and G2, and scaling one at Alight: pricing, packaging, and coverage without linear headcount.",
    proof: "Review Managed Services from zero to $4M with a 95% renewal rate.",
  },
  {
    n: "06",
    pillar: "Running a Services P&L Under Private Equity",
    title: "The Board Does Not Care About Effort",
    body: "Running a services P&L under private equity.",
    proof: "Scaled toward a business approaching $200M through an Aon spin-off and Blackstone ownership.",
  },
];

const talks = [
  {
    title: "Your Health Score Is Already Too Late. AI Isn't.",
    event: "ZERO-IN (ChurnZero)",
    place: "Nashville",
    date: "[Month Year]",
    format: "Breakout with Q&A",
    note: "Selected competitively from open submissions",
    body: "Why traditional health scores are lagging indicators, and how to build an AI-native retention system instead. Covers why activation in the first 90 days is the foundation any predictive model depends on.",
  },
  {
    title: "How to Turn Real-Time Buyer Signals Into Revenue",
    event: "Pavilion GTM",
    place: "New York",
    date: "[Month Year]",
    format: "Spotlight Stage",
    body: "GTM teams do not have a data problem, they have an orchestration problem. This session walks a live buyer signal from detection through to action, via MCP into Slack and Salesforce.",
    hook: "Where in your GTM motion is valuable buyer intent sitting unused today?",
  },
  {
    title: "The AI GTM Operating System",
    event: "Chief Customer Officer Summit",
    place: "Chicago",
    date: "[Month Year]",
    format: "Confirmed speaker",
    body: "Next-generation CCO strategy: balancing AI-driven efficiency against enterprise retention. What changes when post-sales runs as an operating system rather than disconnected motions.",
  },
  {
    title: "Preventing Churn Before It Starts: Predictive Analytics for Proactive Risk Management",
    event: "Customer Success Summit (Customer Success Collective)",
    place: "Chicago",
    date: "[Month Year]",
    format: "Keynote, also served as Day Chair",
    photo: "/speaking/csc-summit-crowd.jpg",
    body: "The watermelon effect as the silent killer of retention, green on the outside and red on the inside. The leaky boat theory: why investing in implementation and success planning in the first 90 days is the highest-leverage move available.",
    hook: "Healthy dashboard. Churning customer. Let's fix that.",
  },
  {
    title: "Forward Deployed Engineering: Building Slack Accelerator Apps",
    event: "Dreamforce",
    date: "[Month Year]",
    format: "Session",
    body: "How Slack put technical consultants directly alongside enterprise customers and turned repeated custom-app requests into a productized catalog. The through-line to MCP and agent work is direct.",
    link: { href: "https://slack.com/resources/using-slack/accelerator-apps", label: "slack.com" },
  },
  {
    title: "M&A Strategy and the Legacy ERP Problem",
    event: "Workday Rising",
    date: "[Month Year]",
    format: "Session",
    body: "What happens to HCM and ERP architecture when companies merge, divest, or get carved out. How delivery standards determine whether a post-deal consolidation lands on schedule or bleeds margin for years.",
  },
];

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
                <div className="photo-strip-caption">{caption}</div>
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

      {/* ---------------- 03 SPEAKING HISTORY ---------------- */}
      <section className="section pf-section" id="history">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">03</span>
            <span className="sec-label">Speaking history</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Sessions delivered.
            </h2>
          </Reveal>

          <div className="talk-grid">
            {talks.map(({ title, event, place, date, format, note, body, hook, photo, link }) => (
              <Reveal key={title} className={`talk-card${photo ? " has-photo" : ""}`} delay={100}>
                {photo && (
                  <div className="talk-photo mono-photo">
                    <img src={photo} alt={`Matt Ryan speaking at ${event}`} />
                  </div>
                )}
                <div className="talk-card-body">
                  <div className="talk-meta">
                    <span className="talk-event">{event}{place ? ` · ${place}` : ""}{date ? ` · ${date}` : ""}</span>
                    <span className="talk-format">{format}</span>
                  </div>
                  <h3>{title}</h3>
                  {note && <div className="talk-note">{note}</div>}
                  <p>{body}</p>
                  {hook && <div className="talk-hook">&ldquo;{hook}&rdquo;</div>}
                  {link && (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-card-link"
                    >
                      {link.label} ↗
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
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
