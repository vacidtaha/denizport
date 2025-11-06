"use client";

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Header/Nav
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projeler',
    'nav.services': 'Hizmetler',
    'nav.contact': 'İletişim',
    
    // Ana Sayfa
    'home.hero.title': 'Hayalinizdeki yaşam alanını birlikte tasarlayalım',
    'home.about.title': 'HAKKIMIZDA',
    'home.about.text': 'Denizport İnşaat olarak, modern ve işlevsel mimari çözümlerle hayalinizdeki projeyi gerçeğe dönüştürüyoruz. Lüks villa projeleri, konut satışı ve inşaat taahhüt hizmetleriyle her aşamada yanınızdayız.',
    'home.projects.tag': 'PROJELER',
    'home.projects.title': 'Her projede mükemmellik arayışıyla tasarlanmış detaylar.',
    'home.projects.cta': 'Tüm Projeler',
    'home.services.tag': 'HİZMETLER',
    'home.services.title': 'Her aşamada profesyonel destek, kusursuz sonuçlar',
    'home.services.cta': 'Tüm Hizmetlerimiz',
    
    // Projeler
    'projects.hero.tag': 'PROJELER',
    'projects.hero.title': 'Lüksün ve estetiğin buluştuğu projeler',
    'projects.cta.tag': 'PROJELERİMİZ',
    'projects.cta.title': 'İlgilendiğiniz projelerimizin detaylarını görüşmek için bizimle iletişime geçin',
    'projects.cta.button': 'İletişime Geçin',
    
    // Hizmetler
    'services.hero.tag': 'HİZMETLER',
    'services.hero.title': 'Her aşamada profesyonel destek, kusursuz sonuçlar',
    
    // İletişim
    'contact.hero.tag': 'İLETİŞİM',
    'contact.hero.title': 'Hayalinizdeki proje için bizimle iletişime geçin',
    'contact.office': 'Satış Ofisi',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.address': 'Adres',
    
    // Proje Detay
    'project.salesOffice': 'SATIŞ OFİSİ',
    'project.salesCta': 'Satış Ofisimizle İletişime Geçin',
    'project.gallery': 'Proje Galerisi',
  },
  en: {
    // Header/Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Ana Sayfa
    'home.hero.title': 'Let\'s design your dream living space together',
    'home.about.title': 'ABOUT US',
    'home.about.text': 'As Denizport Construction, we bring your dream project to life with modern and functional architectural solutions. We are with you at every stage with luxury villa projects, residential sales and construction contracting services.',
    'home.projects.tag': 'PROJECTS',
    'home.projects.title': 'Details designed with a pursuit of perfection in every project.',
    'home.projects.cta': 'All Projects',
    'home.services.tag': 'SERVICES',
    'home.services.title': 'Professional support at every stage, flawless results',
    'home.services.cta': 'All Services',
    
    // Projeler
    'projects.hero.tag': 'PROJECTS',
    'projects.hero.title': 'Projects where luxury and aesthetics meet',
    'projects.cta.tag': 'OUR PROJECTS',
    'projects.cta.title': 'Contact us to discuss the details of our projects you are interested in',
    'projects.cta.button': 'Contact Us',
    
    // Hizmetler
    'services.hero.tag': 'SERVICES',
    'services.hero.title': 'Professional support at every stage, flawless results',
    
    // İletişim
    'contact.hero.tag': 'CONTACT',
    'contact.hero.title': 'Contact us for your dream project',
    'contact.office': 'Sales Office',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Proje Detay
    'project.salesOffice': 'SALES OFFICE',
    'project.salesCta': 'Contact Our Sales Office',
    'project.gallery': 'Project Gallery',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    // LocalStorage'dan dil tercihini yükle
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'tr' || savedLang === 'en') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

