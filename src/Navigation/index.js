import React from "react";
import "./Navigation.css";
import Menu from "./Menu";
import Name from "./Name";

export default function Navigation() {
  return (
    <>
      <header>
        <nav className="navbar" role="navigation">
          <Name />
          <Menu />
        </nav>
      </header>
    </>
  );
}
