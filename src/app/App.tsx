import { Header } from '@/widgets/Header'
import { ThemeProvider } from './providers/theme'
import { Hero } from '@/views/Hero'

function App() {
	return (
		<ThemeProvider>
			<Header />
			<Hero />
		</ThemeProvider>
	)
}

export default App
