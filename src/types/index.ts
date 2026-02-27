export type SectionBackground = 'midnight' | 'ink' | 'deep';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface KpiItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  highlight?: boolean;
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  accent?: 'cyan' | 'orange';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface MarketRow {
  country: string;
  patients: string;
  eligible: string;
  tam: string;
  share: string;
}
