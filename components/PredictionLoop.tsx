export default function PredictionLoop() {
  // Orbital "Prediction Loop": four stage nodes on a ring around a core.
  // A steady cyan pulse travels the loop; an amber alert fires early
  // toward the "renewal" marker — the thesis made visual.
  const cx = 230;
  const cy = 230;
  const r = 170;

  // four stage positions (top, right, bottom, left)
  const stages = [
    { x: cx, y: cy - r, label: "SIGNAL" },
    { x: cx + r, y: cy, label: "ORCHESTRATE" },
    { x: cx, y: cy + r, label: "ACT" },
    { x: cx - r, y: cy, label: "REFINE" },
  ];

  const loopPath = `M ${cx} ${cy - r}
    A ${r} ${r} 0 0 1 ${cx + r} ${cy}
    A ${r} ${r} 0 0 1 ${cx} ${cy + r}
    A ${r} ${r} 0 0 1 ${cx - r} ${cy}
    A ${r} ${r} 0 0 1 ${cx} ${cy - r} Z`;

  return (
    <svg viewBox="0 0 460 460" role="img" aria-label="The Prediction Loop: signal, orchestrate, act, refine — SOAR">
      {/* outer + inner rings */}
      <circle className="orbit-ring" cx={cx} cy={cy} r={r + 26} />
      <circle className="orbit-ring inner" cx={cx} cy={cy} r={r} />
      <circle className="orbit-ring inner" cx={cx} cy={cy} r={r - 52} />

      {/* spokes */}
      {stages.map((s, i) => (
        <line key={i} className="spoke" x1={cx} y1={cy} x2={s.x} y2={s.y} />
      ))}

      {/* the loop track */}
      <path d={loopPath} className="arc-signal" opacity={0.25} />

      {/* steady traveling pulse (cyan) */}
      <path d={loopPath} className="arc-signal pulse-path" />

      {/* alert vector firing early toward renewal marker */}
      <path
        d={`M ${cx} ${cy} L ${cx + r * 0.72} ${cy - r * 0.52}`}
        className="arc-alert pulse-path alert"
      />

      {/* renewal marker (where the alert points — a risk seen early) */}
      <g>
        <circle className="node-alert" cx={cx + r * 0.78} cy={cy - r * 0.56} r={7} />
        <text
          x={cx + r * 0.78}
          y={cy - r * 0.56 - 14}
          textAnchor="middle"
          className="core-label"
          style={{ fill: "var(--alert)" }}
        >
          RENEWAL −120d
        </text>
      </g>

      {/* stage nodes */}
      {stages.map((s, i) => (
        <g key={s.label}>
          <circle className="node-signal" cx={s.x} cy={s.y} r={6} />
          <text
            x={s.x}
            y={s.y + (s.y < cy ? -16 : 26)}
            textAnchor="middle"
            className="core-label"
          >
            {String(i + 1).padStart(2, "0")} {s.label}
          </text>
        </g>
      ))}

      {/* core */}
      <circle className="node-core" cx={cx} cy={cy} r={54} />
      <text x={cx} y={cy - 6} textAnchor="middle" className="core-title">
        GTM OS
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" className="core-label">
        PREDICTION
      </text>
      <text x={cx} y={cy + 26} textAnchor="middle" className="core-label">
        LOOP
      </text>
    </svg>
  );
}
