import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../hooks/useAnimations';

export default function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      style={{
        maxWidth: 660,
        marginBottom: center ? 44 : 40,
        marginLeft: center ? 'auto' : undefined,
        marginRight: center ? 'auto' : undefined,
        textAlign: center ? 'center' : undefined,
      }}
    >
      <span style={{ fontSize: 11, letterSpacing: '.07em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--text-brand)' }}>{eyebrow}</span>
      <h2 style={{ fontSize: 40, lineHeight: '48px', margin: '14px 0 12px' }}>{title}</h2>
      <p style={{ fontSize: 18, lineHeight: '30px', color: 'var(--text-body)' }}>{sub}</p>
    </motion.div>
  );
}
