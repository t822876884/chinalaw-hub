import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SITE_URL } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    title: SITE.name,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  other: { google: "notranslate" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className="bg-slate-50 min-h-screen flex flex-col antialiased">
        {/* Sticky Glassmorphism Header */}
        <header className="sticky top-0 z-50 glass-nav border-b border-line">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-900 to-brand-700 text-white shadow-md shadow-brand-900/10 transition-transform group-hover:scale-105">
                {/* Justice Scales / Shield Emblem SVG */}
                <svg className="h-5 w-5 text-accent-ring" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                  {SITE.name}
                </span>
                <span className="text-[11px] font-medium tracking-wide text-muted uppercase">
                  Verified PRC Counsel
                </span>
              </div>
            </Link>

            <nav className="flex items-center gap-1 sm:gap-2 text-[13px] font-medium text-ink-secondary">
              <Link
                href="/lawyers"
                className="rounded-lg px-3 py-1.5 transition-colors hover:bg-slate-100 hover:text-ink"
              >
                Lawyers
              </Link>
              <Link
                href="/practice"
                className="rounded-lg px-3 py-1.5 transition-colors hover:bg-slate-100 hover:text-ink hidden sm:inline-block"
              >
                Practice Areas
              </Link>
              <Link
                href="/city"
                className="rounded-lg px-3 py-1.5 transition-colors hover:bg-slate-100 hover:text-ink hidden sm:inline-block"
              >
                Cities
              </Link>
              <Link
                href="/verify"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-accent-light hover:text-accent-dark text-accent font-semibold"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Verify Lawyer
              </Link>
              <Link
                href="/lawyers"
                className="ml-2 hidden rounded-lg bg-ink px-4 py-2 text-[13px] font-medium text-white shadow-sm hover:bg-brand-800 transition-all sm:inline-flex items-center gap-1.5"
              >
                <span>Browse Directory</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </nav>
          </div>
        </header>

        {/* Ambient Top Glow Wrapper */}
        <div className="bg-ambient-glow flex-1">
          <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">{children}</main>
        </div>

        {/* Modern Multi-Column Footer */}
        <footer className="mt-auto border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Brand & Mission */}
              <div className="space-y-3 lg:col-span-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-900 text-white">
                    <svg className="h-4 w-4 text-accent-ring" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-bold text-ink">{SITE.name}</span>
                </div>
                <p className="max-w-md text-[13px] leading-relaxed text-muted">
                  {SITE.name} is a free, independent information directory of licensed PRC lawyers serving international clients. All listed lawyers are verified against Ministry of Justice records.
                </p>
                <div className="flex items-center gap-2 text-[12px] text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>100% MOJ Certificate Verified Index</span>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-3">
                <div className="text-[13px] font-semibold text-ink uppercase tracking-wider">Navigation</div>
                <ul className="space-y-2 text-[13px] text-muted">
                  <li>
                    <Link href="/lawyers" className="hover:text-accent transition-colors">Directory of Lawyers</Link>
                  </li>
                  <li>
                    <Link href="/practice" className="hover:text-accent transition-colors">Practice Areas</Link>
                  </li>
                  <li>
                    <Link href="/city" className="hover:text-accent transition-colors">Cities & Tiers</Link>
                  </li>
                  <li>
                    <Link href="/verify" className="hover:text-accent transition-colors">How We Verify Lawyers</Link>
                  </li>
                </ul>
              </div>

              {/* Official Registry & Contact */}
              <div className="space-y-3">
                <div className="text-[13px] font-semibold text-ink uppercase tracking-wider">Official Checks</div>
                <ul className="space-y-2 text-[13px] text-muted">
                  <li>
                    <a href="https://app.gjzwfw.gov.cn/jmopen/webapp/html5/lscx/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                      <span>Ministry of Justice</span>
                      <svg className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://credit.acla.org.cn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                      <span>ACLA Credit Platform</span>
                      <svg className="h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                  <li className="pt-2">
                    <span className="block text-[12px] text-muted">Enquiries:</span>
                    <a href="mailto:hello@example.com" className="font-medium text-ink hover:text-accent transition-colors">
                      hello@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-10 border-t border-line pt-6 text-[12px] leading-relaxed text-muted space-y-2">
              <p>
                <strong className="text-ink-secondary">Disclaimer:</strong> {SITE.name} is not a law firm and does not provide legal advice or act as an escrow agent. Any engagement is strictly between you and the instructed law firm. Always independently confirm practising certificates before retaining legal counsel.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-ink-light text-[11px]">
                <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
                <div className="flex gap-4">
                  <Link href="/verify" className="hover:underline">Verification Guide</Link>
                  <span>·</span>
                  <a href="mailto:hello@example.com" className="hover:underline">Report a Listing</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

