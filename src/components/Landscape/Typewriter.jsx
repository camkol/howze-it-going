import { ReactTyped } from "react-typed";

export default function Typewriter() {
  const wordsWithColors = [
    { text: "Front-end", color: "blue" },
    { text: "Web", color: "green" },
    { text: "Junior", color: "yellow" },
    { text: "🤷🏾‍♂️New? ", color: "red" },
  ];

  return (
    <h1 id="coolAssTitle">
      <ReactTyped
        strings={wordsWithColors.map(
          (word) => `<span style="color: ${word.color};">${word.text}</span>`
        )}
        typeSpeed={100}
        loop
        backSpeed={20}
        //   cursorChar=">"
        showCursor={true}
      />{" "}
      Developer
    </h1>
  );
}
