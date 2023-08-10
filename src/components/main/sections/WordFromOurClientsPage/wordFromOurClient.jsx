import { Wrappers } from "../../../wrappers/wrappers";
import { WordFromOurClientsParagraph } from "./WordsFromOurClientsSubComponents/WordsFromOurClientsParagraph";
import "./wordFromOurClientsPage.scss";
import { useInView } from "react-intersection-observer";

export const WordFromOurClients = () => {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });

  return (
    <section className="words-from-our-clients-section">
      <Wrappers>
        <div className="client-testimonials ">
          <h2>Words from our clients</h2>

          <WordFromOurClientsParagraph />
          <div
            ref={contentItemView}
            className={`header-image ${
              contentItemInView ? " animation_none" : " animation_up"
            }`}
          />
        </div>
      </Wrappers>
    </section>
  );
};
