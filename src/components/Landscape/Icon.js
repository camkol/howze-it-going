import React from "react";

export default function Icon({ icon, index }) {
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
