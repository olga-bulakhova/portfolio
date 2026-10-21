import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type Variant = 'primary' | 'glass';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

// Вариант «кнопка»: href запрещён
type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<'button'>, keyof CommonProps | 'href'> & {
    href?: undefined;
  };

// Вариант «ссылка»: href обязателен
type ButtonAsLink = CommonProps &
  Omit<HTMLMotionProps<'a'>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  'px-6 py-2.5 rounded-xl font-medium text-sm transition-colors duration-200 cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-primary text-invert-text hover:bg-opacity-90 shadow-glass-glow',
  glass:
    'bg-glass-bg border border-glass-border glass-backdrop text-glass-text hover:bg-white/20 dark:hover:bg-black/30',
};

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const cls = `${baseStyles} ${variants[variant]} ${className}`;

  // Если передан href — это ссылка
  if ('href' in props && props.href !== undefined) {
    const { target, rel, ...rest } = props as ButtonAsLink;

    // Безопасность: для target="_blank" всегда добавляем noopener noreferrer
    const safeRel = target === '_blank' ? (rel ?? 'noopener noreferrer') : rel;

    return (
      <motion.a
        className={cls}
        target={target}
        rel={safeRel}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cls}
      {...motionProps}
      {...(props as ButtonAsButton)}
    >
      {children}
    </motion.button>
  );
};
