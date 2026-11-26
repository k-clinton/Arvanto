import Link from "next/link";
import { Icon } from "@iconify/react";
import { PageHero } from "@/components/common/PageHero";

export default function VenturesPage() {
  return (
    <div className="pb-16 bg-page dark:bg-page-dark text-dark dark:text-white">
      <PageHero
        eyebrow="Arvanto Ventures"
        title="Venture Building & Strategic Investments"
        description="Building next generation business units, developing proprietary enterprise technology, and exploring long term equity positions in promising ventures."
        images={[
          "/images/page-hero-city.jpg",
          "/images/page-hero-technology.jpg",
          "/images/page-hero-strategy.jpg",
          "/images/page-hero-finance.jpg",
        ]}
      />

      {/* Overview */}
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 py-4 sm:py-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Long-Term Vision
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              From Strategic Advisory to Proprietary Equity Creation
            </h2>
            <p className="text-dark/70 dark:text-white/70 text-base sm:text-lg leading-relaxed">
              Arvanto Ventures represents the longer-term venture incubation and investment division of Arvanto. As our consultancy identifies high-leverage market opportunities across Africa and global hubs, Arvanto Ventures incubates proprietary technology platforms and partners through strategic investments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 space-y-3">
              <div className="bg-primary/10 p-3 rounded-full text-primary w-fit">
                <Icon icon="ph:rocket-launch-bold" className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Proprietary Technology Development</h3>
              <p className="text-sm text-dark/70 dark:text-white/70">
                Incubating autonomous enterprise AI models, decision engines, and sector-specific analytics platforms.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 space-y-3">
              <div className="bg-primary/10 p-3 rounded-full text-primary w-fit">
                <Icon icon="ph:handshake-bold" className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Strategic Equity & Joint Ventures</h3>
              <p className="text-sm text-dark/70 dark:text-white/70">
                Structuring equity co investments and venture partnerships alongside high growth tech startups and established enterprise spin-offs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-dark/5 dark:bg-white/5 p-6 sm:p-12 md:p-16 rounded-3xl border border-dark/10 dark:border-white/10 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Partner with Arvanto Ventures</h3>
          <p className="text-dark/70 dark:text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
            Are you exploring strategic technology partnerships, new business spin offs, or venture investments in East Africa and global markets?
          </p>
          <Link
            href="/contactus"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-dark transition inline-block text-sm sm:text-base"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
