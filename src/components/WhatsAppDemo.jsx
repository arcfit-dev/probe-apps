import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Home, Calendar, ArrowRight, ChevronLeft, Video, Phone, Send } from 'lucide-react';
import { ProbeMark } from './ProbeLogo';
import SectionHead from './SectionHead';
import Button from './Button';
import { DASH_URL } from '../constants/links';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const script = [
  { from: 'user', text: 'Hi, looking for a 2BHK in Gurgaon 🏡' },
  { from: 'ai', text: "Hi! 👋 I'm Probe, your property assistant. What's your budget range?" },
  { from: 'user', text: 'Around ₹1 – 1.25 Cr' },
  { from: 'ai', text: 'Perfect! Here are 3 great 2BHK options in Gurgaon 👇', listings: [['DLF Phase 5', '1100 sq.ft', '₹1.25 Cr'], ['Sector 57', '1150 sq.ft', '₹1.10 Cr'], ['Sohna Road', '1050 sq.ft', '₹95 L']] },
  { from: 'user', text: 'I like the one in Sector 57!' },
  { from: 'ai', text: 'Great choice ⭐ Shall I book a site visit this weekend?' },
  { from: 'user', text: 'Yes, Saturday works 👍' },
  { from: 'ai', text: 'Done ✅ Your Saturday visit is booked. A broker will confirm shortly!' },
];

const bullets = [
  [Zap, 'Replies in seconds, day or night'],
  [Globe, "Speaks your buyer's language & tone"],
  [Home, 'Shares matching listings automatically'],
  [Calendar, 'Books site visits without the back-and-forth'],
];

function WaBubble({ msg, index }) {
  const isUser = msg.from === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'flex', justifyContent: isUser ? 'flex-end' : 'flex-start' }}
    >
      <div style={{
        maxWidth: '82%', padding: '7px 10px', borderRadius: 10, fontSize: 13.5, lineHeight: '18px',
        fontFamily: 'var(--font-sans)', color: '#0b141a', boxShadow: '0 1px 1px rgba(0,0,0,.08)',
        background: isUser ? '#DCF8C6' : '#fff',
        borderTopRightRadius: isUser ? 2 : 10, borderTopLeftRadius: isUser ? 10 : 2,
      }}>
        {msg.text}
        {msg.listings && (
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {msg.listings.map(([loc, spec, price]) => (
              <div key={loc} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#F3F4F6', borderRadius: 8, padding: '6px 8px' }}>
                <span style={{ width: 30, height: 30, borderRadius: 6, background: 'linear-gradient(135deg,#1E73D8,#4BA3F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><Home size={15} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#0E2647' }}>{loc}</div>
                  <div style={{ fontSize: 11, color: '#5A6475' }}>{spec}</div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1E73D8' }}>{price}</div>
              </div>
            ))}
          </div>
        )}
        <span style={{ display: 'block', textAlign: 'right', fontSize: 9.5, color: '#667781', marginTop: 2 }}>
          {isUser ? '✓✓ ' : ''}{String(10 + index).padStart(2, '0')}:0{index} {index < 6 ? 'AM' : 'PM'}
        </span>
      </div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{ display: 'flex', justifyContent: 'flex-start' }}
    >
      <div style={{ background: '#fff', borderRadius: 10, borderTopLeftRadius: 2, padding: '10px 12px', display: 'flex', gap: 4, boxShadow: '0 1px 1px rgba(0,0,0,.08)' }}>
        {[0, 0.2, 0.4].map((d, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: d }}
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#90A4AE', display: 'inline-block' }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let timers = [];
    function run() {
      setMessages([]);
      setTyping(false);
      let t = 600;
      script.forEach((m, i) => {
        if (m.from === 'ai') {
          timers.push(setTimeout(() => setTyping(true), t));
          t += 1100;
          timers.push(setTimeout(() => { setTyping(false); setMessages(prev => [...prev, m]); }, t));
          t += 700;
        } else {
          timers.push(setTimeout(() => setMessages(prev => [...prev, m]), t));
          t += 900;
        }
      });
      timers.push(setTimeout(run, t + 2600));
    }
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  return (
    <section style={{ background: 'linear-gradient(180deg,#fff 0%,var(--brand-subtle) 100%)', padding: '80px 0' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <SectionHead eyebrow="AI chat in action" title="Watch Probe close a lead on WhatsApp" sub="From first hello to a booked site visit — your AI assistant handles the entire conversation, instantly." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {bullets.map(([Icon, t]) => (
              <motion.div key={t} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', boxShadow: 'var(--shadow-sm)', color: 'var(--text-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={18} /></span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{t}</span>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ marginTop: 28 }}>
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} href={DASH_URL}>Try it on your leads</Button>
          </div>
        </motion.div>

        <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ width: 330, height: 660, background: '#0E2647', borderRadius: 44, padding: 12, boxShadow: 'var(--shadow-lg)', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 120, height: 26, background: '#0E2647', borderRadius: 14, zIndex: 3 }} />
            <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#ECE5DD' }}>
              <div style={{ background: '#075E54', color: '#fff', padding: '34px 14px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <ChevronLeft size={20} />
                <span style={{ width: 38, height: 38, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <ProbeMark size={38} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-sans)' }}>Probe AI</div>
                  <div style={{ fontSize: 11.5, opacity: .85 }}>online</div>
                </div>
                <Video size={18} /><Phone size={16} />
              </div>
              <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 8, backgroundImage: 'radial-gradient(rgba(0,0,0,.025) 1px,transparent 1px)', backgroundSize: '16px 16px' }}>
                <AnimatePresence>
                  {messages.map((m, i) => <WaBubble key={i} msg={m} index={i} />)}
                  {typing && <TypingDots key="typing" />}
                </AnimatePresence>
              </div>
              <div style={{ padding: '8px 10px', background: '#F0F0F0', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, background: '#fff', borderRadius: 18, padding: '8px 14px', fontSize: 13, color: '#9AA0A6', fontFamily: 'var(--font-sans)' }}>Message</div>
                <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#075E54', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Send size={16} /></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
