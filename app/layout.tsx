import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Ryan: The AI GTM Operating System",
  description:
    "Matt Ryan runs go-to-market as a predictive system: humans, agents, and digital experiences orchestrated around the customer journey. The AI GTM Operating System, powered by The Prediction Loop.",
  metadataBase: new URL("https://mattryan.ai"),
  openGraph: {
    title: "Matt Ryan: The AI GTM Operating System",
    description:
      "Go-to-market as a predictive system. Humans, agents, and digital experiences orchestrated around the customer journey.",
    url: "https://mattryan.ai",
    siteName: "mattryan.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Ryan: The AI GTM Operating System",
    description:
      "Go-to-market as a predictive system, orchestrated around the customer journey.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
