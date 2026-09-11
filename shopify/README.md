# Shopify entegrasyonu — ürün sayfasına kılavuz linki

Bu klasör bu projenin (piri-manual) parçası değil, **Shopify mağazasının**
tema koduna eklenecek bir kod parçasını taşıyor. Amaç: her ürün sayfasında
o ürünün kılavuzuna giden bir buton göstermek.

- `product-manual-link.liquid` — Shopify temasına yapıştırılacak kod.
  Kim ekleyecek: tema kodunu yöneten kişi (Shopify CLI ile
  `shopify theme push` yapan kişi). Nereye ekleneceği dosyanın içindeki
  yorumda yazıyor.
- Kılavuz sitesinin adresi (`manual_base_url`) şu an: `https://pirired.vercel.app`
  Gerçek yayın adresi değişirse (örn. Shopify alt alan adına taşınırsa)
  dosyadaki bu satır güncellenmeli.

## Eşleştirme tablosu

Shopify'daki ürün adları/adresleri (handle) ile kılavuz sitesindeki adresler
(slug) birebir aynı değil. Güncel karşılık:

| Shopify ürünü | Shopify handle | Kılavuz adresi |
|---|---|---|
| Piri Portable | `piri-portable` | `/manual/piri-portable` |
| Piri Origin (siyah) | `piri-origin-red-light-therapy-panel-for-home-use-black` | `/manual/piri-origin` |
| Piri Origin (beyaz) | `piri-origin-red-light-therapy-panel-for-home-use-white` | `/manual/piri-origin` |
| Piri Origin Pro (siyah) | `piri-origin-pro-red-light-therapy-panel-with-pulsing-black` | `/manual/piri-origin-pro` |
| Piri Origin Pro (beyaz) | `piri-origin-pro-red-light-therapy-panel-with-pulsing-white` | `/manual/piri-origin-pro` |
| Piri Core Pro | `piri-core-pro` | `/manual/piri-core-pro` |
| Piri Max v.0 | `piri-max` | `/manual/piri-max-v0` |
| Piri Max (1500) | `piri-max-1500` | `/manual/piri-max-1500` |
| Piri Vista | `piri-vista-2250` | `/manual/piri-vista-2250` |
| Piri Desktop (500) | `piri-desktop-500` | `/manual/piri-desktop-500` |
| Piri Prime | `piri-prime` | `/manual/piri-prime` |
| Piri Max Pro v.0 | *(artık satılmıyor, Shopify'da yok)* | `/manual/piri-max-pro-v0` — link verilmiyor |

Kılavuz sitesinde olup Shopify'da karşılığı olmayan/tam tersi ürünler için
(`.liquid` dosyasındaki `case` listesinde yoksa) buton hiç görünmez, hata
vermez.

## Bu tabloyu ne zaman güncellemek gerekir

`content/manual/products/` altına yeni bir ürün eklendiğinde, bir ürünün adı
veya adresi (`id`) değiştiğinde, ya da bir ürün Shopify'dan kaldırıldığında:

1. Bu README'deki tabloyu güncelle.
2. `product-manual-link.liquid` içindeki `case` listesini aynı şekilde güncelle.
3. Güncel `.liquid` dosyasını tema kodunu yöneten kişiye ilet (veya kendisi
   bu depodan çekip Shopify CLI ile yükler).

`content/manual/index.ts` — kılavuz sitesindeki güncel ürün/adres listesinin
tek doğru kaynağı budur; bu tablo ona göre elle senkron tutulur (otomatik
üretilmiyor).
