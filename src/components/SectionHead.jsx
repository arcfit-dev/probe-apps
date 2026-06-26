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
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{sub}</p>
    </motion.div>
  );
}
