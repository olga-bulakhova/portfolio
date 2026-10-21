import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

// Совмещаем стандартные атрибуты кнопки и пропсы framer-motion для полной типизации
type AndroidButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLMotionProps<'button'>;

interface ButtonProps extends Omit<AndroidButtonProps, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'glass';
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'px-6 py-2.5 rounded-xl font-medium text-sm transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-brand-primary text-invert-text hover:bg-opacity-90 shadow-glass-glow',
    glass:
      'bg-glass-bg border border-glass-border glass-backdrop text-glass-text hover:bg-white/20 dark:hover:bg-black/30',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
