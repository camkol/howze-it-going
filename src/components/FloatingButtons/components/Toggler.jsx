import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Toggler = ({
  dimension = 80,
  backgroundColor = "#f8f9fa",
  buttonColor = "#313131",
  buttonType,
  toggleOpen,
  isOpen,
}) => {
  const [buttonStyle, setButtonStyle] = useState({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-around",
    alignItems: "center",
    height: `${dimension}px`,
    width: `${dimension}px`,
    backgroundColor,
    borderRadius: `${dimension * 0.5}px`,
    padding: `${dimension * 0.2 - 1}px`,
    cursor: "pointer",
    zIndex: 2,
    position: "relative",
    opacity: "0.9",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.2)",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)",
    transition: "all 350ms cubic-bezier(0.25, 0, 0, 1)",
    outline: "none",
  });

  const [spanStyle, setSpanStyle] = useState({
    display: "block",
    backgroundColor: buttonColor,
    width: `${dimension * 0.6}px`,
    height: `${dimension * 0.075}px`,
    borderRadius: `${(dimension * 0.075) / 2}px`,
    transformOrigin: "center left",
    transition: "all 350ms cubic-bezier(0.25, 0, 0, 1)",
    position: "relative",
  });

  const [spanOneStyle, setSpanOneStyle] = useState({});
  const [spanTwoStyle, setSpanTwoStyle] = useState({});
  const [spanThreeStyle, setSpanThreeStyle] = useState({});

  useEffect(() => {
    if (buttonType === "plus") {
      setSpanStyle((prev) => ({
        ...prev,
        width: dimension * 0.5,
        height: dimension * 0.075,
        position: "absolute",
        transformOrigin: "center center",
      }));
      setSpanTwoStyle({ display: "none" });
      setSpanThreeStyle({ transform: "rotate(90deg)" });
    } else if (buttonType === "hori-dots" || buttonType === "vert-dots") {
      setSpanStyle((prev) => ({
        ...prev,
        width: dimension * 0.1,
        height: dimension * 0.1,
        borderRadius: dimension * 0.1,
      }));

      if (buttonType === "hori-dots") {
        setSpanStyle((prev) => ({ ...prev, position: "absolute" }));
        setSpanOneStyle({ left: "25%" });
        setSpanThreeStyle({ right: "25%" });
      }
    }
  }, [buttonType, dimension]);

  const handleToggle = () => {
    toggleOpen();
    if (buttonType === "plus") {
      animatePlusButton();
    } else if (buttonType === "hamburger") {
      animateHamburgerButton();
    }
  };

  const animatePlusButton = () => {
    setButtonStyle((prev) => ({
      ...prev,
      transform: isOpen ? "rotate(0deg)" : "rotate(135deg)",
    }));
  };

  const animateHamburgerButton = () => {
    if (!isOpen) {
      setSpanOneStyle({
        transform: "rotate(45deg)",
        left: "12.5%",
        top: "-2.5%",
      });
      setSpanTwoStyle({ transform: "rotateY(90deg)", opacity: 0 });
      setSpanThreeStyle({
        transform: "rotate(-45deg)",
        left: "12.5%",
        top: "2.5%",
      });
    } else {
      setSpanOneStyle({ transform: "rotate(0deg)", left: "0%", top: "0%" });
      setSpanTwoStyle({ transform: "rotateY(0deg)", opacity: 1 });
      setSpanThreeStyle({ transform: "rotate(0deg)", left: "0%", top: "0%" });
    }
  };

  const handleMouseEnter = () => {
    setButtonStyle((prev) => ({
      ...prev,
      opacity: "1",
      boxShadow: "none",
    }));
  };

  const handleMouseLeave = () => {
    setButtonStyle(isOpen ? { ...buttonStyle } : { ...buttonStyle });
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
      style={buttonStyle}
    >
      <span style={{ ...spanStyle, ...spanOneStyle }}></span>
      <span style={{ ...spanStyle, ...spanTwoStyle }}></span>
      <span style={{ ...spanStyle, ...spanThreeStyle }}></span>
    </button>
  );
};

Toggler.propTypes = {
  buttonType: PropTypes.string.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dimension: PropTypes.number,
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
};

export default Toggler;
