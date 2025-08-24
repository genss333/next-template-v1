"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ThemeHandler() {
  const pathname = usePathname(); // triggers on route change

  useEffect(() => {
    const applyTheme = () => {
      const theme = localStorage.getItem("theme");
      let isDark;
      if (theme === "dark") {
        isDark = true;
      } else if (theme === "light") {
        isDark = false;
      } else {
        isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();

    // Listen for system theme changes
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e: MediaQueryListEvent) => {
      const t = localStorage.getItem("theme");
      if (!t || t === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [pathname]); // run again on every route change

  return null;
}
