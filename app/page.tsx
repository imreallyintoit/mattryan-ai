import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CompanyLogo from "@/components/CompanyLogo";

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
              I build and re-architect pre-sales, post-sales, and professional
              services organizations, including forward deployed engineering
              teams. I started as a software engineer and never stopped
              thinking like one, which is why the systems I build hold up under
              a number.
            </p>
            <div className="hero-actions">
              <Link href="/system" className="btn btn-primary">
                Explore my work
              </Link>
              <a href="mailto:matthew773@gmail.com" className="btn btn-ghost">
                Let&apos;s talk
              </a>
            </div>

            <div className="logo-rail">
              <span className="logo-rail-label">Built at</span>
              <div className="logo-rail-marks">
                <CompanyLogo name="G2" slug="g2" />
                <CompanyLogo name="Upwork" />
                <CompanyLogo name="Slack" />
                <CompanyLogo name="Salesforce" />
                <CompanyLogo name="Workday" slug="workday" />
                <CompanyLogo name="IBM" />
              </div>
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
                I started as a software engineer, which gives me something most
                people at my level do not have. I understand how software gets
                built, how it breaks, and what it actually takes to implement
                it inside a complex enterprise. That foundation shaped
                everything that came after it.
              </p>
              <p>
                I spent the first seventeen years of my career in consulting.
                At IBM Global Business Services I ran multi-year ERP and
                service model deployments for financial services, utilities,
                and heavily regulated industries. I lived in India for over a
                year, built delivery teams across Poland and the Philippines,
                and worked in nearly 40 countries. Sales teams started pulling
                me into their deals because I could sit across from a CIO and
                speak credibly to what their investment would actually produce.{" "}
                <strong>I was the person who made the quota carrier
                credible.</strong>
              </p>
              <p>
                Private equity ownership is where I got my real education. I
                spent nearly a decade scaling a Workday practice from a $10M
                acquisition with 60 consultants into a business approaching
                $200M, through an Aon spin-off into Alight Solutions and a
                Blackstone acquisition. The board did not care about effort.
                They cared whether the number was going up and whether the
                business was becoming more valuable. Every decision I make
                still runs through that lens:{" "}
                <strong>what does this do to retention, to margin, and to the
                story we are telling investors.</strong>
              </p>
              <p>
                Then I bet on myself, left a thriving P&amp;L, and went to
                Slack to stand up customer delivery, customer experience, and
                technical consulting at the same time. We went public.
                Salesforce acquired us for $27 billion. After driving
                enterprise growth at Upwork under activist-shareholder
                pressure, I came to G2, where everything converged: the
                engineer, the consultant, and the services leader who scaled
                under board pressure, all in one operating model with AI
                running across the customer lifecycle.
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

      {/* ---------------- 02 LESSONS EARNED ---------------- */}
      <section className="section pf-section is-raised" id="lessons">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">02</span>
            <span className="sec-label">Lessons earned</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              I treat every error as a blueprint.
            </h2>
          </Reveal>

          <div className="lesson-grid">
            <Reveal className="lesson-story" delay={80}>
              <p>
                Early in my career, as a young software engineer, I shipped
                production code missing a single semicolon. What should have
                deleted two rows of data instead wiped out more than 400,000
                production employment records. It was entirely preventable.
                We recovered the data. After the crisis passed, my manager
                pulled me aside.
              </p>
              <p>
                That reframed the work permanently. I became rigorous about
                postmortems, documentation, and system design. I did not want
                to fix mistakes, I wanted to engineer them out of existence.
                It is why every organization I have built since is designed
                around the same three things.
              </p>
            </Reveal>

            <Reveal className="lesson-quote" delay={120}>
              <svg className="lesson-quote-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="18" stroke="var(--alert)" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="4 3"/>
                <circle cx="20" cy="20" r="11" stroke="var(--alert)" strokeWidth="1" strokeOpacity="0.5"/>
                <circle cx="20" cy="20" r="4" fill="var(--alert)"/>
              </svg>
              <blockquote>
                You won&apos;t be remembered for the mistakes you make, only
                for the ones you make twice.
              </blockquote>
              <cite>My manager, roughly 400,000 records later</cite>
            </Reveal>
          </div>

          <div className="principles">
            {[
              {
                name: "Resilience",
                body: "Systems and teams that hold under real load, not just on the happy path. Failure modes designed for before they are discovered.",
              },
              {
                name: "Repeatability",
                body: "Delivery that does not depend on who is in the room. Frameworks, standards, and documentation over heroics.",
              },
              {
                name: "Accountability",
                body: "Named owners and measured outcomes, with postmortems that change the design instead of assigning blame.",
              },
            ].map(({ name, body }) => (
              <Reveal key={name} className="principle" delay={140}>
                <span className="principle-name">{name}</span>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 03 EXPERTISE ---------------- */}
      <section className="section pf-section" id="expertise">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">03</span>
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
                title: "Pre-sales and solution credibility",
                body: "Sitting across from a CIO and speaking honestly to what an investment will produce. Solution engineering and technical pre-sales that make the quota carrier credible and set delivery up to succeed rather than inherit a promise it cannot keep.",
              },
              {
                n: "02",
                title: "Post-sales and lifecycle architecture",
                body: "Rebuilding onboarding, retention, and expansion so revenue compounds. Activation designed as the leading indicator it actually is, not a checkbox after close.",
              },
              {
                n: "03",
                title: "Services and forward deployed engineering",
                body: "Standing up professional services, technical consulting, and forward deployed engineering teams as real revenue lines with their own P&L, delivery model, and renewal economics.",
              },
              {
                n: "04",
                title: "AI across the customer lifecycle",
                body: "Predictive operating systems that run the full journey: signal architecture, agent orchestration, and the data infrastructure underneath the score.",
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

      {/* ---------------- 04 SELECTED WORK ---------------- */}
      <section className="section pf-section is-raised" id="work">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">04</span>
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
                title: "Professional services from inception",
                body: "Arrived to no implementation function, a broken onboarding experience, and retention at 50%. Designed and launched a services business that did not exist: offer architecture, pricing, delivery model, and comp, plus a global delivery model across three regions.",
              },
              {
                tag: "Slack / Salesforce · 2020 to 2022",
                title: "Technical architecture, $100K to $11M",
                body: "Turned a pilot into an $11M annual business and grew the team from 2 to 65 technical architects across three continents. Forward deployed work like Rivian's production line, where every vehicle had its own Slack channel wired to real-time alerting. Named Slack Leader of the Year, 2022.",
              },
              {
                tag: "Alight / Strada · 2012 to 2020",
                title: "Workday practice, $10M to ~$200M",
                body: "Built the implementation framework, delivery standards, and go-to-market from nothing, scaling from a $10M acquisition with 60 consultants through an Aon spin-off and a Blackstone acquisition. Enterprise contracts with UPS, Goldman Sachs, and Home Depot.",
              },
              {
                tag: "G2 · 2025",
                title: "Commercial MCP strategy",
                body: "Co-launched G2's model context protocol strategy, opening the company's data to agentic buyers and putting a new distribution surface in front of the roadmap.",
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

      {/* ---------------- 05 CAREER ---------------- */}
      <section className="section pf-section" id="career">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">05</span>
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
                  what: "Architected the AI GTM Operating System; built professional services from inception across three regions; co-launched G2's commercial MCP strategy.",
                },
                {
                  when: "2022 to 2024",
                  who: "Upwork · VP, Enterprise Solutions",
                  what: "Built the enterprise solution and post-sales model under activist-shareholder pressure on enterprise growth; drove 37% growth.",
                },
                {
                  when: "2020 to 2022",
                  who: "Slack (Salesforce) · Professional Services Leader",
                  what: "Stood up customer delivery, customer experience, and technical consulting simultaneously, hiring over 120 people. Through IPO and the $27B Salesforce acquisition. Named Slack Leader of the Year, 2022.",
                },
                {
                  when: "2012 to 2020",
                  who: "Alight / Strada · VP, Professional Services",
                  what: "Scaled a Workday HCM practice from a $10M acquisition with 60 consultants toward a business approaching $200M, through an Aon spin-off and Blackstone acquisition.",
                },
                {
                  when: "2007 to 2012",
                  who: "IBM · Managing Consultant, Global Business Services",
                  what: "Multi-year ERP and service model deployments for financial services, utilities, and heavily regulated industries. Lived in India over a year, built delivery teams in Poland and the Philippines, worked in nearly 40 countries.",
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
      <section className="section pf-section contact" id="contact">
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
