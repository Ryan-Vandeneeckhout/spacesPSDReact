import "./navigation.scss";
import { NavButton } from "./navButton";
import { NavigationButtonMap } from "./navgationButtonMap";
import { useRef, useEffect } from "react";

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
    // eslint-disable-next-line
  }, []);

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
      <button onClick={toggleSideMenu}>Menu</button>
      <ul
        ref={sideMenuRef}
        className={`side-nav-menu ${
          showSideMenu ? " display-flex" : " display-none"
        }`}
      >
        {NavigationButtonMap.map(({ NavText, href }, index) => (
          <NavButton key={index} NavText={NavText} href={href} />
        ))}
      </ul>
    </nav>
  );
};
