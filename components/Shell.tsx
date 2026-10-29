import Reveal from "@/components/Reveal";
import Terminal from "@/components/Terminal";
import { terminalData } from "@/data/portfolio";

export default function Shell() {
  return (
    <section className="section section--shell" id="shell" aria-labelledby="shellTitle">
      <div className="container">
        <Reveal className="section-head section-head--dark">
          <span className="section-head__num" aria-hidden="true">
            06
          </span>
          <div className="section-head__main">
            <span className="label">/ Shell / Interactive</span>
            <h2 id="shellTitle">
              Open a
              <br />{" "}
              shell
            </h2>
          </div>
          <p className="section-head__note">
            A working terminal, not a screenshot. Type <code>help</code> to get your bearings — or
            try <code>sudo</code> if you&apos;re curious.
          </p>
        </Reveal>

        <div className="shell-layout">
          <Reveal className="shell-copy">
            <p className="shell-copy__lead">
              The fastest way to understand how I work is to poke around the system.
            </p>
            <p>
              This shell is wired to the same profile data as the rest of the page. Inspect the
              stack, list the projects, or read the README.
            </p>
            <div className="shell-copy__commands" aria-label="Suggested terminal commands">
              <span className="label">Try these</span>
              <code>neofetch</code>
              <code>projects</code>
              <code>cat about.txt</code>
              <code>sudo</code>
            </div>
            <div className="shell-copy__foot">
              <span className="label">System note</span>
              <p>{terminalData.motd}</p>
            </div>
          </Reveal>

          <Reveal className="terminal-reveal" delay={80}>
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
