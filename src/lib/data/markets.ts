import { KpiItem, MarketRow } from '@/types';

export const KPIS: KpiItem[] = [
  { value: '42', prefix: '€', suffix: 'M', label: 'Total addressable market' },
  { value: '49', label: 'Markets worldwide' },
  { value: '5,100', label: 'Diagnosed patients reached' },
  { value: '32', label: 'Active regulatory dossiers' },
];

export const MARKET_DATA: MarketRow[] = [
  { country: 'Turkey', patients: '1,400', eligible: '980', tam: '18.0', share: '43%' },
  { country: 'Poland', patients: '860', eligible: '602', tam: '9.0', share: '21%' },
  { country: 'Czech Republic', patients: '520', eligible: '364', tam: '5.4', share: '13%' },
  { country: 'Romania', patients: '480', eligible: '336', tam: '3.6', share: '9%' },
  { country: 'Hungary', patients: '340', eligible: '238', tam: '2.4', share: '6%' },
  { country: 'Nordics', patients: '520', eligible: '364', tam: '2.2', share: '5%' },
  { country: 'Other CEE', patients: '480', eligible: '336', tam: '1.4', share: '3%' },
];

export const MARKET_TOTALS: MarketRow = {
  country: 'Total',
  patients: '5,100',
  eligible: '3,570',
  tam: '42.0',
  share: '100%',
};
