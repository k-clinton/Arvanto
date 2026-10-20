"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        !isHome ? "pt-[72px] sm:pt-[94px] lg:pt-[104px]" : ""
      }`}
    >
      {children}
    </main>
  );
}
