import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Programas Preventivos',
    desc: 'Planes personalizados para evitar infestaciones y asegurar continuidad operativa. Monitoreo constante con reportes detallados.',
    tag: 'Preventivo',
    bg: 'bg-emerald-500',
    delay: 0,
  },
  // {
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
  //     </svg>
  //   ),
  //   title: 'Fumigación Industrial',
  //   desc: 'Tratamientos efectivos para eliminar insectos y roedores en grandes instalaciones. Cumplimiento total de normativas sanitarias vigentes.',
  //   tag: 'Industrial',
  //   bg: 'bg-blue-500',
  //   delay: 1,
  // },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: 'Control en Casa',
    desc: 'Soluciones seguras y efectivas para el hogar. Productos de baja toxicidad aptos para familias y mascotas.',
    tag: 'Residencial',
    bg: 'bg-orange-400',
    delay: 2,
  },
  // {
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  //     </svg>
  //   ),
  //   title: 'Oficinas',
  //   desc: 'Mantenimiento preventivo constante para espacios de trabajo. Servicio discreto sin interrumpir operaciones.',
  //   tag: 'Corporativo',
  //   bg: 'bg-violet-500',
  //   delay: 3,
  // },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'Habitaciones',
    desc: 'Tratamientos especializados para dormitorios y áreas privadas. Eliminación de chinches, ácaros y plagas nocturnas.',
    tag: 'Habitaciones',
    bg: 'bg-pink-500',
    delay: 4,
  },
];

const sectors = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
      </svg>
    ),
    title: 'Comedores',
    desc: 'Control riguroso para cocinas industriales y áreas de preparación de alimentos.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
    num: '01',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
    title: 'Almacenes',
    desc: 'Protección continua contra plagas en centros de distribución y logística.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
    num: '02',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Hoteles',
    desc: 'Ambientes seguros y libres de plagas para una experiencia de huésped impecable.',
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    num: '03',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: 'Habitaciones',
    desc: 'Tratamientos especializados para dormitorios y áreas privadas.',
    gradient: 'from-emerald-500 to-green-500',
    glow: 'shadow-emerald-500/20',
    num: '04',
  },
];

const ServiceCard = ({ service, isVisible }) => (
  <div
    className={`group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 overflow-hidden ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`}
    style={{ transitionDelay: `${service.delay * 80}ms` }}
  >
    {/* Blob decorativo esquina superior derecha — igual que la screenshot */}
    <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${service.bg} opacity-10`} />

    <div className="p-7">
      {/* Ícono */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.bg} text-white mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
        {service.icon}
      </div>

      {/* Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-500 bg-gray-100">
          {service.tag}
        </span>
      </div>

      {/* Título */}
      <h3 className="font-display font-bold text-lg text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {service.desc}
      </p>

      {/* Link */}
      {/* <button className="flex items-center gap-2 text-primary-500 font-semibold text-sm group/btn hover:gap-3 transition-all">
        <span>Más información</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button> */}
    </div>
  </div>
);

const Services = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });
  const [sectorsRef, sectorsVisible] = useIntersection({ threshold: 0.1 });

  return (
    <>
      {/* ══ SERVICIOS (fondo claro) ══════════════════════════════ */}
      <section id="servicios" className="py-32 bg-gray-50/50 overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">

          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Experticia Técnica</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-green-500">servicios</span>
            </h2>
            <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
              Protocolos adaptados a cada necesidad, desde espacios domésticos hasta grandes instalaciones industriales en San Miguel de Allende.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} isVisible={isVisible} />
            ))}
          </div>

          <div className={`mt-20 p-8 rounded-3xl bg-gray-900 text-white text-center relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h4 className="text-xl font-display font-bold mb-3">¿Necesitas un plan a medida?</h4>
              <p className="text-gray-400 font-body mb-8 max-w-lg mx-auto">Diseñamos estrategias específicas basadas en el análisis de riesgo de tus instalaciones.</p>
              <button
                onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                Solicitar Auditoría
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTORES QUE SERVIMOS (fondo oscuro, estilo Process) ══ */}
      <section id="sectores" className="py-32 bg-[#030712] relative overflow-hidden" ref={sectorsRef}>

        {/* Orbes decorativos */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header — igual estructura que Process */}
          <div className={`max-w-3xl mb-24 transition-all duration-1000 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary-500/60" />
              <span className="text-primary-400 font-bold text-xs uppercase tracking-[0.3em]">Dónde trabajamos</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-black text-white leading-tight">
              Sectores que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400">
                servimos
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-green-500 mt-8 rounded-full" />
          </div>

          {/* Cards grid — estilo cards de Process */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

            {/* Línea de conexión animada (solo desktop) */}
            <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-primary-500 via-green-400 to-primary-500 transition-all duration-[2000ms] ease-in-out ${sectorsVisible ? 'w-full' : 'w-0'}`} />
            </div>

            {sectors.map((sector, idx) => (
              <div
                key={sector.title}
                className={`group relative transition-all duration-1000 ${sectorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative z-10 h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                  {/* Número de fondo */}
                  <span className="absolute -right-4 -top-4 text-9xl font-black text-white/[0.03] pointer-events-none group-hover:text-primary-500/10 transition-colors duration-500 italic select-none">
                    {sector.num}
                  </span>

                  {/* Línea inferior animada */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${sector.gradient} group-hover:w-full transition-all duration-500`} />

                  <div className="relative">
                    {/* Icono con gradiente del sector */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center text-white mb-8 shadow-xl ${sector.glow} group-hover:scale-110 transition-transform duration-500`}>
                      {sector.icon}
                    </div>

                    {/* Indicador "Activo" */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 font-mono text-xs font-bold tracking-tighter uppercase">Activo</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors italic">
                      {sector.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badge — igual que Process */}
          <div className={`mt-24 flex justify-center transition-all duration-1000 delay-700 ${sectorsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="px-8 py-4 bg-white/[0.02] border border-white/5 rounded-full flex items-center gap-4 hover:bg-white/[0.05] transition-colors cursor-default">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Servicio disponible en <span className="text-white font-bold">San Miguel de Allende, San Luis de la Paz y Dolores Hidalgo CIN</span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;