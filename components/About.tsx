import Reveal from "@/components/Reveal";
import { about, neofetchLines, profile, stats } from "@/data/portfolio";

const archLogo = [
  "      /\\",
  "     /  \\",
  "    /    \\",
  "   /  ,,  \\",
  "  /  |  |  \\",
  " /_-''    ''-_\\",
].join("\n");

export default function About() {
  return (
    <section className="section section--about" id="about" aria-labelledby="aboutTitle">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-head__num" aria-hidden="true">
            01
          </span>
          <div className="section-head__main">
            <span className="label">/ About / Profile</span>
            <h2 id="aboutTitle">
              The
              <br />{" "}
              engineer
            </h2>
          </div>
          <p className="section-head__note">
            Mechatronics student. Embedded builder. Turning sensors, control logic, and hardware into
            systems that work outside the simulator.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-copy__lead">{about.bio}</p>
            <p>{about.bioSecondary}</p>

            <div className="interests" aria-label="Focus areas">
              <span className="interests__label">Focus areas</span>
              {about.interests.map((interest) => (
                <span className="interest" key={interest}>
                  <span className="interest__icon" aria-hidden="true">
                    ↳
                  </span>
                  {interest}
                </span>
              ))}
            </div>

            <a className="text-link" href="#contact">
              Open a channel <span aria-hidden="true">↗</span>
            </a>
          </Reveal>

          <aside className="about-aside">
            <Reveal className="profile-card">
              <div className="profile-card__head">
                <span>profile.dat</span>
                <span>001 / 001</span>
              </div>
              <div className="profile-card__monogram" aria-hidden="true">
                ME
              </div>
              <dl className="profile-card__facts">
                <div>
                  <dt>Name</dt>
                  <dd>{profile.name}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{profile.role}</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>Embedded / Robotics / Control</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>
                    <span className="status-dot" aria-hidden="true" />
                    Available
                  </dd>
                </div>
              </dl>
              <div className="profile-card__foot">
                <span>{profile.handle}</span>
                <span>EST. 2024</span>
              </div>
            </Reveal>

            <Reveal className="neofetch" delay={80}>
              <div className="neofetch__bar">
                <span>{profile.handle}</span>
                <span>— neofetch</span>
              </div>
              <div className="neofetch__body">
                <pre className="neofetch__logo" aria-hidden="true">
                  {archLogo}
                </pre>
                <dl className="neofetch__lines">
                  {neofetchLines.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>

        <Reveal className="stat-strip" aria-label="Selected numbers">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__num">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
