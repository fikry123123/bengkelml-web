import { useEffect, useState } from 'react';
import { seasonInfo } from '../data/ranks';

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

function getCountdown(): Countdown {
  const remaining = Math.max(0, seasonInfo.endsAt.getTime() - Date.now());
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
  };
}

export function HeroSeasonBar() {
  const [time, setTime] = useState(getCountdown);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="season-bar">
      <div className="season-copy"><span className="live-dot" /> SEASON 42 <span className="season-divider">/</span> <span>Push rank sebelum reset season</span></div>
      <div className="countdown" aria-label="Hitung mundur akhir season">
        {[['HARI', time.days], ['JAM', time.hours], ['MENIT', time.minutes], ['DETIK', time.seconds]].map(([label, value]) => (
          <span className="countdown-unit" key={label}><b>{String(value).padStart(2, '0')}</b><small>{label}</small></span>
        ))}
      </div>
    </div>
  );
}
