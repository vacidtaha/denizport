"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Restorasyon() {
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
                    Restorasyon<br />
                    Ve Yenileme
                  </h1>
                </div>
              </div>

              {/* Sağ Taraf - Açıklama */}
              <div className="w-full md:w-1/2" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Denizport Restorasyon ve Yenileme hizmetleri ile mevcut yapılarınıza yeni bir hayat veriyoruz. Tarihi dokuyu koruma, eski yapıları güçlendirme ve modern yaşam standartlarına uygun hale getirme konusunda uzmanlaşmış ekibimizle, her türlü restorasyon projesinde profesyonel çözümler sunuyoruz. Geleneksel mimari değerleri korurken, yapıların işlevselliğini ve konforunu artırıyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Restorasyon projelerimiz, kapsamlı bir hasar tespit ve yapısal analiz çalışması ile başlar. Rölöve alımı, malzeme analizleri, statik değerlendirme ve taşıyıcı sistem kontrolleri yapılır. Yapının geçirdiği değişiklikler, hasarlar ve eskimeler detaylı olarak belgelenir. Koruma kurulu onayları, tarihi yapı raporları ve restorasyon ruhsatı süreçlerinde aktif destek sağlıyoruz.
                </p>

                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Yapısal güçlendirme çalışmalarında, deprem dayanımını artırma, çatlak onarımları, nem ve rutubet sorunlarının giderilmesi, temel takviyesi ve taşıyıcı sistem iyileştirmeleri gerçekleştirilir. Karbon fiber takviye, enjeksiyon teknikleri, çelik destekleme ve modern sismik yalıtım yöntemleri kullanılarak yapıların güvenliği sağlanır. Tüm müdahaleler, yapının özgün karakterini koruyarak minimal invaziv tekniklerle uygulanır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Cephe yenileme çalışmalarında, orijinal malzeme ve tekniklere sadık kalınarak taş temizliği, derz tamirleri, sıva restorasyonu ve boya uygulamaları yapılır. Geleneksel ahşap doğramalar restore edilir veya özgün detaylarına uygun olarak yeniden imal edilir. Tarihi kiremit çatılar, ahşap konstrüksiyonlar ve dekoratif elemanlar özgün ustalık teknikleri ile onarılır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Modern konfor standartlarını sağlamak için tesisat yenileme çalışmaları yapılır. Isıtma-soğutma sistemleri, su ve elektrik tesisatı, yangın güvenlik sistemleri ve akıllı ev teknolojileri, yapının özgün dokusuna zarar vermeden entegre edilir. Gizli tesisat geçişleri, estetik klima çözümleri ve enerji verimliliği sağlayan modern sistemler kullanılır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose">
                  Yenileme projelerinde, iç mekan düzenlemesi, mutfak ve banyo yenileme, zemin döşeme değişimi, aydınlatma modernizasyonu ve dekoratif yenileme çalışmaları gerçekleştirilir. Eski yapıların ruhunu koruyarak, çağdaş yaşam ihtiyaçlarına cevap veren mekanlar yaratıyoruz. Projelerinizi zamanında, bütçe kontrolü ile teslim ediyor ve garanti kapsamında uzun vadeli destek sağlıyoruz.
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

