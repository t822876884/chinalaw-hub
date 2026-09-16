import Link from "next/link";
import ContactButtons from "./ContactButtons";
import { cityName, practiceName, type Lawyer } from "@/lib/data";

// Helper to get monogram initials from lawyer name
function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// Deterministic gentle gradient palette for lawyer avatars
const AVATAR_GRADIENTS = [
  "from-emerald-700 to-teal-800 text-emerald-100",
  "from-slate-800 to-slate-900 text-slate-100",
  "from-blue-800 to-indigo-900 text-blue-100",
  "from-teal-800 to-cyan-900 text-teal-100",
  "from-cyan-800 to-blue-900 text-cyan-100",
];

export default function LawyerCard({
  lawyer,
  practice,
}: {
  lawyer: Lawyer;
  practice?: string;
}) {
  const initials = getInitials(lawyer.name);
  const yearsExp = new Date().getFullYear() - lawyer.yearStarted;
  const colorIndex = Math.abs(
    lawyer.slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  ) % AVATAR_GRADIENTS.length;
  const gradientClass = AVATAR_GRADIENTS[colorIndex];

  return (
    <article className="group relative rounded-2xl border border-line/80 bg-white p-6 shadow-soft card-hover-effect">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {/* Lawyer Monogram Avatar */}
          <Link
            href={`/lawyers/${lawyer.slug}`}
            className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradientClass} text-[15px] font-bold shadow-sm group-hover:scale-105 transition-transform`}
            style={{ width: "3.25rem", height: "3.25rem" }}
          >
            {initials}
          </Link>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/lawyers/${lawyer.slug}`}
                className="text-[17px] font-bold text-ink hover:text-accent transition-colors"
              >
                {lawyer.name}
              </Link>

              {lawyer.verified ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  <svg className="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>MOJ Verified</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800">
                  <span>Verification Pending</span>
                </span>
              )}

              {lawyer.isSample && (
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                  Sample
                </span>
              )}
            </div>

            <div className="mt-1 text-[13px] text-ink-secondary">
              <span className="font-medium">{lawyer.title}</span>
              <span className="mx-1.5 text-slate-300">·</span>
              <span>{lawyer.firm}</span>
            </div>
          </div>
        </div>

        {/* Location & Experience Meta */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between border-t border-slate-100 pt-3 sm:border-0 sm:pt-0 text-[12px] text-muted gap-1">
          <div className="flex items-center gap-1 font-medium text-ink">
            <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{cityName(lawyer.city)}</span>
          </div>
          <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
            {yearsExp} yrs experience (Since {lawyer.yearStarted})
          </span>
        </div>
      </div>

      <p className="mt-3.5 text-[14px] leading-relaxed text-ink-secondary line-clamp-3">
        {lawyer.bio}
      </p>

      {/* Practice Area Pills */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        {lawyer.practices.map((p) => {
          const isCurrent = practice === p;
          return (
            <Link
              key={p}
              href={`/practice/${p}`}
              className={`rounded-lg px-2.5 py-1 text-[12px] font-medium transition-colors ${
                isCurrent
                  ? "bg-accent-light text-accent-dark border border-accent-ring"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-ink"
              }`}
            >
              {practiceName(p)}
            </Link>
          );
        })}
      </div>

      {/* Languages & Contact Actions */}
      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1.5 text-[12px] text-muted">
          <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span>Languages: <strong className="text-ink-secondary font-medium">{lawyer.languages.join(", ")}</strong></span>
        </div>

        <div>
          <ContactButtons lawyer={lawyer} practice={practice} compact />
        </div>
      </div>
    </article>
  );
}

