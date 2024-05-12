import React, { useEffect } from "react";
//import Icon from "./Icon";

export default function Marquee() {
  const icons = [
    "fab fa-react",
    "fab fa-js",
    "fab fa-node",
    "images/icons/mocha(front).png",
    "images/icons/jQuery(front)-logo.png",
    "fab fa-php",
    "images/icons/command-line(front).png",
    "fab fa-html5",
    "fab fa-bootstrap",
    "fab fa-css3",
    "fab fa-sass",
    "images/icons/universal-access(front).png",
    "images/icons/Photoshop(front).png",
    "images/icons/visualcode(front).png",
    "fab fa-github",
    "images/icons/Codecademy(front).png",
    "fab fa-free-code-camp",
    // "fab fa-vuejs",
    // "fab fa-angular",
    // "fab fa-dev",
    // "fab fa-codepen",
    // "fab fa-wordpress",
    // "fab fa-aws",
    // "fab fa-docker",
    // "fab fa-android",
  ];

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div id="faceOfPort">
      <div className="marquee">
        <ul className="marquee-content">
          {icons.map((icon, index) => (
            <Icon icon={icon} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Icon({ icon, index }) {
  return (
    <li key={index}>
      {icon.startsWith("images/") ? (
        <img src={icon} alt="" />
      ) : (
        <i className={icon}></i>
      )}
    </li>
  );
}
