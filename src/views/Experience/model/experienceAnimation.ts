import { type Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

export const cardVariants: Variants = {
  hidden: (index: number) => ({ opacity: 0, x: index % 2 === 0 ? -50 : 50 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 60, damping: 15 },
  },
};
