/**
 * @param {string} buttonType the main button type (hmaburger, plus, vert-dots or hori-dots)
 * @param {number} dimension the buttons dimension
 * @param {number} top the offsetTop position of the nav
 * @param {number} left the offsetLeft position of the nav
 * @param {string} backgroundColor the main button background color
 * @param {string} itemBackgroundColor the nav item button background color
 * @param {string} buttonColor the color of the main button
 * @param {string} direction the direction of the nav when opened (left, right, top, bottom and circular)
 * @param {number} distance the distance between the main button and the nav items ** required when direction='circular' **
 * @param {number} degree the angle of the circle ** required when direction='circular' **
 * @param {array} buttonsList the nav items [{ onClick: click handler, src: 'for the icon'}]
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Toggler from "./components/Toggler";
import ButtonsList from "./components/ButtonsList";
import "./FloatingButtons.css";

const FloatingButtons = ({
  buttonType = "hamburger",
  dimension = 40,
  top = 0,
  left = 0,
  backgroundColor = "#f8f9fa",
  itemBackgroundColor = "#f8f9fa",
  buttonColor = "#313131",
  direction = "circular",
  distance = 100,
  degree = 180,
  buttonsList,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div style={{ position: "fixed", top, left, zIndex: 99 }}>
      <Toggler
        buttonType={buttonType}
        dimension={dimension}
        backgroundColor={backgroundColor}
        buttonColor={buttonColor}
        toggleOpen={toggleOpen}
        isOpen={isOpen}
      />
      <ButtonsList
        buttonsList={buttonsList}
        dimension={dimension}
        itemBackgroundColor={itemBackgroundColor}
        isOpen={isOpen}
        direction={direction}
        degree={degree}
        distance={distance}
      />
    </div>
  );
};

FloatingButtons.propTypes = {
  buttonType: PropTypes.string,
  dimension: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  itemBackgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  direction: PropTypes.string,
  distance: PropTypes.number,
  degree: PropTypes.number,
  buttonsList: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FloatingButtons;
