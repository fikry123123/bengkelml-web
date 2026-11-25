import { formatRupiah, type BillingMode, type Currency, type ServiceMode } from './calculator';

export type OrderDetails = {
  startRank: string;
  targetRank: string;
  stars: number;
  total: number;
  heroes: string[];
  priority: boolean;
  livestream: boolean;
  mode: ServiceMode;
  billing: BillingMode;
  winCount: number;
  currency: Currency;
  paymentMethod: string;
  mlbbId: string;
};

const phoneNumber = '62895391187744';

export function createOrderMessage(order: OrderDetails): string {
  const selectedHeroes = order.heroes.length ? order.heroes.join(', ') : 'Bebas';
  return [
    'Halo BengkelML! Saya ingin order layanan Mobile Legends Season 42.',
    '',
    `Metode layanan: ${order.mode === 'regular' ? 'Joki Reguler' : 'Joki Gendong (Mabar)'}`,
    `Rank saat ini: ${order.startRank}`,
    `Target rank: ${order.billing === 'win' ? `Paket ${order.winCount} Win Mabar` : order.targetRank}`,
    `Estimasi: ${order.billing === 'win' ? `${order.winCount} win` : `${order.stars} bintang`}`,
    `Preferensi hero: ${order.mode === 'regular' ? selectedHeroes : 'Tidak berlaku untuk Gendong'}`,
    ...(order.mode === 'carry' && order.mlbbId ? [`ID & Server MLBB: ${order.mlbbId}`] : []),
    `Prioritas: ${order.priority ? 'Ya' : 'Tidak'}`,
    `Live stream: ${order.mode === 'regular' && order.livestream ? 'Ya' : 'Tidak'}`,
    `Pembayaran pilihan: ${order.paymentMethod}`,
    `Estimasi harga: ${formatRupiah(order.total, order.currency)}`,
    '',
    'Mohon info antrean dan langkah selanjutnya. Terima kasih!',
  ].join('\n');
}

export function openWhatsApp(message: string): void {
  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

export async function copyText(text: string): Promise<void> {
  if (!navigator.clipboard?.writeText) throw new Error('Clipboard tidak tersedia di browser ini.');
  await navigator.clipboard.writeText(text);
}
