import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

const steps = [
  {
    num: '01',
    title: 'Contacto y Diagnóstico',
    desc: 'Evaluación técnica inicial sin costo para identificar focos de riesgo y necesidades específicas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    duration: '24 hrs',
  },
  {
    num: '02',
    title: 'Plan Personalizado',
    desc: 'Diseño de un protocolo exclusivo considerando áreas críticas, horarios y normativas de tu industria.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    duration: '48 hrs',
  },
  {
    num: '03',
    title: 'Aplicación Profesional',
    desc: 'Ejecución técnica con equipos de vanguardia, garantizando la continuidad de tu operación.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    duration: '1-4 hrs',
  },
  {
    num: '04',
    title: 'Certificación y Seguimiento',
    desc: 'Emisión de certificados oficiales y monitoreo preventivo con alertas de control.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    duration: 'Continuo',
  },
];

const Process = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <section id="proceso" className="py-32 bg-[#030712] relative overflow-hidden" ref={ref}>
      {/* Orbes de luz decorativos */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`max-w-3xl mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-6xl font-display font-black text-white leading-tight">
            Un flujo de trabajo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400">
              diseñado para tu empresa
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-green-500 mt-8 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Línea de conexión animada (Solo Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
             <div className={`h-full bg-gradient-to-r from-primary-500 via-green-400 to-primary-500 transition-all duration-[2000ms] ease-in-out ${isVisible ? 'w-full' : 'w-0'}`} />
          </div>

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Card */}
              <div className="relative z-10 h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                
                {/* Numero de fondo */}
                <span className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.03] pointer-events-none group-hover:text-primary-500/10 transition-colors duration-500 italic">
                  {step.num}
                </span>

                <div className="relative">
                  {/* Icono con resplandor */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-primary-400 font-mono text-xs font-bold tracking-tighter uppercase">{step.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors italic">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                    {step.desc}
                  </p>
                </div>

                {/* Decoración inferior */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-green-500 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Floating Trust Badge */}
        <div className={`mt-24 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="px-8 py-4 bg-white/[0.02] border border-white/5 rounded-full flex items-center gap-4 hover:bg-white/[0.05] transition-colors cursor-default">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              Cumplimos con las normativas de <span className="text-white font-bold">COFEPRIS</span> y estándares internacionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;