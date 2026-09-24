import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HeroShowcase } from "@/components/home/hero-showcase";
import { ProofAndCredentials } from "@/components/home/proof-and-credentials";
import { DestinationBento } from "@/components/home/destination-bento";
import { VideoReelsCinema } from "@/components/home/video-reels-cinema";
import { AcademyStudio } from "@/components/home/academy-studio";
import { OfficesHub } from "@/components/home/offices-hub";
import { HonestyManifesto } from "@/components/home/honesty-manifesto";
import { Testimonials } from "@/components/testimonials";
import { CtaBand, IconSparkles } from "@/components/ui-blocks";
import { faqs, company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${company.name} | Study Abroad Consultancy & Language Academy | Dhaka, Bangladesh`,
      },
      {
        name: "description",
        content:
          `${company.name} — One Stop Solution for Study Abroad Education. Honesty is Our Commitment. Study in Cyprus, UK, Malaysia, Malta, Finland, Australia, Canada with or without IELTS. Dhaka Principal Office: 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka 1215. Hotlines: +880 1335-065544, +880 1335-065540.`,
      },
      { property: "og:title", content: `${company.name} — Honesty is Our Commitment | Study Abroad & Language Academy` },
      {
        property: "og:description",
        content:
          "One Stop Solution for Study Abroad Education. Flagship admissions in Cyprus, UK, Malaysia, Malta with or without IELTS. Principal Office: 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka 1215.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeFaqCategory, setActiveFaqCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqCategories = [
    "All",
    "Cyprus & Europe",
    "With / Without IELTS",
    "UK & Global",
    "Language Academy",
    "Offices & Contact",
  ];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? faqs
      : faqs.filter((f) => {
          if (activeFaqCategory === "Cyprus & Europe")
            return (
              f.q.toLowerCase().includes("cyprus") ||
              f.a.toLowerCase().includes("cyprus") ||
              f.q.toLowerCase().includes("europe") ||
              f.a.toLowerCase().includes("europe") ||
              f.a.toLowerCase().includes("malta")
            );
          if (activeFaqCategory === "With / Without IELTS")
            return (
              f.q.toLowerCase().includes("ielts") ||
              f.a.toLowerCase().includes("without ielts") ||
              f.a.toLowerCase().includes("moi")
            );
          if (activeFaqCategory === "UK & Global")
            return (
              f.q.toLowerCase().includes("uk") ||
              f.a.toLowerCase().includes("uk") ||
              f.q.toLowerCase().includes("malaysia") ||
              f.a.toLowerCase().includes("malaysia")
            );
          if (activeFaqCategory === "Language Academy")
            return (
              f.q.toLowerCase().includes("academy") ||
              f.q.toLowerCase().includes("spoken") ||
              f.q.toLowerCase().includes("kids") ||
              f.a.toLowerCase().includes("speaking") ||
              f.a.toLowerCase().includes("ielts")
            );
          if (activeFaqCategory === "Offices & Contact")
            return (
              f.q.toLowerCase().includes("office") ||
              f.q.toLowerCase().includes("located") ||
              f.q.toLowerCase().includes("contact") ||
              f.a.toLowerCase().includes("bhaban") ||
              f.a.toLowerCase().includes("dhaka")
            );
          return true;
        });

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#070B16] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* 1. Grand Opening: Hero Showcase with Double-Bezel Concierge & Banner Lightbox */}
      <HeroShowcase />

      {/* 2. The Proof Stage: Real Metrics & Accredited Institutions */}
      <ProofAndCredentials />

      {/* 3. Asymmetrical Flagship Destination Bento Grid (Cyprus, UK, Malaysia, Malta, Global) */}
      <DestinationBento />

      {/* 4. The Facebook Video Reels Cinema Theater Mode */}
      <VideoReelsCinema />

      {/* 5. UNI Language Academy Interactive Learning Studio */}
      <AcademyStudio />

      {/* 6. Strategic Presence: 4 Physical Branches Spatial Switcher */}
      <OfficesHub />

      {/* 7. The Honesty Manifesto: Why Students Trust UNI Consultants */}
      <HonestyManifesto />

      {/* 8. Voice of Real Students: Testimonials */}
      <Testimonials />

      {/* 9. Minimalist Categorized FAQ Accordion with Animated Pill */}
      <section className="bg-[#0A1020] py-20 sm:py-28 border-t border-white/10 text-white">
        <div className="section-shell">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-3.5 py-1 text-xs font-bold text-orange-400 mb-2.5">
              <IconSparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Transparent Answers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked <span className="text-orange-400">Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
              Direct, transparent answers regarding admissions, With / Without IELTS pathways, tuition fees, and our branch offices.
            </p>
          </div>

          {/* FAQ Category Filter Pills with layoutId */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {faqCategories.map((cat) => {
              const isActive = activeFaqCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveFaqCategory(cat);
                    setOpenFaqIndex(0);
                  }}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-xs font-bold transition-colors cursor-pointer active:scale-95",
                    isActive ? "text-white" : "text-slate-400 hover:text-white bg-white/5 border border-white/10",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFaqPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Modern Clean Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-white/[0.06] border-orange-500 shadow-lg ring-1 ring-orange-500/30"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] transition-transform"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                        isOpen
                          ? "bg-orange-500 text-white rotate-180"
                          : "bg-white/10 text-slate-400",
                      )}
                    >
                      ↓
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <CtaBand />
    </div>
  );
}
