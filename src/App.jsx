import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;