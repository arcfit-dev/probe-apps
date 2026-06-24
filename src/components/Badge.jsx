const tones = {
  'primary-light': { background: 'var(--brand-subtle)', color: 'var(--text-brand)' },
  'primary-solid': { background: 'var(--brand)', color: '#fff' },
  'success-light': { background: 'var(--success-800)', color: 'var(--success-400)' },
  'success-solid': { background: 'var(--success-400)', color: '#fff' },
  'warning-light': { background: 'var(--warning-800)', color: 'var(--warning-400)' },
  'error-light': { background: 'var(--error-800)', color: 'var(--error-400)' },
};

const badgeSizes = {
  sm: { padding: '3px 10px', fontSize: '12px' },
  md: { padding: '5px 12px', fontSize: '13px' },
  lg: { padding: '7px 16px', fontSize: '14px' },
};

export default function Badge({ children, tone = 'primary-light', size = 'md', dot, icon, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontWeight: 600, borderRadius: '999px', whiteSpace: 'nowrap',
      ...tones[tone], ...badgeSizes[size], ...style,
    }}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'currentColor', flexShrink: 0 }} />}
      {icon}
      {children}
    </span>
  );
}
