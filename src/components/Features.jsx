import { motion } from 'framer-motion';
import { Home, Users, RefreshCw, Briefcase, BarChart2, Settings, Zap, MapPin, Layout, MessageCircle, Bell, Share2, CheckCircle, PieChart } from 'lucide-react';
import { ProbeLogo } from './ProbeLogo';
import SectionHead from './SectionHead';
import { fadeUp, scaleUp, staggerContainer, staggerFast, viewportOnce } from '../hooks/useAnimations';

const metrics = [['Total leads', '248', '+18%', Users], ['Hot leads', '36', '+25%', Zap], ['Site visits', '28', '+15%', MapPin], ['Deals closed', '12', '+20%', Briefcase]];
const sources = [['WhatsApp', '45%', 'var(--success-400)'], ['Website', '30%', 'var(--brand)'], ['Portal', '15%', 'var(--warning-400)'], ['Others', '10%', 'var(--neutral-600)']];
const sidebarItems = [[Home, 'Dashboard', true], [Users, 'Leads'], [Home, 'Properties'], [RefreshCw, 'Follow-ups'], [Briefcase, 'Deals'], [BarChart2, 'Reports'], [Settings, 'Settings']];
const feats = [
  [Layout, 'Lead management dashboard', 'Centralized dashboard to capture, organize and track every lead in real time.'],
  [MessageCircle, 'Automated WhatsApp follow-ups', 'AI-powered follow-ups that engage leads at the right time with the right message.'],
  [Bell, 'Smart hot-lead notifications', 'Get instant alerts the moment a lead shows intent so you can act fast and close faster.'],
  [Share2, 'Property sharing automation', "Auto-send listings, floor plans, videos and brochures based on each buyer's preferences."],
  [CheckCircle, 'Deal tracking', 'Track site visits, negotiations, payments and closures — all in one place.'],
  [PieChart, 'Pipeline analytics', 'See response times, top sources, conversion and revenue at a glance.'],
];

function AnimatedCounter({ value, suffix = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, margin: '4px 0 2px' }}
    >{value}{suffix}</motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="wrap">
        <SectionHead center eyebrow="Key features" title="Everything you need to capture, engage & close" sub="All the tools brokers need on one platform that works 24/7 for you." />

        <motion.div variants={scaleUp} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', marginBottom: 40 }}>
          <div className="grid-sidebar">
            <div style={{ background: '#0E2647', padding: '20px 16px', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}><ProbeLogo white width={96} /></div>
              {sidebarItems.map(([Icon, l, on], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 8, marginBottom: 2, fontSize: 13.5, fontWeight: on ? 600 : 500, background: on ? 'var(--brand)' : 'transparent', color: on ? '#fff' : 'var(--neutral-600)' }}>
                  <Icon size={16} />{l}
                </div>
              ))}
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, marginBottom: 16 }}>Dashboard</div>
              <motion.div className="grid-metrics" variants={staggerFast} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ marginBottom: 20 }}>
                {metrics.map(([l, v, d, Icon]) => (
                  <motion.div key={l} variants={fadeUp} style={{ border: '1px solid var(--border-subtle)', borderRadius: 12, padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--text-muted)' }}><span style={{ fontSize: 12.5 }}>{l}</span><Icon size={15} /></div>
                    <AnimatedCounter value={v} />
                    <div style={{ fontSize: 12, color: 'var(--success-400)', fontWeight: 600 }}>↑ {d}</div>
                  </motion.div>
                ))}
              </motion.div>
              <div className="grid-chart">
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Leads overview · this month</div>
                  <svg viewBox="0 0 300 90" style={{ width: '100%', height: 90 }}>
                    <polyline fill="none" stroke="var(--brand)" strokeWidth="2.5" points="0,70 50,58 100,64 150,40 200,48 250,24 300,12" />
                    <polygon fill="var(--brand-subtle)" points="0,70 50,58 100,64 150,40 200,48 250,24 300,12 300,90 0,90" />
                  </svg>
                </div>
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Top sources</div>
                  {sources.map(([l, v, c]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                      <span style={{ fontSize: 12.5, flex: 1, color: 'var(--text-body)' }}>{l}</span>
                      <span style={{ fontSize: 12.5, fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="grid-3col" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {feats.map(([Icon, t, d]) => (
            <motion.div
              key={t}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ padding: 26, background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', cursor: 'default' }}
            >
              <span style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--brand-subtle)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon size={20} /></span>
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: '23px', color: 'var(--text-body)' }}>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
