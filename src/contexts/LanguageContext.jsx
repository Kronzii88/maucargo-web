import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
