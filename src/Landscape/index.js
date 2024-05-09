import React from "react";
import "./Landscape.css";
import Title from "./Title";
import Marquee from "./Marquee";

export default function Landscape() {
  return (
    <>
      <section class="jumbotron" id="megaTop">
        <Title />
        <Marquee />
      </section>
    </>
  );
}
