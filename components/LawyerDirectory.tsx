"use client";

import { useMemo, useState } from "react";
import LawyerCard from "./LawyerCard";
import { CITIES, PRACTICES, type Lawyer } from "@/lib/data";

export default function LawyerDirectory({ lawyers }: { lawyers: Lawyer[] }) {
  const [city, setCity] = useState("all");
  const [practice, setPractice] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return lawyers.filter((l) => {
      if (city !== "all" && l.city !== city) return false;
      if (practice !== "all" && !l.practices.includes(practice)) return false;
      if (!term) return true;
      const hay = [l.name, l.firm, l.bio, l.highlights.join(" ")]
        .join(" ")
        .toLowerCase();
      return hay.includes(term);
    });
  }, [lawyers, city, practice, q]);

  const resetFilters = () => {
    setCity("all");
    setPractice("all");
    setQ("");
  };

  const hasActiveFilters = city !== "all" || practice !== "all" || q.trim() !== "";

  return (
    <div className="space-y-6">
      {/* Modern Filter Card */}
      <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
        <div className="grid gap-3.5 sm:grid-cols-12">
          {/* Search Input */}
          <div className="sm:col-span-6">
            <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted mb-1.5">
              Search Counsel
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by lawyer name, law firm, arbitration, M&A..."
                className="w-full rounded-xl border border-line bg-slate-50/50 pl-10 pr-9 py-2.5 text-[14px] text-ink placeholder:text-slate-400 outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent-ring"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-ink"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* City Filter */}
          <div className="sm:col-span-3">
            <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted mb-1.5">
              City
            </label>
            <div className="relative">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full appearance-none rounded-xl border border-line bg-slate-50/50 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent-ring"
              >
                <option value="all">All Cities</option>
                {CITIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} ({c.tier})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Practice Filter */}
          <div className="sm:col-span-3">
            <label className="block text-[12px] font-semibold uppercase tracking-wider text-muted mb-1.5">
              Practice Area
            </label>
            <div className="relative">
              <select
                value={practice}
                onChange={(e) => setPractice(e.target.value)}
                className="w-full appearance-none rounded-xl border border-line bg-slate-50/50 px-3.5 py-2.5 text-[14px] text-ink outline-none transition-all focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent-ring"
              >
                <option value="all">All Practice Areas</option>
                {PRACTICES.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Badges / Active State Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[13px]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[12px] font-medium text-muted mr-1">Popular:</span>
            {["beijing", "shanghai", "shenzhen"].map((citySlug) => (
              <button
                key={citySlug}
                type="button"
                onClick={() => setCity(city === citySlug ? "all" : citySlug)}
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  city === citySlug
                    ? "bg-brand-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {citySlug.charAt(0).toUpperCase() + citySlug.slice(1)}
              </button>
            ))}
            {["corporate", "dispute", "ip"].map((pSlug) => (
              <button
                key={pSlug}
                type="button"
                onClick={() => setPractice(practice === pSlug ? "all" : pSlug)}
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  practice === pSlug
                    ? "bg-brand-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {PRACTICES.find((p) => p.slug === pSlug)?.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-[12px] font-medium text-emerald-700 hover:underline flex items-center gap-1"
            >
              <span>Reset all filters</span>
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-ink">
            {filtered.length} {filtered.length === 1 ? "Lawyer" : "Lawyers"} Available
          </span>
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </div>
        <div className="text-[12px] text-muted">
          Showing verified PRC practitioners
        </div>
      </div>

      {/* Lawyers List */}
      <div className="space-y-4">
        {filtered.map((l) => (
          <LawyerCard
            key={l.slug}
            lawyer={l}
            practice={practice === "all" ? undefined : practice}
          />
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-soft">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-3 text-[15px] font-semibold text-ink">No lawyers match your query</h3>
            <p className="mt-1 text-[13px] text-muted max-w-sm mx-auto">
              Try broadening your keyword, switching cities, or clearing specific practice areas.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-ink px-4 py-2 text-[13px] font-medium text-white hover:bg-brand-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

