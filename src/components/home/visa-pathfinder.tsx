import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const educationLevels = [
  { id: "hsc", label: "HSC / A-Levels / High School", subtitle: "Undergraduate Abroad & Foundation Track" },
  { id: "bachelor", label: "Bachelor's / Honors / Degree", subtitle: "Master's & Post-Study Work Visa (PSW)" },
  {
    id: "masters",
    label: "Master's / Working Professional",
    subtitle: "Postgraduate, Spouse & Family Relocation",
  },
];

const englishProficiency = [
  { id: "ielts", label: "IELTS (Academic & General)", badge: "Target Band 7.5+" },
  { id: "spoken", label: "Spoken English Fluency", badge: "Interview Mastery" },
  { id: "kids", label: "Kids' English Academy", badge: "Ages 6–14 & Phonics" },
  { id: "moi", label: "Without IELTS Options", badge: "Cyprus, Malaysia & Malta" },
];

const destinationPreferences = [
  {
    id: "cyprus",
    name: "Cyprus (Europe)",
    flag: "🇨🇾",
    tag: "Tuition from €2,500/Yr",
    partner: "Without IELTS Options",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tag: "1-Yr Masters & 2-Yr PSW",
    partner: "Top Rated Universities",
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    tag: "Affordable & Fast Visa",
    partner: "UK/Aus Dual Degrees",
  },
  {
    id: "malta",
    name: "Malta (Schengen)",
    flag: "🇲🇹",
    tag: "Schengen Country",
    partner: "Part-Time Work Rights",
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    tag: "Nordic Education",
    partner: "30 Hrs/Wk Work Rights",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    tag: "Spouse Work Rights",
    partner: "Subclass 500 Visa",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tag: "PGWP & PR Pathways",
    partner: "Top DLI Colleges",
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    tag: "3-Year STEM OPT",
    partner: "Merit Scholarships",
  },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("ielts");
  const [destination, setDestination] = useState("cyprus");

  // Dynamic computation logic based on official UNI Consultants verified pathways
  const getMatchData = () => {
    if (english === "kids") {
      return {
        matchScore: 100,
        title: "UNI Consultants Kids' English Academy (Ages 6–14)",
        headline: "Phonics, Interactive Storytelling & Confident Speaking for Children",
        timeline: "Weekend & After-School Batches at Dhaka HQ & Farmgate",
        scholarship: "Free Initial Linguistic Assessment & Demo Session",
        moiAccepted: "Joyful English immersion, British phonics pronunciation & vocabulary building",
        partnerNote:
          "Conducted at our modern campuses: 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue & Farmgate Branch with certified child educators.",
        actionType: "course",
      };
    }

    if (english === "spoken") {
      return {
        matchScore: 98,
        title: "Spoken English Fluency & Embassy Interview Mastery",
        headline: "Overcome Speaking Hesitation, Refine Accent & Pass Embassy Interviews",
        timeline: "2 to 3 Months Intensive Practical Drills",
        scholarship: "Free Fluency Level Evaluation & Presentation Clinics",
        moiAccepted: "Real-world conversations, professional presentation drills & visa mock interviews",
        partnerNote:
          "Small interactive batches at 92 Ali Bhaban HQ, Farmgate, and Habiganj designed for students, professionals, and visa applicants.",
        actionType: "course",
      };
    }

    if (destination === "cyprus") {
      return {
        matchScore: 100,
        title: "Cyprus Higher Education Pathway (With / Without IELTS)",
        headline: "Low Tuition Fees from €2,500/Year, Part-Time Work & High Visa Success Ratio",
        timeline: "Fall & Spring Intakes · Fast Offer Letter Issuance",
        scholarship: "Affordable Annual Tuition Starting from €2,500",
        moiAccepted: "Medium of Instruction (MOI) Accepted / Without IELTS Options Available",
        partnerNote:
          "Official banner flagship destination. Gap years and low CGPA accepted. Comprehensive visa file preparation with honesty and commitment.",
        actionType: "abroad",
      };
    }

    if (destination === "uk") {
      return {
        matchScore: 99,
        title: "United Kingdom — Top Universities & Fast-Track Degrees",
        headline: "1-Year Master's Degree & 2-Year Graduate Route Post-Study Work (PSW)",
        timeline: "Admission Open For Any Intake (Jan, May & Sept)",
        scholarship: "£1,500 – £4,000 University Merit Bursaries",
        moiAccepted: "IELTS 6.0–6.5 or MOI waivers in select degree pathways",
        partnerNote:
          "UNI Consultants provides end-to-end guidance for university applications, CAS issuance, and student visa filing.",
        actionType: "abroad",
      };
    }

    if (destination === "malaysia") {
      return {
        matchScore: 99,
        title: "Malaysia Higher Education & UK/Aus Twinning Programs",
        headline: "Affordable World-Class Degrees, Fast EMGS Visa & Safe Multicultural Environment",
        timeline: "Multiple Intakes Throughout the Year",
        scholarship: "Tuition Fees from $3,000 – $5,000 / year",
        moiAccepted: "Without IELTS / English Medium accepted in top private universities",
        partnerNote:
          "Complete EMGS tracking, offer letter processing, and pre-departure briefings by UNI Consultants experts.",
        actionType: "abroad",
      };
    }

    if (destination === "malta") {
      return {
        matchScore: 98,
        title: "Malta (Schengen) Higher Education & Career Opportunity",
        headline: "European Degree in an English-Speaking EU Nation with Part-Time Work Rights",
        timeline: "Spring & Autumn Primary Intakes",
        scholarship: "Competitive EU tuition structure with Schengen mobility access",
        moiAccepted: "English-taught programs with MOI or IELTS options",
        partnerNote:
          "Official visa filing and document verification processed via UNI Consultants Dhaka Headquarters.",
        actionType: "abroad",
      };
    }

    if (destination === "finland") {
      return {
        matchScore: 97,
        title: "Finland Nordic Higher Education Pathway",
        headline: "World-Class Education, 30 Hours/Week Work Rights & Post-Graduation Residence",
        timeline: "Autumn & Spring Joint Application Rounds",
        scholarship: "Early-bird and merit tuition discounts up to 50%",
        moiAccepted: "IELTS 6.0–6.5 / Duolingo / English Medium Certificate",
        partnerNote:
          "Full RP (Residence Permit) documentation, VFS appointment support, and pre-departure briefings.",
        actionType: "abroad",
      };
    }

    if (destination === "australia") {
      return {
        matchScore: 97,
        title: "Australia Master's & Post-Study Work Visa Track",
        headline: "Post-Study Work Visas up to 4+ Years & Subclass 500 Visa Processing",
        timeline: "February & July Primary Intakes",
        scholarship: "20% – 30% International Student Merit Reductions",
        moiAccepted: "IELTS 6.5+ / PTE Academic Accepted",
        partnerNote:
          "Subclass 500 visa filing, Genuine Student (GS) formulation, and joint family file processing by senior UNI Consultants counselors.",
        actionType: "abroad",
      };
    }

    if (destination === "canada") {
      return {
        matchScore: 96,
        title: "Canada DLI Colleges & Post-Graduation Work Permit (PGWP)",
        headline: "Designated Learning Institutions with Up to 3-Year PGWP & PR Pathways",
        timeline: "January, May & September Major Intakes",
        scholarship: "CAD $1,000 – $5,000 Entrance Bursaries",
        moiAccepted: "IELTS 6.0–6.5 / SDS Track Support",
        partnerNote:
          "Thorough SOP review, CAQ/PAL assistance, and study permit filing handled by senior counselors.",
        actionType: "abroad",
      };
    }

    if (destination === "usa") {
      return {
        matchScore: 96,
        title: "USA STEM Degree Programs & 3-Year OPT Work Rights",
        headline: "Top US Universities with High Merit Scholarships & F-1 Visa Prep",
        timeline: "Fall (August) & Spring (January) Intakes",
        scholarship: "$3,000 – $15,000 / year Institutional Merit Awards",
        moiAccepted: "IELTS 6.5+ / Duolingo / GRE waivers available",
        partnerNote:
          "Rigorous F-1 visa interview training and DS-160 document verification at 92 Ali Bhaban HQ.",
        actionType: "abroad",
      };
    }

    return {
      matchScore: 99,
      title: "UNI Consultants IELTS Preparation Academy (Band 7.5+)",
      headline: "Master Listening, Reading, Writing & Speaking with Cambridge Materials",
      timeline: "2.5 to 3 Months Intensive Coaching",
      scholarship: "Complete Cambridge Test Practice & Weekly Mock Examinations",
      moiAccepted: "British Council & IDP Aligned Certified Instruction",
      partnerNote:
        "Taught at 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue & Farmgate Branch with 1-on-1 speaking interview simulations.",
      actionType: "course",
    };
  };

  const match = getMatchData();

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-xs font-bold text-[#0047ba] mb-3">
            <IconSparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Visa & Program Pathfinder</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0a1931] tracking-tight leading-tight">
            Find Your Ideal <span className="text-[#0047ba]">Study & Visa Pathway</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
            Select your background and destination to calculate your match ratio, admission timeline, and Free Bank Support eligibility.
          </p>
          <p className="text-xs text-slate-400 font-bangla mt-1">
            আপনার শিক্ষাগত যোগ্যতা ও পছন্দের দেশ নির্বাচন করে তাৎক্ষণিকভাবে সঠিক ভর্তি ও ভিসা গাইডলাইন জানুন।
          </p>
        </div>

        {/* 2-Column Pathfinder Architecture */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start max-w-5xl mx-auto">
          {/* Left: Interactive Selectors */}
          <div className="space-y-5">
            {/* 1. Academic Level */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-[#0047ba] block mb-3">
                1. Your Current Academic Qualification
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {educationLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setEduLevel(lvl.id)}
                    className={cn(
                      "rounded-2xl p-3.5 text-left border transition-all cursor-pointer active:scale-95",
                      eduLevel === lvl.id
                        ? "border-[#0047ba] bg-blue-50/70 shadow-xs ring-1 ring-blue-500 font-bold"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div className="font-bold text-xs text-slate-900">{lvl.label}</div>
                    <div className="text-[0.68rem] text-slate-500 mt-0.5">{lvl.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Language Status */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-[#0047ba] block mb-3">
                2. Target Program / Language Status
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {englishProficiency.map((eng) => (
                  <button
                    key={eng.id}
                    type="button"
                    onClick={() => setEnglish(eng.id)}
                    className={cn(
                      "rounded-2xl p-3.5 text-left border transition-all cursor-pointer flex items-center justify-between active:scale-95",
                      english === eng.id
                        ? "border-[#0047ba] bg-blue-50/70 shadow-xs ring-1 ring-blue-500 font-bold"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div>
                      <div className="font-bold text-xs text-slate-900">{eng.label}</div>
                      <span className="inline-block mt-1 rounded bg-slate-100 px-2 py-0.5 text-[0.65rem] font-bold text-[#0047ba]">
                        {eng.badge}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Preferred Destination */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
              <span className="text-xs font-black uppercase tracking-wider text-[#0047ba] block mb-3">
                3. Preferred Study Destination (10+ Countries)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {destinationPreferences.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setDestination(dest.id)}
                    className={cn(
                      "rounded-2xl p-3 text-left border transition-all cursor-pointer active:scale-95",
                      destination === dest.id
                        ? "border-[#0047ba] bg-blue-50/70 shadow-xs ring-1 ring-blue-500 font-bold"
                        : "border-slate-200 hover:border-slate-300 bg-white",
                    )}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs text-slate-900">
                      <span>{dest.flag}</span>
                      <span className="truncate">{dest.name}</span>
                    </div>
                    <div className="text-[0.65rem] text-slate-500 mt-1 truncate">{dest.tag}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dynamic Match Assessment Card with AnimatePresence */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl border-2 border-blue-500/30 bg-gradient-to-br from-white via-blue-50/20 to-white p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
                <div>
                  <span className="text-[0.68rem] font-black uppercase tracking-widest text-[#0047ba] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    Official Pathway Match
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-black text-[#0a1931] mt-1.5">
                    {match.title}
                  </h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-display text-3xl font-black text-[#0047ba]">
                    {match.matchScore}%
                  </span>
                  <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest">
                    Match Confidence
                  </span>
                </div>
              </div>

              {/* Assessment Breakdown with Smooth Motion */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${eduLevel}-${english}-${destination}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <span className="text-slate-400 font-bold text-[0.7rem] uppercase tracking-wider block mb-0.5">
                      Primary Advantage:
                    </span>
                    <p className="font-bold text-slate-900 text-sm leading-snug">{match.headline}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-2xl bg-white border border-slate-100 p-3 shadow-2xs">
                      <span className="text-slate-400 text-[0.68rem] block mb-0.5 font-semibold">
                        Intake Timeline
                      </span>
                      <span className="font-bold text-slate-800 text-xs">{match.timeline}</span>
                    </div>

                    <div className="rounded-2xl bg-white border border-slate-100 p-3 shadow-2xs">
                      <span className="text-slate-400 text-[0.68rem] block mb-0.5 font-semibold">
                        Tuition & Benefits
                      </span>
                      <span className="font-bold text-[#0047ba] text-xs">{match.scholarship}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-blue-50/70 border border-blue-200 p-3.5">
                    <span className="text-[#0047ba] font-bold block mb-1">
                      Language & Solvency Requirements:
                    </span>
                    <span className="text-slate-700 font-medium">{match.moiAccepted}</span>
                  </div>

                  <p className="text-slate-600 font-medium text-[0.75rem] leading-relaxed italic">
                    &quot;{match.partnerNote}&quot;
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={open}
                  className="w-full rounded-xl bg-[#0047ba] hover:bg-blue-700 text-white py-3.5 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Evaluation for This Pathway</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </motion.button>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Hello ${company.name}! My calculated pathway is ${match.title} with ${match.matchScore}% match. Please guide me on next admission intakes, With / Without IELTS options, and consultation at your Dhaka office.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-xl border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 py-3 text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Discuss With Counselor on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
