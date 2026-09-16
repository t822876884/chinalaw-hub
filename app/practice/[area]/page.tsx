import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LawyerCard from "@/components/LawyerCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema, practiceSchema } from "@/lib/schema";
import { CITIES, PRACTICES, lawyersByPractice } from "@/lib/data";

type Params = { area: string };

export function generateStaticParams() {
  return PRACTICES.map((p) => ({ area: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area } = await params;
  const p = PRACTICES.find((x) => x.slug === area);
  if (!p) return { title: "Not found" };
  return {
    title: `${p.name} lawyers in China`,
    description: p.blurb,
  };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { area } = await params;
  const p = PRACTICES.find((x) => x.slug === area);
  if (!p) notFound();
  const list = lawyersByPractice(area);

  return (
    <div className="space-y-8">
      <JsonLd data={practiceSchema(p)} />
      <JsonLd
        data={itemListSchema(list, `${p.name} lawyers in China`, `/practice/${p.slug}`)}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Practice areas", path: "/practice" },
          { name: p.name, path: `/practice/${p.slug}` },
        ])}
      />

      {/* Header */}
      <div className="space-y-3">
        <nav className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href="/practice" className="hover:text-ink transition-colors">Practice Areas</Link>
          <span>/</span>
          <span className="text-ink font-medium">{p.name}</span>
        </nav>

        <div>
          <h1 className="text-[30px] font-extrabold tracking-tight text-ink">
            {p.name} Lawyers in China
          </h1>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-muted">
            {p.blurb}
          </p>
        </div>
      </div>

      {/* City Filter Chips */}
      <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
        <div className="text-[12px] font-semibold uppercase tracking-wider text-muted mb-2">
          Filter {p.name} Counsel by City
        </div>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/city/${c.slug}/${area}`}
              className="rounded-xl border border-line bg-slate-50/80 px-3 py-1.5 text-[13px] font-medium text-ink-secondary hover:border-accent hover:bg-white hover:text-accent transition-all"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Lawyer List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-[14px] font-semibold text-ink">
            {list.length} {list.length === 1 ? "Counsel" : "Lawyers"} Handling {p.name}
          </span>
          <span className="text-[12px] text-muted">Verified PRC License</span>
        </div>

        {list.map((l) => (
          <LawyerCard key={l.slug} lawyer={l} practice={area} />
        ))}

        {list.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-soft">
            <h3 className="text-[15px] font-semibold text-ink">No listings in this practice area yet</h3>
            <p className="mt-1 text-[13px] text-muted">
              We are constantly expanding our verified lawyer network.
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

