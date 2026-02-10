import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
    title: 'Fumigación Industrial',
    desc: 'Tratamientos especializados para instalaciones industriales, almacenes y plantas de producción. Cumplimos con todas las normativas sanitarias.',
    tag: 'Industrial',
    color: 'from-primary-400 to-primary-600',
    delay: 0,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Control Corporativo',
    desc: 'Programas integrales para oficinas, hoteles y centros comerciales. Servicio discreto, sin interrumpir operaciones.',
    tag: 'Corporativo',
    color: 'from-primary-500 to-green-500',
    delay: 1,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Desinfección Profunda',
    desc: 'Sanitización certificada para restaurantes, hospitales y centros educativos. Productos biodegradables aprobados por COFEPRIS.',
    tag: 'Sanitización',
    color: 'from-green-400 to-green-600',
    delay: 2,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    title: 'Control Preventivo',
    desc: 'Monitoreo continuo y barreras preventivas que eliminan el riesgo antes de que aparezca. Plan mensual con reportes detallados.',
    tag: 'Preventivo',
    color: 'from-green-500 to-primary-500',
    delay: 3,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Respuesta de Emergencia',
    desc: 'Atención inmediata 24/7 para situaciones críticas. Tiempo de respuesta garantizado en menos de 4 horas en San Miguel.',
    tag: '24/7',
    color: 'from-primary-500 to-green-400',
    delay: 4,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Auditorías & Certificaciones',
    desc: 'Diagnóstico completo con informe técnico, cumplimiento de normativas NOM y certificación para auditorías de salubridad.',
    tag: 'Certificación',
    color: 'from-primary-600 to-primary-400',
    delay: 5,
  },
];

const ServiceCard = ({ service, isVisible }) => {
  return (
    <div
      className={`group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${service.delay * 100}ms` }}
    >
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`} />

      {/* Icon Container */}
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-500`}>
        {service.icon}
      </div>

      {/* Content */}
      <div className="relative">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-primary-600 bg-primary-50 mb-4">
          {service.tag}
        </span>
        <h3 className="font-display font-bold text-xl text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
          {service.desc}
        </p>
      </div>

      {/* Footer link */}
      <button className="flex items-center gap-2 text-primary-500 font-body font-bold text-sm group/btn">
        <span>Más información</span>
        <svg 
          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>
    </div>
  );
};

const Services = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <section id="servicios" className="py-32 bg-gray-50/50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Experticia Técnica</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
            Soluciones para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-green-500">cada industria</span>
          </h2>
          <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            Protocolos de grado industrial adaptados a las normativas de San Miguel de Allende. 
            Protección efectiva sin interrumpir su productividad.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} isVisible={isVisible} />
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-20 p-8 rounded-3xl bg-gray-900 text-white text-center relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <h4 className="text-xl font-display font-bold mb-3">¿Necesitas un plan a medida?</h4>
            <p className="text-gray-400 font-body mb-8 max-w-lg mx-auto">Diseñamos estrategias específicas basadas en el análisis de riesgo de tus instalaciones.</p>
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-xl"
            >
              Solicitar Auditoría Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;