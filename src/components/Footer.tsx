export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">B</span><span className="brand-name">BENGKEL<span>ML</span><small>RANK SERVICE</small></span></a><p>Partner push rank Mobile Legends yang mengutamakan komunikasi, transparansi, dan kenyamanan.</p></div>
        <div className="footer-column"><h3>Jelajahi</h3><a href="#layanan">Layanan</a><a href="#harga">Daftar harga</a><a href="#ulasan">Testimoni</a><a href="#faq">FAQ</a></div>
        <div className="footer-column"><h3>Layanan</h3><a href="#kalkulator">Push rank</a><a href="#kalkulator">Pilih hero</a><a href="#kalkulator">Paket prioritas</a><a href="#kalkulator">Live progress</a></div>
        <div className="footer-column footer-contact"><h3>Butuh bantuan?</h3><p>Admin BengkelML siap membantu detail order dan jadwal pengerjaan.</p><a className="footer-wa" href="https://wa.me/62895391187744" target="_blank" rel="noreferrer">WhatsApp admin ↗</a><span className="footer-social">@bengkelml.id · Instagram &amp; TikTok</span></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} BengkelML. All rights reserved.</span><span>Mobile Legends: Bang Bang adalah merek dagang Moonton. BengkelML tidak berafiliasi dengan Moonton.</span><a href="#home">Kembali ke atas ↑</a></div>
    </footer>
  );
}
