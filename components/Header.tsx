"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  { id: "about", index: "01", label: "About" },
  { id: "work", index: "02", label: "Work" },
  { id: "experience", index: "03", label: "Experience" },
  { id: "skills", index: "04", label: "Skills" },
];

const mobileItems = [
  ...navItems,
  { id: "certificates", index: "05", label: "Domains" },
  { id: "shell", index: "06", label: "Shell" },
  { id: "contact", index: "07", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(scrollTop / height, 1) : 0);
      setScrolled(scrollTop > 24);

      const marker = scrollTop + 180;
      const tracked = ["about", "work", "experience", "skills", "certificates", "shell", "contact"];
      let current = "";
      tracked.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      });
      setActive(navItems.some((item) => item.id === current) ? current : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label={`${profile.name} — back to top`}>
          <span className="brand__mark" aria-hidden="true">
            ME
          </span>
          <span className="brand__name">
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-current" : ""}
              aria-current={active === item.id ? "location" : undefined}
            >
              <span>{item.index}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          <span className="header-cta__dot" aria-hidden="true" />
          <span className="header-cta__label">Let&apos;s talk</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobileNav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Index"}</span>
          <span className={`menu-toggle__icon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <span
          className="scroll-progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      <div className={`mobile-nav${menuOpen ? " is-open" : ""}`} id="mobileNav" hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {mobileItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              <span>{item.index}</span>
              {item.label}
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </nav>
        <div className="mobile-nav__foot">
          <span>{profile.handle}</span>
          <a href={`mailto:${profile.email}`} onClick={() => setMenuOpen(false)}>
            Email ↗
          </a>
        </div>
      </div>
    </>
  );
}
