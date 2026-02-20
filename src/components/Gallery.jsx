import React, { useState } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import image1 from '../assets/escuela.jpg';
import image2 from '../assets/escuelaBaños.jpg';
import image3 from '../assets/comedor.jpeg';
import image4 from '../assets/casaRodante.jpg';
import image5 from '../assets/casaSala.jpg';
import image6 from '../assets/casaPatio2.jpg';
import image7 from '../assets/casaPatio3.jpg';
import image8 from '../assets/casaPatio4.jpg';

const images = [
  {
    id: 1,
    title: 'Control en Escuelas',
    subtitle: 'Sanitización y control de plagas en instituciones educativas.',
    size: 'large',
    url: image1,
  },
  {
    id: 2,
    title: 'Control en Escuelas - Baños',
    subtitle: ' Tratamientos específicos para áreas sanitarias en escuelas.',
    size: 'small',
    url: image2,
  },
  {
    id: 3,
    title: 'Control en Escuelas - Comedor',
    subtitle: 'Garantía de higiene en establecimientos de alimentos.',
    size: 'small',
    url: image3,
  },
  {
    id: 4,
    title: 'Control en todo tipo de viviendas',
    subtitle: ' Soluciones integrales para hogares y residencias.',
    size: 'large',
    url: image4,
  },
  {
    id: 5,
    title: 'Control en todo tipo de viviendas',
    subtitle: 'Sanitización y control de plagas para espacios residenciales.',
    size: 'large',
    url: image5,
  },
  {
    id: 6,
    title: 'Control en todo tipo de viviendas',
    subtitle: 'Tratamientos especializados para patios y áreas exteriores.',
    size: 'small',
    url: image6,
  },
    {
    id: 7,
      title: 'Control en todo tipo de viviendas',
    subtitle: 'Tratamientos especializados para patios y áreas exteriores.',
    size: 'small',
    url: image7,
  },
    {
    id: 8,
     title: 'Control en todo tipo de viviendas',
    subtitle: 'Tratamientos especializados para patios y áreas exteriores.',
    size: 'small',
    url: image8,
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);
  const [ref, isVisible] = useIntersection();

  return (
    <section id="galeria" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold text-sm uppercase tracking-[0.3em]">Nuestro Trabajo</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 mt-4 mb-6">
            Soluciones Especializadas en Campo
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto" />
        </div>

        {/* Grid de Galería — sin filtros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 cursor-pointer transition-all duration-700 ${
                img.size === 'large' ? 'md:col-span-2' : 'col-span-1'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.title}
                </h3>
                <p className="text-slate-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.subtitle}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-primary-400 text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                  Ver imagen
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold"
            >
              Cerrar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <img
              src={lightbox.url}
              alt={lightbox.title}
              className="w-full rounded-2xl object-cover max-h-[80vh]"
            />
            <div className="mt-4">
              <h3 className="text-white font-bold text-xl">{lightbox.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{lightbox.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;