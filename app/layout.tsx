import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matt Ryan",
  description:
    "Matt Ryan builds and re-architects post-sales organizations around adoption, outcomes, and AI. VP, Global Solutions and Customer Success at G2, and the architect of the AI GTM Operating System.",
  metadataBase: new URL("https://mattryan.ai"),
  openGraph: {
    title: "Matt Ryan",
    description:
      "Revenue is an engineering problem. Twenty years of building post-sales systems around adoption, outcomes, and AI.",
    url: "https://mattryan.ai",
    siteName: "mattryan.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Ryan",
    description:
      "Revenue is an engineering problem. Twenty years of building post-sales systems around adoption, outcomes, and AI.",
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
