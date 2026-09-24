import { useState } from "react";
import { company } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";
import { motion, AnimatePresence } from "framer-motion";

export function VideoReelsSection({
  title = "Official Facebook Video Reels & Visa Success Stories",
  subtitle = "Watch real student visa celebrations, international admission briefings, and study abroad masterclasses directly from UNI Consultants Dhaka Principal Office.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const reels = company.featuredReels || [];
  const [activeFilter, setActiveFilter] = useState<"all" | "reel" | "masterclass">("all");

  if (!reels || reels.length === 0) return null;

  const portraitReel = reels.find((r) => r.orientation === "portrait") || reels[1];
  const landscapeReels = reels.filter((r) => r.orientation === "landscape");

  const filteredReels =
    activeFilter === "reel"
      ? [portraitReel]
      : activeFilter === "masterclass"
      ? landscapeReels
      : reels;

  return (
    <section className="section-shell py-12 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/90 px-4 py-1.5 text-xs font-bold text-[#f37021] mb-3 shadow-2xs">
          <IconSparkles className="w-3.5 h-3.5 text-[#f37021]" />
          <span>VERIFIED SOCIAL PROOF · DHAKA PRINCIPAL OFFICE</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
          {subtitle}
        </p>
        <p className="text-xs text-slate-500 font-bangla mt-1">
          সাইপ্রাস, ইউকে, মালয়েশিয়া ও মাল্টা ভিসা সাফল্য এবং সরাসরি অভিজ্ঞ কাউন্সেলরদের বাস্তব দিকনির্দেশনা দেখুন।
        </p>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 mt-5 flex-wrap">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#f37021] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Media ({reels.length})
          </button>
          <button
            onClick={() => setActiveFilter("reel")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFilter === "reel"
                ? "bg-[#f37021] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Vertical Reel (9:16)</span>
          </button>
          <button
            onClick={() => setActiveFilter("masterclass")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === "masterclass"
                ? "bg-[#f37021] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Widescreen Masterclasses ({landscapeReels.length})
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeFilter === "all" ? (
        <div className="space-y-6">
          {/* Desktop Layout (1024px+): 
              Left 4 cols = Vertical Reel in sleek phone mockup.
              Right 8 cols = 2 Widescreen Masterclasses side-by-side with 100% full-bleed 16:9 video.
          */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column (4 cols): The Vertical 9:16 Facebook Reel */}
            {portraitReel && (
              <div className="lg:col-span-4 flex flex-col h-full">
                <SlideIn direction="up" delay={0.1} className="flex flex-col h-full">
                  <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col justify-between h-full group hover:border-[#f37021] hover:shadow-[0_16px_40px_rgba(243,112,33,0.12)] transition-all duration-300">
                    {/* Header Badge */}
                    <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-gradient-to-r from-orange-50/70 to-slate-50">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.72rem] font-black bg-amber-100 text-amber-900 border border-amber-300/80 shadow-2xs">
                        {portraitReel.badge}
                      </span>
                      <span className="text-[0.65rem] font-black text-rose-600 uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-rose-100 shadow-2xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        <span>Reel (9:16)</span>
                      </span>
                    </div>

                    {/* Smartphone Mockup Frame: 9:16 video */}
                    <div className="p-4 flex items-center justify-center bg-slate-900">
                      <div className="w-full max-w-[230px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-black">
                        <iframe
                          src={portraitReel.embedSrc}
                          title={portraitReel.title}
                          width="100%"
                          height="100%"
                          style={{ border: "none", overflow: "hidden" }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Content & Actions */}
                    <div className="p-5 flex flex-col justify-between flex-1 gap-3 bg-white">
                      <div className="space-y-1.5">
                        <h3 className="font-display text-base font-extrabold text-[#0f172a] group-hover:text-[#f37021] transition-colors leading-snug">
                          {portraitReel.title}
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium line-clamp-2">
                          {portraitReel.desc}
                        </p>
                        {portraitReel.bengaliDesc && (
                          <p className="text-[0.72rem] text-slate-500 font-bangla leading-relaxed line-clamp-2">
                            {portraitReel.bengaliDesc}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={portraitReel.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f37021] hover:text-[#ea580c] transition-colors"
                        >
                          <span>Watch on Facebook</span>
                          <span className="text-[0.7rem]">↗</span>
                        </motion.a>

                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            `Hello UNI Consultants! I watched your video reel "${portraitReel.title}" on Facebook and would like details about university admissions and visa guidance.`,
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200/90 shadow-2xs"
                        >
                          <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              </div>
            )}

            {/* Right Column (8 cols): Two Widescreen 16:9 Masterclasses Side-by-Side */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 items-stretch">
              {landscapeReels.map((reel, idx) => (
                <SlideIn
                  key={reel.id}
                  direction="up"
                  delay={0.15 * (idx + 1)}
                  className="flex flex-col h-full"
                >
                  <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col justify-between h-full group hover:border-[#f37021] hover:shadow-[0_16px_40px_rgba(243,112,33,0.12)] transition-all duration-300">
                    {/* Header Badge */}
                    <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-slate-50/90">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[0.68rem] font-black bg-orange-50 text-[#ea580c] border border-orange-200">
                        {reel.badge}
                      </span>
                      <span className="text-[0.65rem] font-bold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                        16:9 HD
                      </span>
                    </div>

                    {/* 16:9 Video Player */}
                    <div className="w-full aspect-video bg-black overflow-hidden">
                      <iframe
                        src={reel.embedSrc}
                        title={reel.title}
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="w-full h-full"
                      />
                    </div>

                    {/* Content below the video */}
                    <div className="p-5 flex flex-col justify-between flex-1 gap-3 bg-white">
                      <div className="space-y-1.5">
                        <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0f172a] group-hover:text-[#f37021] transition-colors line-clamp-2 leading-snug">
                          {reel.title}
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed line-clamp-2 font-medium">
                          {reel.desc}
                        </p>
                        {reel.bengaliDesc && (
                          <p className="text-[0.72rem] text-slate-500 font-bangla leading-relaxed line-clamp-2">
                            {reel.bengaliDesc}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={reel.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f37021] hover:text-[#ea580c] transition-colors"
                        >
                          <span>Watch on Facebook</span>
                          <span className="text-[0.7rem]">↗</span>
                        </motion.a>

                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            `Hello UNI Consultants! I watched your video "${reel.title}" and would like admission guidance.`,
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200/90 shadow-2xs"
                        >
                          <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet View (< 1024px): Stacked cards */}
          <div className="lg:hidden flex flex-col gap-6">
            {reels.map((reel, idx) => {
              const isPortrait = reel.orientation === "portrait";

              return (
                <SlideIn key={reel.id} direction="up" delay={idx * 0.1}>
                  <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col group hover:border-[#f37021] transition-all">
                    {/* Header Badge */}
                    <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-slate-50/90">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.72rem] font-black bg-amber-50 text-amber-900 border border-amber-200">
                        {reel.badge}
                      </span>
                      <span className="text-[0.65rem] font-black text-[#f37021] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-orange-100 shadow-2xs flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${isPortrait ? "bg-rose-500 animate-pulse" : "bg-[#f37021]"}`} />
                        <span>{isPortrait ? "Vertical Reel (9:16)" : "Masterclass (16:9)"}</span>
                      </span>
                    </div>

                    {/* Sized container */}
                    <div className="bg-slate-950 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
                      <div
                        className={
                          isPortrait
                            ? "w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-slate-800"
                            : "w-full aspect-video rounded-xl overflow-hidden"
                        }
                      >
                        <iframe
                          src={reel.embedSrc}
                          title={reel.title}
                          width="100%"
                          height="100%"
                          style={{ border: "none", overflow: "hidden" }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col gap-3 bg-white">
                      <div className="space-y-1.5">
                        <h3 className="font-display text-base font-extrabold text-[#0f172a] leading-snug">
                          {reel.title}
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                          {reel.desc}
                        </p>
                        {reel.bengaliDesc && (
                          <p className="text-[0.72rem] text-slate-500 font-bangla leading-relaxed">
                            {reel.bengaliDesc}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={reel.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f37021] hover:text-[#ea580c]"
                        >
                          <span>Watch on Facebook</span>
                          <span className="text-[0.7rem]">↗</span>
                        </motion.a>

                        <motion.a
                          whileTap={{ scale: 0.96 }}
                          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                            `Hello UNI Consultants! I watched your video reel "${reel.title}" on Facebook and would like more details.`,
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200/90 shadow-2xs"
                        >
                          <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              );
            })}
          </div>
        </div>
      ) : (
        /* Filtered Grid View */
        <div
          className={`grid gap-6 ${
            filteredReels.length === 1
              ? "max-w-md mx-auto"
              : "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel) => {
              const isPortrait = reel.orientation === "portrait";

              return (
                <motion.div
                  key={reel.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col group hover:border-[#f37021] hover:shadow-[0_16px_40px_rgba(243,112,33,0.12)] transition-all duration-300"
                >
                  <div className="p-4 pb-3 border-b border-slate-100 flex items-center justify-between gap-2 bg-slate-50/90">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.72rem] font-black bg-amber-50 text-amber-900 border border-amber-200">
                      {reel.badge}
                    </span>
                    <span className="text-[0.65rem] font-black text-[#f37021] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-orange-100 shadow-2xs">
                      {isPortrait ? "Vertical Reel (9:16)" : "Masterclass (16:9)"}
                    </span>
                  </div>

                  <div className="bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                    <div
                      className={
                        isPortrait
                          ? "w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-slate-800"
                          : "w-full aspect-video rounded-xl overflow-hidden"
                      }
                    >
                      <iframe
                        src={reel.embedSrc}
                        title={reel.title}
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 gap-3 bg-white">
                    <div className="space-y-1.5">
                      <h3 className="font-display text-base font-extrabold text-[#0f172a] group-hover:text-[#f37021] transition-colors leading-snug">
                        {reel.title}
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {reel.desc}
                      </p>
                      {reel.bengaliDesc && (
                        <p className="text-[0.72rem] text-slate-500 font-bangla leading-relaxed">
                          {reel.bengaliDesc}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href={reel.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f37021] hover:text-[#ea580c]"
                      >
                        <span>Watch on Facebook</span>
                        <span className="text-[0.7rem]">↗</span>
                      </motion.a>

                      <motion.a
                        whileTap={{ scale: 0.96 }}
                        href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                          `Hello UNI Consultants! I watched your video "${reel.title}" on Facebook and would like details.`,
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200/90 shadow-2xs"
                      >
                        <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Inquiry</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
