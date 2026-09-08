"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Approach", href: "/approach" },
    { name: "Insights", href: "/insights" },
    { name: "Ventures", href: "/ventures" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <>
      {/*
       * FLOATING NAVBAR
       * ─────────────────────────────────────────────────────────────
       * Fixed position, inset ~22px from top, ~30px from left/right.
       * At top of page : transparent bg, white text.
       * After scrolling: white bg, dark text, subtle shadow.
       * The outer container keeps its position & rounded shape in both states.
       */}
      <header
        className={`
          fixed z-50
          top-3 left-8 right-8
          sm:top-[18px] sm:left-20 sm:right-20
          lg:top-[22px] lg:left-40 lg:right-40
          xl:left-[220px] xl:right-[220px]
          rounded-2xl
          transition-all duration-500 ease-in-out
          ${isScrolled
            ? "bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent shadow-none"
          }
        `}
      >
        <nav className="flex items-center justify-between h-[68px] sm:h-[76px] lg:h-[82px] px-4 sm:px-6 lg:px-8">

          {/* ── Left: Logo + Brand Name ────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="bg-primary text-white p-2 sm:p-2.5 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <Icon icon="ph:trend-up-bold" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span
              className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight uppercase transition-colors duration-500 ${
                isScrolled ? "text-dark dark:text-white" : "text-white"
              }`}
            >
              ARVANTO
            </span>
          </Link>

          {/* ── Right: Actions ─────────────────────────────────────── */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Theme Toggle */}
            <ThemeToggle isScrolled={isScrolled} />

            {/* Phone — desktop only */}
            <a
              href="tel:+254700000000"
              className={`hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors duration-500 ${
                isScrolled
                  ? "text-dark/70 dark:text-white/70 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <Icon
                icon="ph:phone-bold"
                className={`w-4 h-4 transition-colors duration-500 ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              />
              <span>+254 700 000 000</span>
            </a>

            {/* Divider — desktop only */}
            <div
              className={`hidden xl:block h-5 w-px transition-colors duration-500 ${
                isScrolled ? "bg-dark/20 dark:bg-white/20" : "bg-white/30"
              }`}
            />

            {/*
             * Menu Button
             * Top state   : white bg + dark text (white pill visible on hero)
             * Scrolled     : dark bg + white text (dark pill inside white navbar)
             */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-500 cursor-pointer ${
                isScrolled
                  ? "bg-dark dark:bg-white border-dark dark:border-white text-white dark:text-dark hover:bg-primary hover:border-primary hover:text-white"
                  : "bg-white border-white text-dark hover:bg-primary hover:border-primary hover:text-white"
              }`}
              aria-label="Open navigation menu"
            >
              <Icon icon="ph:list-bold" className="w-4 h-4" />
              <span className="hidden sm:block">Menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen slide-out Navigation Drawer ───────────────── */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-dark text-white shadow-2xl transition-transform duration-500 ease-in-out max-w-2xl z-[60] px-8 sm:px-20 overflow-auto no-scrollbar ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center justify-start py-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="bg-white p-3 rounded-full cursor-pointer hover:bg-primary hover:text-white transition duration-300 shadow-md"
              >
                <Icon icon="ph:x-bold" className="w-6 h-6 text-black" />
              </button>
            </div>

            <nav aria-label="Main navigation">
              <ul className="w-full flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name} className="flex items-center group w-fit">
                      <div
                        className={`h-0.5 bg-primary transition-all duration-300 ${
                          isActive ? "w-6 mr-4" : "w-0 group-hover:w-6 group-hover:mr-4"
                        }`}
                      />
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`py-3 text-3xl sm:text-5xl font-medium transition duration-300 ${
                          isActive ? "text-primary font-semibold" : "text-white/40 group-hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-1 my-16">
            <p className="text-base font-normal text-white/40">Arvanto Advisory &amp; Intelligence</p>
            <a className="text-base font-medium text-white hover:text-primary transition" href="mailto:contact@arvanto.com">
              contact@arvanto.com
            </a>
            <p className="text-base font-normal text-white/70">Nairobi, Kenya • Global Operational Hubs</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
