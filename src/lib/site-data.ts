/**
 * UNI CONSULTANTS — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/UNIConsultantsbd/ (@UNIConsultantsbd)
 *  - Official Brand Assets (C:\Users\Majed\Downloads\New asset):
 *      * Logo: logo.jpg (Vibrant Orange stylized "uni" with Graduation Mortarboard on the 'i' & bold "CONSULTANTS")
 *      * Banner: banner.png ("ONE STOP SOLUTION FOR STUDY ABROAD EDUCATION" · "HONESTY IS OUR COMMITMENT")
 *          Featuring 30+ Verified Real Student Visa Success Photos & Flags: Cyprus, UK, Malaysia, Malta
 *          Call to Action: 'FREE EXPERT CONSULTATION' · 'ADMISSION OPEN FOR ANY INTAKE!!' · 'WITH / WITHOUT IELTS'
 *  - Headquarters: 92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh.
 *  - Branch Service Hub: 74/B/1, Unit-211, RH Home Centre, Green Road, Farmgate, Dhaka-1205.
 *  - Habiganj Branch: Unit 08, Ground Floor, Townhall, Town Hall Road, Habiganj, Sylhet.
 *  - UK International Office: Citygate Business Centre, 246-250 Romford Road, London, UK.
 *  - Hotlines: +880 1335-065544 · +880 1335-065540
 *  - Additional Support: +880 1932-083168 · +880 1603-447779
 *  - Official Email: application@uniconsultants.co.uk
 *  - Secondary Email: admission.ucsa@gmail.com
 *  - Official Website: http://www.uniconsultants.co.uk/
 */

export type NavChild = {
  label: string;
  to: string;
  params?: Record<string, string>;
  badge?: string;
};

export type NavItem = {
  label: string;
  to: string;
  params?: Record<string, string>;
  children?: NavChild[];
};

export const company = {
  name: "UNI Consultants",
  shortName: "UNI Consultants",
  altName: "Uni Consultants Study Abroad",
  acronym: "UCSA",
  legalName: "UNI Consultants — Higher Education Advisory & Language Academy",
  nativeName: "ইউআই কনসালট্যান্টস",
  slogan: "One Stop Solution for Study Abroad Education",
  tagline: "HONESTY IS OUR COMMITMENT",
  motto: "Free Expert Consultation · Admission Open For Any Intake! · With / Without IELTS",
  secondaryMotto: "High Visa Success Rate · Scholarship Guidance · Direct Discussion with Expert Counsellor",
  bengaliHeadline: "ইউকে, সাইপ্রাস, মালয়েশিয়া, মাল্টা ও ইউরোপে উচ্চশিক্ষা ও ভিসা প্রসেসিংয়ে আপনার বিশ্বস্ত প্রতিষ্ঠান !",
  bengaliSubheadline:
    "ইউআই কনসালট্যান্টস (৯২, আলী ভবন, ৭ম তলা, কাজী নজরুল ইসলাম এভিনিউ, ঢাকা ১২১৫): সততাই আমাদের অঙ্গীকার। ফ্রি এক্সপার্ট কাউন্সেলিং, স্কলারশিপ সহায়তা, উইথ/উইদাউট IELTS ভর্তি এবং স্পেশালাইজড IELTS, স্পোকেন ইংলিশ ও কিডস ইংলিশ একাডেমি।",
  philosophy: "HONESTY IS OUR COMMITMENT · TRANSPARENT ADVISORY · ZERO HIDDEN CHARGES · DIRECT EXPERT COUNSELING",
  bio: "One Stop Solution for Study Abroad Education. Helping students achieve their dreams of studying in top universities across Cyprus, UK, Malaysia, Malta, Finland, Australia & Canada with high visa success rate. Honesty is our Commitment 🎓✈️🌍",
  category: "Study Abroad Consultancy · IELTS Academy · Student Visa Advisory",
  origin: "Dhaka, Bangladesh",
  presence: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh",
  email: "application@uniconsultants.co.uk",
  contactEmail: "application@uniconsultants.co.uk",
  careerEmail: "application@uniconsultants.co.uk",
  altEmail: "admission.ucsa@gmail.com",
  emails: ["application@uniconsultants.co.uk", "admission.ucsa@gmail.com"],
  phones: ["+880 1335-065544", "+880 1335-065540", "+880 1932-083168", "+880 1603-447779"],
  whatsapp: "+8801335065544",
  whatsappFormatted: "+880 1335-065544",
  secondaryPhone: "+880 1335-065540",
  landline: "+880 1335-065544",
  hours: "Saturday – Thursday: 10:00 AM – 7:00 PM (Friday Open for Scheduled Appointments & Seminars)",
  established: "Verified Education Consultancy",
  signOff: "UNI Consultants · Honesty is Our Commitment",
  specialOffer: "Free Expert Profile Evaluation & Scholarship Guidance for All Intakes",

  offices: {
    headquarters: {
      name: "UNI Consultants (Dhaka Principal Office)",
      address: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh",
      full: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh (Near Kawran Bazar & Farmgate transit corridor)",
      short: "Kazi Nazrul Islam Avenue, Dhaka 1215",
      phone: "+880 1335-065544",
      phones: ["+880 1335-065544", "+880 1335-065540"],
      whatsapp: "+8801335065544",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215&z=16&hl=en&output=embed",
    },
    farmgate: {
      name: "Farmgate Service Centre",
      address: "74/B/1, Unit-211, RH Home Centre, Green Road, Farmgate, Dhaka-1205",
      full: "74/B/1, Unit-211, RH Home Centre, Green Road, Farmgate, Dhaka-1205, Bangladesh",
      short: "RH Home Centre, Green Road, Farmgate, Dhaka",
      phone: "+880 1932-083168",
      phones: ["+880 1932-083168", "+880 1603-447779"],
      whatsapp: "+8801335065544",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=RH+Home+Centre+Green+Road+Farmgate+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=RH+Home+Centre+Green+Road+Farmgate+Dhaka&z=16&hl=en&output=embed",
    },
    habiganj: {
      name: "Habiganj Branch (Sylhet)",
      address: "Unit 08, Ground floor, Townhall, Town Hall Road, Habiganj, Sylhet",
      full: "Unit 08, Ground floor, Townhall, Town Hall Road, Habiganj, Sylhet, Bangladesh",
      short: "Town Hall Road, Habiganj, Sylhet",
      phone: "+880 1335-065544",
      phones: ["+880 1335-065544", "+880 1335-065540"],
      whatsapp: "+8801335065544",
      hours: "Saturday – Thursday: 10:00 AM – 6:30 PM",
      mapsUrl: "https://maps.google.com/?q=Town+Hall+Road+Habiganj+Sylhet",
      mapsEmbed: "https://maps.google.com/maps?q=Town+Hall+Road+Habiganj+Sylhet&z=16&hl=en&output=embed",
    },
    london: {
      name: "UNI Consultants UK Liaison Office",
      address: "Citygate Business Centre, 246-250 Romford Road, London, UK",
      full: "Citygate Business Centre, 246-250 Romford Road, London, United Kingdom",
      short: "Romford Road, London, UK",
      phone: "+880 1335-065544",
      phones: ["application@uniconsultants.co.uk"],
      whatsapp: "+8801335065544",
      hours: "Monday – Friday: 9:30 AM – 5:30 PM GMT",
      mapsUrl: "https://maps.google.com/?q=Citygate+Business+Centre+246-250+Romford+Road+London",
      mapsEmbed: "https://maps.google.com/maps?q=246-250+Romford+Road+London&z=16&hl=en&output=embed",
    },
  },

  branches: [
    {
      name: "UNI Consultants Principal Head Office (Dhaka)",
      city: "Dhaka",
      address: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh",
      full: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh (Near Kawran Bazar & Farmgate transit corridor)",
      short: "Kazi Nazrul Islam Avenue, Dhaka",
      phone: "+880 1335-065544",
      phones: ["+880 1335-065544", "+880 1335-065540"],
      whatsapp: "+8801335065544",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      tag: "Principal HQ",
      primary: true,
      mapUrl: "https://maps.google.com/maps?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215&z=16&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215&z=16&hl=en&output=embed",
    },
    {
      name: "Farmgate Service Centre",
      city: "Dhaka",
      address: "74/B/1, Unit-211, RH Home Centre, Green Road, Farmgate, Dhaka-1205",
      full: "74/B/1, Unit-211, RH Home Centre, Green Road, Farmgate, Dhaka-1205, Bangladesh",
      short: "RH Home Centre, Farmgate, Dhaka",
      phone: "+880 1335-065544",
      phones: ["+880 1335-065544", "+880 1335-065540"],
      whatsapp: "+8801335065544",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      tag: "Dhaka Branch",
      primary: false,
      mapUrl: "https://maps.google.com/maps?q=RH+Home+Centre+Green+Road+Farmgate+Dhaka&z=16&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=RH+Home+Centre+Green+Road+Farmgate+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=RH+Home+Centre+Green+Road+Farmgate+Dhaka&z=16&hl=en&output=embed",
    },
    {
      name: "Habiganj Branch (Sylhet Region)",
      city: "Habiganj",
      address: "Unit 08, Ground Floor, Townhall, Town Hall Road, Habiganj, Sylhet",
      full: "Unit 08, Ground Floor, Townhall, Town Hall Road, Habiganj, Sylhet, Bangladesh",
      short: "Town Hall Road, Habiganj",
      phone: "+880 1932-083168",
      phones: ["+880 1932-083168", "+880 1603-447779"],
      whatsapp: "+8801335065544",
      hours: "Saturday – Thursday: 10:00 AM – 6:30 PM",
      tag: "Sylhet Branch",
      primary: false,
      mapUrl: "https://maps.google.com/maps?q=Town+Hall+Road+Habiganj+Sylhet&z=16&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=Town+Hall+Road+Habiganj+Sylhet",
      mapsEmbed: "https://maps.google.com/maps?q=Town+Hall+Road+Habiganj+Sylhet&z=16&hl=en&output=embed",
    },
    {
      name: "UNI Consultants UK Liaison Office",
      city: "London",
      address: "Citygate Business Centre, 246-250 Romford Road, London, UK",
      full: "Citygate Business Centre, 246-250 Romford Road, London, United Kingdom",
      short: "Romford Road, London",
      phone: "+880 1335-065544",
      phones: ["application@uniconsultants.co.uk"],
      whatsapp: "+8801335065544",
      hours: "Monday – Friday: 9:30 AM – 5:30 PM GMT",
      tag: "UK Office",
      primary: false,
      mapUrl: "https://maps.google.com/maps?q=246-250+Romford+Road+London&z=16&hl=en&output=embed",
      mapsUrl: "https://maps.google.com/?q=Citygate+Business+Centre+246-250+Romford+Road+London",
      mapsEmbed: "https://maps.google.com/maps?q=246-250+Romford+Road+London&z=16&hl=en&output=embed",
    },
  ],

  campusOffice: {
    title: "UNI Consultants Principal Office",
    building: "Ali Bhaban",
    floor: "7th Floor",
    area: "92, Kazi Nazrul Islam Avenue",
    city: "Dhaka",
    postalCode: "1215",
    country: "Bangladesh",
    full: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh",
    hotlines: ["+880 1335-065544", "+880 1335-065540"],
    whatsapp: "+8801335065544",
    whatsappDisplay: "+880 1335-065544",
    email: "application@uniconsultants.co.uk",
    mapsUrl: "https://maps.google.com/?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215+Bangladesh",
    mapsEmbed: "https://maps.google.com/maps?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215&z=16&hl=en&output=embed",
  },

  address: {
    building: "Ali Bhaban",
    street: "92, Kazi Nazrul Islam Avenue",
    area: "Kawran Bazar / Farmgate Corridor",
    city: "Dhaka",
    postalCode: "1215",
    country: "Bangladesh",
    full: "92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh",
    networkNote: "Near Farmgate Transit & Kawran Bazar · 92 Kazi Nazrul Islam Avenue, Dhaka",
  },

  geo: { lat: 23.7538, lng: 90.3912 },
  mapsUrl: "https://maps.google.com/?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215+Bangladesh",
  mapsEmbed: "https://maps.google.com/maps?q=92+Kazi+Nazrul+Islam+Avenue+Dhaka+1215&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/UNIConsultantsbd/",
    facebookPageName: "UNI Consultants",
    facebookVideos: "https://www.facebook.com/UNIConsultantsbd/videos/",
    facebookReels: "https://www.facebook.com/UNIConsultantsbd/reels/",
    instagram: "https://www.facebook.com/UNIConsultantsbd/",
    linkedin: "https://www.facebook.com/UNIConsultantsbd/",
    youtube: "https://www.facebook.com/UNIConsultantsbd/",
    messenger: "https://m.me/UNIConsultantsbd",
    whatsapp: "https://wa.me/8801335065544",
  },

  // 3 Verified Facebook Videos & Reels provided directly by user
  featuredReels: [
    {
      id: "video-851336326627784",
      badge: "🎓 Global Study Abroad Masterclass",
      tag: "Masterclass (16:9)",
      orientation: "landscape" as const,
      aspectRatio: "16/9",
      title: "UNI Consultants Study Abroad & University Admission Guidance",
      bengaliTitle: "ইউআই কনসালট্যান্টস উচ্চশিক্ষা ও ভিসা কাউন্সেলিং গাইডলাইন",
      desc: "Complete roadmap on international admissions, scholarship guidance, with/without IELTS options, and visa documentation directly from expert counselors.",
      bengaliDesc: "ইউআই কনসালট্যান্টস-এর মাধ্যমে বিদেশে উচ্চশিক্ষা, বিশ্ববিদ্যালয় নির্বাচন, স্কলারশিপ ও ভিসা ফাইল তৈরির পূর্ণাঙ্গ দিকনির্দেশনা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FUNIConsultantsbd%2Fvideos%2F851336326627784%2F&show_text=false&width=560&t=0",
      videoUrl: "https://www.facebook.com/UNIConsultantsbd/videos/851336326627784/",
      width: 560,
      height: 314,
    },
    {
      id: "reel-1112513818398048",
      badge: "✈️ Verified Student Visa Celebration",
      tag: "Featured Reel (9:16)",
      orientation: "portrait" as const,
      aspectRatio: "9/16",
      title: "Real Student Visa Success & Embassy Approval Journey",
      bengaliTitle: "স্টুডেন্ট ভিসা প্রাপ্তির আনন্দ ও বাস্তব অভিব্যক্তি",
      desc: "Watch our real student celebrate receiving their study abroad visa and university offer letter with UNI Consultants expert guidance.",
      bengaliDesc: "ইউআই কনসালট্যান্টস-এর সহযোগিতায় সফলভাবে ভিসা পাওয়ার পর আনন্দঘন মুহূর্ত ও শিক্ষার্থীর বাস্তব অভিজ্ঞতা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1112513818398048%2F&show_text=false&width=267&t=0",
      videoUrl: "https://www.facebook.com/reel/1112513818398048/",
      width: 267,
      height: 476,
    },
    {
      id: "reel-3594584127359001",
      badge: "🇬🇧 UK & Global Intakes Spotlight",
      tag: "Intake Briefing (16:9)",
      orientation: "landscape" as const,
      aspectRatio: "16/9",
      title: "UK & International Intakes, Fast CAS & Visa Strategy",
      bengaliTitle: "ইউকে ও ইউরোপে ভর্তি, দ্রুত CAS লেটার ও ভিসা কৌশল",
      desc: "In-depth breakdown of upcoming intakes, admission criteria without IELTS, tuition deposit policies, and embassy interview readiness.",
      bengaliDesc: "আসন্ন ইনটেকগুলোতে উইথ বা উইদাউট আইইএলটিএস ভর্তি, সিএএস (CAS) লেটার দ্রুত প্রাপ্তি এবং সফল ভিসা প্রক্রিয়াকরণ।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Freel%2F3594584127359001%2F&show_text=false&width=560&t=0",
      videoUrl: "https://www.facebook.com/reel/3594584127359001/",
      width: 560,
      height: 314,
    },
  ],

  bannerUSPs: [
    {
      title: "Scholarship Information & Guidance",
      bengali: "স্কলারশিপ তথ্য ও পূর্ণাঙ্গ গাইডেন্স",
      desc: "Direct guidance on merit scholarships, institutional bursaries, and tuition fee discounts across top global institutions.",
      icon: "🎓",
    },
    {
      title: "University Selection Assistance",
      bengali: "বিশ্ববিদ্যালয় ও বিষয় নির্বাচন সহায়তা",
      desc: "Personalized matching with accredited universities in Cyprus, UK, Malaysia, Malta, and beyond according to your profile and budget.",
      icon: "🏛️",
    },
    {
      title: "High Visa Success Rate",
      bengali: "উচ্চ ভিসা সাকসেস রেট",
      desc: "Meticulous visa documentation, financial file checking, and authentic embassy interview coaching with proven success.",
      icon: "🛡️",
    },
    {
      title: "Direct Discussions with Expert Counsellor",
      bengali: "অভিজ্ঞ কাউন্সেলরের সাথে সরাসরি আলোচনা",
      desc: "Meet face-to-face with seasoned foreign education counselors at our Dhaka principal office or connect via online video session.",
      icon: "👥",
    },
    {
      title: "Admission Open For Any Intake!!",
      bengali: "যে কোনো ইনটেকে ভর্তির সুযোগ!!",
      desc: "Rolling admissions, early processing, and prompt offer letters for upcoming Spring, Summer, and Fall intake semesters.",
      icon: "📅",
    },
    {
      title: "With / Without IELTS Options",
      bengali: "IELTS সহ বা IELTS ছাড়া আবেদনের সুযোগ",
      desc: "Alternative pathways via Medium of Instruction (MOI), internal university language testing, and conditional admission offers.",
      icon: "🌐",
    },
  ],

  stats: [
    { value: "30+", label: "Success Stories in Banner", badge: "Verified Student Visas" },
    { value: "4", label: "Banner Flagship Nations", badge: "Cyprus, UK, Malaysia, Malta" },
    { value: "100%", label: "Honesty in Advisory", badge: "Zero Hidden Charges" },
    { value: "4", label: "Office Locations", badge: "Dhaka, Farmgate, Habiganj, London" },
    { value: "Any", label: "Intake Processing", badge: "Admission Open" },
    { value: "0 BDT", label: "Free Initial Consultation", badge: "Direct with Counselor" },
  ],

  accreditations: [
    {
      title: "British Council & IDP Affiliated Resources",
      org: "Official IELTS test registration & prep benchmarks",
      icon: "🇬🇧",
    },
    {
      title: "Global University Representation",
      org: "Direct institutional ties across UK, Cyprus, Malaysia & Malta",
      icon: "🎓",
    },
    {
      title: "Dhaka Principal Office & UK Liaison",
      org: "92 Ali Bhaban, Kazi Nazrul Islam Ave, Dhaka & London Office",
      icon: "🏢",
    },
    {
      title: "High Visa Success Portfolio",
      org: "Hundreds of student visas granted across Europe, UK & Asia",
      icon: "✈️",
    },
  ],

  timeline: [
    {
      year: "Establishment",
      title: "Founded on Core Commitment of Honesty",
      desc: "Started with a transparent mission to provide genuine, ethical study abroad consulting and eliminate fraudulent overseas counseling practices.",
    },
    {
      year: "Global Partnerships",
      title: "Expanding Cyprus, UK, Malaysia & Malta Portfolios",
      desc: "Established direct partnerships with prominent universities and colleges, securing fee waivers, scholarship quotas, and fast-track admissions.",
    },
    {
      year: "Network Expansion",
      title: "Dhaka, Farmgate, Habiganj & London Desks",
      desc: "Expanded physical presence to serve students across Bangladesh and provide post-arrival student welfare directly via the London liaison office.",
    },
    {
      year: "Today",
      title: "Comprehensive Study Abroad & Language Academy",
      desc: "Delivering one-stop higher education solutions, IELTS Academic/General training, Spoken English fluency, and Kids English courses.",
    },
  ],

  team: [
    {
      name: "Senior Overseas Education Advisor",
      role: "Lead Counselor — UK & European Admissions",
      location: "Dhaka Principal Office",
      expertise: "CAS Issuance, Tier 4 / Student Route Visas, Scholarship Negotiations",
      bio: "Over a decade of expertise assisting Bangladeshi students with university admissions across the UK, Cyprus, Malta, and mainland Europe.",
      avatar: "/logo.jpg",
    },
    {
      name: "Global Admissions Coordinator",
      role: "Specialist — Malaysia, Cyprus & Asia Pacific",
      location: "Dhaka Principal Office",
      expertise: "With/Without IELTS Pathways, MOI Verification, Credit Transfers",
      bio: "Expert on Southeast Asian and Mediterranean higher education frameworks, affordable tuition options, and swift visa stamping.",
      avatar: "/logo.jpg",
    },
    {
      name: "Head of Language Training & IELTS Academy",
      role: "Certified Lead Trainer (IELTS & Spoken English)",
      location: "Language Training Wing",
      expertise: "Cambridge Modules, Band 7.5+ Strategies, Embassy Interview Coaching",
      bio: "Dedicated trainer specializing in overcoming spoken hesitation, academic writing mastery, and kids early English language development.",
      avatar: "/logo.jpg",
    },
    {
      name: "Student Welfare & Visa Liaison",
      role: "UK & European Post-Arrival Counselor",
      location: "London Liaison Office",
      expertise: "Pre-Departure Briefings, Accommodation Guidance, PSW & Career Paths",
      bio: "Supports students as they land abroad, coordinating university registrations, housing support, and student welfare in the UK.",
      avatar: "/logo.jpg",
    },
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      { label: "🇨🇾 Study in Cyprus (Banner Destination)", to: "/study-in-{$country}", params: { country: "cyprus" }, badge: "Featured" },
      { label: "🇬🇧 Study in United Kingdom", to: "/study-in-{$country}", params: { country: "uk" }, badge: "Popular" },
      { label: "🇲🇾 Study in Malaysia", to: "/study-in-{$country}", params: { country: "malaysia" }, badge: "Affordable" },
      { label: "🇲🇹 Study in Malta (Schengen)", to: "/study-in-{$country}", params: { country: "malta" }, badge: "Hot" },
      { label: "🇫🇮 Study in Finland", to: "/study-in-{$country}", params: { country: "finland" } },
      { label: "🇦🇺 Study in Australia", to: "/study-in-{$country}", params: { country: "australia" } },
      { label: "🇨🇦 Study in Canada", to: "/study-in-{$country}", params: { country: "canada" } },
      { label: "All Destinations Directory", to: "/destinations" },
    ],
  },
  {
    label: "Language Academy",
    to: "/services",
    children: [
      { label: "IELTS Preparation (Academic & General)", to: "/services", badge: "Band 7.5+" },
      { label: "Spoken English & Fluency Program", to: "/services", badge: "Interview Ready" },
      { label: "Kids English & Young Communicators", to: "/services", badge: "Ages 6-14" },
      { label: "University Admission Support", to: "/services" },
      { label: "Visa Guidance & Mock Interview", to: "/services" },
    ],
  },
  { label: "Intakes & Offers", to: "/offers" },
  { label: "Contact Us", to: "/contact" },
];

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  intro: string;
  why: string[];
  popularFields: string[];
  avgTuition: string;
  avgLiving: string;
  pswv: string;
  intakes: string;
  scholarships: string;
  topUnis: string[];
  withoutIelts: boolean;
  featured?: boolean;
  specialHighlight?: string;
};

export const destinations: Destination[] = [
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    tagline: "High Visa Success Rate, Affordable Tuition, MOI / Without IELTS & European Degree",
    intro:
      "Cyprus is a prime flagship destination featured prominently on UNI Consultants' official success banner. Enjoy affordable European education, tuition starting from €2,500 – €3,500/year, fast visa processing, options with or without IELTS (Medium of Instruction accepted), and a welcoming Mediterranean student lifestyle.",
    why: [
      "Official flagship banner destination with proven student visa success",
      "Affordable tuition fees starting as low as €2,500 to €3,500 per academic year",
      "Admission open without IELTS through Medium of Instruction (MOI) certificates",
      "Swift visa processing with very high approval rates for Bangladeshi students",
      "Low living expenses compared to Western European destinations (€300 - €500/month)",
      "High quality European accredited degrees recognized worldwide",
      "Opportunity to transfer credits to European partner universities",
    ],
    popularFields: [
      "Business Administration & International Management",
      "Computer Science & Information Technology",
      "Hospitality, Tourism & Hotel Management",
      "Accounting & Finance",
      "Nursing & Healthcare Management",
    ],
    avgTuition: "€2,500 – €4,500 / year (very affordable European track)",
    avgLiving: "€3,600 – €5,500 / year",
    pswv: "Post-study job placement and European career options",
    intakes: "February (Spring), June (Summer) & October (Fall) Intakes",
    scholarships: "Up to 50% Merit Scholarships on Tuition Fees",
    topUnis: [
      "Near East University",
      "Eastern Mediterranean University",
      "Cyprus International University",
      "European University of Lefke",
      "University of Nicosia",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Banner Flagship · High Visa Success · MOI Accepted",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Fast 1-year Masters, 2-Year Graduate PSW, London Office Support & With/Without IELTS",
    intro:
      "The UK is a core focus destination for UNI Consultants. With our dedicated liaison office in London (Romford Road) and principal headquarters in Dhaka, we offer unmatched end-to-end guidance: fast-track 1-year Masters, 2-year Graduate Route Post-Study Work Visas, university fee bursaries, and options with or without IELTS (MOI accepted in select institutions).",
    why: [
      "Dedicated UNI Consultants UK Liaison Office in London (Citygate Business Centre, Romford Road)",
      "1-Year fast-track Master degrees saving significant time, tuition, and living costs",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon degree completion",
      "Legal 20 hours per week part-time work rights during study semesters",
      "Study gap accepted with valid professional experience and documentation",
      "Options with or without IELTS (MOI accepted in select partner universities)",
      "Institutional merit scholarships ranging from £1,500 to £5,000",
    ],
    popularFields: [
      "Computer Science, Artificial Intelligence & Cybersecurity",
      "International Business, Management & Global MBA",
      "Data Analytics & Financial Technology",
      "Public Health, Nursing & Health Informatics",
      "Civil, Mechanical & Electrical Engineering",
    ],
    avgTuition: "£11,000 – £16,000 / year (after partner scholarships)",
    avgLiving: "£9,207 – £12,500 / year (regional cost savings outside London)",
    pswv: "2 Years (Graduate Route Visa) / 3 Years for PhD",
    intakes: "January/February, May/June & September/October (Major Intakes)",
    scholarships: "£1,500 – £5,000 University Merit Bursaries & Early Payment Discounts",
    topUnis: [
      "University of Hertfordshire",
      "Coventry University",
      "University of Greenwich",
      "University of East London",
      "Birmingham City University",
      "University of Chester",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Flagship Destination · London Liaison Office · Fast CAS Processing",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia",
    tagline: "Global UK/Australian Branch Campuses, Affordable Living & Fast Visa Approval",
    intro:
      "Featured prominently on the official banner, Malaysia offers world-class education at a fraction of Western costs. Earn prestigious British and Australian degrees from reputable branch campuses, study in a vibrant multicultural environment, and enjoy an uncomplicated visa process with or without IELTS.",
    why: [
      "Official flagship banner destination with rapid visa processing",
      "Earn prestigious UK and Australian dual degrees at 50% lower tuition costs",
      "No rigorous embassy visa interview requirements; EMGS student pass approval",
      "Affordable living costs ($300 – $450/month) with world-class infrastructure",
      "Medium of Instruction (MOI) widely accepted for undergraduate and postgraduate entry",
      "Safe, multicultural, student-friendly environment with rich cultural comfort",
      "Option to transfer credits to UK, Australia, or Canada campuses",
    ],
    popularFields: [
      "Information Technology, Software Engineering & Data Science",
      "Business Administration, Marketing & International Finance",
      "Biotechnology, Biomedical Sciences & Pharmacy",
      "Hospitality & International Tourism Management",
      "Mechanical & Electronic Engineering",
    ],
    avgTuition: "$3,500 – $6,500 / year",
    avgLiving: "$3,600 – $5,200 / year",
    pswv: "Career opportunities in Southeast Asian multinational tech hubs",
    intakes: "January, March, July, September & October",
    scholarships: "20% to 50% Academic Merit Fee Discounts",
    topUnis: [
      "Taylor's University",
      "Sunway University",
      "Asia Pacific University (APU)",
      "UCSI University",
      "INTI International University",
      "Universiti Malaya (UM)",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Banner Flagship · Dual UK/AUS Degrees · Fast EMGS Approval",
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    region: "Europe",
    tagline: "European Schengen Zone, English-Speaking Island, Legal Part-Time Work & Low Fees",
    intro:
      "Malta is one of UNI Consultants' most sought-after European destinations. As an English-speaking EU and Schengen nation, Malta combines high-standard British-influenced education, 20 hours/week legal part-time work rights, and visa-free travel across all 29 Schengen European countries.",
    why: [
      "Official flagship banner destination with high visa success rate",
      "Full member of the European Union & Schengen Area (travel to 29 European countries)",
      "Official English-speaking country — zero language barrier in classes and daily life",
      "Legal part-time work rights (20 hours/week) during academic studies",
      "Affordable tuition fees compared to other Schengen members (€4,000 - €7,000/year)",
      "Option to apply with Medium of Instruction (MOI) or IELTS 5.5+",
      "Pathway to European job markets and long-term career progression",
    ],
    popularFields: [
      "Business Management, Leadership & Global Marketing",
      "Information Technology, Cloud Computing & Cyber Security",
      "Tourism, Hotel Operations & Luxury Event Management",
      "Health Care Management & Social Care",
      "Accounting & International Banking",
    ],
    avgTuition: "€4,500 – €7,500 / year",
    avgLiving: "€5,000 – €7,000 / year",
    pswv: "6 to 9 Months European job search extension upon graduation",
    intakes: "February, May, September & November",
    scholarships: "Institutional bursaries and early registration discounts",
    topUnis: [
      "University of Malta",
      "Malta College of Arts, Science and Technology (MCAST)",
      "Global College Malta",
      "London School of Commerce (LSC) Malta",
      "Ascencia Malta",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Banner Flagship · Schengen Gateway · English Speaking",
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe",
    tagline: "World #1 Education System, 30 hrs/week Work Rights, 2-Year Post-Study Visa",
    intro:
      "Consistently ranked the happiest nation with the world's most innovative education system. Finnish universities offer English-taught degrees, generous institutional tuition waivers, legal 30 hours per week student work rights, and a 2-year post-study work visa upon graduation.",
    why: [
      "World's leading education framework with high research & innovation ranking",
      "Legal 30 hours per week student work permit during university semesters",
      "Generous 2-year post-study job seeker residence permit upon graduation",
      "Substantial merit-based tuition fee scholarships (20% – 50% discount)",
      "Clear pathway to permanent European residency (PR)",
      "Spouse and dependents entitled to full-time unrestricted work rights",
    ],
    popularFields: [
      "Information & Communication Technology (ICT) and AI",
      "International Business & Sustainable Entrepreneurship",
      "Clean Energy, Environmental Engineering & Cleantech",
      "Nursing & Social Healthcare",
    ],
    avgTuition: "€8,000 – €12,500 / year (scholarships reduce to €4,500 – €7,000)",
    avgLiving: "€7,200 – €9,600 / year",
    pswv: "2 Years Post-Study Work Permit",
    intakes: "January (Spring) & September (Autumn / Joint Application)",
    scholarships: "20% – 50% Finnish University Tuition Fee Waivers",
    topUnis: [
      "Tampere University",
      "Metropolia University of Applied Sciences",
      "LUT University",
      "Haaga-Helia University of Applied Sciences",
      "LAB University of Applied Sciences",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "World #1 Education · 30 Hrs/Week Work · 2-Year PSW",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "World-Class Group of Eight, Up to 4-Year PSW, 48 hrs/fortnight Work Rights",
    intro:
      "Australia provides an exceptional standard of living and globally renowned universities. UNI Consultants assists applicants in securing admissions and Subclass 500 student visas with transparent GTE/GS auditing, scholarship advice, and streamlined documentation.",
    why: [
      "Top-ranked global universities including Group of Eight (Go8) and ATN members",
      "Generous Post-Study Work stream (up to 2–4 years based on location)",
      "48 Hours per fortnight legal work rights during term time; unlimited during vacations",
      "High minimum wage rates offering strong student financial independence",
      "Regional study incentives with extra post-study work years and PR points",
    ],
    popularFields: [
      "Information Technology, Data Science & Cyber Systems",
      "Mining, Mechanical & Civil Engineering",
      "Nursing, Public Health & Biomedical Sciences",
      "Commerce, Accounting & International Finance",
    ],
    avgTuition: "AUD $22,000 – $36,000 / year (after merit grants)",
    avgLiving: "AUD $21,000 – $25,000 / year",
    pswv: "2 to 4 Years Post-Study Work Visa (Subclass 485)",
    intakes: "February & July (Major Intakes), November (Select Programs)",
    scholarships: "AUD $3,000 to 25% Vice-Chancellor Merit Bursaries",
    topUnis: [
      "University of New South Wales",
      "University of Adelaide",
      "Deakin University",
      "La Trobe University",
      "Swinburne University of Technology",
    ],
    withoutIelts: false,
    featured: false,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Post-Graduation Work Permit (PGWP) up to 3 Years & High Quality of Life",
    intro:
      "Canada continues to be one of the top choices for ambitious Bangladeshi students. We provide professional assistance for designated learning institutions (DLIs), provincial attestation letters (PAL), and study permits.",
    why: [
      "World-class universities and applied polytechnic colleges with strong industry co-op",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) upon graduation",
      "Welcoming, diverse, and safe multicultural society with high living standards",
      "Clear, transparent immigration pathways through Express Entry & PNP programs",
    ],
    popularFields: [
      "Computer Science & Applied Artificial Intelligence",
      "Business Analytics, Management & Supply Chain",
      "Civil, Mechanical & Sustainable Energy Engineering",
      "Health Care, Biotechnology & Public Health",
    ],
    avgTuition: "CAD $16,000 – $28,000 / year",
    avgLiving: "CAD $18,000 – $22,000 / year",
    pswv: "Up to 3 Years Post-Graduation Work Permit (PGWP)",
    intakes: "January (Winter), May (Spring) & September (Fall)",
    scholarships: "CAD $2,000 – $10,000 Entrance Bursaries",
    topUnis: [
      "University of Windsor",
      "Brock University",
      "Memorial University of Newfoundland",
      "Conestoga College",
      "Seneca Polytechnic",
    ],
    withoutIelts: false,
    featured: false,
  },
];

export type Course = {
  id: string;
  slug: string;
  title: string;
  bengaliTitle: string;
  badge: string;
  tagline: string;
  targetAudience: string;
  duration: string;
  classesCount: string;
  mockTests: string;
  batchSize: string;
  fee: string;
  schedule: string;
  format: string;
  desc: string;
  features: string[];
  modules: { name: string; desc: string }[];
  learningOutcomes: string[];
  // Compatibility Aliases for components
  icon?: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  classSchedule?: string;
  batchType?: string;
  targetOutcome?: string;
};

export const courses: Course[] = [
  {
    id: "ielts-academic",
    slug: "ielts-academic",
    title: "IELTS Academic Comprehensive Preparation",
    bengaliTitle: "আইইএলটিএস একাডেমিক পূর্ণাঙ্গ প্রস্তুতি (ব্যান্ড ৭.৫+ টার্গেট)",
    badge: "Target Band 7.5+",
    tagline: "Cambridge Authentic Curriculum · British Council & IDP Aligned · 12 Mock Tests",
    targetAudience: "Students aspiring for undergraduate and postgraduate university admissions abroad",
    duration: "2.5 – 3 Months",
    classesCount: "36 Intensive Interactive Sessions",
    mockTests: "12 Full-Length Timed Mock Tests with Personal Band Feedback",
    batchSize: "Max 12–15 Students for Maximum Teacher Attention",
    fee: "Affordable Standard Package (Call for Current Batch Discount)",
    schedule: "Morning, Afternoon & Executive Evening Batches (Sat/Mon/Wed or Sun/Tue/Thu)",
    format: "In-Person Classroom at Dhaka Office & Live Interactive Online Zoom",
    desc: "Rigorous modular training covering all four IELTS components (Listening, Reading, Writing Task 1 & 2, and Speaking). Learn authentic Cambridge question-solving strategies, speed-reading skimming techniques, high-scoring essay templates, and daily one-on-one speaking drills.",
    icon: "🎓",
    subtitle: "Cambridge Authentic Curriculum · British Council & IDP Aligned · 12 Mock Tests",
    description: "Rigorous modular training covering all four IELTS components (Listening, Reading, Writing Task 1 & 2, and Speaking). Learn authentic Cambridge question-solving strategies, speed-reading skimming techniques, high-scoring essay templates, and daily one-on-one speaking drills.",
    highlights: [
      "Cambridge authentic practice tests (Books 12 to 19) with in-depth solution keys",
      "One-on-one speaking practice with personalized error correction and score band prediction",
      "Specialized Writing Task 1 & Task 2 workshops with line-by-line grammar auditing",
      "12 Full-length computer-delivered and paper-based timed mock examinations",
      "Free access to UNI Consultants' physical and digital IELTS resource library",
      "Direct support with official British Council / IDP IELTS test date registration",
    ],
    classSchedule: "Morning, Afternoon & Executive Evening Batches (Sat/Mon/Wed or Sun/Tue/Thu)",
    batchType: "In-Person Classroom at Dhaka Office & Live Interactive Online Zoom",
    targetOutcome: "Target Band 7.5+",
    features: [
      "Cambridge authentic practice tests (Books 12 to 19) with in-depth solution keys",
      "One-on-one speaking practice with personalized error correction and score band prediction",
      "Specialized Writing Task 1 & Task 2 workshops with line-by-line grammar auditing",
      "12 Full-length computer-delivered and paper-based timed mock examinations",
      "Free access to UNI Consultants' physical and digital IELTS resource library",
      "Direct support with official British Council / IDP IELTS test date registration",
    ],
    modules: [
      { name: "Listening Module", desc: "Predicting answers, signpost words, British/Australian accents, and map labeling techniques." },
      { name: "Reading Module", desc: "Mastering True/False/Not Given, Heading Matching, Skimming, and Scanning within 60 minutes." },
      { name: "Writing Task 1 & 2", desc: "Data charts, graphs, process diagrams, academic essay structures, and lexical resource enhancement." },
      { name: "Speaking Fluency", desc: "Part 1, 2 (Cue Card), and 3 discussions with emphasis on fluency, coherence, and pronunciation." },
    ],
    learningOutcomes: [
      "Achieve an overall band score of 6.5 to 8.0+ for direct foreign university admission",
      "Overcome exam anxiety through continuous timed simulation and expert reviews",
      "Acquire sophisticated academic vocabulary and precise grammatical sentence structures",
    ],
  },
  {
    id: "ielts-general",
    slug: "ielts-general",
    title: "IELTS General Training (PR, Migration & Work Visas)",
    bengaliTitle: "আইইএলটিএস জেনারেল ট্রেনিং (মাইগ্রেশন, পিআর ও ওয়ার্ক ভিসা)",
    badge: "CLB 7–9 Target",
    tagline: "Workplace & Migration Focused · Letter Writing Mastery · Practical Reading",
    targetAudience: "Professionals seeking permanent residency, skilled migration, or work permits abroad",
    duration: "2 Months",
    classesCount: "26 Live Classes",
    mockTests: "8 Full Mock Tests with Evaluation",
    batchSize: "10–12 Working Professionals",
    fee: "Executive Package Available",
    schedule: "Friday & Saturday Weekend Batches / Late Evening 8:00 PM Batches",
    format: "Offline Classroom & Hybrid Online",
    desc: "Designed specifically for busy professionals preparing for Canadian Express Entry, Australian PR, or UK skilled worker pathways. Focuses heavily on formal/informal letter writing, everyday workplace reading notices, and confident conversational speaking.",
    icon: "📖",
    subtitle: "Workplace & Migration Focused · Letter Writing Mastery · Practical Reading",
    description: "Designed specifically for busy professionals preparing for Canadian Express Entry, Australian PR, or UK skilled worker pathways. Focuses heavily on formal/informal letter writing, everyday workplace reading notices, and confident conversational speaking.",
    highlights: [
      "Tailored for working adults with flexible weekend and evening scheduling",
      "Step-by-step templates for formal, semi-formal, and informal letter correspondence",
      "Speed reading strategies for workplace announcements, advertisements, and manuals",
      "Detailed band score breakdown matching Canadian CLB and Australian visa points",
    ],
    classSchedule: "Friday & Saturday Weekend Batches / Late Evening 8:00 PM Batches",
    batchType: "Offline Classroom & Hybrid Online",
    targetOutcome: "CLB 7–9 Target",
    features: [
      "Tailored for working adults with flexible weekend and evening scheduling",
      "Step-by-step templates for formal, semi-formal, and informal letter correspondence",
      "Speed reading strategies for workplace announcements, advertisements, and manuals",
      "Detailed band score breakdown matching Canadian CLB and Australian visa points",
    ],
    modules: [
      { name: "Practical Reading", desc: "Workplace notices, staff training guides, employee contracts, and general interest articles." },
      { name: "General Writing", desc: "Letter composition for varied scenarios and concise opinion/argument essays." },
      { name: "Conversational Speaking", desc: "Social and professional communication, expressing opinions, and everyday interaction." },
      { name: "Listening Skills", desc: "Everyday social contexts, transactional dialogues, and instructions." },
    ],
    learningOutcomes: [
      "Attain CLB 7 to CLB 9 benchmarks required for skilled migration and PR points",
      "Communicate effortlessly in international English-speaking professional workplaces",
    ],
  },
  {
    id: "spoken-english",
    slug: "spoken-english",
    title: "Professional Spoken English & Fluency Program",
    bengaliTitle: "প্রফেশনাল স্পোকেন ইংলিশ ও ফ্লুয়েন্সি প্রোগ্রাম",
    badge: "Interview Ready",
    tagline: "Embassy Visa Interview Preparation · Accent Neutralization · Public Speaking",
    targetAudience: "College/university students, job seekers, and prospective visa applicants",
    duration: "2 Months",
    classesCount: "24 Interactive Audio-Visual Sessions",
    mockTests: "4 Comprehensive Viva & Embassy Interview Simulations",
    batchSize: "Max 12 Students (High Speaking Time)",
    fee: "Student-Friendly Fee with Installment Facility",
    schedule: "3 Days a Week (Morning & Evening Batches Available)",
    format: "Interactive Speaking Club & Classroom Practice",
    desc: "Transform your English from hesitant to fluent and confident. This course removes fear and shyness, enhances practical vocabulary, polishes pronunciation, and prepares you thoroughly for foreign embassy visa interviews and corporate presentations.",
    icon: "🗣️",
    subtitle: "Embassy Visa Interview Preparation · Accent Neutralization · Public Speaking",
    description: "Transform your English from hesitant to fluent and confident. This course removes fear and shyness, enhances practical vocabulary, polishes pronunciation, and prepares you thoroughly for foreign embassy visa interviews and corporate presentations.",
    highlights: [
      "Rigorous embassy visa interview simulation with common officer questions",
      "Daily extempore speaking, group discussions, and role-playing drills",
      "Eliminating mother-tongue influence (MTI) with phonetic practice",
      "Real-world communication scenarios: ordering, booking, presenting, and debating",
    ],
    classSchedule: "3 Days a Week (Morning & Evening Batches Available)",
    batchType: "Interactive Speaking Club & Classroom Practice",
    targetOutcome: "Interview Ready",
    features: [
      "Rigorous embassy visa interview simulation with common officer questions",
      "Daily extempore speaking, group discussions, and role-playing drills",
      "Eliminating mother-tongue influence (MTI) with phonetic practice",
      "Real-world communication scenarios: ordering, booking, presenting, and debating",
    ],
    modules: [
      { name: "Foundation & Phonics", desc: "Vowel/consonant sounds, word stress, intonation, and speech rhythm." },
      { name: "Everyday Fluency", desc: "Idiomatic expressions, connectors, asking questions, and expressing polite disagreement." },
      { name: "Embassy Interview Coaching", desc: "Answering visa officer questions about funding, course choice, and career intent." },
      { name: "Public Speaking & Presentations", desc: "Body language, confidence, speech pacing, and engaging an audience." },
    ],
    learningOutcomes: [
      "Speak English spontaneously without translating from Bengali in your head",
      "Face foreign visa interview officers with composure, clarity, and confidence",
    ],
  },
  {
    id: "kids-english",
    slug: "kids-english",
    title: "Kids English & Young Communicators Academy",
    bengaliTitle: "কিডস ইংলিশ ও আর্লি ল্যাঙ্গুয়েজ ডেভেলপমেন্ট (বয়স ৬–১৪)",
    badge: "Ages 6–14",
    tagline: "Fun Phonics · Creative Storytelling · Early Confidence · Zero Rote Learning",
    targetAudience: "School students (Grades 1 to 8) seeking early English language mastery",
    duration: "3 Months",
    classesCount: "24 Fun-Filled Activity-Based Classes",
    mockTests: "Continuous Formative Assessments & Fun Competitions",
    batchSize: "Small Batches of 8–10 Children",
    fee: "Affordable Monthly / Quarterly Enrollment",
    schedule: "Friday & Saturday Weekend Morning / Afternoon Batches",
    format: "Interactive Activity Classroom with Visual Learning Aids",
    desc: "A joyful, engaging environment where children develop natural English communication skills. We use interactive games, audio stories, phonics songs, and drama play to build rock-solid vocabulary, clear pronunciation, and effortless spoken confidence.",
    icon: "🧒",
    subtitle: "Fun Phonics · Creative Storytelling · Early Confidence · Zero Rote Learning",
    description: "A joyful, engaging environment where children develop natural English communication skills. We use interactive games, audio stories, phonics songs, and drama play to build rock-solid vocabulary, clear pronunciation, and effortless spoken confidence.",
    highlights: [
      "Phonics-first curriculum ensuring accurate spelling and pronunciation from childhood",
      "Visual flashcards, storytelling, puppet play, and picture description activities",
      "Building grammatical sentence structure intuitively without tedious grammar rules",
      "Confidence-building presentation days where kids share their favorite stories",
      "Regular progress reports and personal feedback provided to parents",
    ],
    classSchedule: "Friday & Saturday Weekend Morning / Afternoon Batches",
    batchType: "Interactive Activity Classroom with Visual Learning Aids",
    targetOutcome: "Ages 6–14",
    features: [
      "Phonics-first curriculum ensuring accurate spelling and pronunciation from childhood",
      "Visual flashcards, storytelling, puppet play, and picture description activities",
      "Building grammatical sentence structure intuitively without tedious grammar rules",
      "Confidence-building presentation days where kids share their favorite stories",
      "Regular progress reports and personal feedback provided to parents",
    ],
    modules: [
      { name: "Jolly Phonics & Sounds", desc: "Sound-letter recognition, blending, tricky words, and clear pronunciation." },
      { name: "Vocabulary & Word Power", desc: "Animals, science, nature, family, school, and everyday objects." },
      { name: "Storytelling & Dialogue", desc: "Reading short illustrated storybooks, acting out scenes, and asking questions." },
      { name: "Creative Expression", desc: "Describing pictures, sharing daily experiences, and simple writing." },
    ],
    learningOutcomes: [
      "Cultivate a genuine love for reading and speaking English from an early age",
      "Achieve native-like pronunciation and natural sentence construction",
      "Excel in school English curriculum, elocution, and conversational contests",
    ],
  },
];

export type Service = {
  id: string;
  slug: string;
  title: string;
  bengaliTitle: string;
  category: "study-abroad" | "language-academy" | "visa-support";
  icon: string;
  tagline: string;
  desc: string;
  bengaliDesc: string;
  features: string[];
  destinationsCovered?: string[];
};

export const services: Service[] = [
  {
    id: "study-abroad",
    slug: "study-abroad",
    title: "Global University Admission & Course Selection",
    bengaliTitle: "উচ্চশিক্ষা কাউন্সেলিং ও বিশ্ববিদ্যালয় ভর্তি সহায়তা",
    category: "study-abroad",
    icon: "🎓",
    tagline: "One Stop Solution for Study Abroad Education · Admission Open For Any Intake!!",
    desc: "Complete, personalized university guidance across Cyprus, UK, Malaysia, Malta, Finland, Australia, and Canada. We analyze your academic profile, match you with recognized accredited institutions, fast-track offer letters, and negotiate scholarship opportunities.",
    bengaliDesc: "শিক্ষার্থীর প্রোফাইল, বাজেট ও ভবিষ্যতের ক্যারিয়ার বিবেচনা করে সেরা বিশ্ববিদ্যালয় নির্বাচন, অ্যাপ্লিকেশন প্রসেসিং ও স্কলারশিপ পাওয়ার নিশ্চয়তা।",
    features: [
      "Comprehensive profile assessment with zero file opening fee",
      "Admissions open for any intake: Spring, Summer, and Fall semesters",
      "Options with or without IELTS (Medium of Instruction / MOI accepted)",
      "Direct representation of top institutions across Cyprus, UK, Malaysia & Malta",
      "Long study gap accepted with valid work experience documentation",
      "Low CGPA solutions with accommodating European institutions",
    ],
    destinationsCovered: ["Cyprus", "UK", "Malaysia", "Malta", "Finland", "Australia", "Canada"],
  },
  {
    id: "ielts-academy",
    slug: "ielts-academy",
    title: "IELTS Preparation (Academic & General)",
    bengaliTitle: "আইইএলটিএস প্রস্তুতি কোর্স (একাডেমিক ও জেনারেল)",
    category: "language-academy",
    icon: "🗣️",
    tagline: "Cambridge Authentic Curriculum · Band 7.5+ Target · 12 Mock Tests",
    desc: "State-of-the-art IELTS training tailored to Bangladeshi students. Small interactive batches, comprehensive Cambridge practice modules, personalized speaking evaluations, and line-by-line writing corrections.",
    bengaliDesc: "কেমব্রিজ অথেনটিক ম্যাটেরিয়ালসে অভিজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে আইইএলটিএস-এ কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জনের আধুনিক প্রশিক্ষণ।",
    features: [
      "Cambridge authentic practice tests with detailed solution analysis",
      "Regular one-on-one speaking mock sessions with instant feedback",
      "Intensive writing Task 1 & Task 2 structure masterclasses",
      "Flexible weekday and weekend batches for students and professionals",
    ],
  },
  {
    id: "spoken-english",
    slug: "spoken-english",
    title: "Spoken English & Embassy Interview Coaching",
    bengaliTitle: "স্পোকেন ইংলিশ ও এম্বাসি ইন্টারভিউ প্রস্তুতি",
    category: "language-academy",
    icon: "🎙️",
    tagline: "Overcome Hesitation · Build Real Fluency · Embassy Interview Ready",
    desc: "Designed to help students speak English naturally and confidently. Includes intensive mock interview sessions replicating genuine embassy visa interview scenarios with former visa counselors.",
    bengaliDesc: "মুখের জড়তা দূর করে সাবলীলভাবে ইংরেজিতে কথা বলা এবং এম্বাসির কঠিন ভিসা ইন্টারভিউ সহজে উৎরে যাওয়ার কৌশল।",
    features: [
      "Face-to-face viva and embassy interview simulation",
      "Phonetics, accent neutralization, and everyday practical vocabulary",
      "Extempore speaking, public debates, and interactive role-playing",
    ],
  },
  {
    id: "kids-english",
    slug: "kids-english",
    title: "Kids English & Young Communicators",
    bengaliTitle: "কিডস ইংলিশ একাডেমি (বয়স ৬ থেকে ১৪ বছর)",
    category: "language-academy",
    icon: "🎈",
    tagline: "Fun Phonics · Creative Storytelling · Lifelong Communication Confidence",
    desc: "A vibrant, creative environment where young learners develop love for English through games, phonics, stories, and presentations. No stressful memorization — pure natural language acquisition.",
    bengaliDesc: "ছোটবেলা থেকেই শিশুদের সঠিক উচ্চারণে ইংরেজি শেখার আধুনিক আনন্দময় মাধ্যম। মুখস্থবিদ্যা নয়, আনন্দের সাথে ভাষা শিক্ষা।",
    features: [
      "Interactive phonics ensuring clear British/neutral pronunciation",
      "Flashcards, rhymes, storytelling, and puppet conversations",
      "Small batches of 8-10 children with continuous progress monitoring",
    ],
  },
  {
    id: "visa-guidance",
    slug: "visa-guidance",
    title: "Visa Documentation & High Success Processing",
    bengaliTitle: "নিখুঁত ভিসা প্রসেসিং ও ডকুমেন্টেশন গাইডেন্স",
    category: "visa-support",
    icon: "🛡️",
    tagline: "High Visa Success Rate · Rigorous File Auditing · Zero Hidden Charges",
    desc: "Our hallmark service. We audit every financial paper, statement of purpose (SOP), relationship proof, and sponsorship record to meet exact embassy benchmarks for Cyprus, UK, Malaysia, Malta, and Schengen nations.",
    bengaliDesc: "ভিসা আবেদনের প্রতিটি ডকুমেন্ট ও আর্থিক কাগজ নির্ভুলভাবে প্রস্তুত করে ভিসা প্রাপ্তির সম্ভাবনা সর্বোচ্চ নিশ্চিত করা।",
    features: [
      "Multi-tier file auditing by senior visa counselors before submission",
      "Financial solvency and bank document guidance adhering to embassy rules",
      "Compelling, plagiarism-free Statement of Purpose (SOP) guidance",
      "Comprehensive post-visa briefing: ticket booking, currency exchange, travel insurance",
    ],
  },
  {
    id: "scholarship-guidance",
    slug: "scholarship-guidance",
    title: "Scholarship Information & Assistance",
    bengaliTitle: "স্কলারশিপ ইনফরমেশন ও আবেদন সহায়তা",
    category: "study-abroad",
    icon: "🌟",
    tagline: "Merit Grants · Early Payment Discounts · Up to 50% Tuition Waiver",
    desc: "We ensure you don't miss out on financial aid. Our team maps your academic score and achievements to available university merit scholarships, international bursaries, and early-bird fee reductions.",
    bengaliDesc: "মেধার ভিত্তিতে আন্তর্জাতিক স্কলারশিপ ও টিউশন ফি ওয়েভার পাওয়ার জন্য সঠিক দিকনির্দেশনা ও আবেদন সহায়তা।",
    features: [
      "Up to 50% scholarship opportunities on tuition fees in Cyprus, UK & Malaysia",
      "Guidance on scholarship essays, motivation letters, and portfolio submissions",
      "Early-bird application fee waivers and university deposit discounts",
    ],
  },
  {
    id: "pre-departure",
    slug: "pre-departure",
    title: "Pre-Departure Briefing & Student Housing Support",
    bengaliTitle: "প্রি-ডিপার্চার ব্রিফিং ও আবাসন সহায়তা",
    category: "visa-support",
    icon: "✈️",
    tagline: "UK London Liaison Office Support · Airport Pickup · Safe Accommodation",
    desc: "Your journey doesn't end with a visa. Through our Dhaka headquarters and London liaison office, we organize pre-departure orientations, connect you with student housing, assist with airport pickup, and explain part-time work rights.",
    bengaliDesc: "বিদেশে পৌঁছানোর পর আবাসন, এয়ারপোর্ট পিকআপ ও প্রাথমিক সহায়তার জন্য আমাদের লন্ডন অফিস ও গ্লোবাল নেটওয়ার্ক সবসময় পাশে আছে।",
    features: [
      "Pre-departure packing, immigration clearance, and quarantine guidelines",
      "On-campus and off-campus verified student accommodation booking",
      "Guidance on local SIM cards, bank accounts, and student travel passes",
      "Post-arrival student welfare liaison via our London UK office",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Profile Assessment",
    bengaliTitle: "ফ্রি প্রোফাইল এসেসমেন্ট",
    desc: "Visit our Dhaka Principal Office (92 Ali Bhaban, 7th Fl, Kazi Nazrul Islam Ave) or connect online. Direct discussion with an expert counselor to evaluate your academic records, IELTS/MOI status, and budget.",
    icon: "📋",
  },
  {
    step: "02",
    title: "University & Course Selection",
    bengaliTitle: "বিশ্ববিদ্যালয় ও বিষয় নির্বাচন",
    desc: "We match your aspirations with accredited universities in Cyprus, UK, Malaysia, Malta, and beyond, factoring in scholarships, tuition affordability, and career prospects.",
    icon: "🎯",
  },
  {
    step: "03",
    title: "Application & Prompt Offer Letter",
    bengaliTitle: "আবেদন ও অফার লেটার প্রাপ্তি",
    desc: "Our admissions wing files error-free applications, secures application fee waivers where possible, and liaises directly with university registrars for fast-track CAS/Offer letters.",
    icon: "📨",
  },
  {
    step: "04",
    title: "Visa Documentation & Flying High",
    bengaliTitle: "ভিসা প্রসেসিং ও ফ্লাইং",
    desc: "Rigorous visa file compilation, bank solvency verification, intensive mock interview training, and pre-departure briefing. Receive your visa and embark on your journey!",
    icon: "✈️",
  },
];

export const testimonials = [
  {
    name: "Mohammad Rashedul Islam",
    destination: "Cyprus (Near East University)",
    program: "B.Sc. in Computer Science",
    quote:
      "UNI Consultants is truly honest to their word! 'Honesty is our commitment' is not just a slogan. I got my Cyprus admission without IELTS using my Medium of Instruction (MOI) certificate and my visa was approved in record time.",
    bengaliQuote:
      "ইউআই কনসালট্যান্টস-এর সততা ও আন্তরিকতা অসাধারণ। আইইএলটিএস ছাড়াই MOI দিয়ে সাইপ্রাসের ভিসার পুরো প্রসেস এতো সহজে সম্পন্ন হবে ভাবতে পারিনি!",
    rating: 5,
    year: "2026",
    badge: "🇨🇾 Cyprus Visa Success",
  },
  {
    name: "Tanzina Akter",
    destination: "United Kingdom (University of Hertfordshire)",
    program: "M.Sc. in International Business",
    quote:
      "From my IELTS preparation to university selection and CAS issuance, UNI Consultants guided me every step of the way. Their counselors gave me direct, realistic advice without making false promises.",
    bengaliQuote:
      "ইউকে-তে উচ্চশিক্ষার জন্য ইউআই কনসালট্যান্টস-এর কাউন্সেলিং অতুলনীয়। কোনো গোপন খরচ ছাড়া সঠিক দিকনির্দেশনা পেয়ে আমি অত্যন্ত কৃতজ্ঞ।",
    rating: 5,
    year: "2026",
    badge: "🇬🇧 UK Visa Success",
  },
  {
    name: "Tanvir Ahmed",
    destination: "Malaysia (Taylor's University)",
    program: "Bachelor of Business Administration",
    quote:
      "I had a 3-year study gap after HSC, but the senior counselors at UNI Consultants evaluated my work profile and mapped me to a fantastic program in Malaysia. Today I am studying comfortably with low living costs!",
    bengaliQuote:
      "স্টাডি গ্যাপ থাকার পরেও অভিজ্ঞ কাউন্সেলরদের সঠিক নির্দেশনায় মালয়েশিয়ার স্বনামধন্য বিশ্ববিদ্যালয়ে আমার ভিসা নিশ্চিত হয়েছে।",
    rating: 5,
    year: "2026",
    badge: "🇲🇾 Malaysia Visa Success",
  },
  {
    name: "Shahriar Hossain",
    destination: "Malta (Schengen European Union)",
    program: "Diploma in Information Technology",
    quote:
      "Getting a European Schengen visa was my biggest dream. UNI Consultants checked every paper meticulously and conducted two rounds of mock interviews with me. Visa granted on first attempt!",
    bengaliQuote:
      "ইউরোপের সেনজেন দেশ মাল্টায় পড়ার স্বপ্ন পূরণ করেছে ইউআই কনসালট্যান্টস। তাদের নিখুঁত ডকুমেন্টেশন ও ইন্টারভিউ প্রস্তুতিই আমার সাফল্যের চাবিকাঠি।",
    rating: 5,
    year: "2026",
    badge: "🇲🇹 Malta Schengen Visa",
  },
  {
    name: "Nusrat Jahan",
    destination: "Finland (Metropolia UAS)",
    program: "B.Eng. in Information Technology",
    quote:
      "Attended the IELTS preparation batch at UNI Consultants and scored Band 7.5. Then their study abroad wing handled my Finnish joint application smoothly. Top-tier service!",
    bengaliQuote:
      "এখানে IELTS করে ৭.৫ পেয়েছি এবং তাদের সহায়তায় ফিনল্যান্ডে পড়াশোনার সুযোগ পেয়েছি। তাদের শিক্ষক ও কাউন্সেলররা অত্যন্ত যত্নশীল।",
    rating: 5,
    year: "2026",
    badge: "🇫🇮 Finland Visa Success",
  },
];

export const faqs = [
  {
    q: "Why is UNI Consultants' motto 'Honesty is our Commitment'?",
    a: "We believe overseas higher education is a life-altering investment. We never give false guarantees, never charge undisclosed hidden fees, and always evaluate student academic and financial backgrounds honestly before filing applications.",
  },
  {
    q: "Can I apply to study abroad without an IELTS score?",
    a: "Yes! As highlighted on our official success banner ('WITH / WITHOUT IELTS'), destinations such as Cyprus, Malaysia, and select universities in the UK and Malta accept Medium of Instruction (MOI) certificates from your previous English-medium college or university, as well as Duolingo English Tests (DET) or internal language assessments.",
  },
  {
    q: "What countries are featured on your official banner?",
    a: "Our official success banner prominently features Cyprus (🇨🇾), the United Kingdom (🇬🇧), Malaysia (🇲🇾), and Malta (🇲🇹), where we have strong track records of high visa approval rates and direct institutional relationships. We also assist with Finland, Australia, Canada, Spain, and other destinations.",
  },
  {
    q: "Where is UNI Consultants' office located in Dhaka?",
    a: "Our principal head office is at 92, Ali Bhaban, 7th Floor, Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh (near the Kawran Bazar and Farmgate corridor). We also maintain a branch service hub at 74/B/1, Unit-211, RH Home Centre, Green Road, Farmgate, Dhaka-1205.",
  },
  {
    q: "Do you have offices outside Dhaka?",
    a: "Yes! In Bangladesh, we operate our regional branch at Unit 08, Ground Floor, Townhall, Town Hall Road, Habiganj, Sylhet. Internationally, our UK liaison office is situated at Citygate Business Centre, 246-250 Romford Road, London, UK, to support students upon arrival.",
  },
  {
    q: "What language courses are offered at UNI Consultants?",
    a: "We provide comprehensive IELTS Preparation (Academic for higher education abroad, and General Training for PR/migration), Spoken English & Fluency Programs (with embassy interview coaching), and our specialized Kids English Academy for young communicators aged 6 to 14.",
  },
  {
    q: "How can I book a free expert consultation?",
    a: "You can visit our Dhaka office directly during business hours (Saturday – Thursday: 10:00 AM – 7:00 PM), call our hotlines at +880 1335-065544 / +880 1335-065540, email application@uniconsultants.co.uk, or click the WhatsApp button on our website for an immediate response.",
  },
  {
    q: "Can students with study gaps or low CGPA apply?",
    a: "Yes. We specialize in finding legitimate university pathways for students with study gaps (justified through work experience, professional training, or personal circumstances) and students with modest CGPA down to 2.5 in accommodating universities in Cyprus, Malaysia, and the UK.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "cyprus-intake",
    title: "Cyprus Upcoming Intakes — Admission Open With / Without IELTS",
    badge: "Official Banner Flagship",
    date: "Spring & Fall Intakes Active",
    destination: "Cyprus 🇨🇾",
    desc: "Low tuition fees starting at €2,500/year, fast-track visa processing, and up to 50% merit scholarship awards. Apply with Medium of Instruction (MOI) or IELTS.",
    highlights: [
      "Tuition starting €2,500/year",
      "Medium of Instruction (MOI) accepted",
      "High visa success rate",
      "Free profile assessment",
    ],
  },
  {
    id: "uk-intake",
    title: "UK Intakes — 1-Year Fast Masters & 2-Year Graduate Route PSW",
    badge: "London Liaison Support",
    date: "Jan, May & Sept Intakes",
    destination: "United Kingdom 🇬🇧",
    desc: "Confirmed university admissions, fast-track CAS processing, and scholarship grants of £1,500 to £5,000. Post-arrival student welfare backed by our London office.",
    highlights: [
      "1-Year Masters degree savings",
      "2-Year Graduate Route PSW",
      "Direct London office support",
      "Spouse dependent visa permitted for eligible research degrees",
    ],
  },
  {
    id: "malaysia-intake",
    title: "Malaysia Dual Degrees — UK & Australian Reputable Campuses",
    badge: "Affordable Global Track",
    date: "Rolling Intakes Every Month",
    destination: "Malaysia 🇲🇾",
    desc: "Earn world-renowned British and Australian degrees at 50% lower tuition and living expenses. Smooth EMGS visa processing with zero hassle.",
    highlights: [
      "Dual UK/Australian degree qualifications",
      "Low living cost ($350 - $450/month)",
      "High visa approval without embassy interview",
      "Credit transfer options",
    ],
  },
  {
    id: "malta-intake",
    title: "Malta European Schengen Intakes — Study & Work in EU",
    badge: "Schengen European Gateway",
    date: "Feb, May & Sept Intakes",
    destination: "Malta 🇲🇹",
    desc: "English-speaking European island with legal 20 hours/week part-time work rights and visa-free travel across all 29 Schengen member states.",
    highlights: [
      "Full Schengen member travel access",
      "100% English-speaking environment",
      "Legal 20 hrs/week part-time work",
      "Affordable European living",
    ],
  },
  {
    id: "ielts-batch",
    title: "IELTS Academy — New Comprehensive Preparation Batches",
    badge: "Target Band 7.5+",
    date: "Saturday / Monday Starts",
    destination: "Language Academy",
    desc: "Enroll in our intensive Cambridge authentic IELTS preparation batches. 36 interactive classes, 12 full-length timed mock tests, and 1-on-1 speaking evaluation.",
    highlights: [
      "Cambridge Books 12 to 19 material",
      "12 Full-length mock examinations",
      "Small batches (max 12–15 students)",
      "Morning, evening & weekend schedules",
    ],
  },
  {
    id: "spoken-kids",
    title: "Spoken English Fluency & Kids English Club",
    badge: "Confidence & Accent",
    date: "Weekend & Evening Slots",
    destination: "Spoken & Kids Academy",
    desc: "Empowering adults with embassy interview readiness and school children (ages 6–14) with phonics, joyful storytelling, and lifelong English speaking confidence.",
    highlights: [
      "Embassy interview simulation for adults",
      "Phonics & visual storytelling for kids",
      "Small groups for individual speaking time",
      "Installment fee facilities",
    ],
  },
];