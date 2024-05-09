import React, { useEffect, useRef, useState } from "react";

export default function Title() {
  const textRef = useRef(null);

  useEffect(() => {
    const words = ["Front-end", "Web", "Junior", "New?"];
    const colors = ["blue", "green", "yellow", "red"];

    // Generator (iterate from 0-3)
    function* generator() {
      let index = 0;
      while (true) {
        yield index++;

        if (index > 3) {
          index = 0;
        }
      }
    }

    // Printing effect
    function printChar(word) {
      let i = 0;
      let intervalId;
      const updateText = () => {
        if (i >= word.length) {
          deleteChar();
          clearInterval(intervalId);
        } else {
          setText((prevText) => prevText + word[i]);
          i++;
        }
      };

      intervalId = setInterval(updateText, 500);
    }

    // Deleting effect
    function deleteChar() {
      let word = textRef.current.textContent;
      let i = word.length - 1;
      let intervalId = setInterval(() => {
        if (i >= 0) {
          setText((prevText) => prevText.slice(0, -1));
          i--;
        } else {
          textRef.current.classList.remove(
            colors[words.indexOf(textRef.current.textContent)]
          );
          printChar(words[gen.next().value]);
          clearInterval(intervalId);
        }
      }, 300);
    }

    // Initializing generator
    let gen = generator();
    printChar(words[gen.next().value]);

    return () => clearInterval();
  }, []);

  const [text, setText] = useState("");

  return (
    <h1 id="coolAssTitle">
      <span ref={textRef} className={`text blue`}>
        {text}
      </span>{" "}
      Developer
    </h1>
  );
}
