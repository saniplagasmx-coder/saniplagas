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
import './index.css';

const SkipToContent = () => {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-to-content">
      {t('a11y.skipToContent')}
    </a>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <SkipToContent />
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
          <AccessibilityToolbar />
          <ReadingGuide />
        </div>
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

export default App;
