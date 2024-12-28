// ScrollToTop.js
import React, { useState, useEffect } from "react";
import "./Scroll.css"; // Your CSS file

function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="return-to-top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      )}
    </>
  );
}

export default Scroll;
