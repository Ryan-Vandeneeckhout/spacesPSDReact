import "./landingPage.scss";
import { ImageItem } from "../../../global/imageItem";
import { useInView } from "react-intersection-observer";

export const LandingPage = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });

  const animationClass = contentItemInView ? "animation_none" : "animation_up";

  return (
    <section className="landing_section" id="services">
      <div className="wrapper" ref={contentItemView}>
        <div className="title_container">
          <h1>Spaces is an architecture studio based in Toronto, Canada</h1>
        </div>
        <div className={`photo_container ${animationClass}`}>
          <ImageItem
            imageItem="icons/badge.png"
            containerImageClass="badgeContainer"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
