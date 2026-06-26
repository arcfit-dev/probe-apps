import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ProbeLogo } from './ProbeLogo';
import Button from './Button';
import { DASH_URL, DEMO_URL } from '../constants/links';
import { fadeDown, viewportOnce } from '../hooks/useAnimations';
import useBreakpoint from '../hooks/useBreakpoint';

const links = [['Problem', 'problem'], ['Solution', 'solution'], ['Features', 'features'], ['Pricing', 'pricing']];

export default function Nav() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 100], ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 20px rgba(0,0,0,0.06)']);
  const { isDesktop } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)', boxShadow: shadow,
      }}
    >
      <div className="wrap" style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <ProbeLogo width={118} />
          <nav className="nav-desktop" style={{ gap: 28 }}>
            {links.map(([l, h]) => (
              <motion.a
                key={h}
                href={`#${h}`}
                whileHover={{ color: 'var(--text-primary)' }}
                style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-body)', transition: 'color .15s' }}
              >{l}</motion.a>
            ))}
          </nav>
        </div>
        <div className="nav-desktop" style={{ alignItems: 'center', gap: 12 }}>
          <Button variant="link" href={DASH_URL}>Sign in</Button>
          <Button variant="primary" icon={<ArrowRight size={18} />} href={DEMO_URL}>Book a demo</Button>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: 'var(--text-primary)', alignItems: 'center', justifyContent: 'center' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && !isDesktop && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', background: '#fff', borderTop: '1px solid var(--border-subtle)' }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map(([l, h], i) => (
                <motion.a
                  key={h}
                  href={`#${h}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-body)', padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}
                >{l}</motion.a>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                <Button variant="link" href={DASH_URL} onClick={() => setMenuOpen(false)}>Sign in</Button>
                <Button variant="primary" icon={<ArrowRight size={18} />} href={DEMO_URL} onClick={() => setMenuOpen(false)}>Book a demo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
