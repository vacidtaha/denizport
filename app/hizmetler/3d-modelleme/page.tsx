"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ModellemePage() {
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
                    3D Görselleştirme<br />
                    Ve Modelleme
                  </h1>
                </div>
              </div>

              {/* Sağ Taraf - Açıklama */}
              <div className="w-full md:w-1/2" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Denizport 3D Görselleştirme ve Modelleme hizmetleri ile projenizi inşaat başlamadan önce gerçekçi bir şekilde deneyimleme fırsatı sunuyoruz. Fotorealistik render'lar, sanal turlar ve animasyonlarla, tasarımınızın her detayını görselleştiriyor, değişiklik ve iyileştirmeleri inşaat öncesinde yapma olanağı sağlıyoruz. Bu sayede hem maliyet hem zaman tasarrufu sağlanırken, sonucun tam olarak beklentilerinize uygun olması garantilenir.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  3D modelleme sürecimiz, mimari projelerin dijital ortamda detaylı olarak oluşturulması ile başlar. BIM (Building Information Modeling) yazılımları kullanarak, yapının tüm bileşenlerini, malzemeleri ve teknik detayları içeren parametrik modeller oluşturuyoruz. Bu modeller sayesinde, farklı tasarım alternatifleri hızlıca değerlendirilebilir, mekansal ilişkiler analiz edilir ve optimum çözüme ulaşılır.
                </p>

                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Fotorealistik görselleştirme çalışmalarında, gelişmiş render motorları ve fizik tabanlı materyal sistemleri kullanıyoruz. Doğal ışık simülasyonları, gerçek malzeme dokuları, gölge ve yansıma hesaplamaları ile fotoğraf kalitesinde görseller üretiyoruz. Farklı zaman dilimlerinde, farklı hava koşullarında ve farklı açılardan render'lar hazırlayarak projenizin tüm atmosferini yansıtıyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) teknolojileri ile interaktif sunum deneyimleri sunuyoruz. VR gözlükleri ile projenizin içinde sanal olarak yürüyebilir, mekan ölçülerini ve mobilya yerleşimini bire bir deneyimleyebilirsiniz. AR uygulamaları ile ise, gerçek arazi üzerinde projenizin nasıl görüneceğini canlı olarak görebilirsiniz. Bu teknolojiler, müşteri sunumlarında ve satış süreçlerinde büyük avantaj sağlar.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Animasyon ve walkthrough hizmetlerimiz ile projenizin dinamik sunumunu hazırlıyoruz. Kamera hareketleri, geçiş efektleri ve müzik eşliğinde hazırlanan videolar, projenizin tüm özelliklerini etkileyici bir şekilde anlatır. Gün ışığı değişimi, mevsimsel farklılıklar ve peyzaj gelişimi gibi zamansal değişimleri de animasyonlarda gösterebiliyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose">
                  Teknik çizim ve sunum paftalarının hazırlanmasında, 3D modellerden otomatik olarak plan, kesit ve görünüş çizimleri üretiyoruz. Malzeme listesi, maliyet hesaplamaları ve inşaat planlaması gibi teknik verileri de modelden elde ediyoruz. Projenizin pazarlama materyalleri, satış ofisi görselleri ve web sitesi içerikleri için profesyonel görseller hazırlıyoruz.
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

