import { Header } from '@/widgets/Header';
import { ThemeProvider } from './providers/theme';
import { Hero } from '@/views/Hero';
import { Skills } from '@/views/Skills';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
