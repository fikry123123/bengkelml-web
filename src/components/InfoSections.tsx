import { useState } from 'react';
import { advantages, faqs, seasonGuide, testimonials } from '../data/content';

export function InfoSections() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  return (
    <>
      <section className="section services-section" id="sec-services">
        <div className="section-heading"><p className="eyebrow">PILIH METODE MAIN</p><h2>Dua cara menuju<br /><span>rank impian.</span></h2><p>Pilih layanan yang paling nyaman untuk akun dan gaya mainmu.</p></div>
        <div className="service-cards">
          <article className="service-card regular-service"><div className="service-card-head"><h3>1. Joki Rank Reguler</h3><span>Paling laris</span></div><p>Akun dimainkan langsung oleh booster profesional pilihan kami sampai rank target tercapai.</p><ul><li>Gratis request hingga 3 hero meta favorit</li><li>Opsi Live Stream Match &amp; Fast Track</li><li>Pengerjaan manual tanpa cheat</li></ul><a href="#kalkulator">Pilih Joki Reguler ↑</a></article>
          <article className="service-card carry-service"><div className="service-card-head"><h3>2. Joki Gendong (Carry Mabar)</h3><span>Tanpa login</span></div><p>Main bareng booster di party yang sama. Kamu tetap bermain tanpa menyerahkan akun.</p><ul><li>Tanpa password atau data login</li><li>Pilihan paket Per-Rank atau Per-Win</li><li>Garansi kalah diganti 1 win gratis</li></ul><a href="#kalkulator">Pilih Joki Gendong ↑</a></article>
        </div>
      </section>
      <section className="section services-section" id="layanan">
        <div className="section-heading"><p className="eyebrow">KENAPA BENGKELML</p><h2>Push rank lebih tenang,<br /><span>tanpa drama.</span></h2><p>Fokus ke permainan terbaikmu. Urusan rank, biar kami bantu.</p></div>
        <div className="advantage-grid">{advantages.map((item) => <article className="advantage-card" key={item.title}><span className="advantage-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="guide-band">
        <div className="guide-intro"><p className="eyebrow">MUDAH & TERARAH</p><h2>Cara order<br />di BengkelML</h2><p>Mulai dari pilih rank sampai konfirmasi pesanan, semuanya praktis.</p></div>
        <ol className="guide-steps">{seasonGuide.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol>
      </section>
      <section className="section testimonials-section" id="ulasan">
        <div className="section-heading"><p className="eyebrow">KATA MEREKA</p><h2>Dipercaya para<br /><span>pejuang rank.</span></h2></div>
        <div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><div className="stars">{'★'.repeat(item.rating)}</div><p className="quote">“{item.quote}”</p><div className="reviewer"><span className="avatar">{item.name.charAt(0)}</span><span><b>{item.name}</b><small>{item.rank}</small></span><span className="verified">✓</span></div></article>)}</div>
      </section>
      <section className="section faq-section" id="faq">
        <div className="faq-intro"><p className="eyebrow">PUNYA PERTANYAAN?</p><h2>Yang sering<br /><span>ditanyakan.</span></h2><p>Belum menemukan jawaban? Admin kami siap membantu lewat WhatsApp.</p><a className="text-link" href="https://wa.me/62895391187744" target="_blank" rel="noreferrer">Chat admin <span>↗</span></a></div>
        <div className="faq-list">{faqs.map((faq, index) => <article className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={faq.question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{faq.question}</span><b>{activeFaq === index ? '−' : '+'}</b></button>{activeFaq === index && <p>{faq.answer}</p>}</article>)}</div>
      </section>
      <section className="payment-methods">
        <div><p className="eyebrow">PEMBAYARAN MUDAH</p><h2>Metode pembayaran</h2><p>Pembayaran diproses setelah detail order dikonfirmasi admin WhatsApp.</p></div>
        <div className="payment-badges">{['QRIS Instan', 'DANA', 'GoPay', 'OVO', 'ShopeePay', 'BCA', 'Mandiri', 'Wise', "Touch ’n Go", 'PayNow'].map((method) => <span key={method}>{method}</span>)}</div>
      </section>
    </>
  );
}
