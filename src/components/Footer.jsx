import { motion } from 'framer-motion';
import { ProbeLogo } from './ProbeLogo';
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const columns = [
  ['Product', ['Capture', 'Engage', 'Convert', 'Pricing']],
  ['Company', ['About', 'Careers', 'Blog', 'Contact']],
  ['Resources', ['Docs', 'Support', 'Status', 'API']],
  ['Legal', ['Privacy', 'Terms', 'Security']],
];

function SocialIcon({ d }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const socials = [
  { label: 'Twitter', d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
  { label: 'Instagram', d: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
  { label: 'LinkedIn', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0E2647', color: '#fff' }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="wrap"
        style={{ padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 32 }}
      >
        <motion.div variants={fadeUp}>
          <ProbeLogo white width={118} />
          <p style={{ fontSize: 14, lineHeight: '22px', color: 'var(--neutral-600)', marginTop: 16, maxWidth: 260 }}>
            AI lead automation for real estate brokers. Built for real estate. Backed by innovation. Driven by results.
          </p>
        </motion.div>
        {columns.map(([h, items]) => (
          <motion.div key={h} variants={fadeUp}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 14 }}>{h}</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(i => <li key={i}><a href="#" style={{ fontSize: 14, color: 'var(--neutral-600)', transition: 'color .15s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--neutral-600)'}>{i}</a></li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <div className="wrap" style={{ borderTop: '1px solid var(--neutral-200)', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--neutral-600)' }}>
        <span>&copy; 2026 Probe, Inc.</span>
        <span style={{ display: 'flex', gap: 16 }}>
          {socials.map(s => (
            <motion.a key={s.label} href="#" whileHover={{ scale: 1.2, color: '#fff' }} style={{ cursor: 'pointer', color: 'var(--neutral-600)' }} aria-label={s.label}>
              <SocialIcon d={s.d} />
            </motion.a>
          ))}
        </span>
      </div>
    </footer>
  );
}
