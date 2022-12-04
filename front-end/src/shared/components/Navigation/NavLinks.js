import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { AuthContext } from "../../context/auth-context";

export const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggIn && (
        <li>
          <NavLink to="/u1/places">My Places</NavLink>
        </li>
      )}
      {auth.isLoggIn && (
        <li>
          <NavLink to="/places/new">New Place</NavLink>
        </li>
      )}
      {!auth.isLoggIn && (
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
