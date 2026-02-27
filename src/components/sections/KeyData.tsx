export function KeyData() {
  const stats = [
    { value: '€42M', label: 'Total Addressable Market' },
    { value: '49', label: 'Markets Worldwide' },
    { value: '5,100', label: 'Diagnosed Patients Reached' },
    { value: '32', label: 'Active Regulatory Dossiers' },
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
        04 — Key Data
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
        Numbers that
        <br />
        <em style={{ color: 'var(--orange)' }}>define our reach.</em>
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p
              style={{
                fontFamily: 'var(--font-serif, serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--cyan)',
                lineHeight: 1,
                marginBottom: 'var(--space-3)',
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                color: 'var(--cool-gray)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <p
        style={{
          color: 'var(--cool-gray)',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-mono, monospace)',
          marginTop: 'var(--space-8)',
          borderTop: '1px solid var(--card-border)',
          paddingTop: 'var(--space-5)',
        }}
      >
        Source: EUROCAT, national registries, KOL interviews (n=14) · 2025E
      </p>
    </div>
  );
}
