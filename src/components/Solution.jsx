import { motion } from 'framer-motion';
import { Download, MessageCircle, RefreshCw, Calendar, Briefcase, ChevronRight, CheckCircle } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, scaleUp, staggerContainer, staggerFast, viewportOnce } from '../hooks/useAnimations';

const steps = [
  [Download, 'Lead', 'Captured from WhatsApp, calls, website, portals & referrals — automatically.'],
  [MessageCircle, 'Instant reply', 'AI replies in seconds, qualifies the buyer and shares matching listings.'],
  [RefreshCw, 'Smart follow-up', "AI follows up at the right time with the right message until they're ready."],
  [Calendar, 'Visit / meeting', 'Probe books the site visit and keeps the buyer engaged.'],
  [Briefcase, 'Deal closure', 'You get alerted the moment a lead is hot, and close more — consistently.'],
];

export default function Solution() {
  return (
    <section id="solution" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <SectionHead center eyebrow="Our solution" title="Your 24/7 AI sales assistant" sub="Automate every step from first message to closed deal. One platform, fully automated, built for real estate brokers." />
        <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', alignItems: 'stretch', gap: 8, flexWrap: 'nowrap' }}>
          {steps.map(([Icon, t, d], i) => (
            <motion.div key={t} style={{ display: 'contents' }}>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
                transition={{ duration: 0.25 }}
                style={{ flex: 1, textAlign: 'center', padding: 22, background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                  <span style={{ position: 'relative', width: 54, height: 54, borderRadius: 14, background: 'var(--brand-subtle)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={24} />
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 400, damping: 15 }}
                      style={{ position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: '50%', background: 'var(--brand)', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >{i + 1}</motion.span>
                  </span>
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 6 }}>{t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: '20px', color: 'var(--text-body)' }}>{d}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', color: 'var(--neutral-700)' }}>
                  <ChevronRight size={20} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#0E2647', borderRadius: 16, padding: '18px 28px', color: '#fff' }}
        >
          <CheckCircle size={20} style={{ color: 'var(--success-500)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18 }}>One platform. Fully automated. More engagement, more visits, more closures.</span>
        </motion.div>
      </div>
    </section>
  );
}
