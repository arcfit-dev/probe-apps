import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Mic, Clock, TrendingUp, Sparkles, PhoneOff, Volume2 } from 'lucide-react';
import SectionHead from './SectionHead';
import Button from './Button';
import { DASH_URL } from '../constants/links';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const scenarios = [
  {
    name: 'Rahul Mehra',
    tag: 'Missed call follow-up',
    lines: [
      { from: 'ai', text: 'Hi Rahul, this is Probe calling for Skyline Realty — saw you tried reaching us about the 3BHK in Sector 62.' },
      { from: 'user', text: 'Yes! Is it still available?' },
      { from: 'ai', text: 'It is. I can lock in a site visit this weekend — does Saturday 11 AM work?' },
      { from: 'user', text: 'Saturday works.' },
      { from: 'ai', text: 'Great, confirming now and notifying your agent.' },
    ],
    outcome: 'Site visit booked',
    insight: 'Intent: High',
  },
  {
    name: 'Anita Sharma',
    tag: 'Warm lead check-in',
    lines: [
      { from: 'ai', text: 'Hi Anita, quick check-in on the 2BHK listings we shared for Sohna Road.' },
      { from: 'user', text: "I liked Sector 57, but I'm still comparing." },
      { from: 'ai', text: 'Totally understandable — want a side-by-side price comparison sent over?' },
      { from: 'user', text: 'Yes please, that would help.' },
    ],
    outcome: 'Marked as hot lead',
    insight: 'Sentiment: Positive',
  },
  {
    name: 'Vikram Singh',
    tag: 'Visit confirmation',
    lines: [
      { from: 'ai', text: 'Hi Vikram, confirming your site visit tomorrow at 4 PM for the Palm Meadows villa.' },
      { from: 'user', text: 'Actually, can we push it to 5?' },
      { from: 'ai', text: "Of course — rescheduled to 5 PM, and I've notified your agent." },
    ],
    outcome: 'Visit rescheduled',
    insight: 'No-show risk: Low',
  },
];

const bullets = [
  [PhoneCall, 'Calls back every missed lead — automatically'],
  [Mic, "Talks naturally, in the buyer's own language"],
  [Clock, 'Confirms and reschedules site visits by voice'],
  [TrendingUp, 'Every call logged straight to your dashboard'],
];

function useWaveHeights(count) {
  return useMemo(
    () => Array.from({ length: count }, () => [
      4 + Math.random() * 4,
      10 + Math.random() * 20,
      4 + Math.random() * 4,
      8 + Math.random() * 16,
    ]),
    [count]
  );
}

function Waveform({ active }) {
  const heights = useWaveHeights(22);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 34 }}>
      {heights.map((h, i) => (
        <motion.span
          key={i}
          animate={active ? { height: h } : { height: 4 }}
          transition={active ? { duration: 0.9 + (i % 5) * 0.07, repeat: Infinity, ease: 'easeInOut', delay: i * 0.025 } : { duration: 0.3 }}
          style={{ width: 3, borderRadius: 2, background: 'linear-gradient(180deg,#6FACEC,#1E73D8)', display: 'inline-block', flexShrink: 0 }}
        />
      ))}
    </div>
  );
}

function RingPulse() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.7, opacity: 0.55 }}
          animate={{ scale: 2.1, opacity: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.55, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid var(--brand)' }}
        />
      ))}
    </>
  );
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

export default function CallingAgent() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [status, setStatus] = useState('ringing');
  const [visibleCount, setVisibleCount] = useState(0);
  const [showOutcome, setShowOutcome] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const scrollRef = useRef(null);
  const tickRef = useRef(null);

  const scenario = scenarios[scenarioIdx % scenarios.length];

  useEffect(() => {
    let timers = [];
    setStatus('ringing');
    setVisibleCount(0);
    setShowOutcome(false);
    setSeconds(0);
    clearInterval(tickRef.current);

    let t = 1500;
    timers.push(setTimeout(() => {
      setStatus('connected');
      tickRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    }, t));

    scenario.lines.forEach((line, i) => {
      const dur = line.from === 'ai' ? 1500 : 1000;
      t += dur;
      timers.push(setTimeout(() => setVisibleCount(i + 1), t));
    });

    t += 1100;
    timers.push(setTimeout(() => setShowOutcome(true), t));

    t += 3000;
    timers.push(setTimeout(() => {
      clearInterval(tickRef.current);
      setScenarioIdx((idx) => (idx + 1) % scenarios.length);
    }, t));

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(tickRef.current);
    };
  }, [scenarioIdx]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleCount]);

  const speaking = status === 'connected' && !showOutcome;

  return (
    <section id="calling-agent" className="section-pad" style={{ background: 'linear-gradient(180deg,#081A33 0%,#0E2647 55%,#081A33 100%)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', left: '-6%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle,rgba(75,163,240,.25) 0%,transparent 70%)', filter: 'blur(10px)' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-8%', width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,115,216,.22) 0%,transparent 70%)', filter: 'blur(10px)' }} />

      <div className="wrap grid-2col" style={{ gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <span style={{ fontSize: 11, letterSpacing: '.07em', textTransform: 'uppercase', fontWeight: 700, color: '#6FACEC' }}>AI Calling Agent</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Your leads get called back — <span style={{ color: '#6FACEC' }}>by voice, automatically.</span></h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.72)' }}>
            Every missed call, every warm lead, every site-visit confirmation — Probe's AI Calling Agent picks up the phone so nobody has to. It sounds natural, handles objections, and logs the outcome straight to your dashboard.
          </p>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
            {bullets.map(([Icon, t]) => (
              <motion.div key={t} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.12)', color: '#6FACEC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon size={18} /></span>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{t}</span>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ marginTop: 28 }}>
            <Button variant="primary" size="lg" icon={<PhoneCall size={18} />} href={DASH_URL}>Try the Calling Agent</Button>
          </div>
        </motion.div>

        <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', width: 380, height: 380, borderRadius: '50%',
              background: 'conic-gradient(from 0deg, rgba(75,163,240,0) 0%, rgba(75,163,240,.35) 25%, rgba(75,163,240,0) 50%)',
              filter: 'blur(18px)',
            }}
          />

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{ width: '100%', maxWidth: 330, aspectRatio: '1/2', background: '#0B2036', borderRadius: 44, padding: 12, boxShadow: '0 24px 60px rgba(0,0,0,.4)', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,.08)' }}
          >
            <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 120, height: 26, background: '#0B2036', borderRadius: 14, zIndex: 3 }} />

            <AnimatePresence>
              {showOutcome && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  style={{ position: 'absolute', top: -14, right: -10, zIndex: 5, background: 'linear-gradient(135deg,#1E73D8,#4BA3F0)', color: '#fff', borderRadius: 12, padding: '8px 12px', fontSize: 11.5, fontWeight: 700, boxShadow: '0 8px 20px rgba(30,115,216,.4)', display: 'flex', alignItems: 'center', gap: 6, maxWidth: 150 }}
                >
                  <Sparkles size={14} /> {scenario.insight}
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg,#132C4A 0%,#0B2036 100%)' }}>
              <div style={{ padding: '38px 16px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ position: 'relative', width: 64, height: 64 }}>
                  {status === 'ringing' && <RingPulse />}
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#1E73D8,#4BA3F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, fontWeight: 700, position: 'relative' }}>
                    {scenario.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff' }}>{scenario.name}</div>
                  <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.55)' }}>{scenario.tag}</div>
                </div>
                <div style={{ fontSize: 12, color: '#6FACEC', fontWeight: 600, minHeight: 16 }}>
                  {status === 'ringing' ? 'Calling…' : `Connected · ${fmtTime(seconds)}`}
                </div>
                <Waveform active={speaking} />
              </div>

              <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '4px 16px 8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <AnimatePresence>
                  {scenario.lines.slice(0, visibleCount).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ display: 'flex', justifyContent: line.from === 'ai' ? 'flex-start' : 'flex-end' }}
                    >
                      <div style={{
                        maxWidth: '88%', padding: '7px 11px', borderRadius: 12, fontSize: 12.5, lineHeight: '17px',
                        background: line.from === 'ai' ? 'rgba(255,255,255,.09)' : 'rgba(75,163,240,.22)',
                        color: '#fff', border: '1px solid rgba(255,255,255,.08)',
                      }}>
                        {line.from === 'ai' && <Volume2 size={10} style={{ opacity: .6, marginRight: 4, verticalAlign: 'middle' }} />}
                        {line.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <AnimatePresence>
                  {showOutcome && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ alignSelf: 'center', marginTop: 4, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 20, padding: '5px 12px', fontSize: 11.5, fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      ✅ {scenario.outcome}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ padding: '10px 0 20px', display: 'flex', justifyContent: 'center', gap: 22 }}>
                <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Mic size={16} /></span>
                <span style={{ width: 44, height: 44, borderRadius: '50%', background: '#DB4954', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><PhoneOff size={18} /></span>
                <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Volume2 size={16} /></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
