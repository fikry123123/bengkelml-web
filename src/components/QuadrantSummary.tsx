import type { CalculatorState } from './CalculatorContainer';
import type { Quote } from '../utils/calculator';
import { describeRank, formatRupiah } from '../utils/calculator';

type Props = { value: CalculatorState; quote: Quote; onOrder: () => void; onCopy: () => void; onPaymentChange: (payment: string) => void };

export function QuadrantSummary({ value, quote, onOrder, onCopy, onPaymentChange }: Props) {
  const paymentOptions = ['QRIS', 'DANA', 'GoPay', 'OVO', 'ShopeePay', 'BCA', 'Wise / SEA'];
  return (
    <div className="quadrant summary-quadrant">
      <div className="quadrant-title"><span className="step-number">D</span><div><h3>Ringkasan estimasi</h3><p>Rincian paket kamu</p></div></div>
      <div className="summary-route"><span>{describeRank(value.start)}</span><i>→</i><span>{value.billing === 'win' ? `PAKET ${value.winCount} WIN` : describeRank(value.target)}</span></div>
      <div className="discount-progress"><div><b>{quote.discountRate ? `Diskon otomatis: ${Math.round(quote.discountRate * 100)}% aktif` : 'Diskon volume: 0%'}</b><span>{quote.nextDiscountHint}</span></div><i><span style={{ width: `${quote.discountRate ? Math.min(100, Math.round(quote.gross / 1_000_000 * 100)) : Math.min(25, quote.gross / 4000)}%` }} /></i></div>
      <div className="summary-lines">
        <div><span>Metode layanan</span><b>{value.mode === 'regular' ? 'Joki Reguler' : 'Gendong (Mabar)'}</b></div>
        <div><span>Total bintang / win</span><b>{quote.units} {value.billing === 'win' ? 'Win' : 'Bintang'}</b></div>
        <div><span>Tarif rata-rata</span><b>{formatRupiah(quote.averageRate, value.currency)} / {value.billing === 'win' ? 'Win' : '★'}</b></div>
        <div><span>Add-ons aktif</span><b>{value.selectedHeroes.length && value.mode === 'regular' ? value.selectedHeroes.join(', ') : 'Standar'}{value.priority ? ' · Fast Track' : ''}{value.livestream && value.mode === 'regular' ? ' · Live Stream' : ''}</b></div>
        <div><span>Estimasi waktu</span><b>± {quote.timeHours <= 24 ? `${quote.timeHours} jam` : `${Math.ceil(quote.timeHours / 24)} hari (${quote.timeHours} jam)`}</b></div>
        {quote.discount > 0 && <div className="discount-line"><span>Hemat diskon</span><b>−{formatRupiah(quote.discount, value.currency)}</b></div>}
      </div>
      <div className="payment-selector"><span>Pilih metode pembayaran:</span><div>{paymentOptions.map((option) => <button key={option} className={value.paymentMethod === option ? 'active' : ''} onClick={() => onPaymentChange(option)}>{option}</button>)}</div></div>
      <div className="summary-total"><span>ESTIMASI TOTAL</span><strong>{formatRupiah(quote.total, value.currency)}</strong></div>
      <div className="time-estimate"><span>◷</span><span>± {quote.matches} match <small>· estimasi sekitar {quote.minutes} menit bermain</small></span></div>
      <button className="button button-whatsapp" onClick={onOrder}>Order via WhatsApp <span aria-hidden="true">↗</span></button>
      <button className="copy-order-button" onClick={onCopy}>Salin format order</button>
      <p className="summary-disclaimer">Harga final dikonfirmasi admin sebelum pengerjaan.</p>
    </div>
  );
}
