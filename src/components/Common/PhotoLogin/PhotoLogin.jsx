import React from "react";
import "./PhotoLogin.scss";
import { Avatar } from "antd";
import defaultPhoto from "./../../../assets/images/user.png";

const PhotoLogin = ({ photo, name }) => {
  return (
    <div className="photo_login">
      <Avatar src={photo || defaultPhoto} size="large" shape="circle" />
      {name ? <span className="photo_login_name">{name}</span>: null}
    </div>
  );
};

export default PhotoLogin;
