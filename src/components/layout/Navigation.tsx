export function Navigation() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        background: 'rgba(10, 15, 28, 0.95)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--space-6)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif, serif)',
            fontSize: '1.25rem',
            color: 'var(--cream)',
            letterSpacing: '0.02em',
          }}
        >
          Er-Kim
        </span>
        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          {['About', 'Markets', 'Capabilities', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: 'var(--cool-gray)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono, monospace)',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
