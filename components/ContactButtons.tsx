"use client";

import { useState } from "react";
import type { Lawyer } from "@/lib/data";
import { mailtoLink, whatsappLink, TRACK_EVENT } from "@/lib/contact";

type Props = {
  lawyer: Lawyer;
  practice?: string;
  compact?: boolean;
};

function track(channel: string, lawyer: Lawyer) {
  const payload = {
    event: TRACK_EVENT,
    channel,
    lawyer: lawyer.slug,
    city: lawyer.city,
  };
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
  if (typeof w.gtag === "function") w.gtag("event", TRACK_EVENT, payload);
}

export default function ContactButtons({ lawyer, practice, compact }: Props) {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const wa = whatsappLink(lawyer, practice);
  const mail = mailtoLink(lawyer, practice);

  const handleCopyWechat = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!lawyer.contact.wechat) return;
    navigator.clipboard.writeText(lawyer.contact.wechat);
    track("wechat_copy", lawyer);
    setCopiedWeChat(true);
    setTimeout(() => setCopiedWeChat(false), 2200);
  };

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp", lawyer)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-emerald-700 transition-all active:scale-95"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.782.809 2.79.81h.001c3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.796-5.768-5.796zm3.385 8.212c-.144.405-.837.774-1.17.824-.312.045-.708.06-2.18-.549-1.88-0.776-3.093-2.697-3.187-2.82-.093-.125-.769-1.023-.769-1.95 0-.929.489-1.385.663-1.573.174-.189.38-.236.507-.236.126 0 .253.001.364.007.118.006.276-.045.432.33.16.386.546 1.332.594 1.43.048.098.08.213.016.34-.064.127-.096.206-.19.317-.095.11-.2.247-.286.331-.095.094-.194.197-.083.388.111.19.493.813 1.059 1.317.728.648 1.343.85 1.533.944.19.095.301.079.412-.048.111-.127.475-.554.602-.744.127-.19.254-.158.428-.095.174.063 1.108.522 1.298.617.19.095.317.143.364.222.048.079.048.459-.096.864z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        )}

        {lawyer.contact.wechat && (
          <button
            type="button"
            onClick={handleCopyWechat}
            className="group relative inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-[12px] font-medium text-ink-secondary hover:border-slate-400 hover:text-ink transition-all active:scale-95"
            title="Click to copy WeChat ID"
          >
            <svg className="h-3.5 w-3.5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.05l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.832.404c.307 0 .607-.02.906-.048a6.797 6.797 0 0 1-.202-1.637c0-3.645 3.51-6.604 7.842-6.604.423 0 .835.034 1.242.086C17.47 6.07 13.435 2.188 8.691 2.188zm-2.58 3.864c.548 0 .992.443.992.991 0 .548-.444.992-.992.992a.994.994 0 0 1-.991-.992c0-.548.443-.991.991-.991zm5.161 0c.548 0 .992.443.992.991 0 .548-.444.992-.992.992a.994.994 0 0 1-.992-.992c0-.548.444-.991.992-.991zm6.064 4.542c-3.633 0-6.581 2.493-6.581 5.568 0 1.67.876 3.174 2.257 4.195a.44.44 0 0 1 .162.502l-.294 1.118a.223.223 0 0 0 .224.275c.045 0 .09-.015.127-.038l1.439-.841a.65.65 0 0 1 .544-.074c.73.187 1.498.29 2.28.29 3.633 0 6.582-2.493 6.582-5.568 0-3.075-2.949-5.568-6.582-5.568zm-2.094 3.037c.411 0 .744.333.744.744 0 .411-.333.744-.744.744a.746.746 0 0 1-.744-.744c0-.411.333-.744.744-.744zm3.87 0c.412 0 .745.333.745.744 0 .411-.333.744-.745.744a.746.746 0 0 1-.744-.744c0-.411.333-.744.744-.744z" />
            </svg>
            <span>{copiedWeChat ? "Copied!" : `WeChat: ${lawyer.contact.wechat}`}</span>
            {copiedWeChat && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-slate-900 px-2 py-0.5 text-[10px] text-white shadow">
                ID Copied!
              </span>
            )}
          </button>
        )}

        {mail && (
          <a
            href={mail}
            onClick={() => track("email", lawyer)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-[12px] font-medium text-ink-secondary hover:border-slate-400 hover:text-ink transition-all active:scale-95"
          >
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp", lawyer)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-[14px] font-semibold text-white shadow-md shadow-emerald-700/15 hover:from-emerald-700 hover:to-teal-700 transition-all active:scale-98"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.782.809 2.79.81h.001c3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.796-5.768-5.796zm3.385 8.212c-.144.405-.837.774-1.17.824-.312.045-.708.06-2.18-.549-1.88-0.776-3.093-2.697-3.187-2.82-.093-.125-.769-1.023-.769-1.95 0-.929.489-1.385.663-1.573.174-.189.38-.236.507-.236.126 0 .253.001.364.007.118.006.276-.045.432.33.16.386.546 1.332.594 1.43.048.098.08.213.016.34-.064.127-.096.206-.19.317-.095.11-.2.247-.286.331-.095.094-.194.197-.083.388.111.19.493.813 1.059 1.317.728.648 1.343.85 1.533.944.19.095.301.079.412-.048.111-.127.475-.554.602-.744.127-.19.254-.158.428-.095.174.063 1.108.522 1.298.617.19.095.317.143.364.222.048.079.048.459-.096.864z" />
          </svg>
          <span>Message Directly on WhatsApp</span>
        </a>
      )}

      <div className="grid gap-2.5 sm:grid-cols-2">
        {lawyer.contact.wechat && (
          <button
            type="button"
            onClick={handleCopyWechat}
            className="group relative flex flex-col items-center justify-center rounded-xl border border-line bg-white p-3 text-center hover:border-emerald-500 hover:bg-emerald-50/30 transition-all"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted group-hover:text-emerald-700">
              <svg className="h-3.5 w-3.5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.05l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.832.404c.307 0 .607-.02.906-.048a6.797 6.797 0 0 1-.202-1.637c0-3.645 3.51-6.604 7.842-6.604.423 0 .835.034 1.242.086C17.47 6.07 13.435 2.188 8.691 2.188zm-2.58 3.864c.548 0 .992.443.992.991 0 .548-.444.992-.992.992a.994.994 0 0 1-.991-.992c0-.548.443-.991.991-.991zm5.161 0c.548 0 .992.443.992.991 0 .548-.444.992-.992.992a.994.994 0 0 1-.992-.992c0-.548.444-.991.992-.991zm6.064 4.542c-3.633 0-6.581 2.493-6.581 5.568 0 1.67.876 3.174 2.257 4.195a.44.44 0 0 1 .162.502l-.294 1.118a.223.223 0 0 0 .224.275c.045 0 .09-.015.127-.038l1.439-.841a.65.65 0 0 1 .544-.074c.73.187 1.498.29 2.28.29 3.633 0 6.582-2.493 6.582-5.568 0-3.075-2.949-5.568-6.582-5.568zm-2.094 3.037c.411 0 .744.333.744.744 0 .411-.333.744-.744.744a.746.746 0 0 1-.744-.744c0-.411.333-.744.744-.744zm3.87 0c.412 0 .745.333.745.744 0 .411-.333.744-.745.744a.746.746 0 0 1-.744-.744c0-.411.333-.744.744-.744z" />
              </svg>
              <span>{copiedWeChat ? "Copied!" : "WeChat"}</span>
            </div>
            <div className="mt-1 text-[13px] font-semibold text-ink">
              {lawyer.contact.wechat}
            </div>
            <div className="mt-0.5 text-[11px] text-muted">
              {copiedWeChat ? "✓ Copied to clipboard" : "Click to copy ID"}
            </div>
          </button>
        )}

        {mail && (
          <a
            href={mail}
            onClick={() => track("email", lawyer)}
            className="group flex flex-col items-center justify-center rounded-xl border border-line bg-white p-3 text-center hover:border-brand-500 hover:bg-brand-50/30 transition-all"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted group-hover:text-brand-700">
              <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </div>
            <div className="mt-1 max-w-full truncate text-[13px] font-semibold text-ink">
              {lawyer.contact.email}
            </div>
            <div className="mt-0.5 text-[11px] text-muted">Send enquiry</div>
          </a>
        )}
      </div>

      {!wa && (
        <p className="text-[12px] text-muted text-center">
          WhatsApp is not listed for this counsel. Direct WeChat or email is available above.
        </p>
      )}
    </div>
  );
}

