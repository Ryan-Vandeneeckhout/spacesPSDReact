import { NavigationButtonMap } from "./navgationButtonMap";
import { NavButton } from "./navButton";
import "./navigation.scss";
import { useRef, useState } from "react";

export const UpperNavigation = ({ NavChangeStyle }) => {
  const [hoverOpen, setHoverOpen] = useState(false);
  const sideMenuRef = useRef(null);

  const ShowSideMenu = () => {
    setHoverOpen((hoverOpen) => !hoverOpen);
  };

  window.addEventListener("resize", () => {
    const width = window.innerWidth;

    if (width <= 600) {
      setHoverOpen(false);
    } else if (sideMenuRef.current !== null) {
      sideMenuRef.current.classList.remove("display-flex");
      sideMenuRef.current.classList.add("display-none");
      setHoverOpen(false);
    }
  });

  return (
    <nav
      className={`upper-nav ${
        NavChangeStyle ? " animation_outline_true" : " animation_outline_false"
      }`}
    >
      <div className="Logo">
        <a href="#spaces">SPACES</a>
      </div>
      <ul className="desktop-nav-menu">
        {NavigationButtonMap.map(({ NavText, href }, index) => (
          <NavButton key={index} NavText={NavText} href={href} />
        ))}
      </ul>
      <button onClick={ShowSideMenu}>Menu</button>
      <ul
        ref={sideMenuRef}
        className={`side-nav-menu ${
          hoverOpen ? " display-flex" : " display-none"
        }`}
      >
        {NavigationButtonMap.map(({ NavText, href }, index) => (
          <NavButton key={index} NavText={NavText} href={href} />
        ))}
      </ul>
    </nav>
  );
};
