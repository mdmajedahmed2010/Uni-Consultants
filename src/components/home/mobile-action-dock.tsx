import { useRegisterModal } from "@/components/register-modal";
import { IconPhone, IconWhatsApp, IconSparkles } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { motion } from "framer-motion";

export function MobileActionDock() {
  const { open } = useRegisterModal();

  return (
    <div className="fixed bottom-3 inset-x-3 max-w-md mx-auto z-40 md:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="rounded-full bg-slate-950/95 backdrop-blur-2xl p-1.5 border border-orange-500/40 shadow-2xl flex items-center justify-between gap-1.5 text-xs text-white ring-1 ring-white/15"
      >
        <motion.a
          whileTap={{ scale: 0.94 }}
          href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-white/10 hover:bg-white/20 font-bold text-white transition-colors"
        >
          <IconPhone className="w-3.5 h-3.5 text-orange-400" />
          <span>Call</span>
        </motion.a>

        <motion.a
          whileTap={{ scale: 0.94 }}
          href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
            `Hello ${company.name}! I would like a consultation for Study Abroad admissions, With/Without IELTS options, and language academy programs.`,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-emerald-600/90 hover:bg-emerald-500 font-bold text-white transition-colors"
        >
          <IconWhatsApp className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </motion.a>

        <motion.button
          whileTap={{ scale: 0.94 }}
          type="button"
          onClick={() => open()}
          className="flex-1.5 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black shadow-sm transition-transform cursor-pointer"
        >
          <IconSparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Assessment</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
