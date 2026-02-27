export function GradientBar() {
  return (
    <div
      style={{
        height: '3px',
        background:
          'linear-gradient(90deg, var(--cyan) 0%, var(--orange) 50%, var(--cyan) 100%)',
      }}
    />
  );
}
