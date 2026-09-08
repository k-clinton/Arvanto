import Link from "next/link";
import { Icon } from "@iconify/react";

export default function VenturesPage() {
  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Arvanto Ventures
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Venture Building & Strategic Investments
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Building next-generation business units, developing proprietary enterprise technology, and exploring long-term equity positions in promising ventures.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">
              Long-Term Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              From Strategic Advisory to Proprietary Equity Creation
            </h2>
            <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed">
              Arvanto Ventures represents the longer-term venture incubation and investment division of Arvanto. As our consultancy identifies high-leverage market opportunities across Africa and global hubs, Arvanto Ventures incubates proprietary technology platforms and partners through strategic investments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 space-y-3">
              <div className="bg-primary/10 p-3 rounded-full text-primary w-fit">
                <Icon icon="ph:rocket-launch-bold" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Proprietary Technology Development</h3>
              <p className="text-sm text-dark/70 dark:text-white/70">
                Incubating autonomous enterprise AI models, decision engines, and sector-specific analytics platforms.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 space-y-3">
              <div className="bg-primary/10 p-3 rounded-full text-primary w-fit">
                <Icon icon="ph:handshake-bold" className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Strategic Equity & Joint Ventures</h3>
              <p className="text-sm text-dark/70 dark:text-white/70">
                Structuring equity co-investments and venture partnerships alongside high-growth tech startups and established enterprise spin-offs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-dark/5 dark:bg-white/5 p-12 md:p-16 rounded-3xl border border-dark/10 dark:border-white/10 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Partner with Arvanto Ventures</h3>
          <p className="text-dark/70 dark:text-white/70 mb-8">
            Are you exploring strategic technology partnerships, new business spin-offs, or venture investments in East Africa and global markets?
          </p>
          <Link
            href="/contactus"
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-dark transition inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
