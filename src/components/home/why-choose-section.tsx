import { CountUp, MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function WhyChooseSection() {
  const features = [
    {
      icon: "🛡️",
      iconBg: "bg-orange-50 text-orange-700",
      value: 100,
      suffix: "%",
      label: "",
      metricColor: "text-[#f37021]",
      tag: "CORE PHILOSOPHY",
      title: "Honesty is Our Commitment",
      bengaliTitle: "সততাই আমাদের অঙ্গীকার",
      desc: "Transparent advisory with zero hidden charges. We evaluate student background honestly to provide realistic admission and visa pathways.",
      bengaliDesc: "কোনো প্রকার মিথ্যা আশ্বাস বা গোপন ফি ছাড়া শতভাগ সৎ ও বিশ্বস্ত উচ্চশিক্ষা কাউন্সেলিং।",
    },
    {
      icon: "📅",
      iconBg: "bg-amber-50 text-amber-700",
      value: 3,
      suffix: "+ Intakes",
      label: "",
      metricColor: "text-amber-600",
      tag: "FLEXIBLE ADMISSION",
      title: "Admission Open For Any Intake!!",
      bengaliTitle: "যে কোনো ইনটেকে ভর্তির সুযোগ!!",
      desc: "Apply for upcoming Spring, Summer, and Fall intakes across Cyprus, UK, Malaysia, Malta, and Europe with prompt offer letter issuance.",
      bengaliDesc: "বছরের যে কোনো ইনটেকে স্বল্প সময়ের মধ্যে অফার লেটার ও দ্রুত প্রসেসিং সুবিধা।",
    },
    {
      icon: "🌐",
      iconBg: "bg-blue-50 text-blue-700",
      value: 2,
      suffix: " Options",
      label: "",
      metricColor: "text-blue-600",
      tag: "INCLUSIVE ENTRY",
      title: "With / Without IELTS Options",
      bengaliTitle: "IELTS সহ বা IELTS ছাড়া আবেদনের সুযোগ",
      desc: "Direct admissions via Medium of Instruction (MOI), internal university language evaluations, and specialized IELTS coaching.",
      bengaliDesc: "আইইএলটিএস স্কোর ছাড়াই বিগত ডিগ্রির MOI দিয়ে বা আমাদের একাডেমিতে প্রস্তুতি নিয়ে ভর্তির পথ।",
    },
    {
      icon: "✈️",
      iconBg: "bg-emerald-50 text-emerald-700",
      value: 30,
      suffix: "+ Visas",
      label: "",
      metricColor: "text-emerald-600",
      tag: "PROVEN TRACK RECORD",
      title: "High Visa Success Rate",
      bengaliTitle: "সর্বোচ্চ ভিসা সাকসেস রেট",
      desc: "Over 30 verified student success stories in our official banner. Multi-tier file checking, financial scrutiny, and mock embassy interviews.",
      bengaliDesc: "আমাদের অফিসিয়াল ব্যানারে বাস্তব শিক্ষার্থীদের ভিসা প্রাপ্তির আনন্দই আমাদের কাজের সবচেয়ে বড় প্রমাণ।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Title with Framer Motion */}
        <MotionHeading
          tag="— WHY UNI CONSULTANTS (ইউআই কনসালট্যান্টস) —"
          title="Why Choose"
          highlight="UNI Consultants?"
          description="Honesty is our Commitment. Direct discussions with expert counselors, high visa success rate, and official banner representation for Cyprus, UK, Malaysia & Malta."
          tagColor="text-[#f37021]"
          highlightColor="text-[#f37021]"
        />

        {/* 4 Feature Cards Grid with Staggered Entrance & CountUp */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-7 text-center flex flex-col items-center hover:bg-white hover:border-[#f37021] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full">
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-xs ${f.iconBg}`}
                >
                  <span>{f.icon}</span>
                </div>

                {/* Animated Big Metric */}
                <div className="mb-1.5">
                  <span className={`text-3xl sm:text-4xl font-black font-display ${f.metricColor}`}>
                    <CountUp target={f.value} suffix={f.suffix} />
                  </span>
                </div>

                <span className="inline-block rounded-full bg-slate-200/70 px-3 py-0.5 text-[0.65rem] font-black uppercase tracking-wider text-slate-700 mb-3">
                  {f.tag}
                </span>

                <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0f172a] mb-1 leading-snug group-hover:text-[#f37021] transition-colors">
                  {f.title}
                </h3>

                <p className="text-[0.72rem] text-slate-500 font-bangla font-semibold mb-3">
                  {f.bengaliTitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-2">
                  {f.desc}
                </p>

                <p className="text-[0.68rem] text-slate-400 font-bangla font-medium leading-normal mt-auto pt-2 border-t border-slate-200/60 w-full">
                  {f.bengaliDesc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
