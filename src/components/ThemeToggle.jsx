import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function getInitialTheme() {
  const stored = localStorage.getItem('probe-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle({ size = 40 }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('probe-theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      style={{
        width: size, height: size, borderRadius: '50%', border: '1px solid var(--border-subtle)',
        background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: 'var(--text-brand)', flexShrink: 0, position: 'relative', overflow: 'hidden',
      }}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'flex' }}
      >
        {isDark ? <Moon size={size * 0.45} /> : <Sun size={size * 0.45} />}
      </motion.span>
    </motion.button>
  );
}
