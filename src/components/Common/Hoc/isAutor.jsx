import React from "react";
import { useSelector } from "react-redux";
import { getAuthUserName, getAutorizedUserId } from "../../../Redux/auth/auth-selectors";

const isAuthor = (Component) => ({ name, ...rest }) => {
  const authUserName = useSelector((state) => getAuthUserName(state));
  const isAuthor = authUserName === name;
  
  return <Component isAuthor={isAuthor} {...rest} />;
};

export default isAuthor;
