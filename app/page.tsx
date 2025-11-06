"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Project {
  id: string;
  name: string;
  location: string;
  coverImage: string;
  slug: string;
}

export default function Home() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>([]);

  const heroImages = [
    "/hero1.JPG",
    "/hero2.JPG",
    "/hero3.JPG",
    "/hero4.JPG",
    "/hero5.JPG",
    "/hero6.jpg",
  ];

  useEffect(() => {
    // SEO Meta tags
    document.title = "Denizport İnşaat | Konut Projeleri ve Villa Satışı";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lüks villa projeleri ve modern konut satışı. İnşaat ve taahhüt hizmetleri ile hayalinizdeki evi gerçeğe dönüştürüyoruz. Mimari proje desteği.');
    }
  }, []);

  useEffect(() => {
    // 8 saniyede bir fotoğraf değiştir
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    // Ana sayfa ayarlarına göre projeleri yükle
    const loadHomePageProjects = async () => {
      try {
        // Ana sayfa ayarlarını oku
        const settings = localStorage.getItem('homePageSettings');
        let selectedIds: string[] = [];
        
        if (settings) {
          const parsed = JSON.parse(settings);
          selectedIds = parsed.selectedProjects || [];
        }

        // API'den tüm projeleri al
        const response = await fetch('/api/projects');
        const allProjects = await response.json();

        // 4 veya daha az proje varsa → Otomatik: Tümünü göster
        if (allProjects.length <= 4) {
          const sortedProjects = allProjects.sort((a: Project, b: Project) => 
            parseInt(b.id) - parseInt(a.id)
          );
          setDynamicProjects(sortedProjects);
        } 
        // 5+ proje varsa → Manuel seçim sistemi
        else {
          if (selectedIds.length >= 2) {
            // Admin'in seçtiği projeleri göster
            const selectedProjects: Project[] = [];
            selectedIds.forEach(id => {
              const found = allProjects.find((p: Project) => p.id === id);
              if (found) selectedProjects.push(found);
            });
            setDynamicProjects(selectedProjects);
          } else {
            // Seçim yoksa: En yeni 4 proje
            const latestProjects = allProjects
              .sort((a: Project, b: Project) => parseInt(b.id) - parseInt(a.id))
              .slice(0, 4);
            setDynamicProjects(latestProjects);
          }
        }
      } catch (error) {
        console.error('Projeler yüklenemedi:', error);
      }
    };
    loadHomePageProjects();
  }, []);

  return (
    <>
      <Header />

      {/* Ana Container */}
      <div className="w-full min-h-screen">
        {/* Hero Bölümü */}
        <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
          {/* Arka Plan Görselleri - Kenardan Kenara */}
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt="Background"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Logo - Merkez - Sabit */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src="/denizport.png"
              alt="Denizport Logo"
              width={500}
              height={300}
              className="w-auto h-auto max-w-[45%] sm:max-w-[60%] md:max-w-[70%] max-h-[50vh] object-contain"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5)) brightness(0) invert(1)' }}
              priority
            />
          </div>
        </div>

        {/* Gri Alan */}
        <div className="w-full bg-gray-100" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
          <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
            <div className="max-w-2xl md:max-w-3xl" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)' }}>
              <p className="text-left text-sm sm:text-base md:text-base text-black leading-relaxed md:leading-loose font-normal pb-32">
                {t('home.about.text')}
              </p>
            </div>
          </div>
        </div>

        {/* Koyu Bordo Alan */}
        <div className="w-full" style={{ backgroundColor: '#1a0508', paddingTop: '100px', paddingBottom: '120px', paddingLeft: 'clamp(20px, 8vw, 120px)', paddingRight: 'clamp(20px, 4vw, 40px)' }}>
          <div className="flex justify-start w-full">
            <div className="max-w-4xl">
              <p className="text-white text-sm font-light tracking-wide mb-6">
                {t('home.projects.tag')}
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                {t('home.projects.title')}
              </h2>
              
              {/* Tümünü Gör Butonu */}
              <a 
                href="/projeler"
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-light tracking-wider uppercase transition-all duration-300 text-white mt-8"
              >
                <span className="relative">
                  {t('home.projects.cta')}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0"></span>
                </span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Proje Görselleri Grid */}
        <div className="w-full bg-white py-8 sm:py-12 md:py-16">
          <div className={`grid grid-cols-1 ${dynamicProjects.length % 2 === 0 ? 'md:grid-cols-2' : ''} gap-0 px-4 sm:px-6 md:px-8`}>
            {/* Seçili/Otomatik Projeler */}
            {dynamicProjects.map((project) => (
                <Link 
                  key={project.id}
                  href={`/projeler/${project.slug}`} 
                  className="relative aspect-[16/9] overflow-hidden group cursor-pointer block"
                >
                  {project.coverImage.startsWith('/projects/') || project.coverImage.startsWith('data:') ? (
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={project.coverImage}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
                  />
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-8 md:left-12 text-white z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">{project.name}</h3>
                  <p className="text-xs sm:text-sm font-medium opacity-90">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Koyu Gri Alan - Hizmetler Başlık */}
        <div className="w-full" style={{ backgroundColor: '#5c677d', paddingTop: '50px', paddingBottom: '45px', paddingLeft: 'clamp(20px, 8vw, 120px)', paddingRight: 'clamp(20px, 4vw, 40px)' }}>
          <div className="flex justify-start w-full">
            <div className="max-w-4xl">
              <p className="text-white text-sm font-light tracking-wide mb-6">
                {t('home.services.tag')}
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8 md:mb-12">
                {t('home.services.title')}
              </h2>
              
              {/* Tümünü Gör Butonu */}
              <a 
                href="/hizmetler"
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-light tracking-wider uppercase transition-all duration-300 text-white"
              >
                <span className="relative">
                  {t('home.services.cta')}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0"></span>
                </span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hizmetler Grid - 3'lü / Responsive */}
        <div className="w-full bg-white pb-20 md:pb-56" style={{ }}>
          <div className="w-full">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {/* 1. Hizmet */}
                <Link href="/hizmetler/mimari-proje" className="bg-gray-50 hover:bg-gray-100 transition-all duration-500 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col cursor-pointer">
                  {/* Görsel - Üst Yarı */}
                  <div className="relative w-full h-1/2">
                    <Image
                      src="/1.jpg"
                      alt="Mimari Proje Ve Tasarım"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Metin - Alt Yarı */}
                  <div className="py-8 sm:py-10 md:py-12 flex-1 flex flex-col justify-center" style={{ paddingLeft: 'clamp(20px, 5vw, 60px)', paddingRight: 'clamp(20px, 5vw, 60px)' }}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-black leading-tight">
                      {t('services.mimari.title')}
                    </h3>
                    <p className="text-sm sm:text-base font-normal text-gray-600 leading-loose">
                      {t('services.mimari.desc')}
                    </p>
                  </div>
                </Link>

                {/* 2. Hizmet */}
                <Link href="/hizmetler/ic-mimarlik" className="bg-gray-50 hover:bg-gray-100 transition-all duration-500 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col cursor-pointer">
                  {/* Görsel - Üst Yarı */}
                  <div className="relative w-full h-1/2">
                    <Image
                      src="/2.jpg"
                      alt="İç Mimarlık Ve Dekorasyon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Metin - Alt Yarı */}
                  <div className="py-8 sm:py-10 md:py-12 flex-1 flex flex-col justify-center" style={{ paddingLeft: 'clamp(20px, 5vw, 60px)', paddingRight: 'clamp(20px, 5vw, 60px)' }}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-black leading-tight">
                      {t('services.ic.title')}
                    </h3>
                    <p className="text-sm sm:text-base font-normal text-gray-600 leading-loose">
                      {t('services.ic.desc')}
                    </p>
                  </div>
                </Link>

                {/* 3. Hizmet */}
                <Link href="/hizmetler/insaat-taahhut" className="bg-gray-50 hover:bg-gray-100 transition-all duration-500 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col cursor-pointer">
                  {/* Görsel - Üst Yarı */}
                  <div className="relative w-full h-1/2">
                    <Image
                      src="/3.jpg"
                      alt="İnşaat Ve Taahhüt Hizmetleri"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Metin - Alt Yarı */}
                  <div className="py-8 sm:py-10 md:py-12 flex-1 flex flex-col justify-center" style={{ paddingLeft: 'clamp(20px, 5vw, 60px)', paddingRight: 'clamp(20px, 5vw, 60px)' }}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-black leading-tight">
                      {t('services.insaat.title')}
                    </h3>
                    <p className="text-sm sm:text-base font-normal text-gray-600 leading-loose">
                      {t('services.insaat.desc')}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
