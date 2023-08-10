export const SpotLightGalleryItem = ({
  images,
  classes,
  text,
  animationItem,
  contentItemInView,
}) => {
  return (
    <div
      className={`image-container ${classes}
        ${contentItemInView ? " animation_none" : ` ${animationItem}`}`}
      style={{ backgroundImage: `url(${images})` }}
    >
      <div
        className={`text-container         ${
          contentItemInView ? " animation_none" : ` ${animationItem}`
        }`}
      >
        <h3>{text}</h3>
      </div>
    </div>
  );
};
