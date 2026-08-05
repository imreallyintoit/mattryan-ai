// Data mapped from G2 fiscal quarters to calendar quarters
// NRR = Net Revenue Retention (top line); GRR = Gross Revenue Retention (bottom line)
const NRR = [
  { x: 50,  y: 60,  q: "Q1 '24", val: "87.7%" },
  { x: 116, y: 54,  q: "Q2 '24", val: "88.7%" },
  { x: 182, y: 58,  q: "Q3 '24", val: "88.0%" },
  { x: 248, y: 65,  q: "Q4 '24", val: "87.0%" },
  { x: 314, y: 54,  q: "Q1 '25", val: "88.6%" },
  { x: 380, y: 51,  q: "Q2 '25", val: "89.1%" },
  { x: 446, y: 37,  q: "Q3 '25", val: "91.3%" },
  { x: 512, y: 35,  q: "Q4 '25", val: "91.6%" },
  { x: 578, y: 32,  q: "Q1 '26", val: "92.1%" },
];

const GRR = [
  { x: 50,  y: 141, q: "Q1 '24", val: "75.0%" },
  { x: 116, y: 135, q: "Q2 '24", val: "75.9%" },
  { x: 182, y: 130, q: "Q3 '24", val: "76.7%" },
  { x: 248, y: 127, q: "Q4 '24", val: "77.2%" },
  { x: 314, y: 130, q: "Q1 '25", val: "76.7%" },
  { x: 380, y: 128, q: "Q2 '25", val: "77.1%" },
  { x: 446, y: 123, q: "Q3 '25", val: "77.8%" },
  { x: 512, y: 112, q: "Q4 '25", val: "79.5%" },
  { x: 578, y: 111, q: "Q1 '26", val: "79.7%" },
];

const gridLines = [
  { y: 147, label: "74%" },
  { y: 109, label: "80%" },
  { y: 71,  label: "86%" },
  { y: 33,  label: "92%" },
];

const nrrPath = NRR.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const nrrFill = `${nrrPath} L 578 160 L 50 160 Z`;
const grrPath = GRR.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

export default function RenewalChart() {
  return (
    <div className="renewal-chart">
      <div className="renewal-chart-header">
        <div className="renewal-chart-title-group">
          <span className="renewal-chart-label">GRR &amp; NRR · two-year trend</span>
          <div className="renewal-chart-legend">
            <span className="rc-legend-item">
              <svg width="16" height="3" aria-hidden="true"><line x1="0" y1="1.5" x2="16" y2="1.5" stroke="var(--signal)" strokeWidth="2"/></svg>
              NRR
            </span>
            <span className="rc-legend-item rc-legend-grr">
              <svg width="16" height="3" aria-hidden="true"><line x1="0" y1="1.5" x2="16" y2="1.5" stroke="var(--ink-dim)" strokeWidth="2" strokeOpacity="0.6"/></svg>
              GRR
            </span>
          </div>
        </div>
        <div className="renewal-chart-deltas">
          <span className="renewal-chart-delta">NRR +3.7%</span>
          <span className="renewal-chart-delta is-dim">GRR +4.2%</span>
        </div>
      </div>
      <svg viewBox="0 0 630 190" xmlns="http://www.w3.org/2000/svg" className="renewal-svg" aria-hidden="true">
        {gridLines.map((g) => (
          <g key={g.label}>
            <line x1="50" y1={g.y} x2="590" y2={g.y} stroke="var(--hairline)" strokeWidth="1" />
            <text x="44" y={g.y + 4} textAnchor="end" fill="var(--ink-faint)" fontSize="10" fontFamily="var(--font-mono)">{g.label}</text>
          </g>
        ))}

        <path d={nrrFill} fill="var(--signal)" fillOpacity="0.06" />

        <rect x="50" y="20" width="66" height="140" fill="var(--alert)" fillOpacity="0.03" />

        {/* GRR line */}
        <path d={grrPath} fill="none" stroke="var(--ink-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" />
        {GRR.map((p) => (
          <circle key={`g-${p.q}`} cx={p.x} cy={p.y} r="3" fill="var(--ink-dim)" fillOpacity="0.6" />
        ))}

        {/* NRR line */}
        <path d={nrrPath} fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {NRR.map((p) => (
          <circle key={`n-${p.q}`} cx={p.x} cy={p.y} r="4" fill="var(--signal)" />
        ))}

        {NRR.map((p) => (
          <text key={p.q} x={p.x} y="180" textAnchor="middle" fill="var(--ink-faint)" fontSize="10" fontFamily="var(--font-mono)">{p.q}</text>
        ))}

        <line x1="116" y1="24" x2="116" y2="160" stroke="var(--alert)" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.6" />
        <text x="122" y="36" fill="var(--alert)" fontSize="10" fontFamily="var(--font-mono)" fillOpacity="0.9">System live</text>

        <text x="578" y="26" textAnchor="end" fill="var(--signal)" fontSize="12" fontFamily="var(--font-mono)" fontWeight="600">92.1%</text>
        <text x="578" y="107" textAnchor="end" fill="var(--ink-dim)" fontSize="10" fontFamily="var(--font-mono)" fillOpacity="0.7">79.7%</text>
      </svg>
    </div>
  );
}
