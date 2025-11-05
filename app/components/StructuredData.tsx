"use client";

import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Denizport İnşaat",
      "description": "Konut projeleri, villa satışı, inşaat ve taahhüt hizmetleri. Mimari proje danışmanlığı.",
      "url": "https://denizport.com.tr",
      "logo": "https://denizport.com.tr/denizport.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR",
        "addressLocality": "Bodrum"
      },
      "sameAs": [
        // Sosyal medya linkleriniz buraya eklenebilir
      ],
      "knowsAbout": [
        "İnşaat ve Taahhüt",
        "Konut Projeleri",
        "Villa Satışı",
        "Gayrimenkul",
        "Mimari Proje",
        "İç Mimarlık",
        "Restorasyon"
      ]
    };

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "name": "Denizport İnşaat",
      "image": "https://denizport.com.tr/denizport.png",
      "@id": "https://denizport.com.tr",
      "url": "https://denizport.com.tr",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      }
    };

    // Script tag'i oluştur ve ekle
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script2);

    return () => {
      // Cleanup
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
}

