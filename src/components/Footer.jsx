import React from 'react';
import logo from '../assets/logo-sani.png';

const Footer = () => {
  // Datos centralizados para fácil edición
  const CONTACT_INFO = {
    phone: "415 123-4567",
    telHref: "tel:+524151234567",
    whatsapp: "https://wa.me/524151234567",
    email: "contacto@saniplagas.com"
  };

  const scrollTo = (href) => {
    // Si el href es un link externo o una ruta, no hacemos scroll
    if (href.startsWith('http') || !href.startsWith('#')) return;
    
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    Servicios: [
      'Fumigación Industrial',
      'Control Corporativo',
      'Desinfección Profunda',
      'Control Preventivo',
      'Emergencia 24/7',
      'Auditorías',
    ],
    Empresa: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'Contacto', href: '#contacto' },
    ],
  };

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group inline-block">
              <img
                src={logo}
                alt="SaniPlagas Logo"
                className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm">
              Líderes en control de plagas de grado industrial y comercial. 
              Protegemos la salud de su empresa con tecnología de vanguardia y 
              certificaciones internacionales en San Miguel de Allende.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-4">
              {[
                {
                  label: 'Facebook',
                  href: '#',
                  icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>,
                },
                {
                  label: 'WhatsApp',
                  href: CONTACT_INFO.whatsapp,
                  icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>,
                },
                {
                  label: 'LinkedIn',
                  href: '#',
                  icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-primary-500/20 flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-primary-500/40 group/icon"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5 text-gray-500 group-hover/icon:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-primary-500 pl-3">
              Servicios
            </h4>
            <ul className="space-y-4">
              {links.Servicios.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#servicios')}
                    className="text-gray-400 hover:text-white font-body text-sm transition-colors text-left flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa y Contacto */}
          <div className="flex flex-col">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-primary-500 pl-3">
              Empresa
            </h4>
            <ul className="space-y-4 mb-10">
              {links.Empresa.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-white text-xs uppercase tracking-[0.2em] mb-4">
              Emergencias
            </h4>
            <a
              href={CONTACT_INFO.telHref}
              className="group flex flex-col"
            >
              <span className="text-green-500 font-display font-bold text-xl group-hover:text-green-400 transition-colors flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                {CONTACT_INFO.phone}
              </span>
              <span className="text-gray-500 text-[10px] uppercase tracking-tighter mt-1 font-mono">
                Soporte 24/7 • Atención Inmediata
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="bg-black/50 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-body text-xs text-center md:text-left">
            © {new Date().getFullYear()} SaniPlagas San Miguel de Allende. 
            <span className="hidden sm:inline"> | </span> 
            <br className="sm:hidden" />
            Cuidado profesional del entorno.
          </p>
          <div className="flex items-center gap-8">
            <a href="#privacidad" className="text-gray-500 hover:text-primary-400 text-[11px] uppercase tracking-widest transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="text-gray-500 hover:text-primary-400 text-[11px] uppercase tracking-widest transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;