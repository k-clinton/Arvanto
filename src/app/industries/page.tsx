import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { INDUSTRIES } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Priority Sectors
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Industry Intelligence & Sector Focus
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Deep domain expertise across Financial Services, Healthcare, Technology, Energy, Consumer Retail, and the Public Sector.
          </p>
        </div>
      </div>

      {/* Grid of 6 Industries */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="rounded-3xl border border-dark/10 dark:border-white/10 overflow-hidden bg-dark/5 dark:bg-white/5 group hover:shadow-3xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-[240px] relative overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex items-end">
                    <span className="text-white font-bold text-xl">{ind.name}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold">
                    {ind.tagline}
                  </p>
                  <p className="text-sm text-dark/70 dark:text-white/70 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase text-dark/50 dark:text-white/50 mb-2">
                      Focus Areas:
                    </p>
                    <ul className="space-y-1 text-xs text-dark/80 dark:text-white/80">
                      {ind.focusAreas.map((area, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-2">
                          <Icon icon="ph:check-bold" className="text-primary w-3.5 h-3.5 shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contactus"
                  className="w-full text-center py-3 bg-white dark:bg-dark text-dark dark:text-white font-semibold rounded-full border border-dark/10 dark:border-white/10 hover:bg-primary hover:text-white transition duration-300 block text-sm"
                >
                  Explore Solutions for {ind.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
