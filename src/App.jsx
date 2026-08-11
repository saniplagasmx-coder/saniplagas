import React from 'react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { AccessibilityProvider } from './accessibility/AccessibilityContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Gallery from './components/Gallery';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import ReadingGuide from './components/ReadingGuide';
import IrapuatoLanding from './pages/IrapuatoLanding';
import './index.css';

// Sitio de una sola página + landings por sucursal. Son destinos de Google Ads a los
// que se entra directo, así que basta con resolver la ruta por pathname: no hace falta
// un router de cliente (el .htaccess de public/ hace el fallback a index.html).
const LANDING_ROUTES = {
  '/irapuato': IrapuatoLanding,
};

const resolveLanding = () => {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();
  return LANDING_ROUTES[path] || null;
};

const Home = () => (
  <div className="min-h-screen">
    <Navbar />
    <main id="main-content">
      <Hero />
      <Services />
      {/* <About />
      <Process /> */}
      <Gallery />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

const SkipToContent = () => {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-to-content">
      {t('a11y.skipToContent')}
    </a>
  );
};

function App() {
  const Landing = resolveLanding();

  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <SkipToContent />
        {Landing ? <Landing /> : <Home />}
        <AccessibilityToolbar />
        <ReadingGuide />
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

export default App;
