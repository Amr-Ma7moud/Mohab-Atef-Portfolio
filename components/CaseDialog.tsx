"use client";

import { useEffect, useRef } from "react";
import { profile, type Project } from "@/data/portfolio";

type CaseDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export default function CaseDialog({ project, onClose }: CaseDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    }

    if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      className="case-dialog"
      ref={dialogRef}
      aria-labelledby={project ? "caseTitle" : undefined}
      aria-label={project ? undefined : "Case study"}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      onClose={onClose}
    >
      {project ? (
        <div className="case-dialog__inner">
          <div className="case-dialog__top">
            <span className="case-dialog__num" aria-hidden="true">
              {project.index}
            </span>
            <button
              className="case-dialog__close"
              type="button"
              onClick={onClose}
              aria-label="Close case study"
            >
              Close <span aria-hidden="true">✕</span>
            </button>
          </div>

          <div className="case-dialog__head">
            <span className="label">/ Case study / {project.index}</span>
            <h2 id="caseTitle">{project.name}</h2>
            <div className="case-dialog__meta">
              <span>{project.role}</span>
              <span>{project.year}</span>
              <span>{project.status}</span>
            </div>
          </div>

          <p className="case-dialog__desc">{project.description}</p>

          <div className="case-dialog__body">
            <div>
              <span className="label">What shipped</span>
              <ul className="case-dialog__list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label">Stack</span>
              <div className="tags">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="case-dialog__links">
                {project.github ? (
                  <a
                    className="text-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open repository <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <a className="text-link" href={`mailto:${profile.email}?subject=Project walkthrough`}>
                    Request walkthrough <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
