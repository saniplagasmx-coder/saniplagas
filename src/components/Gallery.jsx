import React, { useState } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'industrial', label: 'Sector Industrial' },
  { id: 'comercial', label: 'Comercial/HORECA' },
  { id: 'tecnico', label: 'Procesos Técnicos' },
];

const images = [
  {
    id: 1,
    category: 'industrial',
    title: 'Control en Almacenes',
    subtitle: 'Gestión de perímetros en centros de distribución.',
    size: 'large', // Ocupará 2 columnas
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'tecnico',
    title: 'Nebulización ULV',
    subtitle: 'Desinfección de grado hospitalario.',
    size: 'small',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'comercial',
    title: 'Sector Restaurantero',
    subtitle: 'Certificación de áreas de cocina (Distintivo H).',
    size: 'small',
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    category: 'industrial',
    title: 'Tratamiento de Silos',
    subtitle: 'Control de plagas en granos y semillas.',
    size: 'small',
    url: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'tecnico',
    title: 'Inspección Termográfica',
    subtitle: 'Detección avanzada de nidos ocultos.',
    size: 'large',
    url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80',
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState('todos');
  const [ref, isVisible] = useIntersection();

  const filteredImages = filter === 'todos' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold text-sm uppercase tracking-[0.3em]">Evidencia de Servicio</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 mt-4 mb-6">
            Soluciones Especializadas en Campo
          </h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto"></div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === cat.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Galería */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 transition-all duration-700 ${
                img.size === 'large' ? 'md:col-span-2' : 'col-span-1'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {/* Imagen de Fondo */}
              <img
                src={img.url}
                alt={img.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradual */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.title}
                </h3>
                <p className="text-slate-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {img.subtitle}
                </p>
              </div>

              {/* Badge de Categoría (Visible siempre) */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-black uppercase text-slate-900 tracking-tighter group-hover:opacity-0 transition-opacity">
                {img.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;