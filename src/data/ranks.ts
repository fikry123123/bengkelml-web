export type RankTier = {
  id: string;
  name: string;
  shortName: string;
  divisions: number;
  divisionNames: string[];
  starsPerDivision: number;
  starsToNext: number;
  minStars: number;
  maxStars: number;
  regularRate: number;
  carryRate: number;
  accent: string;
};

export const ranks: RankTier[] = [
  { id: 'master', name: 'Master', shortName: 'Master', divisions: 4, divisionNames: ['IV', 'III', 'II', 'I'], starsPerDivision: 4, starsToNext: 16, minStars: 0, maxStars: 4, regularRate: 2000, carryRate: 3000, accent: '#fbbf24' },
  { id: 'gm', name: 'Grandmaster', shortName: 'GM', divisions: 5, divisionNames: ['V', 'IV', 'III', 'II', 'I'], starsPerDivision: 5, starsToNext: 25, minStars: 0, maxStars: 5, regularRate: 2500, carryRate: 3500, accent: '#38bdf8' },
  { id: 'epic', name: 'Epic', shortName: 'Epic', divisions: 5, divisionNames: ['V', 'IV', 'III', 'II', 'I'], starsPerDivision: 5, starsToNext: 25, minStars: 0, maxStars: 5, regularRate: 3000, carryRate: 5000, accent: '#2dd4bf' },
  { id: 'legend', name: 'Legend', shortName: 'Legend', divisions: 5, divisionNames: ['V', 'IV', 'III', 'II', 'I'], starsPerDivision: 5, starsToNext: 25, minStars: 0, maxStars: 5, regularRate: 4000, carryRate: 6000, accent: '#facc15' },
  { id: 'mythic', name: 'Mythic', shortName: 'Mythic', divisions: 0, divisionNames: [], starsPerDivision: 1, starsToNext: 25, minStars: 0, maxStars: 24, regularRate: 6000, carryRate: 8000, accent: '#f59e0b' },
  { id: 'honor', name: 'Mythic Honor', shortName: 'Honor', divisions: 0, divisionNames: [], starsPerDivision: 1, starsToNext: 25, minStars: 25, maxStars: 49, regularRate: 7000, carryRate: 9000, accent: '#22d3ee' },
  { id: 'glory', name: 'Mythic Glory', shortName: 'Glory', divisions: 0, divisionNames: [], starsPerDivision: 1, starsToNext: 50, minStars: 50, maxStars: 99, regularRate: 9000, carryRate: 12000, accent: '#fbbf24' },
  { id: 'immortal', name: 'Mythic Immortal', shortName: 'Immortal', divisions: 0, divisionNames: [], starsPerDivision: 1, starsToNext: 999, minStars: 100, maxStars: 999, regularRate: 13000, carryRate: 15000, accent: '#e879f9' },
];

export const seasonInfo = {
  number: 42,
  label: 'S42',
  endsAt: new Date('2026-12-16T15:00:00+07:00'),
};

const rankOffsets = [0, 16, 41, 66, 91, 116, 141, 191];

export function getRank(id: string): RankTier {
  return ranks.find((rank) => rank.id === id) ?? ranks[0];
}

export function getRankPoint(rankId: string, division: number, stars: number): number {
  const index = Math.max(0, ranks.findIndex((rank) => rank.id === rankId));
  const rank = ranks[index];
  if (rank.divisions > 0) {
    return rankOffsets[index] + Math.max(0, division) * rank.starsPerDivision + stars;
  }
  return 91 + stars;
}

export function getRankForPoint(point: number): { rank: RankTier; stars: number } {
  const bounded = Math.max(0, point);
  const ranges = [
    { index: 0, start: 0, end: 16 },
    { index: 1, start: 16, end: 41 },
    { index: 2, start: 41, end: 66 },
    { index: 3, start: 66, end: 91 },
    { index: 4, start: 91, end: 116 },
    { index: 5, start: 116, end: 141 },
    { index: 6, start: 141, end: 191 },
    { index: 7, start: 191, end: Number.POSITIVE_INFINITY },
  ];
  const range = ranges.find((item) => bounded < item.end) ?? ranges[ranges.length - 1];
  return { rank: ranks[range.index], stars: range.index < 4 ? bounded - range.start : bounded - 91 };
}

export function getSelectionForPoint(point: number): { rankId: string; division: number; stars: number } {
  const { rank, stars } = getRankForPoint(point);
  const index = ranks.findIndex((item) => item.id === rank.id);
  if (!rank.divisions) return { rankId: rank.id, division: 0, stars };
  const relative = Math.max(0, point - rankOffsets[index]);
  return {
    rankId: rank.id,
    division: Math.min(rank.divisions - 1, Math.floor(relative / rank.starsPerDivision)),
    stars: relative % rank.starsPerDivision,
  };
}

export function getRateForPoint(point: number, carry: boolean): number {
  const rateIndex = point < 16 ? 0 : point < 41 ? 1 : point < 66 ? 2 : point < 91 ? 3 : point < 116 ? 4 : point < 141 ? 5 : point < 191 ? 6 : 7;
  return carry ? ranks[rateIndex].carryRate : ranks[rateIndex].regularRate;
}
