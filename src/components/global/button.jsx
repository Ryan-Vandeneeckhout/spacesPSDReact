import PropTypes from "prop-types";
import "./button.scss";

export const Button = ({ buttonText, setPopUpState, popUpState }) => {
  const handleButtonClick = () => {
    setPopUpState(!popUpState);
  };

  return (
    <button className="pop_up_button" onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  setPopUpState: PropTypes.func.isRequired,
  popUpState: PropTypes.bool.isRequired,
};
