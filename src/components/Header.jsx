function Header({ name }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${name} ホーム`}>
          <span className="brand-mark" aria-hidden="true">YP</span>
          <span>{name}</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
