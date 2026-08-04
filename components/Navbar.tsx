"use client";

import { useState } from "react";
import Brand from "./Brand";

const links = [
  ["Services", "#services"],
  ["The Studio", "#studio"],
  ["Reviews", "#reviews"],
  ["Location", "#location"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap" id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <Brand />
        <button className="menu-toggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <div className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav__book" href="#booking" onClick={() => setOpen(false)}>Book an appointment</a>
        </div>
      </nav>
    </header>
  );
}
