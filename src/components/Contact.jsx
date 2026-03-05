import React, { useState, useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { useLanguage } from '../i18n/LanguageContext';

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
    <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-green-500 flex items-center justify-center text-green-600 group-hover:text-white transition-all duration-400 flex-shrink-0" aria-hidden="true">
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
  const { t } = useLanguage();

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

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-17772616658/4ootCLenyfwbENK30ppC',
            'value': 1.0,
            'currency': 'MXN'
        });
      }

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 6000);
  };

  const whatsappContactUrl = `https://wa.me/5214151132340?text=${encodeURIComponent(t('contact.whatsappMessage'))}`;
  const whatsappEmergencyUrl = `https://wa.me/5214151132340?text=${encodeURIComponent(t('contact.emergency.message'))}`;

  return (
    <section id="contacto" className="py-32 bg-[#F8FAFC] overflow-hidden" ref={ref} aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" aria-hidden="true" />

        <div className="grid lg:grid-cols-12 gap-16 items-start relative z-10">

          {/* Lado Izquierdo */}
          <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
              {t('contact.badge')}
            </span>

            <h2 id="contact-title" className="text-4xl xl:text-5xl font-display font-black text-gray-900 leading-[1.1] mb-6">
              {t('contact.title')} <span className="text-green-500 italic">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-sm">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-1 mb-8">
              <ContactInfo
                label={t('contact.callLabel')}
                value="+52 (415) 113-2340"
                href="tel:+524151132340"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>}
              />
              <ContactInfo
                label={t('contact.emailLabel')}
                value="contacto@saniplagas.mx"
                href="mailto:contacto@saniplagas.mx"
                icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
              />
              <ContactInfo
                label={t('contact.whatsappLabel')}
                value={t('contact.whatsappValue')}
                href={whatsappContactUrl}
                icon={<svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>}
              />
            </div>

            {/* Card de emergencia */}
            <div className="p-5 rounded-2xl bg-gray-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:scale-110 transition-transform" aria-hidden="true">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 className="font-bold text-base mb-1">{t('contact.emergency.title')}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{t('contact.emergency.desc')}</p>
              <a href={whatsappEmergencyUrl} className="text-green-400 font-bold text-sm hover:underline inline-flex items-center gap-1">
                {t('contact.emergency.cta')}
              </a>
            </div>
          </div>

          {/* Lado Derecho: Formulario */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">

              <div className="mb-8">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{t('contact.form.title')}</h3>
                <p className="text-gray-400 text-sm">{t('contact.form.subtitle')}</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-label={t('contact.form.title')}>

                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField label={t('contact.form.name')} name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePlaceholder')} required autoComplete="name" />
                  <InputField label={t('contact.form.phone')} name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t('contact.form.phonePlaceholder')} autoComplete="tel" />
                </div>

                <InputField label={t('contact.form.email')} name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')} required autoComplete="email" />

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t('contact.form.message')}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={t('contact.form.messagePlaceholder')}
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
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      {t('contact.form.sending')}
                    </span>
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-green-600 font-bold text-sm" role="status" aria-live="polite">
                    {t('contact.form.success')}
                  </p>
                )}

                <p className="text-center text-gray-300 text-xs">
                  {t('contact.form.privacy')}
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* UBICACIÓN */}
        <div className={`mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-green-500" aria-hidden="true" />
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.3em]">{t('contact.location.badge')}</span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            <div className="w-full h-56 sm:h-72 lg:h-80">
              <iframe
                title={t('contact.location.mapTitle')}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.92764898398093!2d-100.76078984673855!3d20.908997625212116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56388ed4bf533%3A0x37f82ef30cb8b170!2sSaniplagas!5e0!3m2!1ses-419!2smx!4v1772733963683!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <address className="not-italic">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{t('contact.location.addressLabel')}</p>
                  <p className="text-gray-700 text-sm leading-snug">
                    Alfil 22, INFONAVIT Malanquin,<br />37755 San Miguel de Allende, Gto.
                  </p>
                </address>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{t('contact.location.scheduleLabel')}</p>
                  <p className="text-gray-700 text-sm">{t('contact.location.scheduleValue')}</p>
                  <p className="text-green-600 text-xs font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" aria-hidden="true" />
                    {t('contact.location.emergencies247')}
                  </p>
                </div>
              </div>

              <div className="flex sm:justify-end items-start">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=20.908997625212116,-100.76078984673855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-all duration-300 whitespace-nowrap shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                  {t('contact.location.directions')}
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const InputField = ({ label, name, ...props }) => (
  <div className="space-y-1.5">
    <label htmlFor={`contact-${name}`} className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{label}</label>
    <input
      id={`contact-${name}`}
      name={name}
      {...props}
      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-800 text-sm focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all outline-none placeholder:text-gray-300"
    />
  </div>
);

export default Contact;
