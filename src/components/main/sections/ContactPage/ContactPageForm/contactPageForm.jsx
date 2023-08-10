import { Button } from "../../../../global/button.jsx";
import { EditorTextArea } from "../../../../global/textArea.jsx";
import TextInput from "../../../../global/textinput.jsx";
import "./contactPageForm.scss";

export const ContactPageForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="top-form">
          <TextInput InputType="text" valueText="Name" requiredInput />
          <TextInput InputType="text" valueText="Email" requiredInput />
        </div>
        <EditorTextArea labelText="Message" />
        <Button buttonText="Send Message" />
      </form>
    </div>
  );
};
