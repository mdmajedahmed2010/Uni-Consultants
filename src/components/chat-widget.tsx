import { useState } from "react";
import { company } from "@/lib/site-data";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);

  const whatsappUrl = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hello ${company.name}! I would like to consult about Study Abroad admissions, With/Without IELTS options, and language courses.`,
  )}`;

  const messengerUrl = company.social.messenger;

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3 select-none">
      {/* Floating Speed-Dial Action Buttons (Visible when open) with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Action 1: Facebook Messenger */}
            <div className="group relative flex items-center">
              <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
                Facebook (@UNIConsultantsbd)
              </span>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                href={messengerUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on Facebook Messenger"
                className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg border-2 border-white transition-colors hover:bg-[#0073E6]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.454 5.512 3.737 7.202V22l3.39-1.86c.91.252 1.874.388 2.873.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.066 12.443l-2.584-2.756-5.045 2.756 5.549-5.89 2.651 2.756 4.978-2.756-5.549 5.89z" />
                </svg>
              </motion.a>
            </div>

            {/* Action 2: Direct Phone Call Hotlines */}
            <div className="group relative flex items-center">
              <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
                Official Hotlines (Dhaka HQ)
              </span>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setShowCallMenu(!showCallMenu)}
                aria-label="Direct Phone Hotlines"
                className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#0f172a] text-orange-400 shadow-lg border-2 border-white transition-colors hover:bg-slate-800 cursor-pointer font-bold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </motion.button>

              {/* Quick Hotline Selection Sub-menu */}
              <AnimatePresence>
                {showCallMenu && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    className="absolute right-full mr-3 bottom-0 w-60 sm:w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                  >
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      {company.name} অফিসিয়াল হটলাইন:
                    </p>
                    <div className="space-y-1.5">
                      <a
                        href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                        className="block rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-xs font-bold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors"
                      >
                        📞 {company.phones[0]} (Dhaka HQ)
                      </a>
                      <a
                        href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                        className="block rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-xs font-bold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors"
                      >
                        📞 {company.phones[1]} (Farmgate / Counsel)
                      </a>
                      <a
                        href={`tel:${company.phones[2].replace(/[^0-9]/g, "")}`}
                        className="block rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-xs font-bold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors"
                      >
                        📞 {company.phones[2]} (Habiganj Branch)
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action 3: Direct WhatsApp Instant Chat */}
            <div className="group relative flex items-center">
              <span className="pointer-events-none absolute right-full mr-3 hidden rounded-xl bg-slate-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur whitespace-nowrap opacity-0 transition-all group-hover:opacity-100 sm:block">
                WhatsApp: {company.whatsappFormatted}
              </span>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg border-2 border-white transition-colors hover:bg-[#1EBE5D]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 2C6.511 2 2.016 6.484 2.016 11.984c0 1.838.497 3.565 1.365 5.053L2 22l5.143-1.332a9.92 9.92 0 004.888 1.28c5.52 0 10.015-4.484 10.015-9.964C22.046 6.484 17.551 2 12.031 2zm0 18.234a8.27 8.27 0 01-4.223-1.156l-.303-.18-3.138.813.837-3.033-.197-.313a8.214 8.214 0 01-1.26-4.381c0-4.57 3.73-8.286 8.284-8.286 4.555 0 8.285 3.716 8.285 8.286 0 4.57-3.73 8.286-8.286 8.286zm4.538-6.195c-.248-.125-1.47-.724-1.698-.807-.228-.083-.393-.125-.558.125-.166.249-.643.807-.788.973-.145.166-.29.187-.539.062-.248-.125-1.047-.386-1.995-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.25-.015-.385.109-.508.112-.112.248-.29.373-.435.124-.145.166-.25.249-.415.083-.166.041-.311-.021-.436-.062-.124-.559-1.348-.766-1.846-.2-.486-.404-.42-.558-.428h-.477c-.166 0-.436.062-.664.311-.228.25-.87.85-.87 2.074 0 1.224.892 2.406 1.016 2.572.124.166 1.754 2.679 4.249 3.756.593.256 1.057.41 1.419.524.597.19 1.14.163 1.57.099.479-.071 1.47-.601 1.677-1.182.207-.581.207-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button with Framer Motion spring feedback */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowCallMenu(false);
        }}
        aria-label="Toggle Live Help"
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-xl shadow-emerald-600/30 border-2 border-white cursor-pointer"
      >
        <div className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-500 border-2 border-white" />
        </div>

        {isOpen ? (
          <span className="text-xl sm:text-2xl font-black leading-none">✕</span>
        ) : (
          <span className="text-xl sm:text-2xl leading-none">💬</span>
        )}
      </motion.button>
    </div>
  );
}
