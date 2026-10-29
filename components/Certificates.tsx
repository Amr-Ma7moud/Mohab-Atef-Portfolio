import Reveal from "@/components/Reveal";
import { certificates } from "@/data/portfolio";

export default function Certificates() {
  return (
    <section
      className="section section--certificates"
      id="certificates"
      aria-labelledby="certificatesTitle"
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="section-head__num" aria-hidden="true">
            05
          </span>
          <div className="section-head__main">
            <span className="label">/ Domains / In practice</span>
            <h2 id="certificatesTitle">
              The
              <br />{" "}
              domains
            </h2>
          </div>
          <p className="section-head__note">
            Four areas I keep returning to — from the microcontroller up to the mechanism.
          </p>
        </Reveal>

        <div className="cert-grid">
          {certificates.map((certificate, index) => (
            <Reveal
              as="article"
              className="cert"
              key={certificate.serial}
              delay={index * 80}
            >
              <div className="cert__top">
                <span className="cert__serial">{certificate.serial}</span>
                <span className="cert__year">{certificate.year}</span>
              </div>
              <div className="cert__mark" aria-hidden="true">
                {certificate.mark}
              </div>
              <h3>{certificate.title}</h3>
              <p className="cert__issuer">{certificate.issuer}</p>
              <p className="cert__detail">{certificate.detail}</p>
              <div className="tags">
                {certificate.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="cert__foot">
                <span>{certificate.year} / Focus</span>
                <span>Applied in practice</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
