# Piri Red — Kullanım Kılavuzları Sitesi

Piri Red ürünlerinin kullanım kılavuzlarını gösteren site. Next.js ile
yazıldı, statik dosyalara (HTML/CSS/JS) derlenir — sunucu tarafında
çalışan bir kod yok, bu yüzden hemen hemen her yerde barındırılabilir
(Vercel, Netlify, veya herhangi bir statik dosya sunucusu).

## Kurulum ve geliştirme

```bash
npm install --legacy-peer-deps
npm run dev
```

Site `http://localhost:3000` üzerinde açılır.

Gereken: Node.js 18.18 veya üzeri.

## Yayına almak (deploy)

```bash
npm run build
```

Bu komut siteyi `out/` klasörüne statik dosyalar olarak derler. Bu klasörün
içindekiler **doğrudan yayınlanacak sitenin ta kendisi** — herhangi bir
statik hosting'e (Vercel, Netlify, S3, vb.) olduğu gibi yüklenebilir.

**Vercel ile:** Bu depoyu bir git deposuna koyup Vercel'e bağlamak yeterli;
Vercel `npm install` ve `npm run build`'i kendisi otomatik çalıştırır.
Ekstra ayar gerekmez (`next.config.mjs` içinde statik dışa aktarım zaten
tanımlı).

## İçerik düzenleme

Her ürünün kılavuz metni `content/manual/products/` altında ayrı bir
dosyada. Nasıl düzenleneceği: [content/manual/README.md](content/manual/README.md)

Bir metni değiştirdikten sonra kontrol için:

```bash
npm run validate:content
```

## Shopify entegrasyonu

Shopify mağazasındaki ürün sayfalarına bu kılavuzlara giden bir buton
eklemek için hazırlanan kod ve talimat: [shopify/README.md](shopify/README.md)

## Geçmiş kararlar

Yapının neden bu şekilde kurulduğu, isim/adres değişiklikleri gibi
kararların kaydı: `docs/manual-refactor/` klasöründe.
