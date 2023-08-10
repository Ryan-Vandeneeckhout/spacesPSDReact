import { useInView } from "react-intersection-observer";

export const WordFromOurClientsParagraph = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.5,
  });

  return (
    <section ref={contentItemView}>
      <div
        className={`bottom-testimonials ${
          contentItemInView ? " animation_none" : " animation_right"
        }`}
      >
        <h3 className="spacesh4">
          Spaces were an incredible team of passionate creatives, who truly
          transformed our space into a beautiful sanctuary.
        </h3>

        <div className="name-titleBox">
          <div className="name-position-image">
            <div className="image-circle">
              <img
                src="./assets/images/globalImages/image10.jpg"
                alt="error not found 404"
              />
            </div>

            <div className="name-postion">
              <p className="p_bold_large">Jaime Jorge</p>
              <p>Founder, RENTEA</p>
            </div>
          </div>

          <div className="image-arrow">
            <img
              src="./assets/images/icons/arrow.svg"
              alt="error not found 404"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
