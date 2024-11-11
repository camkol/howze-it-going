import React, { useEffect, useState } from "react";
import "./Navigation.css";

export function Navigation({ onSelectSection }) {
  return (
    <>
      <nav className="navbar" role="navigation">
        <Name />
        <Menu onSelectSection={onSelectSection} />
      </nav>
    </>
  );
}
export function NavMobile() {
  return (
    <>
      <nav className="navbar" role="navigation">
        <Name />
      </nav>
    </>
  );
}

function Name() {
  return (
    <a className="roll-out-text" href="/">
      <h1 id="name">Cameron Howze</h1>
    </a>
  );
}

function Menu({ onSelectSection }) {
  const [activeLink, setActiveLink] = useState("");

  const navigationItems = [
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Employment", href: "#experience" },
    { label: "About Me", href: "#aboutMe" },
    { label: "Library", href: "https://camkol.github.io/library.html" },
  ];

  // Effect to set active link based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#home"; // Fallback if no hash
      setActiveLink(currentHash);
    };

    handleHashChange(); // Run on initial load

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ul className="list">
      {navigationItems.map((item, index) => (
        <List
          item={item}
          key={index}
          isActive={activeLink === item.href}
          onSelectSection={onSelectSection}
        />
      ))}
    </ul>
  );
}

function List({ item, isActive, onSelectSection }) {
  return (
    <li
      className={`item ${isActive ? "active" : ""}`}
      onClick={() => onSelectSection(item.label)}
    >
      <a className="link" href={item.href}>
        <h4>{item.label}</h4>
      </a>
    </li>
  );
}
