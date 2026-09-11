# Yeni ürün kılavuzları: Desktop 500 / Max 1500 / Vista 2250

Tarih: 2026-09-10
Durum: Uygulandı (taslak içerik)

Üç yeni ürün, mevcut `ProductManual` formatıyla eklendi. Bilgiler
`pirired.com.au` ürün sayfalarından alındı.

| Ürün | Adres | İçerik dosyası | Kaynak |
|---|---|---|---|
| Piri Desktop 500 | `/manual/piri-desktop-500` | `piri-desktop-500.ts` | pirired.com.au/products/piri-desktop-500 |
| Piri Max 1500 | `/manual/piri-max-1500` | `piri-max-1500.ts` | pirired.com.au/products/piri-max-1500 |
| Piri Vista 2250 | `/manual/piri-vista-2250` | `piri-vista-2250.ts` | pirired.com.au/products/piri-vista-2250 |

Toplam ürün sayısı: 7 → **10**.

## Kaynaktan alınan bilgiler

- Ad, kısa açıklama (tagline), özellik rozetleri
- Teknik özellikler: LED tipi (hepsi 5W Mono Chip), LED sayısı (96 / 296 / 446),
  LED gücü (500 / 1500 / 2250 W), dalga boyları (630/660/810/830/850nm),
  ölçüler, ağırlık, EMF, ışınım (~170+ mW/cm² @ 15cm), ömür
- Kutu içeriği (panel, güç kablosu, gözlük, kumanda; Max/Vista'da kapı askı aparatı)
- Sertifikalar: CE, FCC, RoHS (JAS-ANZ ve FDA "beklemede" — eklenmedi)
- Garanti: 2 yıl

## Varsayılan / doldurulacak alanlar

Ürün sayfalarında adım adım kullanım talimatı yoktu. Bu yüzden:

- `howToUse.steps` → ortak `desktopMaxHowToSteps` (RED/NIR seç, süre, konum,
  güvenlik, bitir) ve `desktopMaxRemoteControl` kullanıldı — Piri Origin /
  Piri Max v.0 ile aynı.
- `howToUse.diagram` → ortak `/desktop-max-control-panel.png`.
- `additionalFeatures` → ortak kartlar (eşleştirme / ses / yükseklik kilidi).
- Voltaj satırı → ürün ailesinin geneli olan "AC 100-250V 50/60Hz".
- Görseller → `pirired.com.au` CDN'inden indirildi. Ana fotoğraflar
  **lambalar kapalı** (yanmayan) panel çekimleri seçildi:
  - Ana fotoğraf: `public/piri-desktop-500.png`, `public/piri-max-1500.png`, `public/piri-vista-2250.jpg`
  - Kontrol paneli: `public/piri-desktop-500-panel.png`, `public/piri-max-1500-panel.jpg`, `public/piri-vista-2250-panel.png`

Gerçek kullanım metni ve görseller elle girilecek (proje başından beri planlandığı gibi).
