import { Footer } from './layout/Footer'
import { Navbar } from './layout/Navbar'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

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
  )
}

export default App
