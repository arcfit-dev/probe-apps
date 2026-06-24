import { motion } from 'framer-motion';
import { Send, Star, Briefcase, Clock, Calendar, Unlock, Headphones, Shield } from 'lucide-react';
import SectionHead from './SectionHead';
import Badge from './Badge';
import Button from './Button';
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const plans = [
  { name: 'Starter', Icon: Send, tone: 'var(--brand)', desc: 'Perfect for solo agents getting started.', variant: 'grey' },
  { name: 'Professional', Icon: Star, tone: 'var(--success-400)', desc: 'For growing teams who want to close more deals.', variant: 'primary', featured: true },
  { name: 'Pro', Icon: Briefcase, tone: 'var(--primary-400)', desc: 'For large teams with advanced needs.', variant: 'grey' },
];

const perks = [[Calendar, '14-day free trial'], [Unlock, 'No long-term contracts'], [Headphones, 'Priority support'], [Shield, '100% secure & reliable']];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '80px 0' }}>
      <div className="wrap">
        <SectionHead center eyebrow="Pricing" title="Flexible plans for every stage" sub="Start small, scale big. No setup fees, cancel anytime, 14-day money-back guarantee." />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <Badge tone="warning-light" size="lg" icon={<Clock size={14} />}>Launching soon — pricing to be announced</Badge>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'stretch' }}>
          {plans.map(p => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
              transition={{ duration: 0.3 }}
              style={{
                background: '#fff', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column',
                border: p.featured ? '2px solid var(--brand)' : '1px solid var(--border-subtle)',
                boxShadow: p.featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
              }}
            >
              {p.featured && <div style={{ background: 'var(--brand)', color: '#fff', textAlign: 'center', padding: 8, fontSize: 12, fontWeight: 700, letterSpacing: '.05em' }}>MOST POPULAR</div>}
              <div style={{ padding: 32, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--brand-subtle)', color: p.tone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p.Icon size={20} /></span>
                  <h3 style={{ fontSize: 22 }}>{p.name}</h3>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-body)', marginBottom: 24 }}>{p.desc}</p>
                <div style={{ background: 'var(--neutral-1300)', borderRadius: 14, padding: 24, textAlign: 'center', marginBottom: 24 }}>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>Pricing</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22 }}>Yet to be announced</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>We're working on something exciting for you.</div>
                </div>
                <Button variant={p.variant} size="lg" full style={{ marginTop: 'auto' }}>Join waitlist</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {perks.map(([Icon, t]) => (
            <motion.div key={t} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--brand-subtle)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={16} /></span>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{t}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
