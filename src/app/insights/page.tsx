import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { INSIGHTS } from "@/data/insights";
import { PageHero } from "@/components/common/PageHero";

export default function InsightsPage() {
  return (
    <div className="pb-16 bg-white dark:bg-black text-dark dark:text-white">
      <PageHero
        eyebrow="Arvanto Research & Briefings"
        title="Insights & Thought Leadership"
        description="Executive perspectives on corporate strategy, artificial intelligence implementation, quantitative risk management, and operating model redesign."
        images={[
          "/images/page-hero-technology.jpg",
          "/images/page-hero-strategy.jpg",
          "/images/page-hero-finance.jpg",
          "/images/page-hero-city.jpg",
        ]}
      />

      {/* Grid of Insights */}
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-4 sm:py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {INSIGHTS.map((blog) => (
            <div key={blog.id} className="w-full">
              <Link className="gap-4 group block" href={`/insights/${blog.slug}`}>
                <div className="overflow-hidden rounded-2xl flex-shrink-0 h-[200px] sm:h-[260px] relative mb-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-xs text-dark/50 dark:text-white/50">{blog.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-dark dark:text-white group-hover:text-primary transition leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-dark/70 dark:text-white/70 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-dark/50 dark:text-white/50">
                    {blog.date} • {blog.author}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
