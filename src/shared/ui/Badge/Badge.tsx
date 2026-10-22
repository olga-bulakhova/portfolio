import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <div
      className={`inline-flex shrink-0 items-center justify-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 p-2 text-brand-primary ${className} `}
    >
      {children}
    </div>
  );
};
