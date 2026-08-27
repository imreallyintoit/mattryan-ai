import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="wordmark">
          mattryan<span className="dot-ai">.ai</span>
        </Link>
        <span className="footer-meta">
          The AI GTM Operating System · The Prediction Loop
        </span>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/matthewwryan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/imreallyintoit" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
