import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  background: 'midnight' | 'ink' | 'deep';
  noPadding?: boolean;
  children: ReactNode;
};

const BG_MAP: Record<SectionProps['background'], string> = {
  midnight: 'var(--midnight)',
  ink: 'var(--ink)',
  deep: 'var(--deep)',
};

export function Section({ id, background, noPadding = false, children }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        background: BG_MAP[background],
        padding: noPadding ? 0 : 'var(--space-16) var(--space-6)',
      }}
    >
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}
