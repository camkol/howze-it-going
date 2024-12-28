import React from "react";
import "./Button.css";

export const Button = ({
  as: Component = "button",
  children,
  filled = false,
  secondary = false,
  ...rest
}) => {
  const className = `
      dir-control 
      ${secondary ? "dir-control--secondary" : ""} 
      ${filled ? "dir-control--filled" : ""}
    `.trim();

  return (
    <Component className={className} {...rest}>
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {[...Array(4)].map((_, i) => (
        <b key={i} aria-hidden="true">
          {children}
        </b>
      ))}
    </Component>
  );
};
