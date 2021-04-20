import { Avatar, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { sendMessage } from "../../../Redux/chats/chats-reducer";
import { getMessages } from "../../../Redux/chats/chats-selectors";
import userPhoto from "./../../../assets/images/user.png";
import style from "./Messages.module.scss";

const Messages = () => {
  const messages = useSelector((state) => getMessages(state));

  const dispatch = useDispatch();
  const addMessage = (data) => {
    dispatch(sendMessage(data.newMessageText));
  };

  return <div className={style.inner}>Messages</div>;
};

export const MessageItem = ({ message, photo, user }) => {
  return (
    <List.Item className={style.message}>
      <List.Item.Meta
        avatar={
          <Avatar className={style.messageAvatar} src={photo || userPhoto} />
        }
        description={<span className={style.messageText}>{message}</span>}
      />
    </List.Item>
  );
};

export default Messages;
