import { company } from "@/lib/site-data";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "€2,500+",
    label: "Starting Tuition / Year",
    subtext: "Cyprus flagship degrees with MOI acceptance & 50% scholarships",
    highlight: "Affordable",
  },
  {
    value: "100%",
    label: "Honest Document Guidance",
    subtext: "Honesty is Our Commitment — zero hidden charges or fake promises",
    highlight: "Integrity",
  },
  {
    value: "98.4%",
    label: "Visa Approval Rate",
    subtext: "Expert SOP drafting, financial check & embassy interview coaching",
    highlight: "High Success",
  },
  {
    value: "4 Offices",
    label: "Domestic & UK Presence",
    subtext: "Dhaka Principal HQ, Farmgate, Habiganj, and London UK liaison",
    highlight: "Global Reach",
  },
];

const partnerUnis = [
  { name: "University of Nicosia", country: "🇨🇾 Cyprus", type: "QS Ranked European University" },
  { name: "European University Cyprus", country: "🇨🇾 Cyprus", type: "Top Medical & Business" },
  { name: "Canterbury Christ Church University", country: "🇬🇧 UK", type: "1-Yr Masters & Fast CAS" },
  { name: "University of Greenwich", country: "🇬🇧 UK", type: "London Campus & 2-Yr PSW" },
  { name: "Asia Pacific University (APU)", country: "🇲🇾 Malaysia", type: "UK Dual Tech Degree" },
  { name: "Global College Malta", country: "🇲🇹 Malta", type: "European Schengen Work Rights" },
  { name: "Centria University of Applied Sciences", country: "🇫🇮 Finland", type: "30 hrs/week Work Rights" },
];

export function ProofAndCredentials() {
  return (
    <section className="relative bg-[#070B16] border-y border-white/10 py-16 sm:py-20 text-white overflow-hidden">
      {/* Subtle ambient beam */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-40 w-full max-w-5xl bg-gradient-to-b from-orange-500/10 to-transparent blur-3xl" />

      <div className="section-shell relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400 bg-orange-500/10 border border-orange-500/20">
            Real Impact & Verified Performance
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built on Real Visa Success & Transparent Standards
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
            At {company.name}, our reputation is backed by verifiable student admissions, authentic university affiliations, and four full-service office branches.
          </p>
        </div>

        {/* 4 Metrics Double-Bezel Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 border border-white/10 shadow-lg hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="rounded-[1.35rem] bg-[#0A1020] p-6 h-full flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 text-[10px] font-extrabold tracking-wide uppercase">
                      {m.highlight}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">0{idx + 1}</span>
                  </div>
                  <div className="mt-3 font-display text-3xl sm:text-4xl font-black text-white group-hover:text-orange-400 transition-colors">
                    {m.value}
                  </div>
                  <h3 className="mt-1 font-display text-sm font-bold text-slate-200">
                    {m.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium border-t border-white/5 pt-3">
                  {m.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Accredited Institutions Interactive Marquee */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-center text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400 mb-6">
            Direct Representation & Partnerships Across Leading Global Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {partnerUnis.map((uni) => (
              <div
                key={uni.name}
                className="flex items-center gap-2 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-2.5 backdrop-blur-md hover:bg-white/[0.08] hover:border-orange-500/40 transition-all cursor-default"
              >
                <span className="text-base">{uni.country.split(" ")[0]}</span>
                <div>
                  <span className="text-xs font-bold text-white block leading-tight">{uni.name}</span>
                  <span className="text-[10px] text-slate-400 block">{uni.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
