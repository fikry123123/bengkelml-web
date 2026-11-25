import { useMemo, useState } from 'react';
import type { Hero } from '../data/heroes';
import type { ServiceMode } from '../utils/calculator';

type Props = {
  mode: ServiceMode;
  heroes: Hero[];
  selected: string[];
  priority: boolean;
  livestream: boolean;
  onHeroesChange: (value: string[]) => void;
  onPriorityChange: (value: boolean) => void;
  onLivestreamChange: (value: boolean) => void;
};

export function QuadrantAddons({ mode, heroes, selected, priority, livestream, onHeroesChange, onPriorityChange, onLivestreamChange }: Props) {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [notice, setNotice] = useState('');
  const roleFilters = ['All', 'Jungler', 'Gold Lane', 'Mid Lane', 'EXP Lane', 'Roamer'];
  const filtered = useMemo(() => heroes.filter((hero) =>
    (roleFilter === 'All' || hero.roles.includes(roleFilter as typeof hero.roles[number])) &&
    `${hero.name} ${hero.roles.join(' ')}`.toLowerCase().includes(search.toLowerCase()),
  ), [heroes, roleFilter, search]);
  function toggleHero(name: string) {
    if (selected.includes(name)) {
      onHeroesChange(selected.filter((hero) => hero !== name));
      setNotice('');
    } else if (selected.length >= 3) {
      setNotice('Maksimal 3 hero favorit yang bisa dipilih.');
    } else {
      onHeroesChange([...selected, name]);
      setNotice('');
    }
  }
  return (
    <div className="quadrant addons-quadrant">
      <div className="quadrant-title"><span className="step-number">C</span><div><h3>Add-ons & request hero</h3><p>Hero favorit gratis · maks. 3 pilihan</p></div></div>
      {mode === 'regular' && <>
        <div className="selected-heroes-bar">{selected.length ? selected.map((name) => <button key={name} onClick={() => toggleHero(name)}>{name} ×</button>) : <span>Belum ada hero dipilih (booster bebas pilih meta terkuat)</span>}</div>
        <div className="role-filter-strip">{roleFilters.map((role) => <button key={role} className={roleFilter === role ? 'active' : ''} onClick={() => setRoleFilter(role)}>{role === 'All' ? 'Semua (A–Z)' : role}</button>)}</div>
        <div className="hero-picker-heading"><label htmlFor="hero-search">Pilih hero favorit <span>(opsional)</span></label><span className="hero-count">{filtered.length} dari {heroes.length}</span></div>
        <input id="hero-search" className="search-input" placeholder="Cari nama hero, misal: Fanny atau Hayabusa..." value={search} onChange={(event) => setSearch(event.target.value)} />
        <div className="hero-grid" aria-label="Daftar hero" role="list">
          {filtered.map((hero) => <button type="button" role="listitem" key={hero.name} title={hero.roles.join(' / ')} className={`hero-chip ${selected.includes(hero.name) ? 'selected' : ''}`} onClick={() => toggleHero(hero.name)}><b>{hero.name}</b><small>{hero.roles.join(' / ')}</small></button>)}
          {!filtered.length && <span className="field-hint">Hero tidak ditemukan. Coba kata kunci lain.</span>}
        </div>
        {notice && <p className="field-hint error-hint" role="alert">{notice}</p>}
      </>}
      <div className="addon-options">
        <label className="addon-option"><input type="checkbox" checked={priority} onChange={(event) => onPriorityChange(event.target.checked)} /><span><b>Joki prioritas / fast track</b><small>{priority ? 'Express priority aktif · dikerjakan lebih cepat' : 'Antrean normal · aktifkan untuk express priority'} · +30%</small></span></label>
        {mode === 'regular' && <label className="addon-option"><input type="checkbox" checked={livestream} onChange={(event) => onLivestreamChange(event.target.checked)} /><span><b>Live stream match</b><small>Tonton proses joki secara real-time · +20%</small></span></label>}
      </div>
    </div>
  );
}
