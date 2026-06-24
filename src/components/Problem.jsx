import { motion } from 'framer-motion';
import { MessageSquare, Search, BellOff, TrendingDown } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, scaleUp, staggerContainer, viewportOnce, cardHover } from '../hooks/useAnimations';

const probs = [
  [MessageSquare, 'Leads come from everywhere', 'WhatsApp, calls, website, portals and referrals — scattered across a dozen places.'],
  [Search, 'No proper tracking', 'Leads live in chats, call logs and random spreadsheets. Nothing is in one system.'],
  [BellOff, 'Follow-ups are missed', 'No reminders, no automation. Leads quietly slip through the cracks.'],
  [TrendingDown, 'Hot buyers go cold', 'Delayed replies turn ready-to-buy leads into missed opportunities.'],
];

export default function Problem() {
  return (
    <section id="problem" style={{ background: 'var(--neutral-1300)', padding: '80px 0' }}>
      <div className="wrap">
        <SectionHead eyebrow="The current reality" title="Most brokers lose deals they already won" sub="A broker gets 25+ inquiries a day. It's rarely the market that loses the deal — it's the follow-up. Here's where deals leak today." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
          {probs.map(([Icon, t, d]) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', gap: 16, padding: 24, background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}
            >
              <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, background: 'var(--error-800)', color: 'var(--error-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={20} /></span>
              <div><h3 style={{ fontSize: 19, marginBottom: 6 }}>{t}</h3><p style={{ fontSize: 15, lineHeight: '24px', color: 'var(--text-body)' }}>{d}</p></div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 20, background: 'linear-gradient(135deg,#0E2647,#081A33)', borderRadius: 20, padding: '28px 32px', color: '#fff' }}
        >
          <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><TrendingDown size={26} /></span>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: '34px', fontWeight: 600 }}>Up to <span style={{ color: 'var(--warning-500)' }}>40% of potential deals</span> are lost to poor follow-up.</p>
        </motion.div>
      </div>
    </section>
  );
}
