"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export function ScrollToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);

      const bounds = buttonRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const darkSections = document.querySelectorAll<HTMLElement>(
        "[data-scroll-to-top-contrast]",
      );
      const overlapsDarkSection = Array.from(darkSections).some((section) => {
        const sectionBounds = section.getBoundingClientRect();
        return (
          centerX >= sectionBounds.left &&
          centerX <= sectionBounds.right &&
          centerY >= sectionBounds.top &&
          centerY <= sectionBounds.bottom
        );
      });

      setIsOnDarkBackground(overlapsDarkSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={scrollToTop}
      disabled={!isVisible}
      aria-hidden={!isVisible}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 flex h-16 w-12 items-center justify-center rounded-full ${
        isOnDarkBackground
          ? "bg-white text-dark"
          : "bg-dark text-white dark:bg-white dark:text-dark"
      } shadow-lg transition-all duration-300 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:bg-white/80 dark:hover:text-dark motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Icon icon="ph:arrow-up" aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}
