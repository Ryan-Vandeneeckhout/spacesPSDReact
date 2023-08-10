import "./overlay.scss";
import PropTypes from "prop-types";

export const Overlay = ({ showSideMenu, setShowSideMenu }) => {
  const handleOverlayClick = () => {
    setShowSideMenu(false);
  };

  //variable for elements - display flex / display none

  const animationClassDisplayFlexNone = showSideMenu
    ? "display-flex"
    : "display-none";

  return (
    <div
      className={`overlay ${animationClassDisplayFlexNone}`}
      onClick={handleOverlayClick}
    />
  );
};

Overlay.propTypes = {
  showSideMenu: PropTypes.bool.isRequired,
  setShowSideMenu: PropTypes.func.isRequired,
};

export default Overlay;
