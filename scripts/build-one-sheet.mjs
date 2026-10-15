import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";
import { execSync } from "node:child_process";

// Renders app/speaking/one-sheet/page.tsx to the speaker one-sheet PDF. Run
// against a production server (npm run build && npm run start), not next
// dev, so fonts and images match what ships. See CLAUDE.md for when to
// regenerate.
const BASE = process.env.ONE_SHEET_BASE_URL ?? "http://localhost:3000";
const OUT = "public/matt-ryan-speaker-one-sheet.pdf";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ media: "print" });
await page.goto(`${BASE}/speaking/one-sheet`, { waitUntil: "networkidle" });

// Wait for fonts and images so nothing renders with a fallback face.
await page.evaluate(async () => {
  await document.fonts.ready;
  await Promise.all(
    Array.from(document.images).map((img) =>
      img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; })
    )
  );
});

// Playwright's page.pdf() doesn't carry <a href> tags into clickable PDF
// link annotations. The underlying CDP command does, behind
// generateTaggedPDF, so we call it directly rather than through page.pdf().
const client = await page.context().newCDPSession(page);
const { data } = await client.send("Page.printToPDF", {
  printBackground: true,
  preferCSSPageSize: true,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  generateTaggedPDF: true,
});
await writeFile(OUT, Buffer.from(data, "base64"));
await browser.close();

// PDF metadata (title/author/subject) is deliberately not set here.
// pdf-lib's PDFDocument.load/save round trip drops this PDF's link
// annotations entirely, even on a no-op save, which breaks the required
// mailto/site/LinkedIn links for a cosmetic metadata gain, so it's skipped.
// If a lossless metadata tool (exiftool, qpdf) becomes available, use that
// instead of pdf-lib here.

// Best-effort page-count sanity check; skips quietly if pdfinfo isn't on PATH.
try {
  const info = execSync(`pdfinfo "${OUT}"`, { encoding: "utf8" });
  const pages = Number(info.match(/^Pages:\s+(\d+)/m)?.[1]);
  if (pages !== 1) {
    throw new Error(`One-sheet has ${pages} pages. It must be exactly 1.`);
  }
} catch (e) {
  if (String(e).includes("pages")) throw e;
  console.warn("pdfinfo not found; skipped the page-count check.");
}

console.log(`Wrote ${OUT}`);
