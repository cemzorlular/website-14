import { MarketRow } from '@/types';
import styles from './DataTable.module.css';

interface DataTableProps {
  rows: MarketRow[];
  totals: MarketRow;
}

export function DataTable({ rows, totals }: DataTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.th}>Country</th>
            <th className={`${styles.th} ${styles.right}`}>Patients</th>
            <th className={`${styles.th} ${styles.right}`}>Eligible</th>
            <th className={`${styles.th} ${styles.right} ${styles.highlight}`}>TAM (€M)</th>
            <th className={`${styles.th} ${styles.right}`}>Share</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.country} className={styles.row}>
              <td className={`${styles.td} ${styles.country}`}>{row.country}</td>
              <td className={`${styles.td} ${styles.right}`}>{row.patients}</td>
              <td className={`${styles.td} ${styles.right}`}>{row.eligible}</td>
              <td className={`${styles.td} ${styles.right} ${styles.tamValue}`}>{row.tam}</td>
              <td className={`${styles.td} ${styles.right}`}>{row.share}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles.totalRow}>
            <td className={`${styles.td} ${styles.totalLabel}`}>{totals.country}</td>
            <td className={`${styles.td} ${styles.right} ${styles.totalLabel}`}>
              {totals.patients}
            </td>
            <td className={`${styles.td} ${styles.right} ${styles.totalLabel}`}>
              {totals.eligible}
            </td>
            <td className={`${styles.td} ${styles.right} ${styles.totalLabel}`}>{totals.tam}</td>
            <td className={`${styles.td} ${styles.right} ${styles.totalLabel}`}>{totals.share}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
