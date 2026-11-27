# BENGKELML

Aplikasi web dan kalkulator layanan **Joki Reguler** serta **Joki Gendong (Mabar)** Mobile Legends: Bang Bang Season 42.

**Web Preview:** <https://bengkelml-nburx2r5m-fikrys-projects-96c906b8.vercel.app/>

## Persyaratan

- Node.js 18 atau lebih baru
- npm

## Menjalankan secara lokal

Buka terminal di folder proyek, lalu jalankan:

```powershell
npm install
npm run dev
```

Perintah `npm run dev` otomatis menjalankan `predev` (`npm run build:effects`) untuk mem-bundle efek animasi ke `public/site-effects.js` sebelum menyalakan server lokal Vite (biasanya di <http://localhost:5173/>). Tekan `Ctrl+C` di terminal untuk menghentikannya.

## Build produksi

```powershell
npm run build
npm run preview
```

- `npm run build` otomatis menjalankan `build:effects` (`scripts/build-site-effects.mjs`), pengecekan TypeScript (`tsc -b`), dan build Vite (`vite build`) ke folder `dist/`.
- `npm run preview` menjalankan server lokal untuk memeriksa hasil build produksi.

## Fitur

- **Kalkulator Harga Real-Time S42**: Hitung estimasi harga berdasarkan rank awal, divisi, bintang saat ini, rank tujuan, tarif per tier, dan diskon volume otomatis hingga 20% (ditambah diskon 5% untuk paket 5 Win).
- **Joki Reguler & Joki Gendong (Mabar)**:
  - **Joki Reguler**: Pilihan hingga 3 hero favorit dari 133 hero MLBB (filter role & pencarian A–Z), add-on *Fast Track* (+30%), dan *Streaming Langsung* (+20%).
  - **Joki Gendong**: Mode *Per Rank* maupun *Per Win* dengan pilihan paket cepat (`1 / 3 / 5 Win`) serta input angka keyboard/stepper (`1 – 100 Win`) tanpa perlu data login.
- **Halaman Informasi Multi-Rute**:
  - `/` — Beranda, kalkulator paket, daftar harga, layanan, cara order, testimoni, metode pembayaran (ID/MY/SG/Wise), dan FAQ.
  - `/harga/` — Daftar tarif per rank (dengan logo emblem rank MLBB) dan penjelasan diskon.
  - `/joki/` — Perbandingan Joki Reguler dan Joki Gendong serta alur pemesanan.
  - `/tools/` — Tools gratis MLBB: Kalkulator Win Rate, Simulasi Reset Season S42 → S43, dan Kamus Istilah MLBB.
  - `/blog/` — Panduan sistem rank, strategi match, dan persiapan order.
  - `/faq/` — Pertanyaan umum dan tautan kontak admin.
- **Multi-Bahasa & Multi-Mata Uang**: Dukungan bahasa **Indonesia (`ID`)** dan **Inggris (`EN`)**, serta konversi mata uang **IDR**, **MYR**, dan **SGD**.
- **Checkout WhatsApp**: Ringkasan pesanan otomatis dapat dikirim ke WhatsApp admin atau disalin ke clipboard.
- **Animasi & Smooth Scroll**: Menggunakan **GSAP (ScrollTrigger)**, **Motion**, dan **Lenis** (`src/site-effects.js` → `public/site-effects.js`) dengan dukungan `prefers-reduced-motion`.

## Struktur proyek

```text
public/
  blog/index.html            Halaman panduan & artikel (/blog/)
  faq/index.html             Halaman FAQ (/faq/)
  harga/index.html           Halaman daftar harga & logo rank (/harga/)
  joki/index.html            Halaman perbandingan layanan (/joki/)
  tools/index.html           Halaman tools gratis MLBB (/tools/)
  ranks/                     Aset gambar PNG emblem rank MLBB
  info-pages.css             Stylesheet bersama untuk halaman info & tools
  info-pages.js              Header/footer bersama, i18n ID/EN, kurs, & logika /tools/
  site-effects.js            Hasil bundle efek Lenis/GSAP/Motion (dihasilkan otomatis)
  favicon.svg, og-banner.png Aset ikon dan Open Graph
scripts/
  build-site-effects.mjs     Skrip esbuild untuk mem-bundle src/site-effects.js
src/
  site-effects.js            Sumber efek smooth scroll (Lenis) & animasi (GSAP + Motion)
  assets/                    Emblem rank PNG & komponen RankEmblem
  components/                Komponen kalkulator versi React
  data/                      Data rank, hero, dan konten versi React
  utils/                     Utilitas kalkulator dan pesan WhatsApp versi React
  App.tsx, main.tsx          Entry point aplikasi React
index.html                   Halaman utama dan kalkulator interaktif BENGKELML
vite.config.ts               Konfigurasi Vite & rewrite rute halaman info
package.json                 Dependensi & skrip npm
```

## Konfigurasi kontak WhatsApp

Pastikan nomor tujuan WhatsApp (`62895391187744` saat ini) sudah sesuai sebelum aplikasi dipublikasikan pada lokasi berikut:

- `index.html` (fungsi `confirmAndOpenWhatsApp` dan tampilan kontak di drawer/footer)
- `public/faq/index.html` (tombol *Chat Admin* dan *Chat WhatsApp*)
- `src/utils/whatsapp.ts` (konstanta `phoneNumber`)
