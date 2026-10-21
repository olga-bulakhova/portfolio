export type ProjectCategory = 'frontend' | 'fullstack' | 'web3';
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
      category: 'Tooling & Testing',
      icon: 'wrench',
      items: [
        'Vite',
        'Webpack',
        'ESLint',
        'Prettier',
        'Vitest',
        'Jest',
        'React Testing Library',
        'Playwright',
        'Storybook',
        'Git',
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
        'PHP',
      ],
    },
  ],

  projects: [
    {
      id: 'crypto-analise',
      title: 'Crypto Analise',
      subtitle: 'Профессиональный терминал аналитики крипто-активов',
      description:
        'Интеллектуальная экосистема сквозного анализа волатильности и мониторинга структурных девиаций крипторынка. Интегрирован 15-минутный Next.js Data Cache для дедупликации параллельных запросов и сохранения лимитов внешних API в Serverless-среде Vercel.',
      category: 'fullstack',
      technologies: [
        'Next.js',
        'TypeScript',
        'Supabase',
        'Chart.js',
        'Tailwind CSS',
        'Base UI',
      ],
      links: {
        live: 'https://crypto-analysis-easy.vercel.app/',
      },
      metrics: [
        'Сквозной аудит аллокации и живой расчет метрик PnL в реальном времени.',
        'Интеграция облачной персистентной базы данных PostgreSQL (Supabase SSR).',
        'Оптимизация ререндеров за счет декомпозиции глобального стейта Zustand.',
      ],
    },
    {
      id: 'video-hub',
      title: 'Личный Видео-Хаб',
      subtitle: 'Изолированное персональное пространство хранения знаний',
      description:
        'Приложение для создания персональной коллекции видеоматериалов, полностью изолирующее пользователя от навязчивых алгоритмов рекомендаций, рекламы и кликбейта. Оптимизировано время сборки страниц за счет ликвидации Request Waterfall.',
      category: 'frontend',
      technologies: [
        'React',
        'Next.js',
        'Server Cookies',
        'CSS Modules',
        'Turbopack',
      ],
      links: {
        live: 'https://youtube-video-hub.vercel.app/',
      },
      metrics: [
        'Параллельное получение сессий и данных БД через Promise.all (ускорение загрузки х2).',
        'Анимация последовательного появления элементов при рендеринге.',
      ],
    },
    {
      id: 'comoon',
      title: 'COMOON',
      subtitle: 'Комьюнити-платформа для IT-специалистов и фрилансеров',
      description:
        'Масштабная коммерческая экосистема для бронирования кемпов, коливингов и координации международных мероприятий в формате workation. Высоконагруженная архитектура с автоматизированным ботом рассылок апдейтов.',
      category: 'frontend',
      technologies: [
        'WordPress',
        'Custom PHP Engine',
        'JavaScript',
        'REST API',
        'MySQL',
      ],
      links: {
        live: 'https://comoon.io/',
      },
      metrics: [
        'Интеграция интерактивного модуля бронирования локаций (Комо, Доломиты, Вьетнам).',
        'Архитектура удержания сессий, работы с куками пользователей и закрытых зон членства.',
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
