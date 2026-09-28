import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const headshot = fs.readFileSync(path.join(process.cwd(), "public/headshot.png"));
  const headshotSrc = `data:image/png;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#05070a",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(56,189,248,0.14), transparent 70%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "700px" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#38bdf8", textTransform: "uppercase", marginBottom: 28 }}>
            Matt Ryan &middot; Chicago
          </div>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 600, color: "#eef2f7", lineHeight: 1.15, letterSpacing: -1 }}>
            Revenue is an engineering problem.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9aa7b6", marginTop: 32, lineHeight: 1.4 }}>
            Forward deployed engineering, professional services,
            and applied AI for enterprise adoption.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div
            style={{
              display: "flex",
              width: 340,
              height: 340,
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "#12171f",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={headshotSrc} width={340} height={340} style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
