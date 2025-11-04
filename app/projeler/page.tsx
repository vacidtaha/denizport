"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projeler() {
  const projeler = [
    {
      id: 1,
      baslik: "Dereköy Taş Evler",
      konum: "Dereköy, Gümüşlük",
      gorsel: "/tasevler-kapak.jpeg",
      link: "/projeler/tasevler"
    },
    {
      id: 2,
      baslik: "Unique Villas",
      konum: "Bahçelievler, Turgutreis",
      gorsel: "/unique-kapak.jpeg",
      link: "/projeler/unique"
    }
  ];

  return (
    <>
      <Header alwaysVisible={true} />

      {/* Ana Container */}
      <div className="w-full min-h-screen pt-16 md:pt-20">
        {/* Hero Bölümü - Koyu Bordo */}
        <div 
          className="w-full flex items-center justify-center" 
          style={{ 
            backgroundColor: '#1a0508', 
            paddingTop: 'clamp(100px, 15vh, 200px)', 
            paddingBottom: 'clamp(60px, 10vh, 140px)' 
          }}
        >
          <div className="text-center max-w-4xl px-4 sm:px-6 md:px-8">
            <p className="text-white text-xs font-light tracking-[0.3em] uppercase mb-6 md:mb-8 opacity-80">
              PROJELER
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
              Lüksün ve estetiğin<br />
              buluştuğu projeler
            </h1>
          </div>
        </div>

        {/* Projeler Grid - Ana Sayfadaki Gibi */}
        <div className="w-full bg-white py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4 sm:px-6 md:px-8">
            {projeler.map((proje) => {
              const content = (
                <div className="relative aspect-[16/9] overflow-hidden group cursor-pointer">
                  {proje.gorsel ? (
                    <>
                      <Image
                        src={proje.gorsel}
                        alt={proje.baslik}
                        fill
                        className="object-cover"
                      />
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.4) 0%, transparent 60%)' }}
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <svg 
                        className="w-16 sm:w-20 h-16 sm:h-20 text-gray-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1} 
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-8 md:left-12 z-10 ${proje.gorsel ? 'text-white' : 'text-gray-700'}`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">{proje.baslik}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">{proje.konum}</p>
                  </div>
                </div>
              );

              return proje.link ? (
                <Link key={proje.id} href={proje.link}>
                  {content}
                </Link>
              ) : (
                <div key={proje.id}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Alt Bölüm - İletişim CTA */}
        <div 
          className="w-full" 
          style={{ 
            backgroundColor: '#1a0508', 
            paddingTop: 'clamp(60px, 10vh, 120px)',
            paddingBottom: 'clamp(60px, 10vh, 120px)',
            paddingLeft: 'clamp(16px, 8vw, 120px)',
            paddingRight: 'clamp(16px, 8vw, 120px)'
          }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
            <div className="max-w-2xl">
              <p className="text-white/60 text-xs font-light tracking-[0.3em] uppercase mb-4 md:mb-6">
                PROJELERİMİZ
              </p>
              <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
                İlgilendiğiniz projelerimizin<br />
                detaylarını görüşmek için<br />
                bizimle iletişime geçin
              </h3>
            </div>
            <a 
              href="/iletisim"
              className="group inline-flex items-center gap-3 text-white text-xs sm:text-sm md:text-base"
            >
              <span className="font-light tracking-wide relative">
                İletişime Geçin
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:w-0"></span>
              </span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

