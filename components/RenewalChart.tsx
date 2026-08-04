const points = [
  { x: 50,  y: 136, q: "Q1 '24", val: "62%" },
  { x: 156, y: 118, q: "Q2 '24", val: "67%" },
  { x: 262, y: 94,  q: "Q3 '24", val: "74%" },
  { x: 368, y: 66,  q: "Q4 '24", val: "82%" },
  { x: 474, y: 45,  q: "Q1 '25", val: "88%" },
  { x: 580, y: 34,  q: "Q2 '25", val: "91%" },
];

const gridLines = [
  { y: 143, label: "60%" },
  { y: 108, label: "70%" },
  { y: 73,  label: "80%" },
  { y: 38,  label: "90%" },
];

const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const fillPath = `${linePath} L 580 160 L 50 160 Z`;

export default function RenewalChart() {
  return (
    <div className="renewal-chart">
      <div className="renewal-chart-header">
        <span className="renewal-chart-label">Renewal rate · quarterly</span>
        <span className="renewal-chart-delta">+46% lift</span>
      </div>
      <svg viewBox="0 0 630 190" xmlns="http://www.w3.org/2000/svg" className="renewal-svg" aria-hidden="true">
        {gridLines.map((g) => (
          <g key={g.label}>
            <line x1="50" y1={g.y} x2="590" y2={g.y} stroke="var(--hairline)" strokeWidth="1" />
            <text x="44" y={g.y + 4} textAnchor="end" fill="var(--ink-faint)" fontSize="10" fontFamily="var(--font-mono)">{g.label}</text>
          </g>
        ))}

        <path d={fillPath} fill="var(--signal)" fillOpacity="0.07" />

        <rect x="50" y="20" width="106" height="140" fill="var(--alert)" fillOpacity="0.04" />

        <path d={linePath} fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {points.map((p) => (
          <circle key={p.q} cx={p.x} cy={p.y} r="4" fill="var(--signal)" />
        ))}

        {points.map((p) => (
          <text key={p.q} x={p.x} y="180" textAnchor="middle" fill="var(--ink-faint)" fontSize="10" fontFamily="var(--font-mono)">{p.q}</text>
        ))}

        <line x1="156" y1="24" x2="156" y2="160" stroke="var(--alert)" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.6" />
        <text x="162" y="36" fill="var(--alert)" fontSize="10" fontFamily="var(--font-mono)" fillOpacity="0.9">System live</text>

        <text x="578" y="26" textAnchor="end" fill="var(--signal)" fontSize="12" fontFamily="var(--font-mono)" fontWeight="600">91%</text>
        <text x="54" y="128" fill="var(--ink-faint)" fontSize="10" fontFamily="var(--font-mono)">62%</text>
      </svg>
    </div>
  );
}
