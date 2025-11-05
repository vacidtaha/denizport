"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ekran boyutu kontrolü
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px altı = tablet/mobil
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Environment variable'lardan admin bilgilerini al
    const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    // Admin giriş kontrolü
    if (email === adminUsername && password === adminPassword) {
      // Başarılı giriş - session'a kaydet ve dashboard'a yönlendir
      localStorage.setItem("adminAuth", "true");
      router.push("/admin/dashboard");
    } else {
      // Hatalı giriş
      setError("Kullanıcı adı veya şifre hatalı!");
    }
  };

  // Mobil/Tablet uyarı ekranı
  if (isMobile) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        padding: '24px'
      }}>
        <div style={{
          maxWidth: '500px',
          textAlign: 'center',
          padding: '48px 32px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          border: '1px solid #e5e5e5'
        }}>
          {/* İkon */}
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 24px',
            backgroundColor: '#fef2f2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="40" height="40" fill="none" stroke="#dc2626" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Başlık */}
          <h1 style={{
            fontSize: '24px',
            fontWeight: '400',
            marginBottom: '12px',
            color: '#000'
          }}>
            Masaüstü Gerekli
          </h1>

          {/* Açıklama */}
          <p style={{
            fontSize: '15px',
            color: '#666',
            lineHeight: '1.6',
            marginBottom: '24px'
          }}>
            Admin paneline sadece masaüstü bilgisayarlardan erişebilirsiniz. 
            Lütfen daha büyük bir ekrandan tekrar deneyin.
          </p>

          {/* Ana Sayfaya Dön */}
          <a
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              fontSize: '14px',
              fontWeight: '400',
              color: '#fff',
              backgroundColor: '#1a0508',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sol Panel - Bordo */}
      <div 
        className="hidden lg:flex lg:w-1/2 items-center justify-center relative"
        style={{ backgroundColor: '#1a0508' }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
        
        <div className="relative z-10">
          <Image
            src="/denizport.png"
            alt="Denizport"
            width={450}
            height={112}
            className="w-auto h-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
            priority
          />
        </div>
      </div>

      {/* Sağ Panel - Beyaz */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full" style={{ maxWidth: '420px' }}>
          
          {/* Mobil Logo */}
          <div className="lg:hidden flex justify-center mb-16">
            <Image
              src="/denizport.png"
              alt="Denizport"
              width={200}
              height={50}
              className="w-auto h-auto"
              style={{ filter: 'brightness(0)' }}
              priority
            />
          </div>

          {/* Başlık */}
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{ 
              fontSize: '28px', 
              fontWeight: '300',
              color: '#000',
              marginBottom: '8px',
              lineHeight: '1.2'
            }}>
              Giriş Yap
            </h1>
            <p style={{ 
              fontSize: '15px', 
              color: '#999',
              fontWeight: '300'
            }}>
              Yönetim paneline hoş geldiniz
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            
            {/* Email Input */}
            <div style={{ marginBottom: '32px' }}>
              <label 
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: '#666',
                  marginBottom: '8px',
                  fontWeight: '400'
                }}
              >
                Yetkili Kullanıcı Adı
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Kullanıcı adınızı girin"
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  backgroundColor: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1a0508';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.backgroundColor = '#fafafa';
                }}
              />
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: '24px' }}>
              <label 
                htmlFor="password"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: '#666',
                  marginBottom: '8px',
                  fontWeight: '400'
                }}
              >
                Şifre
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  backgroundColor: '#fafafa'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#1a0508';
                  e.target.style.backgroundColor = '#fff';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.backgroundColor = '#fafafa';
                }}
              />
            </div>

            {/* Hata Mesajı */}
            {error && (
              <div style={{
                marginBottom: '24px',
                padding: '12px 16px',
                backgroundColor: '#fee',
                border: '1px solid #fcc',
                borderRadius: '8px',
                color: '#c33',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                {error}
              </div>
            )}

            {/* Giriş Butonu */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '15px',
                fontWeight: '400',
                color: '#fff',
                backgroundColor: '#1a0508',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Giriş Yap
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

