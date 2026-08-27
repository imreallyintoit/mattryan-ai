// Company marks render monochrome white so a rail of mixed brands reads as one
// system on the dark page. Every asset here is sourced from the company's own
// site (nav mark, design-language page, or press asset) and flattened to
// solid white, never CSS-filtered: a straight invert() filter destroys a
// badge logo like G2's, where an opaque white glyph sits inside a colored
// circle, or Salesforce's cloud, whose wordmark is knocked out in white
// against the blue fill rather than drawn in a separate dark ink.
//
// `height` is per-asset on purpose: a wordmark and an icon-only mark need
// different pixel heights to carry the same optical weight in a rail.
//
// To add a company: drop a flattened-to-white asset in public/logos/ and add
// an entry here. Anything without an entry falls back to a mono wordmark,
// which is a deliberate treatment in this type system, not a missing-asset
// gap.
const assets: Record<string, { src: string; height: number }> = {
  g2: { src: "/logos/g2-mono.png", height: 26 },
  workday: { src: "/logos/workday-mono.png", height: 24 },
  upwork: { src: "/logos/upwork-mono.svg", height: 22 },
  slack: { src: "/logos/slack-mono.svg", height: 26 },
  salesforce: { src: "/logos/salesforce-mono.png", height: 30 },
  ibm: { src: "/logos/ibm-mono.svg", height: 20 },
};

export default function CompanyLogo({
  name,
  slug,
}: {
  name: string;
  slug?: string;
}) {
  const asset = slug ? assets[slug] : undefined;

  if (asset) {
    return (
      <span className="co-logo">
        <img src={asset.src} alt={name} height={asset.height} />
      </span>
    );
  }

  return (
    <span className="co-logo">
      <span className="co-logo-text">{name}</span>
    </span>
  );
}
