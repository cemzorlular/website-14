import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import { DIFFERENTIATORS } from '@/lib/data/about';
import styles from './About.module.css';

export function About() {
  return (
    <>
      <SectionHeader
        number="01"
        label="About Er-Kim"
        title="The partner for complex"
        titleHighlight="terrain"
        description="Er-Kim maps regulatory, commercial, and access pathways across 49 markets — building the infrastructure that connects rare disease therapies to the patients who need them."
      />

      <div className={styles.grid}>
        {DIFFERENTIATORS.map((item, i) => (
          <AnimateOnScroll key={item.title} delay={i * 0.15}>
            <Card accent="cyan">
              <div className={styles.tag}>{item.tag}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.description}</p>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </>
  );
}
