import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Speaking · Matt Ryan · AI-Native Customer Success",
  description:
    "Matt Ryan speaks on AI-native customer success, predictive retention, MCP and AI agents, and forward deployed engineering. Sessions at ChurnZero ZERO-IN, Pavilion GTM, and the Customer Success Collective.",
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

type Engagement = {
  event: string;
  organizer?: string;
  title: string;
  subtitle?: string;
  startDate: string; // ISO, e.g. "2026-11-18". Leave "" while published is false.
  endDate?: string;
  city: string;
  format: "Keynote" | "Breakout" | "Spotlight" | "Workshop" | "Session" | "Panel";
  formatNote?: string; // e.g. "also Day Chair"
  snippet?: string;
  quote?: string;
  tag?: string; // e.g. "Selected competitively from open submissions"
  image?: string;
  link?: { label: string; href: string };
  published: boolean;
};

// Upcoming vs. Delivered is derived from startDate against today's date at
// build time (see the split below), not hardcoded, so a card moves groups on
// its own after the next deploy. Don't publish a card whose date or title is
// still a placeholder: flip `published` to true once the real value lands
// here instead of guessing.
const engagements: Engagement[] = [
  {
    event: "Customer Success Summit Chicago 2026",
    organizer: "Customer Success Collective",
    title: "Human-Led, Agent-Delivered: Running Customer Success as an AI Operating System",
    startDate: "2026-11-18",
    endDate: "2026-11-19",
    city: "Chicago, IL",
    format: "Session",
    snippet: "Every customer signal routed to the right owner, a CSM, an AI agent, or an automated play, with every outcome making the next decision smarter.",
    published: true,
  },
  {
    event: "ZERO-IN 2026 (ChurnZero)",
    title: "Your Health Score Is Already Too Late. AI Isn't.",
    startDate: "2026-11-05",
    endDate: "2026-11-06",
    city: "Nashville, TN",
    format: "Breakout",
    formatNote: "with Q&A",
    tag: "Selected competitively from open submissions",
    snippet: "Why traditional health scores are lagging indicators, and how to build an AI-native retention system that starts with the first 90 days.",
    published: true,
  },
  {
    event: "Pavilion GTM 2026",
    title: "The Signal Arrived. Nothing Happened.",
    subtitle: "How to turn real-time buyer signals into revenue",
    startDate: "2026-09-30",
    endDate: "2026-10-01",
    city: "New York, NY",
    format: "Spotlight",
    snippet: "A live buyer signal walked from detection to action, through MCP into Salesforce and Slack, in about six minutes on stage.",
    quote: "Where in your GTM motion is valuable buyer intent sitting unused today?",
    published: true,
  },
  {
    event: "Customer Success Summit Chicago 2025",
    organizer: "Customer Success Collective",
    title: "Preventing Churn Before It Starts: Predictive Analytics for Proactive Risk Management",
    startDate: "2025-11-19",
    endDate: "2025-11-20",
    city: "Chicago, IL",
    format: "Keynote",
    formatNote: "also Day Chair",
    snippet: "How G2 rebuilt post-sales around a predictive health score that flags risk 90 to 180 days before renewal, lifting renewal rates 46%.",
    quote: "Healthy dashboard. Churning customer. Let's fix that.",
    image: "/speaking/csc-summit-crowd.jpg",
    published: true,
  },
  {
    event: "INFUSE Client Success Summit 2025",
    title: "Presentation and Workshop: The G2 and INFUSE Partnership",
    startDate: "2025-11-17",
    endDate: "2025-11-19",
    city: "Orlando, FL",
    format: "Workshop",
    snippet: "A presentation and hands-on workshop for global client success teams.",
    published: true,
  },
  {
    // Date unconfirmed (open question 3). Flip published to true once the
    // year and city land here.
    event: "Dreamforce",
    title: "Forward Deployed Engineering: Building Slack Accelerator Apps",
    startDate: "",
    city: "",
    format: "Session",
    snippet: "How Slack put technical consultants directly alongside enterprise customers and turned repeated custom-app requests into a productized catalog. The through-line to MCP and agent work is direct.",
    link: { href: "https://slack.com/resources/using-slack/accelerator-apps", label: "slack.com" },
    published: false,
  },
  {
    // Date unconfirmed (open question 3). Flip published to true once the
    // year and city land here.
    event: "Workday Rising",
    title: "M&A Strategy and the Legacy ERP Problem",
    startDate: "",
    city: "",
    format: "Session",
    snippet: "What happens to HCM and ERP architecture when companies merge, divest, or get carved out. How delivery standards determine whether a post-deal consolidation lands on schedule or bleeds margin for years.",
    published: false,
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parseISO(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

function formatDateRange(startDate: string, endDate?: string) {
  const s = parseISO(startDate);
  if (!endDate || endDate === startDate) {
    return `${MONTHS[s.m - 1]} ${s.d}, ${s.y}`;
  }
  const e = parseISO(endDate);
  if (s.y === e.y && s.m === e.m) {
    return `${MONTHS[s.m - 1]} ${s.d} to ${e.d}, ${e.y}`;
  }
  if (s.y === e.y) {
    return `${MONTHS[s.m - 1]} ${s.d} to ${MONTHS[e.m - 1]} ${e.d}, ${e.y}`;
  }
  return `${MONTHS[s.m - 1]} ${s.d}, ${s.y} to ${MONTHS[e.m - 1]} ${e.d}, ${e.y}`;
}

const today = Date.now();
const publishedEngagements = engagements.filter((e) => e.published);
const byDateDesc = (a: Engagement, b: Engagement) =>
  new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
const upcomingEngagements = publishedEngagements
  .filter((e) => new Date(e.startDate).getTime() >= today)
  .sort(byDateDesc);
const deliveredEngagements = publishedEngagements
  .filter((e) => new Date(e.startDate).getTime() < today)
  .sort(byDateDesc);

function EngagementCard({
  engagement,
  isUpcoming,
}: {
  engagement: Engagement;
  isUpcoming: boolean;
}) {
  const { event, organizer, title, subtitle, startDate, endDate, city, format, formatNote, snippet, quote, tag, image, link } =
    engagement;

  return (
    <Reveal className={`talk-card${image ? " has-photo" : ""}`} delay={100}>
      {image && (
        <div className="talk-photo mono-photo">
          <img src={image} alt={`Matt Ryan speaking at ${event}`} />
        </div>
      )}
      <div className="talk-card-body">
        <span className="talk-event">{event}{organizer ? ` · ${organizer}` : ""}</span>
        <h3>{title}</h3>
        {subtitle && <div className="talk-subtitle">{subtitle}</div>}
        <div className="talk-meta">
          <span className="talk-date-city">{formatDateRange(startDate, endDate)} · {city}</span>
          <span className="talk-badges">
            {isUpcoming && <span className="wf-badge is-stage">Upcoming</span>}
            <span className="wf-badge">{format}{formatNote ? ` · ${formatNote}` : ""}</span>
          </span>
        </div>
        {tag && <div className="talk-note">{tag}</div>}
        {snippet && <p>{snippet}</p>}
        {quote && <div className="talk-hook">&ldquo;{quote}&rdquo;</div>}
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
  );
}

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

      {/* ---------------- 03 ENGAGEMENTS ---------------- */}
      <section className="section pf-section" id="engagements">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">03</span>
            <span className="sec-label">Engagements</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              On stage.
            </h2>
            <p className="lede" style={{ marginTop: 0, marginBottom: 40 }}>
              Upcoming sessions and talks delivered.
            </p>
          </Reveal>

          {upcomingEngagements.length > 0 && (
            <>
              <Reveal delay={70} className="formats-col-label">Upcoming</Reveal>
              <div className="talk-grid">
                {upcomingEngagements.map((e) => (
                  <EngagementCard key={e.event + e.title} engagement={e} isUpcoming />
                ))}
              </div>
            </>
          )}

          {deliveredEngagements.length > 0 && (
            <>
              <Reveal
                delay={70}
                className={`formats-col-label${upcomingEngagements.length > 0 ? " has-group-above" : ""}`}
              >
                Delivered
              </Reveal>
              <div className="talk-grid">
                {deliveredEngagements.map((e) => (
                  <EngagementCard key={e.event + e.title} engagement={e} isUpcoming={false} />
                ))}
              </div>
            </>
          )}
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
