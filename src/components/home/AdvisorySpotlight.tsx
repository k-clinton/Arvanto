import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function AdvisorySpotlight() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[420px] lg:h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="Arvanto Advisory Transformation"
              width={680}
              height={530}
              className="rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5 sm:p-8">
              <div className="text-white">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold bg-primary/20 px-3.5 py-1 rounded-full border border-primary/30">
                  Featured Strategic Engagement
                </span>
                <h4 className="text-lg sm:text-2xl font-bold mt-2">Enterprise Operating Model & AI Shift</h4>
                <p className="text-white/80 text-xs sm:text-sm mt-1">Nairobi, Kenya • East Africa Expansion</p>
              </div>
            </div>
          </div>

          {/* Right Column Details & Value Delivery */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex items-center gap-2">
                <Icon icon="ph:star-bold" className="text-primary text-xl" />
                Arvanto Advisory Spotlight
              </p>
              <h2 className="text-3xl sm:text-40 lg:text-52 font-medium text-dark dark:text-white mt-2">
                Enterprise Operating Model Shift
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Icon icon="ph:map-pin-bold" className="text-primary w-4 h-4 shrink-0" />
                <p className="text-dark/50 dark:text-white/50 text-sm sm:text-base">
                  Financial Services & Corporate Clients
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-dark/60 dark:text-white/60 leading-relaxed">
              Arvanto Advisory embedded alongside leadership to restructure an East African financial conglomerate. By combining high yield growth strategy, custom AI agent workflows, and quantitative capital stress testing, we unlocked 3.4x ROI and reduced operational friction by 65%.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 sm:p-3 rounded-lg text-primary shrink-0">
                  <Icon icon="ph:chart-line-up-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-dark dark:text-white">Corporate Strategy</h6>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 sm:p-3 rounded-lg text-primary shrink-0">
                  <Icon icon="ph:cpu-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-dark dark:text-white">Autonomous AI Agents</h6>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 sm:p-3 rounded-lg text-primary shrink-0">
                  <Icon icon="ph:shield-check-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-dark dark:text-white">Quantitative Risk</h6>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-2.5 sm:p-3 rounded-lg text-primary shrink-0">
                  <Icon icon="ph:gear-six-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h6 className="text-xs sm:text-sm font-semibold text-dark dark:text-white">TMO Execution</h6>
              </div>
            </div>

            {/* CTA & ROI Callout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-dark/10 dark:border-white/10">
              <Link
                className="py-3.5 sm:py-4 px-7 sm:px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white font-semibold transition text-sm sm:text-base text-center w-full sm:w-auto"
                href="/contactus"
              >
                Discuss Your Challenge
              </Link>
              <div className="flex items-baseline gap-2 sm:block">
                <h4 className="text-2xl sm:text-3xl text-dark dark:text-white font-medium">$12.4M</h4>
                <p className="text-xs sm:text-base text-dark/50 dark:text-white/50">Quantified Value Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
