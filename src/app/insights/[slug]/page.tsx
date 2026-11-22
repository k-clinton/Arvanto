import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { INSIGHTS } from "@/data/insights";
import { PageHero } from "@/components/common/PageHero";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pb-16 bg-white dark:bg-black text-dark dark:text-white">
      <PageHero
        backLink={{ href: "/insights", label: "Back to Insights" }}
        eyebrow={article.category}
        title={article.title}
        titleClassName="max-w-5xl text-3xl sm:text-4xl md:text-5xl"
        description={article.excerpt}
        images={[
          article.image,
          "/images/page-hero-city.jpg",
          "/images/page-hero-strategy.jpg",
          "/images/page-hero-team.jpg",
        ]}
      >
        <p className="mt-5 text-xs sm:text-sm text-white/75">
          Published on {article.date} • {article.readTime} • By {article.author}
        </p>
      </PageHero>

      <div className="container max-w-4xl mx-auto px-4 sm:px-5 2xl:px-0">
        <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-none text-dark/80 dark:text-white/80 leading-relaxed space-y-4 sm:space-y-6 py-10 sm:py-14">
          <p>{article.content}</p>
          <p>
            At Arvanto, our practices continuously refine methodology frameworks to address enterprise vulnerabilities and capitalize on growth opportunities. For further discussion on tailoring these insights to your organization, reach out to our advisory team.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-dark/10 dark:border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center text-center">
          <Link
            href="/insights"
            className="px-6 py-3 rounded-full bg-dark/5 dark:bg-white/10 font-semibold text-sm hover:bg-primary hover:text-white transition"
          >
            Explore More Research
          </Link>
          <Link
            href="/contactus"
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-dark transition"
          >
            Contact Author Pod
          </Link>
        </div>
      </div>
    </div>
  );
}
