import logo from '../assets/logo.png';

export function ProbeLogo({ white = false, width = 150 }) {
  const scale = width / 150;
  const iconSize = 32 * scale;
  const fontSize = 20 * scale;
  const gap = 8 * scale;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap, flexShrink: 0 }}>
      <img
        src={logo}
        alt="Probe App logo"
        width={iconSize}
        height={iconSize}
        style={{ borderRadius: 8 * scale, flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize,
          fontWeight: 700,
          color: white ? '#fff' : '#0E2647',
          whiteSpace: 'nowrap',
        }}
      >
        Probe App
      </span>
    </div>
  );
}

export function ProbeMark({ size = 32 }) {
  return (
    <img
      src={logo}
      alt="Probe App"
      width={size}
      height={size}
      style={{ borderRadius: size * 0.25, flexShrink: 0 }}
    />
  );
}
