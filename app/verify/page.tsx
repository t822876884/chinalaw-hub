import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "How to verify a lawyer in China",
  description:
    "Check a Chinese lawyer's practising certificate on the official Ministry of Justice register, spot unlicensed consultants, and understand fee structures before you instruct anyone.",
};

const steps = [
  {
    title: "1. Obtain Full Name & Certificate Number",
    desc: "Ask the lawyer for their 17-digit PRC practising certificate number (律师执业证号) and their registered Chinese name.",
  },
  {
    title: "2. Search the Ministry of Justice Database",
    desc: "Query the official National Lawyer Search Portal (全国律师执业诚信信息公示平台) operated under the Ministry of Justice.",
  },
  {
    title: "3. Confirm Active Practising Status",
    desc: "Ensure the certificate status is 'Normal Practice' (正常执业), not suspended (暂停执业), cancelled, or revoked.",
  },
  {
    title: "4. Verify Registered Law Firm",
    desc: "Confirm the law firm listed on the portal matches the firm name on your engagement letter and bank wire instructions.",
  },
  {
    title: "5. Review Disciplinary & Credit Records",
    desc: "Check the All China Lawyers Association (ACLA) credit system for any administrative penalties or bar association sanctions.",
  },
];

const redFlags = [
  "Calling themselves a 'legal consultant' (法律顾问) or 'agent' without providing a 17-digit PRC bar certificate number.",
  "Demanding cash or wire transfer to a personal bank account or offshore entity rather than the law firm's official corporate account.",
  "Promising a guaranteed trial outcome or claiming private relationships / special influence with judges or prosecutors.",
  "Offering 'no-win-no-fee' contingency arrangements for prohibited case types (such as criminal defence, family/divorce, or administrative litigation).",
];

const faqs = [
  {
    q: "Do I need a Chinese lawyer, or can a foreign lawyer represent me in China?",
    a: "Only lawyers holding a PRC practising certificate can appear before Chinese courts. Foreign law firms may advise on their own jurisdiction or act in international arbitration seated outside China, but they cannot represent you in Chinese litigation. If your dispute will be heard by a Chinese court, you need PRC-qualified counsel.",
  },
  {
    q: "How do I confirm a lawyer's practising certificate is genuine?",
    a: "Ask for the 17-digit certificate number and the lawyer's registered Chinese name, then query the Ministry of Justice register. Confirm the status reads normal practice (正常执业) and that the registered law firm matches both your engagement letter and the bank account you are asked to pay.",
  },
  {
    q: "How much do lawyers in China charge?",
    a: "Cross-border work is usually billed hourly, with experienced foreign-facing partners commonly charging RMB 1,500 to RMB 5,000 per hour. Flat fees are common where scope is well defined, such as company incorporation or contract review. Always confirm whether tax, translation and travel are included.",
  },
  {
    q: "Is 'no win, no fee' available in China?",
    a: "Contingency fees are restricted. They are not permitted for divorce and inheritance, wage and social insurance claims, criminal defence, administrative litigation or state compensation. Where they are allowed, the fee is capped by regulation. Treat any guarantee of a specific outcome as a warning sign.",
  },
  {
    q: "What should I do if I have already paid someone unlicensed?",
    a: "Report the matter to the local justice bureau (司法局), and to the police where the conduct looks like fraud. Keep every payment record and all written communications. If a court deadline is approaching, instruct a licensed lawyer immediately — filing deadlines are not extended because you were misled.",
  },
];

export default function VerifyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to verify a lawyer", path: "/verify" },
        ])}
      />

      {/* Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-800">
          <svg className="h-3.5 w-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span>Official Verification Guide</span>
        </div>
        <h1 className="text-[32px] font-extrabold tracking-tight text-ink sm:text-[38px]">
          How to Verify a Lawyer in China
        </h1>
        <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
          Only attorneys holding a practising certificate issued by the PRC Ministry of Justice can represent clients in Chinese courts and arbitration. Verifying takes two minutes and is essential before signing agreements or transferring funds.
        </p>
      </div>

      {/* Official Registers Grid */}
      <section className="space-y-4">
        <h2 className="text-[20px] font-bold text-ink">Official Government Verification Portals</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {SITE.verificationUrls.map((v) => (
            <a
              key={v.url}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-white p-5 shadow-soft card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <svg className="h-4 w-4 text-slate-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h3 className="mt-3 text-[14px] font-bold text-ink group-hover:text-accent transition-colors">
                  {v.label}
                </h3>
              </div>
              <div className="mt-3 truncate text-[11px] font-mono text-muted">
                {v.url.replace(/^https?:\/\//, '')}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="space-y-4">
        <h2 className="text-[20px] font-bold text-ink">5-Step Authentication Checklist</h2>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-[14px] font-bold text-white">
                {i + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-[15px] font-bold text-ink">{s.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee Structures Section */}
      <section className="space-y-4">
        <h2 className="text-[20px] font-bold text-ink">Fee Structures & Regulation in China</h2>
        <div className="rounded-3xl border border-line bg-white p-7 shadow-soft space-y-4 text-[14px] leading-relaxed text-ink-secondary">
          <p>
            PRC law firms typically bill cross-border representations on an hourly rate basis (ranging from 1,500 to 5,000 RMB/hour depending on seniority and city tier), or on a fixed flat-fee schedule for defined transactional scopes (such as WFOE formation or trademark filings).
          </p>
          <div className="rounded-xl bg-slate-50 p-4 text-[13px] border border-slate-100">
            <strong className="text-ink">Legal Restrictions on Contingency Fees:</strong> Under Ministry of Justice regulations, contingency fees (胜诉报酬) are strictly prohibited for criminal defence, divorce, child custody, inheritance, and labour disputes. Always demand a formal bilingual engagement agreement (委托代理协议).
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="space-y-4">
        <h2 className="text-[20px] font-bold text-ink">Common Red Flags to Watch Out For</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {redFlags.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50/50 p-5 text-[13px] leading-relaxed text-red-950 shadow-soft"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p>{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-[20px] font-bold text-ink">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-line bg-white p-5 shadow-soft"
            >
              <summary className="cursor-pointer list-none text-[15px] font-semibold text-ink marker:hidden">
                {f.q}
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-secondary">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div className="rounded-3xl bg-gradient-to-br from-brand-900 to-slate-900 p-8 text-center text-white shadow-card space-y-4">
        <h2 className="text-[22px] font-bold">Ready to Connect with Verified Counsel?</h2>
        <p className="max-w-md mx-auto text-[14px] text-slate-300">
          Browse qualified, English-speaking lawyers across Beijing, Shanghai, Shenzhen, and other key jurisdictions.
        </p>
        <div className="pt-2">
          <Link
            href="/lawyers"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-[14px] font-bold text-ink shadow-md hover:bg-slate-100 transition-colors"
          >
            <span>Browse Verified Lawyers</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

