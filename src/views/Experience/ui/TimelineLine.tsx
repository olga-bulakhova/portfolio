// Вертикальная направляющая линия таймлайна (декоративная)
export const TimelineLine = () => (
  <div
    aria-hidden="true"
    className="absolute top-0 bottom-0 left-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent opacity-30 md:left-1/2"
  />
);
