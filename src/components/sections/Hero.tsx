import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <div className={styles.hero}>
      {/* Decorative gradient glows */}
      <div className={styles.glowCyan} aria-hidden="true" />
      <div className={styles.glowOrange} aria-hidden="true" />

      <div className={styles.content}>
        <AnimateOnScroll delay={0.1}>
          <div className={styles.label}>Pharmaceutical Excellence · Nordic-CEE</div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <h1 className={styles.title}>
            Complexity,
            <br />
            simplified<span className={styles.dot}>.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.5}>
          <p className={styles.subtitle}>Patients, reached.</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.7}>
          <p className={styles.description}>
            Er-Kim navigates regulatory, commercial, and access pathways across 49 markets — building the infrastructure that connects rare disease therapies to the patients who need them.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.9}>
          <div className={styles.ctas}>
            <Button variant="primary" href="#markets">
              Explore our markets
            </Button>
            <Button variant="secondary" href="#capabilities">
              See our capabilities
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={1.1}>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Markets</span>
              <span className={styles.metaValue}>49 territories</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Focus</span>
              <span className={styles.metaValue}>Orphan drugs, SMA</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Headquarters</span>
              <span className={styles.metaValue}>Istanbul, Turkey</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
