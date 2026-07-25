function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {name}</p>
        <a href="#top">ページ上部へ <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}

export default Footer
