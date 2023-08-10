import "./imageItem.scss";
import PropTypes from "prop-types";

export const ImageItem = ({ imageItem, containerImageClass }) => {
  if (!imageItem) {
    return null;
  }

  return (
    <div className={containerImageClass}>
      <img src={`./assets/images/${imageItem}`} alt="error not found" />
    </div>
  );
};

ImageItem.propTypes = {
  imageItem: PropTypes.string,
  containerImageClass: PropTypes.string.isRequired,
};
