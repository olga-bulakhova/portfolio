import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useTheme должен использоваться строго внутри ThemeProvider')
	}

	return context
}
