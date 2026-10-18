import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "en";
type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx>({ lang: "de", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");
  useEffect(() => {
    const s = localStorage.getItem("lang");
    if (s === "en" || s === "de") setLangState(s);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Pick the string for the active language. */
export function useT() {
  const { lang } = useLang();
  return <T,>(v: { de: T; en: T }) => v[lang];
}
