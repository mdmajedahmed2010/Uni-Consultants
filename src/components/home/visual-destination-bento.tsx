import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { IconArrowRight, IconSparkles } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export interface DestinationCardData {
  slug: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  featured?: boolean;
  highlightTag: string;
  visaSpeed: string;
  withoutIelts: boolean;
  avgTuition: string;
  pswv: string;
  topIntake: string;
}

const destinationCards: DestinationCardData[] = [
  {
    slug: "cyprus",
    name: "Cyprus (Europe)",
    region: "Europe",
    flag: "🇨🇾",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Flagship Destination · With/Without IELTS",
    visaSpeed: "MOI Accepted · Tuition from €2,500",
    withoutIelts: true,
    avgTuition: "€2,500 – €3,800/yr",
    pswv: "Low Tuition & European Work Rights",
    topIntake: "February & September",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Admission Open For Any Intake",
    visaSpeed: "1-Yr Masters & 2-Yr PSW",
    withoutIelts: true,
    avgTuition: "£11,000 – £16,500/yr",
    pswv: "2-Year Graduate Route (PSW)",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia",
    flag: "🇲🇾",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Fast EMGS Visa · UK/Aus Dual Degrees",
    visaSpeed: "No IELTS Required / MOI",
    withoutIelts: true,
    avgTuition: "$3,500 – $6,500/yr",
    pswv: "Affordable Tuition & Safe Living",
    topIntake: "Jan / May / Aug / Oct",
  },
  {
    slug: "malta",
    name: "Malta (Schengen)",
    region: "Europe",
    flag: "🇲🇹",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Schengen Country · English Speaking",
    visaSpeed: "Part-Time Work Rights Allowed",
    withoutIelts: true,
    avgTuition: "€4,000 – €7,000/yr",
    pswv: "Schengen Mobility & Job Market",
    topIntake: "Feb / Apr / Oct",
  },
  {
    slug: "finland",
    name: "Finland",
    region: "Europe",
    flag: "🇫🇮",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "World-Class Nordic Higher Education",
    visaSpeed: "30 Hrs/Wk Work Rights",
    withoutIelts: false,
    avgTuition: "€8,000 – €12,000/yr",
    pswv: "2-Year Job Search Residence",
    topIntake: "August / September",
  },
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "High Visa Success · Subclass 500",
    visaSpeed: "Post Study Work Rights",
    withoutIelts: false,
    avgTuition: "AUD $22,000 – $36,000/yr",
    pswv: "2 to 4+ Years Post-Study Work",
    topIntake: "February & July",
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "DLI Colleges & Universities",
    visaSpeed: "Study Permit & PAL Guidance",
    withoutIelts: false,
    avgTuition: "CAD $15,000 – $24,000/yr",
    pswv: "Up to 3-Year PGWP",
    topIntake: "Jan / May / Sep",
  },
  {
    slug: "usa",
    name: "United States",
    region: "North America",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "STEM OPT 3 Yrs · Merit Scholarships",
    visaSpeed: "F-1 Mock Consular Prep",
    withoutIelts: false,
    avgTuition: "$14,000 – $26,000/yr",
    pswv: "Up to 3-Year STEM OPT",
    topIntake: "Fall (Aug) & Spring (Jan)",
  },
  {
    slug: "italy",
    name: "Italy (Schengen)",
    region: "Europe",
    flag: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    featured: true,
    highlightTag: "Regional Scholarships Available",
    visaSpeed: "English Degrees & Schengen Mobility",
    withoutIelts: true,
    avgTuition: "€1,000 – €3,000/yr (Often Free)",
    pswv: "1-Year Job Search Permit",
    topIntake: "September / October",
  },
];

export function VisualDestinationBento() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = ["All", "Europe", "North America", "Oceania", "Asia"];

  const filtered =
    selectedRegion === "All"
      ? destinationCards
      : destinationCards.filter((d) => d.region.includes(selectedRegion));

  return (
    <section className="section-shell py-12 sm:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SlideIn direction="left" distance={30}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-orange-600">
              <IconSparkles className="w-3.5 h-3.5 text-orange-500" />
              <span>Official Banner Destinations · UNI Consultants</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0a1931] tracking-tight">
              Curated Higher Study <span className="text-orange-600">Destinations</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-bangla">
              আমাদের অফিসিয়াল ব্যানারের প্রধান দেশসমূহ: সাইপ্রাস, যুক্তরাজ্য, মালয়েশিয়া, মাল্টা, ফিনল্যান্ড, অস্ট্রেলিয়া ও কানাডায় UNI Consultants নিশ্চিত করে সৎ অ্যাডমিশন গাইডেন্স ও নির্ভরযোগ্য ভিসা সহায়তা।
            </p>
          </div>
        </SlideIn>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-auto">
          {regions.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setSelectedRegion(reg)}
              className={cn(
                "rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedRegion === reg
                  ? "bg-orange-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60",
              )}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Destination Cards */}
      <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <StaggerItem key={item.slug}>
            <Link
              to="/study-in-{$country}"
              params={{ country: item.slug }}
              className="group block rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#07132b]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/20">
                  <span className="text-base">{item.flag}</span>
                  <span>{item.name}</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[0.68rem] font-bold text-amber-400 block truncate">
                    {item.highlightTag}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 block truncate mt-0.5">
                    {item.visaSpeed}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3 bg-white flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[0.65rem] text-slate-400 block font-bold uppercase">Avg Tuition</span>
                    <span className="font-extrabold text-[#0a1931] block truncate mt-0.5">{item.avgTuition}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[0.65rem] text-slate-400 block font-bold uppercase">Intakes</span>
                    <span className="font-extrabold text-orange-600 block truncate mt-0.5">{item.topIntake}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1931] group-hover:text-orange-600 transition-colors">
                  <span>{item.pswv}</span>
                  <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
