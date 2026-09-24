import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { company } from "@/lib/site-data";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { IconPhone, IconWhatsApp } from "@/components/ui-blocks";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0b1329] text-white pt-16 pb-24 md:pb-16 text-xs relative overflow-hidden border-t border-orange-500/20">
      {/* Subtle Dark Pattern */}
      <div className="absolute inset-0 bg-radial-pattern opacity-10 pointer-events-none" />

      <div className="section-shell relative z-10">
        {/* Main 3-Column Footer Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.8fr_1.1fr] gap-10 lg:gap-14 pb-14 border-b border-white/10"
        >
          {/* Column 1: Brand Info & Newsletter */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center gap-3">
                <BrandLogo size={52} withText textClassName="flex text-white" variant="dark" />
              </Link>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-medium">
                {company.tagline}. {company.bengaliHeadline}
              </p>

              {/* Verified USPs Strip */}
              <div className="flex flex-wrap gap-2 text-[0.7rem] font-bold">
                <span className="bg-orange-500/20 text-[#fb923c] border border-orange-400/30 px-2.5 py-1 rounded-full">
                  ★ Admission Open For Any Intake!!
                </span>
                <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2.5 py-1 rounded-full">
                  ★ With / Without IELTS Options
                </span>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-1 rounded-full">
                  ★ High Visa Success Rate
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full">
                  ★ Direct Discussions with Expert Counsellor
                </span>
              </div>

              {/* Newsletter Subscription Box */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md max-w-md">
                <div className="text-sm font-bold text-white mb-1">
                  Stay Updated on Upcoming Intakes & Scholarships
                </div>
                <p className="text-[0.73rem] text-slate-400 mb-3.5">
                  Subscribe for verified alerts on Cyprus, UK, Malaysia, Malta, and Europe intakes, scholarship deadlines, and IELTS batch admissions.
                </p>

                {subscribed ? (
                  <div className="rounded-xl bg-emerald-500/20 border border-emerald-400/40 p-2.5 text-center text-xs font-bold text-emerald-200">
                    ✓ Thank you! You are subscribed to UNI Consultants updates.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 rounded-xl border border-white/20 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-[#f37021] focus:ring-1 focus:ring-[#f37021]/30"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-[#f37021] hover:bg-[#ea580c] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <span>Subscribe</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </StaggerItem>

          {/* Column 2: Quick Links */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Featured Destinations
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "cyprus" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in Cyprus 🇨🇾 (Banner Flagship · Low Tuition)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "uk" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in United Kingdom 🇬🇧 (London Office Support)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "malaysia" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in Malaysia 🇲🇾 (Dual UK/AUS Degrees)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "malta" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in Malta 🇲🇹 (Schengen European Gateway)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "finland" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in Finland 🇫🇮 (30 Hrs/Week Work Rights)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "australia" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in Australia 🇦🇺 (Subclass 500 & PSW)</span>
                  </Link>
                </li>
                <li>
                  <Link to="/study-in-{$country}" params={{ country: "canada" }} className="hover:text-[#fb923c] transition-colors flex items-center gap-1.5">
                    <span className="text-[#f37021]">›</span>
                    <span>Study in Canada 🇨🇦 (PGWP & PR Pathways)</span>
                  </Link>
                </li>
                <li className="pt-2 border-t border-white/10">
                  <Link to="/services" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5">
                    <span>★</span>
                    <span>Language Academy (IELTS, Spoken & Kids English)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Column 3: Verified Offices & Contact */}
          <StaggerItem direction="up" distance={24}>
            <div className="space-y-4">
              <div className="text-sm font-bold text-white tracking-wide uppercase">
                Principal Offices & Contacts
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-base text-[#f37021] shrink-0 mt-0.5">📍</span>
                  <div>
                    <div className="font-bold text-white text-xs">
                      {company.offices.headquarters.name}
                    </div>
                    <div className="text-[0.72rem] text-slate-300 mt-1 leading-relaxed">
                      {company.address.full}
                    </div>
                    <div className="text-[0.68rem] text-amber-300 font-medium mt-1">
                      {company.address.networkNote}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1.5 text-[0.73rem]">
                  <div className="flex items-center gap-2 text-slate-300">
                    <IconPhone className="w-3.5 h-3.5 text-[#f37021] shrink-0" />
                    <span className="font-bold text-white">Hotlines:</span>
                    <a href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`} className="hover:text-orange-300 font-semibold">
                      {company.phones[0]}
                    </a>
                    <span>·</span>
                    <a href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`} className="hover:text-orange-300 font-semibold">
                      {company.phones[1]}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-bold text-white">WhatsApp:</span>
                    <a
                      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-300 font-semibold"
                    >
                      {company.whatsappFormatted}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-[#f37021]">✉</span>
                    <span className="font-bold text-white">Email:</span>
                    <a href={`mailto:${company.email}`} className="hover:text-orange-300">
                      {company.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-amber-400">⏰</span>
                    <span className="font-bold text-white">Hours:</span>
                    <span>{company.hours}</span>
                  </div>
                </div>
              </div>

              {/* Multi-Branch Tags */}
              <div className="text-[0.7rem] text-slate-400 space-y-1">
                <div><strong>Branches:</strong> Farmgate, Dhaka · Habiganj, Sylhet · London, UK</div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 hover:bg-[#f37021] px-3.5 py-1.5 text-xs font-bold text-white transition-colors flex items-center gap-1.5 border border-white/15"
                >
                  <span>Facebook Page (@UNIConsultantsbd)</span>
                  <span className="text-[0.65rem]">↗</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-slate-400">
          <div>
            © {new Date().getFullYear()} {company.name}. All rights reserved. {company.slogan}.
          </div>
          <div className="flex items-center gap-4 font-medium">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
