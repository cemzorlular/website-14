export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--midnight)',
        padding: 'var(--space-8) var(--space-6)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif, serif)',
            fontSize: '1.125rem',
            color: 'var(--cream)',
          }}
        >
          Er-Kim
        </span>
        <p
          style={{
            color: 'var(--cool-gray)',
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-mono, monospace)',
          }}
        >
          © 2025 Er-Kim İlaç Sanayi ve Ticaret A.Ş. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
