import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import { CAPABILITIES } from '@/lib/constants';
import styles from './Capabilities.module.css';

export function Capabilities() {
  return (
    <>
      <SectionHeader
        number="03"
        label="Capabilities"
        title="Built for complex"
        titleHighlight="pathways"
        description="Four integrated capabilities that together navigate the full journey from regulatory filing to patient access — across every market we serve."
      />

      <div className={styles.grid}>
        {CAPABILITIES.map((cap, i) => (
          <AnimateOnScroll key={cap.title} delay={i * 0.15}>
            <Card accent={cap.accent || 'cyan'}>
              <div className={styles.index}>{cap.index}</div>
              <h3 className={styles.title}>{cap.title}</h3>
              <p className={styles.body}>{cap.description}</p>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </>
  );
}
