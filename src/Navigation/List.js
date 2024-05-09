import React from "react";

export default function List({ item, index }) {
  return (
    <li className="navItem" key={index}>
      <a className="navLink" href={item.href}>
        <h4>{item.label}</h4>
      </a>
    </li>
  );
}
