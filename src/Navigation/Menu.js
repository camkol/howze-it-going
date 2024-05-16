import React, { useState } from "react";
import List from "./List";

export default function Menu() {
  const [isChecked, setIsChecked] = useState(false);

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
  return (
    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      <input
        type="checkbox"
        id="navi-toggle"
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label for="navi-toggle" className="button">
        <span className="icon">&nbsp;</span>
      </label>
      <div className="background-HB">&nbsp;</div>
      <nav className={`nav ${isChecked ? "open" : ""}`}>
        <ul className="list">
          {navigationItems.map((item, index) => (
            <List item={item} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
