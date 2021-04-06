import React from "react";
import { Avatar, Button } from "antd";
import defaultPhoto from "./../../../assets/images/user.png";
import { Link } from "react-router-dom";
import style from "./PhotoLogin.module.scss";

const PhotoLogin = ({ photo, name, link }) => {
  return (
    <Link to={link}>
      <Button
        icon={<Avatar src={photo || defaultPhoto} size="large" />}
        type="link"
        className={style.btn}
      >
        {name ? <span className={style.name}>{name}</span> : null}
      </Button>
    </Link>
  );
};

export default PhotoLogin;
