import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/logo-sani.png';
import { useLanguage } from '../i18n/LanguageContext';

const CONTACT_INFO = {
  phone: "+52 (415) 113-2340",
  telHref: "tel:+524151132340",
  email: "contacto@saniplagas.mx",
};

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/5214151132340?text=${encodeURIComponent(t('whatsapp.defaultMessage'))}`;

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen, closeModal]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: t('footer.servicios'), href: '#servicios' },
    { label: t('footer.galeria'), href: '#galeria' },
    { label: t('footer.contacto'), href: '#contacto' },
  ];

  const socials = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1D3LgyQ3jv/',
      icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>,
    },
    {
      label: 'WhatsApp',
      href: whatsappUrl,
      icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>,
    },
  ];

  return (
    <>
      <footer className="bg-gray-950 text-white relative overflow-hidden" role="contentinfo">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              <img src={logo} alt="SaniPlagas" className="h-14 w-auto" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {t('footer.bio')}
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
                    <svg className="w-4 h-4 text-gray-500 group-hover/icon:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Footer navigation">
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-primary-500 pl-3">
                {t('footer.navTitle')}
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100" aria-hidden="true" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border-l-2 border-primary-500 pl-3">
                {t('footer.emergencyTitle')}
              </h4>
              <a href={CONTACT_INFO.telHref} className="group flex flex-col mb-4">
                <span className="text-green-400 font-bold text-lg flex items-center gap-2 group-hover:text-green-300 transition-colors">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  {CONTACT_INFO.phone}
                </span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">{t('footer.support247')}</span>
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

        <div className="border-t border-white/5 py-5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()} SaniPlagas &middot; San Miguel de Allende
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="text-gray-600 hover:text-primary-400 text-[11px] uppercase tracking-widest transition-colors"
            >
              {t('footer.privacyTerms')}
            </button>
          </div>
        </div>
      </footer>

      {/* Modal de Privacidad & Términos */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 id="legal-modal-title" className="font-bold text-gray-900 text-base">{t('footer.privacyTerms')}</h3>
              <button
                onClick={closeModal}
                autoFocus
                aria-label={t('gallery.close')}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              <pre className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {t('footer.legalText')}
              </pre>
            </div>

            <div className="px-6 py-4 border-t border-gray-100">
              <button
                onClick={closeModal}
                className="w-full py-2.5 bg-gray-900 hover:bg-primary-600 text-white text-sm font-bold rounded-xl transition-colors"
              >
                {t('footer.understood')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
