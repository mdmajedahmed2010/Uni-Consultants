import { company } from "@/lib/site-data";
import { IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn } from "@/components/motion-wrapper";

export function OfficeGallery() {
  const principal = company.branches[0]!;
  const otherBranches = company.branches.slice(1);

  return (
    <div className="space-y-8">
      {/* Central Hub: Dhaka Principal HQ & Map */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Principal HQ Card & Map */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-orange-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-orange-800">
                <span>🏢</span>
                <span>Principal Head Office (Dhaka)</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                {principal.address}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                আমাদের প্রধান কার্যালয়ে সরাসরি এসে অভিজ্ঞ সিনিয়র কনসালট্যান্টদের সাথে বসুন। সাইপ্রাস, ইউকে, মালয়েশিয়া, মাল্টা সহ বিশ্বের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তি এবং সৎ ভিসা পরামর্শ নিশ্চিত করুন।
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Landmark:</strong> Kazi Nazrul Islam Avenue, Near Farmgate, Dhaka
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {principal.hours}
                </p>
                <p>
                  <strong>📞 Hotline:</strong> {principal.phone} (WhatsApp & Direct Call)
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.email}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={principal.mapUrl}
                title="UNI Consultants Principal HQ Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I would like to visit your Dhaka Principal Office (92 Ali Bhaban) for a free counseling session.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Dhaka Desk</span>
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-orange-600" />
                <span>{company.phones[0]}</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* UNI Consultants Special Wings & Core Commitments */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/30 via-white to-slate-50/50 p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full hover:border-orange-500 transition-colors">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>🎓</span>
                <span>One Stop Solution for Study Abroad</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Admissions, Language Academy & Visa File Audit
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                উচ্চশিক্ষার আবেদন থেকে শুরু করে IELTS প্রস্তুতি, স্পোকেন ইংলিশ, কিডস ইংলিশ একাডেমি এবং ভিসা ফাইল প্রস্তুতকরণ—সবকিছুই শতভাগ সততার সাথে পরিচালনা করে {company.name}।
              </p>
              <div className="text-xs text-slate-700 space-y-2 border-t border-slate-100 pt-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                  <strong className="text-[#0f172a] block text-xs">Official Commitments & Pillars:</strong>
                  <ul className="space-y-1 text-[0.73rem] text-slate-600 font-bangla">
                    <li>• <strong>HONESTY IS OUR COMMITMENT:</strong> সততাই আমাদের প্রধান মূলমন্ত্র ও অঙ্গীকার</li>
                    <li>• <strong>Study in Cyprus (Flagship):</strong> কম টিউশন ফি (€২,৫০০/বছর) ও উইথ/উইদাউট IELTS সুবিধা</li>
                    <li>• <strong>Admission Open For Any Intake:</strong> ইউকে, মালয়েশিয়া, ফিনল্যান্ড ও মাল্টার শীর্ষ বিশ্ববিদ্যালয়ে ভর্তি</li>
                    <li>• <strong>UNI Language Academy:</strong> IELTS Academic & General (7.5+), Spoken English & Interview</li>
                    <li>• <strong>Kids English Academy:</strong> ৬ থেকে ১৪ বছর বয়সীদের জন্য ফোনেটিক্স ও ফ্লুয়েন্সি কোর্স</li>
                    <li>• <strong>Network of 4 Branch Offices:</strong> ঢাকা হেড অফিস, ফার্মগেট, হবিগঞ্জ ও লন্ডন লিয়াজোঁ</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500">
                  <strong>✨ Official Slogan:</strong> &quot;{company.tagline}&quot; — @UNIConsultantsbd
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello ${company.name}! I want to consult about university admissions and language courses.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-4 active:scale-95 font-bold"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>Consult Senior Counselor</span>
              </a>
              <a
                href={`tel:${company.phones[1].replace(/[^0-9]/g, "")}`}
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-orange-600" />
                <span>{company.phones[1]}</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>

      {/* Other 3 Regional & Global Branches Strip */}
      <div className="grid gap-5 sm:grid-cols-3">
        {otherBranches.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-orange-600 uppercase tracking-wider">
                  Branch Office
                </span>
                <span className="text-base">📍</span>
              </div>
              <h5 className="font-display text-sm font-bold text-slate-900">{b.name}</h5>
              <p className="text-xs text-slate-600 leading-snug">{b.address}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a
                href={`tel:${b.phone.replace(/[^0-9]/g, "")}`}
                className="font-bold text-slate-800 hover:text-orange-600 transition-colors flex items-center gap-1"
              >
                <IconPhone className="w-3 h-3 text-orange-500" />
                <span>{b.phone}</span>
              </a>
              <span className="text-[0.68rem] text-slate-400">{b.hours}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
