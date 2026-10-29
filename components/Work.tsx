"use client";

import { useEffect, useState } from "react";
import CaseDialog from "@/components/CaseDialog";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";
import { projects, type Project } from "@/data/portfolio";

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(projects[0].slug);
  const [caseStudy, setCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      let current: Project["slug"] = projects[0].slug;

      document.querySelectorAll<HTMLElement>("[data-project-card]").forEach((card) => {
        if (card.offsetTop <= marker) {
          current = card.dataset.projectCard as Project["slug"];
        }
      });

      setActiveIndex(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section section--work" id="work" aria-labelledby="workTitle">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-head__num" aria-hidden="true">
            02
          </span>
          <div className="section-head__main">
            <span className="label">/ Selected work / 2026</span>
            <h2 id="workTitle">
              Selected
              <br />{" "}
              work
            </h2>
          </div>
          <p className="section-head__note">
            Three builds from the bench. Sensors, control logic, and hardware that has to work
            outside the simulator.
          </p>
        </Reveal>

        <div className="work-layout">
          <aside className="work-index" aria-label="Project index">
            <div className="work-index__head">
              <span>Index</span>
              <span>03</span>
            </div>
            <nav className="work-index__nav">
              {projects.map((project) => (
                <a
                  className={`index-link${activeIndex === project.slug ? " is-active" : ""}`}
                  href={`#project-${project.index}`}
                  key={project.slug}
                  aria-current={activeIndex === project.slug ? "location" : undefined}
                >
                  <span className="index-link__num">{project.index}</span>
                  <span className="index-link__name">{project.name}</span>
                  <span className="index-link__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
            <div className="work-index__foot">
              <span>Selected builds</span>
              <span>2026</span>
            </div>
          </aside>

          <div className="project-stack">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                className={`project project--${project.tone}`}
                id={`project-${project.index}`}
                key={project.slug}
                delay={index * 60}
                data-project-card={project.slug}
              >
                <div className="project__top">
                  <span className="project__num" aria-hidden="true">
                    {project.index}
                  </span>
                  <div className="project__meta">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                    <span className="project__status">
                      <i aria-hidden="true" />
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project__body">
                  <div className="project__copy">
                    <span className="label">{project.label}</span>
                    <h3>{project.name}</h3>
                    <p className="project__desc">{project.description}</p>
                    <ul className="project__highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="tags" aria-label="Technology stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project__links">
                      <button
                        className="case-link"
                        type="button"
                        onClick={() => setCaseStudy(project)}
                      >
                        Read case study <span aria-hidden="true">↗</span>
                      </button>
                      {project.github ? (
                        <a
                          className="project__repo"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="project__private">
                          Private build — walkthrough on request
                        </span>
                      )}
                    </div>
                  </div>

                  <ProjectVisual slug={project.slug} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CaseDialog project={caseStudy} onClose={() => setCaseStudy(null)} />
    </section>
  );
}
