"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TasevlerDetay() {
  const { language, t } = useLanguage();
  const [selectedTip, setSelectedTip] = useState<'daire' | 'dublex-ust' | 'dublex-alt'>('daire');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "/tasevlerdetay.jpeg",
    "/tasevlerdetay1.jpeg",
    "/tasevlerdetay2.jpeg",
    "/tasevlerdetay3.jpeg",
    "/tasevlerdetay4.jpeg",
    "/tasevlerdetay5.jpeg",
    "/tasevlerdetay6.jpeg"
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    // SEO Meta tags
    document.title = "Dereköy Taş Evler - Satılık Villa Projeleri | Denizport İnşaat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dereköy Taş Evler satılık villa projeleri - Yatay mimari, taş dokular ve geniş cam yüzeylerle lüks yaşam alanı. Daire ve dublex seçenekleri. Dereköy, Gümüşlük, Bodrum.');
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const tipBilgileri = {
    'daire': {
      isim: "Daire",
      brutAlan: "85 m²",
      netAlan: "71 m²",
      odaSayisi: "2+1",
      yatak: "2",
      banyo: "2",
      teras: "15 m²",
      bahce: "100 m²",
      otopark: "2 Açık",
      gorsel: "/plan-daire.jpg"
    },
    'dublex-ust': {
      isim: "Dublex",
      brutAlan: "150 m²",
      netAlan: "140 m²",
      odaSayisi: "3+1",
      yatak: "3",
      banyo: "3",
      teras: "-",
      bahce: "100 m²",
      otopark: "1 Kapalı",
      gorsel: "/plan-dublex-ust.jpg"
    },
    'dublex-alt': {
      isim: "Dublex",
      brutAlan: "150 m²",
      netAlan: "140 m²",
      odaSayisi: "3+1",
      yatak: "3",
      banyo: "3",
      teras: "-",
      bahce: "100 m²",
      otopark: "1 Kapalı",
      gorsel: "/plan-dublex-alt.jpg"
    }
  };
  return (
    <>
      <Header />

      {/* Ana Container */}
      <div className="w-full min-h-screen">
        {/* Hero Bölümü - Ana Sayfa Gibi */}
        <div className="relative w-full h-[85vh] md:h-[70vh] sm:h-[60vh] overflow-hidden">
          {/* Arka Plan Görseli - Kenardan Kenara */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/tasevler-kapak.jpeg"
              alt="Dereköy Taş Evler"
              fill
              className="object-cover"
              priority
            />
            {/* Koyu Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Proje Bilgileri - Merkez */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4">
              <p className="text-xs font-light tracking-[0.3em] uppercase mb-4 opacity-90">
                Dereköy, Gümüşlük
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-light mb-2">
                Dereköy Taş Evler
              </h1>
            </div>
          </div>
        </div>

        {/* Proje Açıklaması - Beyaz Alan */}
        <div className="w-full bg-white" style={{ paddingTop: 'clamp(60px, 10vh, 100px)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
              <p className="text-left text-sm sm:text-base text-black leading-loose font-normal mb-6 md:mb-8">
                {t('tasevler.p1')}
              </p>
              <p className="text-left text-sm sm:text-base text-black leading-loose font-normal mb-6 md:mb-8">
                {t('tasevler.p2')}
              </p>
              <p className="text-left text-sm sm:text-base text-black leading-loose font-normal">
                {t('tasevler.p3')}
              </p>
            </div>
          </div>
        </div>

        {/* İkinci Bölüm - Tip Seçimi */}
        <div className="w-full bg-gray-50" style={{ paddingTop: 'clamp(60px, 10vh, 100px)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28">
                {/* Sol Taraf - Butonlar ve Görsel */}
                <div className="flex flex-col">
                  {/* Tip Seçim Butonları */}
                  <div className="flex flex-row gap-3 mb-8 md:mb-16">
                    {([
                      { key: 'daire' as const, label: 'Daire' },
                      { key: 'dublex-ust' as const, label: 'Dublex Üst Kat' },
                      { key: 'dublex-alt' as const, label: 'Dublex Alt Kat' }
                    ]).map((tip) => (
                      <button
                        key={tip.key}
                        onClick={() => setSelectedTip(tip.key)}
                        className={`flex-1 py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 border border-gray-300 hover:border-black ${
                          selectedTip === tip.key
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 hover:text-black'
                        }`}
                      >
                        {tip.label}
                      </button>
                    ))}
                  </div>

                  {/* Mimari Çizim / Plan */}
                  <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center">
                    {tipBilgileri[selectedTip].gorsel ? (
                      <Image
                        src={tipBilgileri[selectedTip].gorsel}
                        alt={`${tipBilgileri[selectedTip].isim} Plan`}
                        fill
                        className="object-cover transition-opacity duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <svg 
                          className="w-16 sm:w-24 h-16 sm:h-24 text-gray-300 mb-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={0.5} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <p className="text-xs sm:text-sm font-light text-gray-400 tracking-wide">Plan Hazırlanıyor</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sağ Taraf - Bilgiler */}
                <div className="flex flex-col justify-start" style={{ paddingLeft: 'clamp(0px, 4vw, 32px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8 md:mb-16 tracking-tight">{tipBilgileri[selectedTip].isim}</h3>
                  
                  {/* Teknik Bilgiler Grid */}
                  <div className="grid grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.brutAlan')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].brutAlan}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.netAlan')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].netAlan}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.odaDuzeni')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].odaSayisi}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.yatakOdasi')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].yatak}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.banyo')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].banyo}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.teras')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].teras}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.bahce')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].bahce}</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.otopark')}</p>
                      <p className="text-base md:text-lg font-normal text-black">{tipBilgileri[selectedTip].otopark}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Satış Ofisi İletişim */}
        <div 
          className="w-full" 
          style={{ 
            backgroundColor: '#1a0508', 
            paddingTop: 'clamp(60px, 10vh, 100px)',
            paddingBottom: 'clamp(60px, 10vh, 100px)',
            paddingLeft: 'clamp(16px, 8vw, 120px)',
            paddingRight: 'clamp(16px, 8vw, 120px)'
          }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
            <div className="max-w-2xl">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] uppercase mb-4 md:mb-6">
                {t('project.salesOffice')}
              </p>
              <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
                Dereköy Taş Evler {t('project.salesTitle')}
              </h3>
            </div>
            <a 
              href="/iletisim"
              className="group inline-flex items-center gap-3 text-white text-xs sm:text-sm md:text-base"
            >
              <span className="font-light tracking-wide relative">
                {t('project.salesCta')}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0"></span>
              </span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Proje Galerisi */}
        <div className="w-full bg-white" style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Başlık */}
            <h2 className="text-3xl md:text-4xl font-light" style={{ marginBottom: '48px' }}>
              {t('project.gallery')}
            </h2>

            {/* Galeri Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="cursor-pointer overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="Taş Evler Detay"
                    width={1000}
                    height={1000}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center">
          {/* Kapat Butonu */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white text-3xl sm:text-4xl md:text-4xl font-light hover:opacity-70 transition-opacity z-10"
          >
            ×
          </button>

          {/* Ana Görsel */}
          <div className="relative w-[95vw] sm:w-[90vw] h-[50vh] sm:h-[60vh] md:h-[70vh] max-w-7xl mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
            <Image
              src={galleryImages[currentImageIndex]}
              alt="Proje Görseli"
              fill
              className="object-contain rounded-lg"
            />
          </div>

          {/* Navigation Okları - Görsel Altında Mobilde */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
            {/* Sol Ok */}
            <button
              onClick={prevImage}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-light hover:opacity-70 transition-opacity z-10 p-2 sm:p-3"
            >
              ‹
            </button>

            {/* Görsel Sayacı */}
            <div className="text-white text-xs sm:text-sm font-light whitespace-nowrap">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Sağ Ok */}
            <button
              onClick={nextImage}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-light hover:opacity-70 transition-opacity z-10 p-2 sm:p-3"
            >
              ›
            </button>
          </div>

          {/* Thumbnail Galerisi - Mobilde Yatay Scroll */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto max-w-7xl px-2 sm:px-4 md:px-8 w-full justify-center">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 flex-shrink-0 cursor-pointer transition-all duration-300 rounded overflow-hidden ${
                  index === currentImageIndex 
                    ? 'opacity-100 ring-2 ring-white' 
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

