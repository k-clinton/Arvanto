"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
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
  image,
  backLink,
  imageAlt = "",
  titleClassName = "max-w-5xl text-3xl sm:text-5xl md:text-7xl",
  children,
}: PageHeroProps) {
  return (
    <section className="relative -mt-[72px] min-h-[420px] pt-[72px] sm:-mt-[94px] sm:min-h-[500px] sm:pt-[94px] lg:-mt-[104px] lg:pt-[104px] flex items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
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
