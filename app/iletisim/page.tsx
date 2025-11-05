"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Iletisim() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SEO Meta tags
    document.title = "İletişim | Denizport İnşaat";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Denizport İnşaat ile iletişime geçin. Konut ve villa projelerimiz, satılık konutlar ve inşaat hizmetleri hakkında bilgi almak için bizimle görüşün.');
    }
  }, []);

  useEffect(() => {
    // Google Maps script yükleme
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBw_K3Ih9_EhSWwk4pF6mfvfhjxo7R8Gs8&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    (window as any).initMap = () => {
      if (!mapRef.current) return;

      const location = { lat: 38.462919, lng: 27.215915 };
      
      const map = new (window as any).google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.attraction",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.government",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.medical",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.park",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.place_of_worship",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.school",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "all",
            elementType: "labels",
            stylers: [{ saturation: -70 }]
          }
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      new (window as any).google.maps.Marker({
        position: location,
        map: map,
        title: "Denizport"
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <>
      <Header alwaysVisible={true} />

      {/* Ana İçerik Alanı */}
      <div className="w-full min-h-screen md:h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div className="w-full px-4 sm:px-8 md:px-24 py-16 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            {/* Sol Taraf - İletişim Bilgileri */}
            <div className="flex flex-col justify-center gap-8 md:gap-24" style={{ paddingLeft: 'clamp(0px, 4vw, 250px)' }}>
              {/* Adres */}
              <div>
                <h3 className="text-xs sm:text-sm font-light tracking-wide text-gray-500 mb-3 md:mb-4 uppercase">Adres</h3>
                <p className="text-base md:text-lg font-light text-gray-900 leading-relaxed">
                  Kazım Dirik Mah. Mustafa Kemal Cad. No: 51/1-A<br />
                  Bornova, İzmir
                </p>
              </div>

              {/* İletişim */}
              <div>
                <h3 className="text-xs sm:text-sm font-light tracking-wide text-gray-500 mb-3 md:mb-4 uppercase">İletişim</h3>
                <div className="space-y-1">
                  <p className="text-base md:text-lg font-light text-gray-900">
                    <a href="mailto:info@denizport.com" className="hover:text-gray-600 transition-colors">
                      info@denizport.com
                    </a>
                  </p>
                  <p className="text-base md:text-lg font-light text-gray-900">
                    <a href="tel:+902323739012" className="hover:text-gray-600 transition-colors">
                      0232 373 90 12
                    </a>
                  </p>
                  <p className="text-base md:text-lg font-light text-gray-900">
                    <a href="tel:+905326303111" className="hover:text-gray-600 transition-colors">
                      0532 630 31 11
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Google Harita */}
            <div className="flex justify-center items-center h-[300px] sm:h-[400px] md:h-[600px] w-full overflow-visible px-2 sm:px-4 md:px-0">
              <div className="w-full md:w-[85%] h-full rounded-lg overflow-hidden">
                <div 
                  ref={mapRef}
                  className="w-full h-full rounded-lg"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

