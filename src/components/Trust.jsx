import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../hooks/useAnimations';

const names = ['Skyline Realty', 'UrbanNest', 'PrimeAcres', 'Metroliving', 'CasaGroup', 'Horizon'];

export default function Trust() {
  return (
    <section className="wrap" style={{ padding: '40px 24px' }}>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewportOnce} transition={{ duration: 0.5 }} style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 22, textAlign: 'center' }}>
        Built for brokerages closing more deals every day
      </motion.p>
      <motion.div className="trust-logos" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
        {names.map((n) => (
          <motion.span
            key={n}
            variants={fadeUp}
            className="trust-name"
          >{n}</motion.span>
        ))}
      </motion.div>
    </section>
  );
}
