import { ranks } from '../data/ranks';
import { formatRupiah } from '../utils/calculator';

export function PricingTable() {
  return (
    <section className="section pricing-section" id="harga">
      <div className="section-heading"><p className="eyebrow">DAFTAR HARGA RESMI S42</p><h2>Jelas dari awal,<br /><span>nyaman sampai tujuan.</span></h2><p>Tarif dasar per bintang. Diskon paket otomatis dihitung dari jumlah bintang.</p></div>
      <div className="pricing-table-wrap">
        <table className="pricing-table"><thead><tr><th>Tier rank</th><th>Divisi / pencapaian</th><th>Joki reguler /★</th><th>Joki gendong /★</th></tr></thead>
          <tbody>{ranks.map((rank) => <tr key={rank.id}><td><span className="rank-dot" style={{ backgroundColor: rank.accent }} />{rank.shortName}</td><td>{rank.divisions ? `${rank.divisionNames.length} divisi · hingga ${rank.starsPerDivision}★` : rank.id === 'mythic' ? '0★ – 24★' : rank.id === 'honor' ? '25★ – 49★' : rank.id === 'glory' ? '50★ – 99★' : '100★+'}</td><td>{formatRupiah(rank.regularRate)} <small>/★</small></td><td>{formatRupiah(rank.carryRate)} <small>/★</small></td></tr>)}</tbody>
        </table>
        <div className="discount-pills"><span>≥ Rp100k: diskon 5%</span><span>≥ Rp300k: diskon 10%</span><span>≥ Rp600k: diskon 15%</span><span>≥ Rp1jt: diskon 20%</span></div>
        <p className="table-note">* Harga dapat menyesuaikan kondisi akun dan antrean. Admin akan mengonfirmasi harga final sebelum order.</p>
      </div>
    </section>
  );
}
