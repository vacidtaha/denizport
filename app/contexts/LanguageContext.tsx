"use client";

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Header/Nav
    'nav.home': 'Ana Sayfa',
    'nav.projects': 'Projeler',
    'nav.services': 'Hizmetler',
    'nav.contact': 'İletişim',
    
    // Ana Sayfa
    'home.hero.title': 'Hayalinizdeki yaşam alanını birlikte tasarlayalım',
    'home.about.text': 'Denizport, modern mimari anlayışın estetikle buluştuğu noktada, lüks yaşam alanları tasarlıyor. Şehrin gürültüsünden uzak, doğayla iç içe, her detayın özenle düşünüldüğü projelerimizle yaşam standartlarınızı yükseltiyoruz. Konfor, zarafet ve yenilikçi tasarımın bir araya geldiği mekânlarda, hayalinizdeki evi gerçeğe dönüştürüyoruz.',
    'home.projects.tag': 'PROJELER',
    'home.projects.title': 'Her projede mükemmellik arayışıyla tasarlanmış detaylar.',
    'home.projects.cta': 'Tüm Projeler',
    'home.services.tag': 'HİZMETLER',
    'home.services.title': 'Her aşamada profesyonel destek, kusursuz sonuçlar',
    'home.services.cta': 'Tüm Hizmetlerimiz',
    
    // Projeler
    'projects.hero.tag': 'PROJELER',
    'projects.hero.title': 'Lüksün ve estetiğin buluştuğu projeler',
    'projects.cta.tag': 'PROJELERİMİZ',
    'projects.cta.title': 'İlgilendiğiniz projelerimizin detaylarını görüşmek için bizimle iletişime geçin',
    'projects.cta.button': 'İletişime Geçin',
    
    // Hizmetler
    'services.hero.tag': 'HİZMETLER',
    'services.hero.title': 'Her aşamada profesyonel destek, kusursuz sonuçlar',
    'services.mimari.title': 'Mimari Proje Ve Tasarım',
    'services.mimari.desc': 'Modern ve işlevsel mimari çözümlerle hayalinizdeki projeyi tasarlıyoruz.',
    'services.ic.title': 'İç Mimarlık Ve Dekorasyon',
    'services.ic.desc': 'Yaşam alanlarınızı estetik ve konforla buluşturuyoruz.',
    'services.insaat.title': 'İnşaat Ve Taahhüt Hizmetleri',
    'services.insaat.desc': 'Profesyonel ekip ve kaliteli malzeme ile güvenilir inşaat süreçleri.',
    'services.restorasyon.title': 'Restorasyon Ve Yenileme',
    'services.restorasyon.desc': 'Mevcut yapılarınıza yeni bir soluk katıyoruz.',
    'services.3d.title': '3D Görselleştirme Ve Modelleme',
    'services.3d.desc': 'Projenizi tamamlanmadan önce gözünüzde canlandırıyoruz.',
    'services.danismanlik.title': 'Danışmanlık Ve Proje Yönetimi',
    'services.danismanlik.desc': 'Profesyonel danışmanlık ile projelerinizi baştan sona yönetiyoruz.',
    
    // Mimari Proje Detay
    'mimari.p1': 'Denizport olarak, her projeyi benzersiz bir yaşam alanı olarak ele alıyor ve mimari tasarım sürecinde estetik, işlevsellik ve sürdürülebilirliği bir araya getiriyoruz. Modern mimari anlayışla harmanladığımız yenilikçi çözümlerimiz, müşterilerimizin hayallerini gerçeğe dönüştürürken, çevresel duyarlılık ve kalite standartlarından ödün vermiyoruz.',
    'mimari.p2': 'Mimari projelerimiz, kapsamlı bir analiz ve planlama süreci ile başlar. Alan çalışmaları, topografik etüd, zemin analizleri ve çevresel değerlendirmeler ile projenizin temelini oluştururuz. Bu aşamada yerel yönetmeliklere uyumluluk, yapı yükseklikleri, emsal değerleri ve inşaat koşulları detaylı olarak incelenir. Arazinin potansiyelini maksimize ederken, doğal peyzajı korumaya ve geliştirmeye özen gösteririz.',
    'mimari.p3': 'Deneyimli mimari ekibimiz, konsept aşamasından uygulama projelerine kadar her detayı titizlikle planlar. Vaziyet planından cephe tasarımına, iç mekan düzenlemelerinden peyzaj planlamasına kadar tüm aşamalarda profesyonel destek sunuyoruz. Her proje, arazinin topografik özellikleri, iklimsel koşullar ve kullanıcı ihtiyaçları göz önünde bulundurularak özgün bir kimlikle tasarlanır.',
    'mimari.p4': 'Teknik çizim ve detaylandırma sürecinde, yapısal sistem seçimi, malzeme spesifikasyonları, tesisat planları ve enerji verimliliği hesaplamaları yapılır. BIM (Building Information Modeling) teknolojisi kullanarak, projenizin tüm bileşenlerini dijital ortamda modelliyor, olası sorunları inşaat öncesinde tespit ediyoruz. Bu yaklaşım, hem zaman hem de maliyet tasarrufu sağlarken, uygulama kalitesini de artırır.',
    'mimari.p5': 'Mimari projelerimizde doğal ışık kullanımı, mekan verimliliği, enerji tasarrufu ve çevreyle uyum ön plandadır. Pasif ısıtma ve soğutma stratejileri, doğal havalandırma sistemleri, yağmur suyu toplama ve geri dönüşüm çözümleri gibi sürdürülebilir tasarım prensiplerini uyguluyoruz. Geleneksel ve modern unsurları harmanlayarak zamansız tasarımlar ortaya koyuyor, villa, konut, ticari mekan ve karma kullanımlı projeler için kapsamlı mimari hizmetler sunuyoruz.',
    'mimari.p6': 'Projenizin her aşamasında yanınızdayız; ön fizibilite çalışmalarından ruhsat süreçlerine, 3D görselleştirmelerden teknik detay projelerine kadar tüm mimari süreçleri yönetiyor, hayalinizdeki yaşam alanını en ince ayrıntısına kadar tasarlıyoruz. Belediye onay süreçlerinde aktif destek sağlıyor, gerekli tüm dokümantasyonu hazırlıyor ve projenizin sorunsuz bir şekilde hayata geçmesini sağlıyoruz.',
    
    // İç Mimarlık Detay
    'ic.p1': 'Denizport İç Mimarlık ve Dekorasyon hizmetleri ile yaşam alanlarınızı kişiliğinizi yansıtan, estetik ve fonksiyonel mekanlara dönüştürüyoruz. Her proje için özgün konseptler geliştiriyor, mekan kullanımını optimize ederken görsel zenginlik ve konfor standartlarını en üst seviyede tutuyoruz. Modern tasarım anlayışını zamansız estetikle birleştirerek, size özel iç mekan çözümleri sunuyoruz.',
    'ic.p2': 'İç mimari projelerimiz, detaylı mekan analizi ile başlar. Kullanıcı profili, yaşam alışkanlıkları, işlevsel gereksinimler ve estetik beklentiler titizlikle değerlendirilir. Mobilya yerleşim planlarından aydınlatma tasarımına, renk paletinden doku seçimlerine kadar her detay bir bütünlük içinde kurgulanır. Ergonomi, akustik konfor, ısıl konfor ve havalandırma gibi teknik parametreler göz önünde bulundurularak, yaşanabilir ve sağlıklı mekanlar tasarlıyoruz.',
    'ic.p3': 'Malzeme seçiminde kalite, dayanıklılık ve estetik uyumu ön planda tutuyoruz. Doğal taş, ahşap, metal, cam ve tekstil ürünlerini ustalıkla bir araya getirerek özgün doku kombinasyonları oluşturuyoruz. Özel üretim mobilyalar, tasarım aydınlatma elemanları ve dekoratif aksesuarlar ile mekanlarınıza karakter kazandırıyoruz. Her materyal, hem görsel değeri hem de uzun ömürlülüğü gözetilerek seçilir.',
    'ic.p4': 'Aydınlatma tasarımı, iç mimarlık projelerimizin en kritik unsurlarından biridir. Genel aydınlatma, görev aydınlatması, vurgu aydınlatması ve dekoratif aydınlatma katmanlarını dengeli bir şekilde planlıyoruz. Doğal ışık kullanımını maksimize ederken, yapay aydınlatmada enerji verimliliği ve atmosfer yaratma hedeflerimizi birleştiriyoruz. Akıllı aydınlatma sistemleri ile mekanlarınızda farklı senaryolar oluşturabilirsiniz.',
    'ic.p5': 'Renk psikolojisi ve mekan algısı konusundaki uzmanlığımızla, mekanlarınıza istediğiniz ruhu katıyoruz. Sakin ve dinlendirici atmosferlerden enerjik ve ilham verici ortamlara kadar geniş bir yelpazede tasarımlar gerçekleştiriyoruz. Duvar kaplamaları, zemin döşemeleri, tavan tasarımları ve özel yapım detaylar ile mekanlarınızı özgün kılıyoruz.',
    'ic.p6': 'Uygulama sürecinde, seçilen tüm ürünlerin tedariki, imalat takibi ve montaj koordinasyonunu sağlıyoruz. Deneyimli uygulama ekiplerimiz ve kaliteli iş ortaklarımızla, tasarımın eksiksiz bir şekilde hayata geçmesini garanti ediyoruz. Proje teslim sonrası bakım ve revizyon desteği ile de yanınızda olmaya devam ediyoruz.',
    
    // İnşaat-Taahhüt Detay
    'insaat.p1': 'Denizport olarak, inşaat ve taahhüt hizmetlerimizde kalite, güvenilirlik ve zamanında teslim prensiplerine bağlı kalarak projelerinizi hayata geçiriyoruz. Deneyimli mühendis ve usta ekibimiz, modern inşaat teknikleri ve kaliteli malzemelerle, her türlü yapı inşaatında profesyonel çözümler sunuyoruz. Villa, konut, ticari yapı ve restorasyon projelerinde kapsamlı taahhüt hizmetleri sağlıyoruz.',
    'insaat.p2': 'İnşaat süreçlerimiz, detaylı planlama ve hazırlık aşaması ile başlar. Zemin etüdü, şantiye organizasyonu, iş güvenliği tedbirleri ve kalite kontrol sistemlerinin kurulumu titizlikle yapılır. İnşaat öncesi tüm ruhsat ve izinler tamamlanır, malzeme tedarik planı oluşturulur ve iş programı hazırlanır. Şantiye kurulumu, geçici tesis yapımı ve güvenlik önlemleri alınarak çalışmalar başlatılır.',
    'insaat.p3': 'Yapı inşaat aşamasında, temel kazı ve dolgu işlerinden üst yapı imalatına kadar her aşamada teknik kontrol ve kalite güvence sistemleri uygulanır. Betonarme iskelet yapımı, tuğla duvar örme, çatı sistemi kurulumu, dış cephe kaplamaları ve yalıtım uygulamaları mesleki standartlara uygun olarak gerçekleştirilir. Her aşamada statik hesaplamalar, malzeme testleri ve uygulama kontrolleri yapılarak yapı güvenliği sağlanır.',
    'insaat.p4': 'Mekanik ve elektrik tesisat uygulamalarında, ısıtma-soğutma sistemleri, su ve atık su tesisatı, elektrik panoları, aydınlatma altyapısı ve akıllı ev sistemleri profesyonelce kurulur. Enerji verimliliği hedeflenerek, yalıtım uygulamaları, VRF sistemler ve yenilenebilir enerji çözümleri entegre edilir. Yangın güvenlik sistemleri, hırsız alarm altyapısı ve kamera sistemleri gibi güvenlik uygulamaları da taahhüt kapsamında gerçekleştirilir.',
    'insaat.p5': 'İç ve dış mekan son kat uygulamalarında, zemin kaplamaları, sıva ve boya işleri, ahşap doğrama montajları, alüminyum doğrama uygulamaları ve cam montajı titizlikle yapılır. Peyzaj düzenlemesi, havuz yapımı, drenaj sistemleri ve bahçe aydınlatması gibi dış mekan çalışmaları da inşaat kapsamında tamamlanır. Her detay, onaylı projeler ve teknik şartnamelere uygun olarak uygulanır.',
    'insaat.p6': 'Proje teslim öncesi kapsamlı kontrol ve test işlemleri yapılır. Tüm tesisatların çalışma testleri, su ve hava sızdırmazlık kontrolleri, elektrik güvenlik testleri ve yapı performans değerlendirmeleri gerçekleştirilir. Nihai temizlik, peyzaj düzenlemesi ve çevre düzenlemesi tamamlanarak projeniz anahtar teslim olarak size sunulur. Garanti sürecinde bakım ve servis desteğimiz devam eder.',
    
    // Restorasyon Detay
    'restorasyon.p1': 'Denizport Restorasyon ve Yenileme hizmetleri ile mevcut yapılarınıza yeni bir hayat veriyoruz. Tarihi dokuyu koruma, eski yapıları güçlendirme ve modern yaşam standartlarına uygun hale getirme konusunda uzmanlaşmış ekibimizle, her türlü restorasyon projesinde profesyonel çözümler sunuyoruz. Geleneksel mimari değerleri korurken, yapıların işlevselliğini ve konforunu artırıyoruz.',
    'restorasyon.p2': 'Restorasyon projelerimiz, kapsamlı bir hasar tespit ve yapısal analiz çalışması ile başlar. Rölöve alımı, malzeme analizleri, statik değerlendirme ve taşıyıcı sistem kontrolleri yapılır. Yapının geçirdiği değişiklikler, hasarlar ve eskimeler detaylı olarak belgelenir. Koruma kurulu onayları, tarihi yapı raporları ve restorasyon ruhsatı süreçlerinde aktif destek sağlıyoruz.',
    'restorasyon.p3': 'Yapısal güçlendirme çalışmalarında, deprem dayanımını artırma, çatlak onarımları, nem ve rutubet sorunlarının giderilmesi, temel takviyesi ve taşıyıcı sistem iyileştirmeleri gerçekleştirilir. Karbon fiber takviye, enjeksiyon teknikleri, çelik destekleme ve modern sismik yalıtım yöntemleri kullanılarak yapıların güvenliği sağlanır. Tüm müdahaleler, yapının özgün karakterini koruyarak minimal invaziv tekniklerle uygulanır.',
    'restorasyon.p4': 'Cephe yenileme çalışmalarında, orijinal malzeme ve tekniklere sadık kalınarak taş temizliği, derz tamirleri, sıva restorasyonu ve boya uygulamaları yapılır. Geleneksel ahşap doğramalar restore edilir veya özgün detaylarına uygun olarak yeniden imal edilir. Tarihi kiremit çatılar, ahşap konstrüksiyonlar ve dekoratif elemanlar özgün ustalık teknikleri ile onarılır.',
    'restorasyon.p5': 'Modern konfor standartlarını sağlamak için tesisat yenileme çalışmaları yapılır. Isıtma-soğutma sistemleri, su ve elektrik tesisatı, yangın güvenlik sistemleri ve akıllı ev teknolojileri, yapının özgün dokusuna zarar vermeden entegre edilir. Gizli tesisat geçişleri, estetik klima çözümleri ve enerji verimliliği sağlayan modern sistemler kullanılır.',
    'restorasyon.p6': 'Yenileme projelerinde, iç mekan düzenlemesi, mutfak ve banyo yenileme, zemin döşeme değişimi, aydınlatma modernizasyonu ve dekoratif yenileme çalışmaları gerçekleştirilir. Eski yapıların ruhunu koruyarak, çağdaş yaşam ihtiyaçlarına cevap veren mekanlar yaratıyoruz. Projelerinizi zamanında, bütçe kontrolü ile teslim ediyor ve garanti kapsamında uzun vadeli destek sağlıyoruz.',
    
    // 3D Modelleme Detay
    '3d.p1': 'Denizport 3D Görselleştirme ve Modelleme hizmetleri ile projenizi inşaat başlamadan önce gerçekçi bir şekilde deneyimleme fırsatı sunuyoruz. Fotorealistik render\'lar, sanal turlar ve animasyonlarla, tasarımınızın her detayını görselleştiriyor, değişiklik ve iyileştirmeleri inşaat öncesinde yapma olanağı sağlıyoruz. Bu sayede hem maliyet hem zaman tasarrufu sağlanırken, sonucun tam olarak beklentilerinize uygun olması garantilenir.',
    '3d.p2': '3D modelleme sürecimiz, mimari projelerin dijital ortamda detaylı olarak oluşturulması ile başlar. BIM (Building Information Modeling) yazılımları kullanarak, yapının tüm bileşenlerini, malzemeleri ve teknik detayları içeren parametrik modeller oluşturuyoruz. Bu modeller sayesinde, farklı tasarım alternatifleri hızlıca değerlendirilebilir, mekansal ilişkiler analiz edilir ve optimum çözüme ulaşılır.',
    '3d.p3': 'Fotorealistik görselleştirme çalışmalarında, gelişmiş render motorları ve fizik tabanlı materyal sistemleri kullanıyoruz. Doğal ışık simülasyonları, gerçek malzeme dokuları, gölge ve yansıma hesaplamaları ile fotoğraf kalitesinde görseller üretiyoruz. Farklı zaman dilimlerinde, farklı hava koşullarında ve farklı açılardan render\'lar hazırlayarak projenizin tüm atmosferini yansıtıyoruz.',
    '3d.p4': 'Sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) teknolojileri ile interaktif sunum deneyimleri sunuyoruz. VR gözlükleri ile projenizin içinde sanal olarak yürüyebilir, mekan ölçülerini ve mobilya yerleşimini bire bir deneyimleyebilirsiniz. AR uygulamaları ile ise, gerçek arazi üzerinde projenizin nasıl görüneceğini canlı olarak görebilirsiniz. Bu teknolojiler, müşteri sunumlarında ve satış süreçlerinde büyük avantaj sağlar.',
    '3d.p5': 'Animasyon ve walkthrough hizmetlerimiz ile projenizin dinamik sunumunu hazırlıyoruz. Kamera hareketleri, geçiş efektleri ve müzik eşliğinde hazırlanan videolar, projenizin tüm özelliklerini etkileyici bir şekilde anlatır. Gün ışığı değişimi, mevsimsel farklılıklar ve peyzaj gelişimi gibi zamansal değişimleri de animasyonlarda gösterebiliyoruz.',
    '3d.p6': 'Teknik çizim ve sunum paftalarının hazırlanmasında, 3D modellerden otomatik olarak plan, kesit ve görünüş çizimleri üretiyoruz. Malzeme listesi, maliyet hesaplamaları ve inşaat planlaması gibi teknik verileri de modelden elde ediyoruz. Projenizin pazarlama materyalleri, satış ofisi görselleri ve web sitesi içerikleri için profesyonel görseller hazırlıyoruz.',
    
    // Danışmanlık Detay
    'danismanlik.p1': 'Denizport Danışmanlık ve Proje Yönetimi hizmetleri ile inşaat projelerinizin her aşamasında profesyonel rehberlik ve koordinasyon desteği sağlıyoruz. Fikir aşamasından projenin teslim ve işletmeye alınmasına kadar tüm süreçleri yöneterek, zaman, maliyet ve kalite hedeflerinize ulaşmanızı garanti ediyoruz. Deneyimli proje yöneticilerimiz ve teknik danışmanlarımızla, karmaşık inşaat süreçlerini şeffaf, verimli ve kontrollü bir şekilde yürütüyoruz.',
    'danismanlik.p2': 'Proje başlangıç aşamasında, fizibilite etüdleri, arazi analizi, yasal mevzuat araştırması ve ekonomik değerlendirme çalışmaları yapıyoruz. Yatırım bütçesi oluşturma, finansman planlaması ve risk analizi ile projenizin gerçekleştirilebilirliğini değerlendiriyoruz. Arsa seçimi, imar durumu sorgulaması, zemin etüdü ve çevresel etki değerlendirmesi gibi ön çalışmalarda danışmanlık hizmeti sunuyoruz.',
    'danismanlik.p3': 'Tasarım aşamasında, mimar, mühendis ve yüklenici seçimi süreçlerinde danışmanlık yapıyoruz. Teklif değerlendirme, kalite-fiyat analizi ve referans kontrolü ile doğru iş ortaklarının seçilmesini sağlıyoruz. Sözleşme hazırlama, teknik şartname oluşturma ve proje programı planlaması gibi kritik süreçleri yönetiyoruz. Tasarım alternatiflerinin değerlendirilmesi, maliyet optimizasyonu ve değer mühendisliği çalışmaları yapılır.',
    'danismanlik.p4': 'İnşaat sürecinde, şantiye koordinasyonu, kalite kontrol, hakediş takibi ve iş programı yönetimi sağlıyoruz. Düzenli şantiye ziyaretleri ile uygulamaların projeye uygunluğunu kontrol ediyor, sorunları anında tespit edip çözüm üretiyoruz. Malzeme onayları, numune değerlendirmeleri ve teknik detay çözümleri konularında aktif rol alıyoruz. Yüklenici performansını izliyor, iş güvenliği tedbirlerini kontrol ediyor ve çevre düzenini takip ediyoruz.',
    'danismanlik.p5': 'Bütçe yönetimi ve maliyet kontrolü hizmetlerimiz ile projenizin finansal disiplin içinde ilerlemesini sağlıyoruz. Hakediş raporları hazırlıyor, ek iş ve değişiklik taleplerini değerlendiriyor, maliyet artışlarını kontrol ediyoruz. Nakit akışı planlaması, ödeme şartları yönetimi ve finansal raporlama ile bütçenizin şeffaf bir şekilde takibini yapıyoruz.',
    'danismanlik.p6': 'Proje teslim aşamasında, son kontroller, test ve devreye alma işlemlerini koordine ediyoruz. Yapı kullanma izni, iskân ruhsatı ve diğer yasal süreçlerde destek sağlıyoruz. Garanti süreçlerinin yönetimi, bakım planlarının oluşturulması ve kullanıcı eğitimleri ile projenizin uzun vadeli başarısını güvence altına alıyoruz. Teslim sonrası periyodik kontroller ve bakım hizmetleri ile yanınızda olmaya devam ediyoruz.',
    
    // İletişim
    'contact.hero.tag': 'İLETİŞİM',
    'contact.hero.title': 'Hayalinizdeki proje için bizimle iletişime geçin',
    'contact.office': 'Satış Ofisi',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.address': 'Adres',
    
    // Proje Detay
    'project.salesOffice': 'SATIŞ OFİSİ',
    'project.salesCta': 'Satış Ofisimizle İletişime Geçin',
    'project.salesTitle': 'hakkında detaylı bilgi alın',
    'project.gallery': 'Proje Galerisi',
    'project.type.brutAlan': 'BRÜT ALAN (m²)',
    'project.type.netAlan': 'NET ALAN (m²)',
    'project.type.odaDuzeni': 'ODA DÜZENİ',
    'project.type.yatakOdasi': 'YATAK ODASI',
    'project.type.banyo': 'BANYO',
    'project.type.teras': 'TERAS (m²)',
    'project.type.bahce': 'BAHÇE (m²)',
    'project.type.otopark': 'OTOPARK',
    'project.type.ozellikler': 'ÖZELLİKLER',
    
    // Taşevler Proje Açıklaması
    'tasevler.p1': 'Bu özel proje, yatay mimari yaklaşımı, taş ve doğal dokularla harmanlanan sofistike hatları ve geniş cam yüzeyleriyle ferah, şık ve zamansız bir yaşam alanı sunuyor. Teraslı bahçeler, özel açık alanlar ve panoramik peyzaj tasarımıyla her bir birim kendine ait ayrıcalıklı bir yaşam sunarken, güneş ışığının gün boyu içeri süzüldüğü geniş yaşam alanları modern konforu doğanın huzuruyla buluşturuyor.',
    'tasevler.p2': 'Her detay titizlikle düşünülmüş; doğaltaş duvarlardan peyzajın akışını takip eden yumuşak merdiven hatlarına, gizli aydınlatmalardan özel oturma alanlarına kadar her unsur, sakin ve prestijli bir atmosfer yaratıyor. Sessizlik, mahremiyet ve yüksek yaşam standardı bu projede lüksün doğal haline dönüşüyor.',
    'tasevler.p3': 'Hem yaşam alanı hem de yatırım değeri açısından öne çıkan proje, yükselen bir bölgede seçkin bir yaşam vadederken sınırlı sayıda birimle gerçek anlamda ayrıcalıklı bir deneyim sunuyor. Şehrin karmaşasından uzak, doğanın içinde; ancak elit sosyal yaşam ve ulaşım akslarına bir adım mesafede.',
    
    // Footer
    'footer.company': 'Şirket',
    'footer.copyright': '© 2025 Denizport İnşaat Otomotiv A.Ş.',
    'footer.rights': 'Tüm hakları saklıdır. Bu sitenin tüm içeriği telif hakkı ile korunmaktadır.',
    
    // Hizmet Detay Ortak
    'service.back': 'Geri',
    'service.tag': 'HİZMETLER',
    'service.cta.tag': 'BİRLİKTE ÇALIŞALIM',
    'service.cta.title': 'Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim',
    'service.cta.button': 'İletişime Geçin',
  },
  en: {
    // Header/Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Ana Sayfa
    'home.hero.title': 'Let\'s design your dream living space together',
    'home.about.text': 'Denizport designs luxury living spaces where modern architectural understanding meets aesthetics. Away from the noise of the city, in harmony with nature, we elevate your living standards with our projects where every detail is carefully considered. In spaces where comfort, elegance and innovative design come together, we turn your dream home into reality.',
    'home.projects.tag': 'PROJECTS',
    'home.projects.title': 'Details designed with a pursuit of perfection in every project.',
    'home.projects.cta': 'All Projects',
    'home.services.tag': 'SERVICES',
    'home.services.title': 'Professional support at every stage, flawless results',
    'home.services.cta': 'All Services',
    
    // Projeler
    'projects.hero.tag': 'PROJECTS',
    'projects.hero.title': 'Projects where luxury and aesthetics meet',
    'projects.cta.tag': 'OUR PROJECTS',
    'projects.cta.title': 'Contact us to discuss the details of our projects you are interested in',
    'projects.cta.button': 'Contact Us',
    
    // Hizmetler
    'services.hero.tag': 'SERVICES',
    'services.hero.title': 'Professional support at every stage, flawless results',
    'services.mimari.title': 'Architectural Project & Design',
    'services.mimari.desc': 'We design your dream project with modern and functional architectural solutions.',
    'services.ic.title': 'Interior Architecture & Decoration',
    'services.ic.desc': 'We bring your living spaces together with aesthetics and comfort.',
    'services.insaat.title': 'Construction & Contracting Services',
    'services.insaat.desc': 'Reliable construction processes with professional team and quality materials.',
    'services.restorasyon.title': 'Restoration & Renovation',
    'services.restorasyon.desc': 'We bring a new breath to your existing structures.',
    'services.3d.title': '3D Visualization & Modeling',
    'services.3d.desc': 'We visualize your project before completion.',
    'services.danismanlik.title': 'Consulting & Project Management',
    'services.danismanlik.desc': 'We manage your projects from start to finish with professional consulting.',
    
    // Mimari Proje Detay (EN)
    'mimari.p1': 'As Denizport, we approach each project as a unique living space and bring together aesthetics, functionality and sustainability in the architectural design process. Our innovative solutions combined with modern architectural understanding transform our clients\' dreams into reality without compromising environmental awareness and quality standards.',
    'mimari.p2': 'Our architectural projects begin with a comprehensive analysis and planning process. We establish the foundation of your project with site studies, topographic surveys, soil analyses and environmental assessments. At this stage, compliance with local regulations, building heights, floor area ratios and construction conditions are examined in detail. We strive to maximize the potential of the land while preserving and enhancing the natural landscape.',
    'mimari.p3': 'Our experienced architectural team meticulously plans every detail from the concept stage to implementation projects. We provide professional support at all stages, from site plans to facade design, from interior arrangements to landscape planning. Each project is designed with a unique identity, taking into account the topographic features of the land, climatic conditions and user needs.',
    'mimari.p4': 'During the technical drawing and detailing process, structural system selection, material specifications, installation plans and energy efficiency calculations are made. Using BIM (Building Information Modeling) technology, we model all components of your project digitally and identify potential problems before construction. This approach not only saves time and cost, but also increases implementation quality.',
    'mimari.p5': 'Natural light use, space efficiency, energy saving and harmony with the environment are at the forefront of our architectural projects. We apply sustainable design principles such as passive heating and cooling strategies, natural ventilation systems, rainwater collection and recycling solutions. By blending traditional and modern elements, we create timeless designs and provide comprehensive architectural services for villas, residences, commercial spaces and mixed-use projects.',
    'mimari.p6': 'We are with you at every stage of your project; we manage all architectural processes from pre-feasibility studies to permit processes, from 3D visualizations to technical detail projects, and design your dream living space down to the finest detail. We provide active support in municipal approval processes, prepare all necessary documentation and ensure that your project is implemented smoothly.',
    
    // İç Mimarlık Detay (EN)
    'ic.p1': 'With Denizport Interior Architecture and Decoration services, we transform your living spaces into aesthetic and functional spaces that reflect your personality. We develop unique concepts for each project, optimizing space usage while maintaining visual richness and comfort standards at the highest level. By combining modern design understanding with timeless aesthetics, we offer you custom interior solutions.',
    'ic.p2': 'Our interior architecture projects begin with detailed space analysis. User profile, lifestyle habits, functional requirements and aesthetic expectations are carefully evaluated. Every detail from furniture layout plans to lighting design, from color palette to texture selections is constructed in integrity. We design livable and healthy spaces considering technical parameters such as ergonomics, acoustic comfort, thermal comfort and ventilation.',
    'ic.p3': 'We prioritize quality, durability and aesthetic harmony in material selection. We create unique texture combinations by masterfully bringing together natural stone, wood, metal, glass and textile products. We give character to your spaces with custom-made furniture, designer lighting elements and decorative accessories. Each material is selected with both visual value and longevity in mind.',
    'ic.p4': 'Lighting design is one of the most critical elements of our interior architecture projects. We balance general lighting, task lighting, accent lighting and decorative lighting layers. While maximizing the use of natural light, we combine our goals of energy efficiency and atmosphere creation in artificial lighting. With smart lighting systems, you can create different scenarios in your spaces.',
    'ic.p5': 'With our expertise in color psychology and space perception, we bring the spirit you want to your spaces. We create designs in a wide range from calm and relaxing atmospheres to energetic and inspiring environments. We make your spaces unique with wall coverings, floor coverings, ceiling designs and custom-made details.',
    'ic.p6': 'During the implementation process, we ensure the procurement, production follow-up and assembly coordination of all selected products. With our experienced implementation teams and quality business partners, we guarantee that the design is implemented completely. We continue to be with you with maintenance and revision support after project delivery.',
    
    // İnşaat-Taahhüt Detay (EN)
    'insaat.p1': 'As Denizport, we implement your projects by adhering to the principles of quality, reliability and timely delivery in our construction and contracting services. Our experienced team of engineers and craftsmen offer professional solutions in all types of building construction with modern construction techniques and quality materials. We provide comprehensive contracting services in villa, residential, commercial building and restoration projects.',
    'insaat.p2': 'Our construction processes begin with a detailed planning and preparation phase. Soil survey, site organization, occupational safety measures and establishment of quality control systems are meticulously carried out. All permits and permissions are completed before construction, material supply plan is created and work program is prepared. Works are initiated by setting up the construction site, building temporary facilities and taking safety measures.',
    'insaat.p3': 'During the building construction phase, technical control and quality assurance systems are applied at every stage from foundation excavation and filling to superstructure construction. Reinforced concrete skeleton construction, brick wall masonry, roof system installation, exterior facade cladding and insulation applications are carried out in accordance with professional standards. Building safety is ensured by performing static calculations, material tests and application controls at each stage.',
    'insaat.p4': 'In mechanical and electrical installation applications, heating-cooling systems, water and waste water installations, electrical panels, lighting infrastructure and smart home systems are professionally installed. Targeting energy efficiency, insulation applications, VRF systems and renewable energy solutions are integrated. Security applications such as fire safety systems, burglar alarm infrastructure and camera systems are also implemented within the scope of contracting.',
    'insaat.p5': 'In interior and exterior finishing applications, floor coverings, plastering and painting works, wooden joinery assemblies, aluminum joinery applications and glass installation are meticulously carried out. Exterior works such as landscaping, pool construction, drainage systems and garden lighting are also completed within the scope of construction. Every detail is applied in accordance with approved projects and technical specifications.',
    'insaat.p6': 'Comprehensive control and testing procedures are performed before project delivery. Operating tests of all installations, water and air tightness controls, electrical safety tests and building performance evaluations are carried out. Your project is presented to you turnkey by completing final cleaning, landscaping and environmental arrangements. Our maintenance and service support continues during the warranty period.',
    
    // Restorasyon Detay (EN)
    'restorasyon.p1': 'With Denizport Restoration and Renovation services, we give new life to your existing structures. With our team specialized in preserving historical fabric, strengthening old buildings and adapting them to modern living standards, we offer professional solutions in all kinds of restoration projects. While preserving traditional architectural values, we increase the functionality and comfort of buildings.',
    'restorasyon.p2': 'Our restoration projects begin with a comprehensive damage detection and structural analysis study. Surveying, material analysis, static evaluation and load-bearing system controls are carried out. Changes, damages and deterioration of the building are documented in detail. We provide active support in conservation board approvals, historical building reports and restoration permit processes.',
    'restorasyon.p3': 'In structural strengthening works, increasing earthquake resistance, crack repairs, elimination of moisture and humidity problems, foundation reinforcement and load-bearing system improvements are realized. The safety of buildings is ensured by using carbon fiber reinforcement, injection techniques, steel support and modern seismic isolation methods. All interventions are applied with minimal invasive techniques while preserving the original character of the building.',
    'restorasyon.p4': 'In facade renovation works, stone cleaning, joint repairs, plaster restoration and painting applications are carried out by remaining faithful to original materials and techniques. Traditional wooden joinery is restored or re-manufactured in accordance with its original details. Historical tile roofs, wooden constructions and decorative elements are repaired with original craftsmanship techniques.',
    'restorasyon.p5': 'Installation renovation works are carried out to provide modern comfort standards. Heating-cooling systems, water and electricity installations, fire safety systems and smart home technologies are integrated without damaging the original fabric of the building. Hidden installation passages, aesthetic air conditioning solutions and modern systems that provide energy efficiency are used.',
    'restorasyon.p6': 'In renovation projects, interior space arrangement, kitchen and bathroom renovation, floor covering change, lighting modernization and decorative renovation works are carried out. We create spaces that respond to contemporary living needs while preserving the spirit of old buildings. We deliver your projects on time, with budget control and provide long-term support under warranty.',
    
    // 3D Modelleme Detay (EN)
    '3d.p1': 'With Denizport 3D Visualization and Modeling services, we offer you the opportunity to experience your project realistically before construction begins. With photorealistic renders, virtual tours and animations, we visualize every detail of your design and enable you to make changes and improvements before construction. This way, both cost and time savings are achieved while guaranteeing that the result exactly meets your expectations.',
    '3d.p2': 'Our 3D modeling process begins with the detailed creation of architectural projects in digital environment. Using BIM (Building Information Modeling) software, we create parametric models containing all components, materials and technical details of the building. Thanks to these models, different design alternatives can be quickly evaluated, spatial relationships are analyzed and the optimum solution is reached.',
    '3d.p3': 'In photorealistic visualization works, we use advanced render engines and physics-based material systems. We produce photo-quality images with natural light simulations, real material textures, shadow and reflection calculations. We reflect the entire atmosphere of your project by preparing renders at different times of day, in different weather conditions and from different angles.',
    '3d.p4': 'We offer interactive presentation experiences with virtual reality (VR) and augmented reality (AR) technologies. With VR glasses, you can virtually walk inside your project and experience space dimensions and furniture placement one-to-one. With AR applications, you can see live how your project will look on real land. These technologies provide great advantages in customer presentations and sales processes.',
    '3d.p5': 'We prepare the dynamic presentation of your project with our animation and walkthrough services. Videos prepared with camera movements, transition effects and music impressively tell all the features of your project. We can also show temporal changes such as daylight change, seasonal differences and landscape development in animations.',
    '3d.p6': 'In preparing technical drawings and presentation sheets, we automatically produce plan, section and view drawings from 3D models. We also obtain technical data such as material list, cost calculations and construction planning from the model. We prepare professional visuals for your project marketing materials, sales office images and website content.',
    
    // Danışmanlık Detay (EN)
    'danismanlik.p1': 'With Denizport Consulting and Project Management services, we provide professional guidance and coordination support at every stage of your construction projects. By managing all processes from the idea stage to the delivery and commissioning of the project, we guarantee that you achieve your time, cost and quality goals. With our experienced project managers and technical consultants, we conduct complex construction processes in a transparent, efficient and controlled manner.',
    'danismanlik.p2': 'At the project initiation stage, we conduct feasibility studies, land analysis, legal regulation research and economic evaluation studies. We evaluate the feasibility of your project with investment budget creation, financing planning and risk analysis. We provide consultancy services in preliminary studies such as land selection, zoning status inquiry, soil survey and environmental impact assessment.',
    'danismanlik.p3': 'At the design stage, we provide consultancy in the selection processes of architects, engineers and contractors. We ensure the selection of the right business partners with bid evaluation, quality-price analysis and reference control. We manage critical processes such as contract preparation, technical specification creation and project schedule planning. Design alternatives are evaluated, cost optimization and value engineering studies are conducted.',
    'danismanlik.p4': 'During the construction process, we provide site coordination, quality control, progress payment tracking and work schedule management. With regular site visits, we check the compliance of applications with the project and immediately detect problems and produce solutions. We take an active role in material approvals, sample evaluations and technical detail solutions. We monitor contractor performance, check occupational safety measures and follow environmental regulations.',
    'danismanlik.p5': 'With our budget management and cost control services, we ensure that your project progresses within financial discipline. We prepare progress payment reports, evaluate additional work and change requests, and control cost increases. We track your budget transparently with cash flow planning, payment terms management and financial reporting.',
    'danismanlik.p6': 'At the project delivery stage, we coordinate final inspections, testing and commissioning operations. We provide support in building use permit, occupancy permit and other legal processes. We secure the long-term success of your project with warranty process management, maintenance plan creation and user training. We continue to be with you with periodic inspections and maintenance services after delivery.',
    
    // İletişim
    'contact.hero.tag': 'CONTACT',
    'contact.hero.title': 'Contact us for your dream project',
    'contact.office': 'Sales Office',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Proje Detay
    'project.salesOffice': 'SALES OFFICE',
    'project.salesCta': 'Contact Our Sales Office',
    'project.salesTitle': 'for detailed information',
    'project.gallery': 'Project Gallery',
    'project.type.brutAlan': 'GROSS AREA (m²)',
    'project.type.netAlan': 'NET AREA (m²)',
    'project.type.odaDuzeni': 'ROOM LAYOUT',
    'project.type.yatakOdasi': 'BEDROOMS',
    'project.type.banyo': 'BATHROOMS',
    'project.type.teras': 'TERRACE (m²)',
    'project.type.bahce': 'GARDEN (m²)',
    'project.type.otopark': 'PARKING',
    'project.type.ozellikler': 'FEATURES',
    
    // Taşevler Proje Açıklaması (EN)
    'tasevler.p1': 'This special project offers a spacious, elegant and timeless living space with its horizontal architectural approach, sophisticated lines blended with stone and natural textures, and large glass surfaces. While each unit offers a privileged life of its own with terraced gardens, private open spaces and panoramic landscape design, the spacious living areas where sunlight filters in throughout the day bring modern comfort together with the peace of nature.',
    'tasevler.p2': 'Every detail has been carefully considered; every element, from natural stone walls to soft staircase lines that follow the flow of the landscape, from hidden lighting to special seating areas, creates a calm and prestigious atmosphere. Silence, privacy and high living standards become the natural state of luxury in this project.',
    'tasevler.p3': 'The project, which stands out in terms of both living space and investment value, offers a truly exclusive experience with a limited number of units while promising a distinguished life in a rising region. Away from the chaos of the city, in the heart of nature; but just a step away from elite social life and transportation axes.',
    
    // Footer
    'footer.company': 'Company',
    'footer.copyright': '© 2025 Denizport Construction Automotive Inc.',
    'footer.rights': 'All rights reserved. All content on this site is protected by copyright.',
    
    // Hizmet Detay Ortak
    'service.back': 'Back',
    'service.tag': 'SERVICES',
    'service.cta.tag': 'LET\'S WORK TOGETHER',
    'service.cta.title': 'Let\'s turn your dream project into reality together',
    'service.cta.button': 'Contact Us',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    // LocalStorage'dan dil tercihini yükle
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'tr' || savedLang === 'en') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

