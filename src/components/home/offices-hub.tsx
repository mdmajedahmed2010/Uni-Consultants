import { useState } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconPhone, IconWhatsApp, IconArrowRight } from "@/components/ui-blocks";
import { motion, AnimatePresence } from "framer-motion";

export function OfficesHub() {
  const { open } = useRegisterModal();
  const [activeBranchIdx, setActiveBranchIdx] = useState(0);

  const branches = company.branches;
  const currentBranch = branches[activeBranchIdx] || branches[0]!;

  return (
    <section className="relative bg-[#FAFAF8] py-20 sm:py-28 lg:py-32 text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="section-shell relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-900 mb-3">
            <IconSparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>4 Physical Office Locations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Meet Our Senior Counselors In Person
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Visit any of our fully staffed offices across Dhaka, Sylhet region, or our UK liaison office for transparent profile evaluations and document verification.
          </p>
        </div>

        {/* 4 Branch Selector Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {branches.map((b, idx) => {
            const active = activeBranchIdx === idx;
            return (
              <button
                key={b.name}
                type="button"
                onClick={() => setActiveBranchIdx(idx)}
                className={`p-4 sm:p-5 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  active
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.02]"
                    : "bg-white border-slate-200 text-slate-800 hover:border-orange-400 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        active
                          ? "bg-orange-500 text-white"
                          : "bg-orange-50 text-orange-700 border border-orange-200"
                      }`}
                    >
                      {b.tag}
                    </span>
                    <span className="text-xs font-bold">{b.city}</span>
                  </div>
                  <h3
                    className={`font-display text-sm sm:text-base font-bold leading-snug ${
                      active ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {b.name}
                  </h3>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-medium flex items-center justify-between ${
                    active ? "border-slate-800 text-slate-300" : "border-slate-100 text-slate-500"
                  }`}
                >
                  <span className="truncate">{b.short}</span>
                  <span>{active ? "●" : "→"}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Branch Interactive Stage — Double-Bezel Architecture */}
        <div className="rounded-[2.5rem] bg-gradient-to-b from-slate-200/60 to-slate-100/40 p-2 sm:p-3 border border-slate-200 shadow-xl">
          <div className="rounded-[2rem] bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
              {/* Left: Office Information, Hotlines & Booking */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-orange-500 text-white px-3 py-1 text-xs font-bold">
                      {currentBranch.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{currentBranch.city}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-black text-slate-900">
                    {currentBranch.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                    📍 {currentBranch.full || currentBranch.address}
                  </p>
                </div>

                {/* Branch Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                    <span className="text-slate-500 block text-[11px] font-medium">Visiting & Counseling Hours:</span>
                    <strong className="text-slate-900 block mt-1">{currentBranch.hours}</strong>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                    <span className="text-slate-500 block text-[11px] font-medium">Direct Office Hotline:</span>
                    <a
                      href={`tel:${currentBranch.phone.replace(/[^0-9]/g, "")}`}
                      className="font-bold text-orange-600 block mt-1 hover:underline text-sm"
                    >
                      {currentBranch.phone}
                    </a>
                  </div>
                </div>

                {/* Consultation Commitment */}
                <div className="rounded-2xl bg-orange-50/50 border border-orange-200/80 p-4 text-xs text-slate-700 space-y-1">
                  <span className="text-orange-900 font-bold block text-xs">
                    Free 1-on-1 Profile Assessment Guaranteed:
                  </span>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Bring your academic certificates, transcripts, and passport. Our senior counselors will perform an instant eligibility audit for Cyprus, UK, Malaysia, Malta, and wider destinations.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-primary text-xs py-3 px-6 font-bold rounded-xl flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Schedule In-Person Appointment</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello ${company.name}! I would like to visit your ${currentBranch.name} at ${currentBranch.address}.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-300 px-5 py-3 text-xs font-bold text-slate-800 hover:bg-slate-200 transition-colors"
                  >
                    <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <a
                    href={currentBranch.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors"
                  >
                    <span>Open in Maps ↗</span>
                  </a>
                </div>
              </div>

              {/* Right: Embedded Interactive Map */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md aspect-video sm:aspect-[4/3] w-full bg-slate-100">
                <iframe
                  key={currentBranch.name}
                  src={currentBranch.mapsEmbed || currentBranch.mapUrl}
                  title={`${currentBranch.name} Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
