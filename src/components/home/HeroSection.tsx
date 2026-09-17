import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden !py-0 flex flex-col justify-between">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5bb3e8] via-[#90cef4] to-[#dff0fb] dark:from-[#1a3a4f] dark:via-[#1e4d6b] dark:to-[#0d2233]" />

      {/* Hero Architectural Visual - Optimized for mobile & desktop */}
      <div className="absolute top-16 md:top-0 right-0 w-full md:w-[54%] h-[45%] sm:h-[60%] md:h-[85%] z-10 pointer-events-none flex items-start md:items-center justify-end">
        <div className="relative w-full h-full">
          <Image
            src="/images/heroBanner.png"
            alt="Modern architectural building – Arvanto"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 54vw"
            className="object-contain object-right-top md:object-right mix-blend-screen opacity-90 md:opacity-100"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#dff0fb]/70 dark:to-[#0d2233]/70 md:block hidden pointer-events-none" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 container max-w-8xl mx-auto px-5 2xl:px-0 flex flex-col justify-center flex-1 pt-28 sm:pt-36 md:pt-20 pb-8 md:pb-52">
        <div className="max-w-full sm:max-w-[75%] md:max-w-[48%]">

          <p className="text-white/95 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-5 drop-shadow-sm">
            Nairobi, Kenya • Global Hubs
          </p>

          <h1 className="text-white font-bold leading-[1.08] tracking-tight mb-6 sm:mb-8 text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] drop-shadow-sm">
            Strategy.<br />
            Intelligence.<br />
            Transformation.
          </h1>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contactus"
              className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-dark text-xs sm:text-sm font-semibold rounded-full border border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 shadow-sm"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 bg-transparent text-white text-xs sm:text-sm font-semibold rounded-full border border-white/60 hover:bg-white hover:text-dark hover:border-white transition-all duration-300"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar - Responsive 2x2 on Mobile, Floating Bar on Desktop */}
      <div className="relative z-30 container max-w-8xl mx-auto px-5 2xl:px-0 mb-8 md:mb-0 md:absolute md:bottom-16 md:right-0 md:w-[62%] md:max-w-none">
        <div className="bg-white dark:bg-dark rounded-2xl md:rounded-l-3xl md:rounded-r-none shadow-2xl border border-black/5 dark:border-white/5 p-5 sm:p-7 md:py-8 md:px-10">
          <div className="grid grid-cols-2 md:flex md:flex-row items-stretch gap-4 sm:gap-6 md:gap-0 md:divide-x md:divide-black/8 md:dark:divide-white/10">

            {/* Stat 1 */}
            <div className="flex flex-col items-start sm:items-start justify-center gap-1 md:pr-8 lg:pr-10 md:flex-1">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 sm:p-2.5 rounded-full text-primary">
                <Icon icon="ph:chart-line-up-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-dark dark:text-white mt-1">5 Core Practices</p>
              <p className="text-[11px] sm:text-xs text-black/45 dark:text-white/45">Strategy to Scale</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-start sm:items-start justify-center gap-1 md:px-8 lg:px-10 md:flex-1">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 sm:p-2.5 rounded-full text-primary">
                <Icon icon="ph:cpu-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-dark dark:text-white mt-1">AI &amp; Quant Engines</p>
              <p className="text-[11px] sm:text-xs text-black/45 dark:text-white/45">Decision Intelligence</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-start sm:items-start justify-center gap-1 md:px-8 lg:px-10 md:flex-1">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 sm:p-2.5 rounded-full text-primary">
                <Icon icon="ph:globe-hemisphere-east-bold" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-dark dark:text-white mt-1">Kenya &amp; Global</p>
              <p className="text-[11px] sm:text-xs text-black/45 dark:text-white/45">Founded in Africa</p>
            </div>

            {/* Stat 4 — ROI highlight */}
            <div className="flex flex-col items-start sm:items-start justify-center gap-1 md:pl-8 lg:pl-10 md:flex-1">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">$150M+</p>
              <p className="text-[11px] sm:text-xs text-black/45 dark:text-white/45">ROI Created</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
