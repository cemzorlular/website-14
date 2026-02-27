import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import { KEY_STATS } from '@/lib/constants';
import styles from './KeyData.module.css';

export function KeyData() {
  return (
    <>
      <SectionHeader
        number="04"
        label="Key Data"
        title="The numbers that"
        titleHighlight="matter"
        description="Critical metrics from our epidemiological model and launch planning across priority markets."
      />

      <div className={styles.grid}>
        {KEY_STATS.map((stat, i) => (
          <AnimateOnScroll key={stat.label} delay={i * 0.15}>
            <div className={styles.stat}>
              <div className={styles.value}>
                {stat.prefix !== undefined && (
                  <span className={styles.affix}>{stat.prefix}</span>
                )}
                {stat.value}
                {stat.suffix && <span className={styles.affix}>{stat.suffix}</span>}
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Callout */}
      <AnimateOnScroll delay={0.3}>
        <div className={styles.callout}>
          <div className={styles.calloutLabel}>Key finding</div>
          <p className={styles.calloutText}>
            A phased launch prioritising Turkey and Poland captures 64% of the addressable market within 14 months of first regulatory submission.
          </p>
        </div>
      </AnimateOnScroll>
    </>
  );
}
