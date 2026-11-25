# BENGKELML

Aplikasi web kalkulator layanan Joki Reguler dan Joki Gendong Mobile Legends Season 42. Dibangun menggunakan React, TypeScript, dan Vite.

## Persyaratan

- Node.js 18 atau lebih baru
- npm

## Menjalankan secara lokal

Buka terminal di folder proyek, lalu jalankan:

```powershell
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal, biasanya <http://localhost:5173/>. Biarkan proses dev server berjalan selama aplikasi digunakan. Tekan `Ctrl+C` di terminal untuk menghentikannya.

## Build produksi

```powershell
npm run build
npm run preview
```

Hasil build tersedia di folder `dist/`. Perintah `npm run preview` menjalankan server lokal untuk memeriksa hasil build.

## Fitur

- Kalkulator harga berdasarkan rank awal, rank tujuan, tier tarif, dan diskon volume.
- Pilihan Joki Reguler atau Joki Gendong, termasuk paket Gendong per-win.
- Request hero hingga tiga pilihan, add-on prioritas, dan live stream.
- Pilihan mata uang IDR, MYR, dan SGD serta metode pembayaran.
- Ringkasan pesanan yang dapat dikonfirmasi melalui WhatsApp atau disalin.
- Tools kalkulator winrate, simulasi reset season, dan kamus istilah MLBB.
- Tabel harga, FAQ, informasi layanan, testimoni, dan banner berbagi.

## Struktur proyek

```text
public/              Aset statis, favicon, dan banner Open Graph
src/
  assets/            Emblem rank SVG
  components/        Komponen antarmuka
  data/              Data rank, hero, FAQ, dan konten halaman
  utils/             Kalkulator harga dan integrasi WhatsApp
  App.tsx            Komposisi halaman dan state aplikasi
  index.css          Gaya dan layout responsif
  main.tsx           Entry point React
index.html           Dokumen HTML utama
vite.config.ts       Konfigurasi Vite
```

## Konfigurasi kontak WhatsApp

Nomor tujuan WhatsApp ditentukan oleh konstanta `phoneNumber` di `src/utils/whatsapp.ts`. Pastikan nomor tersebut sudah benar sebelum aplikasi dipublikasikan.
