import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconWhatsApp, IconSparkles, IconCheck } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function HeroShowcase() {
  const { open } = useRegisterModal();
  const [selectedDest, setSelectedDest] = useState("cyprus");
  const [selectedIntake, setSelectedIntake] = useState("Spring 2026");
  const [selectedEnglish, setSelectedEnglish] = useState("Without IELTS (MOI)");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const matchedDestination = destinations.find((d) => d.slug === selectedDest) || destinations[0]!;

  const whatsappHref = () => {
    const text = `Hello ${company.name}!\n\nI want to check my admission eligibility:\n• Destination: ${matchedDestination.name}\n• Target Intake: ${selectedIntake}\n• English Proficiency: ${selectedEnglish}\n\nPlease connect me with a senior counselor for a free profile assessment.`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative overflow-hidden bg-[#070B16] text-white pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pb-32">
      {/* Cinematic Ambient Glow Spheres */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-gradient-to-b from-orange-500/20 via-amber-500/10 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 -right-20 h-[380px] w-[380px] rounded-full bg-orange-600/15 blur-[120px]" />

      {/* Subtle Architectural Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-shell relative z-10">
        {/* Eyebrow Pill — Double Bezel Hardware Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full p-1 pl-3.5 pr-2 bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
              ADMISSION OPEN FOR ANY INTAKE · WITH / WITHOUT IELTS
            </span>
            <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-extrabold text-orange-300 border border-orange-400/30">
              2026/27
            </span>
          </div>
        </motion.div>

        {/* Hero Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-center max-w-4xl mx-auto space-y-4"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.08] text-white">
            ONE STOP SOLUTION FOR{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              STUDY ABROAD
            </span>{" "}
            EDUCATION
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-amber-200/90 font-medium tracking-wide">
            &quot;{company.tagline}&quot; — <span className="font-bangla font-normal">{company.taglineBangla}</span>
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover verified foreign education pathways in <strong>Cyprus</strong> (from €2,500/yr), <strong>UK</strong> (1-Yr Masters & 2-Yr PSW), <strong>Malaysia</strong> (Dual UK/AUS degrees), and <strong>Malta</strong> (Schengen Europe). Direct counseling from our 4 physical offices in Dhaka, Farmgate, Habiganj, and London.
          </p>
        </motion.div>

        {/* Primary CTAs with Button-in-Button Trailing Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={open}
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 p-1.5 pl-6 pr-2 text-xs sm:text-sm font-bold text-white shadow-[0_12px_32px_rgba(243,112,33,0.35)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(243,112,33,0.5)] active:scale-[0.98] cursor-pointer"
          >
            <span>Book Free Expert Consultation</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
              <IconArrowRight className="w-4 h-4" />
            </span>
          </button>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] border border-white/15 px-6 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30 active:scale-[0.98]"
          >
            <IconWhatsApp className="w-4 h-4 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
            <span>Chat on WhatsApp: {company.phones[0]}</span>
          </a>
        </motion.div>

        {/* Double-Bezel Interactive Concierge & Verified Banner Stage */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16"
        >
          {/* Outer Shell Container */}
          <div className="rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-2 sm:p-3 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] backdrop-blur-2xl ring-1 ring-white/5">
            {/* Inner Core Container */}
            <div className="rounded-[2rem] bg-[#0A1020]/95 border border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
                {/* Left: Interactive Fast-Track Route Dispatcher */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-orange-400">
                      <IconSparkles className="w-3.5 h-3.5" />
                      <span>Instant Eligibility & Route Finder</span>
                    </div>
                    <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-black text-white">
                      Where Do You Want To Study?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                      Select your destination and profile to immediately see tuition, visa requirements, and direct intake opportunities.
                    </p>
                  </div>

                  {/* 1. Destination Country Switcher */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      1. Target Country / Destination
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { slug: "cyprus", name: "Cyprus 🇨🇾", badge: "Low Tuition" },
                        { slug: "uk", name: "United Kingdom 🇬🇧", badge: "1-Yr Masters" },
                        { slug: "malaysia", name: "Malaysia 🇲🇾", badge: "Dual Degree" },
                        { slug: "malta", name: "Malta 🇲🇹", badge: "Schengen Work" },
                      ].map((d) => {
                        const active = selectedDest === d.slug;
                        return (
                          <button
                            key={d.slug}
                            type="button"
                            onClick={() => setSelectedDest(d.slug)}
                            className={`p-3 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                              active
                                ? "bg-orange-500/20 border-orange-500/80 text-white ring-1 ring-orange-500/40 shadow-sm"
                                : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white"
                            }`}
                          >
                            <span className="block text-xs font-bold truncate">{d.name}</span>
                            <span className="block text-[10px] text-orange-300/90 font-medium mt-0.5">
                              {d.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Intake & English Status Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        2. Target Intake
                      </label>
                      <select
                        value={selectedIntake}
                        onChange={(e) => setSelectedIntake(e.target.value)}
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-xs font-bold text-white outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Spring 2026" className="bg-slate-900 text-white">Spring 2026 (Urgent Admission)</option>
                        <option value="Summer 2026" className="bg-slate-900 text-white">Summer 2026</option>
                        <option value="Fall 2026 / 2027" className="bg-slate-900 text-white">Fall 2026 / 2027 (Major Intake)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        3. Language Test Status
                      </label>
                      <select
                        value={selectedEnglish}
                        onChange={(e) => setSelectedEnglish(e.target.value)}
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-xs font-bold text-white outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="Without IELTS (MOI)" className="bg-slate-900 text-white">Without IELTS (Medium of Instruction)</option>
                        <option value="Have IELTS / Duolingo" className="bg-slate-900 text-white">Have IELTS / Duolingo Score</option>
                        <option value="Want to Join Language Academy" className="bg-slate-900 text-white">Want to Enroll in UNI Language Academy</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Country Preview Card */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{matchedDestination.flag}</span>
                        <span className="text-sm font-bold text-white">
                          Study in {matchedDestination.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5">
                        High Visa Success
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="rounded-xl bg-white/[0.03] p-2 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Avg. Tuition:</span>
                        <strong className="text-orange-400 block mt-0.5">{matchedDestination.avgTuition}</strong>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] p-2 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Work Rights / PSW:</span>
                        <strong className="text-slate-200 block mt-0.5 truncate">{matchedDestination.pswv}</strong>
                      </div>
                      <div className="rounded-xl bg-white/[0.03] p-2 border border-white/5">
                        <span className="text-[10px] text-slate-400 block">Without IELTS:</span>
                        <strong className="text-emerald-400 block mt-0.5">
                          {matchedDestination.withoutIelts ? "Available ✓" : "Standard"}
                        </strong>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-1">
                      <a
                        href={whatsappHref()}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary w-full text-center text-xs py-2.5 font-bold cursor-pointer rounded-xl flex items-center justify-center gap-2"
                      >
                        <IconWhatsApp className="w-3.5 h-3.5" />
                        <span>Apply / Check Eligibility on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Verified Success Banner Wall (Official Asset Spotlight) */}
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl">
                    <img
                      src="/banner.png"
                      alt="UNI Consultants verified student visa success banner"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                      onClick={() => setLightboxOpen(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-amber-300 font-bold block text-xs">
                          ★ Official Success Wall
                        </span>
                        <span className="text-[10px] text-slate-300">
                          30+ Real Student Visas · Click to view full banner
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setLightboxOpen(true)}
                        className="rounded-lg bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 text-[11px] font-bold backdrop-blur-md cursor-pointer transition-colors"
                      >
                        🔍 Enlarge
                      </button>
                    </div>
                  </div>

                  {/* 4 Pillars Under Banner */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-white/[0.04] p-3 border border-white/10 flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold text-[11px]">Honest Advisory</strong>
                        <span className="text-[10px] text-slate-300">No false promises, genuine files</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3 border border-white/10 flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-bold text-[11px]">4 Physical Branches</strong>
                        <span className="text-[10px] text-slate-300">Dhaka HQ, Farmgate, Habiganj, London</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Official Banner */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl p-2">
              <img
                src="/banner.png"
                alt="UNI Consultants official student success banner"
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain mx-auto"
              />
              <div className="p-3 text-center">
                <p className="text-sm font-bold text-white">
                  UNI Consultants — Official Student Success Banner
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  &quot;HONESTY IS OUR COMMITMENT&quot; · 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold hover:bg-white/40 cursor-pointer"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
