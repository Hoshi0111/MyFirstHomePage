import SectionHeading from './SectionHeading.jsx'

function Skills({ skills }) {
  return (
    <section className="section section-tinted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          label="SKILLS"
          title={<span id="skills-title">開発経験</span>}
          description="ゲーム制作やWeb開発、AIやロボティクスの研究など、幅広い分野での経験があります。"
        />
        <ul className="skill-grid">
          {skills.map((skill, index) => (
            <li className="skill-card" key={skill.name}>
              <span className="skill-number" aria-hidden="true">0{index + 1}</span>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
