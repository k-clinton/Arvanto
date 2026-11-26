import Link from "next/link";
import { Icon } from "@iconify/react";
import { METHODOLOGY_STEPS } from "@/data/methodology";
import { PageHero } from "@/components/common/PageHero";

export default function ApproachPage() {
  return (
    <div className="pb-16 bg-page dark:bg-page-dark text-dark dark:text-white">
      <PageHero
        eyebrow="Arvanto Methodology"
        title="Discover → Diagnose → Quantify → Transform → Scale"
        description="Our disciplined 5-stage transformation framework bridges high level executive strategy with quantitative proof and automated execution."
        images={[
          "/images/page-hero-strategy.jpg",
          "/images/page-hero-technology.jpg",
          "/images/page-hero-city.jpg",
          "/images/page-hero-team.jpg",
        ]}
      />

      {/* 5 Stages Detail */}
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-4 sm:py-8 space-y-8 sm:space-y-12">
        {METHODOLOGY_STEPS.map((step) => (
          <div
            key={step.step}
            className="p-6 sm:p-8 md:p-12 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 grid md:grid-cols-12 gap-6 sm:gap-8 items-center"
          >
            <div className="md:col-span-3 flex flex-col items-start">
              <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-primary">{step.step}</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">{step.title}</h3>
              <span className="text-xs sm:text-sm text-dark/50 dark:text-white/50">{step.subtitle}</span>
            </div>

            <div className="md:col-span-5 space-y-3">
              <p className="text-dark/70 dark:text-white/70 text-base leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="md:col-span-4 bg-white dark:bg-dark p-6 rounded-2xl border border-dark/10 dark:border-white/10 space-y-2">
              <p className="text-xs font-bold uppercase text-primary tracking-wider mb-2">
                Stage Deliverables:
              </p>
              {step.keyOutputs.map((out, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium">
                  <Icon icon="ph:check-circle-bold" className="text-primary w-4 h-4 shrink-0" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
