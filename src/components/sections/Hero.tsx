export function Hero() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--space-16) var(--space-6)',
        paddingTop: 'calc(var(--nav-height) + var(--space-16))',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            color: 'var(--cyan)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-5)',
          }}
        >
          Pharmaceutical Partner · Nordic-CEE
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif, serif)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1.05,
            marginBottom: 'var(--space-6)',
            color: 'var(--cream)',
          }}
        >
          Complexity,
          <br />
          simplified.
          <br />
          <em style={{ color: 'var(--orange)' }}>Patients, reached.</em>
        </h1>
        <p
          style={{
            color: 'var(--body-text)',
            maxWidth: '580px',
            fontSize: '1.125rem',
            lineHeight: 1.7,
          }}
        >
          Er-Kim İlaç Sanayi ve Ticaret A.Ş. — Your pharmaceutical partner navigating
          regulatory, commercial, and access pathways across 49 Nordic-CEE markets.
        </p>
      </div>
    </div>
  );
}
