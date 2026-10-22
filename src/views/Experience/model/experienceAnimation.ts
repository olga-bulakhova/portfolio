import { type Variants } from 'framer-motion';

// Функция быстрой проверки: является ли устройство мобильным (экран меньше 768px)
const isMobile = () =>
  typeof window !== 'undefined' &&
  !window.matchMedia('(min-width: 768px)').matches;

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // На мобильных запускаем всё сразу без задержек stagger
      staggerChildren: isMobile() ? 0 : 0.3,
    },
  },
};

export const cardVariants: Variants = {
  hidden: (index: number) => {
    // 🌟 Если это мобилка, отключаем вылет слева/справа (x: 0), оставляем только мягкое проявление
    if (isMobile()) {
      return { opacity: 0, y: 15, x: 0 };
    }

    // Десктопная версия: четные летят слева, нечетные — справа
    return { opacity: 0, x: index % 2 === 0 ? -50 : 50 };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 60,
      damping: 15,
      // На мобильных делаем анимацию более быстрой или простой
      duration: isMobile() ? 0.2 : undefined,
    },
  },
};
