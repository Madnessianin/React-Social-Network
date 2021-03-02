import React from "react";
import userPhotoDefault from "../../assets/images/user.png";
import style from "./PhotoLogin.module.css";

const PhotoLogin = ({ userPhoto, login }) => {
  return (
    <div className={style.nickName}>
      <img
        className={style.avatar}
        src={userPhoto || userPhotoDefault}
        alt=""
      />
      <h6 className={style.login}>{login}</h6>
    </div>
  );
};

export default PhotoLogin;
