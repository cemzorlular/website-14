import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  titleHighlight?: string;
  description?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  titleHighlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.number}>{number}</div>
      <div>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.title}>
          {title}
          {titleHighlight && (
            <>
              <br />
              <span className={styles.highlight}>{titleHighlight}</span>
            </>
          )}
          <span className={styles.dot}>.</span>
        </h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}
