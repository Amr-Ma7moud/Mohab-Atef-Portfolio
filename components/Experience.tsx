import Reveal from "@/components/Reveal";
import { profile, resume } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section section--experience" id="experience" aria-labelledby="experienceTitle">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-head__num" aria-hidden="true">
            03
          </span>
          <div className="section-head__main">
            <span className="label">/ Experience / Education</span>
            <h2 id="experienceTitle">
              Field
              <br />{" "}
              record
            </h2>
          </div>
          <p className="section-head__note">
            Studying, building, and leading in public. A short record of the rooms I&apos;ve worked
            in.
          </p>
        </Reveal>

        <div className="experience-grid">
          <Reveal className="experience-intro">
            <p className="experience-intro__summary">{resume.summary}</p>
            <div className="experience-intro__actions">
              <a className="btn btn--dark" href={profile.cvUrl} target="_blank" rel="noreferrer">
                Download CV <span aria-hidden="true">↗</span>
              </a>
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="experience-intro__note">
              <span className="label">Currently</span>
              <p>
                Third-year Mechatronics student at E-JUST. Building embedded systems and robotics
                projects while serving as Vice Head of the AEE Smart Buildings track.
              </p>
            </div>
          </Reveal>

          <div className="timeline">
            {resume.timeline.map((item, index) => (
              <Reveal as="article" className="timeline__item" key={`${item.period}-${item.title}`}>
                <div className="timeline__period">{item.period}</div>
                <div className="timeline__content">
                  <h3>{item.title}</h3>
                  <p className="timeline__org">{item.org}</p>
                  <p>{item.detail}</p>
                </div>
                <span className="timeline__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
