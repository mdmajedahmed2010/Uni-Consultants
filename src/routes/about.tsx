import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
  StatsStrip,
} from "@/components/ui-blocks";
import { OfficeGallery } from "@/components/office-gallery";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About Us | ${company.name} — One Stop Solution for Study Abroad Education`,
      },
      {
        name: "description",
        content:
          `About ${company.name} (ইউআই কনসালট্যান্টস) — Honesty is Our Commitment. Your premier international education consultancy and language academy. Study in Cyprus, UK, Malaysia, Malta, Finland, Australia, Canada with or without IELTS. Dhaka Principal Office: 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka 1215.`,
      },
      {
        property: "og:title",
        content: `About ${company.name} — Higher Education Consultancy & Language Academy`,
      },
      {
        property: "og:description",
        content:
          `Official profile of ${company.name}. Honesty is Our Commitment. One stop solution to your journey of higher education across Cyprus, UK, Malaysia, Malta, and beyond.`,
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Global University Admissions Wing",
    hub: "Dhaka Principal HQ & Partner Network",
    badge: "Cyprus, UK & Global",
    icon: "🎓",
    desc: "Direct admissions and scholarship processing for accredited universities across Cyprus, United Kingdom, Malaysia, Malta, Finland, Australia, and Canada.",
  },
  {
    title: "UNI Language Academy",
    hub: "Dhaka & Regional Centers",
    badge: "IELTS & Spoken",
    icon: "🗣️",
    desc: "Targeted IELTS preparation (Band 7.5+), Spoken English Fluency & Embassy Interview Coaching, and specialized Kids English Academy (ages 6–14).",
  },
  {
    title: "Visa File Audit & Documentation Wing",
    hub: "Transparent Advisory Wing",
    badge: "Honest File Audit",
    icon: "🏦",
    desc: "Honest, transparent financial advice, university deposit guidance, and embassy visa dossier audit with honesty as our commitment.",
  },
  {
    title: "With / Without IELTS & Profile Desk",
    hub: "Special Solutions Desk",
    badge: "Gap & MOI Options",
    icon: "⚡",
    desc: "Tailored strategies for students with gap years, lower budgets (tuition from €2,500 in Cyprus), and admission without IELTS using Medium of Instruction (MOI).",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="UNI CONSULTANTS (ইউআই কনসালট্যান্টস)"
        subtitle="HONESTY IS OUR COMMITMENT. One stop solution for study abroad education. We empower ambitious students across Bangladesh with direct admissions, honest visa guidance, and language coaching."
        image="/banner.png"
        imageAlt="UNI Consultants official banner"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="card-clean rounded-3xl p-8 border border-slate-200/90 shadow-lg bg-white">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{company.name}</h3>
                <span className="inline-block rounded-full bg-orange-50 border border-orange-200 px-3 py-0.5 text-xs font-bold text-orange-800 mt-1">
                  Honesty is Our Commitment
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Brand</dt>
                <dd className="font-bold text-slate-900 text-right">{company.name} ({company.legalName})</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Principal Office (Dhaka)</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[260px]">
                  {company.branches[0].address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Philosophy</dt>
                <dd className="font-bold text-orange-600 text-right">
                  Honesty is Our Commitment (সততাই আমাদের অঙ্গীকার)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Flagship Destination</dt>
                <dd className="font-bold text-slate-800 text-right">
                  Cyprus (€2,500/yr tuition, Without IELTS) & UK (1-Yr Masters)
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Language Academy</dt>
                <dd className="font-bold text-orange-700 text-right">
                  IELTS • Spoken English • Kids English (6–14)
                </dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">
                  {company.phones[0]} / {company.phones[1]}
                </dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-orange-50/80 p-4 border border-orange-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Motto:</p>
              <p className="text-xs italic text-orange-950 font-bold">&quot;{company.tagline}&quot;</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-orange text-orange-700 bg-orange-50 border border-orange-200">Our Vision & Mission</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Connecting Bangladeshi Students with Global Universities with Absolute Honesty & Transparency
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              {company.name} (ইউআই কনসালট্যান্টস) বাংলাদেশের উচ্চশিক্ষাপ্রত্যাশী শিক্ষার্থীদের জন্য একটি নির্ভরযোগ্য ও বিশ্বস্ত পরামর্শক প্রতিষ্ঠান। সততা এবং স্বচ্ছতাকে প্রধান মূলধন করে আমরা শিক্ষার্থীদের স্বপ্ন বাস্তবায়নে কাজ করে যাচ্ছি।
            </p>
            <p className="text-sm leading-relaxed text-slate-600 font-bangla">
              আমাদের ৯২ আলী ভবন (৭ম তলা) হেড অফিস এবং ফার্মগেট ও হবিগঞ্জ শাখায় শিক্ষার্থীরা পাচ্ছেন সাইপ্রাস, যুক্তরাজ্য, মালয়েশিয়া, ফিনল্যান্ড ও মাল্টার শীর্ষ বিশ্ববিদ্যালয়ে ভর্তির সঠিক দিকনির্দেশনা, উইথ বা উইদাউট আইইএলটিএস উচ্চশিক্ষার পথ এবং অভিজ্ঞ ট্রেইনারদের পরিচালনায় ল্যাঙ্গুয়েজ কোচিং।
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🎯 Our Mission</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  সততা, স্বচ্ছতা এবং নির্ভরযোগ্য তথ্যের মাধ্যমে শিক্ষার্থীদের বিশ্বমানের বিশ্ববিদ্যালয়ে ভর্তি নিশ্চিত করা, সঠিক ভিসা গাইডলাইন দেওয়া এবং ইংরেজি ভাষা দক্ষতার পূর্ণ বিকাশ ঘটানো।
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">🔭 Our Vision</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-bangla">
                  বাংলাদেশের সর্বাধিক বিশ্বস্ত বৈদেশিক শিক্ষা পরামর্শক প্রতিষ্ঠান ও ল্যাঙ্গুয়েজ একাডেমি হিসেবে প্রতিটি শিক্ষার্থীর সফল ভবিষ্যৎ নির্মাণে পাশে থাকা।
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-orange-50/70 via-slate-50 to-amber-50/70 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-orange-800 mb-2">
                🌟 The Core {company.name} Pillars:
              </h4>
              <BulletList
                items={[
                  "HONESTY IS OUR COMMITMENT: প্রতিটি পরামর্শে শতভাগ স্বচ্ছতা ও নৈতিক দায়িত্ব পালন।",
                  "ONE STOP SOLUTION FOR STUDY ABROAD: আবেদন, অফার লেটার, ভিসা প্রসেস ও প্রি-ডিপার্চার সব এক ছাদের নিচে।",
                  "Study in Cyprus Flagship: মাত্র €২,৫০০/বছর থেকে টিউশন ফি, উইথ/উইদাউট আইইএলটিএস এবং নিশ্চিত ওয়ার্ক রাইটস।",
                  "Admission Open For Any Intake: যুক্তরাজ্য, মালয়েশিয়া, ফিনল্যান্ড ও মাল্টায় যেকোনো ইনটেকে ভর্তির সুযোগ।",
                  "UNI Language Academy: IELTS Academic & General (7.5+), স্পোকেন ইংলিশ ও ৬–১৪ বছর বয়সীদের কিডস একাডেমি।",
                  "4 Office Network: ঢাকা প্রিন্সিপাল অফিস, ফার্মগেট শাখা, হবিগঞ্জ শাখা এবং লন্ডনে অফিস।",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Presence Spotlight */}
      <section className="section-shell py-12 border-t border-slate-200">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 px-3 py-1 text-xs font-bold">
                Principal Headquarters
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Dhaka Principal Office (Ali Bhaban)
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-bangla">
                ৯২ আলী ভবন (৭ম তলা), কাজী নজরুল ইসলাম এভিনিউ, ঢাকা-১২১৫ এ সরাসরি এসে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের সাথে ফ্রি প্রোফাইল মূল্যায়ন করান।
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-orange-400">📍 Principal Head Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">
                    {company.branches[0].address}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">
                    📞 {company.phones[0]} (WhatsApp) · {company.phones[1]}
                  </p>
                  <p className="text-[0.75rem] text-slate-400 mt-0.5">
                    ✉️ {company.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-6">
              <div className="text-center space-y-3">
                <BrandLogo size={72} />
                <h4 className="font-display font-black text-xl text-white">
                  {company.name}
                </h4>
                <p className="text-xs text-orange-400 font-bold">
                  {company.tagline}
                </p>
                <p className="text-xs text-slate-400">
                  {company.branches[0].address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <StatsStrip />
      </section>

      {/* Operational Wings */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Specialized Divisions"
          title="Our Operational Divisions"
          subtitle="Dedicated wings for global admissions, language coaching, transparent financial audit, and interview readiness."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-orange-500 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-[0.68rem] px-2.5 py-0.5 font-bold">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-orange-700 mt-0.5">📍 {wing.hub}</p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">{wing.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-orange-600 hover:underline flex items-center justify-center gap-1.5"
                >
                  <span>Connect with Division →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Media & Office Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Our Offices"
          title="UNI Consultants Campuses"
          subtitle="Explore our Principal Headquarters and branch offices across Dhaka, Habiganj, and London."
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
