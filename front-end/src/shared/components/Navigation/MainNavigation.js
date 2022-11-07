import React, { UseState } from "react";
// import UseState from "react";

import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";
import { useState } from "react";
import BackDrop from "../UIElements/BackDrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, SetDrawer] = useState(false);

  const OpenDrawer = () => {
    SetDrawer(true);
  };

  const closeDrawer = () => {
    SetDrawer(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={OpenDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/"> Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
