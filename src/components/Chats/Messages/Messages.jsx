import { Avatar, Button, List } from "antd";
import React, { useEffect, useState } from "react";
import userPhoto from "./../../../assets/images/user.png";
import style from "./Messages.module.scss";
import NewMessage from "../../Common/NewMessage/NewMessage";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, getMessages } from "../../../Redux/chats/chats-reducer";
import { getMessagesRoom } from "../../../Redux/chats/chats-selectors";
import MessagesTitle from "./MessagesTitle/MessagesTitle";
import { useParams } from "react-router";
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const MessagesList = () => {
  const chatId = useParams().chatId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages(chatId));
  }, []);
  const messages = useSelector((state) => getMessagesRoom(state));
  const [allMessages, setAllMessage] = useState(messages);
  useEffect(() => {
    setAllMessage(messages);
  }, [messages]);
  return (
    <div className={style.inner}>
      <MessagesTitle chatId={chatId} />
      <div className={style.content}>
        <List
          className={style.messages}
          dataSource={allMessages}
          renderItem={(item) => (
            <MessageItem
              key={item.id}
              id={item.id}
              message={item.text}
              user={item.author}
              photo={item.photo}
              chatId={chatId}
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

export const MessageItem = ({ message, photo, user, isLast, chatId, id }) => {
  const dispatch = useDispatch()
  const removeMessage = () => {
    dispatch(deleteMessage(id, chatId))
  }
  return (
    <List.Item 
      className={style.message}
      actions={[
        <React.Fragment>
          {!isLast 
          ? <Button style={{background: 'none'}} type="link" onClick={removeMessage} icon={<DeleteOutlined />} />
          : null}
        </React.Fragment> 
      ]}>
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
