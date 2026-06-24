import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, RefreshCw, Briefcase } from 'lucide-react';
import Button from './Button';
import { fadeUp, scaleUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const pillars = [
  [Target, 'Capture more leads', 'From every source, 24/7.'],
  [Zap, 'Respond instantly', 'Never miss a hot lead again.'],
  [RefreshCw, 'Automate follow-ups', 'Nurture and build trust automatically.'],
  [Briefcase, 'Close more deals', 'Turn conversations into conversions.'],
];

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section style={{ padding: '24px 24px 80px' }}>
      <div className="wrap">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, padding: '56px 48px', background: 'linear-gradient(135deg,#0E2647,#081A33)', boxShadow: 'var(--shadow-brand)', color: '#fff' }}
        >
          <svg viewBox="0 0 100 100" style={{ position: 'absolute', right: 40, top: -30, width: 260, height: 260, opacity: .1 }}><path d="M55 10 L30 55 H47 L42 90 L72 40 H53 Z" fill="#fff" /></svg>
          <div style={{ position: 'relative', maxWidth: 760 }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: 44, lineHeight: '52px', marginBottom: 14 }}
            >Stop losing deals. Start closing more — automatically.</motion.h2>
            <p style={{ fontSize: 18, color: 'var(--primary-800)', marginBottom: 28 }}>The future of real estate is automatic. Be part of it — get notified the moment we launch.</p>
            <div style={{ display: 'flex', gap: 12, maxWidth: 520, marginBottom: 14 }}>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={{ flex: 1, padding: '15px 18px', borderRadius: 8, border: 'none', outline: 'none', fontFamily: 'var(--font-sans)', fontSize: 16 }}
              />
              <Button
                variant="light" size="xl"
                icon={<ArrowRight size={20} />}
                onClick={() => email && setDone(true)}
              >{done ? 'Added!' : 'Notify me'}</Button>
            </div>
            <motion.div
              key={done ? 'done' : 'default'}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: 13, color: 'var(--primary-700)' }}
            >
              {done ? "🎉 You're on the list — we'll be in touch." : 'Join the waitlist for early access and exclusive updates.'}
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.15)' }}>
              {pillars.map(([Icon, t, d]) => (
                <motion.div key={t} variants={fadeUp}>
                  <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}><Icon size={18} /></span>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>{t}</div>
                  <div style={{ fontSize: 13, color: 'var(--primary-800)', marginTop: 2 }}>{d}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
