# 📱 Open Graph Görseli Oluşturma Kılavuzu

## 🎯 Gereksinimler

**Dosya Adı:** `og-image.jpg`  
**Konum:** `/public/og-image.jpg`  
**Boyut:** 1200 x 630 piksel (mutlaka!)  
**Format:** JPG veya PNG  
**Oran:** 1.91:1 (landscape)

---

## 🎨 Tasarım Şartnamesi

### Arka Plan
- **Renk:** Beyaz (#FFFFFF)
- **Temiz ve sade**

### Logo
- **Denizport logosu** (headerdaki siyah versiyonu)
- **Ortalanmış**
- **Yeterince büyük** (ama çok büyük değil)
- **Renk:** Siyah (#000000)

### Opsiyonel Ek Metin (Tercih ederseniz)
- **Alt kısımda:** "Konut Projeleri ve Villa Satışı"
- **Font:** İnce (light)
- **Renk:** Gri (#666666)
- **Boyut:** Küçük

---

## 🛠️ Nasıl Oluşturulur?

### Seçenek 1: Canva (Kolay)

1. **Canva.com**'a gidin
2. **"Custom Size"** seçin → **1200 x 630** girin
3. **Arka plan:** Beyaz yapın
4. **Logo'yu yükleyin** (denizport.png'yi sürükleyin)
5. **Ortala ve boyutlandır**
6. **İndir:** JPG formatında
7. **Kaydet:** `og-image.jpg` olarak
8. **Kopyala:** `/public/` klasörüne

### Seçenek 2: Photoshop/Figma

1. **Yeni dosya:** 1200x630px
2. **Arka plan:** Beyaz
3. **Logo ekle:** Siyah Denizport logosu
4. **Ortala**
5. **Export:** JPG (kalite: 80-90%)
6. **Kaydet:** `public/og-image.jpg`

### Seçenek 3: Hızlı Çözüm (Geçici)

Mevcut `/denizport.png` dosyanızı kopyalayın:
```bash
# Terminal'de:
cd /Users/tahavacid/Desktop/denizport/public
cp denizport.png og-image.jpg
```

**Not:** Bu geçici bir çözüm. İdeal boyut 1200x630 olmalı.

---

## ✅ Kontrol Listesi

Görsel hazır olunca:

- [ ] Boyut 1200x630 mi? ✓
- [ ] Beyaz arka plan var mı? ✓
- [ ] Siyah logo ortada mı? ✓
- [ ] Dosya adı `og-image.jpg` mi? ✓
- [ ] `/public/` klasöründe mi? ✓

---

## 🧪 Test Etme

**Görsel hazır olunca test edin:**

1. **Facebook Debugger:**  
   https://developers.facebook.com/tools/debug/  
   → Site URL'nizi girin

2. **Twitter Card Validator:**  
   https://cards-dev.twitter.com/validator  
   → Site URL'nizi girin

3. **LinkedIn Post Inspector:**  
   https://www.linkedin.com/post-inspector/  
   → Site URL'nizi girin

---

## 📱 Sosyal Medyada Nasıl Görünecek

**WhatsApp:**
```
┌─────────────────────────────┐
│    [Beyaz arka plan +       │
│     Siyah Denizport Logo]   │
├─────────────────────────────┤
│ Denizport İnşaat | Konut   │
│ Projeleri ve Villa Satışı  │
├─────────────────────────────┤
│ Modern ve lüks konut...    │
│ denizport.com.tr           │
└─────────────────────────────┘
```

**Facebook/Instagram:**
- Büyük görsel (feed'de dikkat çekici)
- Başlık ve açıklama altında
- Tıklanabilir

**Twitter:**
- Large image card
- Tweet altında büyük görsel
- Başlık ve açıklama

---

## 🎯 Şu An Durum

✅ **Metadata hazır** - Open Graph etiketleri kodda mevcut  
⏳ **Görsel bekleniyor** - `og-image.jpg` dosyası oluşturulmalı  

Görsel eklendikten sonra WhatsApp/sosyal medyada mükemmel görünecek! 🚀

