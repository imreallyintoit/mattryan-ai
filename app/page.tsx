import PredictionLoop from "@/components/PredictionLoop";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ---------------- NAV ---------------- */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="wordmark">
            matt ryan<span className="dot-ai">.ai</span>
          </a>
          <div className="nav-links">
            <a href="#system">System</a>
            <a href="#proof">Proof</a>
            <a href="#practice">In practice</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Get in touch →
            </a>
          </div>
        </div>
      </nav>

      {/* ---------------- HERO ---------------- */}
      <header className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">The AI GTM Operating System</span>
            <h1 className="display">
              Go-to-market that <span className="highlight">predicts</span>,
              not just reacts.
            </h1>
            <p className="lede hero-lede">
              Most revenue teams find out too late. I run go-to-market as a
              predictive system: humans, agents, and digital experiences
              orchestrated around the customer journey, seeing risk and
              expansion 90 to 180 days before they show up in the number.
            </p>
            <div className="hero-actions">
              <a href="#system" className="btn btn-primary">
                See the operating system
              </a>
              <a href="#about" className="btn btn-ghost">
                Who I am
              </a>
            </div>

            <div className="readout">
              <div className="readout-item">
                <span className="readout-val signal">46%</span>
                <span className="readout-label">Renewal-rate lift</span>
              </div>
              <div className="readout-item">
                <span className="readout-val signal">60%</span>
                <span className="readout-label">Support cost cut</span>
              </div>
              <div className="readout-item">
                <span className="readout-val alert">90–180d</span>
                <span className="readout-label">Risk seen early</span>
              </div>
            </div>
          </div>

          <div className="loop-stage">
            <PredictionLoop />
          </div>
        </div>
      </header>

      {/* ---------------- SYSTEM / FRAMEWORK ---------------- */}
      <section className="section" id="system">
        <div className="container">
          <Reveal className="framework-head">
            <span className="eyebrow">The Prediction Loop</span>
            <h2 className="display">
              Prediction is the difference between managing churn and
              preventing it.
            </h2>
            <p className="lede">
              AI is not a chatbot bolted onto your funnel. It is a loop that
              runs continuously across the customer journey: it predicts what
              happens next, orchestrates the right motion, acts through people
              and agents, and learns from the outcome. That loop is the engine
              inside the operating system.
            </p>
          </Reveal>

          <Reveal className="stages" delay={80}>
            <div className="stage">
              <span className="stage-index">01 / PREDICT</span>
              <h3>Predict</h3>
              <p>
                Leading-indicator health and engagement scoring surfaces
                adoption risk and expansion signal long before the renewal
                conversation.
              </p>
            </div>
            <div className="stage">
              <span className="stage-index">02 / ORCHESTRATE</span>
              <h3>Orchestrate</h3>
              <p>
                The prediction routes work to the right layer: a human, an
                agent, or a digital experience, matched to account complexity
                and value.
              </p>
            </div>
            <div className="stage is-alert">
              <span className="stage-index">03 / ACT</span>
              <h3>Act</h3>
              <p>
                Intervention happens before the customer goes quiet. Automated
                where it should be, human where it matters.
              </p>
            </div>
            <div className="stage">
              <span className="stage-index">04 / LEARN</span>
              <h3>Learn</h3>
              <p>
                Every outcome sharpens the model. The system gets more
                predictive with each cycle, compounding instead of resetting.
              </p>
            </div>
          </Reveal>

          {/* three layers */}
          <div className="layers">
            <Reveal className="layer-card" delay={0}>
              <span className="eyebrow">Layer 01</span>
              <h3>Humans</h3>
              <p>
                Senior judgment aimed where it changes the outcome: complex
                accounts, executive relationships, the moments a model can flag
                but not close.
              </p>
            </Reveal>
            <Reveal className="layer-card" delay={100}>
              <span className="eyebrow">Layer 02</span>
              <h3>Agents</h3>
              <p>
                Agentic workflows across onboarding, adoption, support, and
                review generation, delivering the motion at a scale headcount
                never could.
              </p>
            </Reveal>
            <Reveal className="layer-card" delay={200}>
              <span className="eyebrow">Layer 03</span>
              <h3>Digital</h3>
              <p>
                Self-serve and product-led experiences that carry the
                low-complexity journeys end to end, freeing the other two
                layers for what they do best.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PROOF ---------------- */}
      <section className="section proof" id="proof">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Built, not theorized</span>
            <h2 className="display" style={{ marginTop: 18, maxWidth: "16ch" }}>
              I&apos;ve built the working model of this operating system for a GTM organization and now I want to share it.
            </h2>
          </Reveal>

          <div className="proof-grid">
            <Reveal className="metric" delay={0}>
              <div className="num signal">46%</div>
              <div className="cap">
                Improvement in renewal rates by treating churn as a product,
                marketing, and success problem. Not a revenue one.
              </div>
            </Reveal>
            <Reveal className="metric" delay={80}>
              <div className="num signal">$2.7M</div>
              <div className="cap">
                Operating savings from an AI support and guidance layer that
                automated triage, routing, and resolution.
              </div>
            </Reveal>
            <Reveal className="metric" delay={160}>
              <div className="num alert">$4M</div>
              <div className="cap">
                New services revenue stood up from zero, with a 95% renewal
                rate for participating customers.
              </div>
            </Reveal>
            <Reveal className="metric" delay={240}>
              <div className="num signal">0→8</div>
              <div className="cap">
                A predictive customer-health model giving a leading-indicator
                view of risk 90–180 days ahead of renewal.
              </div>
            </Reveal>
          </div>

          {/* Pulse Score callout */}
          <Reveal className="pulse-callout" delay={120}>
            <div>
              <span className="eyebrow">The predictor</span>
              <h3 className="display" style={{ marginTop: 14 }}>
                The Pulse Score
              </h3>
              <p>
                A 0-to-8 health and product-engagement model, built with product
                and data analytics, that reads adoption risk as a leading
                indicator, triggering intervention before a customer goes
                quiet. Prediction, made operational.
              </p>
            </div>
            <div className="pulse-meter">
              <div className="pulse-track">
                <div className="pulse-cell filled" />
                <div className="pulse-cell filled" />
                <div className="pulse-cell filled" />
                <div className="pulse-cell filled" />
                <div className="pulse-cell filled" />
                <div className="pulse-cell risk" />
                <div className="pulse-cell" />
                <div className="pulse-cell" />
              </div>
              <div className="pulse-scale">
                <span>0 · CHURN RISK</span>
                <span>ALERT AT 5</span>
                <span>8 · HEALTHY</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- IN PRACTICE ---------------- */}
      <section className="section" id="practice">
        <div className="container">
          <Reveal className="motion-head">
            <span className="eyebrow">In practice</span>
            <h2 className="display" style={{ marginTop: 18 }}>
              The operating system, running.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Every motion across the customer lifecycle has an agent. Organized
              by sales stage and role, each handles a discrete job end-to-end.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="stage-bar">
              {[
                { label: "Prospecting", count: 2, active: true },
                { label: "Qualification", count: 0, active: false },
                { label: "Discovery", count: 2, active: false },
                { label: "Demo & Proposal", count: 0, active: false },
                { label: "Negotiation & Close", count: 0, active: false },
                { label: "Onboarding", count: 2, active: false },
                { label: "Adoption", count: 0, active: false },
                { label: "Expansion", count: 0, active: false },
                { label: "Renewal", count: 1, active: false },
              ].map((s) => (
                <div key={s.label} className={`stage-pill${s.active ? " active" : ""}`}>
                  <span className="stage-pill-label">{s.label}</span>
                  <span className="stage-pill-count">
                    {s.count} {s.count === 1 ? "workflow" : "workflows"}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} className="workflow-card">
            <div className="wf-header">
              <div className="wf-title-row">
                <div className="wf-icon">⚡</div>
                <span className="wf-name">BDR Weekly Pipeline</span>
              </div>
              <div className="wf-badges">
                <span className="wf-badge is-stage">Prospecting</span>
                <span className="wf-badge">BDR</span>
              </div>
            </div>
            <div className="wf-desc">
              Weekly scheduled pipeline that runs for every active BDR. Pulls each
              rep&apos;s Salesforce book of business, scores accounts with a
              composite model combining six SF engagement signals and G2 buyer
              intent, enriches top-ranked accounts with contacts via ZoomInfo
              (AMER) or Cognism (EMEA/APAC), assembles account intel from
              ZoomInfo scoops and G2 profiles, drafts personalized outreach
              sequences using Claude Haiku, and writes net-new contacts back to
              Salesforce.
            </div>
            <div className="wf-how">
              <div className="wf-how-label">How it works</div>
              <div className="wf-cols">
                <div className="wf-col">
                  <div className="wf-col-label">Triggered by</div>
                  <div className="wf-col-content">
                    <strong>Scheduled</strong>
                    Runs every Monday AM on schedule. One full pipeline run per
                    active BDR. Also triggerable manually.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Processing</div>
                  <div className="wf-col-content">
                    <strong>3 stages</strong>
                    1. Find and Score: pulls Salesforce accounts, scores with six
                    SF engagement signals plus G2 intent, ranks into
                    High/Medium/Low buckets. 2. Enrich Contacts: gap-fills with
                    ZoomInfo (AMER) or Cognism (EMEA/APAC), fetches scoops and
                    G2 profiles. 3. Build Outreach: feeds account intel into
                    Claude Haiku to draft personalized sequences per contact.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Outputs</div>
                  <div className="wf-col-content">
                    <strong>CSV + CRM write</strong>
                    Ranked accounts with enriched contact data emailed to the
                    BDR. Net-new contacts written back to Salesforce with
                    AccountId, BDR as owner, LinkedIn URL, and ZoomInfo
                    metadata.
                  </div>
                </div>
              </div>
            </div>
            <div className="wf-footer">
              <div className="wf-tools">
                {["n8n", "Salesforce", "G2 API", "ZoomInfo", "Cognism", "Claude Haiku", "Gmail"].map(
                  (tool) => (
                    <span key={tool} className="wf-tool">{tool}</span>
                  )
                )}
              </div>
              <div className="wf-meta">
                <span className="wf-meta-item">
                  <span className="val">~4 hrs/wk</span> saved per rep
                </span>
                <span className="wf-meta-item">
                  <span className="wf-live-dot" />
                  <span className="val">Live</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="workflow-card">
            <div className="wf-header">
              <div className="wf-title-row">
                <div className="wf-icon">🔁</div>
                <span className="wf-name">Churn-Risk Alert &amp; Audit Loop</span>
              </div>
              <div className="wf-badges">
                <span className="wf-badge is-stage">Renewal</span>
                <span className="wf-badge">AM</span>
                <span className="wf-badge">CSM</span>
              </div>
            </div>
            <div className="wf-desc">
              Identifies at-risk customer accounts (pulse score 0 to 3), enriches
              them with Salesforce and ZoomInfo context, posts actionable
              churn-risk alerts to the relevant team channel, and audits for
              acknowledgment or non-response over a 4-day window. Bridges the gap
              until Catalyst v2 ships so CSMs and AMs can act on churn risk
              immediately.
            </div>
            <div className="wf-how">
              <div className="wf-how-label">How it works</div>
              <div className="wf-cols">
                <div className="wf-col">
                  <div className="wf-col-label">Triggered by</div>
                  <div className="wf-col-content">
                    <strong>Scheduled</strong>
                    Recurring batch in n8n, likely daily. Pulls active accounts,
                    filters to pulse score 0 to 3, fires the enrichment and
                    alert sequence. Also triggerable manually.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Processing</div>
                  <div className="wf-col-content">
                    <strong>3 stages</strong>
                    1. Pull and Filter: queries Salesforce for active accounts
                    at pulse 0 to 3, enriches with ZoomInfo for multi-threading
                    contacts. 2. Alert: posts churn-risk alert to team channel
                    with account name, risk level, renewal window, AM/CSM
                    ownership, and 5 recommended contacts. 3. Audit Loop:
                    checks acknowledgment after 4 days, re-nudges or closes
                    based on response.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Outputs</div>
                  <div className="wf-col-content">
                    <strong>Alert + audit trail</strong>
                    Churn-risk alert in team channel with contact quality
                    assessment and multi-threading recommendations. 4-day audit
                    check creates an acknowledgment record. AM/CSM confirms via
                    reply or emoji.
                  </div>
                </div>
              </div>
            </div>
            <div className="wf-footer">
              <div className="wf-tools">
                {["n8n", "Salesforce", "ZoomInfo", "Slack", "Claude Haiku"].map(
                  (tool) => (
                    <span key={tool} className="wf-tool">{tool}</span>
                  )
                )}
              </div>
              <div className="wf-meta">
                <span className="wf-meta-item">
                  <span className="wf-live-dot" style={{ background: "var(--alert)", boxShadow: "0 0 8px var(--glow-alert)" }} />
                  <span className="val" style={{ color: "var(--alert)" }}>In progress · 75%</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- ABOUT / STORY ---------------- */}
      <section className="section" id="about">
        <div className="container about-grid">
          {/* headshot placeholder — swap in Claude Code */}
          <Reveal>
            <div className="headshot">
              <img src="/headshot.png" alt="Matt Ryan" />
            </div>
          </Reveal>

          <Reveal className="story" delay={100}>
            <h2 className="display">The engineer who runs the number.</h2>
            <span className="role">
              VP, Global Solutions &amp; Customer Success · G2
            </span>
            <p>
              I started as a software engineer. Twenty years later, I&apos;m
              still the most technical voice in the executive room, fluent
              enough to partner directly with product and engineering,
              commercial enough to own the number.
            </p>
            <p>
              That combination is the whole point. I build and re-architect
              post-sales organizations around adoption, outcomes, and AI,
              moving teams up the customer lifecycle so retention, expansion,
              and new revenue <strong>compound instead of getting chased
              downstream</strong>.
            </p>
            <p>
              At G2 I designed an AI operating system across the customer
              journey, human-led and agent-delivered. It rebuilt a broken
              retention motion, lifted renewal rates 46%, cut support operating
              costs 60%, and stood up new services revenue from zero. Before
              that I built functions from the ground up at Slack, through
              the Salesforce $27B acquisition, and scaled a Workday practice
              from a $10M acquisition toward a $120M global business.
            </p>

            <div className="timeline">
              <div className="tl-row">
                <span className="tl-when">2024 to NOW</span>
                <span className="tl-what">
                  <strong>G2 · VP, Global Solutions &amp; Customer Success</strong>
                  <span>
                    Architected the AI GTM Operating System; built Professional
                    Services from inception; co-launched G2&apos;s commercial MCP
                    strategy.
                  </span>
                </span>
              </div>
              <div className="tl-row">
                <span className="tl-when">2022 to 2024</span>
                <span className="tl-what">
                  <strong>Upwork · VP, Enterprise Solutions</strong>
                  <span>
                    Built the enterprise solution and post-sales model;
                    contributed to 37% enterprise growth.
                  </span>
                </span>
              </div>
              <div className="tl-row">
                <span className="tl-when">2020 to 2022</span>
                <span className="tl-what">
                  <strong>Slack (Salesforce) · Professional Services Leader</strong>
                  <span>
                    Built services and technical consulting from the ground up;
                    named Slack Leader of the Year, 2022.
                  </span>
                </span>
              </div>
              <div className="tl-row">
                <span className="tl-when">2012 to 2020</span>
                <span className="tl-what">
                  <strong>Alight / Strada · VP, Professional Services</strong>
                  <span>
                    Scaled a Workday HCM practice from ~$10M toward ~$120M under
                    private-equity ownership.
                  </span>
                </span>
              </div>
            </div>

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

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#top" className="wordmark">
            matt ryan<span className="dot-ai">.ai</span>
          </a>
          <span className="footer-meta">
            The AI GTM Operating System · The Prediction Loop
          </span>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/matthewwryan/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/imreallyintoit" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
