import React from "react";

export default function List({ item, index }) {
  return (
    <li className="item" key={index}>
      <a className="link" href={item.href}>
        <h4>{item.label}</h4>
      </a>
    </li>
  );
}
