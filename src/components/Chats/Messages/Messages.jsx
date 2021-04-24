import { Avatar, Button, List } from "antd";
import React, { useEffect, useState } from "react";
import userPhoto from "./../../../assets/images/user.png";
import style from "./Messages.module.scss";
import NewMessage from "../../Common/NewMessage/NewMessage";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../../Redux/chats/chats-reducer";
import { getMessagesRoom } from "../../../Redux/chats/chats-selectors";
import MessagesTitle from "./MessagesTitle/MessagesTitle";
import { useParams } from "react-router";

const MessagesList = () => {
  const chatId = useParams().chatId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages(chatId));
  }, []);
  
  const messages = useSelector((state) => getMessagesRoom(state));
  const [allMessages, setAllMessage] = useState(messages);
  console.log(messages)
  useEffect(() => {
    setAllMessage(messages);
  }, [messages]);
  return (
    <div className={style.inner}>
      <MessagesTitle />
      <div className={style.content}>
        <List
          className={style.messages}
          dataSource={allMessages}
          renderItem={(item) => (
            <MessageItem
              key={item.id}
              message={item.text}
              user={item.author}
              photo={item.photo}
            />
          )}
        />
      </div>
      <div className={style.footer}>
        <NewMessage chatId={chatId} />
      </div>
    </div>
  );
};

export const MessageItem = ({ message, photo, user }) => {
  return (
    <List.Item className={style.message}>
      <List.Item.Meta
        avatar={
          <Avatar className={style.messageAvatar} src={photo || userPhoto} />
        }
        title={
          <span className={style.messageAuthor}>{user ? user : null}</span>
        }
        description={<span className={style.messageText}>{message}</span>}
      />
    </List.Item>
  );
};

export default MessagesList;
