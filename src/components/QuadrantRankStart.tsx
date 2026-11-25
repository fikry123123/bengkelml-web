import { ranks, getRank } from '../data/ranks';
import type { RankSelection } from '../utils/calculator';
import { RankEmblem } from '../assets/rankEmblems';

type Props = { value: RankSelection; onChange: (value: RankSelection) => void };

export function QuadrantRankStart({ value, onChange }: Props) {
  const rank = getRank(value.rankId);
  return (
    <div className="quadrant rank-quadrant">
      <div className="quadrant-title"><span className="step-number">A</span><div><h3>Rank awal</h3><p>Posisi rank kamu sekarang</p></div></div>
      <div className="rank-select-row"><RankEmblem rankId={rank.id} className="rank-emblem" /><select aria-label="Pilih rank awal" value={rank.id} onChange={(event) => onChange({ rankId: event.target.value, division: 0, stars: 0 })}>{ranks.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div>
      {rank.divisions > 0 && <label className="field-label">Divisi<select value={value.division} onChange={(event) => onChange({ ...value, division: Number(event.target.value) })}>{rank.divisionNames.map((division, index) => <option key={division} value={index}>{rank.shortName} {division}</option>)}</select></label>}
      <label className="field-label">Bintang<div className="stepper"><button onClick={() => onChange({ ...value, stars: Math.max(rank.minStars, value.stars - 1) })} aria-label="Kurangi bintang">−</button><input type="number" min={rank.minStars} max={rank.maxStars} value={value.stars} onChange={(event) => onChange({ ...value, stars: Math.max(rank.minStars, Number(event.target.value)) })} /><button onClick={() => onChange({ ...value, stars: Math.min(rank.maxStars, value.stars + 1) })} aria-label="Tambah bintang">+</button></div></label>
      <p className="field-hint">Isi sesuai bintang pada akun saat ini.</p>
    </div>
  );
}
