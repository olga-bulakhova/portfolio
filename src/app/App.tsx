import { Header } from '@/widgets/Header';
import { ThemeProvider } from './providers/theme';
import { Hero } from '@/views/Hero';
import { Skills } from '@/views/Skills';
import { Projects } from '@/views/Projects';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
