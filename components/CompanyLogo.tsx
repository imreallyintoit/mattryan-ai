// Company marks render monochrome white so a rail of mixed brands reads as one
// system on the dark page. Assets in public/logos/*-mono.png are pre-flattened
// to white rather than CSS-filtered, because filtering a badge logo like G2's
// (opaque white glyph inside a colored circle) flattens the glyph away.
//
// `height` is per-asset on purpose: a wordmark and a circular badge need
// different pixel heights to carry the same optical weight in a rail.
//
// To add a company: drop a transparent-background asset in public/logos/,
// flatten it to white, and add an entry here. Anything without an entry falls
// back to a mono wordmark, which is a deliberate treatment in this type
// system, not a missing-asset gap.
const assets: Record<string, { src: string; height: number }> = {
  g2: { src: "/logos/g2-mono.png", height: 26 },
  workday: { src: "/logos/workday-mono.png", height: 24 },
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
