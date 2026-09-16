import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LawyerCard from "@/components/LawyerCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { CITIES, PRACTICES, lawyersByCity, practiceName } from "@/lib/data";

type Params = { city: string };

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = CITIES.find((x) => x.slug === city);
  if (!c) return { title: "City not found" };
  return {
    title: `English-speaking lawyers in ${c.name}`,
    description: `PRC-licensed lawyers in ${c.name} who work with foreign clients. Browse by practice area and contact them directly on WhatsApp.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const c = CITIES.find((x) => x.slug === city);
  if (!c) notFound();
  const list = lawyersByCity(city);

  return (
    <div className="space-y-8">
      <JsonLd
        data={itemListSchema(list, `English-speaking lawyers in ${c.name}`, `/city/${c.slug}`)}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cities", path: "/city" },
          { name: c.name, path: `/city/${c.slug}` },
        ])}
      />

      {/* Header */}
      <div className="space-y-3">
        <nav className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href="/city" className="hover:text-ink transition-colors">Cities</Link>
          <span>/</span>
          <span className="text-ink font-medium">{c.name}</span>
        </nav>

        <div>
          <h1 className="text-[30px] font-extrabold tracking-tight text-ink">
            English-Speaking Lawyers in {c.name}
          </h1>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-muted">
            {list.length} PRC-licensed lawyer{list.length === 1 ? "" : "s"} listed in {c.name} ({c.tier}). Filter by practice area below to find specialized counsel.
          </p>
        </div>
      </div>

      {/* Practice Filter Chips */}
      <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
        <div className="text-[12px] font-semibold uppercase tracking-wider text-muted mb-2">
          Filter {c.name} Counsel by Practice Area
        </div>
        <div className="flex flex-wrap gap-2">
          {PRACTICES.map((p) => (
            <Link
              key={p.slug}
              href={`/city/${city}/${p.slug}`}
              className="rounded-xl border border-line bg-slate-50/80 px-3 py-1.5 text-[13px] font-medium text-ink-secondary hover:border-accent hover:bg-white hover:text-accent transition-all"
            >
              {practiceName(p.slug)} in {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Lawyer List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-[14px] font-semibold text-ink">
            {list.length} {list.length === 1 ? "Counsel" : "Lawyers"} Available in {c.name}
          </span>
          <span className="text-[12px] text-muted">Verified PRC License</span>
        </div>

        {list.map((l) => (
          <LawyerCard key={l.slug} lawyer={l} />
        ))}

        {list.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-soft">
            <h3 className="text-[15px] font-semibold text-ink">No listings in {c.name} yet</h3>
            <p className="mt-1 text-[13px] text-muted">
              We are actively verifying new cross-border counsel in {c.name}.
            </p>
            <Link
              href="/lawyers"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-[13px] font-medium text-white hover:bg-brand-800 transition-colors"
            >
              Browse All Lawyers
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

