import { useState } from 'react';

export function ShieldAccordion() {
  const [open, setOpen] = useState(true);
  return (
    <section className={`shield-card ${open ? 'is-open' : ''}`}>
      <button className="shield-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="shield-icon">◈</span>
        <span className="shield-title"><small>PERLINDUNGAN PESANAN</small><b>BENGKELML SHIELD</b></span>
        <span className="shield-summary">Komitmen keamanan dan layanan kami</span>
        <span className="accordion-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="shield-content">
        <div><b>Privasi akun</b><p>Informasi akun hanya digunakan untuk pesanan dan tidak dibagikan kepada pihak lain.</p></div>
        <div><b>Konfirmasi sebelum mulai</b><p>Detail paket, harga final, dan antrean dikonfirmasi admin terlebih dahulu.</p></div>
        <div><b>Komunikasi terbuka</b><p>Hubungi admin untuk mendapatkan update atau menyampaikan kendala selama pengerjaan.</p></div>
      </div>}
    </section>
  );
}
