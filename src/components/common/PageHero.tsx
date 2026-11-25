"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  images: string[];
  backLink?: {
    href: string;
    label: string;
  };
  imageAlt?: string;
  titleClassName?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  images,
  backLink,
  imageAlt = "",
  titleClassName = "max-w-5xl text-3xl sm:text-5xl md:text-7xl",
  children,
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const previousImageLayerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);
  const activeIndexRef = useRef(0);
  const imagesRef = useRef(images);
  imagesRef.current = images;

  useEffect(() => {
    const hero = heroRef.current;
    const imageLayer = imageLayerRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!hero || !imageLayer || prefersReducedMotion) {
      return;
    }

    const initialTop = hero.getBoundingClientRect().top;
    let frame: number | undefined;

    const updatePosition = () => {
      frame = undefined;
      const scrolledDistance = initialTop - hero.getBoundingClientRect().top;
      const offset = Math.min(Math.max(scrolledDistance * 0.25, 0), 64);
      const backgroundPosition = `center calc(50% + ${offset}px)`;
      imageLayer.style.backgroundPosition = backgroundPosition;
      if (previousImageLayerRef.current) {
        previousImageLayerRef.current.style.backgroundPosition = backgroundPosition;
      }
    };

    const handleScroll = () => {
      if (frame === undefined) {
        frame = window.requestAnimationFrame(updatePosition);
      }
    };

    updatePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (
      imagesRef.current.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let fadeTimeout: number | undefined;
    let fadeFrame: number | undefined;

    const interval = window.setInterval(() => {
      const currentIndex = activeIndexRef.current;
      const imageCount = imagesRef.current.length;
      const nextIndex = Math.floor(Math.random() * (imageCount - 1));
      const nextIndexWithoutCurrent =
        nextIndex >= currentIndex ? nextIndex + 1 : nextIndex;

      activeIndexRef.current = nextIndexWithoutCurrent;
      setPreviousIndex(currentIndex);
      setIsFading(false);
      setActiveIndex(nextIndexWithoutCurrent);
      fadeFrame = window.requestAnimationFrame(() => setIsFading(true));

      if (fadeTimeout !== undefined) {
        window.clearTimeout(fadeTimeout);
      }
      fadeTimeout = window.setTimeout(() => {
        setPreviousIndex(null);
        setIsFading(false);
      }, 1000);
    }, 3000);

    return () => {
      window.clearInterval(interval);
      if (fadeTimeout !== undefined) {
        window.clearTimeout(fadeTimeout);
      }
      if (fadeFrame !== undefined) {
        window.cancelAnimationFrame(fadeFrame);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative -mt-[72px] min-h-[420px] pt-[72px] sm:-mt-[94px] sm:min-h-[500px] sm:pt-[94px] lg:-mt-[104px] lg:pt-[104px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden bg-dark">
        <div
          ref={imageLayerRef}
          role={imageAlt ? "img" : undefined}
          aria-label={imageAlt || undefined}
          className="absolute inset-0 bg-cover bg-center bg-fixed motion-reduce:bg-scroll"
          style={{
            backgroundImage: `url("${images[activeIndex]}")`,
            backgroundPosition: "center center",
          }}
        />
        {previousIndex !== null && (
          <div
            ref={previousImageLayerRef}
            aria-hidden="true"
            className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 motion-reduce:bg-scroll motion-reduce:transition-none ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            style={{
              backgroundImage: `url("${images[previousIndex]}")`,
              backgroundPosition: "center center",
            }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="container relative z-10 max-w-8xl mx-auto px-5 2xl:px-0 py-14 sm:py-20 text-white">
        {backLink && (
          <Link
            href={backLink.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors mb-8"
          >
            <Icon icon="ph:arrow-left-bold" aria-hidden="true" />
            {backLink.label}
          </Link>
        )}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary font-bold mb-3">
          {eyebrow}
        </p>
        <h1 className={`${titleClassName} font-bold leading-tight`}>{title}</h1>
        <p className="max-w-3xl text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed mt-4 sm:mt-6">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
