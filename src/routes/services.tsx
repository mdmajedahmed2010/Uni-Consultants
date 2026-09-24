import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  IconCheck,
  IconSparkles,
  IconWhatsApp,
} from "@/components/ui-blocks";
import { company, services, courses, processSteps } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: `Services & Language Academy | ${company.name} — Study Abroad, IELTS & Spoken English`,
      },
      {
        name: "description",
        content:
          `Explore ${company.name} services: Study Abroad Admissions (Cyprus, UK, Malaysia, Malta, Finland, Australia, Canada), With / Without IELTS Options, Tuition from €2,500/yr in Cyprus, IELTS Prep (7.5+), Spoken English Fluency & Kids English Academy. Dhaka HQ: 92, Ali Bhaban (7th Fl), Kazi Nazrul Islam Ave.`,
      },
      { property: "og:title", content: `Services & Language Academy | ${company.name}` },
      {
        property: "og:description",
        content:
          `Official services of ${company.name}. One Stop Solution for Study Abroad Education. Flagship admissions in Cyprus, UK, Malaysia, Malta, and premier Language Academy.`,
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "language-academy", label: "UNI Language Academy" },
  { id: "without-ielts", label: "With / Without IELTS" },
  { id: "visa-audit", label: "Visa File Audit & Support" },
];

const comparisonData = [
  {
    feature: "Core Brand Philosophy",
    uniConsultants: "HONESTY IS OUR COMMITMENT — 100% transparent counseling & fees",
    traditional: "Hidden charges, exaggerated promises, and uncertain outcomes",
    highlight: true,
  },
  {
    feature: "Flagship Study Destinations",
    uniConsultants: "Cyprus (Tuition from €2,500/yr), UK (1-Yr Masters), Malaysia, Malta & Finland",
    traditional: "Random, unvetted colleges with high rejection rates",
    highlight: true,
  },
  {
    feature: "With / Without IELTS Pathways",
    uniConsultants: "Legitimate Medium of Instruction (MOI), internal tests, and Without IELTS options",
    traditional: "Forces students into repeated exam cycles without viable alternative paths",
    highlight: true,
  },
  {
    feature: "In-House Language Academy",
    uniConsultants: "IELTS Academic & General (7.5+), Spoken English & Interview, Kids Academy (6–14)",
    traditional: "No in-house academy or completely outsourced without accountability",
    highlight: true,
  },
  {
    feature: "Physical Branch Network",
    uniConsultants: "4 Verified Offices: Dhaka Principal HQ, Farmgate, Habiganj & London UK",
    traditional: "Single unregistered room or virtual-only operations",
    highlight: true,
  },
  {
    feature: "Embassy Visa File Preparation",
    uniConsultants: "Transparent file auditing, genuine financial advice & 1-on-1 embassy mock drills",
    traditional: "Unverified paper vendors risking long-term embassy visa bans",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "Why is Cyprus considered a flagship destination at UNI Consultants?",
    a: "Cyprus offers high visa success rates, affordable annual tuition starting from only €2,500/year, Without IELTS admission options via MOI, and official legal student part-time work rights in Europe.",
  },
  {
    q: "Can I apply for higher studies abroad without IELTS?",
    a: "Yes! At UNI Consultants, we provide authentic pathways to study in Cyprus, Malaysia, Malta, and select UK/European institutions without IELTS using a Medium of Instruction (MOI) certificate from your previous university or college.",
  },
  {
    q: "What programs are taught at the UNI Language Academy?",
    a: "Our academy delivers intensive IELTS Preparation (Academic & General aiming for Band 7.5+), Spoken English Fluency & Embassy Visa Interview Coaching, and our specialized Kids English Academy for ages 6 to 14.",
  },
  {
    q: "What is UNI Consultants' policy regarding study gaps or low CGPA?",
    a: "We welcome students with study gaps and CGPA from 2.5+. By highlighting your authentic work experience, portfolio, and career objectives, we match you to accommodating universities across Cyprus, UK, Malaysia, and Europe.",
  },
  {
    q: "Where can I visit UNI Consultants in person?",
    a: "Our Principal Head Office is located at 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka 1215. We also welcome students at our Farmgate branch (RH Home Centre), Habiganj branch (Townhall Road), and UK liaison office in London.",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { open } = useRegisterModal();

  return (
    <>
      {/* 1. High-Impact Page Hero with Breadcrumbs */}
      <PageHero
        eyebrow="Foreign Education Advisory & Language Academy"
        title="ONE STOP SOLUTION FOR STUDY ABROAD EDUCATION"
        subtitle="UNI Consultants (ইউআই কনসালট্যান্টস) provides verified university admissions across Cyprus, UK, Malaysia, Malta, Finland, Australia, and Canada, alongside our premier IELTS, Spoken English & Kids Language Academy."
        image="/banner.png"
        imageAlt="UNI Consultants official banner"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl cursor-pointer font-bold"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4 text-white" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                `Hello ${company.name}! I would like to inquire about study abroad admissions, language academy training, and visa guidance.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900 font-bold"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {company.phones[0]}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. Service Category Filter Tabs */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[69px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="section-shell">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-[#0f172a] text-orange-400 shadow-md border border-orange-500/40"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Study Abroad & Advisory Services Grid */}
      {(activeCategory === "all" ||
        activeCategory === "study-abroad" ||
        activeCategory === "without-ielts" ||
        activeCategory === "visa-audit") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Honesty is Our Commitment</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Comprehensive Study Abroad <span className="text-orange-600">& Visa Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              আমাদের ৯২ আলী ভবন ঢাকা হেড অফিস এবং শাখা অফিসগুলোতে সরাসরি এসে অভিজ্ঞ সিনিয়র কাউন্সেলরদের সাথে বসুন। শতভাগ স্বচ্ছ ভর্তি ও ভিসা গাইডলাইন।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-orange-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.badge && (
                      <span className="rounded-full bg-orange-50 text-orange-800 border border-orange-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-bangla">{service.overview}</p>

                  <div className="pt-2 border-t border-slate-100">
                    <BulletList items={service.benefits} />
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">{service.intakeNote || "Admission Open"}</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-orange-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult Counselor</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Language Academy & IELTS / English Section */}
      {(activeCategory === "all" || activeCategory === "language-academy") && (
        <section className="section-shell py-16 border-t border-slate-200 bg-slate-50/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-800 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>UNI Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Premier English & Language <span className="text-orange-600">Training Programs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-bangla">
              আইইএলটিএস পরীক্ষায় কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন, স্পোকেন ইংলিশ ফ্লুয়েন্সি এবং শিশুদের ভাষার ভিত্তি মজবুত করার আধুনিক একাডেমি।
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md flex flex-col justify-between hover:border-orange-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2 rounded-2xl bg-orange-50 border border-orange-200/80">
                      {course.icon || "🎓"}
                    </span>
                    <span className="rounded-full bg-orange-100 text-orange-900 border border-orange-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-700 mt-0.5">{course.subtitle || course.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-bangla">{course.description || course.desc}</p>

                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3 text-[0.72rem] text-slate-700 border border-slate-200/70">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Duration:</span>
                      <strong className="text-slate-900">{course.duration}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Schedule:</span>
                      <strong className="text-slate-900">{course.classSchedule || course.schedule}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Format:</span>
                      <strong className="text-slate-900">{course.batchType || course.format}</strong>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Course Highlights:
                    </span>
                    <ul className="space-y-1 font-bangla">
                      {(course.highlights ?? course.features ?? []).slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-primary w-full text-xs py-2.5 justify-center shadow-md cursor-pointer font-bold"
                  >
                    <span>Enroll Now</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I want to enroll in the ${course.title} batch.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2 justify-center text-slate-900 font-bold"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Key Flagship Destinations Showcase */}
      {(activeCategory === "all" || activeCategory === "study-abroad") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0f172a] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Flagship Destinations (Verified from Brand Banner)
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                Top Study Pathways with {company.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Featured study destinations across Cyprus, Europe, UK, Malaysia, and North America with or without IELTS.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Cyprus (Europe)",
                  icon: "🇨🇾",
                  desc: "Flagship destination! Tuition fees from €2,500/year, Without IELTS options, fast admission offers, and student part-time work rights.",
                  badge: "Flagship Destination",
                },
                {
                  title: "United Kingdom",
                  icon: "🇬🇧",
                  desc: "1-year master's degrees, 2-year Graduate Route Post Study Work (PSW), and admissions open for Jan, May, and September intakes.",
                  badge: "Any Intake Open",
                },
                {
                  title: "Malaysia",
                  icon: "🇲🇾",
                  desc: "Affordable UK/Australian twinning dual degrees, fast EMGS visa processing, and budget-friendly living costs.",
                  badge: "Fast Visa & Budget",
                },
                {
                  title: "Malta (Schengen)",
                  icon: "🇲🇹",
                  desc: "English-speaking European Schengen country, competitive tuition fees, and part-time work rights during study.",
                  badge: "Schengen Country",
                },
                {
                  title: "Finland",
                  icon: "🇫🇮",
                  desc: "World-class Nordic education, 30 hours per week student work rights, and post-graduation residence permit.",
                  badge: "Nordic Quality",
                },
                {
                  title: "Australia",
                  icon: "🇦🇺",
                  desc: "Leading university network, post-study work rights up to 4+ years, spouse work rights, and Subclass 500 visa filing.",
                  badge: "High Visa Ratio",
                },
                {
                  title: "Canada",
                  icon: "🇨🇦",
                  desc: "Designated Learning Institutions (DLI), up to 3-year PGWP, and clear permanent residency (PR) pathways.",
                  badge: "PGWP & PR Track",
                },
                {
                  title: "United States",
                  icon: "🇺🇸",
                  desc: "Top institutions, up to 3 years STEM OPT work authorization, merit scholarships, and embassy interview coaching.",
                  badge: "STEM & OPT",
                },
                {
                  title: "Italy (Schengen)",
                  icon: "🇮🇹",
                  desc: "English-taught programs, regional scholarships, and full Schengen mobility throughout Europe.",
                  badge: "Regional Scholarships",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2.5 flex flex-col justify-between hover:border-orange-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded-full border border-orange-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-orange-400 hover:text-orange-300 text-left pt-2 border-t border-slate-800 cursor-pointer"
                  >
                    Check Eligibility →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Transparency Comparison Table */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Honesty & Transparency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Trust <span className="text-orange-600">{company.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our honest commitments, flagship Cyprus & UK options, and 4-branch network against ordinary consulting firms.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-orange-400 font-extrabold bg-[#0f172a]">
                    ★ {company.name}
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Ordinary Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "transition-colors hover:bg-slate-50",
                      row.highlight && "bg-orange-50/20",
                    )}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 bg-orange-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>{row.uniConsultants}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Step-by-Step Roadmap */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-800 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 5-Step Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Structured roadmap from free profile evaluation at our Dhaka Head Office (92 Ali Bhaban) to language training, admission offer, visa grant, and pre-departure briefing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-orange-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-orange-600">{step.step}</span>
                <span className="rounded-full bg-slate-100 text-slate-700 text-[0.68rem] font-bold px-2.5 py-0.5">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Service FAQs Accordion */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions on Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear, transparent answers about Cyprus admissions, With / Without IELTS options, Language Academy, and visa procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white border-orange-500 shadow-md ring-1 ring-orange-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-sm sm:text-base text-slate-900"
                >
                  <span>{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                      isOpen ? "bg-orange-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
                    )}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <CtaBand />
    </>
  );
}
