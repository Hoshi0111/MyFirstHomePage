import SectionHeading from './SectionHeading.jsx'

function Skills({ skills }) {
  return (
    <section className="section section-tinted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          label="SKILLS"
          title={<span id="skills-title">できること</span>}
          description="基本を大切にしながら、扱いやすく長く使えるWebサイトを制作します。"
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
