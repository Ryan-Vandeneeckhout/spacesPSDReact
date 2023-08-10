import "./spotlight.scss";
import { SpotLightGallery } from "./spotlightgallery";
import { SpotLightGalleryItem } from "./spotlightGalleryItem";
import { useInView } from "react-intersection-observer";
import { Wrappers } from "../../../wrappers/wrappers";

export const Spotlight = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.3,
  });

  const [
    contentItemViewSpotlightText,
    contentItemInViewSpotlightText,
  ] = useInView({
    threshold: 0.1,
  });

  return (
    <section className="spotlight" id="projects">
      <Wrappers>
        <div className="spotlight_container" ref={contentItemViewSpotlightText}>
          <div
            className={`site-text-container 
        ${
          contentItemInViewSpotlightText ? " animation_none" : "animation_left"
        }`}
          >
            <h2>Spotlight</h2>
            <p>
              Manifestion sprit guide quartz. Reki practinor. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Magni veritatis quam ullam
              id modi, voluptatibus odit facere molestiae exercitationem,
              laborum voluptas hic.
            </p>
          </div>
          <div className="gallery_container" ref={contentItemView}>
            {SpotLightGallery.map((item, index) => {
              return (
                <SpotLightGalleryItem
                  key={index}
                  text={item.text}
                  classes={item.class}
                  images={item.image}
                  animationItem={item.animation}
                  contentItemInView={contentItemInView}
                />
              );
            })}
          </div>
        </div>
      </Wrappers>
    </section>
  );
};
