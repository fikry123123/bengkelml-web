import { getRank, getRankPoint, getRateForPoint } from '../data/ranks';

export type RankSelection = { rankId: string; division: number; stars: number };
export type ServiceMode = 'regular' | 'carry';
export type BillingMode = 'rank' | 'win';
export type Currency = 'IDR' | 'MYR' | 'SGD';
export type Quote = {
  stars: number;
  units: number;
  subtotal: number;
  gross: number;
  discountRate: number;
  discount: number;
  addons: number;
  total: number;
  matches: number;
  minutes: number;
  averageRate: number;
  timeHours: number;
  nextDiscountHint: string;
};

const currencyConfig: Record<Currency, { symbol: string; rate: number; decimals: number }> = {
  IDR: { symbol: 'Rp ', rate: 1, decimals: 0 },
  MYR: { symbol: 'RM ', rate: 0.00028, decimals: 2 },
  SGD: { symbol: 'S$ ', rate: 0.000085, decimals: 2 },
};

export function calculateQuote(
  start: RankSelection,
  target: RankSelection,
  priority = false,
  livestream = false,
  mode: ServiceMode = 'regular',
  billing: BillingMode = 'rank',
  winCount = 1,
): Quote {
  const startPoint = getRankPoint(start.rankId, start.division, start.stars);
  const targetPoint = getRankPoint(target.rankId, target.division, target.stars);
  const stars = billing === 'win' ? winCount : Math.max(0, targetPoint - startPoint);
  const units = Math.max(1, stars);
  let subtotal = 0;
  if (billing === 'win') {
    subtotal = units * getRateForPoint(startPoint, mode === 'carry');
  } else {
    for (let point = startPoint; point < targetPoint; point += 1) {
      subtotal += getRateForPoint(point, mode === 'carry');
    }
  }

  const addonRate = (priority ? 0.3 : 0) + (mode === 'regular' && livestream ? 0.2 : 0);
  const gross = subtotal * (1 + addonRate);
  let volumeDiscount = 0;
  let nextDiscountHint = 'Order ≥ Rp 100k dapat diskon 5%';
  if (gross >= 1_000_000) {
    volumeDiscount = 0.2;
    nextDiscountHint = 'Diskon maksimal 20% tercapai!';
  } else if (gross >= 600_000) {
    volumeDiscount = 0.15;
    nextDiscountHint = 'Order ≥ Rp 1 juta dapat diskon 20%';
  } else if (gross >= 300_000) {
    volumeDiscount = 0.1;
    nextDiscountHint = 'Order ≥ Rp 600 ribu dapat diskon 15%';
  } else if (gross >= 100_000) {
    volumeDiscount = 0.05;
    nextDiscountHint = 'Order ≥ Rp 300 ribu dapat diskon 10%';
  }
  const packDiscount = billing === 'win' && winCount === 5 ? 0.05 : 0;
  const discountRate = Math.min(0.25, volumeDiscount + packDiscount);
  const discount = Math.round(gross * discountRate);
  const total = Math.max(1000, Math.round(gross - discount));
  const averageRate = Math.round(subtotal / units);
  const timeHours = Math.max(1, Math.round((billing === 'win' ? units * 0.7 : Math.max(2, units * 0.65)) * (priority ? 0.5 : 1)));
  const matches = billing === 'win' ? units : Math.ceil(units / 1.5);

  return {
    stars,
    units,
    subtotal,
    gross,
    discountRate,
    discount,
    addons: Math.round(gross - subtotal),
    total,
    matches,
    minutes: matches * 18,
    averageRate,
    timeHours,
    nextDiscountHint,
  };
}

export function formatRupiah(value: number, currency: Currency = 'IDR'): string {
  const config = currencyConfig[currency];
  const converted = value * config.rate;
  const formatted = new Intl.NumberFormat(currency === 'IDR' ? 'id-ID' : 'en', {
    minimumFractionDigits: config.decimals,
    maximumFractionDigits: config.decimals,
  }).format(converted);
  return `${config.symbol}${formatted}`;
}

export function describeRank(selection: RankSelection): string {
  const rank = getRank(selection.rankId);
  if (rank.divisions) {
    const divisionName = rank.divisionNames[Math.min(rank.divisions - 1, Math.max(0, selection.division))];
    return `${rank.shortName} ${divisionName} (${selection.stars}★)`;
  }
  return `${rank.shortName} (${selection.stars}★)`;
}

export function normalizeSelection(selection: RankSelection): RankSelection {
  const rank = getRank(selection.rankId);
  return {
    ...selection,
    division: rank.divisions ? Math.min(rank.divisions - 1, Math.max(0, selection.division)) : 0,
    stars: Math.max(rank.minStars, Math.min(rank.maxStars, selection.stars)),
  };
}
