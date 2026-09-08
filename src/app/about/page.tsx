import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutPage() {
  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left relative overflow-hidden">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            About Arvanto
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Turning Complexity into Opportunity.
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Arvanto is a global business transformation & value creation consultancy founded in Africa. We combine strategy, technology, data, and quantitative intelligence to help organizations make better decisions and achieve measurable results.
          </p>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Our Mission</p>
            <h2 className="text-40 font-bold mt-2 mb-6">Combining Strategy, Data & AI for Scalable Value</h2>
            <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed mb-6">
              Modern enterprises face multi-dimensional complexity: rapid technological evolution, volatile economic shifts, and data fragmentation. Arvanto bridges these domain silos with integrated multidisciplinary pods.
            </p>
            <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed">
              We do not stop at recommendations. We deploy autonomous AI agents, restructure operating models, stress-test capital exposure, and maintain a Transformation Office to guarantee execution.
            </p>
          </div>
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Arvanto Team Strategy Session"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Global Positioning & Heritage */}
        <div className="bg-dark/5 dark:bg-white/5 rounded-3xl p-12 md:p-16 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <Icon icon="ph:globe-hemisphere-east-bold" className="text-primary text-5xl mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Footprint Rooted in Africa</h2>
            <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed mb-8">
              Founded in Nairobi, Kenya, Arvanto brings internationally credible expertise tailored for high-growth emerging and global markets across Africa, the Middle East, the UK, and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-8 border-t border-dark/10 dark:border-white/10">
              <div>
                <h4 className="text-3xl font-bold text-primary">Kenya</h4>
                <p className="text-sm text-dark/50 dark:text-white/50">Initial Market & HQ</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">East Africa</h4>
                <p className="text-sm text-dark/50 dark:text-white/50">Regional Reach</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">Middle East</h4>
                <p className="text-sm text-dark/50 dark:text-white/50">Expansion Hub</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">Global</h4>
                <p className="text-sm text-dark/50 dark:text-white/50">Long-term Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
