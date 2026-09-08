"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        {/* Newsletter / Subscription Bar */}
        <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm lg:max-w-1/5">
            Stay updated with Arvanto&apos;s latest transformation insights, research briefings, and executive reports.
          </p>

          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3">
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 lg:order-1 order-2">
              <input
                type="email"
                placeholder="Enter Your Corporate Email"
                className="rounded-full py-4 px-6 bg-white/10 placeholder:text-white/60 text-white focus-visible:outline-0 border border-white/10 text-sm"
              />
              <button
                type="submit"
                className="text-dark bg-white py-4 px-8 font-semibold rounded-full hover:bg-primary hover:text-white duration-300 hover:cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/40 text-sm lg:max-w-[45%] order-1 lg:order-2">
              By subscribing, you agree to receive Arvanto executive briefings. You can unsubscribe at any time.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-primary transition" aria-label="LinkedIn">
              <Icon icon="ph:linkedin-logo-bold" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition" aria-label="Twitter">
              <Icon icon="ph:twitter-logo-bold" className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition" aria-label="Github">
              <Icon icon="ph:github-logo-bold" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Main Footer Body */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Begin your path to success — contact us today.
              </h2>
              <Link
                className="inline-block bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer"
                href="/contactus"
              >
                Get In Touch
              </Link>
            </div>

            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                <p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Capabilities</p>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/services#strategy-growth">
                    Strategy & Growth
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/services#ai-technology">
                    AI & Technology
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/services#data-decision-intelligence">
                    Data & Intelligence
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/services#risk-performance">
                    Risk & Performance
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/services#transformation-operations">
                    Transformation & Ops
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                <p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Navigation</p>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/about">
                    About Arvanto
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/approach">
                    Methodology
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/industries">
                    Industries
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/insights">
                    Insights & Research
                  </Link>
                </div>
                <div>
                  <Link className="text-white/40 text-xm hover:text-white transition" href="/ventures">
                    Arvanto Ventures
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm">
            © 2026 Arvanto. Global Business Transformation & Value Creation Consultancy. All rights reserved.
          </p>
          <div className="flex gap-8 items-center">
            <Link className="text-white/40 hover:text-primary text-sm transition" href="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link className="text-white/40 hover:text-primary text-sm transition" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
