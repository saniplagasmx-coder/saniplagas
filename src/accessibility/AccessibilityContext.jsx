import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'saniplagas-a11y';

const defaults = {
  fontSize: 0,        // 0 = normal, 1 = grande, 2 = extra grande
  highContrast: false,
  grayscale: false,
  linkUnderlines: false,
  readingGuide: false,
};

const AccessibilityContext = createContext();

const classMap = {
  fontSize: ['', 'a11y-large-text', 'a11y-xl-text'],
  highContrast: 'a11y-high-contrast',
  grayscale: 'a11y-grayscale',
  linkUnderlines: 'a11y-underline-links',
};

function applyClasses(settings) {
  const root = document.documentElement;

  // Font size
  classMap.fontSize.forEach((cls) => { if (cls) root.classList.remove(cls); });
  const fontClass = classMap.fontSize[settings.fontSize];
  if (fontClass) root.classList.add(fontClass);

  // Boolean toggles
  ['highContrast', 'grayscale', 'linkUnderlines'].forEach((key) => {
    const cls = classMap[key];
    if (settings[key]) {
      root.classList.add(cls);
    } else {
      root.classList.remove(cls);
    }
  });
}

export const AccessibilityProvider = ({ children }) => {
  const [settings, setSettingsState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch {
      return defaults;
    }
  });

  const updateSettings = useCallback((partial) => {
    setSettingsState((prev) => {
      const next = { ...prev, ...partial };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      applyClasses(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    applyClasses(defaults);
    setSettingsState(defaults);
  }, []);

  // Apply on mount
  useEffect(() => {
    applyClasses(settings);
  }, [settings]);

  const setFontSize = useCallback((level) => updateSettings({ fontSize: level }), [updateSettings]);
  const toggleHighContrast = useCallback(() => updateSettings({ highContrast: !settings.highContrast }), [settings.highContrast, updateSettings]);
  const toggleGrayscale = useCallback(() => updateSettings({ grayscale: !settings.grayscale }), [settings.grayscale, updateSettings]);
  const toggleLinkUnderlines = useCallback(() => updateSettings({ linkUnderlines: !settings.linkUnderlines }), [settings.linkUnderlines, updateSettings]);
  const toggleReadingGuide = useCallback(() => updateSettings({ readingGuide: !settings.readingGuide }), [settings.readingGuide, updateSettings]);

  return (
    <AccessibilityContext.Provider value={{
      ...settings,
      setFontSize,
      toggleHighContrast,
      toggleGrayscale,
      toggleLinkUnderlines,
      toggleReadingGuide,
      resetAll,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};
