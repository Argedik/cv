'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translationService, Language } from '@/domain/services/TranslationService';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language Context - Single Responsibility: Only manages language state
// Translation logic is separated to TranslationService (SRP)
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or browser language
    const savedLanguage = localStorage.getItem('language') as Language;
    let browserLanguage: Language = 'en';
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('tr')) {
      browserLanguage = 'tr';
    } else if (browserLang.startsWith('ar')) {
      browserLanguage = 'ar';
    }
    const initialLanguage = savedLanguage || browserLanguage;
    setLanguageState(initialLanguage);
    // Set initial HTML lang attribute
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('lang', initialLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      // Update HTML lang attribute
      document.documentElement.setAttribute('lang', lang);
    }
  };

  // Uses TranslationService - Dependency Inversion Principle (DIP)
  const t = (key: string): string => {
    return translationService.translate(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
