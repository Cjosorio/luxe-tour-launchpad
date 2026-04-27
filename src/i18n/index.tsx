import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { es } from "./es";
import { en } from "./en";
import { pt } from "./pt";

export type Lang = "es" | "en" | "pt";

const dicts = { es, en, pt };

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof es;
}

const Ctx = createContext<I18nCtx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && ["es", "en", "pt"].includes(saved)) return saved;
    const browser = navigator.language.slice(0, 2) as Lang;
    return ["es", "en", "pt"].includes(browser) ? browser : "es";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <Ctx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</Ctx.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};