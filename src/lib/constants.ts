import { NavItem, KpiItem, CapabilityItem, MarketRow } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Markets', href: '#markets' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
];

export const KPIS: KpiItem[] = [
  { value: '42', prefix: '€', suffix: 'M', label: 'Total addressable market' },
  { value: '49', label: 'Markets worldwide' },
  { value: '5,100', label: 'Diagnosed patients reached' },
  { value: '32', label: 'Active regulatory dossiers' },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    index: '01',
    title: 'Regulatory filing',
    description:
      'End-to-end regulatory submissions across Nordic-CEE markets. Active dossiers in 32 of 49 markets with 7 orphan drug filings completed in 3 years.',
    accent: 'cyan',
  },
  {
    index: '02',
    title: 'Market access',
    description:
      'Pricing, reimbursement, and health technology assessment navigation. Direct relationships with payers across 49 territories.',
    accent: 'cyan',
  },
  {
    index: '03',
    title: 'Field force',
    description:
      'Dedicated commercial teams with deep therapeutic area expertise. Embedded infrastructure across priority markets for rapid patient access.',
    accent: 'orange',
  },
  {
    index: '04',
    title: 'Pharmacovigilance',
    description:
      'Comprehensive safety monitoring and risk management across all active markets. Real-time adverse event reporting infrastructure.',
    accent: 'cyan',
  },
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

export const KEY_STATS: KpiItem[] = [
  { value: '14', suffix: ' mo', label: 'Filing-to-patient timeline' },
  { value: '7', label: 'Orphan drug filings in 3 years' },
  { value: '70', suffix: '%', label: 'Diagnosed penetration rate' },
  { value: 'Q3 2027', label: 'First patient access target', prefix: '' },
];

export const COMPANY = {
  name: 'Er-Kim',
  legalName: 'Er-Kim İlaç Sanayi ve Ticaret A.Ş.',
  tagline: 'Complexity, simplified. Patients, reached.',
};
