import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

export function HowItWorksSection() {
  const { open } = useRegisterModal();

  const steps = [
    {
      step: "01",
      stepColor: "bg-[#0f172a] text-orange-300 font-bold",
      icon: "🔍",
      iconBg: "bg-orange-50 text-orange-700",
      title: "Profile Assessment & Counseling",
      descEn: "Comprehensive evaluation of your academic qualifications, budget, and career goals at our Dhaka HQ or branch offices.",
      descBn: "আমাদের ৯২ আলী ভবন হেড অফিস বা ব্রাঞ্চে আপনার রেজাল্ট, বাজেট ও স্টাডি গ্যাপ মূল্যায়ন করে উপযুক্ত দেশ ও বিশ্ববিদ্যালয় নির্বাচন।",
    },
    {
      step: "02",
      stepColor: "bg-orange-600 text-white font-bold",
      icon: "📚",
      iconBg: "bg-amber-50 text-amber-700",
      title: "Language Academy & Interview Prep",
      descEn: "Master IELTS (Band 7.5+), Spoken English Fluency, or Embassy Interview Coaching with certified instructors.",
      descBn: "অভিজ্ঞ মেন্টরদের সাথে IELTS (7.5+), স্পোকেন ইংলিশ ফ্লুয়েন্সি কিংবা ভিসা ইন্টারভিউয়ের আধুনিক প্রস্তুতি।",
    },
    {
      step: "03",
      stepColor: "bg-[#0f172a] text-orange-300 font-bold",
      icon: "🏛️",
      iconBg: "bg-blue-50 text-[#0047ba]",
      title: "University Admission & Offer",
      descEn: "Confirmed offer letters for Cyprus, UK, Malaysia, Malta, and top global partner universities (With / Without IELTS).",
      descBn: "সাইপ্রাস, যুক্তরাজ্য, মালয়েশিয়া, ফিনল্যান্ড ও মাল্টার স্বনামধন্য বিশ্ববিদ্যালয় থেকে কনফার্মড অফার সংগ্রহ।",
    },
    {
      step: "04",
      stepColor: "bg-amber-500 text-slate-950 font-black",
      icon: "🏦",
      iconBg: "bg-amber-50 text-amber-800",
      title: "Visa Documentation & File Audit",
      descEn: "Transparent, honest document review, financial sponsorship audit, and Embassy file verification.",
      descBn: "সততার সাথে স্বচ্ছ ভিসা ফাইল প্রস্তুতকরণ ও নিখুঁত এম্বাসি ডকুমেন্ট অডিট।",
    },
    {
      step: "05",
      stepColor: "bg-emerald-600 text-white font-black",
      icon: "✈",
      iconBg: "bg-emerald-50 text-emerald-700",
      title: "Visa Grant & Pre-Departure",
      descEn: "1-on-1 embassy mock interview sessions, confirmed visa stamping, and complete pre-departure briefing.",
      descBn: "১-অন-১ এম্বাসি ইন্টারভিউ ট্রেনিং, সফল ভিসা স্ট্যাম্পিং এবং বিদেশযাত্রার সম্পূর্ণ দিকনির্দেশনা।",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAFAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— HONESTY IS OUR COMMITMENT —"
          title="How It"
          highlight="Works"
          description="From free profile evaluation at our Dhaka Headquarters (92 Ali Bhaban) to confirmed university admission and visa grant."
          tagColor="text-orange-600"
          highlightColor="text-orange-600"
        />

        {/* 5 Step Roadway Cards with Stagger Animation */}
        <div className="relative">
          {/* Subtle Horizontal Connector Bar on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 pointer-events-none z-0" />

          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10"
          >
            {steps.map((s) => (
              <StaggerItem key={s.step} className="h-full">
                <div className="relative rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/70 flex flex-col justify-between hover-lift group h-full">
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-xs shadow-md transition-transform duration-300 group-hover:scale-110 ${s.stepColor}`}
                  >
                    {s.step}
                  </div>

                  {/* Top Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${s.iconBg}`}
                  >
                    <span>{s.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-display text-sm sm:text-base font-extrabold text-[#0a1931] group-hover:text-orange-600 transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{s.descEn}</p>
                    <p className="text-[0.68rem] text-slate-400 font-bangla font-medium leading-relaxed pt-1 border-t border-slate-100">{s.descBn}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[0.68rem] text-slate-400 font-semibold">
                    <span>Step {s.step} (ধাপ {s.step})</span>
                    <span className="text-orange-600 font-bold group-hover:translate-x-1 transition-transform">
                      Next →
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={open}
            className="btn-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-xs sm:text-sm font-bold shadow-xl transition-all cursor-pointer active:scale-95"
          >
            <span>Start Your Higher Study Journey with {company.name}</span>
            <IconArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
