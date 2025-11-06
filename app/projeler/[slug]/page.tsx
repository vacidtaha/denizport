"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface ProjectType {
  name: string;
  brutAlan: string;
  netAlan: string;
  odaSayisi: string;
  yatak: string;
  banyo: string;
  teras: string;
  bahce: string;
  otopark: string;
  planImage: string;
  features: string[];
}

interface Project {
  id: string;
  name: string;
  location: string;
  coverImage: string;
  description: string;
  descriptionEn: string;
  types?: ProjectType[];
  galleryImages: string[];
  slug: string;
}

export default function DynamicProjectPage() {
  const { language, t } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Projeyi API'den yükle
    const loadProject = async () => {
      try {
        const response = await fetch('/api/projects');
        const projects: Project[] = await response.json();
        const foundProject = projects.find(p => p.slug === slug);
        setProject(foundProject || null);
        
        // SEO Meta tags - Proje bulunduysa
        if (foundProject) {
          document.title = `${foundProject.name} - Satılık Konut Projesi | Denizport İnşaat`;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            const desc = `${foundProject.name} satılık konut projesi - ${foundProject.location}. ${foundProject.description.substring(0, 120)}...`;
            metaDescription.setAttribute('content', desc);
          }
        }
      } catch (error) {
        console.error('Proje yüklenemedi:', error);
        setProject(null);
      }
    };
    loadProject();
  }, [slug]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
    }
  };

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

  if (!project) {
    return (
      <>
        <Header />
        <div className="w-full min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Proje bulunamadı...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="w-full min-h-screen">
        {/* Hero */}
        <div className="relative w-full h-[85vh] md:h-[70vh] sm:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-4">
              <p className="text-xs font-light tracking-[0.3em] uppercase mb-4 opacity-90">
                {project.location}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-light mb-2">
                {project.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Açıklama */}
        <div className="w-full bg-white" style={{ padding: '80px 24px' }}>
          <div className="flex justify-center w-full">
            <div className="max-w-3xl">
              <p className="text-left text-sm sm:text-base text-black leading-loose font-normal whitespace-pre-line">
                {language === 'tr' ? project.description : project.descriptionEn}
              </p>
            </div>
          </div>
        </div>

        {/* Tip Seçimi - Sadece tiplervarsa göster */}
        {project.types && project.types.length > 0 && (
          <div className="w-full bg-gray-50" style={{ paddingTop: 'clamp(60px, 10vh, 100px)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
            <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
              <div className="max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28">
                  {/* Sol Taraf - Butonlar ve Plan */}
                  <div className="flex flex-col">
                    {/* Tip Seçim Butonları */}
                    <div className="flex flex-row gap-3 mb-8 md:mb-16 flex-wrap">
                      {project.types.map((type, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTypeIndex(index)}
                          className={`flex-1 py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 border border-gray-300 hover:border-black ${
                            selectedTypeIndex === index
                              ? 'bg-black text-white border-black'
                              : 'bg-white text-gray-700 hover:text-black'
                          }`}
                          style={{ minWidth: '120px' }}
                        >
                          {type.name}
                        </button>
                      ))}
                    </div>

                    {/* Plan Görseli */}
                    <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center">
                      {project.types[selectedTypeIndex].planImage ? (
                        <img
                          src={project.types[selectedTypeIndex].planImage}
                          alt={`${project.types[selectedTypeIndex].name} Plan`}
                          className="w-full h-full object-contain transition-opacity duration-500"
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
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8 md:mb-16 tracking-tight">
                      {project.types[selectedTypeIndex].name}
                    </h3>
                    
                    {/* Teknik Bilgiler Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
                      {project.types[selectedTypeIndex].brutAlan && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.brutAlan')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].brutAlan}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].netAlan && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.netAlan')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].netAlan}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].odaSayisi && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.odaDuzeni')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].odaSayisi}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].yatak && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.yatakOdasi')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].yatak}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].banyo && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.banyo')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].banyo}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].teras && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.teras')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].teras}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].bahce && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.bahce')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].bahce}</p>
                        </div>
                      )}
                      {project.types[selectedTypeIndex].otopark && (
                        <div>
                          <p className="text-xs font-light text-gray-400 mb-1 md:mb-2 tracking-wide">{t('project.type.otopark')}</p>
                          <p className="text-base md:text-lg font-normal text-black">{project.types[selectedTypeIndex].otopark}</p>
                        </div>
                      )}
                    </div>

                    {/* Özellikler */}
                    {project.types[selectedTypeIndex].features && project.types[selectedTypeIndex].features.length > 0 && (
                      <div style={{ marginTop: '48px' }}>
                        <h4 className="text-xs font-light text-gray-400 mb-4 tracking-wide">{t('project.type.ozellikler')}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {project.types[selectedTypeIndex].features.map((feature, idx) => (
                            feature && (
                              <p 
                                key={idx}
                                className="text-sm font-light text-gray-600"
                              >
                                • {feature}
                              </p>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
                {project.name} {t('project.salesTitle')}
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

        {/* Galeri */}
        <div className="w-full bg-white" style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="text-2xl md:text-3xl font-light mb-12">{t('project.gallery')}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
              {project.galleryImages.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="cursor-pointer overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${project.name} ${index + 1}`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white text-3xl sm:text-4xl md:text-4xl font-light hover:opacity-70 transition-opacity z-10"
          >
            ×
          </button>

          <div className="relative w-[95vw] sm:w-[90vw] h-[50vh] sm:h-[60vh] md:h-[70vh] max-w-7xl mb-4 sm:mb-6 md:mb-8 flex-shrink-0">
            <img
              src={project.galleryImages[currentImageIndex]}
              alt="Proje Görseli"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
            <button
              onClick={prevImage}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-light hover:opacity-70 transition-opacity z-10 p-2 sm:p-3"
            >
              ‹
            </button>

            <div className="text-white text-xs sm:text-sm font-light whitespace-nowrap">
              {currentImageIndex + 1} / {project.galleryImages.length}
            </div>

            <button
              onClick={nextImage}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-light hover:opacity-70 transition-opacity z-10 p-2 sm:p-3"
            >
              ›
            </button>
          </div>

          <div className="flex gap-2 sm:gap-3 overflow-x-auto max-w-7xl px-2 sm:px-4 md:px-8 w-full justify-center">
            {project.galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 flex-shrink-0 cursor-pointer transition-all duration-300 rounded overflow-hidden ${
                  index === currentImageIndex 
                    ? 'opacity-100 ring-2 ring-white' 
                    : 'opacity-40 hover:opacity-70'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
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

