import { useEffect } from 'react'

/** Блокирует скролл body, пока флаг активен (например, открытое мобильное меню). */
export const useLockBodyScroll = (locked: boolean) => {
	useEffect(() => {
		if (!locked) return

		const original = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = original
		}
	}, [locked])
}
