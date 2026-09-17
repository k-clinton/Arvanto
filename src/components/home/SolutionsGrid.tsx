import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface SolutionItem {
  id: string;
  title: string;
  category: string;
  focusRegion: string;
  impactBadge: string;
  image: string;
  stat1: string;
  stat2: string;
  stat3: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: "corporate-strategy",
    title: "Corporate Growth & Market Entry Strategy",
    category: "Arvanto Advisory",
    focusRegion: "East Africa & Global Markets",
    impactBadge: "3.4x Growth ROI",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    stat1: "Board Advisory",
    stat2: "Feasibility Model",
    stat3: "Expansion Roadmap"
  },
  {
    id: "autonomous-ai-agents",
    title: "Autonomous AI Workflow Agents Deployment",
    category: "Arvanto Intelligence",
    focusRegion: "Enterprise Operations",
    impactBadge: "65% Velocity Gain",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    stat1: "Multi Agent AI",
    stat2: "Zero Error Drift",
    stat3: "Real-time Execution"
  },
  {
    id: "decision-intelligence",
    slug: "decision-intelligence",
    title: "Executive Command & Predictive Analytics",
    category: "Arvanto Intelligence",
    focusRegion: "Financial Services & Retail",
    impactBadge: "94% Forecast Accuracy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    stat1: "Data Governance",
    stat2: "Live Dashboards",
    stat3: "Customer Analytics"
  } as any,
  {
    id: "risk-stress-testing",
    title: "Balance Sheet & Risk Stress Testing",
    category: "Risk & Performance",
    focusRegion: "Banking & Infrastructure",
    impactBadge: "100% Risk Coverage",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    stat1: "Actuarial Models",
    stat2: "Capital Allocation",
    stat3: "Valuation Engine"
  },
  {
    id: "operating-model-transform",
    title: "Operating Model Shift & Digital TMO",
    category: "Arvanto Transformation",
    focusRegion: "Cross-Industry Enterprises",
    impactBadge: "98% On Time Delivery",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    stat1: "Digital PMO",
    stat2: "Lean Engineering",
    stat3: "Change Management"
  },
  {
    id: "venture-incubation",
    title: "Proprietary Venture & Product Incubation",
    category: "Arvanto Ventures",
    focusRegion: "Tech & Strategic Equity",
    impactBadge: "Long term Equity",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    stat1: "Tech Incubation",
    stat2: "Joint Structuring",
    stat3: "Strategic Growth"
  }
];

export function SolutionsGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <Icon icon="ph:squares-four-bold" className="text-xl sm:text-2xl text-primary" />
            <p className="text-sm sm:text-base font-semibold text-dark/75 dark:text-white/75">
              Solutions & Value Creation
            </p>
          </div>
          <h2 className="text-3xl sm:text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-tight mb-2">
            Proven capability frameworks driving operational excellence.
          </h2>
          <p className="text-sm sm:text-base font-normal text-black/50 dark:text-white/50 text-center max-w-2xl mx-auto">
            Targeted transformation solutions engineered to deliver quantifiable financial performance and long-term organizational resilience.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10">
          {SOLUTIONS.map((item) => (
            <div key={item.id} className="w-full">
              <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20 bg-white dark:bg-dark flex flex-col h-full justify-between">
                {/* Image Box */}
                <div className="overflow-hidden rounded-t-2xl relative">
                  <Link href="/services">
                    <div className="w-full h-[220px] sm:h-[280px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={440}
                        height={280}
                        className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </Link>
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 bg-white text-dark rounded-full hidden group-hover:flex items-center justify-center transition shadow-lg">
                    <Icon icon="ph:arrow-up-right-bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-between mb-5 sm:mb-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <Link href="/services">
                        <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary mt-1 leading-snug">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm font-normal text-black/50 dark:text-white/50 mt-1">
                        {item.focusRegion}
                      </p>
                    </div>
                    <div className="shrink-0 self-start">
                      <span className="text-xs font-semibold text-primary px-3 py-1.5 rounded-full bg-primary/10 whitespace-nowrap inline-block">
                        {item.impactBadge}
                      </span>
                    </div>
                  </div>

                  {/* Feature Attributes Row */}
                  <div className="grid grid-cols-3 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-medium text-black dark:text-white text-center">
                    <div className="flex flex-col gap-0.5 border-e border-black/10 dark:border-white/20 pr-1">
                      <span className="text-black/45 dark:text-white/45 text-[10px]">Pillar 1</span>
                      <p className="truncate">{item.stat1}</p>
                    </div>
                    <div className="flex flex-col gap-0.5 border-e border-black/10 dark:border-white/20 px-1">
                      <span className="text-black/45 dark:text-white/45 text-[10px]">Pillar 2</span>
                      <p className="truncate">{item.stat2}</p>
                    </div>
                    <div className="flex flex-col gap-0.5 pl-1">
                      <span className="text-black/45 dark:text-white/45 text-[10px]">Pillar 3</span>
                      <p className="truncate">{item.stat3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
