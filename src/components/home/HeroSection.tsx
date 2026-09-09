import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden !py-0">

      {/*
       * BACKGROUND: soft blue-sky gradient fading to near-white at the bottom
       */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5bb3e8] via-[#90cef4] to-[#dff0fb] dark:from-[#1a3a4f] dark:via-[#1e4d6b] dark:to-[#0d2233]" />

      {/*
       * HERO IMAGE: Large architectural building image, right-aligned.
       * It bleeds off the right edge just like in the screenshot.
       * mix-blend-luminosity lets it absorb the sky-blue background tones naturally.
       */}
      {/*
       * HERO IMAGE: The heroBanner.png has a pure black background.
       * mix-blend-screen makes black = transparent, so the building
       * floats seamlessly on the blue sky gradient no hard edges.
       */}
      <div className="absolute top-0 right-0 w-full md:w-[52%] h-[75%] md:h-[85%] z-10 pointer-events-none flex items-end md:items-center justify-end">
        <div className="relative w-full h-full">
          <Image
            src="/images/heroBanner.png"
            alt="Modern architectural building – Arvanto"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-contain object-right-bottom md:object-right mix-blend-screen"
          />
          {/* Subtle bottom fade into the stats card */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#dff0fb]/60 dark:to-[#0d2233]/60 pointer-events-none" />
        </div>
      </div>

      {/*
       * HERO CONTENT: left-aligned text, positioned vertically in the upper-middle
       */}
      <div className="relative z-20 container max-w-8xl mx-auto px-5 2xl:px-0 flex flex-col justify-center min-h-screen pb-48 md:pb-56">
        <div className="max-w-[90%] sm:max-w-[55%] md:max-w-[44%] pt-20">

          {/* Small location/category label above the heading */}
          <p className="text-white/90 text-sm font-medium uppercase tracking-widest mb-5 drop-shadow-sm">
            Nairobi, Kenya • Global Hubs
          </p>

          {/* Main heading — large, bold, tight line-height, white */}
          <h1 className="text-white font-bold leading-[1.05] tracking-tight mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] drop-shadow-sm">
            Strategy.<br />
            Intelligence.<br />
            Transformation.
          </h1>

          {/* CTA Buttons — two pill buttons side by side */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contactus"
              className="inline-flex items-center px-7 py-3.5 bg-white text-dark text-sm font-semibold rounded-full border border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 shadow-sm"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-7 py-3.5 bg-transparent text-white text-sm font-semibold rounded-full border border-white/60 hover:bg-white hover:text-dark hover:border-white transition-all duration-300"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </div>

      {/*
       * INFORMATION CARD: white card that overlaps the lower portion of the hero
       * and visually bleeds into the next section — positioned at bottom-right
       */}
      <div className="absolute bottom-16 right-0 z-30 w-full md:w-[62%] bg-white dark:bg-dark rounded-tl-3xl shadow-xl">
        <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-black/8 dark:divide-white/10 px-6 md:px-10 py-7 md:py-8">

          {/* Stat 1 */}
          <div className="flex flex-col items-center sm:items-start justify-center gap-1.5 sm:pr-10 pb-4 sm:pb-0 flex-1">
            <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-full text-primary">
              <Icon icon="ph:chart-line-up-bold" className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-dark dark:text-white mt-1">5 Core Practices</p>
            <p className="text-xs text-black/45 dark:text-white/45">Strategy to Scale</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center sm:items-start justify-center gap-1.5 sm:px-10 py-4 sm:py-0 flex-1">
            <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-full text-primary">
              <Icon icon="ph:cpu-bold" className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-dark dark:text-white mt-1">AI &amp; Quant Engines</p>
            <p className="text-xs text-black/45 dark:text-white/45">Decision Intelligence</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center sm:items-start justify-center gap-1.5 sm:px-10 py-4 sm:py-0 flex-1">
            <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-full text-primary">
              <Icon icon="ph:globe-hemisphere-east-bold" className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-dark dark:text-white mt-1">Kenya &amp; Global</p>
            <p className="text-xs text-black/45 dark:text-white/45">Founded in Africa</p>
          </div>

          {/* Stat 4 — ROI highlight */}
          <div className="flex flex-col items-center sm:items-start justify-center gap-1.5 sm:pl-10 pt-4 sm:pt-0 flex-1">
            <p className="text-2xl md:text-3xl font-bold text-primary">$150M+</p>
            <p className="text-sm text-black/45 dark:text-white/45">Quantified ROI Created</p>
          </div>
        </div>
      </div>

    </section>
  );
}
