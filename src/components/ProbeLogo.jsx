export function ProbeLogo({ white = false, width = 124 }) {
  const scale = width / 124;
  return (
    <svg width={width} height={32 * scale} viewBox="0 0 124 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill={white ? '#fff' : '#0E2647'} />
      <path d="M8 17.5 L16 11 L24 17.5 V24 H8 Z" fill="#1E73D8" />
      {!white && <path d="M8 17.5 L16 11 L24 17.5" stroke="#4BA3F0" strokeWidth="2.2" strokeLinejoin="round" fill="none" />}
      <rect x="13.5" y="18" width="5" height="5" rx="0.5" fill="#fff" />
      <text x="40" y="22" fontFamily="Manrope, sans-serif" fontSize="20" fontWeight="700" fill={white ? '#fff' : '#0E2647'}>Probe</text>
    </svg>
  );
}

export function ProbeMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#0E2647" />
      <path d="M8 17.5 L16 11 L24 17.5 V24 H8 Z" fill="#1E73D8" />
      <path d="M8 17.5 L16 11 L24 17.5" stroke="#4BA3F0" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
      <rect x="13.5" y="18" width="5" height="5" rx="0.5" fill="#fff" />
    </svg>
  );
}
