import React from "react";
import "./Button.css";

export const Button = ({
  as: Component = "button", // Default to 'button'
  children,
  filled = false,
  secondary = false,
  ...rest
}) => {
  const className = `dir-control ${secondary ? "dir-control--secondary" : ""} ${
    filled ? "dir-control--filled" : ""
  }`;

  return (
    <Component className={className} {...rest}>
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </Component>
  );
};
