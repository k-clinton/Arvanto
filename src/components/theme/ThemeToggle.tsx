"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface ThemeToggleProps {
  isScrolled?: boolean;
}

export function ThemeToggle({ isScrolled }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full opacity-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex items-center justify-center transition-colors duration-300 cursor-pointer ${
        isScrolled
          ? "text-dark dark:text-white hover:text-primary"
          : "text-white hover:text-white/70"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Icon
        icon={isDark ? "ph:sun-bold" : "ph:moon-bold"}
        className="w-5 h-5 transition-transform duration-300 hover:scale-110"
      />
    </button>
  );
}
