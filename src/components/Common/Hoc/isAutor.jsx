import React from "react";
import { useSelector } from "react-redux";
import { getAutorizedUserId } from "../../../Redux/auth/auth-selectors";

const isAuthor = (Component) => ({ name, ...rest }) => {
  return <Component isOwner={isOwner} {...rest} />;
};

export default isAuthor;
