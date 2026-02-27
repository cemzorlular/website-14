import { SectionBackground } from '@/types';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  background: SectionBackground;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const bgMap: Record<SectionBackground, string> = {
  midnight: styles.midnight,
  ink: styles.ink,
  deep: styles.deep,
};

export function Section({ id, background, children, className, noPadding }: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${bgMap[background]} ${noPadding ? styles.noPadding : ''} ${className || ''}`}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}
