import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${company.name}` },
      {
        name: "description",
        content: `How ${company.name} (${company.taglineBangla}) collects, protects, and handles student and applicant personal data for global university admissions, language training, and visa counseling.`,
      },
      { property: "og:title", content: `Privacy Policy | ${company.name}` },
      {
        property: "og:description",
        content: "Our commitment to protecting your personal information and student records.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you register with ${company.name} for language courses or study abroad pathways (Cyprus, UK, Malaysia, Malta, Australia, Canada, USA, Europe, etc.), we collect relevant personal details including your name, phone/WhatsApp number, email address, academic credentials, and destination preferences. We also collect minimal anonymous web analytics to ensure website security and optimal performance.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `Your information is used strictly to provide profile evaluations, course enrollments, IELTS & language preparation materials, university admissions, and visa documentation. All counseling is conducted transparently from our Principal Head Office at ${company.address.full} and our regional branches.`,
  },
  {
    title: "3. Information Sharing & Third Parties",
    body: "We share your documents solely with designated partner institutions, universities, and official sovereign immigration authorities for visa processing upon your instruction. We NEVER sell, rent, or trade your personal information with third-party marketers or commercial brokers.",
  },
  {
    title: "4. Data Storage & Confidentiality",
    body: `Student and applicant records are stored securely in protected digital repositories accessible only to authorized ${company.name} senior counselors. Physical documents and electronic records are maintained with strict confidentiality and integrity.`,
  },
  {
    title: "5. Your Privacy Rights",
    body: `You may request access to, correction of, or deletion of your records at any time by emailing ${company.email} or contacting our hotlines at ${company.phones[0]} / ${company.phones[1]}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Trust"
        title="Privacy Policy"
        subtitle="Last updated: September 2026"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      </PageHero>

      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h2 className="font-display text-base sm:text-lg font-bold text-slate-900">
                {s.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
