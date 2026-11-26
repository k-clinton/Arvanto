"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SLIDE_DURATION_MS = 4500;

const HERO_SLIDES = [
  {
    image: "/images/home-hero-1.jpg",
    eyebrow: "STRATEGY · INTELLIGENCE · TRANSFORMATION",
    headline: "Turn complexity into clarity.",
    highlight: "Turn strategy into measurable results",
    description:
      "Arvanto helps leadership teams combine strategy, data, and AI to make better decisions and deliver lasting performance improvement.",
  },
  {
    image: "/images/home-hero-2.jpg",
    eyebrow: "Partnership & Value Creation",
    headline: "Build stronger relationships,",
    highlight: "and turn good ideas into lasting results.",
    description:
      "Bring your teams and ambitions together around a shared path forward.",
  },
  {
    image: "/images/home-hero-3.jpg",
    eyebrow: "Insight & Intelligence",
    headline: "See your business more clearly,",
    highlight: "and shape what comes next.",
    description:
      "Connect customer, market, and operational insight to make better moves.",
  },
  {
    image: "/images/home-hero-4.jpg",
    eyebrow: "Growth & Transformation",
    headline: "Make room for new growth,",
    highlight: "with a business built for what’s next.",
    description:
      "Align people, platforms, and processes around your next opportunity.",
  },
] as const;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-page-dark text-white">
      <div aria-hidden="true" className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => {
          const direction = index % 2 === 0 ? "left" : "right";
          const isActive = index === activeIndex;

          return (
            <Image
              key={slide.image}
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-1000 ease-in-out hero-image-pan-${direction} ${
                isActive
                  ? `opacity-100 hero-image-ken-burns-${direction}`
                  : "opacity-0"
              }`}
              style={
                isActive
                  ? {
                      animationDuration: `${SLIDE_DURATION_MS}ms`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }
                  : undefined
              }
            />
          );
        })}
        <div className="absolute inset-y-0 left-0 w-full max-w-[42rem] bg-gradient-to-r from-page-dark/45 via-page-dark/15 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[100svh] max-w-8xl flex-col px-5 pb-8 pt-32 sm:pb-10 sm:pt-40 md:pb-2 2xl:px-0">
        <div
          key={activeIndex}
          aria-live="off"
          className="hero-copy-enter my-auto max-w-xl py-10"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 sm:mb-5 sm:text-sm">
            {activeSlide.eyebrow}
          </p>

          <h1 className="max-w-[18ch] text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
            {activeSlide.headline}{" "}
            <span className="text-white/65">{activeSlide.highlight}</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base md:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
            <Link
              href="/contactus"
              className="inline-flex items-center rounded-full border border-white bg-white px-6 py-3 text-xs font-semibold text-dark shadow-sm transition-all duration-300 hover:bg-transparent hover:text-white sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-dark sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>

        <div className="mt-auto w-full md:w-1/2">
          <div className="flex items-center gap-4 sm:gap-6">
            <p className="shrink-0 text-xs font-semibold tracking-widest text-white">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-white/45">
                {" "}
                / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
            </p>

            <div
              aria-hidden="true"
              className="h-px flex-1 overflow-hidden bg-white/35"
            >
              <div
                key={activeIndex}
                className="hero-slide-progress h-full origin-left bg-white"
                onAnimationEnd={() => {
                  if (!isPaused && !prefersReducedMotion) {
                    setActiveIndex(
                      (index) => (index + 1) % HERO_SLIDES.length,
                    );
                  }
                }}
                style={{
                  animationDuration: `${SLIDE_DURATION_MS}ms`,
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              />
            </div>

            {!prefersReducedMotion && (
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                aria-pressed={isPaused}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon
                  icon={isPaused ? "ph:play-fill" : "ph:pause-fill"}
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </button>
            )}
          </div>

        </div>
      </div>

      <div className="relative z-30 container mx-auto mb-8 mt-8 max-w-8xl px-5 2xl:px-0 md:absolute md:bottom-11 md:right-0 md:mb-0 md:mt-0 md:w-[62%] md:max-w-none">
        <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-2xl dark:bg-dark sm:p-7 md:rounded-l-3xl md:rounded-r-none md:py-8 md:px-10">
          <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-6 md:flex md:flex-row md:gap-0 md:divide-x md:divide-black/10 md:dark:divide-white/10">
            <div className="flex flex-col items-start justify-center gap-1 md:flex-1 md:pr-8 lg:pr-10">
              <div className="rounded-full bg-primary/10 p-2 text-primary dark:bg-primary/20 sm:p-2.5">
                <Icon icon="ph:chart-line-up-bold" className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="mt-1 text-xs font-semibold text-dark dark:text-white sm:text-sm">
                6 Core Practices
              </p>
              <p className="text-[11px] text-black/45 dark:text-white/45 sm:text-xs">
                Strategy to Scale
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-1 md:flex-1 md:px-8 lg:px-10">
              <div className="rounded-full bg-primary/10 p-2 text-primary dark:bg-primary/20 sm:p-2.5">
                <Icon icon="ph:cpu-bold" className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="mt-1 text-xs font-semibold text-dark dark:text-white sm:text-sm">
                AI &amp; Quant Engines
              </p>
              <p className="text-[11px] text-black/45 dark:text-white/45 sm:text-xs">
                Decision Intelligence
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-1 md:flex-1 md:px-8 lg:px-10">
              <div className="rounded-full bg-primary/10 p-2 text-primary dark:bg-primary/20 sm:p-2.5">
                <Icon
                  icon="ph:globe-hemisphere-east-bold"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
              <p className="mt-1 text-xs font-semibold text-dark dark:text-white sm:text-sm">
                Kenya &amp; Global
              </p>
              <p className="text-[11px] text-black/45 dark:text-white/45 sm:text-xs">
                Founded in Africa
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-1 md:flex-1 md:pl-8 lg:pl-10">
              <p className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                $150M+
              </p>
              <p className="text-[11px] text-black/45 dark:text-white/45 sm:text-xs">
                ROI Created
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
