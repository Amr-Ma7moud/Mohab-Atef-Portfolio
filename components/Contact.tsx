"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contactTitle">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-main">
            <span className="label">/ Contact / Say hello</span>
            <h2 id="contactTitle">
              Let&apos;s build
              <br />{" "}
              <span>something.</span>
            </h2>
            <p className="contact-main__copy">
              Looking for an embedded, robotics, or automation internship? I&apos;m open to work where
              the code has to survive contact with the real world.
            </p>
            <div className="contact-main__actions">
              <a className="btn btn--dark" href={`mailto:${profile.email}`}>
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
              <button className="btn btn--outline copy-email" type="button" onClick={copyEmail}>
                {copied ? "Copied" : "Copy email"} <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
              </button>
            </div>
            <span className="badge badge--dark">
              <i aria-hidden="true" />
              {profile.availability}
            </span>
            <p className="sr-only" aria-live="polite">
              {copied ? "Email address copied to clipboard." : ""}
            </p>
          </Reveal>

          <Reveal className="contact-side" delay={80}>
            <div className="contact-side__head">
              <span>Direct lines</span>
              <span>04 / 04</span>
            </div>
            <a className="contact-row" href={`mailto:${profile.email}`}>
              <span className="contact-row__label">Email</span>
              <span className="contact-row__value">{profile.email}</span>
              <span className="contact-row__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              className="contact-row"
              href={`https://wa.me/${profile.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-row__label">WhatsApp</span>
              <span className="contact-row__value">{profile.whatsappDisplay}</span>
              <span className="contact-row__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-row__label">LinkedIn</span>
              <span className="contact-row__value">mohab-atef</span>
              <span className="contact-row__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="contact-row" href={profile.cvUrl} target="_blank" rel="noreferrer">
              <span className="contact-row__label">CV</span>
              <span className="contact-row__value">MohabAtefEl-RefaaiCV.pdf</span>
              <span className="contact-row__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <div className="contact-side__foot">
              <span>{profile.handle}</span>
              <span>Replies within 48h</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
