import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";

export function InteractiveMatcher() {
  const { open } = useRegisterModal();
  const [level, setLevel] = useState<string>("Master's / MBA");
  const [score, setScore] = useState<string>("GPA 4.0 – 4.9 / Second Class Upper");
  const [ielts, setIelts] = useState<string>("Without IELTS (MOI Accepted)");
  const [budget, setBudget] = useState<string>("Affordable (৳8L – ৳15L)");

  const matchedDestinations = useMemo(() => {
    return destinations
      .filter((d) => {
        // Without IELTS filter
        if (ielts === "Without IELTS (MOI Accepted)") {
          return d.withoutIelts;
        }
        // Low/Zero tuition budget matching
        if (budget === "Affordable (৳8L – ৳15L)") {
          if (["hungary", "malaysia", "dubai", "denmark", "finland", "uk"].includes(d.slug)) {
            return true;
          }
        }
        if (budget === "Premium (৳18L+)") {
          return ["uk", "usa", "australia", "canada", "finland", "denmark"].includes(d.slug);
        }
        return true;
      })
      .slice(0, 6);
  }, [budget, ielts]);

  const whatsappHref = () => {
    const text = `Hello ${company.name}! I used your Pathway & Eligibility Calculator.\n\nMy Profile:\n• Desired Level: ${level}\n• Academic Result: ${score}\n• English / Language Proficiency: ${ielts}\n• Tuition Budget: ${budget}\n\nMatched Destinations: ${matchedDestinations.map((m) => m.name).join(", ")}\n\nPlease schedule a free consultation with a ${company.name} counselor for me!`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="card-clean p-6 sm:p-10 border border-slate-200/90 shadow-md bg-white rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-uni-orange">
            <IconSparkles className="w-3.5 h-3.5 text-uni-orange" />
            <span>Interactive Tool · 100% Free Profile Assessment</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Study Abroad & Language <span className="text-uni-orange">Eligibility Calculator</span>
          </h2>
          <p className="mt-1 max-w-2xl text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select your academic degree level, GPA, English status, and
            budget to discover matched pathways across Cyprus, UK, Malaysia, Malta, Australia, Canada, USA, and Europe.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-bold text-white">
          Verified 2026/2027 Intakes
        </div>
      </div>

      {/* Profile Filters Matrix */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Degree Level */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            1. Desired Study Level
          </label>
          <div className="space-y-1.5">
            {[
              "Language School (Japan N5 / Germany A1)",
              "Bachelor's Degree",
              "Master's / MBA",
              "SSW & Skilled Work Permit",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setLevel(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  level === opt
                    ? "bg-slate-900 text-white shadow-sm border border-sky-500"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Academic Score */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            2. Academic GPA / CGPA
          </label>
          <div className="space-y-1.5">
            {[
              "GPA 5.0 / First Class",
              "GPA 4.0 – 4.9 / Second Class Upper",
              "GPA 3.0 – 3.9",
              "Study Gap 2–5+ Yrs (Japan Friendly)",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setScore(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  score === opt
                    ? "bg-slate-900 text-white shadow-sm border border-sky-500"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 3. English Test Status */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            3. Language Proficiency
          </label>
          <div className="space-y-1.5">
            {[
              "Without IELTS (Japan N5 / MOI Accepted)",
              "IELTS 6.5 – 7.5+",
              "German A1 Completed / In Progress",
              "Planning to Start Language Course",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setIelts(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  ielts === opt
                    ? "bg-slate-900 text-white shadow-sm border border-sky-500"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Budget Range */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            4. Tuition Budget / Year
          </label>
          <div className="space-y-1.5">
            {[
              "Low Cost / Tuition-Free Germany",
              "Affordable (৳8L – ৳15L)",
              "Moderate (৳15L – ৳22L)",
              "Premium (৳18L+)",
            ].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBudget(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  budget === opt
                    ? "bg-slate-900 text-white shadow-sm border border-sky-500"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matched Results */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Top Matched Destinations for Your Profile ({matchedDestinations.length}):
          </span>
          <span className="text-xs font-semibold text-emerald-700">
            100% Free Profile Assessment Available
          </span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {matchedDestinations.map((d) => (
            <div
              key={d.slug}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:bg-white hover:border-sky-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
                  <span className="text-xl">{d.flag}</span> {d.name}
                </span>
                <span className="rounded-full bg-sky-50 border border-sky-200 px-2 py-0.5 text-[0.62rem] font-bold text-sky-700">
                  {d.pswv}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {d.tagline}
              </p>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-200/60 text-[0.7rem]">
                <span className="font-semibold text-slate-700">
                  Intakes: {d.intakes.split("&")[0]}
                </span>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="font-bold text-sky-600 hover:underline flex items-center gap-1"
                >
                  <span>Explore</span>
                  <IconArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-6 text-white shadow-lg">
          <div>
            <p className="font-display text-sm sm:text-base font-bold text-white">
              Want a Free Profile & Study Abroad Assessment by {company.name} Advisors?
            </p>
            <p className="text-xs text-slate-300 mt-0.5">
              Visit our Principal Head Office at {company.address.full}, or connect with our counselors directly on WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={open} className="btn-primary text-xs py-2.5 px-5">
              Book Free Session
            </button>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs py-2.5 px-5"
            >
              <IconWhatsApp className="w-3.5 h-3.5 text-emerald-500" />
              <span>Send on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
