import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-primary-50 dark:bg-primary-900 transition-colors">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <footer className="bg-primary-900 dark:bg-black text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary-400 text-sm">
              &copy; {new Date().getFullYear()} Felix Ng
            </p>
            <div
              className="mt-4 flex justify-center text-lg"
              data-webring="ca"
              data-member="felix-ng"
              style={{ '--webring-color': '#a1a1aa', '--webring-accent': '#AF272F' } as Record<string, string>}
            />
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
