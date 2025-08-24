"use client";

import { useEffect } from "react";

export function LangSaver({ lang }: { lang: "en" | "th" }) {
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return null;
}
