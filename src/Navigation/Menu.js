import React, { useState } from "react";
import List from "./List";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const navigationItems = [
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Employment", href: "#experience" },
    { label: "About Me", href: "about.html" },
    { label: "Library", href: "library.html" },
  ];
  return (
    <div id="navbarSupportedContent" className="collapse navbar-collapse">
      <button
        className="navbarToggler"
        aria-label="Toggle navigation"
        onClick={handleOpen}
      >
        Menu
      </button>{" "}
      <ul className={"navbarNav " + (open ? "show" : "")}>
        {navigationItems.map((item, index) => (
          <List item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}
