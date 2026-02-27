import { SectionHeader } from '@/components/ui/SectionHeader';
import { KpiNumber } from '@/components/ui/KpiNumber';
import { DataTable } from '@/components/ui/DataTable';
import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import { KPIS, MARKET_DATA, MARKET_TOTALS } from '@/lib/constants';
import styles from './Markets.module.css';

export function Markets() {
  return (
    <>
      <SectionHeader
        number="02"
        label="Geographic Reach"
        title="49 markets"
        titleHighlight="one infrastructure"
        description="Er-Kim's direct commercial presence spans the Nordics, Central-Eastern Europe, Baltics, Balkans, and Central Asia — territories where regulatory and access complexity demands embedded local expertise."
      />

      {/* KPI grid */}
      <div className={styles.kpiGrid}>
        {KPIS.map((kpi, i) => (
          <AnimateOnScroll key={kpi.label} delay={i * 0.15}>
            <KpiNumber {...kpi} />
          </AnimateOnScroll>
        ))}
      </div>

      {/* Source */}
      <div className={styles.source}>
        Source: EUROCAT, national registries, KOL interviews (n=14) · 2025E
      </div>

      {/* Data table */}
      <AnimateOnScroll delay={0.2}>
        <div className={styles.tableLabel}>Addressable market by priority country</div>
        <DataTable rows={MARKET_DATA} totals={MARKET_TOTALS} />
      </AnimateOnScroll>
    </>
  );
}
