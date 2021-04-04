import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
//import style from "../../SideBar/NavBar.module.css";
import style from "./NavBarEdit.module.scss";

const NavBarEdit = (props) => {
  let { url } = useRouteMatch();
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to={`${url}/general`} activeClassName={style.active}>
          General
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to={`${url}/contacts`} activeClassName={style.active}>
          Contacts
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBarEdit;
