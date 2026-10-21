type BurgerButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
  controls: string;
};

export const BurgerButton = ({
  isOpen,
  onToggle,
  controls,
}: BurgerButtonProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="-mr-2 cursor-pointer rounded-lg p-2 text-glass-text focus:outline-none md:hidden"
    aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    aria-expanded={isOpen}
    aria-controls={controls}
  >
    <div
      className="relative flex h-5 w-6 flex-col justify-between"
      aria-hidden="true"
    >
      <span
        className={`h-0.5 w-full rounded bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
      />
      <span
        className={`h-0.5 w-full rounded bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`h-0.5 w-full rounded bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
      />
    </div>
  </button>
);
