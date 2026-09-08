import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { INSIGHTS } from "@/data/insights";

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
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      <div className="container max-w-4xl mx-auto px-5 2xl:px-0">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-primary font-semibold mb-8 hover:underline"
        >
          <Icon icon="ph:arrow-left-bold" />
          <span>Back to Insights</span>
        </Link>

        <div className="space-y-4 mb-8">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-primary/10 px-4 py-1.5 rounded-full">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">{article.title}</h1>
          <p className="text-dark/50 dark:text-white/50 text-sm">
            Published on {article.date} • {article.readTime} • By {article.author}
          </p>
        </div>

        <div className="h-[400px] relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-dark/80 dark:text-white/80 leading-relaxed space-y-6">
          <p className="text-xl font-medium text-dark dark:text-white leading-relaxed">
            {article.excerpt}
          </p>
          <p>{article.content}</p>
          <p>
            At Arvanto, our practices continuously refine methodology frameworks to address enterprise vulnerabilities and capitalize on growth opportunities. For further discussion on tailoring these insights to your organization, reach out to our advisory team.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-dark/10 dark:border-white/10 flex justify-between items-center">
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
