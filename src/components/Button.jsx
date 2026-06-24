import { motion } from 'framer-motion';
import { buttonTap } from '../hooks/useAnimations';

const variants = {
  primary: { background: 'var(--brand)', color: '#fff' },
  grey: { background: 'var(--neutral-1300)', color: 'var(--text-primary)' },
  light: { background: '#fff', color: 'var(--text-primary)' },
  link: { background: 'none', color: 'var(--text-body)' },
};

const sizes = {
  md: { padding: '10px 18px', fontSize: '14px' },
  lg: { padding: '12px 22px', fontSize: '15px' },
  xl: { padding: '16px 28px', fontSize: '16px' },
};

export default function Button({ children, variant = 'primary', size = 'md', icon, iconLeft, onClick, href, style, full }) {
  const sharedStyle = {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
    fontWeight: 600, borderRadius: '8px', whiteSpace: 'nowrap', textDecoration: 'none',
    width: full ? '100%' : undefined, justifyContent: full ? 'center' : undefined,
    ...variants[variant], ...sizes[size], ...style,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, filter: 'brightness(1.08)' }}
        whileTap={buttonTap}
        style={sharedStyle}
      >
        {iconLeft}{children}{icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, filter: 'brightness(1.08)' }}
      whileTap={buttonTap}
      onClick={onClick}
      style={sharedStyle}
    >
      {iconLeft}{children}{icon}
    </motion.button>
  );
}
