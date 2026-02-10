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
  { end: '500', suffix: '+', label: 'Contratos Corporativos', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  )},
  { end: '12', suffix: '', label: 'Años de Trayectoria', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
  )},
  { end: '100', suffix: '%', label: 'Cumplimiento Normativo', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  )},
  { end: '24', suffix: '/7', label: 'Soporte Técnico', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  )},
];

const About = () => {
  const [ref, isVisible] = useIntersection();

  return (
    <section id="nosotros" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          
          {/* Columna Izquierda: Identidad Visual */}
          <div className={`relative transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Panel de Certificaciones */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0f172a] p-10 shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              <div className="relative space-y-8">
                <div className="flex items-center gap-5">
                   <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="SaniPlagas Logo"
                className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Certificación NOM-002-STPS', 'Registro Federal COFEPRIS', 'Protocolos HACCP / AIB', 'Seguro de Responsabilidad Civil'].map((cert) => (
                    <div key={cert} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <span className="text-slate-300 text-[11px] font-bold uppercase tracking-wider">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <blockquote className="text-slate-400 italic font-serif text-base leading-relaxed">
                    "Garantizamos la inocuidad y la continuidad operativa de nuestros clientes mediante ingeniería en control de plagas."
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-px w-8 bg-primary-500" />
                    <span className="text-primary-400 text-xs font-bold uppercase tracking-widest">Dirección General</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - Más formal y limpio */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-xl p-6 transition-all hover:bg-white hover:shadow-xl hover:border-transparent group">
                  <div className="text-slate-400 group-hover:text-primary-600 transition-colors mb-4 italic">
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

          {/* Columna Derecha: Texto Corporativo */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary-600"></span>
              <span className="text-primary-600 font-bold text-sm uppercase tracking-[0.3em]">Trayectoria Institucional</span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-display font-bold text-slate-900 leading-[1.15] mb-8">
              Liderazgo técnico en <br />
              <span className="text-primary-600">Gestión Integral de Plagas</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
              <p>
                Desde 2012, SaniPlagas ha definido los estándares de calidad en San Miguel de Allende, 
                especializándose en entornos de alta exigencia como la industria alimentaria, 
                hotelera y hospitalaria.
              </p>
              <p className="text-base text-slate-500">
                No solo eliminamos plagas; diseñamos barreras biológicas y mecánicas que protegen 
                sus activos, su personal y su reputación comercial ante auditorías de salubridad.
              </p>
            </div>

            {/* Pilares de Valor */}
            <div className="grid gap-4">
              {[
                { title: 'Personal Altamente Calificado', desc: 'Técnicos especializados con certificación DC-3 de competencias laborales.' },
                { title: 'Química de Grado Farmacéutico', desc: 'Sustancias de baja toxicidad con registro EPA y COFEPRIS.' },
                { title: 'Sistema de Reporteo Digital', desc: 'Documentación inmediata para cumplimiento de normativas ISO y distintivos H.' }
              ].map((pill, idx) => (
                <div key={idx} className="flex gap-5 p-5 rounded-xl transition-colors hover:bg-slate-50 group border border-transparent hover:border-slate-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;