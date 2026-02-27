import { ButtonVariant } from '@/types';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  variant = 'secondary',
  href,
  children,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  const cls = `${styles.button} ${styles[variant]} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
