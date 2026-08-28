"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// The wordmark already links home, so the Profile link is redundant on
// narrow screens and collapses away. The system link always stays reachable,
// switching to its short label so it never wraps.
const links = [
  { href: "/", label: "Profile", short: "Profile", collapses: true },
  { href: "/speaking", label: "Speaking", short: "Speaking", collapses: false },
  { href: "/system", label: "The AI GTM Operating System", short: "System", collapses: false },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="wordmark">
          <svg className="nav-mark" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <circle cx="17" cy="17" r="14" stroke="var(--signal)" strokeWidth="0.75" fill="none" strokeOpacity="0.18" strokeDasharray="4 3.5"/>
            <circle cx="17" cy="17" r="9.5" stroke="var(--signal)" strokeWidth="1" fill="none" strokeOpacity="0.45"/>
            <circle cx="17" cy="17" r="5" stroke="var(--signal)" strokeWidth="1.5" fill="none"/>
            <circle cx="17" cy="17" r="2.5" fill="var(--alert)" className="nav-center-dot"/>
            <circle cx="17" cy="3" r="2" fill="var(--signal)" className="nav-orbit-dot"/>
          </svg>
          mattryan<span className="dot-ai">.ai</span>
        </Link>
        <div className="nav-links">
          {links.map(({ href, label, short, collapses }) => (
            <Link
              key={href}
              href={href}
              className={[
                pathname === href ? "is-current" : "",
                collapses ? "nav-collapses" : "",
              ].filter(Boolean).join(" ") || undefined}
              aria-current={pathname === href ? "page" : undefined}
              aria-label={label}
            >
              <span className="nav-label-full">{label}</span>
              <span className="nav-label-short">{short}</span>
            </Link>
          ))}
          <a
            href="mailto:matthew773@gmail.com"
            className="nav-cta"
            aria-label="Email Matt Ryan"
          >
            <span className="nav-label-full">Let&apos;s talk →</span>
            <span className="nav-label-short">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
