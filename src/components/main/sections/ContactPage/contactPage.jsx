import { Wrappers } from "../../../wrappers/wrappers.jsx";
import { ContactPageForm } from "./ContactPageForm/contactPageForm.jsx";
import "./contactPage.scss";

export const ContactPage = () => {
  return (
    <section className="contact-page-section" id="contact">
      <Wrappers>
        <div className="site-text-container">
          <h2>Tell us about your ideas</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            explicabo similique ad ipsa quasi iste possimus voluptate, porro
            vitae, maiores cupiditate officia mollitia quod optio numquam quia
            qui iure earum?
          </p>
        </div>

        <ContactPageForm />
      </Wrappers>
    </section>
  );
};
