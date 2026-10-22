import { Header } from '@/widgets/Header';
import { ThemeProvider } from './providers/theme';
import { Hero } from '@/views/Hero';
import { Skills } from '@/views/Skills';
import { Projects } from '@/views/Projects';
import { Experience } from '@/views/Experience';
import { Contacts } from '@/views/Contacts';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
    </ThemeProvider>
  );
}

export default App;
