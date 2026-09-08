"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="bg-dark relative overflow-hidden py-24" id="testimonial">
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
                      className="object-cover"
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
                      className={`h-2.5 rounded-full transition-all duration-300 ${
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
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
