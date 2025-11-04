"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Hizmetler() {
  const hizmetler = [
    {
      id: 1,
      baslik: "Mimari Proje Ve Tasarım",
      aciklama: "Modern ve işlevsel mimari çözümlerle hayalinizdeki projeyi tasarlıyoruz.",
      size: "large" // 2 sütun genişliğinde
    },
    {
      id: 2,
      baslik: "İç Mimarlık Ve Dekorasyon",
      aciklama: "Yaşam alanlarınızı estetik ve konforla buluşturuyoruz.",
      size: "normal"
    },
    {
      id: 3,
      baslik: "İnşaat Ve Taahhüt Hizmetleri",
      aciklama: "Profesyonel ekip ve kaliteli malzeme ile güvenilir inşaat süreçleri.",
      size: "normal"
    },
    {
      id: 4,
      baslik: "Restorasyon Ve Yenileme",
      aciklama: "Mevcut yapılarınıza yeni bir soluk katıyoruz.",
      size: "normal"
    },
    {
      id: 5,
      baslik: "3D Görselleştirme Ve Modelleme",
      aciklama: "Projenizi tamamlanmadan önce gözünüzde canlandırıyoruz.",
      size: "tall" // Yüksek
    },
    {
      id: 6,
      baslik: "Danışmanlık Ve Proje Yönetimi",
      aciklama: "Profesyonel danışmanlık ile projelerinizi baştan sona yönetiyoruz.",
      size: "normal"
    }
  ];

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
              HİZMETLER
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
              Her aşamada profesyonel destek,<br />
              kusursuz sonuçlar
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
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">Mimari Proje Ve Tasarım</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      Modern ve işlevsel mimari çözümlerle hayalinizdeki projeyi tasarlıyoruz.
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
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">İç Mimarlık Ve Dekorasyon</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      Yaşam alanlarınızı estetik ve konforla buluşturuyoruz.
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
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">İnşaat Ve Taahhüt Hizmetleri</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      Profesyonel ekip ve kaliteli malzeme ile güvenilir inşaat.
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
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">Restorasyon Ve Yenileme</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      Mevcut yapılarınıza yeni bir soluk katıyoruz.
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
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">3D Görselleştirme Ve Modelleme</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      Projenizi tamamlanmadan önce gözünüzde canlandırıyoruz.
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
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3">Danışmanlık Ve Proje Yönetimi</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">
                      Profesyonel danışmanlıkla projelerinizi yönetiyoruz.
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

