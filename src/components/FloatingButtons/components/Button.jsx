import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({
  dimension,
  itemBackgroundColor,
  index,
  nbrItems,
  isOpen,
  direction,
  degree,
  distance = dimension * 2, // Default value here
  onClick = () => {}, // Default value here
  src,
}) => {
  const initButtonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: `${dimension}px`,
    width: `${dimension}px`,
    backgroundColor: itemBackgroundColor,
    borderRadius: `${dimension * 0.5}px`,
    padding: `${dimension * 0.25}px`,
    cursor: "pointer",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
    opacity: 0,
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.2)",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)",
    outline: "none",
    transition: `all ${
      index * 50 + 200
    }ms cubic-bezier(0.71, 0.71, 0, 1.18) 0ms`,
  };

  const [buttonStyle, setButtonStyle] = useState(initButtonStyle);

  // Calculate the translation for positioning based on direction and open state
  useEffect(() => {
    let translateX = 0,
      translateY = 0;

    if (isOpen) {
      if (direction === "up")
        translateY = -((dimension + dimension * 0.33) * (index + 1));
      else if (direction === "down")
        translateY = (dimension + dimension * 0.33) * (index + 1);
      else if (direction === "right")
        translateX = (dimension + dimension * 0.33) * (index + 1);
      else if (direction === "left")
        translateX = -((dimension + dimension * 0.33) * (index + 1));
      else {
        const angle =
          degree / nbrItems >= 360 ? 360 / (nbrItems + 1) : degree / nbrItems;
        const radian = angle * (Math.PI / 180);
        translateX = Math.cos(radian * index) * distance;
        translateY = Math.sin(radian * index) * distance;
      }

      setButtonStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 1,
        transform: `translate(${translateX}px, ${translateY}px)`,
      }));
    } else {
      setButtonStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 0,
        transform: "translate(0px, 0px)",
      }));
    }
  }, [isOpen, direction, degree, distance, dimension, index, nbrItems]);

  const mouseEnter = () => {
    if (isOpen) {
      setButtonStyle((prevStyle) => ({
        ...prevStyle,
        boxShadow: "none",
      }));
    }
  };

  const mouseLeave = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      boxShadow: "0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)",
    }));
  };

  const pointerDown = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      boxShadow: "inset 0px 1px 2px 1px rgba(0, 0, 0, .15)",
    }));
  };

  const pointerUp = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      boxShadow: "none",
    }));
  };

  return (
    <button
      onPointerDown={pointerDown}
      onPointerUp={pointerUp}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={onClick}
      style={buttonStyle}
    >
      <img style={{ width: "100%", height: "100%" }} src={src} alt="icon" />
    </button>
  );
};

Button.propTypes = {
  distance: PropTypes.number,
  degree: PropTypes.number.isRequired,
  dimension: PropTypes.number.isRequired,
  itemBackgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  nbrItems: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
};

export default Button;
