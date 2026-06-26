import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, scaleUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';
import useBreakpoint from '../hooks/useBreakpoint';

const rows = ['Built for real estate workflows', 'Automation-first (not just tracking)', 'Instant responses & follow-ups', 'Easy to use, quick setup', 'Built for conversions'];
const cols = ['Excel', 'Manual WhatsApp', 'Generic CRMs', 'Probe'];
const cells = [['x', 'x', '~', 'y'], ['x', 'x', '~', 'y'], ['x', 'x', '~', 'y'], ['x', 'x', '~', 'y'], ['x', 'x', '~', 'y']];

function Mark({ v }) {
  if (v === 'y') return <span style={{ display: 'inline-flex', width: 26, height: 26, borderRadius: '50%', alignItems: 'center', justifyContent: 'center', background: 'var(--success-400)' }}><Check size={18} color="#fff" /></span>;
  if (v === '~') return <AlertTriangle size={16} style={{ color: 'var(--warning-400)' }} />;
  return <X size={16} style={{ color: 'var(--neutral-600)' }} />;
}

function MobileCards() {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {rows.map((r, ri) => (
        <motion.div
          key={r}
          variants={fadeUp}
          style={{ background: '#fff', borderRadius: 14, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}
        >
          <div style={{ padding: '14px 16px', fontWeight: 600, fontSize: 15, borderBottom: '1px solid var(--border-subtle)' }}>{r}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
            {cols.map((c, ci) => (
              <div
                key={c}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px',
                  background: ci === 3 ? '#0E2647' : 'transparent',
                  color: ci === 3 ? '#fff' : 'var(--text-body)',
                  borderTop: ci >= 2 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <Mark v={cells[ri][ci]} />
                <span style={{ fontSize: 13, fontWeight: ci === 3 ? 700 : 500 }}>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function DesktopTable() {
  return (
    <motion.div variants={scaleUp} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '18px 24px', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)', fontWeight: 500 }}></th>
            {cols.map((c, i) => (
              <th key={c} style={{ padding: '18px 16px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, background: i === 3 ? '#0E2647' : 'transparent', color: i === 3 ? '#fff' : 'var(--text-body)', borderTopLeftRadius: i === 3 ? 12 : 0, borderTopRightRadius: i === 3 ? 12 : 0 }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <motion.tr
              key={r}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ri * 0.08, duration: 0.4 }}
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <td style={{ textAlign: 'left', padding: '16px 24px', fontSize: 15, fontWeight: 600 }}>{r}</td>
              {cells[ri].map((v, ci) => (
                <td key={ci} style={{ textAlign: 'center', padding: 16, background: ci === 3 ? '#0E2647' : 'transparent' }}>
                  <Mark v={v} />
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default function WhyDifferent() {
  const { isMobile } = useBreakpoint();

  return (
    <section className="section-pad" style={{ background: 'var(--neutral-1300)' }}>
      <div className="wrap">
        <SectionHead eyebrow="Why this is different" title="Not just another tool — a complete growth system" sub="Built specifically for the way real estate brokers actually work." />
        {isMobile ? <MobileCards /> : <DesktopTable />}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="tagline"
          style={{ textAlign: 'center', marginTop: 24, fontFamily: 'var(--font-display)', fontWeight: 600 }}
        >This isn't just software. It's your <span style={{ color: 'var(--text-brand)' }}>competitive advantage.</span></motion.p>
      </div>
    </section>
  );
}
