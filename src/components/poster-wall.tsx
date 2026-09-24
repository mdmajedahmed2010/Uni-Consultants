import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

const posters = [
  {
    key: "logo",
    src: "/logo.jpg",
    label: `${company.name} — Official Brand Emblem & Logo (Vibrant Orange & Navy)`,
  },
  {
    key: "banner",
    src: "/banner.png",
    label: `${company.name} — Official Comprehensive Banner ("ONE STOP SOLUTION FOR STUDY ABROAD EDUCATION")`,
  },
];

export function PosterWall() {
  const [active, setActive] = useState<string | null>(null);
  const activePoster = posters.find((p) => p.key === active);

  return (
    <section className="bg-slate-50 py-14 sm:py-20 border-y border-slate-200">
      <Reveal className="section-shell">
        <SectionHeading
          eyebrow="Official Brand Assets"
          title="Official Visuals & Brand Memorabilia"
          subtitle={`Explore verified assets and official credentials from ${company.name} (${company.taglineBangla}) — click any asset to enlarge.`}
        />
      </Reveal>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {posters.map((p, i) => (
          <Reveal key={p.key} delay={Math.min(i, 5) * 60} className="snap-start shrink-0">
            <button
              type="button"
              onClick={() => setActive(p.key)}
              className="card-clean group block w-64 sm:w-80 overflow-hidden rounded-3xl text-left transition-all hover:scale-[1.02] cursor-pointer border border-slate-200 hover:border-uni-orange"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="block text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                  {p.label}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-[0.68rem] font-bold text-uni-orange">
                  <span>✨</span> Verified Brand Asset
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {activePoster ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePoster.label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl p-2">
            <img
              src={activePoster.src}
              alt={activePoster.label}
              className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain mx-auto"
            />
            <div className="p-3 text-center">
              <p className="text-sm font-bold text-white">{activePoster.label}</p>
              <p className="text-xs text-slate-300 mt-0.5">
                {company.legalName} · {company.offices.headquarters.address}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-white border border-slate-700 shadow-md hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
