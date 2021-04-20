import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAutorizedUserId } from "../../../Redux/auth/auth-selectors";

const pageId = (Component) => () => {
  let pageId = useParams().userId;
  const authId = useSelector((state) => getAutorizedUserId(state)).toString();
  if (!pageId) {
    pageId = authId;
  }
  return <Component pageId={pageId} />;
};

export default pageId;
