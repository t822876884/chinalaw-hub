import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { PRACTICES, lawyersByPractice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Legal practice areas",
  description:
    "Common legal matters foreign individuals and companies face in China, from company setup to disputes and criminal defence.",
};

export default function PracticeIndexPage() {
  return (
    <div className="space-y-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice areas", path: "/practice" },
        ])}
      />

      {/* Header */}
      <div className="space-y-3">
        <nav className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink font-medium">Practice Areas</span>
        </nav>

        <div>
          <h1 className="text-[30px] font-extrabold tracking-tight text-ink">
            Legal Practice Areas
          </h1>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-muted">
            Select a specialized legal field below to find experienced, English-speaking lawyers qualified in the People&apos;s Republic of China.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {PRACTICES.map((p) => {
          const count = lawyersByPractice(p.slug).length;
          return (
            <Link
              key={p.slug}
              href={`/practice/${p.slug}`}
              className="group rounded-2xl border border-line bg-white p-6 shadow-soft card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[17px] font-bold text-ink group-hover:text-accent transition-colors">
                    {p.name}
                  </h2>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[12px] font-medium text-slate-700">
                    {count} {count === 1 ? "lawyer" : "lawyers"}
                  </span>
                </div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                  {p.blurb}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-accent group-hover:translate-x-1 transition-transform">
                <span>View practice counsel</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

