import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import es from './translations/es';
import en from './translations/en';

const translations = { es, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('saniplagas-lang') || 'es';
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem('saniplagas-lang', lang);
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      if (result === undefined) return key;
      result = result[k];
    }
    return result !== undefined ? result : key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
