import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { savePhoto } from "../../../Redux/profile/profile-reducer";
import userPhoto from "../../../assets/images/user.png";
import { getProfilePhoto } from "../../../Redux/profile/profile-selectors";
import { Upload, Image, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import style from "./Avatar.module.scss";
import { Link, useParams } from "react-router-dom";
import SendMessage from "../../Common/SendMessage/SendMessage";

const MyAvatar = ({ isOwner }) => {
  const photos = useSelector((state) => getProfilePhoto(state));

  return (
    <div className={style.avatar}>
      <Image className={style.avatarImg} src={photos || userPhoto} />
      {isOwner ? <EditBlock /> : <UserBlock />}
    </div>
  );
};

const EditBlock = () => {
  const dispatch = useDispatch();

  const beforeUpload = (file) => {
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      return true;
    } else {
      message.error("Выбран некорректный файл!");
      return false;
    }
  };

  const dispatchPhoto = ({ file }) => {
    dispatch(savePhoto(file));
  };
  return (
    <div className={style.btnBlock}>
      <Upload customRequest={dispatchPhoto} beforeUpload={beforeUpload}>
        <Button className={style.firstBtn} icon={<UploadOutlined />}>
          Загрузить фото
        </Button>
      </Upload>
      <Link to="/app/edit">
        <Button className={style.lastBtn} type="primary">
          Редактировать
        </Button>
      </Link>
    </div>
  );
};

const UserBlock = () => {
  const userId = useParams().userId;
  return (
    <div className={style.btnBlock}>
      <SendMessage userId={userId} className={style.firstBtn} />
      <Button className={style.lastBtn} type="primary">
        Добавить в друзья
      </Button>
    </div>
  );
};

export default MyAvatar;
