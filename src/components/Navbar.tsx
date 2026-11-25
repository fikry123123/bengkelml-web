type NavbarProps = { onOpenTools: () => void; onOrder: () => void; currency: string; onCycleCurrency: () => void };

export function Navbar({ onOpenTools, onOrder, currency, onCycleCurrency }: NavbarProps) {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="BengkelML beranda">
        <span className="brand-mark">B</span>
        <span className="brand-name">BENGKEL<span>ML</span><small>RANK SERVICE</small></span>
      </a>
      <nav className="nav-links" aria-label="Navigasi utama">
        <a href="#layanan">Layanan</a><a href="#harga">Harga</a><a href="#ulasan">Ulasan</a><a href="#faq">FAQ</a>
      </nav>
      <div className="nav-actions">
        <button className="button button-quiet" onClick={onOpenTools}>Tools Gratis</button>
        <button className="button button-quiet currency-button" onClick={onCycleCurrency} title="Ganti mata uang">{currency} ↻</button>
        <button className="button button-gold" onClick={onOrder}>Order WhatsApp <span aria-hidden="true">↗</span></button>
      </div>
    </header>
  );
}
