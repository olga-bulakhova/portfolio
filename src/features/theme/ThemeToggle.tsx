import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/app/providers/theme'

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<button
			onClick={toggleTheme}
			className='p-2 rounded-xl bg-glass-bg border border-glass-border glass-backdrop text-glass-text cursor-pointer hover:bg-white/20 dark:hover:bg-black/20 transition-colors focus:outline-none relative overflow-hidden w-10 h-10 flex items-center justify-between'
			aria-label='Переключить тему оформления'
		>
			<AnimatePresence
				mode='wait'
				initial={false}
			>
				{theme === 'dark' ? (
					// Иконка Солнца (для переключения на Light)
					<motion.svg
						key='sun'
						initial={{ y: -20, opacity: 0, rotate: -90 }}
						animate={{ y: 0, opacity: 1, rotate: 0 }}
						exit={{ y: 20, opacity: 0, rotate: 90 }}
						transition={{ duration: 0.2 }}
						className='w-5 h-5 mx-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
						/>
					</motion.svg>
				) : (
					// Иконка Луны (для переключения на Dark)
					<motion.svg
						key='moon'
						initial={{ y: -20, opacity: 0, rotate: -90 }}
						animate={{ y: 0, opacity: 1, rotate: 0 }}
						exit={{ y: 20, opacity: 0, rotate: 90 }}
						transition={{ duration: 0.2 }}
						className='w-5 h-5 mx-auto'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M20.354 15.354A9 9 0 118.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
						/>
					</motion.svg>
				)}
			</AnimatePresence>
		</button>
	)
}
