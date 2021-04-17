import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getIsAuth } from "../../../Redux/auth/auth-selectors";

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const isAuth = useSelector((state) => getIsAuth(state));
    if (!isAuth) return <Redirect to={"/login"} />;

    return <Component {...props} />;
  };

  return RedirectComponent;
};


export default withAuthRedirect;