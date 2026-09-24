import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Zero Hidden Processing Fees",
    bengali: "কোনো গোপন বা অপ্রত্যাশিত চার্জ নেই",
    desc: "Every statutory tuition fee, embassy visa charge, and university deposit is declared transparently in writing before you sign any agreement.",
    icon: "💎",
  },
  {
    number: "02",
    title: "Transparent & Honest Counseling",
    bengali: "অবাস্তব প্রতিশ্রুতির পরিবর্তে শতভাগ সৎ পরামর্শ",
    desc: "We never sell false guarantees. Sovereign visa approvals are granted by foreign embassies; our commitment is meticulous, bulletproof file preparation that maximizes success.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Genuine Without-IELTS Pathways",
    bengali: "আইইএলটিএস ছাড়া ভর্তির সঠিক ও বৈধ পদ্ধতি",
    desc: "We work directly with foreign universities that officially recognize Medium of Instruction (MOI) certificates from Bangladeshi universities and colleges.",
    icon: "📜",
  },
  {
    number: "04",
    title: "Study Gap (Up to 10+ Years) Accepted",
    bengali: "দীর্ঘ স্টাডি গ্যাপের বাস্তবসম্মত সমাধান",
    desc: "Legitimate employment affidavits, professional career histories, and portfolio evidence to legally explain academic gaps for undergraduate and postgraduate applicants.",
    icon: "⏳",
  },
  {
    number: "05",
    title: "Direct London Liaison Office",
    bengali: "যুক্তরাজ্যের লন্ডন অফিসের সার্বক্ষণিক সহায়তা",
    desc: "Our Citygate Business Centre London office on Romford Road provides post-landing student support, BRP collection guidance, and emergency liaison in the UK.",
    icon: "🇬🇧",
  },
  {
    number: "06",
    title: "Integrated UNI Language Academy",
    bengali: "একই ছাদের নিচে আন্তর্জাতিক মানের ভাষা প্রশিক্ষণ",
    desc: "In-house Cambridge-aligned IELTS Academic (Target Band 7.5+), Spoken English, and Kids English courses taught by experienced instructors at our Dhaka classrooms.",
    icon: "🎓",
  },
];

export function HonestyManifesto() {
  const { open } = useRegisterModal();

  return (
    <section className="relative bg-[#070B16] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Background Radiance */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 border border-orange-500/30 px-4 py-1 text-xs font-bold text-orange-300 mb-3 backdrop-blur-md">
            <IconSparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>The UNI Consultants Difference</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            &quot;HONESTY IS OUR COMMITMENT&quot;
          </h2>
          <p className="mt-2 font-serif italic text-lg sm:text-xl text-amber-300 font-medium">
            সততাই আমাদের একমাত্র অঙ্গীকার ও মূল দর্শন
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 font-medium max-w-xl mx-auto leading-relaxed">
            In an industry often clouded by exaggerated promises, {company.name} stands apart through uncompromising transparency, authentic university admissions, and genuine student care.
          </p>
        </div>

        {/* 6 Pillars Double-Bezel Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className="group relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1.5 border border-white/10 shadow-lg hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="rounded-[1.35rem] bg-[#0A1020] p-6 sm:p-7 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-white/[0.05] border border-white/10">
                      {p.icon}
                    </span>
                    <span className="font-display text-sm font-black text-orange-400/80">
                      {p.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-300/90 font-bangla mt-0.5">
                      {p.bengali}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-3 flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                  <IconCheck className="w-3.5 h-3.5" />
                  <span>Verified Agency Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Action Strip */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-orange-500/20 border border-orange-500/30 p-8 sm:p-10 text-center max-w-4xl mx-auto space-y-4 shadow-2xl">
          <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
            Experience Honest Education Counseling Today
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Visit our Dhaka Principal Office at 92 Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, or message us on WhatsApp for a complete, cost-free profile assessment.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs py-3 px-7 font-bold rounded-xl shadow-lg cursor-pointer"
            >
              <span>Book In-Person Session</span>
              <span>→</span>
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${company.name}! I want to book a free assessment based on your "Honesty is Our Commitment" standard.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Hotline ({company.phones[0]})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
