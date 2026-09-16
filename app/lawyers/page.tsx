import type { Metadata } from "next";
import Link from "next/link";
import LawyerDirectory from "@/components/LawyerDirectory";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { LAWYERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "English-speaking lawyers in China",
  description:
    "Browse PRC-licensed, English-speaking lawyers by city and practice area. Contact them directly on WhatsApp, WeChat or email.",
};

export default function LawyersPage() {
  return (
    <div className="space-y-8">
      <JsonLd data={itemListSchema(LAWYERS, "Verified lawyers in China", "/lawyers")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Lawyers", path: "/lawyers" },
        ])}
      />

      {/* Header */}
      <div className="space-y-3">
        <nav className="flex items-center gap-2 text-[13px] text-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-ink font-medium">Lawyers Directory</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <h1 className="text-[30px] font-extrabold tracking-tight text-ink">
              Verified Lawyer Directory
            </h1>
            <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-muted">
              Filter by city, specialty, or keywords. Every listing includes the lawyer&apos;s 17-digit practising certificate number verified against the Ministry of Justice registry.
            </p>
          </div>
          <div className="text-[13px] font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100 self-start sm:self-auto">
            {LAWYERS.length} Licensed Counsel Listed
          </div>
        </div>
      </div>

      <LawyerDirectory lawyers={LAWYERS} />
    </div>
  );
}

