import { useState } from "react";
import { testimonials as studentTestimonials, company } from "@/lib/site-data";
import { IconSparkles, IconCheck } from "@/components/ui-blocks";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, studentTestimonials.length - 3);

  const prev = () => setCurrentIndex((p) => Math.max(0, p - 1));
  const next = () => setCurrentIndex((p) => Math.min(maxIndex, p + 1));

  return (
    <section className="relative py-20 sm:py-28 bg-[#070B16] text-white border-t border-white/10 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-orange-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-amber-600/10 blur-[140px]" />

      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/15 px-3.5 py-1 text-xs font-bold text-orange-400 backdrop-blur-md">
              <IconSparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Verified Success Stories</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Real Students. <span className="text-orange-400">Honest Results.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Authentic feedback from students who achieved foreign university admissions, visa approvals, and Cambridge-standard IELTS scores through {company.name}.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous Testimonials"
              onClick={prev}
              disabled={currentIndex === 0}
              className="h-11 w-11 flex items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all disabled:opacity-30 disabled:hover:bg-white/[0.05] disabled:cursor-not-allowed cursor-pointer font-bold text-lg"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next Testimonials"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="h-11 w-11 flex items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all disabled:opacity-30 disabled:hover:bg-white/[0.05] disabled:cursor-not-allowed cursor-pointer font-bold text-lg"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonials Grid (Double-Bezel Agency Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentTestimonials.slice(currentIndex, currentIndex + 3).map((r, idx) => {
            const initials = r.name
              .split(" ")
              .filter(Boolean)
              .map((n) => n[0])
              .slice(0, 2)
              .join("");

            return (
              <div
                key={r.name + idx}
                className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 border border-white/10 shadow-xl hover:border-orange-500/50 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="rounded-[1.35rem] bg-[#0A1020] p-6 sm:p-7 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Top Row: Stars + Verified Visa Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-amber-400 text-sm">
                        {Array.from({ length: r.rating || 5 }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                        {r.badge || "Verified Visa"}
                      </span>
                    </div>

                    {/* Quotation Text */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      &ldquo;{r.quote}&rdquo;
                    </p>

                    {/* Bengali Quote for cultural resonance */}
                    {r.bengaliQuote && (
                      <p className="text-xs text-amber-300/80 font-bangla italic border-l-2 border-orange-500/40 pl-3 leading-relaxed">
                        {r.bengaliQuote}
                      </p>
                    )}
                  </div>

                  {/* Student Signature Footer */}
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-xs shadow-md">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate group-hover:text-orange-400 transition-colors">
                          {r.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 truncate">
                          {r.program ? `${r.program} · ` : ""}{r.destination}
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 shrink-0">
                      <IconCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Endorsement Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Over 30+ real visa successes verified on the official banner photo wall</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-semibold">100% Genuine Testimonials</span>
            <span>•</span>
            <span className="text-slate-300 font-semibold">Zero Paid Endorsements</span>
          </div>
        </div>
      </div>
    </section>
  );
}
