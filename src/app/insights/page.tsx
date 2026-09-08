import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { INSIGHTS } from "@/data/insights";

export default function InsightsPage() {
  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Arvanto Research & Briefings
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Insights & Thought Leadership
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Executive perspectives on corporate strategy, artificial intelligence implementation, quantitative risk management, and operating model redesign.
          </p>
        </div>
      </div>

      {/* Grid of Insights */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {INSIGHTS.map((blog) => (
            <div key={blog.id} className="w-full">
              <Link className="gap-4 group block" href={`/insights/${blog.slug}`}>
                <div className="overflow-hidden rounded-2xl flex-shrink-0 h-[260px] relative mb-4">
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
