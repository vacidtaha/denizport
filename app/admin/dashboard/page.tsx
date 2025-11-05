"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProjectType {
  name: string;
  brutAlan: string;
  netAlan: string;
  odaSayisi: string;
  yatak: string;
  banyo: string;
  teras: string;
  bahce: string;
  otopark: string;
  planImage: string;
  features: string[];
}

interface Project {
  id: string;
  name: string;
  location: string;
  coverImage: string;
  description: string;
  types: ProjectType[];
  galleryImages: string[];
  slug: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'projects'>('projects');
  const [showProjectForm, setShowProjectForm] = useState(false);
  
  // Form states
  const [projectName, setProjectName] = useState('');
  const [location, setLocation] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [description, setDescription] = useState('');
  const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedHomeProjects, setSelectedHomeProjects] = useState<string[]>([]);

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth !== "true") {
      router.push("/admin");
    } else {
      setIsAuthenticated(true);
      loadProjects();
    }
  }, [router]);

  useEffect(() => {
    // Ekran boyutu kontrolü
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Projeleri yükle
  const loadProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
      
      // Projeler yüklendikten sonra ana sayfa ayarlarını kontrol et
      setTimeout(() => checkAndSetDefaultHomeProjects(data), 100);
    } catch (error) {
      console.error('Projeler yüklenemedi:', error);
    }
  };

  // İlk 4 projeyi otomatik seç (5+ proje varsa ve ayar yoksa)
  const checkAndSetDefaultHomeProjects = (loadedProjects: Project[]) => {
    const settings = localStorage.getItem('homePageSettings');
    
    if (loadedProjects.length <= 4) {
      // 4 veya daha az proje → Otomatik mod, seçim yok
      setSelectedHomeProjects([]);
      localStorage.removeItem('homePageSettings');
    } else if (loadedProjects.length >= 5) {
      // 5+ proje var
      if (!settings) {
        // Ayar yok → İlk 4'ü otomatik seç
        const firstFourIds = loadedProjects
          .sort((a, b) => parseInt(b.id) - parseInt(a.id))
          .slice(0, 4)
          .map(p => p.id);
        
        setSelectedHomeProjects(firstFourIds);
        
        // Kaydet
        const autoSettings = {
          selectedProjects: firstFourIds
        };
        localStorage.setItem('homePageSettings', JSON.stringify(autoSettings));
      } else {
        // Ayar var → Yükle
        const parsed = JSON.parse(settings);
        const selectedIds = parsed.selectedProjects || [];
        
        // Seçili projelerin hala var olup olmadığını kontrol et
        const validIds = selectedIds.filter((id: string) => 
          loadedProjects.some(p => p.id === id)
        );
        
        setSelectedHomeProjects(validIds);
      }
    }
  };


  // Ana sayfa ayarlarını kaydet
  const saveHomePageSettings = () => {
    if (selectedHomeProjects.length < 2) {
      alert('Ana sayfada en az 2 proje gösterilmelidir!');
      return;
    }
    if (selectedHomeProjects.length > 4) {
      alert('Ana sayfada en fazla 4 proje gösterilebilir!');
      return;
    }

    const settings = {
      selectedProjects: selectedHomeProjects
    };
    localStorage.setItem('homePageSettings', JSON.stringify(settings));
    
    setSuccessMessage('Ana sayfa ayarları kaydedildi!');
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  // Proje seçimi toggle
  const toggleProjectSelection = (projectId: string) => {
    if (selectedHomeProjects.includes(projectId)) {
      setSelectedHomeProjects(selectedHomeProjects.filter(id => id !== projectId));
    } else {
      if (selectedHomeProjects.length >= 4) {
        alert('Maksimum 4 proje seçebilirsiniz!');
        return;
      }
      setSelectedHomeProjects([...selectedHomeProjects, projectId]);
    }
  };

  // Slug oluştur (URL için)
  const createSlug = (text: string) => {
    const trMap: { [key: string]: string } = {
      'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
      'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
    };
    return text
      .split('')
      .map(char => trMap[char] || char)
      .join('')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  // Tip ekle
  const addProjectType = () => {
    if (projectTypes.length >= 5) {
      alert('Maksimum 5 tip ekleyebilirsiniz!');
      return;
    }
    setProjectTypes([...projectTypes, {
      name: '',
      brutAlan: '',
      netAlan: '',
      odaSayisi: '',
      yatak: '',
      banyo: '',
      teras: '',
      bahce: '',
      otopark: '',
      planImage: '',
      features: []
    }]);
  };

  // Tip sil
  const removeProjectType = (index: number) => {
    setProjectTypes(projectTypes.filter((_, i) => i !== index));
  };

  // Tip güncelle
  const updateProjectType = (index: number, field: keyof ProjectType, value: string) => {
    const updated = [...projectTypes];
    updated[index] = { ...updated[index], [field]: value };
    setProjectTypes(updated);
  };

  // Tipe özellik ekle
  const addFeatureToType = (typeIndex: number) => {
    const updated = [...projectTypes];
    if (updated[typeIndex].features.length >= 6) {
      alert('Bir tip için maksimum 6 özellik ekleyebilirsiniz!');
      return;
    }
    updated[typeIndex].features.push('');
    setProjectTypes(updated);
  };

  // Tipten özellik sil
  const removeFeatureFromType = (typeIndex: number, featureIndex: number) => {
    const updated = [...projectTypes];
    updated[typeIndex].features = updated[typeIndex].features.filter((_, i) => i !== featureIndex);
    setProjectTypes(updated);
  };

  // Tip özelliği güncelle
  const updateTypeFeature = (typeIndex: number, featureIndex: number, value: string) => {
    const updated = [...projectTypes];
    updated[typeIndex].features[featureIndex] = value;
    setProjectTypes(updated);
  };

  // Galeri fotoğrafını sil
  const removeGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
    setGalleryPreviews(galleryPreviews.filter((_, i) => i !== index));
  };

  // Projeyi kaydet
  const handleSaveProject = async () => {
    // Validasyon
    if (!projectName || !location || !coverImage || !description || galleryImages.length === 0) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    if (description.length > 2000) {
      alert('Açıklama metni 2000 karakteri geçemez!');
      return;
    }

    if (galleryImages.length < 4) {
      alert('En az 4 galeri fotoğrafı yüklemelisiniz!');
      return;
    }

    if (galleryImages.length > 20) {
      alert('En fazla 20 galeri fotoğrafı yükleyebilirsiniz!');
      return;
    }

    setIsLoading(true);
    setLoadingMessage('Proje kaydediliyor...');

    try {
      // Slug oluştur
      const slug = createSlug(projectName);

      // Kapak fotoğrafını sıkıştır ve base64'e çevir
      const coverImageBase64 = await compressAndConvertImage(coverImage, 1920);

      // Galeri fotoğraflarını sıkıştır ve base64'e çevir (daha küçük boyut)
      const galleryBase64 = await Promise.all(
        galleryImages.map(file => compressAndConvertImage(file, 1200))
      );

      // Yeni proje objesi
      const projectData = {
        id: Date.now().toString(),
        name: projectName,
        location: location,
        description,
        types: projectTypes,
        slug
      };

      // API'ye gönder
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: projectData,
          coverImageData: coverImageBase64,
          galleryImagesData: galleryBase64
        })
      });

      const result = await response.json();

      if (result.success) {
        // Projeleri yeniden yükle
        await loadProjects();
        
        // Formu temizle
        resetForm();
        setShowProjectForm(false);
        
        // Başarılı modal göster
        setSuccessMessage('Proje başarıyla kaydedildi!');
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 3000);
        
        // 5. proje eklendiyse otomatik seçim yap
        setTimeout(async () => {
          const refreshedResponse = await fetch('/api/projects');
          const refreshedProjects = await refreshedResponse.json();
          
          if (refreshedProjects.length === 5) {
            const currentSettings = localStorage.getItem('homePageSettings');
            if (!currentSettings) {
              // İlk 4 projeyi otomatik seç
              const firstFourIds = refreshedProjects
                .sort((a: any, b: any) => parseInt(b.id) - parseInt(a.id))
                .slice(0, 4)
                .map((p: any) => p.id);
              
              setSelectedHomeProjects(firstFourIds);
              
              const autoSettings = {
                selectedProjects: firstFourIds
              };
              localStorage.setItem('homePageSettings', JSON.stringify(autoSettings));
            }
          }
        }, 300);
      } else {
        throw new Error(result.error || 'Proje kaydedilemedi');
      }
    } catch (error) {
      console.error('Proje kaydedilemedi:', error);
      alert('Proje kaydedilirken bir hata oluştu!');
    } finally {
      setIsLoading(false);
    }
  };

  // Fotoğrafı sıkıştır ve base64'e çevir
  const compressAndConvertImage = (file: File, maxWidth: number = 1920): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Boyutu küçült
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          // JPEG olarak sıkıştır (kalite: 0.7)
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressedBase64);
        };
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  // Formu temizle
  const resetForm = () => {
    setProjectName('');
    setLocation('');
    setCoverImage(null);
    setCoverPreview('');
    setDescription('');
    setProjectTypes([]);
    setGalleryImages([]);
    setGalleryPreviews([]);
  };

  // Projeyi sil
  const handleDeleteProject = async (id: string, projectName: string) => {
    // Özel onay modalı göster
    const confirmDelete = confirm(
      `"${projectName}" projesini silmek istediğinizden emin misiniz?\n\n` +
      `Bu işlem geri alınamaz. Proje sayfası, fotoğrafları ve tüm verileri kalıcı olarak silinecektir.`
    );
    
    if (!confirmDelete) {
      return;
    }

    setIsLoading(true);
    setLoadingMessage('Proje siliniyor...');

    try {
      const response = await fetch('/api/projects', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });

      const result = await response.json();

      if (result.success) {
        // Projeleri yeniden yükle
        await loadProjects();
        
        // Eğer proje sayısı 4'e düştüyse manuel seçim ayarlarını temizle
        const updatedProjectCount = projects.length - 1;
        if (updatedProjectCount <= 4) {
          localStorage.removeItem('homePageSettings');
          setSelectedHomeProjects([]);
        }
        
        // Başarılı modal göster
        setSuccessMessage('Proje başarıyla silindi!');
        setShowSuccessModal(true);
        setTimeout(() => setShowSuccessModal(false), 3000);
      } else {
        throw new Error(result.error || 'Proje silinemedi');
      }
    } catch (error) {
      console.error('Proje silinemedi:', error);
      alert('Proje silinirken bir hata oluştu!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin");
  };

  if (!isAuthenticated) {
    return null;
  }

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

  const MenuItem = ({ active, onClick, icon, text }: any) => (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '400',
        color: active ? '#000' : '#666',
        backgroundColor: active ? '#f5f5f5' : 'transparent',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginBottom: '4px'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = '#fafafa';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {icon}
      {text}
    </button>
  );

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#fafafa' }}>
      {/* Sol Sidebar */}
      <div style={{
        width: '260px',
        backgroundColor: '#fff',
        borderRight: '1px solid #e5e5e5',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Logo */}
        <div style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <Image
            src="/denizport.png"
            alt="Denizport"
            width={140}
            height={35}
            style={{ filter: 'brightness(0)' }}
            priority
          />
        </div>

        {/* Navigation */}
        <div style={{ flex: 1, padding: '32px 16px' }}>
          <MenuItem
            active={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            text="Ana Sayfa Düzeni"
          />
          <MenuItem
            active={activeTab === 'projects'}
            onClick={() => setActiveTab('projects')}
            icon={
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            text="Projeler"
          />
        </div>

        {/* Çıkış */}
        <div style={{ padding: '16px', borderTop: '1px solid #f0f0f0' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: '400',
              color: '#666',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fef2f2';
              e.currentTarget.style.color = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#666';
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Çıkış Yap
          </button>
        </div>
      </div>

      {/* Sağ İçerik */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          height: '80px',
          backgroundColor: '#fff',
          borderBottom: '1px solid #e5e5e5',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px'
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: '300', color: '#000' }}>
            {activeTab === 'home' ? 'Ana Sayfa Düzeni' : 'Projeler'}
          </h1>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'auto', padding: '40px' }}>
          {activeTab === 'home' && (
            <div style={{ maxWidth: '1000px' }}>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '40px'
              }}>
                {projects.length <= 4 ? (
                  // 4 veya daha az proje varsa - Otomatik mod
                  <>
                    <h2 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '8px' }}>
                      Ana Sayfa Projeleri
                    </h2>
                    <p style={{ fontSize: '13px', color: '#999', marginBottom: '32px' }}>
                      Şu anda {projects.length} proje var. 4 proje olana kadar tüm projeler otomatik olarak ana sayfada görünür.
                    </p>
                    
                    <div style={{
                      padding: '32px',
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #86efac',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#10b981',
                        borderRadius: '50%',
                        margin: '0 auto 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="24" height="24" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px', color: '#000' }}>
                        Otomatik Mod Aktif
                      </h3>
                      <p style={{ fontSize: '14px', color: '#666' }}>
                        {projects.length === 0 && 'Henüz proje yok. İlk projenizi ekleyin.'}
                        {projects.length === 1 && 'Mevcut 1 proje ana sayfada görünüyor.'}
                        {projects.length > 1 && projects.length <= 4 && `Tüm ${projects.length} proje ana sayfada görünüyor.`}
                      </p>
                      {projects.length < 5 && projects.length > 0 && (
                        <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>
                          5. projeyi eklediğinizde manuel seçim sistemi devreye girecek.
                        </p>
                      )}
                    </div>
                    
                    {projects.length > 0 && (
                      <div style={{ marginTop: '32px' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '16px', color: '#000' }}>
                          Ana Sayfada Görünen Projeler
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {projects.map((project) => (
                            <div
                              key={project.id}
                              style={{
                                padding: '16px 20px',
                                border: '2px solid #10b981',
                                borderRadius: '8px',
                                backgroundColor: '#f0fdf4',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                              }}
                            >
                              <div>
                                <h4 style={{ fontSize: '15px', fontWeight: '400', marginBottom: '2px' }}>
                                  {project.name}
                                </h4>
                                <p style={{ fontSize: '12px', color: '#999' }}>{project.location}</p>
                              </div>
                              <div style={{
                                width: '24px',
                                height: '24px',
                                backgroundColor: '#10b981',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <svg width="14" height="14" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // 5+ proje varsa - Manuel seçim modu
                  <>
                    <h2 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '8px' }}>
                      Ana Sayfada Gösterilecek Projeler
                    </h2>
                    <p style={{ fontSize: '13px', color: '#999', marginBottom: '16px' }}>
                      5+ proje olduğu için manuel seçim modu aktif. İstediğiniz 2-4 projeyi seçebilirsiniz.
                    </p>
                    {selectedHomeProjects.length === 4 && (
                      <div style={{
                        padding: '12px 16px',
                        backgroundColor: '#f0f9ff',
                        border: '1px solid #bfdbfe',
                        borderRadius: '8px',
                        marginBottom: '24px'
                      }}>
                        <p style={{ fontSize: '12px', color: '#1d4ed8' }}>
                          ℹ️ Şu anda en yeni 4 proje otomatik seçili. İsterseniz değiştirebilirsiniz.
                        </p>
                      </div>
                    )}

                <div style={{ 
                  padding: '16px 20px', 
                  backgroundColor: '#f9f9f9', 
                  borderRadius: '8px',
                  marginBottom: '24px',
                  border: '1px solid #e5e5e5'
                }}>
                  <p style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>
                    Seçili Proje Sayısı: {selectedHomeProjects.length} / 4
                  </p>
                  {selectedHomeProjects.length < 2 && (
                    <p style={{ fontSize: '12px', color: '#dc2626', marginTop: '4px' }}>
                      ⚠️ En az 2 proje seçmelisiniz!
                    </p>
                  )}
                  {selectedHomeProjects.length >= 2 && selectedHomeProjects.length <= 4 && (
                    <p style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>
                      ✓ Seçim uygun
                    </p>
                  )}
                </div>

                {/* Tüm Projeler - Seçilebilir */}
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '500', marginBottom: '16px', color: '#000' }}>
                    Tüm Projeler
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Sadece Dinamik Projeler */}
                    {projects.length === 0 ? (
                      <div style={{
                        padding: '48px 20px',
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0'
                      }}>
                        <p style={{ fontSize: '14px', color: '#999' }}>
                          Henüz proje eklenmemiş. "Projeler" sekmesinden yeni proje ekleyin.
                        </p>
                      </div>
                    ) : (
                      projects.map((project) => (
                        <div
                          key={project.id}
                          onClick={() => toggleProjectSelection(project.id)}
                          style={{
                            padding: '16px 20px',
                            border: `2px solid ${selectedHomeProjects.includes(project.id) ? '#1a0508' : '#e0e0e0'}`,
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor: selectedHomeProjects.includes(project.id) ? '#f9f9f9' : '#fff',
                            transition: 'all 0.2s',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <div>
                            <h4 style={{ fontSize: '15px', fontWeight: '400', marginBottom: '2px' }}>
                              {project.name}
                            </h4>
                            <p style={{ fontSize: '12px', color: '#999' }}>{project.location}</p>
                          </div>
                          {selectedHomeProjects.includes(project.id) && (
                            <div style={{
                              width: '24px',
                              height: '24px',
                              backgroundColor: '#1a0508',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <svg width="14" height="14" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <button
                  onClick={saveHomePageSettings}
                  disabled={selectedHomeProjects.length < 2 || selectedHomeProjects.length > 4}
                  style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#fff',
                    backgroundColor: '#1a0508',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: selectedHomeProjects.length < 2 || selectedHomeProjects.length > 4 ? 'not-allowed' : 'pointer',
                    opacity: selectedHomeProjects.length < 2 || selectedHomeProjects.length > 4 ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (selectedHomeProjects.length >= 2 && selectedHomeProjects.length <= 4) {
                      e.currentTarget.style.opacity = '0.9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedHomeProjects.length >= 2 && selectedHomeProjects.length <= 4) {
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                >
                  Ayarları Kaydet
                </button>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div style={{ maxWidth: '1000px' }}>
              {!showProjectForm ? (
                // Proje Listesi
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    padding: '24px 32px',
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '400' }}>Tüm Projeler</h2>
                    <button
                      onClick={() => setShowProjectForm(true)}
                      style={{
                        padding: '10px 20px',
                        fontSize: '14px',
                        fontWeight: '400',
                        color: '#fff',
                        backgroundColor: '#1a0508',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <span>+</span>
                      Yeni Proje
                    </button>
                  </div>

                  {/* Sadece Dinamik Projeler */}
                  {projects.length === 0 ? (
                    <div style={{
                      padding: '48px 32px',
                      textAlign: 'center'
                    }}>
                      <p style={{ fontSize: '14px', color: '#999' }}>
                        Henüz eklenen proje yok. "Yeni Proje" butonuna tıklayarak proje ekleyebilirsiniz.
                      </p>
                    </div>
                  ) : (
                    projects.map((project) => (
                      <div
                        key={project.id}
                        style={{
                          padding: '24px 32px',
                          borderBottom: '1px solid #f0f0f0',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <h3 style={{ fontSize: '15px', fontWeight: '400', marginBottom: '4px' }}>
                            {project.name}
                          </h3>
                          <p style={{ fontSize: '13px', color: '#999' }}>{project.location}</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button 
                            onClick={() => window.open(`/projeler/${project.slug}`, '_blank')}
                            style={{
                              padding: '8px 16px',
                              fontSize: '13px',
                              color: '#666',
                              backgroundColor: 'transparent',
                              border: '1px solid #e0e0e0',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }}
                          >
                            Görüntüle
                          </button>
                          <button 
                            onClick={() => handleDeleteProject(project.id, project.name)}
                            style={{
                              padding: '8px 16px',
                              fontSize: '13px',
                              color: '#dc2626',
                              backgroundColor: 'transparent',
                              border: '1px solid #fecaca',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }}
                          >
                            Sil
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                // Yeni Proje Formu
                <div style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e5e5',
                  borderRadius: '12px',
                  padding: '40px'
                }}>
                  {/* Form Header */}
                  <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '400' }}>Yeni Proje Oluştur</h2>
                    <button
                      onClick={() => setShowProjectForm(false)}
                      style={{
                        padding: '8px 16px',
                        fontSize: '13px',
                        color: '#666',
                        backgroundColor: 'transparent',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      ← Geri
                    </button>
                  </div>

                  {/* 1. Hero Bilgileri */}
                  <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #f0f0f0' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                      1. Hero Bölümü (Kapak)
                    </h3>
                    
                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                        Proje Adı *
                      </label>
                      <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Örn: Dereköy Taş Evler"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '15px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                        Lokasyon *
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Örn: Dereköy, Gümüşlük"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '15px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                        Kapak Fotoğrafı *
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setCoverImage(file);
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setCoverPreview(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '14px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          outline: 'none',
                          marginBottom: '12px'
                        }}
                      />
                      {coverPreview && (
                        <div style={{ 
                          marginTop: '12px', 
                          padding: '12px', 
                          backgroundColor: '#f9f9f9', 
                          borderRadius: '8px',
                          border: '1px solid #e0e0e0'
                        }}>
                          <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: '500' }}>
                            ✓ Kapak fotoğrafı yüklendi
                          </p>
                          <img 
                            src={coverPreview} 
                            alt="Preview" 
                            style={{ 
                              width: '100%', 
                              maxHeight: '200px', 
                              objectFit: 'cover', 
                              borderRadius: '6px' 
                            }} 
                          />
                        </div>
                      )}
                      <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
                        Bu fotoğraf hero bölümünde tam ekran görünecek
                      </p>
                    </div>
                  </div>

                  {/* 2. Proje Açıklaması */}
                  <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #f0f0f0' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                      2. Proje Açıklaması
                    </h3>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                        Açıklama Metni *
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Proje hakkında detaylı açıklama yazın..."
                        rows={10}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '15px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          outline: 'none',
                          resize: 'vertical',
                          fontFamily: 'inherit',
                          lineHeight: '1.6'
                        }}
                      />
                      <p style={{ fontSize: '12px', color: description.length > 2000 ? '#dc2626' : '#999', marginTop: '8px' }}>
                        Bu metin hero bölümünün altında görünecek. Karakter sayısı: {description.length} / 2000
                        {description.length > 2000 && (
                          <span style={{ color: '#dc2626', display: 'block', marginTop: '4px', fontWeight: '500' }}>
                            ⚠️ Karakter limiti aşıldı!
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* 3. Proje Tipleri (Opsiyonel) */}
                  <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#000' }}>
                          3. Proje Tipleri (Opsiyonel)
                        </h3>
                        <p style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                          {projectTypes.length} / 5 tip eklendi
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={addProjectType}
                        disabled={projectTypes.length >= 5}
                        style={{
                          padding: '8px 16px',
                          fontSize: '13px',
                          fontWeight: '400',
                          color: projectTypes.length >= 5 ? '#999' : '#1a0508',
                          backgroundColor: 'transparent',
                          border: `1px solid ${projectTypes.length >= 5 ? '#e0e0e0' : '#1a0508'}`,
                          borderRadius: '6px',
                          cursor: projectTypes.length >= 5 ? 'not-allowed' : 'pointer',
                          opacity: projectTypes.length >= 5 ? 0.5 : 1
                        }}
                      >
                        + Tip Ekle
                      </button>
                    </div>

                    {projectTypes.length === 0 ? (
                      <p style={{ fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
                        Proje tipleri eklemek isterseniz "Tip Ekle" butonuna tıklayın (örn: Daire, Dublex)
                      </p>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {projectTypes.map((type, index) => (
                          <div 
                            key={index}
                            style={{
                              padding: '20px',
                              backgroundColor: '#f9f9f9',
                              borderRadius: '8px',
                              border: '1px solid #e0e0e0'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                              <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#000' }}>
                                Tip {index + 1}
                              </h4>
                              <button
                                type="button"
                                onClick={() => removeProjectType(index)}
                                style={{
                                  fontSize: '12px',
                                  color: '#dc2626',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  cursor: 'pointer'
                                }}
                              >
                                Sil
                              </button>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Tip Adı *
                                </label>
                                <input
                                  type="text"
                                  value={type.name}
                                  onChange={(e) => updateProjectType(index, 'name', e.target.value)}
                                  placeholder="Örn: Daire, Dublex"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Brüt Alan
                                </label>
                                <input
                                  type="text"
                                  value={type.brutAlan}
                                  onChange={(e) => updateProjectType(index, 'brutAlan', e.target.value)}
                                  placeholder="Örn: 85 m²"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Net Alan
                                </label>
                                <input
                                  type="text"
                                  value={type.netAlan}
                                  onChange={(e) => updateProjectType(index, 'netAlan', e.target.value)}
                                  placeholder="Örn: 71 m²"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Oda Düzeni
                                </label>
                                <input
                                  type="text"
                                  value={type.odaSayisi}
                                  onChange={(e) => updateProjectType(index, 'odaSayisi', e.target.value)}
                                  placeholder="Örn: 2+1"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Yatak Odası
                                </label>
                                <input
                                  type="text"
                                  value={type.yatak}
                                  onChange={(e) => updateProjectType(index, 'yatak', e.target.value)}
                                  placeholder="Örn: 2"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Banyo
                                </label>
                                <input
                                  type="text"
                                  value={type.banyo}
                                  onChange={(e) => updateProjectType(index, 'banyo', e.target.value)}
                                  placeholder="Örn: 2"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Teras
                                </label>
                                <input
                                  type="text"
                                  value={type.teras}
                                  onChange={(e) => updateProjectType(index, 'teras', e.target.value)}
                                  placeholder="Örn: 15 m² veya -"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Bahçe
                                </label>
                                <input
                                  type="text"
                                  value={type.bahce}
                                  onChange={(e) => updateProjectType(index, 'bahce', e.target.value)}
                                  placeholder="Örn: 100 m²"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Otopark
                                </label>
                                <input
                                  type="text"
                                  value={type.otopark}
                                  onChange={(e) => updateProjectType(index, 'otopark', e.target.value)}
                                  placeholder="Örn: 2 Açık, 1 Kapalı"
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                              </div>

                              <div style={{ gridColumn: '1 / -1' }}>
                                <label style={{ display: 'block', fontSize: '12px', color: '#666', marginBottom: '6px' }}>
                                  Plan Görseli
                                </label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      const base64 = await compressAndConvertImage(file, 1200);
                                      updateProjectType(index, 'planImage', base64);
                                    }
                                  }}
                                  style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    fontSize: '13px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '6px',
                                    outline: 'none'
                                  }}
                                />
                                {type.planImage && (
                                  <div style={{ marginTop: '12px' }}>
                                    <img 
                                      src={type.planImage} 
                                      alt="Plan preview"
                                      style={{
                                        width: '100%',
                                        maxHeight: '150px',
                                        objectFit: 'contain',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '6px',
                                        padding: '8px',
                                        backgroundColor: '#fff'
                                      }}
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Özellikler */}
                              <div style={{ gridColumn: '1 / -1', marginTop: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                  <label style={{ fontSize: '12px', color: '#666' }}>
                                    Özellikler (Opsiyonel)
                                  </label>
                                  <button
                                    type="button"
                                    onClick={() => addFeatureToType(index)}
                                    disabled={type.features.length >= 6}
                                    style={{
                                      padding: '6px 12px',
                                      fontSize: '11px',
                                      fontWeight: '400',
                                      color: type.features.length >= 6 ? '#999' : '#1a0508',
                                      backgroundColor: 'transparent',
                                      border: `1px solid ${type.features.length >= 6 ? '#e0e0e0' : '#1a0508'}`,
                                      borderRadius: '4px',
                                      cursor: type.features.length >= 6 ? 'not-allowed' : 'pointer',
                                      opacity: type.features.length >= 6 ? 0.5 : 1
                                    }}
                                  >
                                    + Özellik
                                  </button>
                                </div>
                                
                                {type.features.length === 0 ? (
                                  <p style={{ fontSize: '11px', color: '#999', fontStyle: 'italic' }}>
                                    Özellik eklemek için "+ Özellik" butonuna tıklayın (Örn: Kapanmaz deniz manzarası, Özel havuz)
                                  </p>
                                ) : (
                                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                    {type.features.map((feature, featureIndex) => (
                                      <div 
                                        key={featureIndex}
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '6px'
                                        }}
                                      >
                                        <input
                                          type="text"
                                          value={feature}
                                          onChange={(e) => updateTypeFeature(index, featureIndex, e.target.value)}
                                          placeholder={`Özellik ${featureIndex + 1}`}
                                          style={{
                                            flex: 1,
                                            padding: '8px 10px',
                                            fontSize: '12px',
                                            border: '1px solid #e0e0e0',
                                            borderRadius: '4px',
                                            outline: 'none'
                                          }}
                                        />
                                        <button
                                          type="button"
                                          onClick={() => removeFeatureFromType(index, featureIndex)}
                                          style={{
                                            padding: '6px 8px',
                                            fontSize: '11px',
                                            color: '#dc2626',
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer'
                                          }}
                                        >
                                          ×
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                <p style={{ fontSize: '11px', color: '#999', marginTop: '8px' }}>
                                  {type.features.length} / 6 özellik eklendi
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 4. Galeri Fotoğrafları */}
                  <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #f0f0f0' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '24px', color: '#000' }}>
                      4. Galeri Fotoğrafları
                    </h3>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', color: '#666', marginBottom: '8px' }}>
                        Proje Görselleri *
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                          const newFiles = Array.from(e.target.files || []);
                          
                          // Mevcut fotoğraflara EKLE (değiştirme)
                          const updatedFiles = [...galleryImages, ...newFiles];
                          setGalleryImages(updatedFiles);
                          
                          // Yeni fotoğrafların preview'larını oluştur ve mevcut preview'lara ekle
                          const newPreviews: string[] = [];
                          newFiles.forEach((file, index) => {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              newPreviews.push(reader.result as string);
                              if (newPreviews.length === newFiles.length) {
                                setGalleryPreviews([...galleryPreviews, ...newPreviews]);
                              }
                            };
                            reader.readAsDataURL(file);
                          });
                          
                          // Input'u temizle (aynı dosyayı tekrar seçebilmek için)
                          e.target.value = '';
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '14px',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          outline: 'none',
                          marginBottom: '12px'
                        }}
                      />
                      
                      {galleryPreviews.length > 0 && (
                        <div style={{ 
                          marginTop: '16px', 
                          padding: '12px', 
                          backgroundColor: '#f9f9f9', 
                          borderRadius: '8px',
                          border: '1px solid #e0e0e0'
                        }}>
                          <p style={{ fontSize: '12px', color: '#666', marginBottom: '12px', fontWeight: '500' }}>
                            ✓ {galleryPreviews.length} fotoğraf yüklendi
                          </p>
                          <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
                            gap: '8px' 
                          }}>
                            {galleryPreviews.map((preview, index) => (
                              <div
                                key={index}
                                className="group"
                                style={{
                                  position: 'relative',
                                  width: '100%',
                                  height: '100px'
                                }}
                              >
                                <img 
                                  src={preview} 
                                  alt={`Preview ${index + 1}`} 
                                  style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    borderRadius: '6px',
                                    border: '1px solid #e0e0e0'
                                  }} 
                                />
                                {/* Silme Butonu - Hover'da görünür */}
                                <button
                                  type="button"
                                  onClick={() => removeGalleryImage(index)}
                                  className="opacity-0 group-hover:opacity-100"
                                  style={{
                                    position: 'absolute',
                                    top: '4px',
                                    right: '4px',
                                    width: '24px',
                                    height: '24px',
                                    backgroundColor: '#dc2626',
                                    border: 'none',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'opacity 0.2s',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
                                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <p style={{ fontSize: '12px', marginTop: '8px', color: galleryImages.length < 4 || galleryImages.length > 20 ? '#dc2626' : '#666' }}>
                        {galleryImages.length === 0 && 'Minimum 4, maksimum 20 fotoğraf seçebilirsiniz.'}
                        {galleryImages.length > 0 && (
                          <>
                            <span style={{ fontWeight: '500' }}>
                              ✓ {galleryImages.length} fotoğraf seçildi
                            </span>
                            {galleryImages.length < 4 && (
                              <span style={{ color: '#dc2626', display: 'block', marginTop: '4px', fontWeight: '500' }}>
                                ⚠️ En az 4 fotoğraf seçmelisiniz! ({4 - galleryImages.length} eksik)
                              </span>
                            )}
                            {galleryImages.length > 20 && (
                              <span style={{ color: '#dc2626', display: 'block', marginTop: '4px', fontWeight: '500' }}>
                                ⚠️ Maksimum 20 fotoğraf yükleyebilirsiniz! ({galleryImages.length - 20} fazla)
                              </span>
                            )}
                            {galleryImages.length >= 4 && galleryImages.length <= 20 && (
                              <span style={{ color: '#10b981', display: 'block', marginTop: '4px' }}>
                                ✓ Fotoğraf sayısı uygun
                              </span>
                            )}
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Kaydet Butonu */}
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => {
                        setShowProjectForm(false);
                        resetForm();
                      }}
                      disabled={isLoading}
                      style={{
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: '400',
                        color: '#666',
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        opacity: isLoading ? 0.5 : 1
                      }}
                    >
                      İptal
                    </button>
                    <button
                      onClick={handleSaveProject}
                      disabled={isLoading}
                      style={{
                        padding: '12px 32px',
                        fontSize: '14px',
                        fontWeight: '400',
                        color: '#fff',
                        backgroundColor: '#1a0508',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        opacity: isLoading ? 0.7 : 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isLoading) e.currentTarget.style.opacity = '0.9';
                      }}
                      onMouseLeave={(e) => {
                        if (!isLoading) e.currentTarget.style.opacity = '1';
                      }}
                    >
                      {isLoading ? 'Kaydediliyor...' : 'Projeyi Kaydet'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Loading Modal */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '48px 64px',
            textAlign: 'center',
            maxWidth: '400px'
          }}>
            {/* Spinner */}
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid #f0f0f0',
              borderTop: '4px solid #1a0508',
              borderRadius: '50%',
              margin: '0 auto 24px',
              animation: 'spin 1s linear infinite'
            }}></div>
            
            <h3 style={{ fontSize: '18px', fontWeight: '400', marginBottom: '8px', color: '#000' }}>
              {loadingMessage || 'İşlem yapılıyor...'}
            </h3>
            <p style={{ fontSize: '14px', color: '#999', fontWeight: '300' }}>
              Lütfen bekleyin, işlem tamamlanıyor
            </p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '48px 64px',
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            {/* Success Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="40" height="40" fill="none" stroke="#fff" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 style={{ fontSize: '24px', fontWeight: '400', marginBottom: '8px', color: '#000' }}>
              Başarılı!
            </h3>
            <p style={{ fontSize: '15px', color: '#666', fontWeight: '300' }}>
              {successMessage || 'İşlem başarıyla tamamlandı'}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

