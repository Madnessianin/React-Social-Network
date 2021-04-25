import React from "react";
import style from "./MessagesTitle.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import PhotoAvatar from "../../../Common/PhotoAvatar/PhotoAvatar";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";
import {
  getPhotoRoom,
  getTitleRoom,
} from "../../../../Redux/chats/chats-selectors";

const MessagesTitle = ({ chatId }) => {
  const title = useSelector((state) => getTitleRoom(state));
  const photo = useSelector((state) => getPhotoRoom(state));
  return (
    <div className={style.header}>
      <Button icon={<LeftOutlined />} type="link" className={style.headerBtn}>
        <Link to="/app/dialogs/chats" className={style.headerBtnLink}>
          Назад
        </Link>
      </Button>
      <div className={style.titleInner}>
        <h1 className={style.title}>{title}</h1>
        <h4 className={style.subTitle}>SubTitle</h4>
      </div>
      <PhotoAvatar photo={photo} />
    </div>
  );
};

export default MessagesTitle;
