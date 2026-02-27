export function Contact() {
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
        05 — Contact
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-serif, serif)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          lineHeight: 1.1,
          marginBottom: 'var(--space-6)',
          color: 'var(--cream)',
        }}
      >
        Let&apos;s discuss
        <br />
        <em style={{ color: 'var(--orange)' }}>your market entry.</em>
      </h2>
      <p
        style={{
          color: 'var(--body-text)',
          maxWidth: '540px',
          lineHeight: 1.75,
          fontSize: '1.0625rem',
          marginBottom: 'var(--space-8)',
        }}
      >
        Ready to navigate Nordic-CEE regulatory and commercial complexity? Our team is here
        to help you reach patients across 49 markets.
      </p>
      <a
        href="mailto:info@er-kim.com"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          background: 'var(--cyan)',
          color: 'var(--midnight)',
          padding: 'var(--space-4) var(--space-6)',
          borderRadius: '4px',
          fontWeight: 700,
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-mono, monospace)',
          transition: 'background 0.15s ease',
        }}
      >
        Get in Touch
      </a>
    </div>
  );
}
