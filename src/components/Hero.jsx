import React, { useEffect, useState } from 'react';
import iamgen1 from '../assets/Imagen 1.jpeg';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Pequeño timeout para asegurar que el navegador maneje bien la entrada
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Utility para clases de transición escalonada
  const getRevealClass = (delay) => `
    transition-all duration-1000 ${delay}
    ${loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}
  `;

  return (
    <section className="relative min-h-[100vh] flex items-center bg-white overflow-hidden">
      
      {/* IMAGEN DE FONDO CON ZOOM LENTO */}
      <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-7/12 z-0 overflow-hidden">
        <div className="relative h-full w-full">
          <img 
            src={iamgen1}
            alt="Sanitización Profesional"
            className={`h-full w-full object-cover transition-all duration-[6s] ease-out 
              ${loaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'}`}
          />
          {/* Overlay gradiente más elegante */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white lg:from-transparent lg:via-white/20 lg:to-white z-10" />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center">
          
          <div className="hidden lg:block" /> {/* Espacio para la imagen */}

          <div className="flex flex-col space-y-8">
            
      

            {/* 2. Título con jerarquía visual fuerte */}
            <div className={`space-y-4 ${getRevealClass('delay-300')}`}>
              <h1 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[1.05]">
                Control profesional de <br />
                <span className="text-emerald-600">plagas</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-500 max-w-lg leading-relaxed">
              Soluciones seguras para empresas, zonas residenciales y espacios especificos  <span className="font-bold text-slate-800">zonas residenciales y espacios especificos </span>
              </p>
            </div>

            {/* 3. Detalles Técnicos / Sub-párrafo */}
            <div className={`flex items-center gap-4 ${getRevealClass('delay-500')}`}>
              <div className="h-12 w-1 bg-emerald-500 rounded-full hidden md:block" />
              <p className="text-sm md:text-base text-slate-600 font-medium">
                Tecnología de termonebulización <br />
                <span className="text-emerald-700 font-bold underline decoration-emerald-500/30">100% Biodegradable y libre de residuo tóxico.</span>
              </p>
            </div>

            {/* 4. Acciones (Botones) */}
            <div className={`flex flex-col sm:flex-row gap-5 pt-4 ${getRevealClass('delay-700')}`}>
              <button 
                onClick={() => scrollTo('#contacto')}
                className="group relative overflow-hidden px-10 py-4 bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-emerald-200 hover:shadow-emerald-400/40"
              >
                <span className="relative z-10">AGENDAR INSPECCIÓN</span>
                <div className="absolute inset-0 bg-slate-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollTo('#servicios')}
                className="px-10 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
              >
                CONSULTAR PROCESOS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Elemento Decorativo: Grid de puntos formal */}
      <div className="absolute right-0 bottom-0 p-10 opacity-20 pointer-events-none hidden lg:block">
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