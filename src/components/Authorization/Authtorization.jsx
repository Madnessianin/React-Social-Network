import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../Redux/auth/auth-selectors";

const authorization = (Component) => (props) => {
  const isAuth = useSelector((state) => getIsAuth(state));

  if (isAuth) {
    return <Redirect to={"app/profile"} />;
  }

  return <Component {...props} />;
};
export default authorization;
