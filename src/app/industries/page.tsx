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
        images={[
          "/images/page-hero-energy.jpg",
          "/images/page-hero-finance.jpg",
          "/images/page-hero-retail.jpg",
          "/images/page-hero-healthcare.jpg",
          "/images/page-hero-technology.jpg",
        ]}
      />

      <section className="container max-w-8xl mx-auto px-5 2xl:px-0 py-12 sm:py-20">
        <div className="flex flex-col gap-3 border-b border-dark/15 dark:border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              A field guide
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Where deep context makes the difference.
            </h2>
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-dark/50 dark:text-white/50">
            {String(INDUSTRIES.length).padStart(2, "0")} sectors
          </p>
        </div>

        <div>
          {INDUSTRIES.map((ind, index) => (
            <article
              key={ind.id}
              className="grid gap-7 border-b border-dark/15 py-9 dark:border-white/15 sm:py-12 md:grid-cols-12 md:items-center md:gap-10 lg:gap-16"
            >
              <div
                className={`group relative h-56 overflow-hidden sm:h-72 md:col-span-5 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 left-4 text-6xl font-bold leading-none tracking-tighter text-white/90 sm:bottom-5 sm:left-6 sm:text-8xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className={`space-y-4 md:col-span-7 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {ind.tagline}
                </p>
                <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                  {ind.name}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-dark/70 dark:text-white/70 sm:text-base">
                  {ind.description}
                </p>

                <div className="grid max-w-2xl grid-cols-1 gap-x-8 pt-2 sm:grid-cols-2">
                  {ind.focusAreas.map((area, areaIndex) => (
                    <p
                      key={area.title}
                      className="flex gap-3 border-t border-dark/10 py-2.5 text-sm text-dark/75 dark:border-white/10 dark:text-white/75"
                    >
                      <span className="text-xs font-semibold text-primary">
                        {String(areaIndex + 1).padStart(2, "0")}
                      </span>
                      {area.title}
                    </p>
                  ))}
                </div>

                <Link
                  href={`/industries/${ind.slug}`}
                  className="group/link inline-flex items-center gap-2 pt-1 text-sm font-bold transition-colors hover:text-primary"
                >
                  Explore {ind.name}
                  <Icon
                    icon="ph:arrow-up-right-bold"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
