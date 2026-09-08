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
    stat1: "Multi-Agent AI",
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
    impactBadge: "98% On-Time Delivery",
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
    impactBadge: "Long-term Equity",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    stat1: "Tech Incubation",
    stat2: "Joint Structuring",
    stat3: "Strategic Growth"
  }
];

export function SolutionsGrid() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-3">
          <div className="flex gap-2.5 items-center justify-center">
            <Icon icon="ph:squares-four-bold" className="text-2xl text-primary" />
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              Solutions & Value Creation
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            Proven capability frameworks driving operational excellence.
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center max-w-2xl mx-auto">
            Targeted transformation solutions engineered to deliver quantifiable financial performance and long-term organizational resilience.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {SOLUTIONS.map((item) => (
            <div key={item.id} className="w-full">
              <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20 bg-white dark:bg-dark">
                {/* Image Box */}
                <div className="overflow-hidden rounded-t-2xl relative">
                  <Link href="/services">
                    <div className="w-full h-[300px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={440}
                        height={300}
                        className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
                      />
                    </div>
                  </Link>
                  <div className="absolute top-6 right-6 p-3 bg-white text-dark rounded-full hidden group-hover:flex items-center justify-center transition">
                    <Icon icon="ph:arrow-up-right-bold" className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.category}
                      </span>
                      <Link href="/services">
                        <h3 className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary mt-1">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-sm font-normal text-black/50 dark:text-white/50 mt-1">
                        {item.focusRegion}
                      </p>
                    </div>
                    <div>
                      <button className="text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/10 whitespace-nowrap">
                        {item.impactBadge}
                      </button>
                    </div>
                  </div>

                  {/* Feature Attributes Row */}
                  <div className="flex pt-4 border-t border-black/10 dark:border-white/10 text-xs font-medium text-black dark:text-white">
                    <div className="flex flex-col gap-1 border-e border-black/10 dark:border-white/20 pr-3">
                      <span className="text-black/50 dark:text-white/50 text-[10px]">Pillar 1</span>
                      <p>{item.stat1}</p>
                    </div>
                    <div className="flex flex-col gap-1 border-e border-black/10 dark:border-white/20 px-3">
                      <span className="text-black/50 dark:text-white/50 text-[10px]">Pillar 2</span>
                      <p>{item.stat2}</p>
                    </div>
                    <div className="flex flex-col gap-1 pl-3">
                      <span className="text-black/50 dark:text-white/50 text-[10px]">Pillar 3</span>
                      <p>{item.stat3}</p>
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
