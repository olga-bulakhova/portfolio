import { useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { HEADER_HEIGHT } from '@/shared/constants/layout';

/** Скролл к секции по id с компенсацией фиксированной шапки. Уважает reduced-motion. */
export const useSmoothScroll = () => {
  const prefersReducedMotion = useReducedMotion();

  return useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      const top =
        element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    },
    [prefersReducedMotion],
  );
};
