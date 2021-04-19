import React from "react";
import { useSelector } from "react-redux";
import { sendMessage } from "../../../Redux/chats/chats-reducer";
import { getMessages } from "../../../Redux/chats/chats-selectors";
import PhotoLogin from "../../Common/PhotoLogin/PhotoLogin";
import style from "./Messages.module.scss";


const Messages = () => {
  const messages = useSelector((state) => getMessages(state));
  const messagesElements = messages.map((message) => (
    <Messege key={message.id} message={message.message} />
  ));

  const dispatch = useDispatch();
  const addMessage = (data) => {
    dispatch(sendMessage(data.newMessageText));
  };

  return <div className={style.inner}>Messages</div>;
};

export const MessageAvatar = ({ message }) => {
  return (
    <span className={style.lastMessege}>
      <PhotoLogin isLink={false} />
      <span className={style.message}>{message}</span>
    </span>
  );
};

export const Messege = ({ message }) => {
  return <div className={style.messages_item}>{message}</div>;
};

export default Messages;
