import Reveal from "@/components/Reveal";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="section section--skills" id="skills" aria-labelledby="skillsTitle">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-head__num" aria-hidden="true">
            04
          </span>
          <div className="section-head__main">
            <span className="label">/ Toolkit / 18 entries</span>
            <h2 id="skillsTitle">
              The
              <br />{" "}
              toolkit
            </h2>
          </div>
          <p className="section-head__note">
            From the microcontroller up to the mechanism. The tools I use to sense the world, decide,
            and make something move.
          </p>
        </Reveal>

        <div className="skills-layout">
          <Reveal className="skills-aside">
            <div className="skills-count">
              <span className="skills-count__num">18</span>
              <span className="skills-count__label">skills logged</span>
            </div>
            <p>
              From C/C++ on the microcontroller to sensors, control logic, and mechanical design. I
              care about the whole path from a physical signal to a working response.
            </p>
            <div className="skills-aside__key">
              <span>
                <i className="key key--embedded" aria-hidden="true" />
                Embedded
              </span>
              <span>
                <i className="key key--engineering" aria-hidden="true" />
                Engineering
              </span>
              <span>
                <i className="key key--software" aria-hidden="true" />
                Software
              </span>
              <span>
                <i className="key key--language" aria-hidden="true" />
                Languages
              </span>
            </div>
          </Reveal>

          <div className="skills-matrix">
            {skillCategories.map((category, index) => (
              <Reveal
                className={`skill-group skill-group--${category.tone}`}
                key={category.title}
                delay={index * 50}
              >
                <div className="skill-group__head">
                  <h3>{category.title}</h3>
                  <span>{category.short}</span>
                </div>
                <ul className="skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
