import Link from "next/link";
import LawyerCard from "@/components/LawyerCard";
import JsonLd from "@/components/JsonLd";
import { websiteSchema } from "@/lib/schema";
import { CITIES, LAWYERS, PRACTICES, SITE, lawyersByCity, lawyersByPractice } from "@/lib/data";

export default function HomePage() {
  const featured = LAWYERS.slice(0, 3);

  return (
    <div className="space-y-16">
      <JsonLd data={websiteSchema()} />
      {/* Hero Section */}
      <section className="relative pt-4 pb-2 text-center lg:text-left">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-7">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-[12px] font-semibold text-emerald-800 shadow-sm backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Official PRC Ministry of Justice Checked Registry</span>
            </div>

            <h1 className="text-[34px] font-extrabold tracking-tight text-ink sm:text-[44px] sm:leading-[1.15]">
              Find a <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy underline-offset-4">verified</span>, English-speaking lawyer in China
            </h1>

            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-[16px]">
              China has over 600,000 licensed lawyers, but only a small share work with foreign clients. <strong className="text-ink font-semibold">{SITE.name}</strong> connects you directly with PRC-qualified attorneys whose practising certificates are authenticated against the official Ministry of Justice register.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 lg:justify-start">
              <Link
                href="/lawyers"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-[14px] font-semibold text-white shadow-md shadow-ink/10 hover:bg-brand-800 transition-all active:scale-98"
              >
                <span>Browse All Lawyers</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-3.5 text-[14px] font-semibold text-ink-secondary shadow-soft hover:border-slate-400 hover:text-ink transition-all active:scale-98"
              >
                <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>How We Verify</span>
              </Link>
            </div>
          </div>

          {/* Hero Right: Quick Stats Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-line bg-white p-7 shadow-card">
              <div className="absolute -top-3 -right-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-3.5 py-1 text-[11px] font-bold text-white shadow-sm">
                FREE & DIRECT
              </div>
              <h3 className="text-[16px] font-bold text-ink">Why International Clients Rely On Us</h3>
              <p className="mt-1 text-[13px] text-muted">Direct communication with verified local counsel</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-ink">100% MOJ License Checked</div>
                    <div className="text-[12px] text-muted">Matched against the PRC national bar database</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-ink">Direct WhatsApp & WeChat</div>
                    <div className="text-[12px] text-muted">No intermediaries, message counsel directly</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-ink">Zero Referral Fees</div>
                    <div className="text-[12px] text-muted">We never take cuts or inflate your legal billing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Value Proposition Feature Cards */}
      <section className="grid gap-5 sm:grid-cols-3">
        {[
          {
            icon: (
              <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            t: "Certificate Checked",
            d: "Every lawyer profile is matched against the Ministry of Justice register and the national lawyer credit platform before publication.",
          },
          {
            icon: (
              <svg className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            ),
            t: "Zero Middleman",
            d: "You contact the lawyer directly. We never take a cut of legal fees and never handle client money or engagement escrow.",
          },
          {
            icon: (
              <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            t: "WhatsApp & WeChat First",
            d: "Listed lawyers are experienced with cross-border clients and typically respond within one business day in English.",
          },
        ].map((f) => (
          <div
            key={f.t}
            className="rounded-2xl border border-line bg-white p-6 shadow-soft card-hover-effect"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-line">
              {f.icon}
            </div>
            <h3 className="mt-4 text-[15px] font-bold text-ink">{f.t}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              {f.d}
            </p>
          </div>
        ))}
      </section>

      {/* Browse by Practice Area */}
      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-[22px] font-bold text-ink">Browse by Practice Area</h2>
            <p className="text-[13px] text-muted">Specialized cross-border legal expertise</p>
          </div>
          <Link
            href="/practice"
            className="text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>All practice areas</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => {
            const count = lawyersByPractice(p.slug).length;
            return (
              <Link
                key={p.slug}
                href={`/practice/${p.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 shadow-soft card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[15px] font-bold text-ink group-hover:text-accent transition-colors">
                      {p.name}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                      {count} {count === 1 ? "Lawyer" : "Lawyers"}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-accent group-hover:translate-x-0.5 transition-transform">
                  <span>Explore counsel</span>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Browse by City */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-[22px] font-bold text-ink">Browse by City</h2>
            <p className="text-[13px] text-muted">PRC legal representation across major commercial hubs</p>
          </div>
          <Link
            href="/city"
            className="text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>All cities</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c) => {
            const count = lawyersByCity(c.slug).length;
            return (
              <Link
                key={c.slug}
                href={`/city/${c.slug}`}
                className="group flex items-center justify-between rounded-xl border border-line bg-white p-4 shadow-soft card-hover-effect"
              >
                <div>
                  <div className="text-[14px] font-bold text-ink group-hover:text-accent transition-colors">
                    {c.name}
                  </div>
                  <div className="text-[12px] text-muted">
                    {c.tier} · {count} {count === 1 ? "lawyer" : "lawyers"}
                  </div>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-accent-light group-hover:text-accent-dark transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Lawyers Section */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-[22px] font-bold text-ink">Featured PRC Counsel</h2>
            <p className="text-[13px] text-muted">English-speaking partners with cross-border experience</p>
          </div>
          <Link
            href="/lawyers"
            className="text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>See all {LAWYERS.length} lawyers</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="space-y-4">
          {featured.map((l) => (
            <LawyerCard key={l.slug} lawyer={l} />
          ))}
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/lawyers"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-6 py-3 text-[14px] font-semibold text-ink shadow-soft hover:border-slate-400 transition-all"
          >
            <span>Explore Complete Directory ({LAWYERS.length} Lawyers)</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

