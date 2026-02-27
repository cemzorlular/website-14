import styles from './KpiNumber.module.css';
import { KpiItem } from '@/types';

export function KpiNumber({ value, label, prefix, suffix, highlight }: KpiItem) {
  return (
    <div className={styles.kpi}>
      <div className={`${styles.value} ${highlight ? styles.highlighted : ''}`}>
        {prefix && <span className={styles.affix}>{prefix}</span>}
        {value}
        {suffix && <span className={styles.affix}>{suffix}</span>}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
