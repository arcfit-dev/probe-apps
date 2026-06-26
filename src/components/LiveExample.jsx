import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import SectionHead from './SectionHead';
import Badge from './Badge';
import { fadeUp, slideRight, slideLeft, staggerContainer, staggerSlow, viewportOnce } from '../hooks/useAnimations';

const listings = [['DLF Phase 5', '2BHK · 1100 sq.ft', '₹1.25 Cr'], ['Sector 57', '2BHK · 1150 sq.ft', '₹1.10 Cr'], ['Sohna Road', '2BHK · 1050 sq.ft', '₹95 Lakh']];
const timeline = ['AI captures the inquiry instantly', 'Instant reply with relevant listings', 'Smart follow-ups based on timing & intent', 'Lead shows interest (hot lead)', 'Broker alerted instantly to take over'];

function Bubble({ me, children }) {
  return (
    <div style={{ display: 'flex', justifyContent: me ? 'flex-end' : 'flex-start' }}>
      <div style={{
        maxWidth: '82%', padding: '10px 14px', borderRadius: 14, fontSize: 14, lineHeight: '20px',
        background: me ? 'var(--brand-subtle)' : '#fff', color: 'var(--text-primary)',
        border: `1px solid ${me ? 'transparent' : 'var(--border-subtle)'}`,
        borderBottomRightRadius: me ? 4 : 14, borderBottomLeftRadius: me ? 14 : 4,
      }}>{children}</div>
    </div>
  );
}

export default function LiveExample() {
  return (
    <section className="section-pad" style={{ background: 'var(--neutral-1300)' }}>
      <div className="wrap">
        <SectionHead eyebrow="Live example · real scenario" title="See how Probe handles a real lead" sub="Zero manual effort until the lead is ready to talk to a human." />
        <div className="grid-live">
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', background: 'linear-gradient(135deg,#0E2647,#081A33)', color: '#fff' }}>
              <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>PA</span>
              <div><div style={{ fontSize: 14, fontWeight: 600 }}>Probe AI Assistant</div><div style={{ fontSize: 12, opacity: .7 }}>Skyline Realty · online</div></div>
              <Badge tone="success-solid" size="sm" dot style={{ marginLeft: 'auto' }}>Live</Badge>
            </div>
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--neutral-1200)' }}>
              <Bubble me>Looking for a 2BHK in Gurgaon <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>· 10:01 AM</span></Bubble>
              <Bubble>Hi! Sure, I can help with that. Here are some great 2BHK options in Gurgaon 👇</Bubble>
              <div className="grid-listings">
                {listings.map(([loc, spec, price]) => (
                  <div key={loc} style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 10, overflow: 'hidden' }}>
                    <div style={{ height: 48, background: 'linear-gradient(135deg,var(--primary-700),var(--primary-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Home size={18} /></div>
                    <div style={{ padding: '8px 10px' }}>
                      <div style={{ fontSize: 12, fontWeight: 600 }}>{loc}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{spec}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-brand)', marginTop: 2 }}>{price}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Bubble>Just checking in 😊 Did you get a chance to look at the properties I shared? <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>· 2:00 PM</span></Bubble>
              <Bubble me>Yes, I'm interested in the one in Sector 57. <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>· 2:01 PM</span></Bubble>
              <Bubble>Great! ⭐ I've notified our sales expert — a broker will connect with you shortly.</Bubble>
            </div>
          </motion.div>

          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', padding: 24 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, marginBottom: 18 }}>What happened behind the scenes</div>
            <motion.div variants={staggerSlow} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              {timeline.map((t, i) => (
                <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: i * 0.15, type: 'spring', stiffness: 400, damping: 15 }}
                      style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 700 }}
                    >{i + 1}</motion.span>
                    {i < timeline.length - 1 && <span style={{ width: 2, flex: 1, minHeight: 18, background: 'var(--border-default)' }} />}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--text-body)', paddingBottom: 18, lineHeight: '20px' }}>{t}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
