import PredictionLoop from "@/components/PredictionLoop";
import Reveal from "@/components/Reveal";
import RenewalChart from "@/components/RenewalChart";

export default function Home() {
  return (
    <>
      {/* ---------------- NAV ---------------- */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="wordmark">
            <svg className="nav-mark" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <circle cx="17" cy="17" r="14" stroke="var(--signal)" strokeWidth="0.75" fill="none" strokeOpacity="0.18" strokeDasharray="4 3.5"/>
              <circle cx="17" cy="17" r="9.5" stroke="var(--signal)" strokeWidth="1" fill="none" strokeOpacity="0.45"/>
              <circle cx="17" cy="17" r="5" stroke="var(--signal)" strokeWidth="1.5" fill="none"/>
              <circle cx="17" cy="17" r="2.5" fill="var(--alert)" className="nav-center-dot"/>
              <circle cx="17" cy="3" r="2" fill="var(--signal)" className="nav-orbit-dot"/>
            </svg>
            mattryan<span className="dot-ai">.ai</span>
          </a>
          <div className="nav-links">
            <a href="#system">System</a>
            <a href="#proof">Proof</a>
            <a href="#activation">Activation</a>
            <a href="#practice">In practice</a>
            <a href="#governance">Governance</a>
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
              Most revenue organizations run on lagging metrics. I built
              one that runs on{" "}
              <span className="highlight">leading signals</span>.
            </h1>
            <p className="lede hero-lede">
              An AI operating system that converts product signals, buyer
              intent, and customer behavior into 90-day forward visibility
              across churn, expansion, and the full customer journey.
              Designed and proven inside a live GTM organization.
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
                <span className="readout-val signal">48%</span>
                <span className="readout-label">Renewal-rate lift</span>
              </div>
              <div className="readout-item">
                <span className="readout-val signal">60%</span>
                <span className="readout-label">Support cost cut</span>
              </div>
              <div className="readout-item">
                <span className="readout-val alert">90-180d</span>
                <span className="readout-label">Risk seen early</span>
              </div>
            </div>
          </div>

          <div className="loop-stage">
            <PredictionLoop />
          </div>
        </div>
      </header>

      {/* ---------------- FOREWORD / ORIENTATION ---------------- */}
      <section className="foreword">
        <div className="container">
          <div className="foreword-inner">
            <div className="foreword-prose">
              <p className="foreword-heading">What you&apos;re looking at.</p>
              <p className="foreword-text">
                The AI GTM Operating System is a framework designed and built
                inside a live GTM organization. This site shares it completely:
                the architecture behind it, the results it produced, the
                workflows running today, and the governance model that sustains
                it at scale. Every section is grounded in something that was
                actually built. The person who built it is at the bottom.
              </p>
            </div>
            <nav className="foreword-guide" aria-label="Site sections">
              {[
                { num: "01", href: "#system",     label: "System",       desc: "The architecture: how the Prediction Loop runs as a continuous operating system across the customer journey." },
                { num: "02", href: "#proof",       label: "Proof",        desc: "The outcomes: what this system produced inside a real GTM organization, with the data to support it." },
                { num: "03", href: "#activation",  label: "Activation",   desc: "The human motion: why the first 30 days determine renewal, and the model built to win that window." },
                { num: "04", href: "#practice",    label: "In practice",  desc: "The motion: 14 live agentic workflows running across sales, success, and onboarding today." },
                { num: "05", href: "#governance",  label: "Governance",   desc: "The foundation: the intake and triage system that keeps AI work coherent and scalable." },
                { num: "06", href: "#about",       label: "About",        desc: "The builder: background, career, and the experience behind this framework." },
              ].map(({ num, href, label, desc }) => (
                <a key={href} href={href} className="fg-row">
                  <span className="fg-num">{num}</span>
                  <span className="fg-label">{label}</span>
                  <span className="fg-desc">{desc}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ---------------- SYSTEM / FRAMEWORK ---------------- */}
      <section className="section" id="system">
        <div className="container">
          <Reveal className="framework-head">
            <span className="eyebrow">The Prediction Loop · SOAR</span>
            <h2 className="display">
              Prediction is the difference between managing churn and
              preventing it.
            </h2>
            <p className="lede">
              AI is not a chatbot bolted onto your funnel. It is a loop that
              runs continuously across the customer journey: it surfaces the
              signal before the number moves, orchestrates the right motion,
              acts through people and agents, and refines from every outcome.
              That loop is the engine inside the operating system.
            </p>
          </Reveal>

          <Reveal className="stages" delay={80}>
            <div className="stage">
              <svg className="stage-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="22" cy="22" r="18" stroke="var(--signal)" strokeWidth="0.75" opacity="0.15"/>
                <circle cx="22" cy="22" r="12" stroke="var(--signal)" strokeWidth="1" opacity="0.35"/>
                <circle cx="22" cy="22" r="6" stroke="var(--signal)" strokeWidth="1.5" opacity="0.7"/>
                <circle cx="22" cy="22" r="2.5" fill="var(--signal)"/>
                <circle cx="22" cy="10" r="2" fill="var(--alert)"/>
              </svg>
              <span className="stage-index">01 / SIGNAL</span>
              <h3>Signal</h3>
              <p>
                Leading-indicator health and engagement scoring surfaces
                adoption risk and expansion opportunity long before the
                renewal conversation.
              </p>
            </div>
            <div className="stage">
              <svg className="stage-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="22" cy="8" r="3" fill="var(--signal)"/>
                <circle cx="22" cy="22" r="3.5" stroke="var(--signal)" strokeWidth="1.5"/>
                <line x1="22" y1="11" x2="22" y2="18.5" stroke="var(--signal)" strokeWidth="1.5"/>
                <circle cx="10" cy="36" r="2.5" fill="var(--signal)" opacity="0.55"/>
                <circle cx="22" cy="36" r="2.5" fill="var(--signal)" opacity="0.55"/>
                <circle cx="34" cy="36" r="2.5" fill="var(--signal)" opacity="0.55"/>
                <line x1="19.5" y1="25" x2="11" y2="34" stroke="var(--signal)" strokeWidth="1" opacity="0.6"/>
                <line x1="22" y1="25.5" x2="22" y2="33.5" stroke="var(--signal)" strokeWidth="1" opacity="0.6"/>
                <line x1="24.5" y1="25" x2="33" y2="34" stroke="var(--signal)" strokeWidth="1" opacity="0.6"/>
              </svg>
              <span className="stage-index">02 / ORCHESTRATE</span>
              <h3>Orchestrate</h3>
              <p>
                The signal routes work to the right layer: a human, an
                agent, or a digital experience, matched to account complexity
                and value.
              </p>
            </div>
            <div className="stage is-alert">
              <svg className="stage-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="22" cy="22" r="16" stroke="var(--alert)" strokeWidth="1" opacity="0.3"/>
                <circle cx="22" cy="22" r="9" stroke="var(--alert)" strokeWidth="1.5" opacity="0.6"/>
                <circle cx="22" cy="22" r="3" fill="var(--alert)"/>
                <line x1="22" y1="2" x2="22" y2="12" stroke="var(--alert)" strokeWidth="1" opacity="0.4"/>
                <line x1="22" y1="32" x2="22" y2="42" stroke="var(--alert)" strokeWidth="1" opacity="0.4"/>
                <line x1="2" y1="22" x2="12" y2="22" stroke="var(--alert)" strokeWidth="1" opacity="0.4"/>
                <line x1="32" y1="22" x2="42" y2="22" stroke="var(--alert)" strokeWidth="1" opacity="0.4"/>
              </svg>
              <span className="stage-index">03 / ACT</span>
              <h3>Act</h3>
              <p>
                Intervention happens before the customer goes quiet. Automated
                where it should be, human where it matters.
              </p>
            </div>
            <div className="stage">
              <svg className="stage-icon" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="22" cy="22" r="16" stroke="var(--signal)" strokeWidth="0.75" opacity="0.2"/>
                <path d="M 22 6 A 16 16 0 1 1 30 8" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round"/>
                <polygon points="30,8 23,5 26,13" fill="var(--signal)"/>
                <circle cx="22" cy="22" r="2.5" fill="var(--signal)" opacity="0.55"/>
              </svg>
              <span className="stage-index">04 / REFINE</span>
              <h3>Refine</h3>
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
              <div className="num signal">48%</div>
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
                view of risk 90 to 180 days ahead of renewal.
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <RenewalChart />
          </Reveal>

          {/* ---- Pulse Score: expanded ---- */}
          <Reveal className="pulse-head" delay={60}>
            <span className="eyebrow">The predictor</span>
            <h3 className="display" style={{ marginTop: 14 }}>
              The Pulse Score
            </h3>
            <p className="pulse-intro">
              A score without underlying data is just a guess. Building a
              truly predictive model requires investing in the signal
              architecture beneath it first: product engagement telemetry,
              customer interaction data, buyer demand signals, and
              renewal-context metadata, normalized and fused into a composite
              model. This is why agent building and data infrastructure are
              the same project. The score is the output. The architecture is
              the point.
            </p>
          </Reveal>

          <Reveal className="pulse-arch" delay={80}>
            <div className="pulse-arch-eyebrow">Signal architecture · three lenses</div>
            <p className="pulse-arch-sub">
              Each lens reads High or Low. Eight combinations. One named
              diagnosis per account.
            </p>
            <div className="pulse-arch-grid">
              <div className="pulse-layer">
                <div className="pulse-layer-tag">Layer 1 · Product-Led</div>
                <div className="pulse-layer-q">Are they using it?</div>
                <div className="pulse-layer-role">Triggers the flag · primary</div>
                <ul className="pulse-layer-list">
                  {["Logins / visitor count", "Review generation rate", "Ads subscription", "Profile completeness", "CTA activation", "Performance Analytics", "Integration depth", "Feature discovery breadth"].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="pulse-layer is-csm">
                <div className="pulse-layer-tag is-csm">Layer 2 · CSM-Led</div>
                <div className="pulse-layer-q">Is the relationship alive?</div>
                <div className="pulse-layer-role is-csm">Triggers the flag · secondary</div>
                <ul className="pulse-layer-list">
                  {["Conversation counts", "Meeting acceptance rate", "Multi-threading depth", "Executive engagement", "NPS trend", "Renewal-call sentiment", "Overall call sentiment"].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="pulse-layer is-roi">
                <div className="pulse-layer-tag is-roi">Layer 3 · ROI &amp; Context</div>
                <div className="pulse-layer-q">Are buyers responding?</div>
                <div className="pulse-layer-role is-roi">Context only · no independent flag</div>
                <ul className="pulse-layer-list">
                  {["Leads generated from G2", "Pipeline influenced / attributed", "Review velocity trend", "Category share of voice", "AEO visibility & presence", "G2 profile traffic", "Referral traffic to customer site"].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="pulse-matrix" delay={100}>
            <div className="pulse-matrix-label">Interpretation matrix · diagnosis, not just a flag</div>
            <div className="pulse-matrix-scroll">
              <div className="pulse-matrix-table">
                <div className="pulse-matrix-head">
                  <span>Product</span>
                  <span>CSM</span>
                  <span>ROI</span>
                  <span>Renewal</span>
                  <span>Profile / action</span>
                </div>
                {[
                  { p: true,  c: true,  r: true,  rate: "93%", profile: "Healthy: monitor",                   tier: "h" },
                  { p: true,  c: false, r: true,  rate: "86%", profile: "Self-sufficient: light touch",        tier: "h" },
                  { p: true,  c: true,  r: false, rate: "81%", profile: "Engaged, no ROI: investigate value",  tier: "m" },
                  { p: false, c: true,  r: true,  rate: "77%", profile: "CSM-carried + ROI: coach adoption",   tier: "m" },
                  { p: false, c: true,  r: false, rate: "75%", profile: "CSM-carried, fragile: escalate",      tier: "m" },
                  { p: true,  c: false, r: false, rate: "75%", profile: "Silent self-serve: monitor",          tier: "m" },
                  { p: false, c: false, r: true,  rate: "67%", profile: "Passive value: likely safe",          tier: "l" },
                  { p: false, c: false, r: false, rate: "48%", profile: "True at-risk: top priority",          tier: "r" },
                ].map(({ p, c, r, rate, profile, tier }, i) => (
                  <div key={i} className={`pulse-matrix-row${tier === "r" ? " is-risk" : ""}`}>
                    <span className={`plv ${p ? "hi" : "lo"}`}>{p ? "High" : "Low"}</span>
                    <span className={`plv ${c ? "hi" : "lo"}`}>{c ? "High" : "Low"}</span>
                    <span className={`plv ${r ? "hi" : "lo"}`}>{r ? "High" : "Low"}</span>
                    <span className={`pulse-rate${tier === "r" ? " is-risk" : tier === "h" ? " is-high" : ""}`}>{rate}</span>
                    <span className="pulse-profile">{profile}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="pulse-matrix-note">
              Renewal falls cleanly from 93% to 48% across the eight profiles.
              V1&apos;s single flag becomes eight actionable diagnoses.
            </p>
          </Reveal>

          <Reveal className="pulse-v2-proof" delay={110}>
            {[
              { val: "83%",    label: "Churn caught, recall unchanged",      isAlert: false },
              { val: "1 in 4", label: "False alarms removed",                isAlert: true  },
              { val: "~$8M",   label: "ACV no longer chased unnecessarily",  isAlert: false },
              { val: "0 → 8",  label: "Same scale, eight named diagnoses",   isAlert: false },
            ].map(({ val, label, isAlert }) => (
              <div key={label} className="pv2-stat">
                <div className={`pv2-val${isAlert ? " is-alert" : ""}`}>{val}</div>
                <div className="pv2-label">{label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="pulse-callout" delay={120}>
            <div>
              <span className="eyebrow">Health interpretation</span>
              <h3 className="display" style={{ marginTop: 14 }}>
                A score that explains itself.
              </h3>
              <p>
                The 0-to-8 scale stays. What changes is the diagnosis. An
                account at 3/8 used to mean at risk, act. Now it carries a
                named profile: is product engagement low while no buyer
                demand exists, or is the CSM relationship the only thread
                holding? Those are different conversations, different
                urgencies, different next steps.
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

          <Reveal className="pulse-sentiment" delay={130}>
            <div className="pulse-sentiment-text">
              <span className="eyebrow">The missing signal</span>
              <h3 className="display" style={{ marginTop: 14, fontSize: "clamp(22px, 2.6vw, 30px)" }}>
                Customer words predict what usage data cannot.
              </h3>
              <p>
                A customer who logs in every day but tells their team the
                product is not working is a churn risk. A customer who barely
                logs in but calls their CSM a strategic partner will renew.
                Behavioral signals alone cannot distinguish those two accounts.
              </p>
              <p>
                Gong call transcripts, NPS verbatims, support ticket language,
                and G2 review text carry the actual words customers use to
                describe their experience. Combined with product and ROI
                signals, they turn a number into a diagnosis: not just whether
                an account is at risk, but why, and what the conversation needs
                to be.
              </p>
              <p>
                This is where the roadmap goes next: renewal-call sentiment,
                meeting acceptance trends, and multi-threading depth wired
                directly into the score, so prediction sharpens with every
                customer interaction.
              </p>
            </div>
            <div className="sentiment-viz" aria-hidden="true">
              <svg viewBox="0 0 270 240" xmlns="http://www.w3.org/2000/svg">
                {[
                  { y: 22,  label: "GONG TRANSCRIPTS", isAlert: false },
                  { y: 64,  label: "G2 REVIEW TEXT",   isAlert: false },
                  { y: 108, label: "NPS VERBATIMS",    isAlert: false },
                  { y: 152, label: "SUPPORT TICKETS",  isAlert: false },
                  { y: 196, label: "RENEWAL CALLS",    isAlert: true  },
                ].map(({ y, label, isAlert }) => (
                  <g key={label}>
                    <rect
                      x="2" y={y} width="148" height="28" rx="2"
                      fill={isAlert ? "var(--alert)" : "var(--signal)"}
                      fillOpacity="0.08"
                      stroke={isAlert ? "var(--alert)" : "var(--signal)"}
                      strokeOpacity="0.28"
                      strokeWidth="1"
                    />
                    <text
                      x="76" y={y + 18}
                      textAnchor="middle"
                      fontFamily="var(--font-mono)"
                      fontSize="8.5"
                      letterSpacing="1.2"
                      fill={isAlert ? "var(--alert)" : "var(--signal)"}
                    >
                      {label}
                    </text>
                    <line
                      x1="150" y1={y + 14} x2="192" y2="110"
                      stroke={isAlert ? "var(--alert)" : "var(--signal)"}
                      strokeWidth="1"
                      strokeOpacity="0.35"
                    />
                  </g>
                ))}
                <rect
                  x="192" y="90" width="76" height="40" rx="3"
                  fill="var(--signal)"
                  fillOpacity="0.1"
                  stroke="var(--signal)"
                  strokeWidth="1.5"
                />
                <text
                  x="230" y="107"
                  textAnchor="middle"
                  fontFamily="var(--font-display)"
                  fontSize="11"
                  fontWeight="600"
                  fill="var(--ink)"
                >
                  Prediction
                </text>
                <text
                  x="230" y="122"
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--signal)"
                >
                  0 to 8
                </text>
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- ACTIVATION ---------------- */}
      <section className="section activation-section" id="activation">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Customer activation · the first 30 days</span>
            <h2 className="display" style={{ marginTop: 18, maxWidth: "22ch" }}>
              The customer who never activates won&apos;t renew.
            </h2>
            <p className="lede">
              Activation is the single strongest predictor of renewal. Not
              quarterly sentiment, not meeting cadence, not NPS. The behavior
              in the first 30 days determines whether a customer reaches
              renewal as an advocate or a churn risk. Every late-stage
              intervention is a failure of early signal.
            </p>
          </Reveal>

          <div className="act-stats">
            <Reveal className="act-stat" delay={0}>
              <div className="act-stat-val is-alert">70%</div>
              <div className="act-stat-label">of new accounts exit the first 30 days without full activation</div>
            </Reveal>
            <Reveal className="act-stat" delay={60}>
              <div className="act-stat-val">25pp</div>
              <div className="act-stat-label">first-year churn premium over every subsequent renewal year</div>
            </Reveal>
            <Reveal className="act-stat is-cliff" delay={120}>
              <div className="act-cliff-row">
                <div className="act-cliff-side">
                  <div className="act-cliff-val is-alert">57%</div>
                  <div className="act-cliff-tag">Under 3 integrations</div>
                </div>
                <div className="act-cliff-arrow">&#8594;</div>
                <div className="act-cliff-side">
                  <div className="act-cliff-val is-signal">15%</div>
                  <div className="act-cliff-tag">3+ integrations</div>
                </div>
              </div>
              <div className="act-stat-label">churn rate by integration depth. The threshold is the signal.</div>
            </Reveal>
          </div>

          <Reveal className="act-model" delay={80}>
            <div className="act-model-label">The motion</div>
            <p className="act-model-intro">
              Group onboarding ran at 35% attendance and was retired. Every
              customer now gets a named Onboarding Partner who owns the first
              30 days end to end. The AE commission gate ensures activation
              happens before the deal is truly closed. Full activation is
              defined precisely: custom CTA live, 5+ reviews collected, ROI
              dashboard connected.
            </p>
            <div className="act-timeline">
              {[
                { day: "Day 0",   label: "AE commission gate",         desc: "Kickoff scheduled before deal closes. AE identifies 3 key contacts pre-signature. 20% of AE payment at risk until activation confirmed within 60 days." },
                { day: "Day 1",   label: "Onboarding Partner assigned", desc: "Named OP introduced by AE on kickoff call. Persona and role collected to personalize the journey. Correct contact confirmed." },
                { day: "Day 7-21", label: "Stage-gated milestones",    desc: "Structured outreach at weeks 2, 3, and 4. Review tracker surfaces abandoned reviews for re-nudge. ROI connector initiated." },
                { day: "Day 30",  label: "Full activation",            desc: "Custom CTA live. 5+ reviews generated. ROI dashboard connected. Pulse Score enters green range." },
              ].map(({ day, label, desc }) => (
                <div key={day} className="act-step">
                  <div className="act-step-day">{day}</div>
                  <div className="act-step-body">
                    <div className="act-step-label">{label}</div>
                    <div className="act-step-desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="act-result" delay={100}>
            <div className="act-result-label">First cohort results</div>
            <div className="act-result-grid">
              <div className="act-result-item">
                <div className="act-result-val">4.5x</div>
                <div className="act-result-desc">jump in fully activated products (8.6% to 39.1%)</div>
              </div>
              <div className="act-result-item">
                <div className="act-result-val">52%</div>
                <div className="act-result-desc">of OP accounts hit 5+ reviews vs. 19% baseline</div>
              </div>
              <div className="act-result-item">
                <div className="act-result-val">+16pp</div>
                <div className="act-result-desc">ROI connector adoption, from 31% to 47.8%</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- IN PRACTICE ---------------- */}
      <section className="section" id="practice">
        <div className="container">
          <Reveal className="motion-head">
            <span className="eyebrow">GTM Engineering · intake to deployment</span>
            <h2 className="display" style={{ marginTop: 18 }}>
              Ideas from the field, engineered for production.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Every agent here went through the same door: a structured intake,
              a priority triage, an engineering build, a maintained deployment.
              This is what professional AI operations looks like. Not individuals
              running scripts from their own computers.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="intake-flow-label">Intake pipeline</div>
            <div className="intake-flow-steps">
              {[
                { val: "67", label: "Submitted",   mod: "" },
                { val: "22", label: "In review",   mod: "" },
                { val: "18", label: "Approved",    mod: "" },
                { val: "14", label: "In progress", mod: "" },
                { val: "14", label: "Live",        mod: "is-live" },
                { val: "2",  label: "Declined",    mod: "is-out"  },
              ].map(({ val, label, mod }) => (
                <div key={label} className={`if-step${mod ? ` ${mod}` : ""}`}>
                  <div className="if-val">{val}</div>
                  <div className="if-label">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="jmap-label">Where agents deploy · customer journey</div>
            <div className="jmap-track">
              {[
                { stage: "Prospecting",    count: 2, variant: "signal" },
                { stage: "Qualification",  count: 0, variant: ""       },
                { stage: "Discovery",      count: 2, variant: "signal" },
                { stage: "Demo & Proposal",count: 0, variant: ""       },
                { stage: "Close",          count: 0, variant: ""       },
                { stage: "Onboarding",     count: 3, variant: "signal" },
                { stage: "Adoption",       count: 0, variant: ""       },
                { stage: "Expansion",      count: 0, variant: ""       },
                { stage: "Renewal",        count: 1, variant: "alert"  },
              ].map(({ stage, count, variant }) => (
                <div key={stage} className={`jmap-stage${variant ? ` is-${variant}` : ""}`}>
                  <div className="jmap-name">{stage}</div>
                  {count > 0 ? (
                    <>
                      <div className="jmap-count">{count}</div>
                      <div className="jmap-unit">{count === 1 ? "agent" : "agents"}</div>
                      <div className="jmap-dots">
                        {Array.from({ length: count }).map((_, i) => (
                          <div key={i} className={`jmap-dot${variant === "alert" ? " is-alert" : ""}`} />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="jmap-empty">Building</div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="insight-cards">
            <div className="insight-card is-key">
              <div className="insight-stat">21%</div>
              <div className="insight-head">Submission-to-production rate</div>
              <p className="insight-body">
                14 of 67 ideas became maintained, production-grade agents. The
                rest were triaged, deprioritized, or declined. Governance is the
                filter.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-stat is-neutral">P0 to P3</div>
              <div className="insight-head">Priority scoring on every idea</div>
              <p className="insight-body">
                Every submission is scored by impact, complexity, and risk before
                engineering touches it. Ideas from the field. Accountability from
                the team.
              </p>
            </div>
            <div className="insight-card">
              <div className="insight-stat is-neutral">~46 hrs</div>
              <div className="insight-head">Returned to sellers per week</div>
              <p className="insight-body">
                Across 6 roles with named champions. Time freed from manual work,
                redirected to the moments that need human judgment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="role-coverage">
              <div className="role-coverage-label">
                Submissions across 6 roles · anyone can submit, not everyone ships
              </div>
              <div className="role-chips">
                {["AE", "AM", "BDR", "CSM", "SC", "IC"].map((role) => (
                  <span key={role} className="role-chip">{role}</span>
                ))}
              </div>
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
          <Reveal delay={200} className="workflow-card">
            <div className="wf-header">
              <div className="wf-title-row">
                <div className="wf-icon">🎯</div>
                <span className="wf-name">MEDDPICC Research &amp; Salesforce Updater</span>
              </div>
              <div className="wf-badges">
                <span className="wf-badge is-stage">Discovery</span>
                <span className="wf-badge">AE</span>
                <span className="wf-badge">AM</span>
              </div>
            </div>
            <div className="wf-desc">
              Automates MEDDPICC field research and Salesforce updates for Account
              Managers by mining Gong call transcripts, Salesforce history, and
              account context. Eliminates the manual CRM hygiene work that
              follows every discovery call.
            </div>
            <div className="wf-how">
              <div className="wf-how-label">How it works</div>
              <div className="wf-cols">
                <div className="wf-col">
                  <div className="wf-col-label">Triggered by</div>
                  <div className="wf-col-content">
                    <strong>On-demand or scheduled</strong>
                    AM messages the agent with account or deal details. Also
                    fires weekly on a schedule to scan recent Gong calls across
                    the book.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Processing</div>
                  <div className="wf-col-content">
                    <strong>Signal extraction</strong>
                    Mines Gong transcripts for MEDDPICC signals, cross-references
                    Salesforce opportunity history, and uses Claude to structure
                    findings into each MEDDPICC field.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Outputs</div>
                  <div className="wf-col-content">
                    <strong>Updated Salesforce fields</strong>
                    MEDDPICC fields written back to the Salesforce opportunity.
                    Summary posted to Slack so the rep sees exactly what changed
                    and why.
                  </div>
                </div>
              </div>
            </div>
            <div className="wf-footer">
              <div className="wf-tools">
                {["Salesforce", "Gong", "Slack", "Claude"].map((tool) => (
                  <span key={tool} className="wf-tool">{tool}</span>
                ))}
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

          <Reveal delay={210}>
            <div className="role-savings">
              <div className="role-savings-header">
                <span className="role-savings-label">Time saved per week · by role</span>
                <span className="role-savings-total">~46 hrs total</span>
              </div>
              <div className="role-bars">
                {[
                  { role: "AE",  hours: 14, pct: 100 },
                  { role: "AM",  hours: 10, pct: 71  },
                  { role: "BDR", hours: 8,  pct: 57  },
                  { role: "CSM", hours: 7,  pct: 50  },
                  { role: "SC",  hours: 5,  pct: 36  },
                  { role: "IC",  hours: 2,  pct: 14  },
                ].map((r) => (
                  <div key={r.role} className="role-bar-row">
                    <span className="role-bar-name">{r.role}</span>
                    <div className="role-bar-track">
                      <div className="role-bar-fill" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="role-bar-val">{r.hours} hrs</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={220} className="workflow-card">
            <div className="wf-header">
              <div className="wf-title-row">
                <div className="wf-icon">🤝</div>
                <span className="wf-name">SC to ICon Handoff Generator</span>
              </div>
              <div className="wf-badges">
                <span className="wf-badge is-stage">Onboarding</span>
                <span className="wf-badge">SC</span>
                <span className="wf-badge">IC</span>
              </div>
            </div>
            <div className="wf-desc">
              Automatically pulls presales context from Salesforce, Gong, and
              the SC Request object for newly-closed deals and assembles a
              structured handoff brief for the implementation consultant. No
              manual knowledge transfer, no lost context at the moment it
              matters most.
            </div>
            <div className="wf-how">
              <div className="wf-how-label">How it works</div>
              <div className="wf-cols">
                <div className="wf-col">
                  <div className="wf-col-label">Triggered by</div>
                  <div className="wf-col-content">
                    <strong>Scheduled daily</strong>
                    Scans Salesforce Onboarding records created in the prior
                    24 hours for newly-closed deals that need a handoff brief.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Processing</div>
                  <div className="wf-col-content">
                    <strong>Context assembly</strong>
                    Pulls SC Request object, Gong call summaries, and
                    Salesforce deal history. Structures into a handoff format
                    covering technical requirements, stakeholders, and
                    agreed success criteria.
                  </div>
                </div>
                <div className="wf-col">
                  <div className="wf-col-label">Outputs</div>
                  <div className="wf-col-content">
                    <strong>Handoff brief in Slack</strong>
                    Structured brief delivered to the IC in Slack at deal
                    close. Presales context preserved without a single
                    manual handoff meeting.
                  </div>
                </div>
              </div>
            </div>
            <div className="wf-footer">
              <div className="wf-tools">
                {["Salesforce", "Gong", "Slack", "Dust"].map((tool) => (
                  <span key={tool} className="wf-tool">{tool}</span>
                ))}
              </div>
              <div className="wf-meta">
                <span className="wf-meta-item">
                  <span className="val">~5 hrs/wk</span> saved
                </span>
                <span className="wf-meta-item">
                  <span className="wf-live-dot" />
                  <span className="val">Live</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- GOVERNANCE ---------------- */}
      <section className="section" id="governance" style={{ background: "var(--obsidian)", borderBlock: "1px solid var(--hairline)" }}>
        <div className="container">
          <Reveal className="gov-head">
            <span className="eyebrow">Governance</span>
            <h2 className="display" style={{ marginTop: 18 }}>
              The system that governs the system.
            </h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Scaling AI across a GTM org does not happen through enthusiasm.
              It happens through a repeatable intake model: one front door,
              one priority framework, one engineering team that builds and
              maintains what the field submits. Three phases make it work.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="gov-phases">
              <div className="gov-phase">
                <div className="gov-phase-index">01 / ACCESS</div>
                <h3>Open the door.</h3>
                <p>
                  Give every role a structured way to submit ideas. Without a
                  front door, AI work happens in shadow corners: undocumented,
                  single-owner, invisible to leadership until something breaks.
                </p>
                <p>
                  Access is not just permissions. It is a cultural signal that
                  the org is building this together, and that the field is the
                  best source of what to build next.
                </p>
              </div>
              <div className="gov-phase">
                <div className="gov-phase-index">02 / INVENTORY</div>
                <h3>Catalog what exists.</h3>
                <p>
                  Before you scale, you need to know what has already been
                  built. Most organizations have more automation than they
                  think, and most of it is fragile: one person owns it, no one
                  else can maintain it, and it was never designed to scale.
                </p>
                <p>
                  The inventory surfaces shadow IT, informal automations, and
                  one-off experiments before they become technical debt. It is
                  how you prevent the same thing from being built six times by
                  six different people.
                </p>
              </div>
              <div className="gov-phase">
                <div className="gov-phase-index">03 / GOVERN</div>
                <h3>Rebuild it to last.</h3>
                <p>
                  Not every submission should be built. Not every informal
                  automation should survive review. The governance layer
                  triages by priority and risk tier, assigns ownership, and
                  rebuilds approved workflows in a maintained, QA&apos;d,
                  champion-supported form.
                </p>
                <p>
                  The output is a catalog the whole org can trust: tested in
                  the field, documented, and handed to a champion who owns it
                  going forward.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ---------------- ABOUT / STORY ---------------- */}
      <section className="section" id="about">
        <div className="container about-grid">
          {/* headshot placeholder, swap in Claude Code */}
          <Reveal>
            <div className="headshot">
              <img src="/headshot.png" alt="Matt Ryan" />
            </div>
          </Reveal>

          <Reveal className="story" delay={100}>
            <h2 className="display">The revenue architect.</h2>
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
              <div className="tl-row">
                <span className="tl-when">2007 to 2012</span>
                <span className="tl-what">
                  <strong>IBM · Managing Consultant, Global Business Services</strong>
                  <span>
                    Led global HR transformation and HCM technology deployments
                    across enterprise clients. Built technical depth in integration
                    strategy, ETL design, and large-scale system implementation.
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
            mattryan<span className="dot-ai">.ai</span>
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
