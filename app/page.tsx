import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* ---------------- HERO ---------------- */}
      <header className="hero profile-hero" id="top">
        <div className="container pf-hero-grid">
          <div>
            <span className="eyebrow">Matt Ryan · Chicago</span>
            <h1 className="display">
              Revenue is an engineering problem. I&apos;ve spent twenty years
              treating it like{" "}
              <span className="highlight">one</span>.
            </h1>
            <p className="lede hero-lede">
              I build and re-architect post-sales organizations around
              adoption, outcomes, and AI. I started as a software engineer and
              never stopped thinking like one, which is why the systems I build
              hold up under a number.
            </p>
            <div className="hero-actions">
              <Link href="/system" className="btn btn-primary">
                Explore my work
              </Link>
              <a href="mailto:matthew773@gmail.com" className="btn btn-ghost">
                Let&apos;s talk
              </a>
            </div>
          </div>

          <Reveal className="pf-portrait">
            <div className="pf-portrait-frame">
              <img src="/headshot.png" alt="Matt Ryan" />
            </div>
            <div className="pf-portrait-meta">
              <span className="pf-portrait-role">
                VP, Global Solutions &amp; Customer Success
              </span>
              <span className="pf-portrait-org">G2 · 2024 to now</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------------- 01 ABOUT ---------------- */}
      <section className="section pf-section" id="about">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">01</span>
            <span className="sec-label">About</span>
          </Reveal>

          <div className="pf-about-grid">
            <Reveal className="pf-about-lead" delay={60}>
              <h2 className="display">
                The most technical voice in the executive room.
              </h2>
            </Reveal>

            <Reveal className="pf-about-body" delay={100}>
              <p>
                I started my career writing code. Twenty years later I&apos;m
                still fluent enough to partner directly with product and
                engineering, and commercial enough to own the number. That
                combination is the whole point.
              </p>
              <p>
                Most revenue leaders inherit a system and manage it. I build
                the system. I move post-sales teams up the customer lifecycle
                so that retention, expansion, and new revenue{" "}
                <strong>compound instead of getting chased downstream</strong>.
                It means treating churn as a product and engineering problem
                before it is ever a sales problem.
              </p>
              <p>
                At G2 I designed an AI operating system across the customer
                journey, human-led and agent-delivered. It rebuilt a broken
                retention motion, lifted renewal rates 48%, cut support
                operating costs 60%, and stood up new services revenue from
                zero. Before that I built functions from the ground up at
                Slack, through the Salesforce acquisition, and scaled a Workday
                practice from a $10M acquisition toward a $120M global
                business.
              </p>
              <p>
                The thread across every role is the same: understand the system
                well enough to see the outcome before it happens.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/in/matthewwryan/" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/imreallyintoit" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- 02 EXPERTISE ---------------- */}
      <section className="section pf-section is-raised" id="expertise">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">02</span>
            <span className="sec-label">Expertise</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              What teams bring me in to solve.
            </h2>
          </Reveal>

          <div className="exp-grid">
            {[
              {
                n: "01",
                title: "AI GTM systems",
                body: "Designing predictive operating systems that run across the full customer journey: signal architecture, agent orchestration, and the data infrastructure underneath the score.",
              },
              {
                n: "02",
                title: "Post-sales architecture",
                body: "Rebuilding onboarding, retention, and expansion motions so revenue compounds. Activation designed as the leading indicator it actually is, not a checkbox after close.",
              },
              {
                n: "03",
                title: "New revenue from zero",
                body: "Standing up professional services, solution engineering, and technical consulting as real revenue lines with their own P&L, delivery model, and renewal economics.",
              },
              {
                n: "04",
                title: "Engineering fluency at the exec table",
                body: "Twenty years of technical depth used to partner directly with product and engineering rather than translate through someone else. Agent building and data infrastructure are the same project.",
              },
            ].map(({ n, title, body }) => (
              <Reveal key={n} className="exp-card" delay={80}>
                <span className="exp-num">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 03 SELECTED WORK ---------------- */}
      <section className="section pf-section" id="work">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">03</span>
            <span className="sec-label">Selected work</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Built, shipped, and measured.
            </h2>
          </Reveal>

          {/* featured: the operating system */}
          <Reveal delay={80}>
            <Link href="/system" className="work-feature">
              <div className="work-feature-body">
                <span className="work-tag">G2 · 2024 to now</span>
                <h3 className="display">The AI GTM Operating System</h3>
                <p>
                  A predictive operating system for go-to-market: the
                  Prediction Loop, the Pulse Score, an activation model for the
                  first 30 days, 14 live agentic workflows, and the governance
                  function that keeps it all coherent. This is the full
                  framework, documented end to end.
                </p>
                <div className="work-feature-stats">
                  <span><strong>48%</strong> renewal lift</span>
                  <span><strong>60%</strong> support cost cut</span>
                  <span><strong>90-180d</strong> risk lead time</span>
                </div>
                <span className="work-feature-cta">
                  Read the full system →
                </span>
              </div>
              <div className="work-feature-visual" aria-hidden="true">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="86" stroke="var(--signal)" strokeWidth="0.75" fill="none" strokeOpacity="0.14" strokeDasharray="5 4"/>
                  <circle cx="100" cy="100" r="62" stroke="var(--signal)" strokeWidth="1" fill="none" strokeOpacity="0.3"/>
                  <circle cx="100" cy="100" r="34" stroke="var(--signal)" strokeWidth="1.25" fill="none" strokeOpacity="0.55"/>
                  <circle cx="100" cy="100" r="10" fill="var(--signal)" fillOpacity="0.9"/>
                  <circle cx="100" cy="38" r="4.5" fill="var(--signal)"/>
                  <circle cx="162" cy="100" r="4.5" fill="var(--signal)"/>
                  <circle cx="100" cy="162" r="4.5" fill="var(--signal)"/>
                  <circle cx="38" cy="100" r="4.5" fill="var(--signal)"/>
                  <circle cx="145" cy="55" r="5.5" fill="var(--alert)"/>
                </svg>
              </div>
            </Link>
          </Reveal>

          <div className="work-grid">
            {[
              {
                tag: "G2 · 2024 to now",
                title: "Professional Services from inception",
                body: "Designed and launched a services business that did not exist: offer architecture, pricing, delivery model, and comp. $4M in new revenue with a 95% renewal rate among participating customers.",
              },
              {
                tag: "G2 · 2025",
                title: "Commercial MCP strategy",
                body: "Co-launched G2's model context protocol strategy, opening the company's data to agentic buyers and putting a new distribution surface in front of the roadmap.",
              },
              {
                tag: "Slack / Salesforce · 2020 to 2022",
                title: "Technical consulting, built from zero",
                body: "Stood up professional services and technical consulting through the Salesforce acquisition. Named Slack Leader of the Year, 2022.",
              },
              {
                tag: "Alight / Strada · 2012 to 2020",
                title: "Workday practice, $10M to $120M",
                body: "Scaled a Workday HCM practice from a ~$10M acquisition toward a ~$120M global business under private-equity ownership.",
              },
            ].map(({ tag, title, body }) => (
              <Reveal key={title} className="work-card" delay={100}>
                <span className="work-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 04 CAREER ---------------- */}
      <section className="section pf-section is-raised" id="career">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">04</span>
            <span className="sec-label">Career</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Engineer to operator to executive.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="timeline">
              {[
                {
                  when: "2024 to NOW",
                  who: "G2 · VP, Global Solutions & Customer Success",
                  what: "Architected the AI GTM Operating System; built Professional Services from inception; co-launched G2's commercial MCP strategy.",
                },
                {
                  when: "2022 to 2024",
                  who: "Upwork · VP, Enterprise Solutions",
                  what: "Built the enterprise solution and post-sales model; contributed to 37% enterprise growth.",
                },
                {
                  when: "2020 to 2022",
                  who: "Slack (Salesforce) · Professional Services Leader",
                  what: "Built services and technical consulting from the ground up; named Slack Leader of the Year, 2022.",
                },
                {
                  when: "2012 to 2020",
                  who: "Alight / Strada · VP, Professional Services",
                  what: "Scaled a Workday HCM practice from ~$10M toward ~$120M under private-equity ownership.",
                },
                {
                  when: "2007 to 2012",
                  who: "IBM · Managing Consultant, Global Business Services",
                  what: "Led global HR transformation and HCM technology deployments across enterprise clients. Built technical depth in integration strategy, ETL design, and large-scale system implementation.",
                },
              ].map(({ when, who, what }) => (
                <div key={when} className="tl-row">
                  <span className="tl-when">{when}</span>
                  <span className="tl-what">
                    <strong>{who}</strong>
                    <span>{what}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section className="section contact" id="contact">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Let&apos;s build it</span>
            <h2 className="display" style={{ marginTop: 18 }}>
              If your GTM finds out too late, that&apos;s a system problem.
            </h2>
            <p className="lede">
              I work with enterprise B2B SaaS teams putting AI at the center of
              go-to-market as a predictive system, not a pile of point tools.
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
