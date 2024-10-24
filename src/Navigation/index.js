import React, { useEffect, useState } from "react";
import "./Navigation.css";

export default function Navigation({ onSelectSection }) {
  return (
    <>
      <nav className="navbar" role="navigation">
        <Name />
        <Menu onSelectSection={onSelectSection} />
      </nav>
    </>
  );
}

function Name() {
  return (
    <a className="roll-out-text" href="index.html">
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
    { label: "About Me", href: "https://camkol.github.io/about.html" },
    { label: "Library", href: "https://camkol.github.io/library.html" },
  ];

  // Effect to set active link based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || "#home"; // Fallback in case there’s no hash
      setActiveLink(newHash);
      console.log("Hash changed to:", newHash); // Debugging log
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial active link on load

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
