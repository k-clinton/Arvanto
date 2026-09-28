"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function VideoBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setShouldLoadVideo(false);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo || !videoRef.current) return;

    const video = videoRef.current;
    video.defaultMuted = true;
    video.muted = true;
    video.load();
    video.play().catch(() => {
      // Autoplay may be blocked until user interaction; the poster remains visible.
    });
  }, [shouldLoadVideo]);

  return (
    <section ref={sectionRef} className="py-12 bg-white dark:bg-black">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="relative rounded-t-2xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full absolute inset-0 object-cover z-0 h-full"
            autoPlay={shouldLoadVideo}
            loop
            muted
            playsInline
            preload={shouldLoadVideo ? "auto" : "none"}
            poster="/images/heroBanner.png"
            aria-label="Background video showing digital transformation"
            style={{ backgroundImage: "url('/images/heroBanner.png')" }}
          >
            {shouldLoadVideo && <source src="/videos/banner.mp4" type="video/mp4" />}
          </video>
          <div className="relative z-10 lg:py-48 md:py-28 py-12 sm:py-16 px-4">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <h2 className="text-white lg:text-52 md:text-40 text-2xl sm:text-3xl max-w-full sm:max-w-3/4 text-center font-medium leading-tight drop-shadow-md">
                Enter a realm where bold strategy and artificial intelligence unite.
              </h2>
              <Link
                className="bg-white py-3.5 sm:py-4 px-7 sm:px-8 rounded-full text-dark hover:bg-primary hover:text-white duration-300 font-semibold transition text-sm sm:text-base text-center"
                href="/contactus"
              >
                Discuss Your Challenge
              </Link>
            </div>
          </div>
        </div>

        {/* Marquee Banner */}
        <div className="w-full py-5 bg-primary rounded-b-2xl overflow-hidden">
          <div className="flex items-center gap-40 animate-slide">
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              STRATEGY & GROWTH — TURNING COMPLEXITY INTO OPPORTUNITY!
            </p>
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              COMBINING DATA, AI & QUANTITATIVE INTELLIGENCE FOR SCALABLE VALUE!
            </p>
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              GLOBAL BUSINESS TRANSFORMATION CONSULTANCY FOUNDED IN AFRICA!
            </p>
            <p className="text-white font-semibold uppercase text-sm tracking-widest whitespace-nowrap relative after:absolute after:w-20 after:h-px after:bg-white after:top-2.5 after:-right-32">
              STRATEGY & GROWTH — TURNING COMPLEXITY INTO OPPORTUNITY!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
