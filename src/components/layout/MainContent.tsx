"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        !isHome ? "pt-[calc(72px+0.2in)] sm:pt-[calc(94px+0.2in)] lg:pt-[calc(104px+0.2in)]" : ""
      }`}
    >
      {children}
    </main>
  );
}
