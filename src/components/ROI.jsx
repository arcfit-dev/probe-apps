import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHead from './SectionHead';
import { slideRight, slideLeft, viewportOnce } from '../hooks/useAnimations';

function Field({ label, val, set, min, max, step, suffix }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-brand)' }}>{val}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={val}
        onChange={e => set(Number(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--brand)', height: 6 }}
      />
    </div>
  );
}

export default function ROI() {
  const [leads, setLeads] = useState(100);
  const [base, setBase] = useState(10);
  const [lift, setLift] = useState(15);
  const [comm, setComm] = useState(2);
  const extraDeals = Math.max(0, Math.round(leads * (lift - base) / 100));
  const extraRev = extraDeals * comm;

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="wrap">
        <SectionHead center eyebrow="ROI — make it concrete" title="See the revenue Probe can unlock" sub="Move your conversion rate just a few points and the extra deals add up fast." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ padding: 32, background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
            <Field label="Monthly leads" val={leads} set={setLeads} min={20} max={500} step={10} suffix="" />
            <Field label="Current conversion" val={base} set={setBase} min={2} max={30} step={1} suffix="%" />
            <Field label="Conversion with Probe" val={lift} set={v => setLift(Math.max(v, base))} min={2} max={40} step={1} suffix="%" />
            <Field label="Avg commission" val={comm} set={setComm} min={1} max={50} step={1} suffix="L" />
          </motion.div>
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ background: 'linear-gradient(135deg,#0E2647,#081A33)', color: '#fff', border: 'none', padding: 36, borderRadius: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 15, color: 'var(--primary-800)', marginBottom: 6 }}>Extra deals every month</div>
            <motion.div
              key={extraDeals}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, marginBottom: 20 }}
            >{extraDeals} deals</motion.div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 20 }}>
              <div style={{ fontSize: 15, color: 'var(--primary-800)', marginBottom: 6 }}>Extra revenue every month</div>
              <motion.div
                key={extraRev}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, color: 'var(--success-600)', lineHeight: 1 }}
              >₹{extraRev}L</motion.div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--primary-700)', marginTop: 20 }}>Based on improved conversion and automation-driven follow-ups. Results vary by market, team and execution.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
