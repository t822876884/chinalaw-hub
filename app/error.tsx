"use client";

import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <h1 className="text-[22px] font-medium">Something went wrong</h1>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">
        This page failed to load. It is usually a temporary rendering problem —
        reloading normally fixes it. If it keeps happening, please report it to
        hello@example.com.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-[12px] text-muted">
          Ref: {error.digest}
        </p>
      )}
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-ink px-5 py-2.5 text-[14px] text-white hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg border border-line px-5 py-2.5 text-[14px] hover:border-ink"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
