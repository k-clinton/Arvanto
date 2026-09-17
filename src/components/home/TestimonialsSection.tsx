"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);

  const current = TESTIMONIALS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY !== null && touchEndY !== null ? touchStartY - touchEndY : 0;

    // Trigger only if horizontal swipe dominates over vertical scrolling
    if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section
      className="bg-dark relative overflow-hidden py-24 group/section select-none"
      id="testimonial"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Subtle Overlay */}
      <div className="absolute right-0 top-0 opacity-15 pointer-events-none">
        <Icon icon="ph:quotes-fill" className="w-96 h-96 text-white/10" />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10 touch-pan-y">
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
                <div className="flex gap-3 mt-8 relative z-30">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIdx(i);
                      }}
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

      {/* Left 1/3 Navigation Zone (Desktop hover across the left 1/3) */}
      <button
        onClick={handlePrev}
        aria-label="Previous testimonial"
        className="group/prev absolute left-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-start pl-4 sm:pl-8 lg:pl-12 z-20 cursor-pointer bg-transparent border-none outline-none"
      >
        <div className="opacity-0 group-hover/prev:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover/prev:translate-x-0 text-white/50 group-hover/prev:text-white hover:!text-primary active:scale-95">
          <svg
            className="w-6 h-12 sm:w-8 sm:h-16 lg:w-9 lg:h-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            viewBox="0 0 32 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M24 12 L8 40 L24 68" />
          </svg>
        </div>
      </button>

      {/* Right 1/3 Navigation Zone (Desktop hover across the right 1/3) */}
      <button
        onClick={handleNext}
        aria-label="Next testimonial"
        className="group/next absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-end pr-4 sm:pr-8 lg:pr-12 z-20 cursor-pointer bg-transparent border-none outline-none"
      >
        <div className="opacity-0 group-hover/next:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/next:translate-x-0 text-white/50 group-hover/next:text-white hover:!text-primary active:scale-95">
          <svg
            className="w-6 h-12 sm:w-8 sm:h-16 lg:w-9 lg:h-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            viewBox="0 0 32 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 12 L24 40 L8 68" />
          </svg>
        </div>
      </button>
    </section>
  );
}
