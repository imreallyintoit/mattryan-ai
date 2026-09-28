import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            The AI GTM Operating System
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 600, color: "#eef2f7", lineHeight: 1.15, letterSpacing: -1 }}>
            Built on leading signals, not lagging metrics.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9aa7b6", marginTop: 32, lineHeight: 1.4 }}>
            The Prediction Loop, the Pulse Score, and 14 live
            agentic workflows.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div style={{ display: "flex", position: "relative", width: 320, height: 320, alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", position: "absolute", width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(56,189,248,0.2)" }} />
            <div style={{ display: "flex", position: "absolute", width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(56,189,248,0.4)" }} />
            <div style={{ display: "flex", position: "absolute", width: 120, height: 120, borderRadius: "50%", border: "1.5px solid #38bdf8" }} />
            <div style={{ display: "flex", position: "absolute", width: 16, height: 16, borderRadius: "50%", background: "#f5a524" }} />
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
