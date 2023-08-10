import React, { useState } from "react";

export default function TextInput(props) {
  const [inputType, setInputType] = useState(
    props.ShowHideText ? "password" : "text"
  );

  const handleUserInput = (e) => {
    props.setInputValue(e.target.value);
  };

  const handleFocus = () => {
    props.InputRef.current.select();
    const inputElements = document.querySelectorAll(".inputTextFocusedByUser");
    inputElements.forEach((input) =>
      input.classList.remove("inputTextFocusedByUser")
    );
    props.InputRef.current.classList.add("inputTextFocusedByUser");
  };

  const showHideTextInput = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="input-text">
      <label htmlFor={props.valueText}>{props.valueText}</label>
      <div className="inputContainer">
        <input
          required={props.requiredInput}
          aria-label={`${props.valueText} input`}
          type={inputType}
          onChange={handleUserInput}
          placeholder={props.placeholderInput}
          value={props.inputValue}
          onFocus={handleFocus}
          ref={props.InputRef}
          min={props.min}
          max={props.max}
        />
        {props.ShowHideText && (
          <div onClick={showHideTextInput} className="inputShowHideText">
            {inputType === "password" ? "Show" : "Hide"}
          </div>
        )}
      </div>
    </div>
  );
}
