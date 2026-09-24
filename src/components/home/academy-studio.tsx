import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { courses, company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function AcademyStudio() {
  const { open } = useRegisterModal();
  const [activeCourseIdx, setActiveCourseIdx] = useState(0);

  const currentCourse = courses[activeCourseIdx] || courses[0]!;

  return (
    <section className="relative bg-[#070B16] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Animated Soft Glow Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-10 left-10 h-[450px] w-[450px] rounded-full bg-orange-600/15 blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="pointer-events-none absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-amber-600/15 blur-[140px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/15 px-3.5 py-1 text-xs font-bold text-orange-400 backdrop-blur-md"
            >
              <IconSparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Language & Fluency Studio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
            >
              UNI Language <span className="text-orange-400">Academy</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed"
            >
              Target Band 7.5+ in IELTS, conquer foreign embassy visa interviews, and empower young minds with interactive English phonics at our Dhaka classrooms.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:border-orange-500 transition-all active:scale-95"
            >
              <span>View All Academy Courses</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Double-Bezel Studio Architecture */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-white/10 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0A1020]/95 border border-white/10 p-4 sm:p-7 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            {/* Interactive Course Selection Tabs with Framer Motion layoutId */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 pb-6 sm:pb-8 border-b border-white/10">
              {courses.map((c, idx) => {
                const active = activeCourseIdx === idx;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setActiveCourseIdx(idx)}
                    className={`relative p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      active
                        ? "border-orange-500/80 text-white shadow-md ring-1 ring-orange-500/40"
                        : "bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeAcademyTab"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/25 to-amber-500/15"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl sm:text-2xl">{c.icon || "🎓"}</span>
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-orange-300">
                          {c.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-white leading-snug line-clamp-1">
                        {c.title}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-1">
                        {c.duration}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Course Deep Dive with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCourse.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start"
              >
                {/* Left: Overview, Schedule & Highlights */}
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{currentCourse.icon || "🎓"}</span>
                      <h3 className="font-display text-xl sm:text-3xl font-black text-white">
                        {currentCourse.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-orange-300 mt-1">
                      {currentCourse.subtitle || currentCourse.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 sm:mt-3 leading-relaxed font-medium">
                      {currentCourse.description || currentCourse.desc}
                    </p>
                  </div>

                  {/* Course Quick Facts Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="rounded-xl bg-white/[0.04] p-2.5 sm:p-3 border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Duration:</span>
                      <strong className="text-white block mt-0.5 text-xs sm:text-sm">{currentCourse.duration}</strong>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-2.5 sm:p-3 border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Classes:</span>
                      <strong className="text-orange-400 block mt-0.5 text-xs sm:text-sm">{currentCourse.classesCount}</strong>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-2.5 sm:p-3 border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Mock Tests:</span>
                      <strong className="text-emerald-400 block mt-0.5 text-xs sm:text-sm">{currentCourse.mockTests.split(" ")[0]} Tests</strong>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-2.5 sm:p-3 border border-white/10">
                      <span className="text-[10px] text-slate-400 block">Batch Size:</span>
                      <strong className="text-amber-300 block mt-0.5 text-xs sm:text-sm">{currentCourse.batchSize.split(" ")[1] || "12"} Seats</strong>
                    </div>
                  </div>

                  {/* Key Course Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Features & Learning Inclusions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {(currentCourse.highlights ?? currentCourse.features ?? []).slice(0, 4).map((h) => (
                        <div key={h} className="flex items-start gap-2 rounded-xl bg-white/[0.03] p-2.5 border border-white/5 text-slate-300">
                          <IconCheck className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enrollment Actions */}
                  <div className="pt-2 flex flex-col xs:flex-row gap-2.5">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      onClick={open}
                      className="btn-primary text-xs py-3 px-5 font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>Book Free Assessment Class</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                        `Hello UNI Consultants! I want to enroll in the ${currentCourse.title} batch.`,
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inquire on WhatsApp</span>
                    </motion.a>
                  </div>
                </div>

                {/* Right: Modules & Syllabus Breakdown */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                      Curriculum Modules ({currentCourse.modules.length})
                    </h4>
                    <span className="text-xs text-orange-400 font-semibold">
                      Cambridge Aligned
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {currentCourse.modules.map((mod, i) => (
                      <div
                        key={mod.name}
                        className="rounded-xl bg-white/[0.04] p-3 border border-white/5 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">
                            Module {i + 1}: {mod.name}
                          </span>
                          <span className="text-[10px] text-slate-500">Core</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {mod.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-3 text-xs text-slate-300 space-y-1">
                    <span className="text-orange-300 font-bold block text-xs">
                      Class Format & Location:
                    </span>
                    <p className="text-[11px] leading-relaxed">
                      {currentCourse.classSchedule || currentCourse.schedule} · Classroom training at 92 Ali Bhaban (7th Fl), Dhaka & Live Online Zoom.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
