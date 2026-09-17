import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { CAPABILITIES } from "@/data/capabilities";

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-12 sm:mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-6 sm:p-12 md:p-20 text-center md:text-left">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            Arvanto Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            5 Core Practices. End to End Execution.
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Discover our core divisions across Strategy & Growth, AI & Technology, Data & Decision Intelligence, Risk & Performance, and Operating Transformation.
          </p>
        </div>
      </div>

      {/* Practices List */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-4 sm:py-8 space-y-12 sm:space-y-20">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.id}
            id={cap.slug}
            className="grid md:grid-cols-12 gap-8 sm:gap-10 items-center p-6 sm:p-8 md:p-12 rounded-3xl border border-dark/10 dark:border-white/10 bg-dark/5 dark:bg-white/5 scroll-mt-32"
          >
            <div className="md:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2.5 sm:p-3 rounded-full text-primary shrink-0">
                  <Icon icon={cap.icon} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold">
                  {cap.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{cap.title}</h2>
              <p className="text-dark/70 dark:text-white/70 text-sm sm:text-lg leading-relaxed">
                {cap.detailedDescription}
              </p>

              <div className="pt-2 sm:pt-4">
                <h4 className="text-xs sm:text-sm uppercase font-bold text-primary tracking-wider mb-2.5 sm:mb-3">
                  Key Services & Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                  {cap.keyServices.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <Icon icon="ph:check-circle-bold" className="text-primary w-4 h-4 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <Link
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-dark transition duration-300 text-sm sm:text-base"
                >
                  <span>Inquire About {cap.title}</span>
                  <Icon icon="ph:arrow-right-bold" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-6 h-[240px] sm:h-[320px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
