import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProbeLogo } from './ProbeLogo';
import Button from './Button';
import { DASH_URL, DEMO_URL } from '../constants/links';
import { fadeDown, viewportOnce } from '../hooks/useAnimations';

const links = [['Problem', 'problem'], ['Solution', 'solution'], ['Features', 'features'], ['Pricing', 'pricing']];

export default function Nav() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 100], ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 20px rgba(0,0,0,0.06)']);

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
          <nav style={{ display: 'flex', gap: 28 }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="link" href={DASH_URL}>Sign in</Button>
          <Button variant="primary" icon={<ArrowRight size={18} />} href={DEMO_URL}>Book a demo</Button>
        </div>
      </div>
    </motion.header>
  );
}
