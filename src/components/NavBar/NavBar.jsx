import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return <nav className={style.nav}>
      <div className = {style.wrapper}>
        <div className={style.item}>
          <i className="fas fa-home"></i>
          <NavLink to="/profile" activeClassName={style.active}>My profile</NavLink>
        </div>
        <div className={style.item}>
          <i className="fas fa-comments"></i>
          <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
        </div>
        <div className={style.item}>
          <i className="fas fa-newspaper"></i>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </div>
        <div className={style.item}>
          <i className="fas fa-music"></i>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </div>
        <div className={style.item}>
          <i className="fas fa-users"></i>
          <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
        </div>
        <div className={style.item}>
          <i className="fas fa-cogs"></i>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </div>
      </div>
  </nav>
}

export default NavBar;