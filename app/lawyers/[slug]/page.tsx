import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactButtons from "@/components/ContactButtons";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, lawyerSchema } from "@/lib/schema";
import { LAWYERS, SITE, cityName, practiceName } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return LAWYERS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = LAWYERS.find((l) => l.slug === slug);
  if (!lawyer) return { title: "Lawyer not found" };
  return {
    title: `${lawyer.name} — ${practiceName(lawyer.practices[0])} lawyer in ${cityName(lawyer.city)}`,
    description: lawyer.bio,
  };
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default async function LawyerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const lawyer = LAWYERS.find((l) => l.slug === slug);
  if (!lawyer) notFound();

  const initials = getInitials(lawyer.name);
  const yearsExp = new Date().getFullYear() - lawyer.yearStarted;

  return (
    <div className="space-y-8">
      <JsonLd data={lawyerSchema(lawyer)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Lawyers", path: "/lawyers" },
          { name: lawyer.name, path: `/lawyers/${lawyer.slug}` },
        ])}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[13px] text-muted">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <span>/</span>
        <Link href="/lawyers" className="hover:text-ink transition-colors">Lawyers</Link>
        <span>/</span>
        <span className="text-ink font-medium">{lawyer.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Main Profile Info */}
        <div className="space-y-8">
          {/* Profile Header Card */}
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-900 to-slate-800 text-[20px] font-bold text-white shadow-md">
                {initials}
              </div>

              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-[28px] font-extrabold text-ink tracking-tight">
                    {lawyer.name}
                  </h1>

                  {lawyer.verified ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-[12px] font-semibold text-emerald-800">
                      <svg className="h-3.5 w-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>MOJ Verified {lawyer.verifiedAt ? `(${lawyer.verifiedAt})` : ""}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-3 py-1 text-[12px] font-semibold text-amber-800">
                      <span>Verification Pending</span>
                    </span>
                  )}

                  {lawyer.isSample && (
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                      Sample profile
                    </span>
                  )}
                </div>

                <p className="text-[15px] font-medium text-ink-secondary">
                  {lawyer.title} · <span className="text-ink font-semibold">{lawyer.firm}</span>
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[13px] text-muted pt-1">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{cityName(lawyer.city)}</span>
                  </span>
                  <span>·</span>
                  <span>{yearsExp} Years in Practice (Since {lawyer.yearStarted})</span>
                </div>
              </div>
            </div>

            {/* Practice Badges */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
              {lawyer.practices.map((p) => (
                <Link
                  key={p}
                  href={`/practice/${p}`}
                  className="rounded-xl border border-line bg-slate-50/80 px-3.5 py-1.5 text-[13px] font-medium text-ink-secondary hover:border-accent hover:bg-white hover:text-accent transition-all"
                >
                  {practiceName(p)}
                </Link>
              ))}
            </div>
          </div>

          {/* Biography */}
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft space-y-4">
            <h2 className="text-[18px] font-bold text-ink">Biography & Practice Focus</h2>
            <div className="text-[15px] leading-relaxed text-ink-secondary">
              <p>{lawyer.bio}</p>
            </div>
          </div>

          {/* Selected Experience */}
          <div className="rounded-3xl border border-line bg-white p-7 shadow-soft space-y-4">
            <h2 className="text-[18px] font-bold text-ink">Selected Experience & Highlights</h2>
            <ul className="grid gap-3 sm:grid-cols-1">
              {lawyer.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 text-[14px] text-ink">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Before You Instruct Notice */}
          <div className="rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-soft text-[13px] leading-relaxed text-slate-700">
            <div className="flex items-center gap-2 font-bold text-brand-900 text-[14px]">
              <svg className="h-4 w-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Before You Formally Instruct Counsel</span>
            </div>
            <p className="mt-2 text-slate-600">
              Confirm the practising certificate number on the official Ministry of Justice register, enter into a written engagement letter with the law firm, and agree on billing structures in writing. Pay legal fees directly to the law firm bank account — never to an individual or third party.
            </p>
          </div>
        </div>

        {/* Sidebar Sticky Column */}
        <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
          {/* Direct Contact Card */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-bold text-ink">Direct Contact</h2>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                Direct & Free
              </span>
            </div>
            <ContactButtons lawyer={lawyer} practice={lawyer.practices[0]} />
            <p className="text-[11px] leading-relaxed text-muted pt-2 border-t border-slate-100">
              You are contacting the lawyer directly. {SITE.name} does not intermediate or charge referral fees.
            </p>
          </div>

          {/* Verified Credentials Card */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft space-y-4">
            <h2 className="text-[15px] font-bold text-ink">Official Credentials</h2>
            <dl className="space-y-3 text-[13px]">
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-muted text-[11px] font-semibold uppercase tracking-wider">PRC Certificate No.</dt>
                <dd className="mt-1 font-mono text-[13px] font-bold text-ink select-all">
                  {lawyer.barNumber}
                </dd>
              </div>

              <div>
                <dt className="text-muted text-[11px] font-semibold uppercase tracking-wider">Registered Firm</dt>
                <dd className="mt-1 font-medium text-ink">{lawyer.firm}</dd>
              </div>

              <div>
                <dt className="text-muted text-[11px] font-semibold uppercase tracking-wider">Working Languages</dt>
                <dd className="mt-1 font-medium text-ink">{lawyer.languages.join(", ")}</dd>
              </div>
            </dl>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              <div className="text-[12px] font-semibold text-ink">Verify Independently:</div>
              {SITE.verificationUrls.map((v) => (
                <a
                  key={v.url}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[12px] text-emerald-700 hover:text-emerald-800 font-medium py-1"
                >
                  <span className="truncate pr-2">{v.label}</span>
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

