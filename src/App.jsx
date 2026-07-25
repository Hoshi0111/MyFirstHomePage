import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import { portfolio } from './data/portfolio.js'

function App() {
  return (
    <div className="site-shell">
      <Header name={portfolio.name} />
      <main>
        <Hero profile={portfolio} />
        <About profile={portfolio} />
        <Skills skills={portfolio.skills} />
        <Contact links={portfolio.links} />
      </main>
      <Footer name={portfolio.name} />
    </div>
  )
}

export default App
