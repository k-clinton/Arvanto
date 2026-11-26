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
        <div className="grid gap-3 border-b border-dark/15 pb-8 dark:border-white/15 sm:grid-cols-12 sm:items-end sm:gap-8">
          <div className="sm:col-span-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              A field guide
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Where deep context makes the difference.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-dark/70 dark:text-white/70 sm:text-base">
              <p>
                In today’s environment of regulatory pressure, technological
                disruption, capital intensity, and shifting customer
                expectations, surface-level recommendations are no longer
                sufficient. Sustainable performance improvement demands
                genuine industry expertise—an intimate understanding of value
                chains, competitive structures, risk profiles, data ecosystems,
                and operational realities.
              </p>
              <p>
                Arvanto brings precisely that depth. Our teams combine strategic
                consulting experience with hands-on knowledge of how Financial
                Services institutions, healthcare systems, technology
                platforms, energy companies, retail groups, public institutions,
                and professional service firms actually operate. This allows us
                to design transformation programmes that are not only
                analytically rigorous but also commercially realistic and
                executable.
              </p>
            </div>
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-dark/50 dark:text-white/50 sm:col-span-3 sm:text-right">
            {String(INDUSTRIES.length).padStart(2, "0")} sectors
          </p>
        </div>

        <div>
          {INDUSTRIES.map((ind, index) => (
            <article
              key={ind.id}
              className="grid gap-7 py-9 sm:py-12 md:grid-cols-12 md:items-stretch md:gap-10 lg:gap-16"
            >
              <Link
                href={`/industries/${ind.slug}`}
                className={`group relative block h-56 cursor-pointer overflow-hidden rounded-lg sm:h-72 md:col-span-6 md:h-full md:max-h-[32rem] md:min-h-72 md:self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={ind.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                />
                <span className="absolute left-4 top-4 z-10 text-xs font-bold uppercase tracking-widest text-primary sm:left-6 sm:top-6">
                  {ind.tagline}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 left-4 text-6xl font-bold leading-none tracking-tighter text-white/90 sm:bottom-5 sm:left-6 sm:text-8xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="group/link absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 bg-black/70 px-4 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-primary">
                  Explore {ind.name}
                  <Icon
                    icon="ph:arrow-up-right-bold"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </span>
              </Link>

              <div
                className={`space-y-4 md:col-span-6 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                  {ind.name}
                </h3>
                {ind.listingContent ? (
                  <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-dark/70 dark:text-white/70 sm:text-base">
                    <h4 className="text-lg font-semibold leading-snug text-dark dark:text-white sm:text-xl">
                      {ind.listingContent.subheading}
                    </h4>
                    {ind.listingContent.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-dark dark:text-white">
                        Key Areas of Expertise
                      </h4>
                      <ol className="mt-3 list-none space-y-2">
                        {ind.listingContent.expertise.map((area, areaIndex) => (
                          <li
                            key={area}
                            className="flex gap-3 border-t border-dark/10 pt-2.5 text-sm text-dark/75 dark:border-white/10 dark:text-white/75"
                          >
                            <span className="text-xs font-semibold text-primary">
                              {String(areaIndex + 1).padStart(2, "0")}
                            </span>
                            {area}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <p>{ind.listingContent.closingParagraph}</p>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="border-t border-dark/15 pt-10 dark:border-white/15 sm:pt-14">
          <div className="max-w-4xl space-y-5">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Sector Expertise. Strategic Clarity. Measurable Transformation.
            </h2>
            <p className="text-sm leading-relaxed text-dark/70 dark:text-white/70 sm:text-base">
              Whether you are navigating regulatory change in Financial
              Services, optimizing clinical and operational performance in
              Healthcare, scaling a technology platform, managing
              capital-intensive energy assets, strengthening retail economics,
              transforming public institutions, or modernizing legal operations,
              Arvanto brings the combination of industry depth, analytical
              rigour, and execution capability required to deliver lasting
              results.
            </p>
            <p className="text-sm leading-relaxed text-dark/70 dark:text-white/70 sm:text-base">
              We do not offer generic frameworks. We deliver industry-informed
              strategy, AI-enabled decision systems, and hands-on transformation
              support tailored to the specific challenges and opportunities of
              your sector.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
