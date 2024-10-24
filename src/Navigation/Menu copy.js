import React, { useState, useEffect } from "react";
import List from "./List";

export default function Menu() {
  const [isChecked, setIsChecked] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const navigationItems = [
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Employment", href: "#experience" },
    { label: "About Me", href: "about.html" },
    { label: "Library", href: "library.html" },
  ];

  // Effect to set active link based on hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial active link on load

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      <input
        type="checkbox"
        id="navi-toggle"
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="navi-toggle" className="button">
        <span className="icon">&nbsp;</span>
      </label>
      <nav className={`nav ${isChecked ? "open" : ""}`}>
        <ul className="list">
          {navigationItems.map((item, index) => (
            <List item={item} key={index} isActive={activeLink === item.href} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
