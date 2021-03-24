import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo192.png";
import userPhoto from "../../assets/images/user.png";
import PhotoLoginConteiner from "../PhotoLogin/PhotoLoginConteiner";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import { Header } from "antd/lib/layout/layout";
import { getIsAuth, getLogin, getUserPhoto } from "../../Redux/auth-selectors";
import Avatar from "antd/lib/avatar/avatar";

const MyHeader = () => {
  const [menuMode, setMenuMode] = useState(false);
  const isAuth = useSelector(state => getIsAuth(state));
  const login = useSelector(state => getLogin(state));
  const photo = useSelector(state => getUserPhoto(state));

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logout())
  }

  return (
    <Header className="header">
      <div className="header_wrapper"></div>
        <div className="header_inner">
          <img className="header_logo" src={logo} />
          <div className="login_block">
            {isAuth ? (
              <NicknameWithPhoto
                photo={photo}
                login={login}
                inToMenuMode={() => {
                  setMenuMode(!menuMode);
                }}
              />
            ) : (
              <NavLink
                to={"/login"}
                onClick={() => {
                  setMenuMode(false);
                }}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
        {menuMode ? (
          <Menu
            logout={logOut}
            leftToMenuMode={() => {
              setMenuMode(false);
            }}
          />
        ) : (
          <></>
        )}
    </Header>
  );
};

const NicknameWithPhoto = ({ inToMenuMode, photo }) => {
  return (
    <div className="nickName">
      <Avatar src={photo} size="small" shape="circle" />
      <button onClick={inToMenuMode} className="btn"></button>
    </div>
  );
};

const Menu = ({ leftToMenuMode, logout }) => {
  return (
    <dl className="menu" onBlur={leftToMenuMode}>
      <dd className="link">
        <i className="fas fa-user"></i>
        <NavLink onClick={leftToMenuMode} to="/profile">
          Profile
        </NavLink>
      </dd>
      <dd className="link">
        <i className="fas fa-cog"></i>
        <NavLink onClick={leftToMenuMode} to="/settings">
          Settings
        </NavLink>
      </dd>
      <dd className="out">
        <i className="fas fa-sign-out-alt"></i>
        <a className="outBtn" onClick={logout}>
          Out
        </a>
      </dd>
    </dl>
  );
};

export default MyHeader;
