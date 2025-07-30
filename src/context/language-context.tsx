import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const cookieLang = Cookies.get("language");
    if (cookieLang === "vi" || cookieLang === "en") {
      setLanguage(cookieLang);
    } else {
      Cookies.set("language", "vi");
      setLanguage("vi");
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
    Cookies.set("language", newLang, { expires: 365 });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

