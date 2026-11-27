import type { ImgHTMLAttributes } from 'react';
import epicEmblem from './epic.png';
import gmEmblem from './gm.png';
import legendEmblem from './legend.png';
import masterEmblem from './master.png';
import mythicGloryEmblem from './mythic glory.png';
import mythicHonorEmblem from './mythic honor.png';
import mythicImmortalEmblem from './mythic imo.png';
import mythicEmblem from './mythic.png';

export type RankEmblemProps = ImgHTMLAttributes<HTMLImageElement> & { rankId: string };

const emblems: Record<string, string> = {
  master: masterEmblem,
  gm: gmEmblem,
  grandmaster: gmEmblem,
  epic: epicEmblem,
  legend: legendEmblem,
  mythic: mythicEmblem,
  honor: mythicHonorEmblem,
  glory: mythicGloryEmblem,
  immortal: mythicImmortalEmblem,
};

/** Renders the rank emblem image matching a rank identifier. */
export function RankEmblem({ rankId, alt, ...props }: RankEmblemProps) {
  const src = emblems[rankId] ?? emblems.master;
  return <img src={src} alt={alt ?? `${rankId} emblem`} {...props} />;
}
