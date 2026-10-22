import type { ReactNode } from 'react';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

export const ListItem = ({ children, className = '' }: ListItemProps) => {
  return (
    <li
      className={`flex items-start gap-2 text-xs leading-relaxed text-glass-muted md:text-sm ${className} `}
    >
      <span
        aria-hidden="true"
        className="pt-0.5 font-black text-brand-primary select-none"
      >
        •
      </span>
      <span>{children}</span>
    </li>
  );
};
