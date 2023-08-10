import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const SpotLightGalleryItem = ({
  images,
  classes,
  text,
  animationItem,
  contentItemInView,
}) => {
  const imageContainerClasses = classNames(
    "image-container",
    classes,
    contentItemInView ? "animation_none" : animationItem
  );

  const textContainerClasses = classNames(
    "text-container",
    contentItemInView ? "animation_none" : animationItem
  );

  return (
    <div
      className={imageContainerClasses}
      style={{ backgroundImage: `url(${images})` }}
    >
      <div className={textContainerClasses}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

SpotLightGalleryItem.propTypes = {
  images: PropTypes.string.isRequired,
  classes: PropTypes.string,
  text: PropTypes.string.isRequired,
  animationItem: PropTypes.string.isRequired,
  contentItemInView: PropTypes.bool.isRequired,
};
