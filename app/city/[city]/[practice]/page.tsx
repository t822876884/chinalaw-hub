import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LawyerCard from "@/components/LawyerCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import {
  CITIES,
  PRACTICES,
  cityBySlug,
  lawyersByCityAndPractice,
  practiceBySlug,
} from "@/lib/data";

type Params = { city: string; practice: string };

export function generateStaticParams() {
  const combos: Params[] = [];
  for (const c of CITIES) {
    for (const p of PRACTICES) combos.push({ city: c.slug, practice: p.slug });
  }
  return combos;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, practice } = await params;
  const c = cityBySlug(city);
  const p = practiceBySlug(practice);
  if (!c || !p) return { title: "Not found" };
  return {
    title: `${p.name} lawyers in ${c.name}`,
    description: `Find a ${p.name.toLowerCase()} lawyer in ${c.name} who works with foreign clients. ${p.blurb}`,
  };
}

export default async function CityPracticePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city, practice } = await params;
  const c = cityBySlug(city);
  const p = practiceBySlug(practice);
  if (!c || !p) notFound();
  const list = lawyersByCityAndPractice(city, practice);

  return (
    <div className="space-y-8">
      <JsonLd
        data={itemListSchema(
          list,
          `${p.name} lawyers in ${c.name}`,
          `/city/${c.slug}/${p.slug}`,
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: c.name, path: `/city/${c.slug}` },
          { name: p.name, path: `/city/${c.slug}/${p.slug}` },
        ])}
      />

      {/* Header & Breadcrumbs */}
      <div className="space-y-3">
        <nav className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/city/${c.slug}`} className="hover:text-ink transition-colors">{c.name}</Link>
          <span>/</span>
          <span className="text-ink font-medium">{p.name}</span>
        </nav>

        <div>
          <h1 className="text-[30px] font-extrabold tracking-tight text-ink">
            {p.name} Lawyers in {c.name}
          </h1>
          <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-muted">
            {p.blurb}
          </p>
        </div>
      </div>

      {/* Lawyers List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-[14px] font-semibold text-ink">
            {list.length} {list.length === 1 ? "Counsel" : "Lawyers"} Handling {p.name} in {c.name}
          </span>
          <span className="text-[12px] text-muted">Verified PRC License</span>
        </div>

        {list.map((l) => (
          <LawyerCard key={l.slug} lawyer={l} practice={practice} />
        ))}

        {list.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-soft">
            <h3 className="text-[15px] font-semibold text-ink">
              We have not listed a {p.name.toLowerCase()} lawyer in {c.name} yet
            </h3>
            <p className="mt-1 text-[13px] text-muted">
              You can explore counsel handling {p.name} nationwide across China.
            </p>
            <Link
              href={`/practice/${p.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-[13px] font-medium text-white hover:bg-brand-800 transition-colors"
            >
              See all {p.name} lawyers in China
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

