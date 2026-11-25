import { useMemo, useState } from 'react';
import { glossaryTerms } from '../data/content';
import { ranks, seasonInfo } from '../data/ranks';

type ToolsDrawerProps = { open: boolean; onClose: () => void };

const resetRanks: Record<string, string> = {
  epic: 'Grandmaster II / I',
  legend: 'Epic IV / III',
  mythic: 'Epic II',
  honor: 'Epic I',
  glory: 'Legend V',
  immortal: 'Legend V (bonus protection)',
};

export function ToolsDrawer({ open, onClose }: ToolsDrawerProps) {
  const [matches, setMatches] = useState(250);
  const [currentWinrate, setCurrentWinrate] = useState(52.4);
  const [targetWinrate, setTargetWinrate] = useState(60);
  const [resetRank, setResetRank] = useState('honor');
  const [glossarySearch, setGlossarySearch] = useState('');
  const neededWins = targetWinrate <= currentWinrate ? 0 : targetWinrate >= 100
    ? Number.POSITIVE_INFINITY
    : Math.ceil(matches * (targetWinrate - currentWinrate) / (100 - targetWinrate));
  const filteredGlossary = useMemo(() => glossaryTerms.filter((item) =>
    `${item.term} ${item.desc}`.toLowerCase().includes(glossarySearch.toLowerCase()),
  ), [glossarySearch]);
  if (!open) return null;

  return (
    <div className="drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <aside className="tools-drawer" role="dialog" aria-modal="true" aria-labelledby="tools-title">
        <div className="drawer-heading"><div><p className="eyebrow">UTILITAS GRATIS PLAYER MLBB</p><h2 id="tools-title">Tools BengkelML</h2></div><button className="icon-button" onClick={onClose} aria-label="Tutup">×</button></div>
        <section className="tool-card">
          <span className="tool-icon">％</span><h3>Kalkulator Winrate (WR)</h3><p>Hitung win beruntun yang dibutuhkan untuk mencapai target WR.</p>
          <div className="tool-input-grid">
            <label>Total match<input type="number" min="1" value={matches} onChange={(event) => setMatches(Math.max(1, Number(event.target.value)))} /></label>
            <label>WR saat ini (%)<input type="number" min="0" max="99.9" step="0.1" value={currentWinrate} onChange={(event) => setCurrentWinrate(Math.max(0, Math.min(99.9, Number(event.target.value))))} /></label>
            <label>Target WR (%)<input type="number" min="1" max="99.9" step="0.5" value={targetWinrate} onChange={(event) => setTargetWinrate(Math.max(1, Math.min(99.9, Number(event.target.value))))} /></label>
          </div>
          <div className="tool-result"><span>Win tambahan yang diperlukan</span><strong>{Number.isFinite(neededWins) ? `${neededWins} win` : 'Tidak tercapai dengan win saja'}</strong></div>
        </section>
        <section className="tool-card">
          <span className="tool-icon">↘</span><h3>Simulasi Reset Season S{seasonInfo.number} → S{seasonInfo.number + 1}</h3><p>Perkiraan rank awal setelah reset season:</p>
          <label>Rank sekarang<select value={resetRank} onChange={(event) => setResetRank(event.target.value)}>{ranks.filter((rank) => ['epic', 'legend', 'mythic', 'honor', 'glory', 'immortal'].includes(rank.id)).map((rank) => <option key={rank.id} value={rank.id}>{rank.name}</option>)}</select></label>
          <div className="tool-result"><span>Perkiraan rank setelah reset</span><strong>{resetRanks[resetRank]}</strong></div>
        </section>
        <section className="tool-card glossary-card">
          <span className="tool-icon">⌕</span><h3>Kamus istilah MLBB</h3>
          <input className="search-input" placeholder="Cari Snowball, Zoning, Lord Dance..." value={glossarySearch} onChange={(event) => setGlossarySearch(event.target.value)} />
          <div className="glossary-list">{filteredGlossary.map((item) => <article key={item.term}><b>{item.term}</b><p>{item.desc}</p></article>)}{!filteredGlossary.length && <p className="field-hint">Istilah tidak ditemukan.</p>}</div>
        </section>
        <p className="drawer-note">Hasil kalkulator winrate dan reset season bersifat estimasi.</p>
      </aside>
    </div>
  );
}
