import React, { useEffect, useState } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import logo from '../assets/logo-sani.png';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [ref, isVisible] = useIntersection();

  useEffect(() => {
    if (isVisible && !started) {
      setStarted(true);
      const startTime = performance.now();
      const endNum = parseInt(end);
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(endNum * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, started, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const stats = [
  {
    end: '800', suffix: '+', label: 'Hogares Atendidos',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
  },
  {
    end: '12', suffix: '', label: 'Años de Experiencia',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
  },
  {
    end: '100', suffix: '%', label: 'Productos Seguros',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  },
  {
    end: '24', suffix: '/7', label: 'Atención de Emergencias',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  },
];

const pillars = [
  {
    title: 'Equipo Capacitado',
    desc: 'Nuestros técnicos cuentan con formación especializada en control de plagas residencial y manejo seguro de productos.',
  },
  {
    title: 'Productos Seguros para tu Familia',
    desc: 'Usamos sustancias de baja toxicidad, aptas para hogares con niños, adultos mayores y mascotas.',
  },
  {
    title: 'Atención Personalizada',
    desc: 'Cada casa es diferente. Evaluamos tu situación y diseñamos el tratamiento que mejor se adapta a tu hogar.',
  },
];

const About = () => {
  const [ref, isVisible] = useIntersection();

  return (
    <section id="nosotros" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Columna Izquierda */}
          <div className={`relative transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

            {/* Card principal — logo + frase + lo que atendemos */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0f172a] p-10 shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />

              <div className="relative space-y-8">
                {/* Logo */}
                <img src={logo} alt="SaniPlagas" className="h-16 md:h-20 w-auto" />

                {/* Lo que atendemos */}
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">Lo que atendemos</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Cucarachas', icon: '🪳' },
                      { label: 'Ratones y Ratas', icon: '🐭' },
                      { label: 'Chinches', icon: '🐛' },
                      { label: 'Hormigas', icon: '🐜' },
                      { label: 'Moscas', icon: '🪰' },
                      { label: 'Arañas', icon: '🕷️' },
                      { label: 'Pulgas', icon: '🦟' },
                      { label: 'Avispas', icon: '🐝' },
                      { label: 'Termitas', icon: '🪲' },
                      { label: 'Ácaros', icon: '🔬' },
                      { label: 'Y mucho más...', icon: '➕' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-slate-300 text-[11px] font-bold uppercase tracking-wide">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cita */}
                <div className="pt-6 border-t border-slate-800">
                  <blockquote className="text-slate-400 italic font-serif text-sm leading-relaxed">
                    "Cuidamos tu hogar como si fuera el nuestro. Tu tranquilidad y la seguridad de tu familia es nuestra prioridad."
                  </blockquote>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-px w-8 bg-emerald-500" />
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">SaniPlagas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-xl p-5 transition-all hover:bg-white hover:shadow-xl hover:border-transparent group">
                  <div className="text-slate-400 group-hover:text-emerald-600 transition-colors mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-display font-bold text-slate-900">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-emerald-500" />
              <span className="text-emerald-600 font-bold text-sm uppercase tracking-[0.3em]">Quiénes somos</span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-display font-bold text-slate-900 leading-[1.15] mb-8">
              Cuidamos tu hogar <br />
              <span className="text-emerald-600">con experiencia y cuidado</span>
            </h2>

            <div className="space-y-5 text-slate-600 text-base leading-relaxed mb-10">
              <p>
                Desde 2012 llevamos tranquilidad a los hogares de San Miguel de Allende. 
                Nos especializamos en resolver problemas de plagas en casas, habitaciones, 
                comedores y espacios cotidianos.
              </p>
              <p className="text-slate-500">
                No importa si es una plaga pequeña o una infestación difícil — tenemos 
                la experiencia, el equipo y los productos adecuados para resolverlo de forma 
                segura y definitiva.
              </p>
            </div>

            {/* Pilares */}
            <div className="grid gap-3">
              {pillars.map((pill, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-xl transition-colors hover:bg-slate-50 group border border-transparent hover:border-slate-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">{pill.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-200 hover:shadow-emerald-300 hover:-translate-y-0.5"
              >
                Solicitar inspección gratuita
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;