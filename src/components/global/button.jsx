import "./button.scss";

export const Button = (props) => {
  const button_on_click = () => {
    props.setPopUpState(!props.popUpState);
  };
  return (
    <button className="pop_up_button" onClick={button_on_click}>
      {props.buttonText}
    </button>
  );
};
