import { useState } from "react";
import { company } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function VideoReelsCinema() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  const videos = company.featuredReels;
  const currentVideo = videos[activeVideoIdx] || videos[0]!;

  return (
    <section className="relative bg-[#060A13] py-16 sm:py-24 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Animated Ambient Theater Lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-orange-600/15 blur-[160px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]"
      />

      <div className="section-shell relative z-10 px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/15 px-3.5 py-1 text-xs font-bold text-orange-400 mb-3 backdrop-blur-md"
          >
            <IconSparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Official Video Proof & Reels</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-2xl xs:text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            See Real Results. Hear Real Students.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2.5 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed"
          >
            Verified Facebook video broadcasts from our Dhaka headquarters. Real students holding their study visas, passports, and university CAS letters.
          </motion.p>
        </div>

        {/* Cinema Stage Container — Double-Bezel Architecture */}
        <div className="rounded-[1.75rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 sm:p-3 border border-white/10 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
          <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-[#0A1020]/95 border border-white/10 p-4 sm:p-7 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
              {/* Left: Active Featured Video Player with Framer Motion */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideo.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-full overflow-hidden flex items-center justify-center bg-black ${
                        currentVideo.orientation === "portrait" ? "aspect-[9/16] max-h-[480px] sm:max-h-[580px] mx-auto" : "aspect-video"
                      }`}
                    >
                      <iframe
                        key={currentVideo.id}
                        src={currentVideo.embedSrc}
                        title={currentVideo.title}
                        width={currentVideo.width}
                        height={currentVideo.height}
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Video Meta Info */}
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 pt-1">
                  <div>
                    <span className="text-orange-400 text-xs font-bold block">{currentVideo.badge}</span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">{currentVideo.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-md">{currentVideo.desc}</p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello UNI Consultants! I watched your video "${currentVideo.title}" and want to consult on my admission.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-4 font-bold rounded-xl inline-flex items-center justify-center gap-2 shadow-sm shrink-0"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5" />
                    <span>WhatsApp Counselor</span>
                  </motion.a>
                </div>
              </div>

              {/* Right: Interactive Playlist Switcher */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Featured Broadcasts ({videos.length})
                  </span>
                  <a
                    href={company.social.facebookVideos}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-orange-400 font-bold hover:underline"
                  >
                    All Facebook Videos ↗
                  </a>
                </div>

                <div className="space-y-2.5">
                  {videos.map((vid, idx) => {
                    const active = activeVideoIdx === idx;
                    return (
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        key={vid.id}
                        type="button"
                        onClick={() => setActiveVideoIdx(idx)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3 sm:gap-4 ${
                          active
                            ? "bg-gradient-to-r from-orange-500/20 to-amber-500/10 border-orange-500/80 text-white ring-1 ring-orange-500/40 shadow-md"
                            : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm sm:text-base font-bold text-orange-400 border border-white/10">
                          {active ? "▶" : `0${idx + 1}`}
                        </span>

                        <div className="space-y-0.5 sm:space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] uppercase font-bold tracking-wider rounded-md bg-white/10 px-2 py-0.5 text-orange-300">
                              {vid.tag}
                            </span>
                            {active && (
                              <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Playing Now
                              </span>
                            )}
                          </div>
                          <h4 className="font-display text-xs sm:text-sm font-bold text-white leading-snug truncate sm:line-clamp-2">
                            {vid.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1 sm:line-clamp-2">
                            {vid.desc}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Assurance Box */}
                <div className="rounded-2xl bg-white/[0.04] p-3.5 sm:p-4 border border-white/10 space-y-1.5 text-xs">
                  <span className="text-amber-300 font-bold block">
                    ★ Real Student Visas Handover in Dhaka Office
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Watch our students receive their foreign embassy visas and university acceptance letters at our 92 Ali Bhaban Dhaka headquarters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
