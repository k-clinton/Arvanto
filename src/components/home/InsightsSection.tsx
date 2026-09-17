import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { INSIGHTS } from "@/data/insights";

export function InsightsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Header Row */}
        <div className="flex justify-between md:items-end items-start mb-8 sm:mb-10 md:flex-row flex-col gap-6">
          <div>
            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex items-center gap-2">
              <Icon icon="ph:newspaper-clipping-bold" className="text-primary text-xl" />
              Insights & Thought Leadership
            </p>
            <h2 className="text-3xl sm:text-40 lg:text-52 font-medium dark:text-white mt-2">
              Business Transformation Insights
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-sm sm:text-base mt-1">
              Stay ahead with executive briefings, AI implementation guides, and quantitative research.
            </p>
          </div>
          <Link
            className="bg-dark dark:bg-white text-white dark:text-dark py-3.5 sm:py-4 px-7 sm:px-8 rounded-full hover:bg-primary hover:text-white duration-300 font-semibold transition text-sm sm:text-base whitespace-nowrap w-full sm:w-auto text-center"
            href="/insights"
          >
            Read all articles
          </Link>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {INSIGHTS.map((blog) => (
            <div key={blog.id} className="w-full">
              <Link className="gap-4 group block" href={`/insights/${blog.slug}`}>
                <div className="overflow-hidden rounded-2xl flex-shrink-0 h-[200px] sm:h-[220px] relative mb-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-dark dark:text-white group-hover:text-primary transition line-clamp-2">
                      {blog.title}
                    </h3>
                    <span className="text-xs sm:text-sm font-medium dark:text-white/50 text-dark/50 block mt-1">
                      {blog.date} • {blog.readTime}
                    </span>
                  </div>
                  <div className="py-1.5 px-3 bg-dark/5 rounded-full dark:bg-white/15 shrink-0">
                    <p className="text-[11px] sm:text-xs font-semibold text-dark dark:text-white">
                      {blog.category}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
