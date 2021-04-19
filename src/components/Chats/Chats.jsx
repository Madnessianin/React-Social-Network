import React, { useEffect } from "react";
import style from "./Chats.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, List } from "antd";
import userPhoto from "./../../assets/images/user.png";
import { MessageItem } from "./Messages/Messages";
import { getChats } from "./../../Redux/chats/chats-reducer";
import { getDialogs } from "./../../Redux/chats/chats-selectors";
import { getAutorizedUserId } from "../../Redux/auth/auth-selectors";
import Preloader from "../Common/Preloader/Preloader";

const Chats = () => {
  const chats = useSelector((state) => getDialogs(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats());
  }, []);

  if (!chats) {
    return <Preloader />;
  }

  return (
    <div className={style.inner}>
      <List
        dataSource={chats}
        className={style.list}
        renderItem={(item) => (
          <ChatItem users={item.users} messages={item.messages} />
        )}
      />
    </div>
  );
};

const ChatItem = ({ users, messages }) => {
  const linkUrl = `/app/chats/${"1"}`;
  const lastMessage = messages[messages.length - 1];
  const authId = useSelector((state) => getAutorizedUserId(state));
  let interlocutor;
  users.forEach((user) => {
    if (user.id !== authId) {
      interlocutor = user;
    }
  });
  return (
    <Link to={linkUrl}>
      <List.Item className={style.listItem}>
        <List.Item.Meta
          avatar={
            <Avatar
              className={style.messageAvatar}
              src={interlocutor.photos || userPhoto}
            />
          }
          title={
            <span className={style.dialogName}>{interlocutor.fullName}</span>
          }
          description={
            <ul className={style.lastMessage}>
              <MessageItem
                message={lastMessage.message_text}
                photo={lastMessage.author_photo}
              />
            </ul>
          }
        />
        <span className={style.data}></span>
      </List.Item>
    </Link>
  );
};

export default Chats;
