"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createContext, ReactNode, useContext, useEffect } from "react";

type Dictionary = Record<string, unknown>;

interface LangContextValue {
  lang: "en" | "th";
  dict: Dictionary;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  dict: {},
});

export function LangProvider({
  children,
  lang,
  dict,
}: {
  children: ReactNode;
  lang: "en" | "th";
  dict: Record<string, unknown>;
}) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function switchLang(
  lang: "en" | "th",
  pathname: string,
  router: AppRouterInstance
) {
  // เปลี่ยน path ภาษา
  const newPath = pathname.replace(/^\/(en|th)/, `/${lang}`);

  // เก็บ current theme ในตัวแปร
  const currentTheme = localStorage.getItem("theme");

  // push route ใหม่
  router.push(newPath);
}

export function useI18n() {
  return useContext(LangContext);
}
