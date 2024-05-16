import React, { useState } from "react";
import "./Hamburger.css"; // Import CSS for styling if needed

export default function HamburgerMenu() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <section>
      <div>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          ipsam officia pariatur laboriosam nam suscipit voluptas placeat nulla
          et? Quas commodi deserunt necessitatibus quisquam iusto aspernatur et,
          veniam provident ipsam?
        </p>
      </div>

      {/* hamburger */}
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
      <div className="background">&nbsp;</div>

      {/* nav */}
      <nav className={`nav ${isChecked ? "open" : ""}`}>
        <ul className="list">
          {[1, 2, 3, 4, 5, 6].map((link) => (
            <li className="item" key={link}>
              <a href="#" className="link">
                Link {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
