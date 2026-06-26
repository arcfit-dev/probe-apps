import { useState, useEffect } from 'react';

const MOBILE = '(max-width: 640px)';
const TABLET = '(min-width: 641px) and (max-width: 1024px)';

export default function useBreakpoint() {
  const [bp, setBp] = useState(() => ({
    isMobile: window.matchMedia(MOBILE).matches,
    isTablet: window.matchMedia(TABLET).matches,
    isDesktop: !window.matchMedia(MOBILE).matches && !window.matchMedia(TABLET).matches,
  }));

  useEffect(() => {
    const mql = window.matchMedia(MOBILE);
    const tql = window.matchMedia(TABLET);
    const update = () => {
      const m = mql.matches;
      const t = tql.matches;
      setBp({ isMobile: m, isTablet: t, isDesktop: !m && !t });
    };
    mql.addEventListener('change', update);
    tql.addEventListener('change', update);
    return () => {
      mql.removeEventListener('change', update);
      tql.removeEventListener('change', update);
    };
  }, []);

  return bp;
}
