import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { motion } from "framer-motion";

// Clean Luxury SVG Icons
export function IconGraduationCap({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6" />
    </svg>
  );
}

export function IconHeadphones({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11a7 7 0 00-14 0m14 0a3 3 0 013 3v2a3 3 0 01-3 3h-1m-10-8a3 3 0 00-3 3v2a3 3 0 003 3h1m0 0a2 2 0 002-2v-4a2 2 0 00-2-2m10 8a2 2 0 01-2-2v-4a2 2 0 012-2"
      />
    </svg>
  );
}

export function IconMic({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );
}

export function IconSparkles({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

export function IconGlobe({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function IconPhone({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export function IconWhatsApp({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export const globalPartners = [
  {
    name: "Japan Language Schools & Univs",
    type: "SSW & Student Visa Pathways",
    tag: "Tokyo Branch Care",
  },
  {
    name: "Germany Public Universities",
    type: "Tuition-Free & Ausbildung",
    tag: "Goethe A1 Prep",
  },
  {
    name: "Malaysia Partner Colleges",
    type: "Fast EMGS & Credit Transfer",
    tag: "Affordable Tuition",
  },
  {
    name: "United Kingdom Universities",
    type: "1-Yr Master's & 2-Yr PSW",
    tag: "Fast Track CAS",
  },
  { name: "Canada Public DLIs", type: "Co-op & 3-Year PGWP", tag: "Fast Permits" },
  { name: "Australia Top Universities", type: "High Student Wages", tag: "Subclass 500" },
  { name: "USA Accredited Universities", type: "F-1 Stem OPT 3-Yr", tag: "Interview Prep" },
  { name: "Schengen 29 Countries", type: "Finland, Spain & Greece", tag: "High Visa Ratio" },
];

export function RegisterButton({
  label = "Book Free Assessment",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const { open } = useRegisterModal();
  return (
    <button type="button" onClick={open} className={cn("btn-luxury-primary", className)}>
      <IconSparkles className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0B1528] text-white py-12 sm:py-16 lg:py-20 border-b border-sky-950">
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />

      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-luminosity"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : null}

      <div className="section-shell relative z-10">
        <div
          className={cn(
            "grid items-center gap-8 lg:gap-12",
            image ? "lg:grid-cols-[1.2fr_0.8fr]" : "",
          )}
        >
          <div>
            {eyebrow ? (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md">
                <IconSparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{eyebrow}</span>
              </div>
            ) : null}

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-300 font-medium">
                {subtitle}
              </p>
            ) : null}

            {children ? <div className="mt-6 sm:mt-8">{children}</div> : null}
          </div>

          {image ? (
            <div className="relative hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950">
                  <img
                    src={image}
                    alt={imageAlt ?? title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="rounded-full bg-slate-950/85 px-3 py-1 font-bold backdrop-blur-md border border-white/20 text-orange-300">
                      92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka
                    </span>
                    <span className="rounded-full bg-orange-600 px-3 py-1 font-bold text-white shadow-sm">
                      ● {company.name}
                    </span>
                  </div>
                </div>

                <div className="p-3 text-center">
                  <p className="text-xs font-bold text-white">
                    {company.name} · Foreign Education Advisory & Language Academy
                  </p>
                  <p className="text-[0.68rem] text-slate-400">
                    Principal HQ · {company.tagline} · Hotline: {company.phones[0]}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs text-slate-400">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-2">
          {i > 0 && <span className="text-slate-600">/</span>}
          {item.to ? (
            <Link to={item.to} className="transition-colors hover:text-sky-600">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-sky-600">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-3",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-bold text-sky-700">
          <IconSparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>{eyebrow}</span>
        </div>
      ) : null}

      <h2
        className={cn(
          "font-display text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl leading-tight",
          dark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            "text-sm leading-relaxed sm:text-base font-medium",
            dark ? "text-slate-300" : "text-slate-600",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function StatsStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {company.stats.slice(0, 4).map((s, idx) => (
          <div key={s.label} className={cn("text-center", idx > 0 ? "pt-4 sm:pt-0 sm:px-4" : "")}>
            <div className="font-display text-3xl sm:text-4xl font-black text-sky-600 tracking-tight">
              {s.value}
            </div>
            <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800">{s.label}</div>
            <span className="mt-2 inline-block rounded-full bg-sky-50 border border-sky-200 px-3 py-0.5 text-[0.68rem] font-bold text-sky-700">
              {s.badge}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.q}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden",
              isOpen
                ? "bg-white border-sky-500 shadow-md ring-1 ring-sky-500/20"
                : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] transition-transform"
            >
              <span className="font-display text-sm sm:text-base font-bold text-slate-900">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                  isOpen ? "bg-sky-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
                )}
              >
                ↓
              </span>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function UniversityMarquee() {
  return (
    <section className="relative border-y border-slate-200/80 bg-white py-14 sm:py-20 overflow-hidden">
      <div className="section-shell text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1 text-xs font-bold text-sky-700 mb-3">
          <span>GLOBAL INSTITUTIONS</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Top Study & Career <span className="text-sky-600">Destinations & Partners</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
          Comprehensive admission and language coaching for Japan (with Tokyo liaison office),
          tuition-free German universities & Ausbildung, Malaysia, UK, Canada, Australia, and the USA.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          animate={{ x: [0, -50 + "%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="marquee-track flex items-center gap-4 py-2"
        >
          {[...globalPartners, ...globalPartners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-slate-50/80 px-5 py-3 shadow-xs hover:shadow-md hover:bg-white transition-all whitespace-nowrap"
            >
              <span className="flex h-2 w-2 rounded-full bg-sky-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-900">{partner.name}</span>
              <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[0.68rem] font-bold text-sky-700 border border-sky-200">
                {partner.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function BulletList({ items }: { items?: readonly string[] }) {
  if (!items || !items.length) return null;
  return (
    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600 text-[0.65rem] font-bold border border-sky-200">
            <IconCheck className="w-3 text-sky-600" />
          </span>
          <span className="leading-relaxed font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  const { open } = useRegisterModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1528] via-[#0F1E36] to-[#0B1528] text-white py-16 sm:py-24 border-t border-sky-950">
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="section-shell relative z-10 text-center max-w-3xl mx-auto space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300">
          <IconGlobe className="w-3.5 h-3.5 text-uni-orange" />
          <span>{company.name} ({company.taglineBangla}) · {company.tagline}</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Study Abroad · Without IELTS · <span className="text-uni-orange">Achieve</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
          Book your free advisory session with {company.name}. 100% genuine guidance across Cyprus, UK, Malaysia, Malta, Australia, Canada, USA, and Europe. Benefit from Without IELTS options, study gap acceptance, and premier UNI Language Academy.
        </p>

        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={open}
            className="btn-primary w-full xs:w-auto text-xs sm:text-sm py-3.5 px-8 shadow-xl cursor-pointer font-bold flex items-center justify-center gap-2"
          >
            <span>Book Free Assessment</span>
            <IconArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              `Hello ${company.name}! I would like to book a free consultation for Study Abroad admissions and language courses.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="btn-luxury-secondary w-full xs:w-auto text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900 cursor-pointer font-bold flex items-center justify-center gap-2"
          >
            <IconWhatsApp className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp {company.phones[0]}</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
