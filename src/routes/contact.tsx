import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${company.name} — Principal HQ 92 Ali Bhaban, Dhaka & Branches` },
      {
        name: "description",
        content: `Contact ${company.name} (${company.taglineBangla}). Principal Head Office: ${company.address.full}. Farmgate Branch, Habiganj Branch & UK Liaison Office. Official Hotlines: ${company.phones[0]}, ${company.phones[1]}, ${company.phones[2]}. Email: ${company.email}.`,
      },
      { property: "og:title", content: `Contact ${company.name} — Dhaka & Regional Offices` },
      {
        property: "og:description",
        content: `Visit our Principal Dhaka HQ at 92 Ali Bhaban, Farmgate, Habiganj, or London offices for genuine study abroad counseling, Cyprus & UK admissions, Without IELTS options, and language training.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "Cyprus Affordable Admission & Visa (Without IELTS)",
    destination: "Cyprus 🇨🇾",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${company.name}!\n\nI want to book a free counseling appointment from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Selected Program: ${formData.program}\n• Target Destination: ${formData.destination}\n• Query / Background: ${formData.notes || "N/A"}`;
    window.open(
      `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Global & National Contact Desks"
        title={`Connect With ${company.name}`}
        subtitle="আমাদের ঢাকা প্রধান কার্যালয় (৯২, আলী ভবন, ৭ম তলা, কাজী নজরুল ইসলাম এভিনিউ), ফার্মগেট শাখা, হবিগঞ্জ শাখা কিংবা ইউকে অফিসে সরাসরি আসুন অথবা যেকোনো প্রয়োজনে হোয়াটসঅ্যাপে যোগাযোগ করুন। সততাই আমাদের অঙ্গীকার।"
        image="/banner.png"
        imageAlt={`${company.name} consultation centers`}
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* 4 Official Office Branches Section */}
      <section className="section-shell py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="badge-clean badge-orange text-xs">Official Office Network</span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Visit Any of Our 4 Strategic Locations
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Meet our certified international education counselors for transparent profile assessments and visa filing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {company.branches.map((branch) => (
            <div
              key={branch.name}
              className={`card-clean rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover-lift ${
                branch.primary
                  ? "border-orange-300 bg-gradient-to-b from-orange-50/40 via-white to-white shadow-md ring-1 ring-orange-200"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span
                    className={`badge-clean text-[0.7rem] font-bold ${
                      branch.primary ? "badge-orange" : "badge-navy"
                    }`}
                  >
                    {branch.tag}
                  </span>
                  <span className="text-[0.7rem] font-bold text-slate-500">{branch.city}</span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {branch.name}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                  📍 {branch.address}
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
                  <p>
                    <strong>📞 Phone:</strong>{" "}
                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-slate-900 hover:text-uni-orange font-semibold"
                    >
                      {branch.phone}
                    </a>
                  </p>
                  <p>
                    <strong>🕒 Hours:</strong> {branch.hours}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${company.name}, I want to visit or inquire with your ${branch.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full text-center text-xs py-2.5 font-bold shadow-sm rounded-xl cursor-pointer"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 py-2 text-center text-xs font-semibold text-slate-700 hover:border-orange-300 transition-colors"
                >
                  📞 Direct Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Interactive Form & Google Map */}
      <section className="section-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Map and Trust Pillars */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="p-3 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Principal Dhaka HQ Map
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka
                  </p>
                </div>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-uni-orange hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps ↗</span>
                </a>
              </div>
            </div>
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title={`${company.name} Principal Head Office Map`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white shadow-sm">
            <div className="flex items-center gap-2">
              <span className="badge-clean badge-orange text-xs">{company.tagline}</span>
              <span className="text-xs text-orange-400 font-bold">{company.taglineBangla}</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white mt-2">
              Why Consult With {company.name}?
            </h3>
            <ul className="mt-3 text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Cyprus Flagship Pathway:</strong> Tuition from €2,500/year, without IELTS, and exceptional visa approval records.</li>
              <li>• <strong>UK 1-Year Masters & 2-Year PSW:</strong> Direct admission with standard entry requirements and spouse visa facilities.</li>
              <li>• <strong>Study Gap & Without IELTS Solutions:</strong> MOI acceptance and justifiable study gap support across top European universities.</li>
              <li>• <strong>UNI Language Academy:</strong> IELTS Academic & General (Band 7.5+), Spoken English Fluency, and Kids English Academy (Ages 6–14).</li>
              <li>• <strong>4 Verified Physical Offices:</strong> Dhaka Principal HQ (92 Ali Bhaban), Farmgate, Habiganj, and London UK.</li>
              <li>• <strong>Transparent Guidance:</strong> No false commitments, straightforward fee structures, and dedicated post-visa support.</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Official Page: @UNIConsultantsbd</span>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-uni-orange font-bold hover:underline"
              >
                Facebook Page ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-orange">Free 1-on-1 Profile Assessment</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book Counseling
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with a {company.name} senior counselor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl text-uni-orange">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically,
                tap below to chat directly with our senior counseling desk.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex text-xs py-3 px-6 shadow-md font-bold"
              >
                💬 Open WhatsApp Chat
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tanvir Ahmed"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-uni-orange focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 01335-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-uni-orange focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service / Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-uni-orange focus:bg-white transition-colors"
                  >
                    <option value="Cyprus Affordable Admission & Visa (Without IELTS)">🇨🇾 Cyprus Special Admission (Low Tuition)</option>
                    <option value="UK 1-Year Masters & 2-Year PSW">🇬🇧 UK Masters & Bachelors (2-Yr PSW)</option>
                    <option value="Malaysia Dual Degree / EMGS Visa">🇲🇾 Malaysia International Campuses</option>
                    <option value="Malta Schengen Study & Work Rights">🇲🇹 Malta Schengen Study & Work</option>
                    <option value="Australia & Canada Admissions">🇦🇺 🇨🇦 Australia / Canada Advisory</option>
                    <option value="Finland & European Tuition Free / Low Fee">🇫🇮 Europe High-Tech Admissions</option>
                    <option value="IELTS Academic / General Coaching (Band 7.5+)">📖 IELTS Coaching (Band 7.5+)</option>
                    <option value="Spoken English Fluency & Embassy Interview">🗣️ Spoken English & Interview Prep</option>
                    <option value="Kids English Academy (Ages 6-14)">🧒 Kids English Academy (Ages 6-14)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-uni-orange focus:bg-white transition-colors"
                  >
                    <option value="Cyprus 🇨🇾">Cyprus 🇨🇾</option>
                    <option value="United Kingdom 🇬🇧">United Kingdom 🇬🇧</option>
                    <option value="Malaysia 🇲🇾">Malaysia 🇲🇾</option>
                    <option value="Malta 🇲🇹">Malta 🇲🇹</option>
                    <option value="Finland 🇫🇮">Finland 🇫🇮</option>
                    <option value="Australia 🇦🇺">Australia 🇦🇺</option>
                    <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                    <option value="United States 🇺🇸">United States 🇺🇸</option>
                    <option value="Italy 🇮🇹">Italy 🇮🇹</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Academic Background or Specific Query
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Completed HSC / Bachelor's in 2022. CGPA 3.2. Interested in Cyprus or UK admissions, Without IELTS options, or IELTS batch enrollment..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-uni-orange focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs sm:text-sm py-3.5 shadow-md cursor-pointer font-bold"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 Direct 1-on-1 counseling · 92, Ali Bhaban (7th Floor), Kazi Nazrul Islam Avenue, Dhaka.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
