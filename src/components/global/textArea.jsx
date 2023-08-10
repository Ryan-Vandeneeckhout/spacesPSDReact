import PropTypes from "prop-types";

export const EditorTextArea = ({
  labelText,
  messageState,
  TextAreaInputRef,
  TextInputValue,
  setTextareaValue,
}) => {
  //File Editor place text, editable and useable to rename commands//
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="textarea-message">
      <label>{labelText}</label>
      <textarea
        ref={TextAreaInputRef}
        onChange={handleTextareaChange}
        value={messageState}
        placeholder={TextInputValue}
        required
      />
    </div>
  );
};
EditorTextArea.propTypes = {
  labelText: PropTypes.string.isRequired,
  messageState: PropTypes.string.isRequired,
  TextAreaInputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  TextInputValue: PropTypes.string.isRequired,
  setTextareaValue: PropTypes.func.isRequired,
};
