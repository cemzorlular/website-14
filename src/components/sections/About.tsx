import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { AnimateOnScroll } from '@/components/animation/AnimateOnScroll';
import styles from './About.module.css';

const differentiators = [
  {
    tag: 'Therapeutic Focus',
    title: 'Orphan drug expertise',
    description:
      'Deep specialization in rare disease therapies, with 7 orphan drug filings completed in 3 years. We navigate the complexity that others avoid.',
  },
  {
    tag: 'Geographic Reach',
    title: 'Nordic-CEE market focus',
    description:
      'Direct commercial presence across 49 territories spanning the Nordics, Central-Eastern Europe, Baltics, Balkans, and Central Asia.',
  },
  {
    tag: 'Disease Area',
    title: 'SMA treatment pathway',
    description:
      'Established infrastructure for spinal muscular atrophy treatments. 5,100 diagnosed patients across priority markets with clear access pathways.',
  },
  {
    tag: 'Track Record',
    title: 'Regulatory precision',
    description:
      'Active dossiers in 32 of 49 markets. 14-month average filing-to-patient timeline. Built on 30 years of regional regulatory intelligence.',
  },
];

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
        {differentiators.map((item, i) => (
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
