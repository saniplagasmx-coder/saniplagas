import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useAccessibility } from '../accessibility/AccessibilityContext';

const ToggleRow = ({ label, active, onToggle, icon }) => (
  <button
    onClick={onToggle}
    role="switch"
    aria-checked={active}
    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
      active
        ? 'bg-blue-50 text-blue-700 border border-blue-200'
        : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'
    }`}
  >
    <span className="flex items-center gap-2.5">
      <span className="text-base" aria-hidden="true">{icon}</span>
      {label}
    </span>
    <span className={`w-9 h-5 rounded-full flex items-center transition-all duration-200 ${
      active ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
    }`}>
      <span className={`w-4 h-4 rounded-full bg-white shadow-sm mx-0.5 transition-transform`} />
    </span>
  </button>
);

const AccessibilityToolbar = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const { t } = useLanguage();
  const {
    fontSize,
    highContrast,
    grayscale,
    linkUnderlines,
    readingGuide,
    setFontSize,
    toggleHighContrast,
    toggleGrayscale,
    toggleLinkUnderlines,
    toggleReadingGuide,
    resetAll,
  } = useAccessibility();

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, close]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open, close]);

  const hasAnyActive = fontSize > 0 || highContrast || grayscale || linkUnderlines || readingGuide;

  const fontSizeLabels = [t('a11y.sizeNormal'), t('a11y.sizeLarge'), t('a11y.sizeXL')];

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label={t('a11y.open')}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#4992F2] hover:bg-[#3b76c5] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        {/* Active indicator dot */}
        {hasAnyActive && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white" aria-hidden="true" />
        )}
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-modal="true"
          aria-label={t('a11y.title')}
          className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3 className="font-bold text-gray-900 text-sm">{t('a11y.title')}</h3>
            </div>
            <button
              onClick={close}
              aria-label={t('a11y.close')}
              className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">

            {/* Font size */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 px-1">{t('a11y.fontSize')}</p>
              <div className="flex gap-2">
                {[0, 1, 2].map((level) => (
                  <button
                    key={level}
                    onClick={() => setFontSize(level)}
                    aria-label={fontSizeLabels[level]}
                    aria-pressed={fontSize === level}
                    className={`flex-1 py-2.5 rounded-xl text-center font-bold transition-all duration-200 ${
                      fontSize === level
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className={level === 0 ? 'text-xs' : level === 1 ? 'text-sm' : 'text-base'}>
                      A
                    </span>
                    <span className="block text-[9px] mt-0.5 font-medium opacity-75">
                      {fontSizeLabels[level]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-2">
              <ToggleRow
                label={t('a11y.highContrast')}
                active={highContrast}
                onToggle={toggleHighContrast}
                icon="🔲"
              />
              <ToggleRow
                label={t('a11y.grayscale')}
                active={grayscale}
                onToggle={toggleGrayscale}
                icon="🩶"
              />
              <ToggleRow
                label={t('a11y.underlineLinks')}
                active={linkUnderlines}
                onToggle={toggleLinkUnderlines}
                icon="🔗"
              />
              <ToggleRow
                label={t('a11y.readingGuide')}
                active={readingGuide}
                onToggle={toggleReadingGuide}
                icon="📏"
              />
            </div>

            {/* Reset */}
            {hasAnyActive && (
              <button
                onClick={() => { resetAll(); close(); }}
                className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-bold hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {t('a11y.reset')}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityToolbar;
