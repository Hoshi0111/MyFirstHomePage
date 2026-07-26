import SectionHeading from './SectionHeading.jsx'

function About({ profile }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <SectionHeading label="ABOUT" title={<span id="about-title">私について</span>} />
        <div className="about-content">
          <p>{profile.about}</p>
          <dl className="profile-details">
            <div>
              <dt>拠点</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>専門</dt>
              <dd>Game Programmer</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
