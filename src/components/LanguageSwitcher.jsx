import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = ({ scrolled }) => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => setLanguage(language === 'es' ? 'en' : 'es');

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
        scrolled
          ? 'text-gray-800 hover:bg-[#4992F2] hover:text-white'
          : 'text-[#0D0D0D] hover:bg-white/20 hover:backdrop-blur-lg'
      }`}
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      role="switch"
      aria-checked={language === 'en'}
    >
      <span className="text-base leading-none" aria-hidden="true">{language === 'es' ? '🇺🇸' : '🇲🇽'}</span>
      <span>{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitcher;
