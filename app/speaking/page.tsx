import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Speaking · Matt Ryan",
  description:
    "Matt Ryan speaks on AI-native customer success, predictive retention, and building post-sales organizations from zero. Past sessions at ChurnZero, Pavilion, and the Customer Success Collective.",
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
    body: "Moving past chatbots to agent-delivered, human-led lifecycle systems spanning onboarding, activation, adoption, predictive retention, support, and review generation.",
    proof: "60% cut in support operating cost. Full activation up from 8.6% to 39.1% in the first measured cohort. 48% renewal-rate lift.",
  },
  {
    n: "02",
    pillar: "Predictive Retention and Customer Outcome Science",
    title: "Churn Is a Product Problem",
    body: "Moving customer success from reactive firefighting to algorithmic prevention. Building leading-indicator models that surface adoption risk long before the renewal window opens.",
    proof: "0-to-8 predictive health model, 90 to 180 days of warning, roughly 80% churn recall versus 60% on the legacy score.",
  },
  {
    n: "03",
    pillar: "MCP and AI Agents in B2B SaaS",
    title: "Preparing Your Enterprise Data for Autonomous AI Agents",
    body: "How commercial MCP strategies let LLMs read, act on, and orchestrate customer data safely inside B2B SaaS ecosystems, and the governance that keeps it from becoming random acts of AI.",
    proof: "Co-developed and launched G2's commercial Model Context Protocol strategy, among the first B2B SaaS platforms to open customer data to agentic buyers.",
  },
  {
    n: "04",
    pillar: "Building Services Organizations From Zero",
    title: "Four Times From Nothing",
    body: "The pattern across building professional services at Alight, Slack, Upwork, and G2. What stays the same every time, what changes, and how to tell whether a company is actually ready for a services function.",
    proof: "Built G2 Professional Services from inception across AMER, EMEA, and APAC. Launched Review Managed Services from zero to $4M with a 95% renewal rate.",
  },
  {
    n: "05",
    pillar: "Running a Services P&L Under Private Equity",
    title: "The Board Does Not Care About Effort",
    body: "What changes about how you run a services organization when the owner is a PE firm building toward an exit. Every quarter compounds. Every decision runs through retention, margin, and the investor story.",
    proof: "Full P&L ownership through an Aon acquisition, the Alight spin-off, and Blackstone ownership, scaling toward a business approaching $200M.",
  },
  {
    n: "06",
    pillar: "Scaling Coverage Without Linear Headcount",
    title: "Tiered Engagement and the End of Headcount Math",
    body: "Designing an engagement model aligned to account complexity, adoption, and revenue potential, enabling clean progression across self-service, digital, and high-touch motions without adding people in a straight line.",
    proof: null,
  },
  {
    n: "07",
    pillar: "Services-Led Revenue Growth",
    title: "Services Is Not a Cost Center",
    body: "Making the revenue case for professional services rather than defending it as overhead. Commercial packaging, pricing models, and standing up new revenue streams from inside post-sales.",
    proof: "Slack's services model became a direct contributor to ACV growth. New revenue streams built from zero at G2 across managed services and technical consulting.",
  },
  {
    n: "08",
    pillar: "The Technical Voice in the Room",
    title: "Making the Quota Carrier Credible",
    body: "Why the most valuable person in an enterprise deal is often the one who can sit across from a CIO and describe honestly what the investment will actually look like when it is done.",
    proof: null,
  },
];

const talks = [
  {
    title: "Your Health Score Is Already Too Late. AI Isn't.",
    event: "ZERO-IN (ChurnZero)",
    place: "Nashville",
    format: "Breakout with Q&A",
    note: "Selected competitively from open submissions",
    body: "Why traditional health scores are lagging indicators, and how to build an AI-native retention system instead. Covers the signals that actually predict churn, why activation in the first 90 days is the foundation any predictive model depends on, and how agentic workflows trigger intervention without waiting for a CSM to notice.",
  },
  {
    title: "How to Turn Real-Time Buyer Signals Into Revenue",
    event: "Pavilion GTM",
    place: "New York",
    format: "Spotlight Stage",
    body: "GTM teams do not have a data problem, they have an orchestration problem. This session walks a live buyer signal from detection through to action inside the tools teams already use, via MCP into Slack and Salesforce, then zooms out to what it takes to run this as a repeatable operating system.",
    hook: "Where in your GTM motion is valuable buyer intent sitting unused today?",
  },
  {
    title: "The AI GTM Operating System",
    event: "Chief Customer Officer Summit",
    place: "Chicago",
    format: "Confirmed speaker",
    body: "Next-generation CCO strategy: balancing AI-driven efficiency against enterprise retention, and what changes when post-sales runs as an operating system rather than a set of disconnected motions.",
  },
  {
    title: "Preventing Churn Before It Starts: Predictive Analytics for Proactive Risk Management",
    event: "Customer Success Summit (Customer Success Collective)",
    place: "Chicago",
    format: "Keynote, also served as Day Chair",
    photo: "/speaking/csc-summit-crowd.jpg",
    body: "The watermelon effect as the silent killer of retention, green on the outside and red on the inside. How to supplement traditional health scores with behavioral, product, and intent-based signals. The leaky boat theory: why investing in implementation and strategic success planning in the first 90 days is the highest-leverage churn-prevention move available.",
    hook: "Healthy dashboard. Churning customer. Let's fix that.",
  },
  {
    title: "Forward Deployed Engineering: Building Slack Accelerator Apps",
    event: "Dreamforce",
    format: "Session",
    body: "How Slack put technical consultants directly alongside enterprise customers and turned repeated custom-app requests into a productized catalog rather than funding bespoke development account by account. The through-line to MCP and agent work is direct: put technical people next to customers, productize what recurs.",
    link: { href: "https://slack.com/resources/using-slack/accelerator-apps", label: "slack.com" },
  },
  {
    title: "M&A Strategy and the Legacy ERP Problem",
    event: "Workday Rising",
    format: "Session",
    body: "What happens to HCM and ERP architecture when companies merge, divest, or get carved out. How to sequence a migration off legacy systems inside a transaction timeline, and how delivery standards determine whether a post-deal consolidation lands on schedule or bleeds margin for years.",
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
              and what changes when post-sales runs as an operating system
              instead of a set of disconnected motions. Every session is
              backed by a system I actually built and ran.
            </p>
            <div className="hero-actions">
              <a href="mailto:matthew773@gmail.com" className="btn btn-primary">
                Book a talk
              </a>
              <a href="#topics" className="btn btn-ghost">
                See the topics
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
            {talks.map(({ title, event, place, format, note, body, hook, photo, link }) => (
              <Reveal key={title} className={`talk-card${photo ? " has-photo" : ""}`} delay={100}>
                {photo && (
                  <div className="talk-photo mono-photo">
                    <img src={photo} alt={`Matt Ryan speaking at ${event}`} />
                  </div>
                )}
                <div className="talk-card-body">
                  <div className="talk-meta">
                    <span className="talk-event">{event}{place ? ` · ${place}` : ""}</span>
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
              Every talk is backed by a system I actually built.
            </h2>
            <p className="lede">
              Tell me about your audience, the format, and what outcome you
              want the room to leave with.
            </p>
            <div className="contact-actions">
              <a href="mailto:matthew773@gmail.com" className="btn btn-primary">
                Start a conversation
              </a>
              <a
                href="https://www.linkedin.com/in/matthewwryan/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
