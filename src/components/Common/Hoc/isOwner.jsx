import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAutorizedUserId } from "../../../Redux/auth/auth-selectors";

const isOwnerPage = (Component) => ({ id, ...rest }) => {
  let userId;
  if (!id) {
    userId = useParams().userId;
  } else {
    userId = id.toString();
  }
  const authId = useSelector((state) => getAutorizedUserId(state)).toString();
  const isOwner = !userId || userId === authId;
  return <Component isOwner={isOwner} {...rest} />;
};

export default isOwnerPage;
