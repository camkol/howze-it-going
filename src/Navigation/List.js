import React from "react";

export default function List({ item, isActive }) {
  return (
    <li className="item">
      <a className={`link ${isActive ? "active" : ""}`} href={item.href}>
        <h4>{item.label}</h4>
      </a>
    </li>
  );
}
