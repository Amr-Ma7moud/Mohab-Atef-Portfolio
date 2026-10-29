"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Cairo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <a className="brand brand--footer" href="#top" aria-label={`${profile.name} — back to top`}>
          <span className="brand__mark" aria-hidden="true">
            ME
          </span>
          <span className="brand__name">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="footer-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All systems operational.</span>
        <span>Built with Next.js / TypeScript</span>
        <span>
          {profile.location.split(",")[0]} <span>{time}</span> EET
        </span>
      </div>
    </footer>
  );
}
