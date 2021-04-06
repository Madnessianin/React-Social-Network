import React from "react";
import "./PhotoLogin.scss";
import { Avatar, Button } from "antd";
import defaultPhoto from "./../../../assets/images/user.png";
import { Link } from "react-router-dom";

const PhotoLogin = ({ photo, name, link }) => {
  return (
    <Link to={link} className="photo_login">
      <Button
        icon={<Avatar src={photo || defaultPhoto} size="large" />}
        type="link"
      >
        {name ? <span className="photo_login_name">{name}</span> : null}
      </Button>
    </Link>
  );
};

export default PhotoLogin;
