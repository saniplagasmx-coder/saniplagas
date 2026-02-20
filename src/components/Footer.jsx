import React, { useState } from 'react';
import logo from '../assets/logo-sani.png';

const CONTACT_INFO = {
  phone: "415 113-2340",
  telHref: "tel:+524151132340",
  whatsapp: "https://wa.me/5214151132340",
  email: "atencion@saniplagas.mx",
};

const LEGAL_TEXT = `
AVISO DE PRIVACIDAD

saniplagasSA DE CV, comercialmente conocido como saniplagas, con domicilio en Estaciones Ruta San Miguel 3, Lib. José Manuel Zavala 59, La Lejona, 73700 San Miguel de Allende, Gto., es el responsable del uso y protección de sus datos personales.

FINALIDADES PRIMARIAS
Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:

• Respuesta a mensajes del formulario de contacto

FINALIDADES SECUNDARIAS
De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:

• Mercadotecnia o publicidad

DATOS PERSONALES RECABADOS
Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos de identificación y contacto.

DERECHOS ARCO
Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.

Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de contacto@saniplagas.mx. La respuesta a su solicitud será atendida en un plazo máximo de 5 días hábiles.

DATOS RECABADOS POR EL SITIO WEB
Nuestro sitio web recaba automáticamente los siguientes datos:

• Páginas web visitadas por un usuario
• Publicidad revisada por un usuario

CONTACTO
Para más información sobre este aviso de privacidad, puede contactarnos en:

Correo electrónico: contacto@saniplagas.mx
Sitio web: https://saniplagas.mx

Última actualización: 20/2/2026


TÉRMINOS DE USO
El uso de este sitio implica la aceptación de estos términos. El contenido es propiedad de SaniPlagas y no puede ser reproducido sin autorización. Los servicios están sujetos a disponibilidad en el área de San Miguel de Allende y zona metropolitana. SaniPlagas se reserva el derecho de modificar precios y condiciones sin previo aviso.

Para más información contacta a: atencion@saniplagas.mx
`;

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const socials = [
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
      label: 'Instagram',
      href: '#',
      icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    },
  ];

  return (
    <>
      <footer className="bg-gray-950 text-white relative overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Columna 1: Logo + bio + redes */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              <img src={logo} alt="SaniPlagas" className="h-14 w-auto" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Control profesional de plagas en San Miguel de Allende. Certificados y listos 24/7.
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-primary-500/20 border border-white/5 hover:border-primary-500/40 flex items-center justify-center transition-all group/icon"
                  >
                    <svg className="w-4 h-4 text-gray-500 group-hover/icon:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2: Navegación */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-primary-500 pl-3">
                Navegación
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Contacto de emergencia */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-primary-500 pl-3">
                Emergencias
              </h4>
              <a href={CONTACT_INFO.telHref} className="group flex flex-col mb-4">
                <span className="text-green-400 font-bold text-lg flex items-center gap-2 group-hover:text-green-300 transition-colors">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  {CONTACT_INFO.phone}
                </span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">Soporte 24/7 · Respuesta inmediata</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-400 hover:text-white text-sm transition-colors block"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

          </div>
        </div>

        {/* Barra de copyright */}
        <div className="border-t border-white/5 py-5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} SaniPlagas · San Miguel de Allende
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="text-gray-600 hover:text-primary-400 text-[11px] uppercase tracking-widest transition-colors"
            >
              Privacidad &amp; Términos
            </button>
          </div>
        </div>
      </footer>

      {/* Modal único de Privacidad & Términos */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-base">Privacidad &amp; Términos</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Contenido scrollable */}
            <div className="overflow-y-auto px-6 py-5">
              <pre className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {LEGAL_TEXT.trim()}
              </pre>
            </div>

            {/* Footer del modal */}
            <div className="px-6 py-4 border-t border-gray-100">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full py-2.5 bg-gray-900 hover:bg-primary-600 text-white text-sm font-bold rounded-xl transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;