import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    const target = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(target.getAttribute('data-theme') || 'light');
    });
    observer.observe(target, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return theme;
}
