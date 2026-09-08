"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-white dark:bg-black text-dark dark:text-white">
      {/* Banner */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 mb-16">
        <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 rounded-3xl p-12 md:p-20 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            Contact Arvanto
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Start a Conversation.
          </h1>
          <p className="text-lg md:text-xl text-white/90 dark:text-dark/90 max-w-3xl leading-relaxed">
            Discuss your enterprise challenge, schedule an executive briefing, or explore strategic advisory partnerships with Arvanto.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 py-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Let&apos;s build an intelligent, resilient business.
              </h2>
              <p className="text-dark/70 dark:text-white/70 text-base leading-relaxed">
                Whether you need corporate strategy, custom AI agents, quantitative risk models, or full operating transformation, our team is ready.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-dark/10 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Icon icon="ph:map-pin-bold" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Headquarters</h4>
                  <p className="text-dark/70 dark:text-white/70 text-sm mt-0.5">
                    Nairobi, Kenya • East Africa & Global Operational Hubs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Icon icon="ph:envelope-simple-bold" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Inquiry</h4>
                  <a
                    href="mailto:contact@arvanto.com"
                    className="text-primary font-medium hover:underline text-sm mt-0.5 block"
                  >
                    contact@arvanto.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Icon icon="ph:clock-bold" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Response Time</h4>
                  <p className="text-dark/70 dark:text-white/70 text-sm mt-0.5">
                    Within 24 business hours for enterprise inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-dark/5 dark:bg-white/5 p-8 md:p-12 rounded-3xl border border-dark/10 dark:border-white/10">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-3xl">
                  <Icon icon="ph:check-bold" />
                </div>
                <h3 className="text-3xl font-bold">Thank You!</h3>
                <p className="text-dark/70 dark:text-white/70 max-w-md mx-auto">
                  Your message has been transmitted to Arvanto&apos;s executive advisory team. We will review your inquiry and follow up within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-dark dark:bg-white text-white dark:text-dark font-semibold text-sm rounded-full mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Enterprise Inquiry Form</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold text-dark/70 dark:text-white/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. David Kariuki"
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-dark border border-dark/10 dark:border-white/10 focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-dark/70 dark:text-white/70 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. david@company.com"
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-dark border border-dark/10 dark:border-white/10 focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold text-dark/70 dark:text-white/70 mb-2">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Regional Financial Group"
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-dark border border-dark/10 dark:border-white/10 focus:outline-none focus:border-primary text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-dark/70 dark:text-white/70 mb-2">
                      Area of Interest
                    </label>
                    <select className="w-full px-5 py-4 rounded-xl bg-white dark:bg-dark border border-dark/10 dark:border-white/10 focus:outline-none focus:border-primary text-sm">
                      <option>Strategy & Growth</option>
                      <option>AI & Technology</option>
                      <option>Data & Decision Intelligence</option>
                      <option>Risk & Performance</option>
                      <option>Transformation & Operations</option>
                      <option>Arvanto Ventures Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-dark/70 dark:text-white/70 mb-2">
                    How Can Arvanto Assist Your Organization? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your current strategic challenge or transformation goal..."
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-dark border border-dark/10 dark:border-white/10 focus:outline-none focus:border-primary text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-semibold rounded-full hover:bg-dark transition duration-300 shadow-lg"
                >
                  Submit Executive Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
