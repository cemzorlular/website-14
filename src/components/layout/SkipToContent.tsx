'use client';

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: '8px',
        zIndex: 999,
        padding: '8px 16px',
        background: 'var(--cyan)',
        color: 'var(--midnight)',
        fontWeight: 700,
        borderRadius: '4px',
      }}
      onFocus={(e) => {
        (e.target as HTMLAnchorElement).style.left = '8px';
      }}
      onBlur={(e) => {
        (e.target as HTMLAnchorElement).style.left = '-9999px';
      }}
    >
      Skip to main content
    </a>
  );
}
