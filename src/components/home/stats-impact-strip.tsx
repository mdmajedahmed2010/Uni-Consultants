import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";
import { motion } from "framer-motion";

export function StatsImpactStrip() {
  const stats = [
    {
      icon: "🎓",
      val: 30,
      suffix: "+",
      label: "Banner Success Stories",
      sublabelEn: "Verified Real Student Visas & CAS Letters",
      sublabelBn: "আমাদের অফিসিয়াল ব্যানারে প্রদর্শিত বাস্তব শিক্ষার্থী ও ভিসা সাফল্যের প্রমাণ",
    },
    {
      icon: "🌍",
      val: 4,
      suffix: " Nations",
      label: "Banner Flagship Destinations",
      sublabelEn: "Cyprus, UK, Malaysia & Malta Focus",
      sublabelBn: "সাইপ্রাস, ইউকে, মালয়েশিয়া ও মাল্টায় উচ্চশিক্ষার অগ্রাধিকারমূলক প্রসেসিং",
    },
    {
      icon: "🛡️",
      val: 100,
      suffix: "%",
      label: "Honesty in Commitment",
      sublabelEn: "Zero Hidden Costs & Direct Counseling",
      sublabelBn: "সততাই আমাদের অঙ্গীকার — কোনো গোপন ফি ছাড়া শতভাগ স্বচ্ছ পরামর্শ",
    },
    {
      icon: "🏢",
      val: 4,
      suffix: " Offices",
      label: "Strategic Branch Network",
      sublabelEn: "Dhaka (Principal), Farmgate, Habiganj & London",
      sublabelBn: "ঢাকা প্রধান কার্যালয়, ফার্মগেট, হবিগঞ্জ ও যুক্তরাজ্য লন্ডন লিয়াজোঁ অফিস",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0b1329] text-white overflow-hidden border-y border-orange-500/20">
      {/* Ambient Radial Lighting */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-72 w-[600px] rounded-full bg-orange-500/20 blur-[130px]"
      />

      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-block text-[0.7rem] sm:text-xs font-black uppercase tracking-[0.18em] text-[#fb923c] bg-orange-500/15 border border-orange-400/30 px-3.5 py-1 rounded-full mb-3">
            VERIFIED TRACK RECORD · HONESTY IS OUR COMMITMENT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
            From 92 Ali Bhaban, Dhaka <span className="text-[#f37021]">to Global Horizons</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
            One Stop Solution for Study Abroad Education · Admission Open For Any Intake!! With / Without IELTS.
          </p>
          <p className="text-xs text-slate-400 font-bangla mt-1">
            ৯২ আলী ভবন (৭ম তলা), কাজী নজরুল ইসলাম এভিনিউ, ঢাকা ১২১৫ — আপনার বিশ্বস্ত উচ্চশিক্ষা ও ভাষা একাডেমি।
          </p>
        </div>

        {/* 4 Massive Stat Counters Grid with Animated CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center group h-full">
              <div className="w-full h-full rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-orange-400/40 p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-1.5 shadow-lg">
                {/* Translucent Frosted Icon Box */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl mb-4 border border-white/15 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500/25 shadow-md">
                  <span>{stat.icon}</span>
                </div>

                {/* Animated Number */}
                <div className="font-display text-4xl sm:text-5xl font-black text-[#f37021] tracking-tight leading-none mb-2">
                  <CountUp value={stat.val} suffix={stat.suffix} duration={2} />
                </div>

                {/* Bold Primary Title */}
                <div className="text-sm sm:text-base font-extrabold text-slate-100 mb-1.5">
                  {stat.label}
                </div>

                {/* English Subtitle */}
                <div className="text-xs text-slate-300 font-semibold max-w-[240px] leading-snug mb-1">
                  {stat.sublabelEn}
                </div>

                {/* Bengali Clarification Subtitle */}
                <div className="text-[0.72rem] text-slate-400 font-bangla font-medium max-w-[240px] leading-tight mt-auto pt-2">
                  {stat.sublabelBn}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
