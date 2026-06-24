import { motion } from 'framer-motion';
import { ArrowRight, Play, MessageCircle, RefreshCw, BarChart2, Briefcase, Inbox, Zap, PhoneMissed, Globe, Mail } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';
import { fadeUp, slideLeft, staggerContainer, staggerSlow, viewportOnce } from '../hooks/useAnimations';

const pillars = [
  [MessageCircle, 'AI replies instantly'],
  [RefreshCw, 'Smart follow-ups'],
  [BarChart2, 'Track & convert'],
  [Briefcase, 'Close more deals'],
];

const feed = [
  [MessageCircle, 'WhatsApp', '2BHK in Gurgaon?', 'success-light'],
  [PhoneMissed, 'Missed call', '+91 98765 43210', 'error-light'],
  [Globe, 'Property portal', 'New lead', 'primary-light'],
  [Mail, 'Email inquiry', 'info@example.com', 'warning-light'],
];

function HeroPanel() {
  return (
    <motion.div
      variants={slideLeft}
      style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}
    >
      <div style={{ background: 'linear-gradient(135deg,#0E2647,#081A33)', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
          <span style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Inbox size={16} /></span>
          <b style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>Unified lead inbox</b>
        </div>
        <Badge tone="success-solid" size="sm" dot>Live</Badge>
      </div>
      <motion.div variants={staggerSlow} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {feed.map(([Icon, t, d, tone], i) => (
          <motion.div key={i} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', border: '1px solid var(--border-subtle)', borderRadius: 12 }}>
            <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 10, background: 'var(--brand-subtle)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={18} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d}</div>
            </div>
            <Badge tone={tone} size="sm">AI replied</Badge>
          </motion.div>
        ))}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', background: 'var(--brand-subtle)', borderRadius: 12, color: 'var(--text-brand)' }}>
          <Zap size={18} /><span style={{ fontSize: 13, fontWeight: 600 }}>4 leads captured & answered in the last 2 minutes</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg,var(--brand-subtle) 0%,#fff 78%)' }}>
      <motion.div
        className="wrap"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center', padding: '72px 24px 84px' }}
      >
        <motion.div variants={fadeUp}>
          <Badge tone="primary-light" size="lg" dot>AI lead automation for real estate</Badge>
          <h1 style={{ fontSize: 60, lineHeight: '68px', margin: '20px 0 0' }}>
            Never lose a<br />property deal <span style={{ color: 'var(--text-brand)' }}>again</span>
          </h1>
          <p style={{ fontSize: 20, lineHeight: '32px', color: 'var(--text-body)', margin: '20px 0 14px', maxWidth: 520 }}>
            Probe captures every lead from WhatsApp, calls, portals and referrals, replies in seconds and follows up on autopilot — so hot buyers never go cold.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-primary)', marginBottom: 26 }}>
            Capture. Engage. Convert. <span style={{ color: 'var(--text-brand)' }}>Automatically.</span>
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 30 }}>
            <Button variant="primary" size="xl" icon={<ArrowRight size={20} />}>Book your free demo</Button>
            <Button variant="grey" size="xl" iconLeft={<Play size={20} />}>See it in action</Button>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {pillars.map(([Icon, t]) => (
              <motion.div key={t} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', boxShadow: 'var(--shadow-sm)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon size={16} /></span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <HeroPanel />
      </motion.div>
    </section>
  );
}
