import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Terms and Conditions — Arvanto",
  description:
    "Review the terms and conditions governing engagement, intellectual property, advisory deliverables, and usage of Arvanto services and digital platforms.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 15, 2026";

  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Hero Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left relative overflow-hidden">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-base md:text-lg text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            These terms govern your access to Arvanto&apos;s digital platforms, advisory engagements, quantitative frameworks, and executive intelligence briefings.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
            <Icon icon="ph:clock-bold" className="w-3.5 h-3.5" />
            Last Updated: {lastUpdated}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container max-w-5xl mx-auto px-5 2xl:px-0 py-8">
        <div className="space-y-12 text-dark/80 dark:text-white/80 leading-relaxed">
          {/* Section 1 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Acceptance of Terms
              </h2>
            </div>
            <p className="mb-4">
              By accessing, browsing, or utilizing the website, digital portals, or advisory services operated by <strong>Arvanto</strong> (&quot;Arvanto,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>
            <p>
              If you are entering into these terms on behalf of a corporation, partnership, or other legal entity, you represent and warrant that you possess the authority to bind such entity to these provisions. If you do not agree to these terms, you must refrain from accessing our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Advisory Scope & Nature of Services
              </h2>
            </div>
            <p className="mb-4">
              Arvanto delivers high-level business transformation, corporate strategy, artificial intelligence enablement, data intelligence, quantitative risk modelling, and operational restructuring consulting.
            </p>
            <p className="mb-4">
              Informational materials, articles, research papers, and case studies published on our public platforms are intended solely for general thought-leadership and executive briefing purposes. They do not constitute formal legal, investment, regulatory, or tax advice.
            </p>
            <p>
              Formal client engagements are governed by bespoke Statements of Work (SOW) or Master Services Agreements (MSA), which supersede general web terms in the event of any specific conflict.
            </p>
          </section>

          {/* Section 3 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Intellectual Property Rights
              </h2>
            </div>
            <p className="mb-4">
              All proprietary methodologies, transformation frameworks (including the 5-stage Discover-Diagnose-Quantify-Transform-Scale framework), algorithms, software toolkits, designs, logos, graphics, and written publications remain the exclusive intellectual property of Arvanto.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-dark/70 dark:text-white/70">
              <li>You may not copy, reproduce, reverse engineer, republish, or redistribute Arvanto&apos;s proprietary methodologies without prior written consent.</li>
              <li>Deliverables created specifically for clients under a formalized contract will adhere to the intellectual property assignment guidelines set forth in the governing engagement contract.</li>
              <li>The Arvanto name, logo mark, and associated brand assets are protected trademarks and may not be used in connection with any third-party product or service without explicit authorization.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Client Obligations & Confidentiality
              </h2>
            </div>
            <p className="mb-4">
              Clients and users accessing Arvanto resources agree to provide accurate, up-to-date information and to protect any confidential materials, proprietary insights, or non-public data shared during prospective or active consulting discussions.
            </p>
            <p>
              Both parties agree to exercise rigorous safeguards, complying with international best practices for corporate security, data privacy, and non-disclosure standards.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Limitation of Liability & Warranties
              </h2>
            </div>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, Arvanto provides its web platforms and public resources on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express, implied, or statutory.
            </p>
            <p>
              Arvanto, its partners, directors, affiliates, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities, arising from or related to the use of our services or website.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                06
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Governing Law & Dispute Resolution
              </h2>
            </div>
            <p className="mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes, controversies, or claims arising out of or relating to these terms shall first be addressed through good-faith executive mediation. In the absence of an amicable resolution, disputes shall be submitted to the exclusive jurisdiction of the competent courts in Nairobi, Kenya, or as specified in a formal MSA.
            </p>
          </section>

          {/* Section 7 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                07
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Modifications & Inquiries
              </h2>
            </div>
            <p className="mb-4">
              Arvanto reserves the right to revise or update these Terms and Conditions periodically to reflect regulatory changes, evolving operational practices, or new capabilities. Continued use of our platforms following any such revision constitutes agreement to the amended terms.
            </p>
            <p className="mb-6">
              For questions, legal notices, or clarifications regarding these terms, please contact our legal counsel:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition duration-300 text-sm"
              >
                <Icon icon="ph:envelope-simple-bold" className="w-4 h-4" />
                Contact Legal & Compliance
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 border border-dark/20 dark:border-white/20 text-dark dark:text-white font-semibold py-3 px-6 rounded-full hover:border-primary hover:text-primary transition duration-300 text-sm"
              >
                View Privacy Policy
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
