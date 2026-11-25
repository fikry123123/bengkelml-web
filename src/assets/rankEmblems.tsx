import type { SVGProps } from 'react';

export type RankEmblemProps = SVGProps<SVGSVGElement> & { rankId: string };

const colors: Record<string, [string, string]> = {
  master: ['#7bd8e8', '#277a9c'],
  gm: ['#8bdcff', '#1d69aa'],
  grandmaster: ['#ffc66d', '#a94e31'],
  epic: ['#b5a6ff', '#6346bd'],
  legend: ['#ffe99a', '#b37a2d'],
  mythic: ['#ffb1b8', '#a3324e'],
  honor: ['#97ecff', '#328cbb'],
  glory: ['#f9d783', '#bd792b'],
  immortal: ['#fff0ae', '#e08b36'],
};

export function RankEmblem({ rankId, ...props }: RankEmblemProps) {
  const [light, dark] = colors[rankId] ?? colors.master;
  return (
    <svg viewBox="0 0 72 72" role="img" aria-label={`${rankId} emblem`} {...props}>
      <defs>
        <linearGradient id={`rank-${rankId}`} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor={light} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
      </defs>
      <path d="M36 4 58 16l8 24-13 22H19L6 40l8-24z" fill="#101d2a" stroke={`url(#rank-${rankId})`} strokeWidth="3" />
      <path d="m36 12 6 16 16 8-16 7-6 16-7-16-15-7 15-8z" fill={`url(#rank-${rankId})`} />
      <circle cx="36" cy="36" r="7" fill="#101d2a" stroke={light} strokeWidth="2" />
    </svg>
  );
}
