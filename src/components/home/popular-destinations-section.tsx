import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { company } from "@/lib/site-data";

interface DestinationItem {
  name: string;
  code: string;
  flag: string;
  unis: string;
  image: string;
  popular?: boolean;
  slug: string;
  highlight?: string;
}

// Official Destinations Featured on UNI Consultants Official Banner & Network
const destinationsData: DestinationItem[] = [
  {
    name: "Cyprus (Europe)",
    code: "CY",
    flag: "🇨🇾",
    unis: "Top Ranked Unis · Without IELTS Options · Tuition from €2,500",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "cyprus",
    highlight: "Flagship Destination · High Visa Success",
  },
  {
    name: "United Kingdom",
    code: "UK",
    flag: "🇬🇧",
    unis: "Top Universities · 1-Yr Masters · 2-Yr PSW Post Study Work",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "uk",
    highlight: "Admission Open For Any Intake",
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    unis: "World-Class Campuses · UK/Aus Twinning · Affordable Tuition",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "malaysia",
    highlight: "Fast Visa & Budget Friendly",
  },
  {
    name: "Malta (Schengen)",
    code: "MT",
    flag: "🇲🇹",
    unis: "EU Schengen Zone · English Speaking · Part-Time Work Allowed",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "malta",
    highlight: "Schengen Country · Work Rights",
  },
  {
    name: "Finland",
    code: "FI",
    flag: "🇫🇮",
    unis: "World-Class Nordic Education · 30 Hrs/Wk Work Rights · Safe Living",
    image:
      "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "finland",
    highlight: "Nordic Excellence",
  },
  {
    name: "Australia",
    code: "AUS",
    flag: "🇦🇺",
    unis: "Go8 & Leading Universities · Post Study Work Rights · PR Pathways",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "australia",
    highlight: "High Visa Success",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    unis: "Designated Learning Institutions · Up to 3-Yr PGWP · PR Pathways",
    image:
      "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "canada",
    highlight: "PGWP & Permanent Residency",
  },
  {
    name: "Italy (Schengen)",
    code: "IT",
    flag: "🇮🇹",
    unis: "Top Historic Universities · Regional Scholarships Available",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "italy",
    highlight: "Regional Scholarships",
  },
  {
    name: "United States",
    code: "USA",
    flag: "🇺🇸",
    unis: "Top Global Universities · 3-Yr STEM OPT · High Merit Awards",
    image:
      "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=800&q=80",
    popular: true,
    slug: "usa",
    highlight: "STEM OPT & Merit Scholarships",
  },
];

export function PopularDestinationsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Heading */}
        <MotionHeading
          tag="— ONE STOP SOLUTION FOR STUDY ABROAD EDUCATION —"
          title="Featured Study"
          highlight="Abroad Destinations"
          description="UNI Consultants provides verified university admission, With / Without IELTS pathway options, scholarship assessment, and visa support with honesty as our commitment."
          tagColor="text-orange-600"
          highlightColor="text-orange-600"
        />

        {/* 9-Card Responsive Grid with Stagger Entrance */}
        <StaggerContainer
          staggerDelay={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinationsData.map((d) => (
            <StaggerItem key={d.slug} className="h-full">
              <Link
                to="/study-in-{$country}"
                params={{ country: d.slug }}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200 bg-[#090c1f] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover-lift h-full"
              >
                {/* Background Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={d.image}
                    alt={`Study in ${d.name} with ${company.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Flag & Code Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
                    <span className="text-base">{d.flag}</span>
                    <span>{d.code}</span>
                  </div>

                  {/* Top-Right Highlight Pill */}
                  {d.highlight && (
                    <div className="absolute top-4 right-4 rounded-full bg-orange-500 text-white px-2.5 py-0.5 text-[0.65rem] font-bold shadow-md">
                      {d.highlight}
                    </div>
                  )}

                  {/* Bottom Text Content Inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl font-black group-hover:text-orange-400 transition-colors">
                      {d.name}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-300 mt-1">
                      <span className="truncate max-w-[200px]">{d.unis}</span>
                      <span className="flex items-center gap-1 font-bold text-orange-400 group-hover:translate-x-1 transition-transform shrink-0">
                        <span>Details</span>
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/destinations"
            className="btn-luxury-secondary text-xs sm:text-sm py-3 px-8 rounded-full border border-slate-300 hover:border-orange-500 hover:text-orange-600 transition-all font-bold inline-flex items-center gap-2"
          >
            <span>Explore All Study Destinations & Intakes</span>
            <IconArrowRight className="w-4 h-4 text-orange-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
