# Ürün adı ve adres değişiklikleri

Tarih: 2026-09-10
Durum: Uygulandı

`2026-09-09-design.md`'deki yapı korunuyor. Bu belge yalnızca sonrasında yapılan
ürün adı / URL değişikliklerini kaydeder.

## Ne değişti

| Eski ad | Yeni ad | Eski adres | Yeni adres |
|---|---|---|---|
| Piri Desktop | **Piri Origin** | `/manual/piri-desktop` | `/manual/piri-origin` |
| Piri Desktop Pro | **Piri Origin Pro** | `/manual/piri-desktop-pro` | `/manual/piri-origin-pro` |
| Piri Max | **Piri Max v.0** | `/manual/piri-max` | `/manual/piri-max-v0` |
| Piri Max Pro | **Piri Max Pro v.0** | `/manual/piri-max-pro` | `/manual/piri-max-pro-v0` |
| Piri Desktop Pro V2 | **Piri Core Pro** | `/manual/piri-desktop-pro-new-gen` | `/manual/piri-core-pro` |

Değişmeyen: Piri Portable, Piri Prime.

## Dosya / kod karşılığı

- `content/manual/products/piri-desktop.ts` → `piri-origin.ts` (export `piriOrigin`, `id: "piri-origin"`)
- `content/manual/products/piri-desktop-pro.ts` → `piri-origin-pro.ts` (export `piriOriginPro`, `id: "piri-origin-pro"`)
- `content/manual/products/piri-max.ts` → `piri-max-v0.ts` (export `piriMaxV0`, `id: "piri-max-v0"`)
- `content/manual/products/piri-max-pro.ts` → `piri-max-pro-v0.ts` (export `piriMaxProV0`, `id: "piri-max-pro-v0"`)
- `content/manual/products/piri-desktop-pro-new-gen.ts` → `piri-core-pro.ts` (export `piriCorePro`, `id: "piri-core-pro"`)
- `content/manual/index.ts`, `content/manual/validate.ts`, `content/manual/README.md`,
  `content/manual/shared.ts` (yorumlar) buna göre güncellendi.
- "Piri Core Pro" adı `components/manual/advanced-features.tsx` ve
  `components/manual/red-light-therapy.tsx` içindeki sabit metinlerde de geçiyordu
  (bu bölümler yalnızca bu modelde görünür); oralarda da güncellendi.
- Görsel dosya adları değişmedi (ör. `/piridesktopi00.png`, `/pirimax00.png` aynı kaldı).
- `id` = URL slug olduğu için ad dosyasındaki `id` değişince adres de değişiyor;
  ayrı bir yönlendirme tablosu yok.

## Eski adresler

Bir ara `piri-desktop` ve `piri-desktop-pro` için eski adresten yeni adrese
yönlendirme (statik HTML + `vercel.json`) eklenmişti. **Kaldırıldı.** Sebep: bu
adresler ileride **yeni ürünler** için kullanılacak, üzerlerinde yönlendirme
durmamalı.

Şu an boşta olan, yeniden kullanılabilir adresler:
`/manual/piri-desktop`, `/manual/piri-desktop-pro`, `/manual/piri-max`,
`/manual/piri-max-pro`, `/manual/piri-desktop-pro-new-gen`.

Bunlara giren ziyaretçi 404 görür (yeni bir ürün atanana kadar).

## Güncel ürün listesi

| Ürün | Adres | İçerik dosyası |
|---|---|---|
| Piri Portable | `/manual/piri-portable` | `piri-portable.ts` |
| Piri Origin | `/manual/piri-origin` | `piri-origin.ts` |
| Piri Origin Pro | `/manual/piri-origin-pro` | `piri-origin-pro.ts` |
| Piri Core Pro | `/manual/piri-core-pro` | `piri-core-pro.ts` |
| Piri Max v.0 | `/manual/piri-max-v0` | `piri-max-v0.ts` |
| Piri Max Pro v.0 | `/manual/piri-max-pro-v0` | `piri-max-pro-v0.ts` |
| Piri Prime | `/manual/piri-prime` | `piri-prime.ts` |

## Doğrulama

- `npm run validate:content` → 7 ürün OK
- `npm run build` → 7 statik sayfa; eski adresler (`piri-desktop`, `piri-max` vb.) üretilmiyor
