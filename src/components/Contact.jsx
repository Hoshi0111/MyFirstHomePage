import SectionHeading from './SectionHeading.jsx'

function ArrowIcon() {
  return <span className="link-arrow" aria-hidden="true">↗</span>
}

function Contact({ links }) {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-card">
        <SectionHeading
          label="CONTACT"
          title={<span id="contact-title">連絡先</span>}
          description="制作のご相談や、ご質問がありましたらお気軽にご連絡ください。"
        />
        <div className="contact-links">
          <a href={links.email.href}>
            <span><small>Email</small>{links.email.label}</span>
            <ArrowIcon />
          </a>
          <a href={links.github.href} target="_blank" rel="noreferrer">
            <span><small>GitHub</small>{links.github.label}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
