import { useEffect, useState } from 'react';

export const useScrollSpy = (
  sectionIds: string[],
  options?: IntersectionObserverInit,
) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Храним записи о видимости каждой секции
    const visibleSections: Record<string, boolean> = {};

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Запоминаем текущий статус видимости секции
        visibleSections[entry.target.id] = entry.isIntersecting;
      });

      // Ищем первую видимую секцию среди переданного массива ID
      const currentActive = sectionIds.find((id) => visibleSections[id]);

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    // Настраиваем Observer. rootMargin '-30% 0px -60% 0px' триггерит смену
    // когда секция пересекает верхнюю треть экрана — это самый естественный UX
    const observer = new IntersectionObserver(callback, {
      rootMargin: options?.rootMargin || '-30% 0px -60% 0px',
      threshold: options?.threshold || 0,
    });

    // Начинаем наблюдение за каждым валидным элементом на странице
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Чистим слушатели при размонтировании компонента
    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options?.rootMargin, options?.threshold]);

  return activeId;
};
