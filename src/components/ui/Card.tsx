import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  accent?: 'cyan' | 'orange' | 'none';
  className?: string;
}

export function Card({ children, accent = 'none', className }: CardProps) {
  return (
    <div
      className={`${styles.card} ${accent !== 'none' ? styles[accent] : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
}
