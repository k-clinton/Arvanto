"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

const INITIAL_LOADING_DURATION = 2500;
const NAVIGATION_LOADING_DURATION = 1000;

export function RouteLoadingOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const navigationStartedAt = useRef<number | null>(null);
  const minimumLoadingDuration = useRef(INITIAL_LOADING_DURATION);
  const hideTimeout = useRef<number | null>(null);

  useEffect(() => {
    navigationStartedAt.current = performance.now();
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (
        !(link instanceof HTMLAnchorElement) ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      ) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname
      ) {
        return;
      }

      if (hideTimeout.current !== null) {
        window.clearTimeout(hideTimeout.current);
        hideTimeout.current = null;
      }
      navigationStartedAt.current = performance.now();
      minimumLoadingDuration.current = NAVIGATION_LOADING_DURATION;
      setIsVisible(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    const startedAt = navigationStartedAt.current;
    if (startedAt === null) return;

    const remainingDuration = Math.max(
      0,
      minimumLoadingDuration.current - (performance.now() - startedAt),
    );

    hideTimeout.current = window.setTimeout(() => {
      setIsVisible(false);
      navigationStartedAt.current = null;
      hideTimeout.current = null;
    }, remainingDuration);

    return () => {
      if (hideTimeout.current !== null) {
        window.clearTimeout(hideTimeout.current);
        hideTimeout.current = null;
      }
    };
  }, [pathname]);

  return isVisible ? <LoadingScreen /> : null;
}
