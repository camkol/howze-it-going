import React, { useEffect, useRef, useState } from "react";

export default function Title() {
  // Create a reference to the span element for manipulating its text content
  const textRef = useRef(null);

  useEffect(() => {
    // Define the words and colors arrays for text and color variations
    const words = ["Front-end", "Web", "Junior", "New?"];
    const colors = ["blue", "green", "yellow", "red"];

    // Generator function to iterate over the words array cyclically
    function* generator() {
      let index = 0;
      while (true) {
        yield index++;

        if (index > 3) {
          index = 0;
        }
      }
    }

    // Function to print each character of a word with a delay
    function printChar(word) {
      let i = 0;
      let intervalId;

      // Define an updateText function to be executed by setInterval
      const updateText = () => {
        if (i >= word.length) {
          // If all characters are printed, start deleting characters
          deleteChar();
          clearInterval(intervalId); // Clear the interval
        } else {
          // If there are still characters to print, update the text content
          setText((prevText) => prevText + word[i]);
          i++;
        }
      };

      // Start printing characters with a delay of 500ms
      intervalId = setInterval(updateText, 500);
    }

    // Function to delete each character of the currently displayed word
    function deleteChar() {
      let word = textRef.current.textContent; // Get the current text content
      let i = word.length - 1; // Start from the last character
      let intervalId = setInterval(() => {
        if (i >= 0) {
          // If there are still characters to delete, update the text content
          setText((prevText) => prevText.slice(0, -1));
          i--;
        } else {
          // If all characters are deleted, remove the color class and print the next word
          textRef.current.classList.remove(
            colors[words.indexOf(textRef.current.textContent)]
          );
          printChar(words[gen.next().value]);
          clearInterval(intervalId); // Clear the interval
        }
      }, 300);
    }

    // Initialize the generator and start printing the first word
    let gen = generator();
    printChar(words[gen.next().value]);

    // Clean-up function to clear any running intervals when the component unmounts
    return () => clearInterval();
  }, []); // Empty dependency array ensures this effect runs only once, on component mount

  // State to manage the current text content of the span
  const [text, setText] = useState("");

  // JSX to render the title with the dynamic text
  return (
    <h1 id="coolAssTitle">
      <span ref={textRef} className={`text blue`}>
        {text}
      </span>{" "}
      Developer
    </h1>
  );
}
