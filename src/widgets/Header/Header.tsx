import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeToggle } from '@/features/theme';
import { CONTACTS_ID, NAV_LINKS } from './model/navLinks';
import { Logo } from './ui/Logo';
import { BurgerButton } from './ui/BurgerButton';
import { DesktopNav } from './ui/DesktopNav';
import { MobileNav } from './ui/MobileNav';
import { useLockBodyScroll } from './lib/useLockBodyScroll';
import { useSmoothScroll } from '@/shared/lib';
import { useScrollSpy } from './lib/useScrollSpy';

const MOBILE_MENU_ID = 'mobile-menu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const activeSection = useScrollSpy(sectionIds);

  useLockBodyScroll(isMobileMenuOpen);

  // Обновите этот метод внутри вашего компонента Header
  const handleLinkClick = useCallback(
    (id: string) => {
      // 1. Сначала закрываем меню, что инициирует снятие блокировки хуком useLockBodyScroll
      setIsMobileMenuOpen(false);

      // 2. Даем браузеру перерисовать стили body и только потом плавно крутим страницу
      setTimeout(() => {
        scrollToSection(id);
      }, 0);
    },
    [scrollToSection],
  );

  // Закрытие по Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  // Закрытие при переходе на десктоп
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-glass-border bg-glass-bg glass-backdrop transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo onClick={() => handleLinkClick('hero')} />

        <DesktopNav
          activeSection={activeSection}
          onLinkClick={handleLinkClick}
        />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="glass"
            className="hidden !py-1.5 md:flex"
            onClick={() => handleLinkClick(CONTACTS_ID)}
          >
            Связаться
          </Button>

          <BurgerButton
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
            controls={MOBILE_MENU_ID}
          />
        </div>
      </div>

      <MobileNav
        id={MOBILE_MENU_ID}
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />
    </header>
  );
};
