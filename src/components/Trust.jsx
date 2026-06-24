import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const names = ['Skyline Realty', 'UrbanNest', 'PrimeAcres', 'Metroliving', 'CasaGroup', 'Horizon'];

export default function Trust() {
  return (
    <section className="wrap" style={{ padding: '40px 24px' }}>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.5 }} style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 22, textAlign: 'center' }}>
        Built for brokerages closing more deals every day
      </motion.p>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 44 }}>
        {names.map((n, i) => (
          <motion.span
            key={n}
            variants={fadeUp}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--neutral-700)' }}
          >{n}</motion.span>
        ))}
      </motion.div>
    </section>
  );
}
