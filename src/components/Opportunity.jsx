import { motion } from 'framer-motion';
import { Home, TrendingUp, DollarSign, Target, Layers } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const tiles = [[DollarSign, 'High-value transactions'], [Target, 'High buyer intent'], [Layers, 'High commission potential']];

export default function Opportunity() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHead eyebrow="The opportunity" title="One extra deal changes your whole month" sub="Real estate is one of the highest-value industries there is — every recovered lead is worth a fortune." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--brand-subtle)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Home size={20} /></span>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--text-brand)' }}>₹5L – ₹50L</div><div style={{ fontSize: 15, color: 'var(--text-body)' }}>commission per successful deal</div></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--success-800)', color: 'var(--success-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><TrendingUp size={20} /></span>
              <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>Even 1 extra deal</div><div style={{ fontSize: 15, color: 'var(--text-body)' }}>= huge revenue gain. More deals, more growth.</div></div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ background: 'linear-gradient(135deg,#0E2647,#081A33)', color: '#fff', border: 'none', padding: 36, borderRadius: 16, boxShadow: 'var(--shadow-md)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, lineHeight: '38px', marginBottom: 24 }}>What if every lead was followed up perfectly — <span style={{ color: 'var(--warning-500)' }}>automatically?</span></h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {tiles.map(([Icon, t]) => (
              <motion.div key={t} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={18} /></span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
