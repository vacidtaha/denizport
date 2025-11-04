"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function InsaatTaahhut() {
  return (
    <>
      <Header alwaysVisible={true} />

      {/* Ana Container */}
      <div className="w-full min-h-screen pt-16 md:pt-20 bg-white">
        {/* İçerik Bölümü */}
        <div className="w-full" style={{ paddingTop: 'clamp(60px, 10vh, 120px)', paddingBottom: 'clamp(60px, 10vh, 140px)' }}>
          <div className="flex justify-center w-full px-4 sm:px-8 md:px-20">
            <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-32">
              
              {/* Sol Taraf - Başlık (Sticky) */}
              <div className="w-full md:w-1/2 md:pl-12" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)' }}>
                <div style={{ position: 'sticky', top: '120px' }}>
                  <a 
                    href="/hizmetler" 
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-light text-gray-500 hover:text-black transition-colors mb-8 md:mb-12"
                  >
                    <span>←</span>
                    <span>Geri</span>
                  </a>
                  <p className="text-xs font-light tracking-[0.3em] uppercase mb-4 md:mb-6 text-gray-400">
                    HİZMETLER
                  </p>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-black leading-tight">
                    İnşaat Ve Taahhüt<br />
                    Hizmetleri
                  </h1>
                </div>
              </div>

              {/* Sağ Taraf - Açıklama */}
              <div className="w-full md:w-1/2" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Denizport olarak, inşaat ve taahhüt hizmetlerimizde kalite, güvenilirlik ve zamanında teslim prensiplerine bağlı kalarak projelerinizi hayata geçiriyoruz. Deneyimli mühendis ve usta ekibimiz, modern inşaat teknikleri ve kaliteli malzemelerle, her türlü yapı inşaatında profesyonel çözümler sunuyoruz. Villa, konut, ticari yapı ve restorasyon projelerinde kapsamlı taahhüt hizmetleri sağlıyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  İnşaat süreçlerimiz, detaylı planlama ve hazırlık aşaması ile başlar. Zemin etüdü, şantiye organizasyonu, iş güvenliği tedbirleri ve kalite kontrol sistemlerinin kurulumu titizlikle yapılır. İnşaat öncesi tüm ruhsat ve izinler tamamlanır, malzeme tedarik planı oluşturulur ve iş programı hazırlanır. Şantiye kurulumu, geçici tesis yapımı ve güvenlik önlemleri alınarak çalışmalar başlatılır.
                </p>

                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Yapı inşaat aşamasında, temel kazı ve dolgu işlerinden üst yapı imalatına kadar her aşamada teknik kontrol ve kalite güvence sistemleri uygulanır. Betonarme iskelet yapımı, tuğla duvar örme, çatı sistemi kurulumu, dış cephe kaplamaları ve yalıtım uygulamaları mesleki standartlara uygun olarak gerçekleştirilir. Her aşamada statik hesaplamalar, malzeme testleri ve uygulama kontrolleri yapılarak yapı güvenliği sağlanır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Mekanik ve elektrik tesisat uygulamalarında, ısıtma-soğutma sistemleri, su ve atık su tesisatı, elektrik panoları, aydınlatma altyapısı ve akıllı ev sistemleri profesyonelce kurulur. Enerji verimliliği hedeflenerek, yalıtım uygulamaları, VRF sistemler ve yenilenebilir enerji çözümleri entegre edilir. Yangın güvenlik sistemleri, hırsız alarm altyapısı ve kamera sistemleri gibi güvenlik uygulamaları da taahhüt kapsamında gerçekleştirilir.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  İç ve dış mekan son kat uygulamalarında, zemin kaplamaları, sıva ve boya işleri, ahşap doğrama montajları, alüminyum doğrama uygulamaları ve cam montajı titizlikle yapılır. Peyzaj düzenlemesi, havuz yapımı, drenaj sistemleri ve bahçe aydınlatması gibi dış mekan çalışmaları da inşaat kapsamında tamamlanır. Her detay, onaylı projeler ve teknik şartnamelere uygun olarak uygulanır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose">
                  Proje teslim öncesi kapsamlı kontrol ve test işlemleri yapılır. Tüm tesisatların çalışma testleri, su ve hava sızdırmazlık kontrolleri, elektrik güvenlik testleri ve yapı performans değerlendirmeleri gerçekleştirilir. Nihai temizlik, peyzaj düzenlemesi ve çevre düzenlemesi tamamlanarak projeniz anahtar teslim olarak size sunulur. Garanti sürecinde bakım ve servis desteğimiz devam eder.
                </p>
              </div>

            </div>
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
                BİRLİKTE ÇALIŞALIM
              </p>
              <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
                Hayalinizdeki projeyi<br />
                birlikte gerçeğe dönüştürelim
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

