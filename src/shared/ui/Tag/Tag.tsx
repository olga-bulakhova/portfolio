import { type ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export const Tag = ({ children, className = '' }: TagProps) => {
  return (
    <span
      className={`cursor-default rounded-lg border border-brand-primary/10 bg-brand-primary/5 px-2.5 py-1 text-[11px] font-semibold text-brand-primary transition-colors duration-200 select-none hover:border-brand-primary/20 hover:bg-brand-primary/10 ${className} `}
    >
      {children}
    </span>
  );
};
