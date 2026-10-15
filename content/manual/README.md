# Kılavuz içeriğini düzenleme rehberi

Her ürünün kılavuz metinleri tek bir dosyada:

```
content/manual/products/
  piri-portable.ts
  piri-origin.ts                (URL: /manual/piri-origin, eskiden Piri Desktop)
  piri-origin-pro.ts            (URL: /manual/piri-origin-pro, eskiden Piri Desktop Pro)
  piri-core-pro.ts              (URL: /manual/piri-core-pro, "Piri Core Pro", eskiden Piri Desktop Pro V2)
  piri-max-v0.ts                (URL: /manual/piri-max-v0, "Piri Max v.0")
  piri-max-pro-v0.ts            (URL: /manual/piri-max-pro-v0, "Piri Max Pro v.0")
  piri-prime.ts
  piri-desktop-500.ts           (URL: /manual/piri-desktop-500, "Piri Desktop 500")
  piri-max-1500.ts              (URL: /manual/piri-max-1500, "Piri Max 1500")
  piri-vista-2250.ts            (URL: /manual/piri-vista-2250, "Piri Vista 2250")
```

## Nasıl düzenlenir

1. Düzenlemek istediğin ürünün dosyasını aç.
2. Yalnızca **tırnak içindeki** yazıyı değiştir.
3. Tırnakları, köşeli parantezleri `[ ]`, süslü parantezleri `{ }` ve virgülleri **bozma**.
4. Kaydet.
5. Terminalde kontrol et:
   ```
   npm run validate:content
   ```
   `content/manual OK - 7 product(s): ...` görürsen içerik sağlam.
   Hata verirse, hangi alanın bozuk olduğunu satır satır yazar.

## Alanlar ne işe yarar

| Alan | Nerede görünür |
|---|---|
| `name` | Sayfa başlığı ve ana sayfa kartı |
| `tagline` | Ana sayfa kartındaki kısa açıklama |
| `features` | Ana sayfa kartındaki küçük rozetler |
| `packageContents` | "Package Contents" bölümü — kutudan çıkanlar (`label` = ad, `image` = görsel yolu) |
| `howToUse.intro` | "How to Use" bölümünün giriş cümlesi |
| `howToUse.diagram` | Adımların üstündeki cihaz/panel görseli |
| `howToUse.steps` | Numaralı kullanım adımları. Her adım: `title` (başlık), `subtitle` (alt satır), `bullets` (madde madde talimatlar) |
| `howToUse.remoteControl` | Adımlardan sonra gelen "REMOTE CONTROL" kutusu (varsa) |
| `specifications.rows` | Teknik özellik tablosu — her satır `{ label: "...", value: "..." }` |
| `specifications.certifications` | Alttaki CE / FCC / RoHS rozetleri |
| `additionalFeatures` | "Additional Features & Tips" kartları (varsa). Her kart: `title` + `body` |
| `warrantyYears` | Garanti süresi (yıl). Sayı — tırnaksız |
| `wavelengthCount` | `5` (tam spektrum) veya `2` (sadece Portable) |

## Sık işlemler

**Bir adıma yeni madde eklemek:** ilgili `bullets: [ ... ]` listesine yeni bir `"metin"`
satırı ekle, öncekinin sonuna virgül koy.

**Yeni bir kullanım adımı eklemek:** mevcut bir `{ title: ..., bullets: [...] }` bloğunu
kopyala, aralarına virgül koy, içeriğini değiştir.

**Kalın yazı:** bir madde içinde `**şu kısım**` kalın görünür. Örnek:
`"**Pause:** press and hold for 2 seconds"`.

**Görsel eklemek:** dosyayı `public/` klasörüne koy, veride `/dosya-adi.png` diye referans ver.

## Ortak metinler burada DEĞİL

Şu bölümler tüm ürünlerde birebir aynı olduğu için ürün dosyasında değil,
`components/manual/` içinde:

- Treatment Guide (`treatment-guide.tsx`)
- What is Red Light Therapy? (`red-light-therapy.tsx`)
- Maintenance and Safety (`maintenance-safety.tsx`)
- Frequently Asked Questions (`faq.tsx`)
- Warranty sözleşme metni ve iletişim bilgileri (`warranty.tsx`) — sadece yıl sayısı ürün dosyasından gelir

Üç "Pro" modelin (Origin Pro, Core Pro, Max Pro v.0) kullanım adımları birebir aynı
olduğu için `content/manual/shared.ts` içinde tek yerde tutuluyor; oradan düzenlersen
üçünde birden değişir.

## Light Output grafikleri

Dokuz güncel kılavuzda Light Output grafiği bulunur: sekiz spektrometre grafiği ve Portable için bir Solar Meter grafiği. Her kılavuzdaki tek figure, açıklama paragrafının üstünde yer alır; eski ölçüm tablosunun yerini alır. Legacy Max Pro v.0 için doğrulanmış kaynak bulunmadığından grafik veya tahmini ölçüm eklenmez.

`tools/refresh-irradiance.cjs`, güncel canlı Shopify Liquid payloadlarını alır. Hesaplama ve çizim için Shopify JS sürümünden kopyalanan `tools/irradiance-engine.cjs` kullanılır. Kılavuz grafikleri build sırasında yenilenir; açık kılavuzda metafield değişiklikleri anında görünmez. Yeni canlı veriyi almak için yenileme aracını ve kılavuz build/export sürecini tekrar çalıştır.

Gerçek primary ürün fotoğrafları SVG içine gömülür; dokuz desktop ve dokuz mobile varyant çevrimdışı çalışır. HTML başlıkları ve dipnotlar korunur. Son mobile düzenleme eski “Panel” metin kuyruğunu kaldırır.

Kılavuz grafiklerindeki tüm etiketler HTML body text olarak sabit 16 px kullanır; yeniden boyutlandırmada yazı boyutu değişmez. Aynı engine tarafından üretilen SVG yalnızca geometriyi taşır. `IrradianceChart` bileşenindeki `ResizeObserver` geometriyi ölçekler; yatay sticky rail seçimi yalnızca 820 px viewport sınırına değil, gerçek kılavuz kolonunun okunabilir genişliğine bağlıdır. Boyutlardaki `x` ayırıcı tick merkezine hizalanır; ölçüm istasyonlarında font boyutu sabit kalır.

“Go To Product Irradiance Tab” bağlantısı her ürünün kendi ürün sayfasına `#irradiance` ile gider. Bu bağlantıyı açan product-details JS değişikliği canlı Shopify temasına dağıtıldı. Kılavuz çıktıları preview durumundadır; production kılavuz yayını yapılmadı.

Doğrulama kapsamı: 10 kılavuz, 16 export, 11 offline HTML ve güncel offline pakette 119 dosya; sıfır hata. Desktop, mobile, print ve ürün sekmesine deeplink browser kontrolleri tamamlandı. Dokuz grafik × 1440/820/390 px olmak üzere 27 responsive kontrol geçti: sabit panel/ilk istasyon kırpılması veya mesafe etiketi çakışması yok; sticky davranışı ve sayfa genişliğine uyum doğrulandı. Yerel preview ve ZIP güncellendi. Mevcut kılavuz görsel sistemi korunur; bu grafikler için global tasarım belgeleri veya tokenlar değişmez.