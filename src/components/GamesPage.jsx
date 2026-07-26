import { games } from '../data/games.js'

const repositoryUrl = 'https://github.com/Hoshi0111/Portfolio'
const toolRepositoryUrl = 'https://github.com/Hoshi0111/unity-shiritori-dictionary'

function GameGallery({ game }) {
  return (
    <div className={`game-gallery game-gallery-${game.id} ${game.images.length === 1 ? 'game-gallery-single' : ''}`}>
      {game.images.map((image) => (
        <figure className="game-shot" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
        </figure>
      ))}
    </div>
  )
}

function GameArticle({ game }) {
  return (
    <article className="game-project" id={game.id}>
      <div className="game-project-heading">
        <span className="game-number" aria-hidden="true">{game.number}</span>
        <div>
          <p className="game-subtitle">{game.subtitle}</p>
          <h2>{game.title}</h2>
        </div>
      </div>

      <GameGallery game={game} />

      <div className="game-details">
        <div>
          <p className="game-summary">{game.summary}</p>
          <p className="game-contribution">{game.contribution}</p>
        </div>
        <div className="game-facts">
          <ul className="game-feature-list">
            {game.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <ul className="game-tools" aria-label="使用技術">
            {game.tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
          {game.playUrl && (
            <a className="game-play-link" href={game.playUrl} target="_blank" rel="noreferrer">
              UnityRoomで遊ぶ <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function GamesPage() {
  return (
    <div className="games-page">
      <section className="games-hero" aria-labelledby="games-title">
        <div className="container games-hero-inner">
          <a className="games-back" href="/">← Portfolio</a>
          <p className="games-kicker">GAME DEVELOPMENT ARCHIVE</p>
          <h1 id="games-title">Games</h1>
          <p className="games-lead">
            UnityとC#で制作したゲームの紹介。ルール設計、CPU思考、オンライン対戦まで実装。
          </p>
          <dl className="games-overview">
            <div><dt>Projects</dt><dd>04</dd></div>
            <div><dt>Core tools</dt><dd>Unity / C#</dd></div>
            <div><dt>Style</dt><dd>Solo + Team</dd></div>
          </dl>
        </div>
      </section>

      <div className="container games-list">
        {games.map((game) => <GameArticle game={game} key={game.id} />)}
      </div>

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
          <div>
            <p className="games-kicker">SOURCE & MORE</p>
            <h2>制作物の全体を見る</h2>
          </div>
          <a href={repositoryUrl} target="_blank" rel="noreferrer">
            GitHub Portfolio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default GamesPage
