import React from "react";
import "./Landscape.css";

import Marquee from "./Marquee";
import Typewriter from "./Typewriter";

export default function Landscape() {
  return (
    <>
      <section className="jumbotron" id="megaTop">
        <Typewriter />

        <Marquee />
      </section>
    </>
  );
}
