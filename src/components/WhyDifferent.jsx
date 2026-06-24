import { motion } from 'framer-motion';
import { Check, X, AlertTriangle } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, scaleUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const rows = ['Built for real estate workflows', 'Automation-first (not just tracking)', 'Instant responses & follow-ups', 'Easy to use, quick setup', 'Built for conversions'];
const cols = ['Excel', 'Manual WhatsApp', 'Generic CRMs', 'Probe'];
const cells = [['x', 'x', '~', 'y'], ['x', 'x', '~', 'y'], ['x', 'x', '~', 'y'], ['x', 'x', '~', 'y'], ['x', 'x', '~', 'y']];

function Mark({ v }) {
  if (v === 'y') return <span style={{ display: 'inline-flex', width: 26, height: 26, borderRadius: '50%', alignItems: 'center', justifyContent: 'center', background: 'var(--success-400)' }}><Check size={18} color="#fff" /></span>;
  if (v === '~') return <AlertTriangle size={16} style={{ color: 'var(--warning-400)' }} />;
  return <X size={16} style={{ color: 'var(--neutral-600)' }} />;
}

export default function WhyDifferent() {
  return (
    <section style={{ background: 'var(--neutral-1300)', padding: '80px 0' }}>
      <div className="wrap">
        <SectionHead eyebrow="Why this is different" title="Not just another tool — a complete growth system" sub="Built specifically for the way real estate brokers actually work." />
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
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: 'center', marginTop: 24, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22 }}
        >This isn't just software. It's your <span style={{ color: 'var(--text-brand)' }}>competitive advantage.</span></motion.p>
      </div>
    </section>
  );
}
