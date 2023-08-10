export const EditorTextArea = (props) => {
  //File Editor place text, editable and useable to rename commands//
  return (
    <div className="textarea-message">
      <label>{props.labelText}</label>
      <textarea
        ref={props.TextAreaInputRef}
        onChange={(event) => {
          props.setTextareaValue(event.target.value);
        }}
        value={props.messageState}
        placeholder={props.TextInputValue}
        required
      />
    </div>
  );
};
