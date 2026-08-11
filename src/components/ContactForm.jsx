import React, { useState, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const EMAILJS_CONFIG = {
  serviceId: 'service_dtl47r4',
  templateId: 'template_qfp6l9g',
  publicKey: 'sRjSKPWdpM-5OBveJ',
};

const GOOGLE_ADS_CONVERSION = 'AW-17772616658/4ootCLenyfwbENK30ppC';

const InputField = ({ label, name, idPrefix, ...props }) => (
  <div className="space-y-1.5">
    <label htmlFor={`${idPrefix}-${name}`} className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{label}</label>
    <input
      id={`${idPrefix}-${name}`}
      name={name}
      {...props}
      className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-gray-800 text-sm focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:bg-white transition-all outline-none placeholder:text-gray-300"
    />
  </div>
);

/**
 * Formulario de contacto compartido entre la home y las landings por sucursal.
 * `branch` viaja en el correo y en el evento de conversión para saber de qué sede vino el lead.
 */
const ContactForm = ({ branch = 'general', idPrefix = 'contact' }) => {
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
          branch,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': GOOGLE_ADS_CONVERSION,
            'value': 1.0,
            'currency': 'MXN',
            'branch': branch,
        });
      }

    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">

      <div className="mb-8">
        <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{t('contact.form.title')}</h3>
        <p className="text-gray-400 text-sm">{t('contact.form.subtitle')}</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-label={t('contact.form.title')}>

        <div className="grid sm:grid-cols-2 gap-5">
          <InputField idPrefix={idPrefix} label={t('contact.form.name')} name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePlaceholder')} required autoComplete="name" />
          <InputField idPrefix={idPrefix} label={t('contact.form.phone')} name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t('contact.form.phonePlaceholder')} autoComplete="tel" />
        </div>

        <InputField idPrefix={idPrefix} label={t('contact.form.email')} name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')} required autoComplete="email" />

        <div className="space-y-2">
          <label htmlFor={`${idPrefix}-message`} className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">{t('contact.form.message')}</label>
          <textarea
            id={`${idPrefix}-message`}
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
  );
};

export default ContactForm;
