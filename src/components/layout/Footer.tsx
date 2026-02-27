import { COMPANY } from '@/lib/constants';
import { GradientBar } from '@/components/ui/GradientBar';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <GradientBar />
      <div className={styles.content}>
        <div className={styles.logo}>
          Er-Kim<span className={styles.dot}>.</span>
        </div>
        <div className={styles.tagline}>{COMPANY.tagline}</div>
        <div className={styles.meta}>
          {COMPANY.legalName}
          <br />
          Confidential
        </div>
      </div>
    </footer>
  );
}
