import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CompanyLogo from "@/components/CompanyLogo";

export const metadata = {
  title: "Matt Ryan · AI Adoption, Forward Deployed Engineering, and Customer Success",
  description:
    "Matt Ryan builds forward deployed engineering and post-sales teams for enterprise AI adoption. Applied AI leader and VP, Global Solutions at G2.",
  openGraph: {
    title: "Matt Ryan · AI Adoption, Forward Deployed Engineering, and Customer Success",
    description:
      "Matt Ryan builds forward deployed engineering and post-sales teams for enterprise AI adoption. Applied AI leader and VP, Global Solutions at G2.",
  },
  twitter: {
    title: "Matt Ryan · AI Adoption, Forward Deployed Engineering, and Customer Success",
    description:
      "Matt Ryan builds forward deployed engineering and post-sales teams for enterprise AI adoption. Applied AI leader and VP, Global Solutions at G2.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matt Ryan",
  jobTitle: "VP, Global Solutions and Customer Success",
  worksFor: {
    "@type": "Organization",
    name: "G2",
  },
  url: "https://mattryan.ai",
  image: "https://mattryan.ai/headshot.png",
  sameAs: [
    "https://www.linkedin.com/in/matthewwryan/",
    "https://github.com/imreallyintoit",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indiana State University",
  },
  knowsAbout: [
    "AI adoption",
    "Forward deployed engineering",
    "Customer success",
    "Professional services",
    "Model Context Protocol",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteNav />

      {/* ---------------- HERO ---------------- */}
      <header className="hero profile-hero" id="top">
        <div className="container pf-hero-grid">
          <div>
            <span className="eyebrow">Matt Ryan · Chicago</span>
            <h1 className="display">
              Revenue is an engineering problem. I&apos;ve spent a career
              treating it like{" "}
              <span className="highlight">one</span>.
            </h1>
            <p className="lede hero-lede">
              I build the teams that get AI adopted inside complex
              enterprises: forward deployed engineering, professional
              services, and post-sales. I started as a software engineer and
              still think like one.
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
                <CompanyLogo name="Upwork" slug="upwork" />
                <CompanyLogo name="Slack" slug="slack" />
                <CompanyLogo name="Salesforce" slug="salesforce" />
                {/* TODO(Matt): no monochrome Alight logo asset exists yet.
                    Renders as text via CompanyLogo's fallback until one is
                    supplied in public/logos/. */}
                <CompanyLogo name="Alight" />
                <CompanyLogo name="IBM" slug="ibm" />
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
                I started as a software engineer. I still think like one: how
                software gets built, how it breaks, and what it takes to get
                it adopted inside a large enterprise.
              </p>
              <p>
                At IBM, I led multi-year ERP deployments in regulated
                industries across nearly 40 countries. Sales teams pulled me
                into deals because I could tell a CIO, honestly, what their
                investment would produce.{" "}
                <strong>I was the person who made the quota carrier
                credible.</strong>
              </p>
              <p>
                At Alight, under private equity ownership, I scaled a Workday
                practice from a $10M acquisition to a business approaching
                $200M. The board did not care about effort. It cared whether
                the business was getting more valuable, and I still run every
                decision through retention, margin, and the investor story.
              </p>
              <p>
                At Slack, I built a team of 65+ forward deployed technical
                architects through the IPO and the $27B Salesforce
                acquisition. Then came Upwork and G2, where everything
                converged: one operating model with AI running across the
                customer lifecycle.
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
                Early in my career, one misplaced semicolon cut a DELETE
                statement off before its WHERE clause. Instead of two rows, it
                wiped more than 400,000 production employment records. We
                recovered everything. Then my manager pulled me aside.
              </p>
              <p>
                Since then, I design organizations to engineer mistakes out,
                not just fix them.
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
                body: "Systems that hold under real load, with failure modes designed for in advance.",
              },
              {
                name: "Repeatability",
                body: "Delivery that works no matter who is in the room.",
              },
              {
                name: "Accountability",
                body: "Named owners, measured outcomes, and postmortems that change the design.",
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
                title: "Forward deployed engineering and services",
                body: "Technical teams that work beside customers and turn what recurs into product. Built at Slack and G2.",
              },
              {
                n: "02",
                title: "AI across the customer lifecycle",
                body: "Prediction, agents, and the data underneath them, running from onboarding to renewal.",
              },
              {
                n: "03",
                title: "Post-sales architecture",
                body: "Onboarding, retention, and expansion designed so revenue compounds.",
              },
              {
                n: "04",
                title: "Technical pre-sales",
                body: "Honest answers to what an investment will produce, so delivery never inherits a promise it cannot keep.",
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
                  A predictive system for go-to-market: the Pulse Score, a
                  30-day activation model, and 14 live agentic workflows.
                  Documented end to end.
                </p>
                <div className="work-feature-stats">
                  <span><strong>46%</strong> renewal lift</span>
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
                body: "I arrived to no implementation function and retention near 50%. I built the services business, pricing, and a delivery model across three regions.",
              },
              {
                tag: "Slack / Salesforce · 2020 to 2022",
                title: "Forward deployed engineering, $100K to $11M",
                body: "Grew a pilot into an $11M annual business and a team of 65+ forward deployed architects on three continents. At Rivian, every vehicle on the production line had its own Slack channel wired to real-time alerts.",
              },
              {
                tag: "Alight / Strada · 2012 to 2020",
                title: "Workday practice, $10M to ~$200M",
                body: "Built the delivery framework and go-to-market from a 60-person acquisition. Clients included UPS, Goldman Sachs, and Home Depot.",
              },
              {
                tag: "G2 · 2025",
                title: "Repositioning G2 for the agent economy",
                body: "Co-launched G2's commercial MCP strategy, opening G2's data to AI agents as buyers.",
                link: { href: "https://ai.g2.com", label: "ai.g2.com" },
              },
            ].map(({ tag, title, body, link }) => (
              <Reveal key={title} className="work-card" delay={100}>
                <span className="work-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{body}</p>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 05 THINGS I BUILD MYSELF ---------------- */}
      <section className="section pf-section" id="build">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">05</span>
            <span className="sec-label">Things I build myself</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display pf-sec-title">
              Things I build myself.
            </h2>
            <p className="lede" style={{ marginTop: 0, marginBottom: 40 }}>
              I lead teams that build with AI, and I build with it myself.
            </p>
          </Reveal>

          <div className="work-grid is-single">
            {[
              {
                tag: "Personal project",
                title: "Infiniti",
                body: "An app that preserves a person's stories, voice, and values so the people they love can keep hearing from them. I'm building it for my son. React, deployed on Vercel.",
              },
            ].map(({ tag, title, body }) => (
              <Reveal key={title} className="work-card" delay={100}>
                <span className="work-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          {/* TODO(Matt): supply a demo or GitHub URL for Infiniti, and name
              one or two more agents or tools you built yourself if you want
              a second card here. */}
        </div>
      </section>

      {/* ---------------- 06 CAREER ---------------- */}
      <section className="section pf-section" id="career">
        <div className="container">
          <Reveal className="sec-head">
            <span className="sec-num">06</span>
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
                  logoSlug: "g2",
                  logoName: "G2",
                },
                {
                  when: "2022 to 2024",
                  who: "Upwork · VP, Enterprise Solutions",
                  what: "Built the enterprise solutions and post-sales model and contributed to 37% enterprise growth.",
                  logoSlug: "upwork",
                  logoName: "Upwork",
                },
                {
                  when: "2020 to 2022",
                  who: "Slack (Salesforce) · Professional Services Leader",
                  what: "Built customer delivery, customer experience, and a team of 65+ forward deployed technical architects. Through the IPO and the $27B Salesforce acquisition. Named Slack Leader of the Year, 2022.",
                  logoSlug: "slack",
                  logoName: "Slack",
                },
                {
                  when: "2012 to 2020",
                  who: "Alight / Strada · VP, Professional Services",
                  what: "Scaled a Workday HCM practice from a $10M acquisition with 60 consultants toward a business approaching $200M, through an Aon spin-off and Blackstone acquisition.",
                  logoName: "Alight",
                },
                {
                  when: "2007 to 2012",
                  who: "IBM · Managing Consultant, Global Business Services",
                  what: "Multi-year ERP and service model deployments for financial services, utilities, and heavily regulated industries. Lived in India over a year, built delivery teams in Poland and the Philippines, worked in nearly 40 countries.",
                  logoSlug: "ibm",
                  logoName: "IBM",
                },
                {
                  when: "2000 to 2007",
                  who: "Baxter International · Software Engineer to Technology Project Manager",
                  what: "Built enterprise HR and finance tools in Java and PeopleSoft. Technical lead on a PeopleSoft rollout across 55 countries.",
                  logoName: "Baxter",
                },
              ].map(({ when, who, what, logoSlug, logoName }) => (
                <div key={when} className="tl-row">
                  <div className="tl-visual is-logo">
                    <CompanyLogo name={logoName} slug={logoSlug} />
                  </div>
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
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
