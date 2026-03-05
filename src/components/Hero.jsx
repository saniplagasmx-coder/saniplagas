import React, { useEffect, useState } from 'react';
import iamgen1 from '../assets/Imagen 1.jpeg';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getRevealClass = (delay) => `
    transition-all duration-1000 ${delay}
    ${loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}
  `;

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center bg-white overflow-hidden" aria-labelledby="hero-title">

      {/* IMAGEN DE FONDO CON ZOOM LENTO */}
      <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-7/12 z-0 overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src={iamgen1}
            alt={t('hero.imgAlt')}
            className={`h-full w-full object-cover transition-all duration-[6s] ease-out
              ${loaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white lg:from-transparent lg:via-white/20 lg:to-white z-10" />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center">

          <div className="hidden lg:block" />

          <div className="flex flex-col space-y-8">

            <div className={`space-y-4 ${getRevealClass('delay-300')}`}>
              <h1 id="hero-title" className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[1.05]">
                {t('hero.title')} <br />
                <span className="text-emerald-600">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-500 max-w-lg leading-relaxed">
                {t('hero.subtitle')}  <span className="font-bold text-slate-800">{t('hero.subtitleBold')}</span>
              </p>
            </div>

            <div className={`flex items-center gap-4 ${getRevealClass('delay-500')}`}>
              <div className="h-12 w-1 bg-emerald-500 rounded-full hidden md:block" aria-hidden="true" />
              <p className="text-sm md:text-base text-slate-600 font-medium">
                {t('hero.techLine1')} <br />
                <span className="text-emerald-700 font-bold underline decoration-emerald-500/30">{t('hero.techLine2')}</span>
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-5 pt-4 ${getRevealClass('delay-700')}`}>
              <button
                onClick={() => scrollTo('#contacto')}
                className="group relative overflow-hidden px-10 py-4 bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-emerald-200 hover:shadow-emerald-400/40"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-slate-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 p-10 opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
