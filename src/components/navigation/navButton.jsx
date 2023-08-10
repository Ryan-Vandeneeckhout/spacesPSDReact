import { HashLink as Link } from "react-router-hash-link";

export const NavButton = ({ NavText, href }) => {
  return (
    <li>
      <Link
        to={href}
        className="buttonAnchor"
        smooth
        aria-label={`link to ${href}`}
      >
        {NavText}
      </Link>
    </li>
  );
};
