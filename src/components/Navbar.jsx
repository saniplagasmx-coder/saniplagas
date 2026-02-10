import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-sani.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/10 backdrop-blur-[2px] py-4' // Agregamos un ligero blur para que se lea sobre la imagen
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo con sombra sutil para resaltar si el fondo es claro */}
        <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="SaniPlagas"
            className={`h-12 sm:h-14 md:h-16 w-auto drop-shadow-md`}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 bg-black/5 p-1 rounded-2xl backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-800 hover:bg-[#4992F2] hover:text-white' 
                  : 'text-[#0D0D0D] hover:bg-white/20 hover:backdrop-blur-lg'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA con tus colores: #49BF72 (Verde) y #4992F2 (Azul) */}
        <button
          onClick={() => scrollTo('#contacto')}
          className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 ${
            scrolled
              ? 'bg-[#4992F2] text-white hover:bg-[#3b76c5]'
              : 'bg-[#49BF72] text-[#0D0D0D] hover:bg-[#45c950] shadow-[#49BF72]/20'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          SOLICITAR COTIZACIÓN
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-2xl transition-all ${
            scrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-md'
          }`}
        >
          <span className={`w-6 h-1 bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`w-6 h-1 bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-1 bg-gray-900 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-2xl border-t border-gray-100 px-6 py-8 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="w-full text-center px-4 py-4 rounded-2xl text-[#0D0D0D] font-black text-lg hover:bg-[#f2faf5] hover:text-[#49BF72] transition-all border border-transparent hover:border-[#49BF72]/20"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contacto')}
            className="w-full bg-[#4992F2] text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#4992F2]/20 mt-4"
          >
            COTIZAR AHORA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;