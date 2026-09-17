"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = TESTIMONIALS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-dark relative overflow-hidden py-24 group/section" id="testimonial">
      {/* Background Subtle Overlay */}
      <div className="absolute right-0 top-0 opacity-15 pointer-events-none">
        <Icon icon="ph:quotes-fill" className="w-96 h-96 text-white/10" />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div>
          <p className="text-white text-base font-semibold flex items-center gap-2">
            <Icon icon="ph:quotes-bold" className="text-primary text-xl" />
            Executive Feedback
          </p>
          <h2 className="lg:text-52 text-40 font-medium text-white mt-2">
            What our partners say
          </h2>
        </div>

        <div className="mt-12">
          <div className="lg:flex items-center gap-11">
            {/* Quote Details */}
            <div className="flex items-start gap-8 lg:pr-20 lg:w-2/3">
              <div>
                <Icon icon="ph:quotes-fill" className="text-primary text-5xl mb-4 opacity-80" />
                <h3 className="text-white lg:text-3xl text-2xl font-light leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </h3>

                <div className="flex items-center mt-8 gap-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shrink-0 lg:hidden">
                    <Image
                      src={current.image}
                      alt={current.author}
                      fill
                      className={`${current.imageClassName || "object-cover"}`}
                    />
                  </div>
                  <div>
                    <h6 className="text-white text-xl font-medium">{current.author}</h6>
                    <p className="text-white/40 text-sm mt-0.5">
                      {current.role} — {current.organization}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex gap-3 mt-8">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIdx ? "w-8 bg-primary" : "w-2.5 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Avatar Image */}
            <div className="w-full lg:w-1/3 h-[440px] rounded-2xl overflow-hidden relative shadow-2xl lg:block hidden">
              <Image
                src={current.image}
                alt={current.author}
                fill
                className={`${current.imageClassName || "object-cover"} rounded-2xl`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Edge Navigation Buttons (Fade in on Hover) */}
      <button
        onClick={handlePrev}
        aria-label="Previous testimonial"
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center opacity-0 group-hover/section:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <Icon icon="ph:caret-left-bold" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next testimonial"
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center opacity-0 group-hover/section:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <Icon icon="ph:caret-right-bold" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
      </button>
    </section>
  );
}
