import "./navigation.scss";
import { NavButton } from "./navButton";
import { NavigationButtonMap } from "./navgationButtonMap";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const UpperNavigation = ({
  NavChangeStyle,
  showSideMenu,
  setShowSideMenu,
}) => {
  const sideMenuRef = useRef(null);

  const toggleSideMenu = () => {
    setShowSideMenu((prevShowSideMenu) => !prevShowSideMenu);
  };

  const handleResize = () => {
    const width = window.innerWidth;

    if (width <= 600) {
      setShowSideMenu(false);
    } else if (sideMenuRef.current !== null) {
      sideMenuRef.current.classList.remove("display-flex");
      sideMenuRef.current.classList.add("display-none");
      setShowSideMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  //variable for element nav to add more defintion for the fixed desktop/mobile nav - display flex / display none. Located in uppernav

  const animationClassOutline = NavChangeStyle
    ? "animation_outline_true"
    : "animation_outline_false";

  //variable for elements - display flex / display none. Located in Moblie nav - Side Menu html

  const animationClassDisplayFlexNone = showSideMenu
    ? "display-flex"
    : "display-none";

  return (
    <nav className={`upper-nav ${animationClassOutline}`}>
      <div className="Logo">
        <a href="#spaces">SPACES</a>
      </div>
      <ul className="desktop-nav-menu">
        {NavigationButtonMap.map(({ NavText, href }, index) => (
          <NavButton key={index} NavText={NavText} href={href} />
        ))}
      </ul>
      <button onClick={toggleSideMenu}>Menu</button>
      <ul
        ref={sideMenuRef}
        className={`side-nav-menu ${animationClassDisplayFlexNone}`}
      >
        {NavigationButtonMap.map(({ NavText, href }, index) => (
          <NavButton key={index} NavText={NavText} href={href} />
        ))}
      </ul>
    </nav>
  );
};

UpperNavigation.propTypes = {
  NavChangeStyle: PropTypes.bool.isRequired,
  showSideMenu: PropTypes.bool.isRequired,
  setShowSideMenu: PropTypes.func.isRequired,
};
