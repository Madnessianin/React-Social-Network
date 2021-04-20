import React from "react";
import { Avatar } from "antd";
import defaultPhoto from "./../../../assets/images/user.png";

const PhotoAvatar = ({ photo }) => {
  return <Avatar src={photo || defaultPhoto} />;
};

export default PhotoAvatar;
