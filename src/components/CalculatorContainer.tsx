import type { Hero } from '../data/heroes';
import type { BillingMode, Currency, Quote, RankSelection, ServiceMode } from '../utils/calculator';
import { QuadrantRankStart } from './QuadrantRankStart';
import { QuadrantRankTarget } from './QuadrantRankTarget';
import { QuadrantAddons } from './QuadrantAddons';
import { QuadrantSummary } from './QuadrantSummary';

export type CalculatorState = {
  start: RankSelection;
  target: RankSelection;
  selectedHeroes: string[];
  priority: boolean;
  livestream: boolean;
  mode: ServiceMode;
  billing: BillingMode;
  winCount: number;
  paymentMethod: string;
  currency: Currency;
  mlbbId: string;
};

type Props = {
  value: CalculatorState;
  onChange: (value: CalculatorState) => void;
  heroes: Hero[];
  quote: Quote;
  onOrder: () => void;
  onCopy: () => void;
};

export function CalculatorContainer({ value, onChange, heroes, quote, onOrder, onCopy }: Props) {
  return (
    <section className="calculator-panel" id="kalkulator">
      <div className="calculator-heading"><div><p className="eyebrow">KALKULATOR PAKET</p><h2>Atur target rank-mu</h2></div><span className="secure-tag">◈ Harga transparan</span></div>
      <div className="service-switch" role="group" aria-label="Pilih metode layanan">
        <button className={value.mode === 'regular' ? 'active' : ''} onClick={() => onChange({ ...value, mode: 'regular', billing: 'rank' })}>♧ Joki Reguler</button>
        <button className={value.mode === 'carry' ? 'active' : ''} onClick={() => onChange({ ...value, mode: 'carry' })}>♙ Joki Gendong (Mabar)</button>
      </div>
      <div className="service-mode-note">{value.mode === 'regular' ? 'Akun dimainkan langsung oleh booster. Request hingga 3 hero favorit gratis.' : 'Mabar dalam party bersama booster, tanpa perlu memberikan data login akun.'}<b>{value.mode === 'regular' ? 'FAST LANE' : 'PARTY CARRY'}</b></div>
      {value.mode === 'carry' && <div className="billing-switch">
        <button className={value.billing === 'rank' ? 'active' : ''} onClick={() => onChange({ ...value, billing: 'rank' })}>Per Rank (target bintang)</button>
        <button className={value.billing === 'win' ? 'active' : ''} onClick={() => onChange({ ...value, billing: 'win' })}>Per Win</button>
        {value.billing === 'win' && <div className="win-packs">{[1, 3, 5].map((count) => <button key={count} className={value.winCount === count ? 'active' : ''} onClick={() => onChange({ ...value, winCount: count })}>{count} Win{count === 5 ? ' · Hemat 5%' : ''}</button>)}</div>}
        <label className="mlbb-id-field">ID &amp; Server MLBB <small>(opsional untuk mabar)</small><input value={value.mlbbId} onChange={(event) => onChange({ ...value, mlbbId: event.target.value })} placeholder="Contoh: 123456789 (2345)" /></label>
      </div>}
      <div className="calculator-grid">
        <QuadrantRankStart value={value.start} onChange={(start) => onChange({ ...value, start })} />
        {!(value.mode === 'carry' && value.billing === 'win') && <QuadrantRankTarget start={value.start} value={value.target} onChange={(target) => onChange({ ...value, target })} />}
        <QuadrantAddons mode={value.mode} heroes={heroes} selected={value.selectedHeroes} priority={value.priority} livestream={value.livestream}
          onHeroesChange={(selectedHeroes) => onChange({ ...value, selectedHeroes })}
          onPriorityChange={(priority) => onChange({ ...value, priority })}
          onLivestreamChange={(livestream) => onChange({ ...value, livestream })} />
        <QuadrantSummary value={value} quote={quote} onOrder={onOrder} onCopy={onCopy} onPaymentChange={(paymentMethod) => onChange({ ...value, paymentMethod })} />
      </div>
    </section>
  );
}
