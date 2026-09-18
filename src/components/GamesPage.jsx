import { games } from '../data/games.js'

const repositoryUrl = 'https://github.com/Hoshi0111/Portfolio'
const toolRepositoryUrl = 'https://github.com/Hoshi0111/unity-shiritori-dictionary'
const gameSections = [
  { id: 'unityroom', title: 'UnityRoom' },
  { id: 'web', title: 'Webで遊べるゲーム' },
  { id: 'in-progress', title: '制作中のゲーム' },
]

function GameCard({ game }) {
  const content = (
    <>
      <img className="game-card-image" src={game.image} alt={game.imageAlt} />
      <span className="game-card-copy">
        <span className="game-card-title">{game.title} {game.playUrl && <span aria-hidden="true">↗</span>}</span>
        <span className="game-card-description">{game.description}</span>
      </span>
    </>
  )

  return (
    <article className="game-card">
      {game.playUrl ? (
        <a className="game-card-link" href={game.playUrl} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        <div className="game-card-link">{content}</div>
      )}
    </article>
  )
}

function GamesPage() {
  return (
    <div className="games-page">
      <section className="games-showcase" aria-labelledby="games-title">
        <div className="container">
          <div className="games-heading">
            <h1 id="games-title">Games</h1>
          </div>
          <div className="game-sections">
            {gameSections.map((section) => (
              <section className="game-section" aria-labelledby={section.id + '-title'} key={section.id}>
                <h2 id={section.id + '-title'}>{section.title}</h2>
                <div className="games-grid">
                  {games.filter((game) => game.category === section.id).map((game) => (
                    <GameCard game={game} key={game.id} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <aside className="game-tool" aria-labelledby="game-tool-title">
        <div className="container game-tool-inner">
          <div>
            <p className="games-kicker">DEVELOPMENT TOOL</p>
            <h2 id="game-tool-title">Unity Shiritori Dictionary</h2>
            <p>しりとりゲーム向けの単語判定・検索を行うUnity用辞書モジュールです。</p>
          </div>
          <a className="game-tool-link" href={toolRepositoryUrl} target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>

      <section className="games-source">
        <div className="container games-source-inner">
          <p>そのほかの制作物</p>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            GitHub Portfolio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default GamesPage
