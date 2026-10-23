// Source data for the "From 49% to 80%" story on /system (components/BrrStoryChart.tsx).
// Keep all copy here so the story can be edited without touching the chart.

export type Era = {
  n: number;
  title: string;
  dates: string;
  stat: string;
  statCaption: string;
  humans: string;
  agents: string;
  digital: string;
};

export const eras: Era[] = [
  {
    n: 1,
    title: "See the churn",
    dates: "Mar 2024 to Jan 2025",
    stat: "#1",
    statCaption: "Churn named a top company initiative",
    humans:
      "Churn becomes a top company initiative to stop seller churn. Monthly deep dives on churn drivers, segments and lost logos. Nearly all retention work is human and reactive.",
    agents:
      "None yet. Adoption Score is the only health signal, and churn is reported after it happens.",
    digital:
      "Onboarding emails and G2 University courses, sent the same way to every customer.",
  },
  {
    n: 2,
    title: "Fix root causes",
    dates: "Feb to Sep 2025",
    stat: "+20 to 25 pts",
    statCaption: "Retention lift where ROI integrations are live",
    humans:
      "Churn work moves upstream to reviews and ROI programs. Simplified packaging reduces downgrade confusion.",
    agents:
      "Salesforce and HubSpot ROI integrations make value provable. ROI activation linked to 20 to 25 points higher retention. 80% of churn traced to low adoption accounts.",
    digital:
      "Scaled self-service review generation helps lift review recency to 51.7%.",
  },
  {
    n: 3,
    title: "Design the system",
    dates: "Oct 2025 to Jan 2026",
    stat: "4 stages",
    statCaption: "Land, Adopt, Expand, Renew, each with an owner",
    humans:
      "The Customer Lifecycle Performance System gives every stage an owner and a control metric. Cross-functional lifecycle workshop. Arresting churn becomes a company OKR with an 80%+ BRR goal.",
    agents:
      "Pulse Score designed to replace the 2020 Adoption Score, as the signal that will decide which layer acts.",
    digital:
      "A cohort \"dartboard\" assigns every segment a layer: human-led for high-value accounts, digital-first for the middle, AI-led and automated for the long tail.",
  },
  {
    n: 4,
    title: "Activate",
    dates: "Feb to Apr 2026",
    stat: "~80%",
    statCaption: "Of churn flagged early by the Pulse Score, vs 60%",
    humans:
      "A named onboarding partner replaces group onboarding. An integration swarm activates 120+ integrations in two weeks. CSMs own business reviews.",
    agents:
      "Pulse Score live in Salesforce, catching about 80% of churn vs 60% before. Pipeline agent and at-risk multithreading tool built on Salesforce, G2 and ZoomInfo data.",
    digital:
      "Review campaigns rebuilt in my.G2 and an AI support front door for self-serve help.",
  },
  {
    n: 5,
    title: "Predict and push",
    dates: "May to Jul 2026",
    stat: "1 quarter",
    statCaption: "Earlier warning: risk alerts land before renewal season",
    humans:
      "Focus shifts to post-30 and post-90 day risk. A weekly human-led Pulse review scales to every leader. Net-dollar discipline on save concessions.",
    agents:
      "Churn-risk alerts land in account Slack channels a quarter before renewal. A multi-source churn risk agent builds a renewal risk brief in about a minute.",
    digital:
      "Marketing co-owns retention with lifecycle nurtures, dormant-customer re-engagement, and signal-based expansion campaigns.",
  },
  {
    n: 6,
    title: "Close the loop",
    dates: "Aug to Oct 2026",
    stat: "+31 pts",
    statCaption: "BRR gained since March 2024",
    humans:
      "Services offered as investment instead of discounts. Review and services incentives for CSMs. Voice of customer rebuilt around churn interviews.",
    agents:
      "Pulse V2 adds new engagement signals. A playbook pilot links each signal to the next best action, whichever layer takes it.",
    digital:
      "Surveys after every self-serve support interaction feed the voice of customer loop.",
  },
];

// Illustrative weights only, not measured data: they show the shift from
// mostly human (era 1) toward a balanced mix (era 6), which is the point of
// the story, not a precise historical breakdown.
export type LayerMix = { era: number; humans: number; agents: number; digital: number };

export const layerMix: LayerMix[] = [
  { era: 1, humans: 80, agents: 0, digital: 20 },
  { era: 2, humans: 65, agents: 10, digital: 25 },
  { era: 3, humans: 55, agents: 15, digital: 30 },
  { era: 4, humans: 45, agents: 25, digital: 30 },
  { era: 5, humans: 35, agents: 35, digital: 30 },
  { era: 6, humans: 30, agents: 35, digital: 35 },
];

// Normalized curve points (x: 0 to 1 across the chart, v: BRR%). An
// illustrative story curve, not plotted monthly data; see the "Illustrative
// trajectory" note rendered under the chart.
export type CurvePoint = { x: number; v: number };

export const brrCurve: CurvePoint[] = [
  { x: 0.0, v: 49 },
  { x: 0.07, v: 51.5 },
  { x: 0.14, v: 50.5 },
  { x: 0.24, v: 55 },
  { x: 0.31, v: 58.5 },
  { x: 0.39, v: 57.8 },
  { x: 0.47, v: 62.5 },
  { x: 0.56, v: 65.5 },
  { x: 0.62, v: 64.8 },
  { x: 0.71, v: 69.5 },
  { x: 0.8, v: 72.5 },
  { x: 0.87, v: 72 },
  { x: 0.95, v: 77 },
  { x: 1.0, v: 80 },
];
