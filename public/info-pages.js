(function () {
  const currencyConfig = {
    IDR: { symbol: 'Rp ', rate: 1, decimals: 0 },
    MYR: { symbol: 'RM ', rate: 0.00028, decimals: 2 },
    SGD: { symbol: 'S$ ', rate: 0.000085, decimals: 2 }
  };
  const homeTranslations = {
    'Buka menu navigasi': 'Open navigation menu',
    'Harga': 'Pricing',
    'Joki': 'Boosting',
    'Joki Reguler': 'Regular Boost',
    'Joki Gendong': 'Duo Carry',
    'Tools': 'Tools',
    'Tools Gratis': 'Free Tools',
    'Blog': 'Blog',
    'FAQ': 'FAQ',
    'Pilih bahasa': 'Choose language',
    'Order Sekarang': 'Order Now',
    'Ganti mata uang': 'Change currency',
    'SEASON 42 (S42) MLBB AKTIF': 'MLBB SEASON 42 (S42) IS LIVE',
    'S42 Berakhir:': 'S42 ends in:',
    'KALKULATOR JOKI & GENDONG INSTAN S42': 'INSTANT MLBB RANK BOOST CALCULATOR S42',
    'JOKI MLBB CEPAT, TEGAS & BERGARANSI': 'FAST, RELIABLE & GUARANTEED MLBB BOOSTING',
    'Joki MLBB Cepat, Tegas & Bergaransi': 'Fast, Reliable & Guaranteed MLBB Boosting',
    '100% Manual No-Cheat': '100% Manual, No Cheats',
    'Garansi Kalah Ganti Bintang': 'Loss Protection: Star Replaced',
    'Mulai Rp 2.000 / Star': 'Starting at Rp 2,000 / Star',
    'JOKI REGULER': 'REGULAR BOOST',
    'GENDONG (MABAR)': 'DUO CARRY',
    'Pilih Rank Awal': 'Choose Starting Rank',
    'Pilih Rank Target': 'Choose Target Rank',
    'Pilih Hero Favorit (Opsional)': 'Choose Favorite Heroes (Optional)',
    'Pilih Add-On Tambahan': 'Choose Add-ons',
    'Rincian Estimasi Paket': 'Price Estimate Details',
    'Rincian Estimasi': 'Price Estimate Details',
    'Pilih Metode Layanan': 'Choose a Service',
    'Pilih Rank Kamu Saat Ini': 'Choose Your Current Rank',
    'Pilih Rank Tujuan': 'Choose Target Rank',
    'Rank Awal': 'Starting Rank',
    'Target': 'Target',
    'Metode Layanan': 'Service Type',
    'Total Bintang / Win': 'Total Stars / Wins',
    'Tarif Rata-Rata / ★': 'Average Rate / ★',
    'Add-Ons Aktif': 'Active Add-ons',
    'Estimasi Waktu Selesai': 'Estimated Completion Time',
    'Hemat Diskon Volume': 'Volume Discount Saved',
    'Diskon Volume: 5% AKTIF': 'Volume Discount: 5% ACTIVE',
    'Diskon Volume: 0% (Order ≥ Rp 100k hemat 5%)': 'Volume discount: 0% (save 5% on orders ≥ Rp 100k)',
    'Harga Resmi': 'Standard Price',
    'Standar': 'Standard',
    'Bintang': 'Stars',
    'Hari': 'Days',
    'Jam': 'Hours',
    'Total Estimasi Bayar': 'Estimated Total',
    'Total Estimasi': 'Estimated Total',
    'Order via WhatsApp (1-Klik)': 'Order via WhatsApp',
    'Order WhatsApp': 'Order via WhatsApp',
    'Pilih Rank dan Divisi Awal': 'Choose Starting Rank and Division',
    'Pilih Bintang Saat Ini': 'Choose Current Stars',
    'Pilih Rank dan Divisi Target': 'Choose Target Rank and Division',
    'Pilih Bintang Target': 'Choose Target Stars',
    'Pilih jumlah win': 'Choose number of wins',
    'Win Mabar': 'Duo Wins',
    'Pilih Metode Pembayaran:': 'Payment options are confirmed with our admin.',
    'Daftar Harga Resmi Season 42': 'Official Season 42 Price List',
    'Harga Joki & Gendong MLBB': 'MLBB Boosting & Duo Carry Prices',
    'Joki Gendong (Mabar)': 'Duo Carry',
    'Joki Reguler (Akun dimainkan booster)': 'Regular Boost (played by a booster)',
    'per Bintang': 'per Star',
    'per Win': 'per Win',
    'Cara Order': 'How to Order',
    'Testimoni & Bukti': 'Reviews & Proof',
    'Kalkulator Harga Joki': 'Boost Price Calculator',
    'Daftar Harga S42': 'S42 Price List',
    'FAQ': 'FAQ',
    'Syarat & Ketentuan': 'Terms & Conditions',
    'Keamanan Shield': 'Account Security',
    'Utilitas Gratis Player MLBB': 'Free MLBB Player Tools',
    'Kalkulator Winrate (WR), Reset Season S42 & Kamus MLBB': 'Win Rate Calculator, Season Reset & MLBB Glossary',
    'Tampilkan Tools Gratis': 'Show Free Tools',
    'Sembunyikan Tools Gratis': 'Hide Free Tools',
    'Tools Gratis BENGKELML': 'BENGKELML Free Tools',
    'Tutup Tools': 'Close Tools',
    '1. Kalkulator Winrate (WR) MLBB': '1. MLBB Win Rate Calculator',
    '2. Simulasi Reset Season S42 → S43': '2. Season S42 → S43 Reset Simulator',
    '3. Kamus Istilah MLBB': '3. MLBB Terms Glossary',
    'Total Match': 'Total Matches',
    'WR Saat Ini (%)': 'Current WR (%)',
    'Target WR (%)': 'Target WR (%)',
    'Cek posisi rank awal kamu setelah Reset Season S42:': 'Check your starting rank after the S42 season reset:',
    'Cari istilah: Snowball, Freeze Lane, Zoning, Lord Dance...': 'Search terms: Snowball, Freeze Lane, Zoning, Lord Dance...',
    'Metode Pembayaran': 'Payment Methods',
    'Pembayaran diproses setelah detail order dikonfirmasi dengan admin WhatsApp.': 'Payment is arranged with our WhatsApp admin after your order details are confirmed.',
    'Pertanyaan Umum (FAQ)': 'Frequently Asked Questions',
    'Kalkulator Paket': 'Package Calculator',
    'Pilih Metode': 'Choose a Service',
    'Pilih Hero Favorit': 'Choose Favorite Heroes',
    'Daftar Harga': 'Price List',
    'Harga transparan': 'Transparent pricing',
    'Paket': 'Package',
    'Win Garansi': 'Guaranteed Wins',
    'Bisa pilih hingga 3 hero favorit': 'Choose up to 3 favorite heroes',
    'Mulai Order Sekarang': 'Start Your Order',
    'Hitung Harga': 'Calculate Price',
    'Lanjutkan': 'Continue',
    'Salin Format Order': 'Copy Order Details',
    'Konfirmasi Order BENGKELML': 'Confirm Your BENGKELML Order',
    'Kirim ke WhatsApp Admin': 'Send to WhatsApp Admin',
    'Tutup': 'Close',
    'Bukti Order': 'Order Proof',
    'Detail': 'Details',
    'Mabar': 'Play Together',
    'Tanpa Login': 'No Login Required',
    'Akurat': 'Accurate',
    'Auto Drop': 'Automatic Rank Drop',
    'Glosarium': 'Glossary',
    'Paling laris': 'Popular',
    'Tanpa password atau data login': 'No password or login details needed',
    'Order ≥ Rp 100k dapat diskon 5%': '5% off orders ≥ Rp 100k',
    'Order ≥ Rp 300k diskon 10%': '10% off orders ≥ Rp 300k',
    'Order ≥ Rp 600k dapat diskon 15%': '15% off orders ≥ Rp 600k',
    'Order ≥ Rp 1 Jt dapat diskon 20%': '20% off orders ≥ Rp 1 million',
    'Diskon Maksimal 20% Tercapai!': 'Maximum 20% discount reached!',
    'Diskon Otomatis:': 'Automatic Discount:',
    'Pilih metode pembayaran:': 'Payment options:',
    'Baca selengkapnya': 'Read more',
    'Joki Gendong & Mabar': 'Duo Carry & Play Together',
    'Privasi & Cepat': 'Private & Fast',
    'Syarat & Ketentuan berlaku': 'Terms & Conditions apply',
    'Bandingkan layanan': 'Compare services',
    'Hubungi Admin': 'Contact Admin',
    'Pilih Paket': 'Choose a Package',
    'Efisiensi waktu': 'Time saved',
    'bintang': 'stars',
    'Bintang': 'Stars',
    'Win': 'Wins',
    'divisi': 'division',
    'Divisi': 'Division',
    'Rp ': 'Rp ',
    'Hero:': 'Heroes:',
    'Fast Track': 'Priority Boost',
    'Live Stream': 'Live Stream',
    'Istilah MLBB': 'MLBB Terms',
    'Mulai dari': 'Starting at',
    'Butuh bantuan?': 'Need help?',
    'Detail paket': 'Package details',
    'Rank impianmu': 'Your target rank',
    'Estimasi harga': 'Price estimate',
    'Jumlah Bintang': 'Number of Stars',
    'Masukkan ID & Server MLBB': 'Enter MLBB ID & Server',
    'Opsional': 'Optional',
    'Pilih metode layanan:': 'Choose a service:',
    'Pilih rank kamu': 'Choose your rank',
    'Target rank': 'Target rank',
    'Tidak ada hero ditemukan.': 'No heroes found.',
    'Cari hero favorit...': 'Search favorite heroes...',
    'Menampilkan': 'Showing',
    'Hero': 'Heroes',
    'Pilih bahasa': 'Choose language',
    'Mata uang diubah ke': 'Currency changed to',
    'Bonus win': 'Bonus win',
    'Standar (tanpa add-on)': 'Standard (no add-ons)',
    'Fast Track (+30%)': 'Priority Boost (+30%)',
    'Live Stream (+20%)': 'Live Stream (+20%)',
    'Order': 'Order',
    'Terakhir diperbarui': 'Last updated',
    'Kembali ke Kalkulator': 'Back to Calculator',
    'Kembali ke Beranda': 'Back to Home',
    'Pilih Layanan': 'Choose a Service',
    'Joki Gendong (Carry Mabar)': 'Duo Carry',
    'Joki Rank Reguler': 'Regular Rank Boost',
    'Ringkasan Estimasi': 'Estimate Summary',
    'Keunggulan Layanan': 'Service Benefits',
    'Pertanyaan Umum': 'Frequently Asked Questions',
    'Cari istilah': 'Search terms',
    'Season 42 (S42) MLBB aktif': 'MLBB Season 42 (S42) is live',
    'Push rank sebelum reset season': 'Push rank before the season reset',
    'Ranking awal': 'Starting rank',
    'Pilih bintang': 'Choose stars',
    'Riwayat Order': 'Order History',
    'Tersedia 24/7': 'Available 24/7',
    'Harga transparan, tanpa biaya tersembunyi.': 'Transparent prices, no hidden fees.',
    'Bukan bagian resmi dari Moonton.': 'Not affiliated with Moonton.',
    '© 2026 BENGKELML Esports Boosting. Bukan bagian resmi dari Moonton.': '© 2026 BENGKELML Esports Boosting. Not affiliated with Moonton.',
    'Kata Mereka': 'Customer Reviews',
    'Dipercaya para pejuang rank.': 'Trusted by rank climbers.',
    'Mudah & Terarah': 'Simple & Guided',
    'Cara order di BengkelML': 'How to order with BengkelML',
    'Mulai dari pilih rank sampai konfirmasi pesanan, semuanya praktis.': 'From choosing your rank to confirming your order, the process is simple.',
    'Punya Pertanyaan?': 'Have Questions?',
    'Yang sering ditanyakan.': 'Frequently asked questions.',
    'Belum menemukan jawaban? Admin kami siap membantu lewat WhatsApp.': 'Still need help? Our admin is available on WhatsApp.',
    'Chat admin': 'Chat with admin',
    'Pembayaran mudah': 'Easy payments',
    'Metode pembayaran': 'Payment methods',
    'Joki MLBB Cepat, Tegas & Bergaransi.': 'Fast, Reliable & Guaranteed MLBB Boosting.',
    'Pilihan player berpengalaman dan top global Immortal.': 'Experienced players and global top Immortal boosters.',
    'Harga final dikonfirmasi admin sebelum pengerjaan.': 'Final pricing is confirmed by our admin before work begins.',
    'BENGKELML': 'BENGKELML',
    'Esports Boosting S42': 'S42 Esports Boosting',
    'Menghitung...': 'Calculating...',
    'Kalkulator Joki & Gendong Instan S42': 'Instant S42 Boost & Duo Carry Calculator',
    'Gendong (Mabar)': 'Duo Carry',
    'Akun dimainkan langsung oleh Ex-Pro Booster (Privasi & Cepat).': 'Your account is played by an experienced booster (private & fast).',
    'FAST LANE': 'FAST LANE',
    'Paket Joki Gendong (Tanpa Login)': 'Duo Carry Package (No Login)',
    'Garansi Ganti Win': 'Win Replacement Guarantee',
    'Per Rank (Target Bintang)': 'By Rank (Target Stars)',
    'Per Win (1 / 3 / 5 Win)': 'By Win (1 / 3 / 5 Wins)',
    '1 Win': '1 Win',
    '3 Win': '3 Wins',
    '5 Win (Hemat 5%)': '5 Wins (Save 5%)',
    'ID & Server MLBB Kamu (Opsional untuk Mabar)': 'Your MLBB ID & Server (Optional for Duo Carry)',
    'Pilih Rank Awal': 'Choose Starting Rank',
    'Divisi Rank Awal': 'Starting Rank Division',
    'Epic V – Epic I': 'Epic V – Epic I',
    'Bintang Saat Ini': 'Current Stars',
    'Ketik angka atau tekan − / + (0★ – 5★)': 'Enter a number or use − / + (0★ – 5★)',
    'Pilih Rank Tujuan': 'Choose Target Rank',
    'Divisi Rank Tujuan': 'Target Rank Division',
    'Pilih divisi tujuan': 'Choose target division',
    'Bintang Rank Tujuan': 'Target Rank Stars',
    'Add-Ons & Request Hero': 'Add-ons & Hero Requests',
    'Opsional': 'Optional',
    'Request Hero Tertentu (A – Z)': 'Request a Specific Hero (A – Z)',
    'Geser ke kanan/kiri atau cari hero favorit (maks. 3 hero)': 'Swipe or search for favorite heroes (up to 3)',
    'GRATIS': 'FREE',
    'Semua (A–Z)': 'All (A–Z)',
    'Jungler': 'Jungler',
    'Gold Lane': 'Gold Lane',
    'Mid Lane': 'Mid Lane',
    'EXP Lane': 'EXP Lane',
    'Roamer': 'Roamer',
    'Menampilkan 133 Hero (Urut A–Z)': 'Showing 133 heroes (A–Z)',
    '← Geser Horizontal →': '← Swipe horizontally →',
    'Joki Prioritas / Fast Track': 'Priority Boost / Fast Track',
    'Antrean Normal • Aktifkan untuk 2x lebih cepat': 'Standard queue • Enable for up to 2x faster service',
    'Live Stream Match': 'Live Stream Match',
    'Tonton langsung proses joki secara real-time': 'Watch your boost session live',
    'Rincian Estimasi Paket': 'Package Estimate Details',
    'Diskon Volume Aktif': 'Volume Discount Active',
    'Diskon Volume: 5% AKTIF': 'Volume Discount: 5% ACTIVE',
    'Metode Layanan': 'Service Type',
    'Total Bintang / Win': 'Total Stars / Wins',
    '32 Bintang': '32 Stars',
    'Hero: Hayabusa': 'Hero: Hayabusa',
    '± 1 – 2 Hari': 'Approx. 1–2 days',
    'Total Estimasi Bayar': 'Estimated Total',
    'Order via WhatsApp (1-Klik)': 'Order via WhatsApp',
    'Salin Format Order': 'Copy Order Details',
    'BENGKELML Shield': 'BENGKELML Account Shield',
    'Sembunyikan': 'Hide',
    'Perlindungan keamanan akun dan kenyamanan kamu sebelum, selama, dan sesudah sesi boosting.': 'Account-safety measures and support before, during, and after a boosting session.',
    '1. Login & V2L Aman': '1. Secure Login & Verification',
    'Dipandu verifikasi sekali masuk dan wajib ganti sandi setelah selesai.': 'We guide you through one-time verification; change your password after the service is complete.',
    '2. 100% Manual Skill': '2. 100% Manual Gameplay',
    'Tanpa script, map hack, atau program ilegal pihak ketiga.': 'No scripts, map hacks, or illegal third-party programs.',
    '3. Diamond & Skin Utuh': '3. Diamonds & Skins Stay Untouched',
    'Inventory, BP, serta diamond akun dijamin tidak disentuh.': 'Your inventory, Battle Points, and diamonds are not used.',
    '4. Garansi Ganti Win': '4. Win Replacement Guarantee',
    'Paket Gendong kalah langsung diganti 1 win tambahan gratis.': 'A loss in a Duo Carry package is replaced by one additional win at no cost.',
    'Checklist Sebelum Order:': 'Before You Order:',
    'Joki Reguler:': 'Regular Boost:',
    'Siapkan login Moonton/TikTok, jangan tabrak login saat sesi berjalan.': 'Prepare your Moonton/TikTok login and avoid signing in during an active session.',
    'Joki Gendong:': 'Duo Carry:',
    'Tanpa perlu password! Cukup kirim User ID & Server MLBB.': 'No password needed. Just share your MLBB User ID and Server.',
    'Daftar Harga Resmi S42': 'Official S42 Price List',
    'Per Bintang (★)': 'Per Star (★)',
    'Tarif resmi per bintang untuk seluruh tier Mobile Legends Season 42.': 'Official per-star rates for each Mobile Legends Season 42 rank tier.',
    'Tier Rank': 'Rank Tier',
    'Joki Reguler (/★)': 'Regular Boost (/★)',
    'Joki Gendong (/★)': 'Duo Carry (/★)',
    '≥ Rp 100k: Diskon 5%': '≥ Rp 100k: 5% off',
    '≥ Rp 300k: Diskon 10%': '≥ Rp 300k: 10% off',
    '≥ Rp 600k: Diskon 15%': '≥ Rp 600k: 15% off',
    '≥ Rp 1 Jt: Diskon 20%': '≥ Rp 1 million: 20% off',
    'Layanan Kami': 'Our Services',
    '2 Metode': '2 Options',
    '1. Joki Rank Reguler': '1. Regular Rank Boost',
    'Paling Laris': 'Popular',
    'Akun dimainkan langsung oleh booster profesional pilihan kami sampai rank target tercapai.': 'A selected professional booster plays on your account until the target rank is reached.',
    '✓ Gratis request hingga 3 hero meta favorit (A–Z)': '✓ Request up to 3 favorite meta heroes (A–Z) at no extra cost',
    '✓ Opsi Live Stream Match & Fast Track Prioritas': '✓ Live stream matches and priority queue options',
    '✓ Proteksi IP Indonesia & bebas ban': '✓ Indonesia-based connection and manual gameplay',
    'Pilih Joki Reguler ↑': 'Choose Regular Boost ↑',
    '2. Joki Gendong (Carry Mabar)': '2. Duo Carry',
    'Tanpa Login': 'No Login Required',
    'Main bareng booster di lobby party yang sama. Kamu tetap bermain sendiri tanpa serahkan akun.': 'Play in the same party as a booster while staying on your own account.',
    '✓ 100% Tanpa Password / Data Login Akun': '✓ No password or account login details required',
    '✓ Pilihan paket Per-Rank atau Per-Win (1 / 3 / 5 Win)': '✓ Rank-based or win-based packages (1 / 3 / 5 wins)',
    '✓ Garansi kalah langsung diganti 1 win gratis': '✓ A loss is replaced with one additional win',
    'Pilih Joki Gendong ↑': 'Choose Duo Carry ↑',
    'Cara Order (4 Langkah Mudah)': 'How to Order (4 Simple Steps)',
    'Proses ± 5 Menit': 'About 5 minutes to place an order',
    '01 • HITUNG HARGA': '01 • CALCULATE YOUR PRICE',
    'Pilih Rank & Add-On': 'Choose Rank & Add-ons',
    'Atur rank awal, rank tujuan, dan request hero di kalkulator.': 'Set your starting rank, target rank, and hero requests in the calculator.',
    '02 • CHAT WHATSAPP': '02 • MESSAGE US ON WHATSAPP',
    'Kirim Format Otomatis': 'Send the Order Details',
    'Klik Order via WhatsApp dan selesaikan pembayaran via QRIS/Bank.': 'Send your order details via WhatsApp and confirm the next steps with our admin.',
    '03 • PROSES JOKI': '03 • BOOSTING IN PROGRESS',
    'Booster Mulai Push': 'The Booster Gets Started',
    'Pro player langsung mengerjakan pesanan dengan winstreak tinggi.': 'Your booster starts working on the order with a focus on consistent gameplay.',
    '04 • SELESAI & AMAN': '04 • COMPLETE & SECURE',
    'Cek Rank & Ganti Sandi': 'Check Your Rank & Update Your Password',
    'Admin kirim bukti screenshot rank tercapai, akun siap dimainkan.': 'Our admin shares completion details so you can review your account.',
    'Kenapa Pilih BENGKELML?': 'Why Choose BENGKELML?',
    '6 Jaminan': '6 Commitments',
    'Estimasi Waktu Jelas': 'Clear Time Estimates',
    'Target pengerjaan transparan sejak awal pemesanan.': 'A clear estimated timeframe from the start.',
    'Murni mekanik & makro ex-pro player tanpa cheat.': 'Experienced players using manual gameplay, without cheats.',
    'Admin Fast Response 24/7': 'Responsive Admin, 24/7',
    'Siap melayani order & konsultasi kapan saja.': 'Available for orders and questions at any time.',
    'Booster Mythic Immortal': 'Mythic Immortal Boosters',
    'Seluruh booster terverifikasi minimal 100★+ Immortal.': 'Boosters are vetted for high-rank experience.',
    'Diskon Volume Otomatis': 'Automatic Volume Discounts',
    'Semakin banyak bintang diorder, diskon hingga 20%.': 'Discounts of up to 20% for larger star packages.',
    'Garansi Target Tercapai': 'Target Completion Guarantee',
    'Kalah saat paket Gendong langsung diganti 1 win gratis.': 'A Duo Carry loss is replaced with an additional win.',
    'Testimoni & Bukti Order': 'Reviews & Order Proof',
    '★ 5.0 Verified': '★ 5.0 Verified',
    '14x Winstreak': '14-win streak',
    'Lihat Bukti Match & Chat': 'View Match & Chat Proof',
    'ID • MY • SG': 'ID • MY • SG',
    'Pembayaran diproses setelah detail order dikonfirmasi dengan admin WhatsApp.': 'Payment is arranged with our WhatsApp admin after your order details are confirmed.',
    'QRIS Instan': 'Instant QRIS',
    'Touch n Go (MY)': 'Touch n Go (MY)',
    'PayNow (SG)': 'PayNow (SG)',
    'Pertanyaan Umum (FAQ)': 'Frequently Asked Questions',
    'Utilitas Gratis Player MLBB': 'Free Tools for MLBB Players',
    'Kalkulator Winrate (WR), Reset Season S42 & Kamus MLBB': 'Win Rate Calculator, S42 Reset Simulator & MLBB Glossary',
    'Tampilkan Tools Gratis': 'Show Free Tools',
    'Tools Gratis BENGKELML': 'BENGKELML Free Tools',
    'Tutup Tools ✕': 'Close Tools ✕',
    '1. Kalkulator Winrate (WR) MLBB': '1. MLBB Win Rate Calculator',
    'Akurat': 'Accurate',
    '2. Simulasi Reset Season S42 → S43': '2. S42 → S43 Season Reset Simulator',
    'Auto Drop': 'Automatic Rank Reset',
    'Cek posisi rank awal kamu setelah Reset Season S42:': 'Check your starting rank after the S42 season reset:',
    '3. Kamus Istilah MLBB': '3. MLBB Terms Glossary',
    'Glosarium': 'Glossary',
    'Syarat & Ketentuan': 'Terms & Conditions',
    'Kebijakan Privasi': 'Privacy Policy',
    'WhatsApp Admin:': 'WhatsApp Admin:',
    '• Instagram & TikTok:': '• Instagram & TikTok:',
    '© 2026 BENGKELML Esports Boosting. Bukan bagian resmi dari Moonton.': '© 2026 BENGKELML Esports Boosting. Not affiliated with Moonton.',
    'Total Estimasi': 'Estimated Total',
    'Order WhatsApp': 'Order via WhatsApp',
    'Konfirmasi Order BENGKELML': 'Confirm Your BENGKELML Order',
    'Kirim ke WhatsApp Admin': 'Send to WhatsApp Admin',
    'Bukti Order': 'Order Proof',
    'Detail': 'Details',
    'Jasa Joki & Gendong Mobile Legends Season 42 terpercaya.': 'Trusted Mobile Legends Season 42 rank boosting and Duo Carry.',
    'Jasa Joki & Gendong Mobile Legends: Bang Bang Season 42 Terpercaya.': 'Trusted Mobile Legends: Bang Bang Season 42 rank boosting and Duo Carry.',
    'Mata uang diubah ke': 'Currency changed to',
    'Apakah akun saya aman saat Joki Reguler?': 'Is my account safe during Regular Boost?',
    '100% aman. Booster kami bermain manual menggunakan IP lokal Indonesia dan tidak pernah menyentuh pengaturan keamanan atau diamond akun kamu.': 'Our boosters play manually and do not use cheats. Never share login details until the order and account-safety steps have been confirmed with our admin.',
    'Bagaimana cara kerja verifikasi 2 langkah (V2L) Moonton?': 'How does Moonton two-step verification work?',
    'Admin akan menghubungi kamu saat booster login pertama kali untuk meminta kode verifikasi sekali masuk. Setelah selesai, kamu wajib mengganti password.': 'Our admin will coordinate any one-time verification needed for a Regular Boost. Update your password after the service is complete.',
    'Apa bedanya Joki Reguler dan Joki Gendong?': 'What is the difference between Regular Boost and Duo Carry?',
    'Joki Reguler dimainkan langsung oleh booster di akunmu. Joki Gendong adalah mabar party bersama booster tanpa perlu memberikan data login akun.': 'For Regular Boost, a booster plays on your account. With Duo Carry, you play on your own account in a party with a booster without sharing login details.',
    'Bagaimana jika kalah saat paket Joki Gendong?': 'What if I lose during a Duo Carry package?',
    'Setiap kekalahan pada paket Gendong (Per-Rank maupun Per-Win) langsung diganti 1 win tambahan gratis hingga target tercapai.': 'For eligible Duo Carry packages, a loss is replaced with an additional win under the service terms.',
    'Bagaimana cara klaim diskon volume hingga 20%?': 'How do I get volume discounts of up to 20%?',
    'Diskon volume otomatis terhitung di kalkulator: ≥ Rp 100k (5%), ≥ Rp 300k (10%), ≥ Rp 600k (15%), dan ≥ Rp 1 Jt (20%).': 'The calculator applies volume discounts automatically: ≥ Rp 100k (5%), ≥ Rp 300k (10%), ≥ Rp 600k (15%), and ≥ Rp 1 million (20%).',
    'Snowball': 'Snowball',
    'Kondisi tim yang unggul gold dan level sejak early game sehingga terus menekan objektif tanpa memberi ruang comeback.': 'A team builds an early gold and level lead, then keeps pressure on objectives and limits comeback chances.',
    'Freeze Lane': 'Freeze Lane',
    'Menahan gelombang minion di dekat turret sendiri agar exp laner atau gold laner lawan kehilangan gold & EXP.': 'Holding a minion wave near your own turret to deny the opposing EXP or Gold Laner gold and experience.',
    'Zoning': 'Zoning',
    'Tugas Roamer atau EXP Laner menutup jalur masuk jungler lawan saat kontes Turtle atau Lord.': 'A Roamer or EXP Laner controls enemy access during a Turtle or Lord contest.',
    'Lord Dance': 'Lord Dance',
    'Memancing tim lawan keluar dari semak di area Lord sebelum memutuskan teamfight atau eksekusi Retribution.': 'Drawing the enemy team out near Lord before committing to a team fight or using Retribution.',
    'High Ground': 'High Ground',
    'Hero dengan jangkauan skill jauh (seperti Wu Zetian, Xavier, Pharsa) yang kuat mempertahankan base turret.': 'Heroes with long-range skills who can defend base turrets effectively.',
    'Split Push': 'Split Push',
    'Strategi mendorong turret di lane seberang secara diam-diam saat tim lawan berkumpul di lane lain.': 'Pushing a turret in another lane while the opposing team groups elsewhere.',
    'Setelah Reset Season S42 → S43, akun kamu akan ditempatkan di Grandmaster II atau Grandmaster I.': 'After the S42 → S43 reset, your account is expected to be placed in Grandmaster II or I.',
    'Setelah Reset Season S42 → S43, akun kamu akan ditempatkan di Epic IV atau Epic III.': 'After the S42 → S43 reset, your account is expected to be placed in Epic IV or III.',
    'Setelah Reset Season S42 → S43, akun kamu akan ditempatkan di Epic II.': 'After the S42 → S43 reset, your account is expected to be placed in Epic II.',
    'Setelah Reset Season S42 → S43, akun kamu akan ditempatkan di Epic I (tier tertinggi awal musim).': 'After the S42 → S43 reset, your account is expected to be placed in Epic I (the highest starting placement).',
    'Setelah Reset Season S42 → S43, akun kamu akan ditempatkan di Legend V.': 'After the S42 → S43 reset, your account is expected to be placed in Legend V.',
    'Setelah Reset Season S42 → S43, akun kamu akan ditempatkan di Legend V dengan tambahan Star Protection Card.': 'After the S42 → S43 reset, your account is expected to be placed in Legend V with a Star Protection Card.',
    'Order ≥ Rp 100k dapat diskon 5%': '5% off orders ≥ Rp 100k',
    'Order ≥ Rp 300k dapat diskon 10%': '10% off orders ≥ Rp 300k',
    'Order ≥ Rp 600k dapat diskon 15%': '15% off orders ≥ Rp 600k',
    'Order ≥ Rp 1 Jt dapat diskon 20%': '20% off orders ≥ Rp 1 million',
    'Diskon Volume: 0% (Order ≥ Rp 100k hemat 5%)': 'Volume discount: 0% (save 5% on orders ≥ Rp 100k)',
    'Harga Resmi': 'Standard Price',
    'Tampilkan': 'Show',
    'Belum ada hero dipilih (Booster bebas pilih meta terkuat)': 'No hero selected (the booster can choose a strong meta hero)',
    'Hero tidak ditemukan. Coba kata kunci lain.': 'No heroes found. Try another search.',
    'Epic V – I → Turun ke Grandmaster II / I': 'Epic V–I → Reset to Grandmaster II / I',
    'Legend V – I → Turun ke Epic IV / III': 'Legend V–I → Reset to Epic IV / III',
    'Mythic (0★ – 24★) → Turun ke Epic II': 'Mythic (0★–24★) → Reset to Epic II',
    'Mythic Honor (25★ – 49★) → Turun ke Epic I': 'Mythic Honor (25★–49★) → Reset to Epic I',
    'Mythic Glory (50★ – 99★) → Turun ke Legend V': 'Mythic Glory (50★–99★) → Reset to Legend V',
    'Mythic Immortal (100★+) → Turun ke Legend V (Bonus Protection)': 'Mythic Immortal (100★+) → Reset to Legend V (Bonus Protection)',
    'Masukkan Target WR lebih besar dari WR saat ini (maks. 99.9%).': 'Enter a target win rate above your current rate (maximum 99.9%).',
    'Kamu butuh': 'You need',
    'Win Tanpa Kalah': 'Wins Without a Loss',
    'berturut-turut untuk mencapai WR': 'in a row to reach a win rate of',
    'Cari nama hero (A–Z), misal: Fanny, Hayabusa, Obsidia, Sora...': 'Search heroes (A–Z), e.g. Fanny, Hayabusa, Obsidia, Sora...',
    'Cari istilah: Snowball, Freeze Lane, Zoning, Lord Dance...': 'Search terms: Snowball, Freeze Lane, Zoning, Lord Dance...'
  };
  const pageTitles = {
    harga: { ID: 'Harga Joki MLBB', EN: 'MLBB Boosting Prices' },
    joki: { ID: 'Layanan Joki MLBB', EN: 'MLBB Boosting Services' },
    tools: { ID: 'Tools Gratis MLBB', EN: 'Free MLBB Tools' },
    blog: { ID: 'Blog BengkelML', EN: 'BengkelML Blog' },
    faq: { ID: 'FAQ BengkelML', EN: 'BengkelML FAQ' }
  };
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let currentLanguage = 'ID';

  function preserveWhitespace(value, replacement) {
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    return `${leading}${replacement}${trailing}`;
  }

  function translateHomeValue(value) {
    if (homeTranslations[value]) return homeTranslations[value];
    let match = value.match(/^Mata uang diubah ke (.+)$/);
    if (match) return `Currency changed to ${match[1]}`;
    match = value.match(/^Diskon Otomatis: (\d+)% AKTIF$/);
    if (match) return `Automatic Discount: ${match[1]}% ACTIVE`;
    match = value.match(/^Hemat (\d+)%$/);
    if (match) return `Save ${match[1]}%`;
    match = value.match(/^(\d+) Win Garansi$/);
    if (match) return `${match[1]} Guaranteed Wins`;
    match = value.match(/^(\d+) Bintang$/);
    if (match) return `${match[1]} Stars`;
    match = value.match(/^± (\d+) Jam$/);
    if (match) return `Approx. ${match[1]} hours`;
    match = value.match(/^± (\d+) Hari \((\d+) Jam\)$/);
    if (match) return `Approx. ${match[1]} days (${match[2]} hours)`;
    match = value.match(/^Paket (\d+) Win Mabar$/);
    if (match) return `${match[1]}-Win Duo Carry Package`;
    match = value.match(/^Menampilkan (\d+) Hero \(Urut A–Z\)$/);
    if (match) return `Showing ${match[1]} heroes (A–Z)`;
    if (value === 'Belum ada hero dipilih (Booster bebas pilih meta terkuat)') {
      return 'No hero selected (the booster can choose a strong meta hero)';
    }
    if (value === 'Hero tidak ditemukan. Coba kata kunci lain.') {
      return 'No heroes found. Try another search.';
    }
    return value;
  }

  function translateHome() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement && node.parentElement.closest('script, style')) continue;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      const translated = currentLanguage === 'EN' ? translateHomeValue(trimmed) : trimmed;
      node.nodeValue = preserveWhitespace(source, translated || trimmed);
    }

    document.querySelectorAll('input[placeholder], [title], [aria-label]').forEach((element) => {
      ['placeholder', 'title', 'aria-label'].forEach((attribute) => {
        const sourceValue = originalAttributes.get(element)?.[attribute] ?? element.getAttribute(attribute);
        if (sourceValue === null || sourceValue === undefined) return;
        if (!originalAttributes.has(element)) originalAttributes.set(element, {});
        originalAttributes.get(element)[attribute] = sourceValue;
        const translated = currentLanguage === 'EN' ? translateHomeValue(sourceValue) : sourceValue;
        element.setAttribute(attribute, translated || sourceValue);
      });
    });
  }

  function translatePage() {
    document.querySelectorAll('[data-id][data-en]').forEach((element) => {
      const value = currentLanguage === 'EN' ? element.dataset.en : element.dataset.id;
      if (element.dataset.i18nHtml === 'true') element.innerHTML = value;
      else element.textContent = value;
    });
    const pageName = document.body.dataset.page;
    const title = pageTitles[pageName];
    if (title) document.title = title[currentLanguage];
  }

  function setSiteLanguage(language) {
    currentLanguage = language === 'EN' ? 'EN' : 'ID';
    localStorage.setItem('bengkelml-language', currentLanguage);
    document.documentElement.lang = currentLanguage.toLowerCase();
    document.querySelectorAll('[data-language-picker], #siteLanguage').forEach((select) => {
      select.value = currentLanguage;
    });
    if (document.body.dataset.page) {
      translatePage();
    } else {
      document.title = currentLanguage === 'EN'
        ? 'BENGKELML — MLBB S42 Rank Boosting & Esports'
        : 'BENGKELML — Joki MLBB S42 & Esports Boosting';
      translateHome();
    }
  }

  function formatMoney(amount, currency) {
    const config = currencyConfig[currency] || currencyConfig.IDR;
    const converted = amount * config.rate;
    const formatted = new Intl.NumberFormat(currency === 'IDR' ? 'id-ID' : 'en', {
      minimumFractionDigits: config.decimals,
      maximumFractionDigits: config.decimals
    }).format(converted);
    return `${config.symbol}${formatted}`;
  }

  function updateSiteCurrency(currency) {
    const selected = currencyConfig[currency] ? currency : 'IDR';
    localStorage.setItem('bengkelml-currency', selected);
    document.querySelectorAll('[data-currency-code]').forEach((element) => { element.textContent = selected; });
    document.querySelectorAll('[data-price-idr]').forEach((element) => {
      element.textContent = formatMoney(Number(element.dataset.priceIdr), selected);
    });
  }

  function cycleSiteCurrency() {
    const currencies = Object.keys(currencyConfig);
    const current = localStorage.getItem('bengkelml-currency') || 'IDR';
    updateSiteCurrency(currencies[(currencies.indexOf(current) + 1) % currencies.length]);
  }

  function openInfoMenu(open) {
    const backdrop = document.getElementById('siteDrawerBackdrop');
    const drawer = document.getElementById('siteDrawer');
    const trigger = document.getElementById('siteBrandTrigger');
    if (!backdrop || !drawer || !trigger) return;
    backdrop.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    trigger.setAttribute('aria-expanded', String(open));
  }

  function handleInfoBrandClick(event) {
    if (window.matchMedia('(max-width: 1100px)').matches) {
      event.preventDefault();
      openInfoMenu(true);
    }
  }

  function makeHeader() {
    const links = [
      ['/harga/', 'Harga', 'Pricing', 'harga'],
      ['/joki/', 'Joki', 'Boosting', 'joki'],
      ['/tools/', 'Tools', 'Tools', 'tools'],
      ['/blog/', 'Blog', 'Blog', 'blog'],
      ['/faq/', 'FAQ', 'FAQ', 'faq']
    ];
    const activePage = document.body.dataset.page;
    const nav = links.map(([href, id, en, key]) => {
      if (key !== 'joki') {
        return `<a class="site-nav-link" href="${href}" ${activePage === key ? 'aria-current="page"' : ''} data-id="${id}" data-en="${en}"></a>`;
      }
      return `<div class="site-nav-dropdown"><a class="site-nav-link" href="/joki/" ${activePage === key ? 'aria-current="page"' : ''} data-id="Joki" data-en="Boosting"></a><div class="site-nav-dropdown-menu"><a href="/joki/#reguler" data-id="Joki Reguler" data-en="Regular Boost"></a><a href="/joki/#gendong" data-id="Joki Gendong" data-en="Duo Carry"></a></div></div>`;
    }).join('');
    const linkItems = [
      ['/harga/', 'Harga', 'Pricing'],
      ['/joki/#reguler', 'Joki Reguler', 'Regular Boost'],
      ['/joki/#gendong', 'Joki Gendong', 'Duo Carry'],
      ['/tools/', 'Tools Gratis', 'Free Tools'],
      ['/blog/', 'Blog', 'Blog'],
      ['/faq/', 'FAQ', 'FAQ']
    ];
    const drawerLinks = linkItems.map(([href, id, en]) => `<a href="${href}" data-id="${id}" data-en="${en}"></a>`).join('');
    return `
      <header class="site-header">
        <div class="site-header-inner">
          <a class="site-brand" id="siteBrandTrigger" href="/" aria-label="BengkelML" aria-controls="siteDrawer" aria-expanded="false" onclick="handleInfoBrandClick(event)">
            <span class="site-brand-mark">B</span><span class="site-brand-name">BENGKEL<span>ML</span><small>RANK SERVICE</small></span>
          </a>
          <nav class="site-nav" aria-label="Primary navigation">${nav}</nav>
          <div class="site-actions">
            <button type="button" class="site-currency site-currency-top" onclick="cycleSiteCurrency()" title="Change currency"><span data-currency-code>IDR</span> ↻</button>
            <label><span class="visually-hidden">Choose language</span><select class="site-language" data-language-picker aria-label="Choose language"><option value="ID">ID</option><option value="EN">ENG</option></select></label>
            <a class="site-order" href="/tools/#sec-calculator" data-id="Order Sekarang" data-en="Order Now">Order Sekarang</a>
          </div>
        </div>
      </header>
      <div id="siteDrawerBackdrop" class="site-drawer-backdrop" onclick="openInfoMenu(false)"></div>
      <aside id="siteDrawer" class="site-drawer" aria-label="Site navigation">
        <div class="site-drawer-head"><span class="site-brand-name">BENGKEL<span>ML</span></span><button type="button" class="site-drawer-close" aria-label="Close menu" onclick="openInfoMenu(false)">×</button></div>
        <nav class="site-drawer-links">${drawerLinks}</nav>
        <button type="button" class="site-currency site-currency-drawer" onclick="cycleSiteCurrency()"><span data-currency-code>IDR</span> · <span data-id="Ganti mata uang" data-en="Change currency">Ganti mata uang</span></button>
        <div class="site-drawer-note" data-id="Jasa joki MLBB Season 42. Tanpa cheat, harga transparan, dan admin siap membantu." data-en="MLBB Season 42 rank boosting. No cheats, transparent pricing, and a helpful admin team."></div>
      </aside>`;
  }

  function makeFooter() {
    return `<div class="site-footer-inner"><div><a class="site-brand" href="/"><span class="site-brand-mark">B</span><span class="site-brand-name">BENGKEL<span>ML</span><small>RANK SERVICE</small></span></a><p data-id="Joki &amp; gendong MLBB dengan harga transparan dan proses yang jelas." data-en="MLBB rank boosting and duo carry with transparent pricing and a clear process."></p></div><nav class="site-footer-nav"><a href="/harga/" data-id="Harga" data-en="Pricing"></a><a href="/joki/" data-id="Joki" data-en="Boosting"></a><a href="/tools/" data-id="Tools" data-en="Tools"></a><a href="/blog/" data-id="Blog" data-en="Blog"></a><a href="/faq/" data-id="FAQ" data-en="FAQ"></a></nav></div>`;
  }

  function initInfoPage() {
    if (!document.body.dataset.page) return;
    const header = document.getElementById('siteHeader');
    const footer = document.getElementById('siteFooter');
    if (header) header.innerHTML = makeHeader();
    if (footer) footer.innerHTML = `<footer class="site-footer">${makeFooter()}</footer>`;
    const currency = localStorage.getItem('bengkelml-currency') || 'IDR';
    updateSiteCurrency(currency);
    setSiteLanguage(localStorage.getItem('bengkelml-language') || 'ID');
    document.querySelectorAll('[data-language-picker]').forEach((select) => {
      select.addEventListener('change', () => setSiteLanguage(select.value));
    });
  }

  window.setSiteLanguage = setSiteLanguage;
  window.setSiteCurrency = updateSiteCurrency;
  window.cycleSiteCurrency = cycleSiteCurrency;
  window.openInfoMenu = openInfoMenu;
  window.handleInfoBrandClick = handleInfoBrandClick;
  window.translateSiteText = (text) => currentLanguage === 'EN' ? translateHomeValue(text) : text;

  if (document.body.dataset.page) {
    initInfoPage();
  } else {
    const storedLanguage = localStorage.getItem('bengkelml-language') || 'ID';
    setSiteLanguage(storedLanguage);
    const observer = new MutationObserver((records) => {
      if (currentLanguage !== 'EN') return;
      let hasAddedElements = false;
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            const source = originalText.get(node);
            node.nodeValue = preserveWhitespace(source, translateHomeValue(source.trim()));
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            hasAddedElements = true;
          }
        });
      });
      if (hasAddedElements) translateHome();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
