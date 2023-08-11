import "./SpacesBottomAddressesPage.scss";
import { HashLink as LocalLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { SpacesBottomAddressesNavItem } from "./SpaceBottomAddressNavItemMap";
import { Wrappers } from "../../../wrappers/wrappers";

export const SpacesBottomAddressesPage = () => {
  const NavbuttonType = (links, locallink, href) => {
    const LinkComponent = locallink ? LocalLink : Link;

    return (
      <LinkComponent
        to={href}
        className="buttonAnchor"
        smooth
        aria-label={`link to ${href}`}
      >
        {links}
      </LinkComponent>
    );
  };

  return (
    <section className="site-bottom-section" id="contact">
      <Wrappers>
        <div className="site-bottom">
          <div className="address-physical">
            <a href="/" className="Logo">
              Spaces
            </a>
            <div className="address-physical-p">
              <p>129 Jordan Ave,</p>
              <p>Toronto, CA M22 324</p>
            </div>

            <p>(232) - 222 - 2522</p>
            <p>Info@spaces-studio.com</p>
          </div>
          <div className="address-physical">
            <nav className="nav-menu-table">
              {SpacesBottomAddressesNavItem.map(
                ({ linksMap, title }, index) => (
                  <div className="ul-column" key={index}>
                    <h3>{title}</h3>
                    <ul className="links">
                      {linksMap.map((item, index) => (
                        <li key={index}>
                          {NavbuttonType(item.link, item.locallink, item.href)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </nav>
          </div>
        </div>
      </Wrappers>
    </section>
  );
};
