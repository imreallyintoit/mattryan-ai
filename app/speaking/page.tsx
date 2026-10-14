import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import EngagementsTimeline, { type EngagementItem, type YearGroup } from "@/components/EngagementsTimeline";

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

type RawEngagement = {
  event: string;
  title: string;
  description: string;
  dates: string; // display string, e.g. "Nov 18 to 19, 2026"
  startDate: string; // ISO, used for sorting, year grouping, and the Upcoming badge
  city: string;
  era: "G2" | "Upwork" | "Slack" | "Workday era" | "PeopleSoft era";
  image?: string;
};

// All 17 confirmed engagements, newest first within each year. Year grouping
// and the Upcoming badge are both derived from startDate below rather than
// hardcoded, so this list is the only thing to edit for a new talk.
const rawEngagements: RawEngagement[] = [
  {
    event: "Customer Success Summit Chicago 2026",
    title: "Human-Led, Agent-Delivered: Running Customer Success as an AI Operating System",
    description: "Every customer signal routed to the right owner, a CSM, an AI agent or an automated play, with every outcome making the next decision smarter.",
    dates: "Nov 18 to 19, 2026",
    startDate: "2026-11-18",
    city: "Chicago, IL",
    era: "G2",
  },
  {
    event: "ZERO-IN 2026 (ChurnZero)",
    title: "Your Health Score Is Already Too Late. AI Isn't.",
    description: "Green dashboard, churning customer. How G2 replaced lagging health scores with an AI-native retention system that acts before a CSM notices.",
    dates: "Nov 5 to 6, 2026",
    startDate: "2026-11-05",
    city: "Nashville, TN",
    era: "G2",
  },
  {
    event: "Pavilion GTM 2026",
    title: "The Signal Arrived. Nothing Happened.",
    description: "How to turn real-time buyer signals into revenue, with a live demo from signal to personalized outreach through MCP.",
    dates: "Sep 30 to Oct 1, 2026",
    startDate: "2026-09-30",
    city: "New York, NY",
    era: "G2",
  },
  {
    event: "Customer Success Summit Chicago 2025",
    title: "Preventing Churn Before It Starts: Predictive Analytics for Proactive Risk Management",
    description: "How G2 rebuilt post-sales around a predictive health score that flags risk 90 to 180 days before renewal, lifting renewal rates 46%.",
    dates: "Nov 19 to 20, 2025",
    startDate: "2025-11-19",
    city: "Chicago, IL",
    era: "G2",
    image: "/speaking/csc-summit-crowd.jpg",
  },
  {
    event: "SIA Collaboration in the Gig Economy 2023",
    title: "Inside the Match: How AI Is Rewiring Talent Matching",
    description: "Which signals predict a successful engagement, where bias creeps in, and why the best AI matching keeps a human in the loop.",
    dates: "Sep 19 to 21, 2023",
    startDate: "2023-09-19",
    city: "Dallas, TX",
    era: "Upwork",
  },
  {
    event: "Upwork Work Without Limits 2023",
    title: "Executive Panel: Building AI Capability Faster Than You Can Hire It",
    description: "How executives brought in independent AI specialists to run first pilots in weeks instead of quarters.",
    dates: "Aug 28 to 30, 2023",
    startDate: "2023-08-28",
    city: "Half Moon Bay, CA",
    era: "Upwork",
  },
  {
    event: "SIA CWS Summit North America 2022",
    title: "Your VMS Wasn't Built for Freelancers: Rethinking Contingent Programs for the Marketplace Era",
    description: "How to make marketplace talent work alongside your VMS, with compliance built in and one view of total spend.",
    dates: "Sep 19 to 20, 2022",
    startDate: "2022-09-19",
    city: "Dallas, TX",
    era: "Upwork",
  },
  {
    event: "Upwork Work Without Limits 2022",
    title: "Customer Panel: Making Freelance Talent Part of How We Work",
    description: "Enterprise leaders on turning independent talent from a one-off fix into a standing part of the workforce.",
    dates: "Aug 15 to 17, 2022",
    startDate: "2022-08-15",
    city: "Chicago, IL",
    era: "Upwork",
  },
  {
    event: "Slack Frontiers 2021",
    title: "One Channel per Vehicle: Building a Factory Quality System in Slack",
    description: "How accelerator apps took a manufacturer's quality process onto Slack, one channel per vehicle, at production scale.",
    dates: "Nov 16 to 17, 2021",
    startDate: "2021-11-16",
    city: "Virtual",
    era: "Slack",
  },
  {
    event: "Workday Rising 2019",
    title: "Machine Learning Meets Payroll: Catching Errors Before Employees Do",
    description: "Applying anomaly detection to Workday HR and payroll data to flag problems before the payroll run closes.",
    dates: "Oct 14 to 17, 2019",
    startDate: "2019-10-14",
    city: "Orlando, FL",
    era: "Workday era",
    image: "/speaking/workday-rising-2019.jpg",
  },
  {
    event: "Workday Rising 2018",
    title: "Building on Workday: Custom Apps and APIs with the Workday Cloud Platform",
    description: "Building lightweight apps directly on Workday so new workflows inherit its security, audit trail and upgrades.",
    dates: "Oct 1 to 4, 2018",
    startDate: "2018-10-01",
    city: "Las Vegas, NV",
    era: "Workday era",
    image: "/speaking/workday-rising-2018.jpg",
  },
  {
    event: "Workday Rising 2016",
    title: "Go-Live Is Day One: Running Workday as a Living System",
    description: "Treating Workday's two major releases a year as a product roadmap, so adoption keeps climbing after go-live.",
    dates: "Sep 26 to 29, 2016",
    startDate: "2016-09-26",
    city: "Chicago, IL",
    era: "Workday era",
  },
  {
    event: "Workday Rising 2014",
    title: "Only What Changed: Event-Driven Integrations at Enterprise Scale",
    description: "Sending downstream systems only what changed, and handling backdated and future-dated changes correctly.",
    dates: "Nov 3 to 6, 2014",
    startDate: "2014-11-03",
    city: "San Francisco, CA",
    era: "Workday era",
  },
  {
    event: "Workday Rising 2012",
    title: "From PeopleSoft to Workday: What Not to Bring With You",
    description: "A migration playbook: which customizations to retire, which data to clean, and how not to rebuild your old system.",
    dates: "Week of Nov 5, 2012",
    startDate: "2012-11-06",
    city: "Las Vegas, NV",
    era: "Workday era",
  },
  {
    event: "Oracle OpenWorld 2010",
    title: "Hybrid HR: PeopleSoft at the Core, Talent in the Cloud",
    description: "Keep the system that pays your people and move the rest to the cloud, with a framework for what stays and what moves.",
    dates: "Sep 19 to 23, 2010",
    startDate: "2010-09-19",
    city: "San Francisco, CA",
    era: "PeopleSoft era",
  },
  {
    event: "Oracle OpenWorld 2006",
    title: "Upgrade Now, Fuse Later",
    description: "Separating payroll integration from core HR so vendors, countries and acquisitions can plug in without starting over.",
    dates: "Oct 22 to 26, 2006",
    startDate: "2006-10-22",
    city: "San Francisco, CA",
    era: "PeopleSoft era",
  },
  {
    event: "PeopleSoft Connect 2003",
    title: "One Template, 55 Countries",
    description: "How Baxter took a single global PeopleSoft HCM design to every corner of its business.",
    dates: "Week of Sep 15, 2003",
    startDate: "2003-09-15",
    city: "Anaheim, CA",
    era: "PeopleSoft era",
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
