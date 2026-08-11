import React, { useEffect, useState } from 'react';
import heroImage from '../assets/Imagen 1.jpeg';
import { useLanguage } from '../i18n/LanguageContext';
import { LOCATIONS } from '../data/locations';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { ServiceCard, buildServiceCards } from '../components/Services';

const BRANCH = LOCATIONS.find((l) => l.id === 'irapuato');

// Landing corta de conversión para campañas de Google Ads segmentadas a Irapuato.
// Sin galería ni secciones largas: hero, prueba social, servicios, formulario y sucursal.
const IrapuatoLanding = () => {
  const { t, language } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  // Mismo reveal del hero de la home para que se sienta el mismo sitio.
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // CRA no tiene SSR, así que el <title>/description por ruta se ajustan aquí.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = t('irapuato.metaTitle');

    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    description?.setAttribute('content', t('irapuato.metaDescription'));

    let canonical = document.querySelector('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://saniplagas.mx/irapuato');

    return () => {
      document.title = previousTitle;
      if (previousDescription) description?.setAttribute('content', previousDescription);
      if (createdCanonical) canonical.remove();
    };
  }, [t, language]);

  const whatsappUrl = `https://wa.me/${BRANCH.whatsapp}?text=${encodeURIComponent(t('contact.whatsappMessage'))}`;
  const trust = t('irapuato.trust');
  const services = buildServiceCards(t('services.cards'));

  const scrollToForm = () => {
    document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRevealClass = (delay) => `
    transition-all duration-1000 ${delay}
    ${loaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}
  `;

  return (
    <div className="min-h-screen bg-white">

      <Navbar
        links={[
          { label: t('nav.inicio'), href: '#inicio' },
          { label: t('nav.servicios'), href: '#servicios' },
          { label: t('nav.contacto'), href: '#cotizar' },
        ]}
        ctaTarget="#cotizar"
      />

      <main id="main-content">

        {/* HERO — misma composición que el hero de la home: foto al fondo/izquierda
            con degradado al blanco y el contenido en la columna derecha. */}
        <section id="inicio" className="relative min-h-[100vh] flex items-center bg-white overflow-hidden" aria-labelledby="irapuato-title">

          <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-7/12 z-0 overflow-hidden">
            <div className="relative h-full w-full">
              <img
                src={heroImage}
                alt={t('hero.imgAlt')}
                className={`h-full w-full object-cover transition-all duration-[6s] ease-out
                  ${loaded ? 'scale-100 blur-0' : 'scale-110 blur-sm'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-white lg:from-transparent lg:via-white/20 lg:to-white z-10" />
            </div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-24 lg:py-16">
            <div className="grid lg:grid-cols-2 items-center">

              <div className="hidden lg:block" />

              <div className="flex flex-col space-y-7">

                <div className={`space-y-4 ${getRevealClass('delay-300')}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest">
                    {t('irapuato.badge')}
                  </span>
                  <h1 id="irapuato-title" className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-[1.05]">
                    {t('irapuato.title')} <br />
                    <span className="text-emerald-600">{t('irapuato.titleHighlight')}</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light text-slate-500 max-w-lg leading-relaxed">
                    {t('irapuato.subtitle')}
                  </p>
                </div>

                <div className={`flex items-center gap-4 ${getRevealClass('delay-500')}`}>
                  <div className="h-12 w-1 bg-emerald-500 rounded-full hidden md:block" aria-hidden="true" />
                  <p className="text-sm md:text-base text-slate-600 font-medium">
                    {t('hero.techLine1')} <br />
                    <span className="text-emerald-700 font-bold underline decoration-emerald-500/30">{t('hero.techLine2')}</span>
                  </p>
                </div>

                {/* Un solo botón protagonista como en la home; teléfono y WhatsApp
                    van debajo como acciones secundarias para no romper la línea. */}
                <div className={`flex flex-col sm:flex-row sm:items-center gap-5 pt-4 ${getRevealClass('delay-700')}`}>
                  <button
                    onClick={scrollToForm}
                    className="group relative overflow-hidden px-10 py-4 bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-emerald-200 hover:shadow-emerald-400/40 self-start"
                  >
                    <span className="relative z-10">{t('irapuato.ctaPrimary')}</span>
                    <div className="absolute inset-0 bg-slate-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
                  </button>

                  <div className="flex items-center gap-4 text-sm font-bold">
                    <a href={`tel:${BRANCH.phone}`} className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      {BRANCH.phoneDisplay}
                    </a>
                    <span className="w-px h-4 bg-slate-300" aria-hidden="true" />
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {t('irapuato.ctaWhatsapp')}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* PRUEBA / GARANTÍAS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500 text-white mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="font-display font-bold text-gray-900 mb-2">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS — mismas tarjetas que la home */}
        <section id="servicios" className="py-24 bg-gray-50/50 overflow-hidden" aria-labelledby="irapuato-services-title">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">{t('services.badge')}</span>
              </div>
              <h2 id="irapuato-services-title" className="text-4xl lg:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">
                {t('irapuato.servicesTitle')}
              </h2>
              <p className="text-lg text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
                {t('irapuato.servicesSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <ServiceCard key={i} service={service} isVisible />
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO + SUCURSAL */}
        <section id="cotizar" className="py-24 bg-[#F8FAFC] overflow-hidden" aria-labelledby="irapuato-form-title">
          <div className="max-w-7xl mx-auto px-6 relative">

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100/50 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" aria-hidden="true" />

            <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">

            <div className="lg:col-span-5">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
                {t('contact.badge')}
              </span>
              <h2 id="irapuato-form-title" className="text-4xl xl:text-5xl font-display font-black text-gray-900 leading-[1.1] mb-6">
                {t('irapuato.formTitle')}
              </h2>
              <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-sm">{t('irapuato.formSubtitle')}</p>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="w-full h-52">
                  <iframe
                    title={`${t('contact.location.mapTitle')} — ${BRANCH.city}`}
                    src={BRANCH.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{t('irapuato.locationTitle')}</p>
                  <address className="not-italic text-gray-700 text-sm leading-snug">
                    {BRANCH.addressLines[0]}<br />{BRANCH.addressLines[1]}
                  </address>
                  <p className="text-green-600 text-xs font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" aria-hidden="true" />
                    {t('contact.location.emergencies247')}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={BRANCH.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-colors"
                    >
                      {t('contact.location.directions')}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-green-500 hover:text-green-600 text-gray-700 text-sm font-bold rounded-xl transition-colors"
                    >
                      {t('irapuato.ctaWhatsapp')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm branch="irapuato" idPrefix="irapuato" />
            </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-white py-10 relative overflow-hidden" role="contentinfo">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} SaniPlagas &middot; {BRANCH.addressLines.join(' ')}
          </p>
          <a href="/" className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors">
            {t('irapuato.backToSite')}
          </a>
        </div>
      </footer>

      <WhatsAppFloat phone={BRANCH.whatsapp} />
    </div>
  );
};

export default IrapuatoLanding;
