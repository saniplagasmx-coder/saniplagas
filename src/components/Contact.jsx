import React, { useState, useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const EMAILJS_CONFIG = {
  serviceId: 'service_dtl47r4',
  templateId: 'template_qfp6l9g',
  publicKey: 'sRjSKPWdpM-5OBveJ',
};

const ContactInfo = ({ icon, label, value, href }) => (
  <a
    href={href}
    className="group flex items-center gap-4 p-4 rounded-2xl border border-transparent hover:border-green-100 hover:bg-white hover:shadow-lg hover:shadow-green-900/5 transition-all duration-400"
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer"
  >
    <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-green-500 flex items-center justify-center text-green-600 group-hover:text-white transition-all duration-400 flex-shrink-0">
      {React.cloneElement(icon, { className: "w-5 h-5" })}
    </div>
    <div>
      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">{label}</div>
      <div className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors text-sm">{value}</div>
    </div>
  </a>
);

const Contact = () => {
  const [ref, isVisible] = useIntersection();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('sending');
  try {
    const emailjs = await import('@emailjs/browser');
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        name:    formData.name,
        email:   formData.email,
        phone:   formData.phone,
        message: formData.message,
      },
      EMAILJS_CONFIG.publicKey
    );
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (err) {
    console.error('EmailJS error:', err);
    setStatus('error');
  }
  setTimeout(() => setStatus('idle'), 6000);
};

  return (
    <section id="contacto" className="py-32 bg-[#F8FAFC] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Decoración de fondo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />

        <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">

          {/* Lado Izquierdo */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
              Contáctanos
            </span>

            <h2 className="text-4xl xl:text-5xl font-display font-black text-gray-900 leading-[1.1] mb-6">
              Tu hogar, libre de <span className="text-green-500 italic">plagas.</span>
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-sm">
              Cuéntanos qué está pasando en tu casa o espacio y te damos solución. Atención rápida, productos seguros para tu familia y mascotas.
            </p>

            {/* Info de contacto */}
            <div className="space-y-1 mb-8">
              <ContactInfo
                label="Llámanos"
                value="+52 (415) 113-2340"
                href="tel:+524151132340"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}
              />
              <ContactInfo
                label="Escríbenos"
                value="contacto@saniplagas.mx"
                href="mailto:contacto@saniplagas.mx"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
              />
              <ContactInfo
                label="WhatsApp"
                value="Chatea con nosotros"
                href="https://wa.me/5214151132340?text=Hola%2C%20necesito%20ayuda%20con%20plagas%20en%20mi%20hogar"
                icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
              />
            </div>

            {/* Card de emergencia */}
            <div className="p-5 rounded-2xl bg-gray-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:scale-110 transition-transform">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 className="font-bold text-base mb-1">¿Urgencia en casa?</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">Respondemos el mismo día. Sin importar si son cucarachas, ratones, chinches o cualquier otra plaga.</p>
              <a href="https://wa.me/5214151132340?text=Tengo%20una%20urgencia%20con%20plagas" className="text-green-400 font-bold text-sm hover:underline inline-flex items-center gap-1">
                Escribir por WhatsApp →
              </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario simplificado */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
              
              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">Solicita una visita de inspección</h3>
                <p className="text-gray-400 text-sm">Sin costo · Sin compromiso · Respuesta en menos de 24 hrs</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label="Tu Nombre" name="name" value={formData.name} onChange={handleChange} placeholder="Ej. María García" required />
                  <InputField label="Teléfono" name="phone" value={formData.phone} onChange={handleChange} placeholder="+52 415 ..." />
                </div>

                <InputField label="Correo electrónico" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.com" required />

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">¿Qué está pasando?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos qué tipo de plaga tienes, en qué área de tu casa y desde cuándo..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-800 text-sm focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all resize-none outline-none placeholder:text-gray-300"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gray-900 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      Solicitar Inspección
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-green-600 font-bold text-sm">
                    ✓ ¡Listo! Te contactamos pronto.
                  </p>
                )}

                <p className="text-center text-gray-300 text-xs">
                  Tu información es confidencial y nunca será compartida.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* ── UBICACIÓN ─────────────────────────────────────────── */}
        <div className={`mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-green-500" />
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em]">Dónde estamos</span>
          </div>

          {/* Card contenedor */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {/* Mapa — full width, altura fija responsiva */}
            <div className="w-full h-56 sm:h-72 lg:h-80">
              <iframe
                title="Ubicación SaniPlagas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d-100.7449!3d20.9144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b5b1c3a1e1e1f%3A0x1e1e1e1e1e1e1e1e!2sLib.%20Jos%C3%A9%20Manuel%20Zavala%2059%2C%20La%20Lejona%2C%2073700%20San%20Miguel%20de%20Allende%2C%20Gto.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info — debajo del mapa en móvil, 3 columnas en desktop */}
            <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">

              {/* Dirección */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Dirección</p>
                  <p className="text-gray-700 text-sm leading-snug">
                    Lib. José Manuel Zavala 59,<br />La Lejona, San Miguel de Allende, Gto.
                  </p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Horario</p>
                  <p className="text-gray-700 text-sm">Lun – Vie, 9:00 – 18:00 h</p>
                  <p className="text-green-600 text-xs font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                    Emergencias 24/7
                  </p>
                </div>
              </div>

              {/* Botón cómo llegar */}
              <div className="flex sm:justify-end items-start">
                <a
                  href="https://maps.google.com/?q=Lib.+José+Manuel+Zavala+59,+La+Lejona,+73700+San+Miguel+de+Allende,+Gto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-all duration-300 whitespace-nowrap shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                  Cómo llegar
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const InputField = ({ label, ...props }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{label}</label>
    <input
      {...props}
      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-800 text-sm focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all outline-none placeholder:text-gray-300"
    />
  </div>
);

export default Contact;