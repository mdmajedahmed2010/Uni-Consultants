import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles, IconCheck } from "@/components/ui-blocks";
import { motion } from "framer-motion";

export function DestinationBento() {
  const { open } = useRegisterModal();
  const [cyprusBudget, setCyprusBudget] = useState(3000);

  const cyprus = destinations.find((d) => d.slug === "cyprus")!;
  const uk = destinations.find((d) => d.slug === "uk")!;
  const malaysia = destinations.find((d) => d.slug === "malaysia")!;
  const malta = destinations.find((d) => d.slug === "malta")!;
  const finland = destinations.find((d) => d.slug === "finland")!;

  return (
    <section className="relative bg-[#FAFAF8] py-20 sm:py-28 lg:py-32 text-slate-900 overflow-hidden">
      <div className="section-shell relative z-10">
        {/* Section Heading — Editorial Luxury Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-900">
              <IconSparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Curated Global Destinations</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Flagship Study Abroad <span className="text-orange-600">Portfolios</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Explore destinations chosen for affordability, high visa approval rates, post-study work permits, and options to study With or Without IELTS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/destinations"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-800 shadow-sm hover:border-orange-500 hover:text-orange-600 transition-all active:scale-95"
            >
              <span>Explore All 9+ Destinations</span>
              <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Bento Card 1: Cyprus (7 Columns — The Flagship) */}
          <div className="lg:col-span-7 group relative rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-950 p-2 border border-slate-800 shadow-xl text-white flex flex-col justify-between hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#161F33] to-[#0D1322] p-7 sm:p-9 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🇨🇾</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
                        Cyprus
                      </h3>
                      <span className="rounded-full bg-orange-500 text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Official Flagship
                      </span>
                    </div>
                    <span className="text-xs text-orange-300 font-semibold block mt-0.5">
                      European Island · Low Tuition · Without IELTS Available
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300 border border-white/10">
                  Visa Rate: 98%+
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Cyprus is UNI Consultants&apos; highest-volume European study destination. Combining tuition starting from just <strong>€2,500/year</strong>, Medium of Instruction (MOI) acceptance, affordable Mediterranean living costs, and up to 50% merit scholarships.
              </p>

              {/* Cyprus Interactive Tuition & Highlights Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Tuition Starts:</span>
                  <span className="font-display font-bold text-orange-400 text-sm mt-0.5 block">€2,500 / yr</span>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Language Test:</span>
                  <span className="font-display font-bold text-emerald-400 text-sm mt-0.5 block">Without IELTS ✓</span>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Study Gap:</span>
                  <span className="font-display font-bold text-slate-200 text-sm mt-0.5 block">Accepted (Justified)</span>
                </div>
                <div className="rounded-2xl bg-white/[0.04] p-3 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-medium">Intakes:</span>
                  <span className="font-display font-bold text-amber-300 text-sm mt-0.5 block">Spring, Fall, Summer</span>
                </div>
              </div>

              {/* Key Universities in Cyprus */}
              <div className="space-y-2 pt-1 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Top Affiliated Universities in Cyprus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cyprus.topUnis.slice(0, 4).map((u) => (
                    <span
                      key={u}
                      className="rounded-xl bg-white/[0.06] border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200"
                    >
                      🎓 {u}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/study-in-{$country}"
                  params={{ country: "cyprus" }}
                  className="btn-primary text-xs py-3 px-6 font-bold rounded-xl flex items-center gap-2 shadow-lg"
                >
                  <span>Explore Cyprus Admission Details</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello UNI Consultants! I want to apply for Cyprus university admissions (without IELTS/scholarship).")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Cyprus Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bento Card 2: United Kingdom (5 Columns) */}
          <div className="lg:col-span-5 group relative rounded-[2.5rem] bg-white p-2 border border-slate-200 shadow-md flex flex-col justify-between hover:border-orange-400 hover:shadow-xl transition-all duration-300">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-50 to-white p-7 sm:p-9 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🇬🇧</span>
                  <div>
                    <h3 className="font-display text-2xl font-black text-slate-900">
                      United Kingdom
                    </h3>
                    <span className="text-xs text-orange-600 font-bold block">
                      London Liaison Office Support
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 text-xs font-bold">
                  2-Yr PSW
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Fast-track <strong>1-Year Master&apos;s degrees</strong> and 3-Year Bachelor&apos;s across premier UK institutions. Benefit from guaranteed 2-Year Post-Study Work Visa (Graduate Route), spouse visa allowances, and direct welfare support from our London Liaison Office on Romford Road.
              </p>

              <div className="space-y-2 rounded-2xl bg-slate-100/80 p-4 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Degree Duration:</span>
                  <strong>1 Year (Masters) · 3 Years (Bachelors)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Post-Study Visa:</span>
                  <strong className="text-emerald-700">2 Full Years Graduate Route</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">London Office:</span>
                  <strong className="text-slate-900">Citygate Centre, Romford Road</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Scholarships:</span>
                  <strong className="text-orange-600">Up to £1,500 – £5,000 Bursaries</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <Link
                  to="/study-in-{$country}"
                  params={{ country: "uk" }}
                  className="btn-primary w-full text-center text-xs py-3 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>UK Admission Guide</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello UNI Consultants! I want to apply for UK 1-Year Masters / 2-Year PSW.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-300 bg-white py-3 px-4 text-center text-xs font-bold text-slate-800 hover:border-orange-500 transition-colors flex items-center justify-center gap-1.5"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp UK Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Malaysia (4 Columns) */}
          <div className="lg:col-span-4 rounded-[2rem] bg-white p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇲🇾</span>
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold">
                  Fast EMGS Visa
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Malaysia International Hub
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Dual British and Australian degrees (Nottingham, Monash, Taylor&apos;s) at 70% lower tuition and living costs. Safe, multicultural Muslim-friendly environment.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Tuition:</strong> $3,500 – $6,500 / year</p>
                <p>• <strong>Language:</strong> Medium of Instruction (MOI) Accepted</p>
                <p>• <strong>Processing:</strong> Fast online EMGS student pass</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "malaysia" }}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center justify-between"
              >
                <span>View Malaysian Campuses</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Bento Card 4: Malta (4 Columns) */}
          <div className="lg:col-span-4 rounded-[2rem] bg-white p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇲🇹</span>
                <span className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 text-[10px] font-bold">
                  Schengen Member
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Malta Schengen Island
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                English-speaking EU island nation. 20 hours/week legal student work rights and visa-free travel across all 29 Schengen European countries.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Language:</strong> English is an official language</p>
                <p>• <strong>Work Rights:</strong> 20 hours / week permitted</p>
                <p>• <strong>Travel:</strong> 29 Schengen countries access</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/study-in-{$country}"
                params={{ country: "malta" }}
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center justify-between"
              >
                <span>View Malta Schengen Pathways</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Bento Card 5: Finland & Global Commonwealth (4 Columns) */}
          <div className="lg:col-span-4 rounded-[2rem] bg-white p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇫🇮 🇦🇺 🇨🇦</span>
                <span className="rounded-full bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-0.5 text-[10px] font-bold">
                  High-Tech / PR
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Finland, Australia & Canada
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Finland offers 30 hrs/week work rights and 2-year post-study permits. Full advisory for Australia and Canada university admissions and visa filing.
              </p>
              <div className="rounded-xl bg-slate-50 p-3 text-xs space-y-1 text-slate-700 border border-slate-100">
                <p>• <strong>Finland:</strong> 30 hrs/wk work + 2-Yr Post-Study Visa</p>
                <p>• <strong>Australia & Canada:</strong> High-demand STEM programs</p>
                <p>• <strong>Advisory:</strong> 100% genuine profile verification</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <Link
                to="/destinations"
                className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center justify-between"
              >
                <span>View All Global Destinations</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
