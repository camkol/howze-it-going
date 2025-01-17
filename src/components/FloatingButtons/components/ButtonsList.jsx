import PropTypes from "prop-types";
import Button from "./Button";

const ButtonsList = ({
  dimension,
  buttonsList = [],
  itemBackgroundColor,
  direction,
  degree,
  distance,
  isOpen,
}) => (
  <>
    {buttonsList.map((item, index) => (
      <Button
        key={index}
        index={index}
        dimension={dimension}
        direction={direction}
        degree={degree}
        distance={distance}
        itemBackgroundColor={itemBackgroundColor}
        onClick={item.onClick}
        src={item.src}
        isOpen={isOpen}
        nbrItems={buttonsList.length - 1}
      />
    ))}
  </>
);

ButtonsList.propTypes = {
  buttonsList: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
  distance: PropTypes.number,
  dimension: PropTypes.number.isRequired,
  itemBackgroundColor: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
  degree: PropTypes.number.isRequired,
};

export default ButtonsList;
