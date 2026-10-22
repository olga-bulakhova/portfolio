interface TimelineDotProps {
  className?: string;
}

export const TimelineDot = ({ className = '' }: TimelineDotProps) => (
  <span
    aria-hidden="true"
    className={`absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-brand-primary bg-slate-950 shadow-glass-glow md:left-1/2 ${className}`}
  />
);
