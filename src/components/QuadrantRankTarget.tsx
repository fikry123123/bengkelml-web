import { ranks, getRank, getRankPoint } from '../data/ranks';
import type { RankSelection } from '../utils/calculator';
import { RankEmblem } from '../assets/rankEmblems';

type Props = { start: RankSelection; value: RankSelection; onChange: (value: RankSelection) => void };

export function QuadrantRankTarget({ start, value, onChange }: Props) {
  const startPoint = getRankPoint(start.rankId, start.division, start.stars);
  const targetRank = getRank(value.rankId);
  const available = ranks.filter((rank) => getRankPoint(rank.id, rank.divisions ? rank.divisions - 1 : 0, rank.maxStars) > startPoint || rank.id === value.rankId);
  function chooseRank(rankId: string) {
    const rank = getRank(rankId);
    const sameTier = rank.id === start.rankId;
    const division = sameTier && rank.divisions ? start.division : 0;
    const stars = sameTier && division === start.division ? Math.min(rank.maxStars, start.stars + 1) : rank.minStars;
    onChange({ rankId, division, stars });
  }
  const validDivisions = targetRank.divisionNames
    .map((name, index) => ({ name, index }))
    .filter(({ index }) => getRankPoint(targetRank.id, index, targetRank.maxStars) > startPoint);
  return (
    <div className="quadrant rank-quadrant target-quadrant">
      <div className="quadrant-title"><span className="step-number">B</span><div><h3>Rank tujuan</h3><p>Pilih target yang ingin dicapai</p></div></div>
      <div className="rank-select-row"><RankEmblem rankId={targetRank.id} className="rank-emblem" /><select aria-label="Pilih rank tujuan" value={targetRank.id} onChange={(event) => chooseRank(event.target.value)}>{available.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div>
      {targetRank.divisions > 0 && <label className="field-label">Divisi<select value={value.division} onChange={(event) => {
        const division = Number(event.target.value);
        const stars = targetRank.id === start.rankId && division === start.division ? Math.max(value.stars, start.stars + 1) : targetRank.minStars;
        onChange({ ...value, division, stars: Math.min(targetRank.maxStars, stars) });
      }}>{validDivisions.map(({ name, index }) => <option key={name} value={index}>{targetRank.shortName} {name}</option>)}</select></label>}
      <label className="field-label">Bintang tujuan<div className="stepper"><button onClick={() => onChange({ ...value, stars: Math.max(targetRank.minStars, value.stars - 1) })} aria-label="Kurangi bintang">−</button><input type="number" min={targetRank.minStars} max={targetRank.maxStars} value={value.stars} onChange={(event) => onChange({ ...value, stars: Math.max(targetRank.minStars, Number(event.target.value)) })} /><button onClick={() => onChange({ ...value, stars: Math.min(targetRank.maxStars, value.stars + 1) })} aria-label="Tambah bintang">+</button></div></label>
      <p className="field-hint">Target otomatis dijaga lebih tinggi dari rank awal.</p>
    </div>
  );
}
