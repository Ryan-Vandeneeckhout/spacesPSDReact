import "./imageItem.scss";

export const ImageItem = ({ imageItem, containerImageClass }) => {
  if (imageItem === (null || "" || undefined)) {
    return null;
  } else {
    return (
      <div className={containerImageClass}>
        <img src={`./assets/images/${imageItem}`} alt="error not found" />
      </div>
    );
  }
};
