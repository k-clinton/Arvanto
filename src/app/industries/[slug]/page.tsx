import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/data/industries";
import { PageHero } from "@/components/common/PageHero";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INDUSTRIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.name} | Arvanto`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="pb-16 bg-white dark:bg-black text-dark dark:text-white">
      <PageHero
        backLink={{ href: "/industries", label: "All Industries" }}
        eyebrow={industry.tagline}
        title={industry.name}
        description={industry.description}
        images={industry.heroImages}
      />

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-12 sm:py-20">
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:self-center">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">
              Industry perspective
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
              Clarity for the challenges shaping {industry.name.toLowerCase()}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5">
            {industry.industryPerspective.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base sm:text-lg text-dark/70 dark:text-white/70 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-14 sm:mt-20 border-t border-dark/10 dark:border-white/10 pt-10 sm:pt-14">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">
              Our focus
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              Areas where we help you move forward
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {industry.focusAreas.map((area, index) => (
              <li
                key={area.title}
                className="flex items-start gap-3 border-t border-dark/10 dark:border-white/10 pt-5"
              >
                {industry.numberedFocusAreas ? (
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-sm font-bold leading-none text-primary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : (
                  <Icon
                    icon="ph:check-circle-bold"
                    className="text-primary w-5 h-5 mt-1 shrink-0"
                  />
                )}
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dark/70 dark:text-white/70 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {industry.closingPerspective && (
          <div className="mt-10 max-w-5xl space-y-5">
            {industry.closingPerspective.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base sm:text-lg text-dark/70 dark:text-white/70 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <section className="mt-14 sm:mt-20 rounded-3xl bg-dark/5 dark:bg-white/5 px-6 py-10 sm:px-12 sm:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">
              Let&apos;s talk
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Looking to create new opportunities in {industry.name.toLowerCase()}?
            </h2>
            <p className="text-dark/70 dark:text-white/70 leading-relaxed">
              Talk with our team about the priorities and opportunities that matter to your organization.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-dark transition duration-300 shrink-0"
          >
            Contact Arvanto
            <Icon icon="ph:arrow-right-bold" />
          </Link>
        </section>
      </div>
    </div>
  );
}
