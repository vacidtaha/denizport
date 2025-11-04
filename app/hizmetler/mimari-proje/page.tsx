"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MimariProje() {
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
                    Mimari Proje<br />
                    Ve Tasarım
                  </h1>
                </div>
              </div>

              {/* Sağ Taraf - Açıklama */}
              <div className="w-full md:w-1/2" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Denizport olarak, her projeyi benzersiz bir yaşam alanı olarak ele alıyor ve mimari tasarım sürecinde estetik, işlevsellik ve sürdürülebilirliği bir araya getiriyoruz. Modern mimari anlayışla harmanladığımız yenilikçi çözümlerimiz, müşterilerimizin hayallerini gerçeğe dönüştürürken, çevresel duyarlılık ve kalite standartlarından ödün vermiyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Mimari projelerimiz, kapsamlı bir analiz ve planlama süreci ile başlar. Alan çalışmaları, topografik etüd, zemin analizleri ve çevresel değerlendirmeler ile projenizin temelini oluştururuz. Bu aşamada yerel yönetmeliklere uyumluluk, yapı yükseklikleri, emsal değerleri ve inşaat koşulları detaylı olarak incelenir. Arazinin potansiyelini maksimize ederken, doğal peyzajı korumaya ve geliştirmeye özen gösteririz.
                </p>

                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Deneyimli mimari ekibimiz, konsept aşamasından uygulama projelerine kadar her detayı titizlikle planlar. Vaziyet planından cephe tasarımına, iç mekan düzenlemelerinden peyzaj planlamasına kadar tüm aşamalarda profesyonel destek sunuyoruz. Her proje, arazinin topografik özellikleri, iklimsel koşullar ve kullanıcı ihtiyaçları göz önünde bulundurularak özgün bir kimlikle tasarlanır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Teknik çizim ve detaylandırma sürecinde, yapısal sistem seçimi, malzeme spesifikasyonları, tesisat planları ve enerji verimliliği hesaplamaları yapılır. BIM (Building Information Modeling) teknolojisi kullanarak, projenizin tüm bileşenlerini dijital ortamda modelliyor, olası sorunları inşaat öncesinde tespit ediyoruz. Bu yaklaşım, hem zaman hem de maliyet tasarrufu sağlarken, uygulama kalitesini de artırır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Mimari projelerimizde doğal ışık kullanımı, mekan verimliliği, enerji tasarrufu ve çevreyle uyum ön plandadır. Pasif ısıtma ve soğutma stratejileri, doğal havalandırma sistemleri, yağmur suyu toplama ve geri dönüşüm çözümleri gibi sürdürülebilir tasarım prensiplerini uyguluyoruz. Geleneksel ve modern unsurları harmanlayarak zamansız tasarımlar ortaya koyuyor, villa, konut, ticari mekan ve karma kullanımlı projeler için kapsamlı mimari hizmetler sunuyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose">
                  Projenizin her aşamasında yanınızdayız; ön fizibilite çalışmalarından ruhsat süreçlerine, 3D görselleştirmelerden teknik detay projelerine kadar tüm mimari süreçleri yönetiyor, hayalinizdeki yaşam alanını en ince ayrıntısına kadar tasarlıyoruz. Belediye onay süreçlerinde aktif destek sağlıyor, gerekli tüm dokümantasyonu hazırlıyor ve projenizin sorunsuz bir şekilde hayata geçmesini sağlıyoruz.
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

