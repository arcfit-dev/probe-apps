import { motion } from 'framer-motion';
import { Megaphone, Search, Building2, Home, LayoutGrid, Globe, MessageCircle, Webhook, ArrowRight } from 'lucide-react';
import SectionHead from './SectionHead';
import Button from './Button';
import { DEMO_URL } from '../constants/links';
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const sources = [
  [Megaphone, 'Meta Ads'],
  [Search, 'Google Ads'],
  [Building2, '99acres'],
  [Home, 'Housing.com'],
  [LayoutGrid, 'MagicBricks'],
  [Globe, 'Website forms'],
  [MessageCircle, 'WhatsApp Business'],
  [Webhook, 'Custom API / webhook'],
];

export default function Integrations() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Integrations"
          title="Pull leads from anywhere you already spend"
          sub="Meta Ads, Google Ads, property portals, your own website — connect any lead source and your AI Agents take it from there."
        />
        <motion.div className="grid-4col" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {sources.map(([Icon, t]) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 16px', background: 'var(--surface)', borderRadius: 14, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}
            >
              <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 10, background: 'var(--brand-subtle)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={18} /></span>
              <span style={{ fontSize: 14.5, fontWeight: 700 }}>{t}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, marginTop: 36 }}>
          <p style={{ fontSize: 15, color: 'var(--text-body)', textAlign: 'center' }}>Don't see your platform? We'll build the integration.</p>
          <Button variant="grey" size="lg" icon={<ArrowRight size={18} />} href={DEMO_URL}>Talk to us</Button>
        </motion.div>
      </div>
    </section>
  );
}
