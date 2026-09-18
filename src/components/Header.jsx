function Header({ name }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label={`${name} ホーム`}>
          <span>{name}</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <ul className="nav-list">
            <li><a href="/games">Games</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
