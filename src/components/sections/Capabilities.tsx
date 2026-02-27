export function Capabilities() {
  const capabilities = [
    {
      title: 'Regulatory Affairs',
      description:
        'End-to-end regulatory strategy and submission management across all 49 markets.',
    },
    {
      title: 'Market Access',
      description:
        'Reimbursement negotiation and HTA submissions adapted to each country\'s framework.',
    },
    {
      title: 'Commercial Operations',
      description:
        'Direct sales force and distributor networks with embedded local expertise.',
    },
    {
      title: 'Pharmacovigilance',
      description:
        'Unified safety surveillance and adverse event reporting across the entire territory.',
    },
  ];

  return (
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
        03 — Capabilities
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-serif, serif)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          lineHeight: 1.1,
          marginBottom: 'var(--space-10)',
          color: 'var(--cream)',
        }}
      >
        Full-spectrum
        <br />
        <em style={{ color: 'var(--orange)' }}>pharmaceutical services.</em>
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--space-5)',
        }}
      >
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            style={{
              background: 'var(--card-surface)',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              padding: 'var(--space-6)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif, serif)',
                fontSize: '1.25rem',
                color: 'var(--cream)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {cap.title}
            </h3>
            <p style={{ color: 'var(--body-text)', lineHeight: 1.65, fontSize: '0.9375rem' }}>
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
