"use client";

import { useState } from "react";

export type EngagementItem = {
  event: string;
  title: string;
  description: string;
  dates: string;
  startDate: string;
  city: string;
  era: "G2" | "Upwork" | "Slack" | "Workday era" | "PeopleSoft era";
  image?: string;
  isUpcoming: boolean;
};

export type YearGroup = { year: number; items: EngagementItem[] };

const ERAS = ["All", "G2", "Upwork", "Slack", "Workday era", "PeopleSoft era"] as const;
type Era = (typeof ERAS)[number];

// All date math (year grouping, the Upcoming flag, newest-first sort) is
// done once in app/speaking/page.tsx at build time and handed down as plain
// data. This component only owns the era filter's UI state, so there is no
// Date() call here to disagree with the server-rendered HTML during
// hydration.
export default function EngagementsTimeline({ groups }: { groups: YearGroup[] }) {
  const [era, setEra] = useState<Era>("All");

  return (
    <div className="engagements-timeline">
      <div className="era-filter" role="group" aria-label="Filter engagements by era">
        {ERAS.map((e) => (
          <button
            key={e}
            type="button"
            className={`era-chip${era === e ? " is-active" : ""}`}
            aria-pressed={era === e}
            onClick={() => setEra(e)}
          >
            {e}
          </button>
        ))}
      </div>

      {groups.map((group) => {
        const items = era === "All" ? group.items : group.items.filter((i) => i.era === era);
        if (items.length === 0) return null;
        return (
          <div key={group.year} className="engagement-year-row">
            <div className="engagement-year-marker">{group.year}</div>
            <div className="engagement-year-cards">
              {items.map((item) => (
                <div
                  key={item.event + item.title}
                  className={`engagement-card${item.image ? " has-photo" : ""}`}
                >
                  {item.image && (
                    <div className="engagement-photo mono-photo">
                      <img src={item.image} alt={`Matt Ryan speaking at ${item.event}`} />
                    </div>
                  )}
                  <div className="engagement-card-body">
                    <div className="engagement-card-top">
                      <span className="talk-event">{item.event}</span>
                      {item.isUpcoming && <span className="wf-badge is-stage">Upcoming</span>}
                    </div>
                    <h3>{item.title}</h3>
                    <div className="engagement-date-city">
                      {item.dates} &middot; {item.city}
                    </div>
                    <p className="engagement-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
