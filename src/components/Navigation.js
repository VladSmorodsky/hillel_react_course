import {NavLink} from "react-router-dom";
const navLinks = ['Home', 'Popular', 'Battle'];

export const Navigation = () =>
  <ul className="nav">
    {navLinks.map((link, index) => (
      <li key={index}>
        <NavLink to={link === 'Home' ? '/' : link.toLowerCase()}>{link}</NavLink>
      </li>
    ))}
  </ul>
