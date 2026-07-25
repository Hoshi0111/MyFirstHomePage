function Hero({ profile }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1 id="hero-title">
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="hero-introduction">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">お問い合わせ</a>
            <a
              className="button button-secondary"
              href={profile.links.github.href}
              target="_blank"
              rel="noreferrer"
            >
              GitHubを見る
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-card">
            <span className="portrait-initials">YP</span>
            <span className="status-badge"><i /> Available for work</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
