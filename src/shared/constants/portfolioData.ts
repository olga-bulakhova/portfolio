export type ProjectCategory = 'frontend' | 'fullstack' | 'wordpress';
export type SkillIconName = 'code' | 'server' | 'layout' | 'wrench';
export type ContactIconName = 'telegram' | 'github' | 'mail' | 'linkedin';

export interface IProject {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly category: ProjectCategory;
  readonly technologies: readonly string[];
  readonly links: {
    readonly live: string;
    readonly github?: string;
  };
  readonly metrics?: readonly string[];
}

export interface IExperience {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly description: readonly string[];
  readonly skills: readonly string[];
}

export interface ISkillGroup {
  readonly id: string;
  readonly category: string;
  readonly icon: SkillIconName; // добавлен 'wrench'
  readonly items: readonly string[];
}

export interface IContactItem {
  readonly id: string;
  readonly label: string;
  readonly url: string;
  readonly icon: ContactIconName;
}

export interface IPortfolioData {
  readonly hero: {
    readonly name: string;
    readonly jobTitle: string;
    readonly title: string;
    readonly subRole: string;
    readonly about: string;
  };
  readonly skills: readonly ISkillGroup[];
  readonly projects: readonly IProject[];
  readonly experience: readonly IExperience[];
  readonly contacts: readonly IContactItem[];
}

// 🛸 ЕДИНАЯ БАЗА ДАННЫХ ВАШЕГО ПОРТФОЛИО
export const portfolioData = {
  hero: {
    name: 'Ольга Булахова',
    jobTitle: 'Frontend Developer',
    title: 'Разрабатываю современные веб\u2011интерфейсы',
    subRole: 'React / Next.js / WordPress',
    about:
      'Специализируюсь на разработке веб-интерфейсов на React и Next.js с модульной архитектурой и отзывчивым UX. Taк же имею успешный опыт разработки веб-приложений и масштабных коммерческих платформ на WordPress ',
  },

  skills: [
    {
      id: 'skill-core',
      category: 'Frontend Core',
      icon: 'code',
      items: [
        'React',
        'Next.js 15/16',
        'TypeScript',
        'JavaScript (ES2023+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Zustand',
        'TanStack Query',
        'React Hook Form',
        'Zod',
        'Framer Motion',
      ],
    },
    {
      id: 'skill-tooling',
      category: 'Tools',
      icon: 'wrench',
      items: [
        'Vite',
        'Webpack',
        'ESLint',
        'Prettier',
        'Git',
        'Figma',
        'AI-Assisted Development',
        'Prompt Engineering',
      ],
    },
    {
      id: 'skill-cms',
      category: 'CMS',
      icon: 'layout',
      items: [
        'WordPress',
        'Custom Themes',
        'WooCommerce',
        'Plugin Development',
        'Carbon Fields',
        'Custom Post Types',
        'PHP',
      ],
    },
  ],

  projects: [
    {
      id: 'crypto-analysis',
      title: 'Crypto Analysis',
      subtitle: 'Аналитика крипторынка и трекинг инвестиционного портфеля',
      description:
        'Fullstack-приложение для анализа крипто-активов и ведения персонального портфеля с расчётом доходности. Построено на Next.js 16 и React 19 с разделением на публичную зону (детальные страницы монет с графиками по таймфреймам) и защищённый дашборд. Авторизация и данные — на Supabase: SSR-сессии через cookie, OAuth-вход через Google и GitHub с серверным callback, доступ к приватной зоне контролируется на уровне middleware.',
      category: 'fullstack',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Supabase (SSR)',
        'Chart.js',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
        'Base UI / shadcn',
      ],
      links: {
        live: 'https://crypto-analysis-easy.vercel.app//',
        github:
          'https://github.com/olga-bulakhova/crypto-impulse--next-supabase',
      },
      metrics: [
        'Разделение на публичную и приватную зоны через route groups с защитой дашборда на уровне middleware.',
        'OAuth-вход через Google и GitHub на Supabase: SSR-сессия в httpOnly-cookie и серверный callback-обработчик.',
        'Динамические страницы монет с интерактивными графиками Chart.js и переключением таймфреймов.',
        'Учёт портфеля с расчётом доходности (PnL) поверх персистентной PostgreSQL (Supabase).',
        'Включён React Compiler — автоматическая мемоизация без ручных useMemo/useCallback.',
      ],
    },
    {
      id: 'video-hub',
      title: 'Video Hub',
      subtitle:
        'YouTube-подобный видеосервис с авторизацией и личной коллекцией',
      description:
        'Fullstack-приложение для просмотра и сохранения видео с разделением на публичную и защищённую зоны. Построено на Next.js 16 (App Router) и React 19 с собственной системой аутентификации: пароли хешируются argon2, сессии — на JWT (jose) в httpOnly-cookie, есть восстановление пароля по email. Данные — на Drizzle ORM поверх Turso/libsql (SQLite). Формы и валидация — React Hook Form + Zod, стилизация — Tailwind CSS v4, включён React Compiler.',
      category: 'fullstack',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Drizzle ORM',
        'Turso / libsql (SQLite)',
        'jose (JWT)',
        'argon2',
        'Nodemailer',
        'React Hook Form',
        'Zod',
        'Tailwind CSS v4',
      ],
      links: {
        live: 'https://youtube-video-hub.vercel.app/',
        github: 'https://github.com/olga-bulakhova/youtube-next-react',
      },
      metrics: [
        'Собственная аутентификация: argon2 для паролей, JWT-сессия (jose) в httpOnly-cookie, восстановление пароля по email (Nodemailer).',
        'Разделение на публичную и приватную зоны через route-группы ((public)/(private)) с защитой приватной зоны.',
        'Слой данных на Drizzle ORM + Turso/libsql (SQLite): запросы и миграции через drizzle-kit.',
        'Формы входа/регистрации на React Hook Form + Zod с валидацией.',
        'Архитектура по FSD (app / screen / widgets / shared) и включённый React Compiler.',
      ],
    },
    {
      id: 'shop-spa',
      title: 'Commerce Shop',
      subtitle:
        'SPA интернет-магазина с корзиной, фильтрами и бесконечной лентой',
      description:
        'Клиентское приложение магазина на Vite + React 19 с продуманным управлением состоянием: серверные данные (каталог, товары) кешируются через TanStack Query, клиентское состояние корзины — на Zustand. Каталог подгружается бесконечной прокруткой, формы — на React Hook Form + Zod. Маршрутизация — React Router v7, стилизация — Tailwind CSS v4 с компонентами Base UI / shadcn, анимации — Motion. Включён React Compiler.',
      category: 'frontend',
      technologies: [
        'React 19',
        'TypeScript',
        'Vite',
        'TanStack Query',
        'Zustand',
        'React Router v7',
        'Axios',
        'React Hook Form',
        'Zod',
        'Tailwind CSS v4',
        'Base UI / shadcn',
        'Motion',
      ],
      links: {
        live: 'https://shop-tanstack-query-zustand.vercel.app/',
        github:
          'https://github.com/olga-bulakhova/shop--tanstack-query-zustand',
      },
      metrics: [
        'Чёткое разделение состояния: серверный кеш на TanStack Query, клиентская корзина на Zustand.',
        'Бесконечная лента каталога через useInfiniteQuery + react-intersection-observer.',
        'Типобезопасные формы на React Hook Form + Zod.',
        'UI на Base UI / shadcn с вариантами через class-variance-authority и утилитой cn/clsx.',
        'Vite-сборка, маршруты на React Router v7, включён React Compiler.',
      ],
    },
    {
      id: 'comoon-wp-theme',
      title: 'Comoon',
      subtitle:
        'Кастомная тема WordPress для community-проекта (co-living, кемпы, события)',
      description:
        'Тема WordPress, разработанная с нуля для проекта о co-living и офлайн-мероприятиях. Реализованы кастомные типы записей (кемпы, co-living, события, отзывы, FAQ) со своими страницами списков и детальными шаблонами. Вёрстка разбита на переиспользуемые template-parts, логика темы вынесена в inc/lib. Клиентские ассеты собираются через Webpack: стили на SCSS + PostCSS с минификацией, интерактив и анимации — на GSAP.',
      category: 'wordpress',
      technologies: [
        'WordPress',
        'PHP',
        'Custom Post Types',
        'JavaScript',
        'SCSS / Sass',
        'PostCSS',
        'GSAP',
        'Webpack',
        'Babel',
      ],
      links: {
        live: 'https://comoon.io/',
        github: 'https://github.com/olga-bulakhova/comoon',
      },
      metrics: [
        'Кастомные типы записей (кемпы, co-living, события, отзывы, FAQ) со своими архивными и детальными шаблонами.',
        'Полный набор шаблонов темы (front-page, single, archive, 404, thank-you) с разбиением на переиспользуемые template-parts.',
        'Сборка ассетов через Webpack 5 + Babel: SCSS + PostCSS (preset-env) с минификацией cssnano.',
        'Интерактив и анимации на GSAP.',
        'Логика темы вынесена в inc/lib для чистой структуры и переиспользования.',
      ],
    },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Middle Frontend Developer',
      company: 'Freelance / Индивидуальная разработка',
      period: '2024 — Настоящее время',
      description: [
        'Проектирование и разработка клиентской части коммерческих веб-приложений на базе Next.js и React.',
        'Миграция летучих кэшей данных на устойчивые серверные решения Next.js Data Cache и Redis.',
        'Создание кастомных WordPress-решений и интеграция сторонних сервисов авторизации и платежных шлюзов.',
      ],
      skills: [
        'Next.js',
        'Zustand',
        'Supabase',
        'WordPress Optimization',
        'REST API',
      ],
    },
  ],

  contacts: [
    { id: 'c-tg', label: 'Telegram', url: 'https://t.me', icon: 'telegram' },
    { id: 'c-gh', label: 'GitHub', url: 'https://github.com', icon: 'github' },
    {
      id: 'c-mail',
      label: 'Email',
      url: 'mailto:hello@yourdomain.com',
      icon: 'mail',
    },
  ],
} as const satisfies IPortfolioData; // 🌟 Ключевое исправление: идеальный вывод типов + проверка контракта
