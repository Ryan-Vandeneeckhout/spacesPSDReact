import "./overlay.scss";

export const Overlay = ({ showSideMenu, setShowSideMenu }) => {
  return (
    <div
      className={`overlay${showSideMenu ? " display-flex" : " display-none"}`}
      onClick={() => {
        setShowSideMenu(false);
      }}
    />
  );
};
