import "./ourPracticePage.scss";
import { Button } from "../../../global/button.jsx";
import { ImageItem } from "../../../global/imageItem";
import { useInView } from "react-intersection-observer";
import { Wrappers } from "../../../wrappers/wrappers.jsx";

export const OurPracticePage = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });

  const textAnimationClass = contentItemInView
    ? "animation_none"
    : "animation_right";
  const imageAnimationClass = contentItemInView
    ? "animation_none"
    : "animation_left";

  return (
    <section className="our_practice_section" id="about">
      <Wrappers>
        <div className="ourPraticeContainer" ref={contentItemView}>
          <div className={`site-text-container ${textAnimationClass}`}>
            <h2>Our Practice</h2>
            <p>
              Manifestion sprit guide quartz. Reki practinor. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Magni veritatis quam ullam
              id modi, voluptatibus odit facere molestiae exercitationem,
              laborum voluptas hic. Eaque, ullam dignissimos facilis aliquid
              soluta excepturi iste. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <p>
              Debitis in corporis ipsum beatae, ipsam voluptates minus velit vel
              magni praesentium vero aliquid nihil facere quibusdam recusandae
              itaque eligendi veniam placeat! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nostrum deleniti et fugiat nihil
              quod quibusdam excepturi ducimus. Natus aperiam dolore, a optio
              ipsum minima consequuntur vitae amet.
            </p>
            <Button buttonText="Send Message" />
          </div>
          <div className={`two_image_container ${imageAnimationClass}`}>
            <ImageItem
              containerImageClass="image_container"
              imageItem="gallery/image2.webp"
            />
            <ImageItem
              containerImageClass="image_container"
              imageItem="gallery/image1.webp"
            />
          </div>
        </div>
      </Wrappers>
    </section>
  );
};
