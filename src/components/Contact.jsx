import React, { useState, useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';

const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
};

const ContactInfo = ({ icon, label, value, href }) => (
  <a
    href={href}
    className="group flex items-center gap-5 p-5 rounded-2xl border border-transparent hover:border-green-100 hover:bg-white hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500"
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noreferrer"
  >
    <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-green-500 flex items-center justify-center text-green-600 group-hover:text-white transition-all duration-500 shadow-inner">
      {React.cloneElement(icon, { className: "w-6 h-6" })}
    </div>
    <div>
      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{label}</div>
      <div className="font-display font-semibold text-gray-800 group-hover:text-green-600 transition-colors">{value}</div>
    </div>
  </a>
);

const Contact = () => {
  const [ref, isVisible] = useIntersection();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, formRef.current, EMAILJS_CONFIG.publicKey);
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setStatus(EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ? 'demo' : 'error');
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
          
          {/* Lado Izquierdo: Textos e Info */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
              Contacto Directo
            </span>
            <h2 className="text-5xl xl:text-6xl font-display font-black text-gray-900 leading-[1.1] mb-8">
              Llevemos su higiene al <span className="text-green-500 italic">siguiente nivel.</span>
            </h2>
            <p className="text-lg text-gray-600 font-body mb-10 leading-relaxed max-w-md">
              Estamos listos para blindar su empresa contra plagas. Certificaciones internacionales y respuesta inmediata.
            </p>

            <div className="grid sm:grid-cols-1 gap-2 mb-10">
              <ContactInfo 
                label="Línea Directa" 
                value="+52 (415) 113-2340 " 
                href="tel:+524151132340"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}
              />
              <ContactInfo 
                label="Email Corporativo" 
                value="atencion@saniplagas.mx" 
                href="mailto:atencion@saniplagas.mx"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
              />
            </div>

            <div className="p-6 rounded-3xl bg-gray-900 text-white shadow-2xl shadow-gray-900/20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
               </div>
               <h4 className="font-display font-bold text-lg mb-2">Soporte Prioritario 24/7</h4>
               <p className="text-gray-400 text-sm leading-relaxed mb-4">Para emergencias industriales o auditorías urgentes, nuestro equipo de guardia está disponible.</p>
               <a href="https://wa.me/5214151132340" className="text-green-400 font-bold text-sm hover:underline inline-flex items-center gap-2">
                 Activar Protocolo de Emergencia →
               </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputField label="Nombre Completo" name="name" value={formData.name} onChange={handleChange} placeholder="Ej. Alex Smith" required />
                  <InputField label="Empresa" name="company" value={formData.company} onChange={handleChange} placeholder="Razón Social" required />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="alex@empresa.com" required />
                  <InputField label="Teléfono" name="phone" value={formData.phone} onChange={handleChange} placeholder="+52 ..." />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Servicio Requerido</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 font-body text-gray-800 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Industrial">Control Industrial</option>
                    <option value="Sanitizacion">Sanitización Grado Médico</option>
                    <option value="Auditoria">Preparación para Auditoría</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describa brevemente su requerimiento..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 font-body text-gray-800 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gray-900 hover:bg-green-600 text-white font-display font-bold py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Procesando...</span>
                  ) : (
                    <>Enviar Solicitud <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></>
                  )}
                </button>

                {status === 'success' && <p className="text-center text-green-600 font-bold text-sm animate-bounce">¡Mensaje enviado con éxito!</p>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para inputs
const InputField = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{label}</label>
    <input
      {...props}
      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 font-body text-gray-800 focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all outline-none placeholder:text-gray-300"
    />
  </div>
);

export default Contact;