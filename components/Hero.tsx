import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="heroTitle">
      <div className="hero__inner">
        <div className="hero__meta">
          <span className="hero__availability">
            <i aria-hidden="true" />
            {profile.availability}
          </span>
          <span>{profile.issue}</span>
          <span>{profile.coordinates}</span>
        </div>

        <div className="hero__stage">
          <h1 className="hero__title" id="heroTitle" aria-label="I build machines that move.">
            <span className="hero__line hero__line--one">I build</span>{" "}
            <span className="hero__line hero__line--two">
              <span className="hero__acid">Machines</span>
            </span>{" "}
            <span className="hero__line hero__line--three">
              That move<span className="hero__dot">.</span>
            </span>
          </h1>

          <div className="hero__rail" aria-hidden="true">
            <span>Scroll to inspect</span>
            <span className="hero__rail-line" />
            <span>001</span>
          </div>
        </div>

        <div className="hero__bottom">
          <div className="hero__intro">
            <span className="badge">
              <i aria-hidden="true" />
              {profile.availability}
            </span>
            <p>
              Mechatronics engineering student building embedded systems, automation, and robotics —
              where code meets the physical world.
            </p>
          </div>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              View selected work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="btn btn--outline"
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download CV <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero__foot">
          <span>C/C++ / Embedded systems / Control</span>
          <span>Currently: third-year Mechatronics @ E-JUST</span>
          <span className="hero__foot-scroll">
            Scroll <span aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
