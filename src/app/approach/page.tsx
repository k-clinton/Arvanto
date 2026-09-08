import Link from "next/link";
import { Icon } from "@iconify/react";
import { METHODOLOGY_STEPS } from "@/data/methodology";

export default function ApproachPage() {
  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Arvanto Methodology
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Discover → Diagnose → Quantify → Transform → Scale
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Our disciplined 5-stage transformation framework bridges high-level executive strategy with quantitative proof and automated execution.
          </p>
        </div>
      </div>

      {/* 5 Stages Detail */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-8 space-y-12">
        {METHODOLOGY_STEPS.map((step) => (
          <div
            key={step.step}
            className="p-8 md:p-12 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-3 flex flex-col items-start">
              <span className="text-6xl md:text-7xl font-extrabold text-primary">{step.step}</span>
              <h3 className="text-2xl font-bold mt-2">{step.title}</h3>
              <span className="text-sm text-dark/50 dark:text-white/50">{step.subtitle}</span>
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
