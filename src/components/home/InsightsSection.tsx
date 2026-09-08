import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { INSIGHTS } from "@/data/insights";

export function InsightsSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Header Row */}
        <div className="flex justify-between md:items-end items-start mb-10 md:flex-row flex-col gap-6">
          <div>
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex items-center gap-2">
              <Icon icon="ph:newspaper-clipping-bold" className="text-primary text-xl" />
              Insights & Thought Leadership
            </p>
            <h2 className="lg:text-52 text-40 font-medium dark:text-white mt-2">
              Business Transformation Insights
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-xm mt-1">
              Stay ahead with executive briefings, AI implementation guides, and quantitative research.
            </p>
          </div>
          <Link
            className="bg-dark dark:bg-white text-white dark:text-dark py-4 px-8 rounded-full hover:bg-primary hover:text-white duration-300 font-semibold transition whitespace-nowrap"
            href="/insights"
          >
            Read all articles
          </Link>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12">
          {INSIGHTS.map((blog) => (
            <div key={blog.id} className="w-full">
              <Link className="gap-4 group block" href={`/insights/${blog.slug}`}>
                <div className="overflow-hidden rounded-2xl flex-shrink-0 h-[220px] relative mb-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-dark dark:text-white group-hover:text-primary transition line-clamp-2">
                      {blog.title}
                    </h3>
                    <span className="text-base font-medium dark:text-white/50 text-dark/50 leading-loose block mt-1">
                      {blog.date} • {blog.readTime}
                    </span>
                  </div>
                  <div className="py-2 px-4 bg-dark/5 rounded-full dark:bg-white/15 shrink-0">
                    <p className="text-xs font-semibold text-dark dark:text-white">
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
