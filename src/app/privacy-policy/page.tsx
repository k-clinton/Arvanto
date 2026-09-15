import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Privacy Policy — Arvanto",
  description:
    "Learn how Arvanto collects, utilizes, safeguards, and respects enterprise and individual personal data in compliance with international data privacy standards.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 15, 2026";

  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Hero Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left relative overflow-hidden">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Privacy & Trust
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Arvanto is committed to safeguarding the privacy, confidentiality, and integrity of corporate data and personal information entrusted to us.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
            <Icon icon="ph:shield-check-bold" className="w-3.5 h-3.5" />
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
                Overview & Commitment
              </h2>
            </div>
            <p className="mb-4">
              This Privacy Policy explains how <strong>Arvanto</strong> (&quot;Arvanto,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, processes, stores, and protects personal and organizational information collected through our website, executive research briefings, advisory consultations, and client service delivery channels.
            </p>
            <p>
              We adhere to strict data protection principles aligned with the Kenya Data Protection Act (DPA 2019), the European General Data Protection Regulation (GDPR), and globally recognized enterprise security standards.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Information We Collect
              </h2>
            </div>
            <p className="mb-4">
              We collect information in distinct contexts to provide relevant transformation insights and advisory services:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-dark/5 dark:bg-white/5 border border-dark/5 dark:border-white/5">
                <h3 className="font-semibold text-dark dark:text-white text-base mb-1">
                  1. Voluntarily Provided Information
                </h3>
                <p className="text-sm text-dark/70 dark:text-white/70">
                  When you submit inquiries, subscribe to executive briefings, or request proposals, we collect your name, corporate email address, job title, company name, telephone number, and message contents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark/5 dark:bg-white/5 border border-dark/5 dark:border-white/5">
                <h3 className="font-semibold text-dark dark:text-white text-base mb-1">
                  2. Advisory & Engagement Data
                </h3>
                <p className="text-sm text-dark/70 dark:text-white/70">
                  During client engagements, we process business data, quantitative models, and process maps under strict nondisclosure and data processing agreements.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark/5 dark:bg-white/5 border border-dark/5 dark:border-white/5">
                <h3 className="font-semibold text-dark dark:text-white text-base mb-1">
                  3. Technical & Usage Information
                </h3>
                <p className="text-sm text-dark/70 dark:text-white/70">
                  We automatically collect technical data such as browser type, IP address, device telemetry, pages viewed, time spent, and referral sources to optimize platform performance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                How We Use Your Data
              </h2>
            </div>
            <p className="mb-4">We process information solely for lawful business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-dark/70 dark:text-white/70">
              <li>To provide tailored corporate advisory, transformation roadmaps, and AI solutions.</li>
              <li>To deliver executive briefings, industry reports, and research insights you have opted into.</li>
              <li>To respond to your inquiries, schedule stakeholder discovery sessions, and prepare project proposals.</li>
              <li>To enhance website responsiveness, user experience, and digital security.</li>
              <li>To fulfill legal, statutory, and regulatory compliance obligations.</li>
            </ul>
            <p>
              <strong>We never sell, rent, or trade your personal or corporate data to third-party advertisers.</strong>
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Enterprise Data Security & Retention
              </h2>
            </div>
            <p className="mb-4">
              Arvanto employs multi-layered defense and governance protocols to safeguard personal and confidential data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-dark/70 dark:text-white/70">
              <li>End-to-end encryption in transit (TLS 1.3) and at rest (AES-256).</li>
              <li>Strict role-based access control (RBAC) and least-privilege architectural principles.</li>
              <li>Continuous infrastructure vulnerability scanning and anomaly monitoring.</li>
            </ul>
            <p>
              We retain personal data only for as long as necessary to fulfill the operational purposes outlined in this policy or to comply with statutory retention mandates.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Your Rights & Controls
              </h2>
            </div>
            <p className="mb-4">
              Depending on your jurisdiction, you possess specific data subject rights regarding your personal information, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl border border-dark/10 dark:border-white/10">
                <h4 className="font-bold text-sm text-dark dark:text-white mb-1">Right to Access & Portability</h4>
                <p className="text-xs text-dark/60 dark:text-white/60">Request a structured copy of the personal information we maintain about you.</p>
              </div>
              <div className="p-4 rounded-xl border border-dark/10 dark:border-white/10">
                <h4 className="font-bold text-sm text-dark dark:text-white mb-1">Right to Rectification</h4>
                <p className="text-xs text-dark/60 dark:text-white/60">Request prompt correction of any inaccurate or incomplete personal records.</p>
              </div>
              <div className="p-4 rounded-xl border border-dark/10 dark:border-white/10">
                <h4 className="font-bold text-sm text-dark dark:text-white mb-1">Right to Erasure</h4>
                <p className="text-xs text-dark/60 dark:text-white/60">Request deletion of personal data where legal retention grounds no longer apply.</p>
              </div>
              <div className="p-4 rounded-xl border border-dark/10 dark:border-white/10">
                <h4 className="font-bold text-sm text-dark dark:text-white mb-1">Right to Withdraw Consent</h4>
                <p className="text-xs text-dark/60 dark:text-white/60">Unsubscribe from communications or revoke processing consent at any time.</p>
              </div>
            </div>
            <p>
              To exercise any of these rights, submit a written request to our Data Protection Officer at{" "}
              <Link href="/contactus" className="text-primary hover:underline font-semibold">
                our contact portal
              </Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-8 md:p-10 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/[0.02] dark:bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                06
              </div>
              <h2 className="text-2xl font-bold text-dark dark:text-white">
                Contact Data Protection Officer
              </h2>
            </div>
            <p className="mb-6">
              For any questions, compliance requests, or inquiries regarding our privacy standards and data management policies:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark transition duration-300 text-sm"
              >
                <Icon icon="ph:shield-bold" className="w-4 h-4" />
                Contact Privacy Team
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center justify-center gap-2 border border-dark/20 dark:border-white/20 text-dark dark:text-white font-semibold py-3 px-6 rounded-full hover:border-primary hover:text-primary transition duration-300 text-sm"
              >
                View Terms & Conditions
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
