import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function AdvisorySpotlight() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
              alt="Arvanto Advisory Transformation"
              width={680}
              height={530}
              className="rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/20 px-4 py-1.5 rounded-full border border-primary/30">
                  Featured Strategic Engagement
                </span>
                <h4 className="text-2xl font-bold mt-2">Enterprise Operating Model & AI Shift</h4>
                <p className="text-white/80 text-sm mt-1">Nairobi, Kenya • East Africa Expansion</p>
              </div>
            </div>
          </div>

          {/* Right Column Details & Value Delivery */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex items-center gap-2">
                <Icon icon="ph:star-bold" className="text-primary text-xl" />
                Arvanto Advisory Spotlight
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white mt-2">
                Enterprise Operating Model Shift
              </h2>
              <div className="flex items-center gap-2.5 mt-2">
                <Icon icon="ph:map-pin-bold" className="text-primary" />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  Financial Services & Corporate Clients
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50 leading-relaxed">
              Arvanto Advisory embedded alongside leadership to restructure an East African financial conglomerate. By combining high-yield growth strategy, custom AI agent workflows, and quantitative capital stress testing, we unlocked 3.4x ROI and reduced operational friction by 65%.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-3 rounded-[6px] text-primary">
                  <Icon icon="ph:chart-line-up-bold" className="w-6 h-6" />
                </div>
                <h6 className="text-sm font-semibold text-dark dark:text-white">Corporate Strategy</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-3 rounded-[6px] text-primary">
                  <Icon icon="ph:cpu-bold" className="w-6 h-6" />
                </div>
                <h6 className="text-sm font-semibold text-dark dark:text-white">Autonomous AI Agents</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-3 rounded-[6px] text-primary">
                  <Icon icon="ph:shield-check-bold" className="w-6 h-6" />
                </div>
                <h6 className="text-sm font-semibold text-dark dark:text-white">Quantitative Risk</h6>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dark/5 dark:bg-white/5 p-3 rounded-[6px] text-primary">
                  <Icon icon="ph:gear-six-bold" className="w-6 h-6" />
                </div>
                <h6 className="text-sm font-semibold text-dark dark:text-white">TMO Execution</h6>
              </div>
            </div>

            {/* CTA & ROI Callout */}
            <div className="flex items-center gap-10 pt-4 border-t border-dark/10 dark:border-white/10">
              <Link
                className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white font-semibold transition"
                href="/contactus"
              >
                Discuss Your Challenge
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">$12.4M</h4>
                <p className="text-base text-dark/50 dark:text-white/50">Quantified Value Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
