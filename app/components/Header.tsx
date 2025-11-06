"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  alwaysVisible?: boolean;
}

export default function Header({ alwaysVisible = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(alwaysVisible);
  const { language, setLanguage, t } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === '/iletisim';
  const isServiceDetailPage = pathname.startsWith('/hizmetler/') && pathname !== '/hizmetler';
  const isServicesMainPage = pathname === '/hizmetler';
  const isProjectsMainPage = pathname === '/projeler';

  useEffect(() => {
    if (alwaysVisible) return;
    
    const handleScroll = () => {
      // Hero'nun yarısına gelince header açılsın
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysVisible]);

  return (
    <>
      {/* Header Arka Planı - SCROLL YAPINCA BELİRİYOR */}
      {!sidebarOpen && (
        <div
          className={`hidden md:block fixed top-0 left-0 right-0 h-20 z-[50] transition-all duration-500 ease-in-out pointer-events-none ${
            (scrolled && !isServicesMainPage && !isProjectsMainPage)
              ? "bg-white/95 backdrop-blur-md"
              : "bg-transparent"
          }`}
        />
      )}

      {/* Hamburger Menü - SABİT Sol Üstte */}
      {!sidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute md:fixed top-3 sm:top-4 left-4 md:left-12 z-[70] flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full hover:bg-white/10 transition-all duration-300 pointer-events-auto"
        >
        <div className="flex flex-col gap-[5px]">
          <span className={`w-6 sm:w-7 h-[2px] rounded-full transition-all duration-300 ${(isContactPage || isServiceDetailPage || (scrolled && !isServicesMainPage && !isProjectsMainPage)) ? "bg-black drop-shadow-none" : "bg-white drop-shadow-lg"}`}></span>
          <span className={`w-6 sm:w-7 h-[2px] rounded-full transition-all duration-300 ${(isContactPage || isServiceDetailPage || (scrolled && !isServicesMainPage && !isProjectsMainPage)) ? "bg-black drop-shadow-none" : "bg-white drop-shadow-lg"}`}></span>
          <span className={`w-6 sm:w-7 h-[2px] rounded-full transition-all duration-300 ${(isContactPage || isServiceDetailPage || (scrolled && !isServicesMainPage && !isProjectsMainPage)) ? "bg-black drop-shadow-none" : "bg-white drop-shadow-lg"}`}></span>
        </div>
        </button>
      )}

      {/* Logo - Ortada SCROLL YAPINCA BELİRİYOR */}
      {!sidebarOpen && scrolled && !isServicesMainPage && !isProjectsMainPage && (
        <div className="hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 h-20 z-[70] items-center px-4 pointer-events-none">
          <Image
            src="/denizport.png"
            alt="Denizport"
            width={400}
            height={100}
            className="h-12 sm:h-16 w-auto"
            style={{ filter: 'brightness(0)' }}
            priority
          />
        </div>
      )}

      {/* Dil Seçeneği - SABİT Sağ Üstte */}
      {!sidebarOpen && (
        <div className="absolute md:fixed top-3 sm:top-4 md:top-5 md:top-7 right-4 sm:right-8 md:right-12 z-[70] flex items-center gap-1 text-xs sm:text-sm font-medium pointer-events-auto">
        <button
          onClick={() => setLanguage('tr')}
          className={`transition-all duration-300 ${
            isContactPage || isServiceDetailPage ? 'text-black' : (scrolled && !isServicesMainPage && !isProjectsMainPage) ? 'text-black' : 'text-white'
          }`}
        >
          TR
        </button>
        <span className={`${
          isContactPage || isServiceDetailPage
            ? 'text-gray-400'
            : (scrolled && !isServicesMainPage && !isProjectsMainPage) ? 'text-gray-300' : 'text-white/40'
        }`}>/</span>
        <button
          onClick={() => setLanguage('en')}
          className={`transition-all duration-300 ${
            isContactPage || isServiceDetailPage
              ? language === 'en'
                ? 'text-black'
                : 'text-gray-400 hover:text-gray-600'
              : (scrolled && !isServicesMainPage && !isProjectsMainPage)
              ? language === 'en'
                ? 'text-black'
                : 'text-gray-400 hover:text-gray-600'
              : language === 'en'
              ? 'text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          EN
        </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl z-[45] transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "clamp(280px, 80vw, 400px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 sm:px-12">
          <nav className="flex flex-col items-start gap-6 sm:gap-8">
            <a 
              href="/" 
              className={`relative text-lg sm:text-2xl font-light text-black before:content-[''] before:absolute before:-left-5 sm:before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 transition-opacity duration-500 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: sidebarOpen ? "100ms" : "0ms" }}
            >
              {t('nav.home')}
            </a>
            <a 
              href="/projeler" 
              className={`relative text-lg sm:text-2xl font-light text-black before:content-[''] before:absolute before:-left-5 sm:before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 transition-opacity duration-500 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: sidebarOpen ? "200ms" : "0ms" }}
            >
              {t('nav.projects')}
            </a>
            <a 
              href="/hizmetler" 
              className={`relative text-lg sm:text-2xl font-light text-black before:content-[''] before:absolute before:-left-5 sm:before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 transition-opacity duration-500 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: sidebarOpen ? "300ms" : "0ms" }}
            >
              {t('nav.services')}
            </a>
            <a 
              href="/iletisim" 
              className={`relative text-lg sm:text-2xl font-light text-black before:content-[''] before:absolute before:-left-5 sm:before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 transition-opacity duration-500 ${
                sidebarOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: sidebarOpen ? "400ms" : "0ms" }}
            >
              {t('nav.contact')}
            </a>
          </nav>
        </div>
      </div>

      {/* Overlay - Sidebar dışına tıklayınca kapat */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}