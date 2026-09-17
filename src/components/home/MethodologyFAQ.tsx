"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { METHODOLOGY_STEPS } from "@/data/methodology";
import { FAQS } from "@/data/faqs";

export function MethodologyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"methodology" | "faqs">("methodology");

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-black" id="faqs">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column Image */}
          <div className="lg:mx-0 mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[420px] lg:h-[644px]">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="Arvanto Transformation Methodology"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent p-5 sm:p-10 flex flex-col justify-end">
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 w-fit">
                  Arvanto Methodology
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-3 sm:mt-4 leading-tight">
                  Discover → Diagnose → Quantify → Transform → Scale
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1.5 sm:mt-2 line-clamp-3 sm:line-clamp-none">
                  A disciplined 5 stage framework engineered to turn complex systemic challenges into measurable financial results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Accordion Content */}
          <div className="lg:px-6">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => { setActiveTab("methodology"); setOpenIndex(0); }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition cursor-pointer ${
                  activeTab === "methodology"
                    ? "bg-primary text-white"
                    : "bg-dark/5 dark:bg-white/10 text-dark/75 dark:text-white/75 hover:bg-dark/10"
                }`}
              >
                01 - 05 Methodology
              </button>
              <button
                onClick={() => { setActiveTab("faqs"); setOpenIndex(0); }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition cursor-pointer ${
                  activeTab === "faqs"
                    ? "bg-primary text-white"
                    : "bg-dark/5 dark:bg-white/10 text-dark/75 dark:text-white/75 hover:bg-dark/10"
                }`}
              >
                Frequent Questions
              </button>
            </div>

            <p className="text-dark/75 dark:text-white/75 text-sm sm:text-base font-semibold flex items-center gap-2">
              <Icon icon="ph:question-bold" className="text-xl sm:text-2xl text-primary" />
              {activeTab === "methodology" ? "Execution Methodology" : "Frequently Asked Questions"}
            </p>
            <h2 className="text-3xl sm:text-40 lg:text-52 leading-[1.2] font-medium text-dark dark:text-white mt-2 mb-3 sm:mb-4">
              {activeTab === "methodology"
                ? "How Arvanto delivers transformational value"
                : "Everything about Arvanto advisory"}
            </h2>
            <p className="text-sm sm:text-base text-dark/50 dark:text-white/50 mb-6 sm:mb-8 leading-relaxed">
              {activeTab === "methodology"
                ? "Our systematic approach ensures total transparency, mathematical ROI validation, and long-term sustainability at every milestone."
                : "Clear answers on how we partner with enterprise leaders, structure engagements, and quantify value."}
            </p>

            {/* Accordion List */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {activeTab === "methodology"
                ? METHODOLOGY_STEPS.map((step, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div
                        key={step.step}
                        className="rounded-2xl border border-dark/10 dark:border-white/10 overflow-hidden bg-dark/5 dark:bg-white/5 transition"
                      >
                        <button
                          onClick={() => toggleAccordion(idx)}
                          className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 font-semibold text-dark dark:text-white text-base sm:text-xl cursor-pointer"
                        >
                          <span className="flex items-center gap-3 sm:gap-4">
                            <span className="text-primary font-bold text-xl sm:text-2xl">{step.step}</span>
                            <span>{step.title}</span>
                            <span className="text-xs text-dark/50 dark:text-white/50 font-normal hidden sm:inline-block">
                              — {step.subtitle}
                            </span>
                          </span>
                          <Icon
                            icon="ph:caret-down-bold"
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 shrink-0 ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0 text-dark/70 dark:text-white/70 text-sm sm:text-base border-t border-dark/5 dark:border-white/5 mt-1">
                            <p className="mt-3 leading-relaxed">{step.description}</p>
                            <div className="mt-4">
                              <p className="text-xs uppercase font-bold text-primary tracking-wider mb-2">
                                Key Deliverables:
                              </p>
                              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-dark/80 dark:text-white/80">
                                {step.keyOutputs.map((output, oIdx) => (
                                   <li key={oIdx}>{output}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                : FAQS.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                      <div
                        key={faq.id}
                        className="rounded-2xl border border-dark/10 dark:border-white/10 overflow-hidden bg-dark/5 dark:bg-white/5 transition"
                      >
                        <button
                          onClick={() => toggleAccordion(idx)}
                          className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 font-semibold text-dark dark:text-white text-base sm:text-lg cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <Icon
                            icon="ph:caret-down-bold"
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 shrink-0 ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0 text-dark/70 dark:text-white/70 text-sm sm:text-base border-t border-dark/5 dark:border-white/5 mt-1">
                            <p className="mt-3 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
