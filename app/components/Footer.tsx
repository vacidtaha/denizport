import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: '#1a0508', paddingTop: '40px', paddingBottom: '40px' }}>
      {/* Şirket Bağlantıları */}
      <div className="w-full mb-6 sm:mb-12 md:mb-20" style={{ paddingLeft: 'clamp(16px, 4vw, 96px)', paddingRight: 'clamp(16px, 4vw, 96px)' }}>
        <div className="relative w-full text-white" style={{ minHeight: 'auto' }}>
          {/* Şirket - Mobilde Sol, Masaüstünde Sağ */}
          <div className="relative md:absolute top-0 md:right-20 md:left-auto mb-8 md:mb-0" style={{ left: 'clamp(0px, 4vw, 120px)' }}>
            <h4 className="text-base md:text-lg font-medium mb-3 md:mb-4">Şirket</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="/" className="text-xs md:text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Ana Sayfa</a></li>
              <li><a href="/projeler" className="text-xs md:text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Projeler</a></li>
              <li><a href="/hizmetler" className="text-xs md:text-sm font-light opacity-80 hover:opacity-100 transition-opacity">Hizmetler</a></li>
              <li><a href="/iletisim" className="text-xs md:text-sm font-light opacity-80 hover:opacity-100 transition-opacity">İletişim</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo - Tam Ortada (Mobilde Gizli) */}
      <div className="hidden md:flex w-full justify-center items-center mb-8 md:mb-12 px-4 overflow-hidden">
        <Image
          src="/denizport.png"
          alt="Denizport Logo"
          width={500}
          height={300}
          className="w-auto h-auto max-w-[80%] md:max-w-[70%] sm:max-w-[60%] max-h-[50vh] object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      {/* Copyright ve Sosyal Medya */}
      <div className="relative text-white text-xs font-light flex flex-col md:flex-row md:justify-between md:items-start" style={{ paddingLeft: 'clamp(16px, 4vw, 96px)', paddingRight: 'clamp(16px, 4vw, 96px)' }}>
        {/* Copyright - Mobilde tam, Masaüstünde orta */}
        <div className="opacity-60 text-center md:text-left flex-1 mb-4 md:mb-0">
          <p>© 2025 Denizport İnşaat Otomotiv A.Ş.</p>
          <p className="mt-1 md:mt-2 text-xs">Tüm hakları saklıdır. Bu sitenin tüm içeriği telif hakkı ile korunmaktadır.</p>
        </div>

        {/* Sosyal Medya - Mobilde alt, masaüstüde sağ */}
        <div className="flex justify-center md:justify-end gap-4 md:gap-6 items-center">
          <a href="https://www.instagram.com/denizport/" className="text-white opacity-60 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
