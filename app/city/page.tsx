import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { CITIES, lawyersByCity } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lawyers by city in China",
  description:
    "English-speaking, PRC-licensed lawyers in Beijing, Shanghai, Shenzhen, Guangzhou, Hangzhou, Chengdu and Nanjing.",
};

export default function CityIndexPage() {
  return (
    <div className="space-y-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cities", path: "/city" },
        ])}
      />

      {/* Header */}
      <div className="space-y-3">
        <nav className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink font-medium">Cities</span>
        </nav>

        <div>
          <h1 className="text-[30px] font-extrabold tracking-tight text-ink">
            PRC Lawyers by City
          </h1>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-muted">
            Most cross-border transactional matters concentrate in Tier-1 commercial centers, while dispute resolution and manufacturing claims often require boots-on-the-ground counsel in provincial capitals.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((c) => {
          const count = lawyersByCity(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/city/${c.slug}`}
              className="group rounded-2xl border border-line bg-white p-5 shadow-soft card-hover-effect flex items-center justify-between"
            >
              <div>
                <h2 className="text-[16px] font-bold text-ink group-hover:text-accent transition-colors">
                  {c.name}
                </h2>
                <div className="mt-1 flex items-center gap-2 text-[12px] text-muted">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600">
                    {c.tier}
                  </span>
                  <span>·</span>
                  <span>{count} {count === 1 ? "lawyer" : "lawyers"}</span>
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-accent-light group-hover:text-accent-dark transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

