import React, { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import VideoIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Logo from "../images/port_logo.png";

import SidebarDrawer from "./SidebarDrawer";
import HeaderMenu from "./HeaderMenu";
import { Typography } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* <Link to="/"> */}
        <img className="header__logo" src={Logo} alt="Portfolio" />
        {/* </Link> */}
      </div>

      <div className="header__nav">
        <ul className="header__menu">
          <p className="header__menu__list">Home</p>
          <p className="header__menu__list">About</p>
          <p className="header__menu__list">Portfopo</p>
          <p className="header__menu__list">Pages</p>
          <p className="header__menu__list">Blog</p>
          <p className="header__menu__list">Contact</p>
        </ul>
      </div>

      <div>
        <div className="header__social">
          <ul className="header__social__list">
            <p className="header__social__item">
              <GitHub />
            </p>
            <p className="header__social__item">
              <Facebook />
            </p>
            <p className="header__social__item">
              <LinkedIn />
            </p>
          </ul>
        </div>
        <div className="header__bars">
          <SidebarDrawer />
        </div>
      </div>
    </div>
  );
}

export default Header;
