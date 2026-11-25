import { useMemo, useRef, useState } from 'react';
import { CalculatorContainer, type CalculatorState } from './components/CalculatorContainer';
import { Footer } from './components/Footer';
import { HeroSeasonBar } from './components/HeroSeasonBar';
import { InfoSections } from './components/InfoSections';
import { Navbar } from './components/Navbar';
import { PricingTable } from './components/PricingTable';
import { ShieldAccordion } from './components/ShieldAccordion';
import { ToolsDrawer } from './components/ToolsDrawer';
import { heroes } from './data/heroes';
import { getSelectionForPoint, getRankPoint } from './data/ranks';
import { calculateQuote, describeRank, normalizeSelection } from './utils/calculator';
import { copyText, createOrderMessage, openWhatsApp } from './utils/whatsapp';

const initialState: CalculatorState = {
  start: { rankId: 'epic', division: 3, stars: 3 },
  target: { rankId: 'honor', division: 0, stars: 25 },
  selectedHeroes: ['Hayabusa'],
  priority: false,
  livestream: false,
  mode: 'regular',
  billing: 'rank',
  winCount: 1,
  paymentMethod: 'QRIS',
  currency: 'IDR',
  mlbbId: '',
};

function App() {
  const [calculator, setCalculator] = useState(initialState);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const calculatorRef = useRef<HTMLDivElement>(null);
  const quote = useMemo(() => calculateQuote(
    calculator.start,
    calculator.target,
    calculator.priority,
    calculator.livestream,
    calculator.mode,
    calculator.billing,
    calculator.winCount,
  ), [calculator]);

  function updateCalculator(next: CalculatorState) {
    const start = normalizeSelection(next.start);
    let target = normalizeSelection(next.target);
    const startPoint = getRankPoint(start.rankId, start.division, start.stars);
    const targetPoint = getRankPoint(target.rankId, target.division, target.stars);
    if (targetPoint <= startPoint) target = getSelectionForPoint(startPoint + 1);
    setCalculator({ ...next, start, target });
  }

  function orderMessage() {
    return createOrderMessage({
      startRank: describeRank(calculator.start),
      targetRank: describeRank(calculator.target),
      stars: quote.stars,
      total: quote.total,
      heroes: calculator.selectedHeroes,
      priority: calculator.priority,
      livestream: calculator.livestream,
      mode: calculator.mode,
      billing: calculator.billing,
      winCount: calculator.winCount,
      currency: calculator.currency,
      paymentMethod: calculator.paymentMethod,
      mlbbId: calculator.mlbbId,
    });
  }

  function showNotice(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2800);
  }

  async function copyOrder() {
    try {
      await copyText(orderMessage());
      showNotice('Format pesanan berhasil disalin.');
    } catch (error) {
      showNotice(error instanceof Error ? error.message : 'Gagal menyalin format pesanan.');
    }
  }

  function goToCalculator() {
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  const formattedTotal = new Intl.NumberFormat(calculator.currency === 'IDR' ? 'id-ID' : 'en', {
    style: 'currency',
    currency: calculator.currency,
    maximumFractionDigits: calculator.currency === 'IDR' ? 0 : 2,
  }).format(quote.total);

  return (
    <div id="home">
      <div className="top-shell"><Navbar
        onOpenTools={() => setToolsOpen(true)}
        onOrder={() => setCheckoutOpen(true)}
        currency={calculator.currency}
        onCycleCurrency={() => updateCalculator({ ...calculator, currency: calculator.currency === 'IDR' ? 'MYR' : calculator.currency === 'MYR' ? 'SGD' : 'IDR' })}
      /><HeroSeasonBar /></div>
      <main>
        <section className="hero-section" id="sec-calculator">
          <div className="hero-copy"><span className="hero-kicker"><span className="live-dot" /> KALKULATOR JOKI & GENDONG INSTAN S42</span>
            <h1>Joki MLBB Cepat,<br /><em>Tegas & Bergaransi.</em></h1>
            <p>Pilihan player berpengalaman dan top global Immortal. Hitung estimasi harga transparan dengan input bintang langsung dan diskon volume otomatis hingga 20%.</p>
            <div className="hero-buttons"><button className="button button-gold button-large" onClick={goToCalculator}>Hitung paket sekarang <span>↓</span></button><a className="button button-outline button-large" href="#harga">Lihat daftar harga</a></div>
            <div className="hero-proof"><span><b>100%</b> Manual no-cheat<small>Pengerjaan fair play</small></span><i /><span><b>Hingga 20%</b><small>Diskon volume otomatis</small></span><i /><span><b>24/7</b><small>Admin responsif</small></span></div>
          </div>
          <div className="hero-art" aria-label="Ilustrasi emblem rank BengkelML">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-glow" />
            <div className="hero-emblem"><span className="emblem-crown">✦</span><span className="emblem-letter">B</span><span className="emblem-name">BENGKEL<span>ML</span></span></div>
            <div className="float-card float-card-top"><span>✦</span><span><b>Season 42</b><small>Rank up, play on</small></span></div>
            <div className="float-card float-card-bottom"><span className="mini-check">✓</span><span><b>Harga transparan</b><small>Diskon otomatis sampai 20%</small></span></div>
          </div>
          <div className="hero-bottom-line"><span>100% MANUAL · NO CHEAT</span><span>SCROLL UNTUK JELAJAHI ↓</span></div>
        </section>
        <div className="content-wrap">
          <div ref={calculatorRef}><CalculatorContainer value={calculator} onChange={updateCalculator} heroes={heroes} quote={quote} onOrder={() => setCheckoutOpen(true)} onCopy={copyOrder} /></div>
          <ShieldAccordion />
          <PricingTable />
          <InfoSections />
        </div>
        <div className="bottom-tools-trigger"><div><b>UTILITAS GRATIS PLAYER MLBB</b><span>Kalkulator Winrate (WR), Reset Season &amp; Kamus MLBB</span></div><button className="button button-quiet" onClick={() => setToolsOpen(true)}>Buka tools gratis ↓</button></div>
      </main>
      <Footer />
      <ToolsDrawer open={toolsOpen} onClose={() => setToolsOpen(false)} />
      {notice && <div className="toast-banner" role="status">{notice}</div>}
      {checkoutOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setCheckoutOpen(false); }}>
        <section className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
          <button className="icon-button modal-close" onClick={() => setCheckoutOpen(false)} aria-label="Tutup">×</button>
          <p className="eyebrow">KONFIRMASI ORDER BENGKELML</p><h2 id="checkout-title">Cek detail pesananmu</h2>
          <div className="checkout-receipt">
            <div><span>Season</span><b>Season 42 (S42)</b></div>
            <div><span>Layanan</span><b>{calculator.mode === 'regular' ? 'Joki Reguler' : 'Gendong (Mabar)'}</b></div>
            <div><span>Rute rank</span><b>{describeRank(calculator.start)} → {calculator.billing === 'win' ? `${calculator.winCount} Win Mabar` : describeRank(calculator.target)}</b></div>
            <div><span>Add-ons</span><b>{calculator.selectedHeroes.join(', ') || 'Standar'}{calculator.priority ? ' · Fast Track' : ''}{calculator.livestream && calculator.mode === 'regular' ? ' · Live Stream' : ''}</b></div>
            <div><span>Pembayaran</span><b>{calculator.paymentMethod}</b></div>
            {calculator.mode === 'carry' && calculator.mlbbId && <div><span>ID &amp; Server</span><b>{calculator.mlbbId}</b></div>}
            <div className="checkout-total"><span>Total estimasi</span><b>{formattedTotal}</b></div>
          </div>
          <p className="checkout-note">Harga final dan ketersediaan booster akan dikonfirmasi oleh admin sebelum pengerjaan.</p>
          <button className="button button-whatsapp" onClick={() => { openWhatsApp(orderMessage()); setCheckoutOpen(false); }}>Konfirmasi & buka WhatsApp ↗</button>
          <button className="copy-order-button" onClick={copyOrder}>Salin format pesanan</button>
        </section>
      </div>}
    </div>
  );
}

export default App;
