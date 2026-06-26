import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHead from './SectionHead';
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';
import { FAQ_DATA } from '../constants/seo';

function FAQItem({ q, a, open, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: '#fff',
        borderRadius: 14,
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '18px 22px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-display)',
          fontSize: 17,
          fontWeight: 600,
          color: 'var(--text-primary)',
          textAlign: 'left',
        }}
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, color: 'var(--text-brand)' }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                padding: '0 22px 18px',
                fontSize: 15,
                lineHeight: '25px',
                color: 'var(--text-body)',
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="FAQ"
          title="Frequently asked questions"
          sub="Everything you need to know about Probe and how it helps real estate brokers close more deals."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ maxWidth: 740, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {FAQ_DATA.map(({ q, a }, i) => (
            <FAQItem
              key={q}
              q={q}
              a={a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
