import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { INDUSTRIES } from "@/data/industries";
import { PageHero } from "@/components/common/PageHero";

export default function IndustriesPage() {
  return (
    <div className="pb-16 bg-white dark:bg-black text-dark dark:text-white">
      <PageHero
        eyebrow="Priority Sectors"
        title="Industry Intelligence & Sector Focus"
        description="Deep domain expertise across Financial Services, Healthcare, Technology, Energy, Consumer Retail, the Public Sector, and Legal & Professional Services."
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Industries Grid */}
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
                          <span>{area.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="w-full text-center py-3 bg-white dark:bg-dark text-dark dark:text-white font-semibold rounded-full border border-dark/10 dark:border-white/10 hover:bg-primary hover:text-white transition duration-300 block text-sm"
                >
                  Explore {ind.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
