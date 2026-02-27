export function About() {
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
        01 — About
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
        One partner.
        <br />
        <em style={{ color: 'var(--orange)' }}>Infinite reach.</em>
      </h2>
      <p
        style={{
          color: 'var(--body-text)',
          maxWidth: 'var(--reading-width)',
          lineHeight: 1.75,
          fontSize: '1.0625rem',
        }}
      >
        Er-Kim is a leading pharmaceutical partner with deep expertise in navigating
        regulatory, commercial, and market access pathways across Nordic-CEE territories.
        With embedded local presence in every market, we ensure that innovative therapies
        reach the patients who need them.
      </p>
    </div>
  );
}
