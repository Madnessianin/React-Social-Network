import React from "react";
import { Avatar, Button } from "antd";
import defaultPhoto from "./../../../assets/images/user.png";
import { Link } from "react-router-dom";
import style from "./PhotoLogin.module.scss";

const PhotoLogin = ({ photo, name, link, isLarge, isLink }) => {

  const MyButton = ({sizeIcon}) => {
    return (
      <Button
        icon={<Avatar src={photo || defaultPhoto} size={isLarge ? 65 : sizeIcon || 30} />}
        type="link"
        className={style.btn}
      >
        {name ? <span className={style.name}>{name}</span> : null}
      </Button>
    )
  }
  if (isLink) {
    return (
      <Link to={link}>
        <MyButton sizeIcon={40} />
      </Link>
    );
  } else {
    return <MyButton />
  }
 
};

export default PhotoLogin;
