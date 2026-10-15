// Shared source of truth for /speaking and /speaking/one-sheet, so the two
// surfaces never drift on talk titles, dates, or figures.

export type Topic = {
  n: string;
  pillar: string;
  title: string;
  body: string;
  proof: string;
};

export const topics: Topic[] = [
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

export type RawEngagement = {
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
export const rawEngagements: RawEngagement[] = [
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
