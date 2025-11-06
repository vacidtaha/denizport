"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Hizmetler() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // SEO Meta tags
    document.title = "Hizmetlerimiz | Denizport İnşaat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'İnşaat ve taahhüt, konut satışı, villa projeleri, mimari proje danışmanlığı, iç mimarlık, restorasyon ve 3D görselleştirme hizmetleri. Her aşamada profesyonel destek.');
    }
  }, []);

  return (
    <>
      <Header alwaysVisible={true} />

      {/* Ana Container */}
      <div className="w-full min-h-screen pt-16 md:pt-20">
        {/* Hero Bölümü - Koyu Gri */}
        <div 
          className="w-full flex items-center justify-center" 
          style={{ 
            backgroundColor: '#5c677d', 
            paddingTop: 'clamp(100px, 15vh, 200px)', 
            paddingBottom: 'clamp(60px, 10vh, 140px)' 
          }}
        >
          <div className="text-center max-w-4xl px-4 sm:px-6 md:px-8">
            <p className="text-white text-xs font-light tracking-[0.3em] uppercase mb-6 md:mb-8 opacity-80">
              {t('services.hero.tag')}
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
              {t('services.hero.title')}
            </h1>
          </div>
        </div>

        {/* Beyaz Boşluk Üst */}
        <div className="w-full bg-white h-0 sm:h-12 md:h-20"></div>

        {/* Hizmetler Grid - 3 Sütun Mozaik */}
        <div className="w-full bg-white pb-12 md:pb-20">
          <div className="w-full">
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
              
              {/* 1. Mimari Proje */}
              <Link href="/hizmetler/mimari-proje" className="relative aspect-[16/9] overflow-hidden group block">
                <Image src="/1.jpg" alt="Mimari Proje" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center z-10" style={{ paddingLeft: 'clamp(16px, 8vw, 60px)' }}>
                  <div className="text-left text-white max-w-sm">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">{t('services.mimari.title')}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      {t('services.mimari.desc')}
                    </p>
                  </div>
                </div>
              </Link>

              {/* 2. İç Mimarlık */}
              <Link href="/hizmetler/ic-mimarlik" className="relative aspect-[16/9] overflow-hidden group block">
                <Image src="/2.jpg" alt="İç Mimarlık" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center z-10" style={{ paddingLeft: 'clamp(16px, 8vw, 60px)' }}>
                  <div className="text-left text-white max-w-sm">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">{t('services.ic.title')}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      {t('services.ic.desc')}
                    </p>
                  </div>
                </div>
              </Link>

              {/* 3. İnşaat */}
              <Link href="/hizmetler/insaat-taahhut" className="relative aspect-[16/9] overflow-hidden group block">
                <Image src="/3.jpg" alt="İnşaat" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center z-10" style={{ paddingLeft: 'clamp(16px, 8vw, 60px)' }}>
                  <div className="text-left text-white max-w-sm">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">{t('services.insaat.title')}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      {t('services.insaat.desc')}
                    </p>
                  </div>
                </div>
              </Link>

              {/* 4. Restorasyon */}
              <Link href="/hizmetler/restorasyon" className="relative aspect-[16/9] overflow-hidden group block">
                <Image src="/4.jpg" alt="Restorasyon" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center z-10" style={{ paddingLeft: 'clamp(16px, 8vw, 60px)' }}>
                  <div className="text-left text-white max-w-sm">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">{t('services.restorasyon.title')}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      {t('services.restorasyon.desc')}
                    </p>
                  </div>
                </div>
              </Link>

              {/* 5. 3D Modelleme */}
              <Link href="/hizmetler/3d-modelleme" className="relative aspect-[16/9] overflow-hidden group block">
                <Image src="/5.jpg" alt="3D Modelleme" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center z-10" style={{ paddingLeft: 'clamp(16px, 8vw, 60px)' }}>
                  <div className="text-left text-white max-w-sm">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">{t('services.3d.title')}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      {t('services.3d.desc')}
                    </p>
                  </div>
                </div>
              </Link>

              {/* 6. Danışmanlık */}
              <Link href="/hizmetler/danismanlik" className="relative aspect-[16/9] overflow-hidden group block">
                <Image src="/6.jpg" alt="Danışmanlık" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center z-10" style={{ paddingLeft: 'clamp(16px, 8vw, 60px)' }}>
                  <div className="text-left text-white max-w-sm">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">{t('services.danismanlik.title')}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      {t('services.danismanlik.desc')}
                    </p>
                  </div>
                </div>
              </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Beyaz Boşluk Alt */}
        <div className="w-full bg-white h-0 sm:h-12 md:h-20"></div>
      </div>

      <Footer />
    </>
  );
}

