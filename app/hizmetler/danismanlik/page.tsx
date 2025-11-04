"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Danismanlik() {
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
                    Danışmanlık Ve<br />
                    Proje Yönetimi
                  </h1>
                </div>
              </div>

              {/* Sağ Taraf - Açıklama */}
              <div className="w-full md:w-1/2" style={{ paddingLeft: 'clamp(16px, 4vw, 0px)', paddingRight: 'clamp(16px, 4vw, 0px)' }}>
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Denizport Danışmanlık ve Proje Yönetimi hizmetleri ile inşaat projelerinizin her aşamasında profesyonel rehberlik ve koordinasyon desteği sağlıyoruz. Fikir aşamasından projenin teslim ve işletmeye alınmasına kadar tüm süreçleri yöneterek, zaman, maliyet ve kalite hedeflerinize ulaşmanızı garanti ediyoruz. Deneyimli proje yöneticilerimiz ve teknik danışmanlarımızla, karmaşık inşaat süreçlerini şeffaf, verimli ve kontrollü bir şekilde yürütüyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Proje başlangıç aşamasında, fizibilite etüdleri, arazi analizi, yasal mevzuat araştırması ve ekonomik değerlendirme çalışmaları yapıyoruz. Yatırım bütçesi oluşturma, finansman planlaması ve risk analizi ile projenizin gerçekleştirilebilirliğini değerlendiriyoruz. Arsa seçimi, imar durumu sorgulaması, zemin etüdü ve çevresel etki değerlendirmesi gibi ön çalışmalarda danışmanlık hizmeti sunuyoruz.
                </p>

                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Tasarım aşamasında, mimar, mühendis ve yüklenici seçimi süreçlerinde danışmanlık yapıyoruz. Teklif değerlendirme, kalite-fiyat analizi ve referans kontrolü ile doğru iş ortaklarının seçilmesini sağlıyoruz. Sözleşme hazırlama, teknik şartname oluşturma ve proje programı planlaması gibi kritik süreçleri yönetiyoruz. Tasarım alternatiflerinin değerlendirilmesi, maliyet optimizasyonu ve değer mühendisliği çalışmaları yapılır.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  İnşaat sürecinde, şantiye koordinasyonu, kalite kontrol, hakediş takibi ve iş programı yönetimi sağlıyoruz. Düzenli şantiye ziyaretleri ile uygulamaların projeye uygunluğunu kontrol ediyor, sorunları anında tespit edip çözüm üretiyoruz. Malzeme onayları, numune değerlendirmeleri ve teknik detay çözümleri konularında aktif rol alıyoruz. Yüklenici performansını izliyor, iş güvenliği tedbirlerini kontrol ediyor ve çevre düzenini takip ediyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose mb-6 md:mb-8">
                  Bütçe yönetimi ve maliyet kontrolü hizmetlerimiz ile projenizin finansal disiplin içinde ilerlemesini sağlıyoruz. Hakediş raporları hazırlıyor, ek iş ve değişiklik taleplerini değerlendiriyor, maliyet artışlarını kontrol ediyoruz. Nakit akışı planlaması, ödeme şartları yönetimi ve finansal raporlama ile bütçenizin şeffaf bir şekilde takibini yapıyoruz.
                </p>
                
                <p className="text-sm sm:text-base font-light text-gray-700 leading-loose">
                  Proje teslim aşamasında, son kontroller, test ve devreye alma işlemlerini koordine ediyoruz. Yapı kullanma izni, iskân ruhsatı ve diğer yasal süreçlerde destek sağlıyoruz. Garanti süreçlerinin yönetimi, bakım planlarının oluşturulması ve kullanıcı eğitimleri ile projenizin uzun vadeli başarısını güvence altına alıyoruz. Teslim sonrası periyodik kontroller ve bakım hizmetleri ile yanınızda olmaya devam ediyoruz.
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

