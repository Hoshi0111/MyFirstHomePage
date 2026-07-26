const constellationLinks = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'games', label: 'Games', href: '/games' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'github', label: 'GitHub', external: true },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'email', label: 'Email' },
]

let starSeed = 20260726

function nextStarValue() {
  starSeed = (starSeed * 1664525 + 1013904223) % 4294967296
  return starSeed / 4294967296
}

const backgroundStars = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  x: `${(nextStarValue() * 100).toFixed(2)}%`,
  y: `${(nextStarValue() * 100).toFixed(2)}%`,
  size: `${(0.8 + nextStarValue() * 1.8).toFixed(2)}px`,
  opacity: (0.28 + nextStarValue() * 0.62).toFixed(2),
}))

function Hero({ profile }) {
  const links = constellationLinks.map((link) => {
    if (link.id === 'github') {
      return { ...link, href: profile.links.github.href }
    }

    if (link.id === 'email') {
      return { ...link, href: profile.links.email.href }
    }

    return link
  })

  return (
    <section className="constellation-hero" id="top" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        {profile.name} — {profile.role}
      </h1>
      <div className="star-field" aria-hidden="true">
        {backgroundStars.map((star) => (
          <span
            key={star.id}
            style={{ '--star-x': star.x, '--star-y': star.y, '--star-dot': star.size, '--star-opacity': star.opacity }}
          />
        ))}
      </div>
      <nav className="constellation" aria-label="ポートフォリオメニュー">
        <svg
          className="constellation-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M10 26 L30 18 L48 27 L64 53 L48 76 L27 60 Z" />
          <path d="M10 26 L48 27 L27 60 L64 53" />
        </svg>
        {links.map((link) => (
          <a
            className={`star-node star-${link.id}`}
            href={link.href}
            key={link.id}
            aria-label={link.label}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            <span className="star-core" aria-hidden="true" />
            <span className="star-label">{link.label}</span>
          </a>
        ))}
      </nav>
      <img
        className="hero-person"
        src="/images/pointing-man.webp"
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
