import React from "react";
import { Redirect } from "react-router-dom";
import style from "./Authorization.module.scss";
import logo from "./../../assets/images/logo192.png";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../Redux/auth/auth-selectors";

const authorization = (Component) => (props) => {
  const isAuth = useSelector((state) => getIsAuth(state));

  if (isAuth) {
    return <Redirect to={"app/profile"} />;
  }

  return (
    <div className={style.inner}>
      <div className={style.logo}>
        <img className={style.logoImg} src={logo} />
      </div>
      <div className={style.content}>
        <h3 className={style.title}>Социальная сеть</h3>
        <Component {...props} />
      </div>
    </div>
  );
};
export default authorization;
