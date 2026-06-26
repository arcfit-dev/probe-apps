import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { XCircle, CheckCircle, MinusCircle } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, slideRight, slideLeft, staggerContainer, staggerSlow, viewportOnce } from '../hooks/useAnimations';

const before = [
  ['Missed leads', 'Leads get ignored or lost in the noise.'],
  ['Delayed responses', 'Slow replies lose high-intent buyers.'],
  ['Manual & time-consuming', 'Hours spent on follow-ups and data entry.'],
  ['Lower conversions', 'Inconsistent follow-up = lost revenue.'],
];
const after = [
  ['Instant replies', 'AI responds instantly. No lead left behind.'],
  ['Zero missed follow-ups', 'Smart follow-ups at the right time, every time.'],
  ['Automated & effortless', 'Save 50%+ of your time. Focus on closing.'],
  ['Higher conversions', 'Nurture leads better. Close more deals.'],
];
const results = [['+30%', 'Increase in conversion rate'], ['50%', 'Time saved on follow-ups'], ['5X', 'Higher ROI with better lead management']];

function AnimatedStat({ value, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
    >
      <div className="benefit-stat">{value}</div>
      <div style={{ fontSize: 14.5, color: 'var(--neutral-700)', marginTop: 4 }}>{label}</div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section className="section-pad" style={{ background: 'var(--neutral-1300)' }}>
      <div className="wrap">
        <SectionHead center eyebrow="The impact that matters" title="Before Probe vs. after Probe" sub="Automate follow-ups. Never miss a deal. Close more." />
        <div className="grid-2col">
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ padding: 28, background: 'var(--error-800)', border: '1px solid var(--error-700)', borderRadius: 16, boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, color: 'var(--error-200)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}><XCircle size={20} /> Without automation</div>
            {before.map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 12, padding: '10px 0', borderTop: '1px solid var(--error-700)' }}>
                <MinusCircle size={18} style={{ color: 'var(--error-300)', flexShrink: 0, marginTop: 2 }} />
                <div><div style={{ fontSize: 15, fontWeight: 600, color: 'var(--error-100)' }}>{t}</div><div style={{ fontSize: 14, color: 'var(--error-200)' }}>{d}</div></div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ padding: 28, background: 'var(--success-800)', border: '1px solid var(--success-700)', borderRadius: 16, boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, color: 'var(--success-200)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}><CheckCircle size={20} /> With Probe AI</div>
            {after.map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 12, padding: '10px 0', borderTop: '1px solid var(--success-700)' }}>
                <CheckCircle size={18} style={{ color: 'var(--success-300)', flexShrink: 0, marginTop: 2 }} />
                <div><div style={{ fontSize: 15, fontWeight: 600, color: 'var(--success-100)' }}>{t}</div><div style={{ fontSize: 14, color: 'var(--success-200)' }}>{d}</div></div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="grid-3col" style={{ marginTop: 24, background: '#0E2647', borderRadius: 20, padding: 32, textAlign: 'center' }}>
          {results.map(([n, l], i) => <AnimatedStat key={l} value={n} label={l} delay={i * 0.2} />)}
        </div>
      </div>
    </section>
  );
}
