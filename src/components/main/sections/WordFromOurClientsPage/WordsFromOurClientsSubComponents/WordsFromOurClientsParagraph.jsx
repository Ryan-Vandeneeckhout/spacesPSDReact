import { useInView } from "react-intersection-observer";
import { ImageItem } from "../../../../global/imageItem";

export const WordFromOurClientsParagraph = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.5,
  });

  const animationClass = contentItemInView
    ? "animation_none"
    : "animation_right";

  return (
    <section ref={contentItemView}>
      <div className={`bottom-testimonials ${animationClass}`}>
        <h3 className="spacesh4">
          Spaces were an incredible team of passionate creatives, who truly
          transformed our space into a beautiful sanctuary.
        </h3>

        <div className="name-titleBox">
          <div className="name-position-image">
            <ImageItem
              containerImageClass="image-circle"
              imageItem="globalImages/image10.jpg"
            />
            <div className="name-postion">
              <p className="p_bold_large">Jaime Jorge</p>
              <p>Founder, RENTEA</p>
            </div>
          </div>

          <ImageItem
            containerImageClass="image-arrow"
            imageItem="icons/arrow.svg"
          />
        </div>
      </div>
    </section>
  );
};
