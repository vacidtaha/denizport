"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function IcMimarlik() {
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
                    İç Mimarlık<br />
                    Ve Dekorasyon
                  </h1>
                </div>
              </div>

              {/* Sağ Taraf - Açıklama */}
              <div className="w-full md:w-1/2" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Denizport İç Mimarlık ve Dekorasyon hizmetleri ile yaşam alanlarınızı kişiliğinizi yansıtan, estetik ve fonksiyonel mekanlara dönüştürüyoruz. Her proje için özgün konseptler geliştiriyor, mekan kullanımını optimize ederken görsel zenginlik ve konfor standartlarını en üst seviyede tutuyoruz. Modern tasarım anlayışını zamansız estetikle birleştirerek, size özel iç mekan çözümleri sunuyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  İç mimari projelerimiz, detaylı mekan analizi ile başlar. Kullanıcı profili, yaşam alışkanlıkları, işlevsel gereksinimler ve estetik beklentiler titizlikle değerlendirilir. Mobilya yerleşim planlarından aydınlatma tasarımına, renk paletinden doku seçimlerine kadar her detay bir bütünlük içinde kurgulanır. Ergonomi, akustik konfor, ısıl konfor ve havalandırma gibi teknik parametreler göz önünde bulundurularak, yaşanabilir ve sağlıklı mekanlar tasarlıyoruz.
                </p>

                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Malzeme seçiminde kalite, dayanıklılık ve estetik uyumu ön planda tutuyoruz. Doğal taş, ahşap, metal, cam ve tekstil ürünlerini ustalıkla bir araya getirerek özgün doku kombinasyonları oluşturuyoruz. Özel üretim mobilyalar, tasarım aydınlatma elemanları ve dekoratif aksesuarlar ile mekanlarınıza karakter kazandırıyoruz. Her materyal, hem görsel değeri hem de uzun ömürlülüğü gözetilerek seçilir.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Aydınlatma tasarımı, iç mimarlık projelerimizin en kritik unsurlarından biridir. Genel aydınlatma, görev aydınlatması, vurgu aydınlatması ve dekoratif aydınlatma katmanlarını dengeli bir şekilde planlıyoruz. Doğal ışık kullanımını maksimize ederken, yapay aydınlatmada enerji verimliliği ve atmosfer yaratma hedeflerimizi birleştiriyoruz. Akıllı aydınlatma sistemleri ile mekanlarınızda farklı senaryolar oluşturabilirsiniz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Renk psikolojisi ve mekan algısı konusundaki uzmanlığımızla, mekanlarınıza istediğiniz ruhu katıyoruz. Sakin ve dinlendirici atmosferlerden enerjik ve ilham verici ortamlara kadar geniş bir yelpazede tasarımlar gerçekleştiriyoruz. Duvar kaplamaları, zemin döşemeleri, tavan tasarımları ve özel yapım detaylar ile mekanlarınızı özgün kılıyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose">
                  Uygulama sürecinde, seçilen tüm ürünlerin tedariki, imalat takibi ve montaj koordinasyonunu sağlıyoruz. Deneyimli uygulama ekiplerimiz ve kaliteli iş ortaklarımızla, tasarımın eksiksiz bir şekilde hayata geçmesini garanti ediyoruz. Proje teslim sonrası bakım ve revizyon desteği ile de yanınızda olmaya devam ediyoruz.
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

