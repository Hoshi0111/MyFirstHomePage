import { lazy, Suspense } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { portfolio } from './data/portfolio.js'

const GamesPage = lazy(() => import('./components/GamesPage.jsx'))

function App() {
  const isGamesPage = window.location.pathname.replace(/\/$/, '') === '/games'

  return (
    <>
      <Header name={portfolio.name} />
      <main>
        {isGamesPage ? (
          <Suspense fallback={null}>
            <GamesPage />
          </Suspense>
        ) : (
          <Hero profile={portfolio} />
        )}
      </main>
      {isGamesPage && <Footer name={portfolio.name} />}
    </>
  )
}

export default App
