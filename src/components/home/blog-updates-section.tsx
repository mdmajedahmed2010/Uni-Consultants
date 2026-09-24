import { Link } from "@tanstack/react-router";
import { IconArrowRight } from "@/components/ui-blocks";
import { MotionHeading, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  tag: string;
}

const posts: BlogPost[] = [
  {
    title: "Study in Cyprus: ইউরোপে সাশ্রয়ী টিউশন ফি ও ১০০% ভিসা সাপোর্ট",
    excerpt:
      "ইউআই কনসালট্যান্টস-এর সাথে ইউরোপীয় ইউনিয়নের সাইপ্রাসে টিউশন ফি মাত্র €২,৫০০/বছর থেকে শুরু। উইথ বা উইদাউট আইইএলটিএস আবেদনের সুযোগ ও পার্ট-টাইম কাজের অধিকার।",
    date: "Flagship Pathway",
    tag: "Cyprus Admissions",
    image: "/banner.png",
    slug: "study-in-cyprus-low-tuition-fees",
  },
  {
    title: "Admission Open For Any Intake: যুক্তরাজ্য, মালয়েশিয়া ও মাল্টায় ভর্তি",
    excerpt:
      "সততাই আমাদের অঙ্গীকার মূলমন্ত্র নিয়ে UNI Consultants দিচ্ছে যুক্তরাজ্য, মালয়েশিয়া, ফিনল্যান্ড ও মাল্টার শীর্ষ বিশ্ববিদ্যালয়ে শতভাগ বিশ্বস্ত ভর্তি ও ভিসা পরামর্শ।",
    date: "Global Admissions",
    tag: "Any Intake Open",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    slug: "direct-university-admissions-uk-europe",
  },
  {
    title: "UNI Language Academy: IELTS 7.5+ ও Spoken English Mastery",
    excerpt:
      "অভিজ্ঞ মেন্টর দ্বারা পরিচালিত আইইএলটিএস একাডেমিক, জেনারেল, স্পোকেন ইংলিশ এবং বাচ্চাদের জন্য কিডস ইংলিশ একাডেমি—আমাদের ঢাকা ও শাখা ক্যাম্পাসে।",
    date: "Language Academy",
    tag: "IELTS & Spoken",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=800&q=80",
    slug: "ielts-spoken-kids-english-academy",
  },
];

export function BlogUpdatesSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        {/* Animated Section Header */}
        <MotionHeading
          tag="— HONESTY IS OUR COMMITMENT —"
          title="Latest"
          highlight="Insights & Updates"
          description="সাইপ্রাস, যুক্তরাজ্য, মালয়েশিয়া ও মাল্টায় উচ্চশিক্ষা, উইথ/উইদাউট আইইএলটিএস এবং ল্যাঙ্গুয়েজ একাডেমির প্রামাণ্য তথ্য।"
          tagColor="text-orange-600"
          highlightColor="text-orange-600"
        />

        {/* 3 Blog Cards Grid with Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <article className="rounded-3xl border border-slate-200/80 bg-slate-50/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 flex flex-col justify-between hover-lift group h-full">
                {/* Post Featured Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[0.68rem] font-bold text-white border border-white/20">
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div className="space-y-3">
                    <span className="text-[0.68rem] font-bold text-orange-600 uppercase tracking-wider block">
                      {post.date}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-950 leading-snug group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed font-bangla line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-orange-600 transition-colors"
                    >
                      <span>বিস্তারিত জানুন</span>
                      <IconArrowRight className="w-3.5 h-3.5 text-orange-500 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-[0.68rem] text-slate-600 font-bold">UNI Consultants</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
