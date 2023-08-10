import { Wrappers } from "../../../wrappers/wrappers";
import { SpacesBottomAddressesNavItem } from "./SpaceBottomAddressNavItemMap";
import "./SpacesBottomAddressesPage.scss";
import { HashLink as LocalLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const SpacesBottomAddressesPage = () => {
  const NavbuttonType = (links, locallink, href) => {
    if (locallink === true) {
      return (
        <LocalLink
          to={href}
          className="buttonAnchor"
          smooth
          aria-label={`link to ${href}`}
        >
          {links}
        </LocalLink>
      );
    } else {
      return (
        <Link aria-label={`link to ${href}`} to={href}>
          {links}
        </Link>
      );
    }
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
                ({ linksMap, title }, index) => {
                  return (
                    <ul className="ul-column" key={index}>
                      <h3>{title}</h3>
                      <div className="links">
                        {linksMap.map((item, index) => {
                          return (
                            <li key={index}>
                              {NavbuttonType(
                                item.link,
                                item.locallink,
                                item.href
                              )}
                            </li>
                          );
                        })}
                      </div>
                    </ul>
                  );
                }
              )}
            </nav>
          </div>
        </div>
      </Wrappers>
    </section>
  );
};
