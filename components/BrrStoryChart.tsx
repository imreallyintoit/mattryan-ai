"use client";

import { useEffect, useRef, useState } from "react";
import { eras, layerMix, brrCurve, type LayerMix } from "@/data/brrStory";

// Plot geometry. v (BRR%) maps 40 to 85 onto the plot's vertical range so
// the 49% start and 80% goal both sit comfortably inside the frame instead
// of hugging an edge.
const VB_W = 920;
const VB_H = 340;
const PLOT_TOP = 36;
const PLOT_BOTTOM = 296;
const V_MIN = 40;
const V_MAX = 85;

function xFor(x: number) {
  return x * VB_W;
}
function yFor(v: number) {
  return PLOT_TOP + ((PLOT_BOTTOM - PLOT_TOP) * (V_MAX - v)) / (V_MAX - V_MIN);
}

// Uniform Catmull-Rom to cubic Bezier conversion, so the curve passes
// smoothly through every point in data/brrStory.ts without hand-tuned
// control points.
function smoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  const d = [`M ${points[0].x} ${points[0].y}`];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d.push(`C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`);
  }
  return d.join(" ");
}

// "Era 1: mostly human, some digital, no agents." Sorted by weight so the
// lead layer is named first and the description matches what the mix bar
// shows, not a fixed field order.
function describeMix(mix: LayerMix) {
  const labels = {
    humans: { mostly: "mostly human", some: "some human attention", no: "no human attention" },
    agents: { mostly: "mostly agents", some: "some agents", no: "no agents" },
    digital: { mostly: "mostly digital", some: "some digital", no: "no digital" },
  } as const;
  const parts = (["humans", "agents", "digital"] as const)
    .map((key) => ({ key, value: mix[key] }))
    .sort((a, b) => b.value - a.value);
  return parts
    .map((p, i) => (i === 0 ? labels[p.key].mostly : p.value === 0 ? labels[p.key].no : labels[p.key].some))
    .join(", ");
}

export default function BrrStoryChart() {
  const points = brrCurve.map((p) => ({ x: xFor(p.x), y: yFor(p.v) }));
  const pathD = smoothPath(points);
  const goalY = yFor(80);
  const start = points[0];
  const end = points[points.length - 1];

  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="brr-chart" ref={wrapRef}>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="brr-svg"
        role="img"
        aria-label="Illustrative growth curve of booked renewal rate rising from 49 percent in March 2024 to 80 percent in October 2026 across six eras."
      >
        {eras.map((era, i) => (
          <rect
            key={era.n}
            x={(i / 6) * VB_W}
            y={0}
            width={VB_W / 6}
            height={VB_H}
            fill={i % 2 === 0 ? "var(--obsidian)" : "transparent"}
          />
        ))}

        <line
          x1={0}
          y1={goalY}
          x2={VB_W}
          y2={goalY}
          stroke="var(--ink-faint)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x={6} y={goalY - 8} textAnchor="start" fill="var(--ink-faint)" fontSize="12" fontFamily="var(--font-mono)">
          Goal: 80% BRR
        </text>

        <path
          d={pathD}
          fill="none"
          stroke="var(--signal)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className={`brr-curve${visible ? " is-visible" : ""}`}
        />

        <circle cx={start.x} cy={start.y} r="5" fill="var(--signal)" />
        <text x={start.x} y={start.y + 26} textAnchor="start" fill="var(--ink)" fontSize="15" fontWeight="600" fontFamily="var(--font-display)">
          49%
        </text>
        <text x={start.x} y={start.y + 42} textAnchor="start" fill="var(--ink-faint)" fontSize="11" fontFamily="var(--font-mono)">
          March 2024
        </text>

        <circle cx={end.x} cy={end.y} r="5" fill="var(--signal)" />
        <text x={end.x} y={end.y - 30} textAnchor="end" fill="var(--ink)" fontSize="15" fontWeight="600" fontFamily="var(--font-display)">
          80%
        </text>
        <text x={end.x} y={end.y - 14} textAnchor="end" fill="var(--ink-faint)" fontSize="11" fontFamily="var(--font-mono)">
          October 2026
        </text>
      </svg>

      <p className="brr-trajectory-note">Illustrative trajectory.</p>

      <div className="brr-legend">
        <span className="brr-legend-label">Where the work happened:</span>
        <span className="brr-legend-item"><span className="brr-swatch is-humans" aria-hidden="true" />Humans</span>
        <span className="brr-legend-item"><span className="brr-swatch is-agents" aria-hidden="true" />Agents</span>
        <span className="brr-legend-item"><span className="brr-swatch is-digital" aria-hidden="true" />Digital</span>
      </div>

      <div className="brr-eras">
        {eras.map((era) => {
          const mix = layerMix.find((m) => m.era === era.n)!;
          return (
            <div className="brr-era" key={era.n}>
              <div className="brr-era-head">
                <span className="brr-era-num">{String(era.n).padStart(2, "0")}</span>
                <span className="brr-era-dates">{era.dates}</span>
              </div>
              <h4 className="brr-era-title">{era.title}</h4>
              <div className="brr-era-stat">
                <span className="brr-era-stat-val">{era.stat}</span>
                <span className="brr-era-stat-cap">{era.statCaption}</span>
              </div>
              <div className="brr-mix-bar" role="img" aria-label={`Era ${era.n}: ${describeMix(mix)}.`}>
                <span className="brr-mix-seg is-humans" style={{ width: `${mix.humans}%` }} />
                <span className="brr-mix-seg is-agents" style={{ width: `${mix.agents}%` }} />
                <span className="brr-mix-seg is-digital" style={{ width: `${mix.digital}%` }} />
              </div>
              <dl className="brr-era-layers">
                <dt>Humans</dt>
                <dd>{era.humans}</dd>
                <dt>Agents and signals</dt>
                <dd>{era.agents}</dd>
                <dt>Digital</dt>
                <dd>{era.digital}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}
