import { motion } from 'framer-motion';

type SkillTagProps = {
  label: string;
};

export const SkillTag = ({ label }: SkillTagProps) => (
  <motion.span
    whileHover={{ scale: 1.05, y: -2 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    className="cursor-default rounded-xl border border-glass-border bg-glass-bg px-3 py-1.5 text-xs font-medium text-glass-muted shadow-sm transition-colors duration-200 select-none hover:border-brand-primary/30 hover:bg-brand-primary/5 hover:text-brand-primary md:text-sm"
  >
    {label}
  </motion.span>
);
