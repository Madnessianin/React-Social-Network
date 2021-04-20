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

const getInterlocutor = (users) => {
  const authId = useSelector((state) => getAutorizedUserId(state));
  const interlocutors = users.filter((user) => user.id !== authId);
  return interlocutors[0];
}

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
          <ChatItem key={item.id} id={item.id} users={item.users} messages={item.messages} />
        )}
      />
    </div>
  );
};

const ChatItem = ({ users, messages, id }) => {
  const lastMessage = messages[messages.length - 1];
  const interlocutor = getInterlocutor(users);
 
  return (
    <Link to={`/app/chats/${id}`}>
      <List.Item className={style.listItem}>
        <List.Item.Meta
          avatar={
            <Avatar
              className={style.messageAvatar}
              src={interlocutor.photo || userPhoto}
            />
          }
          title={
            <span className={style.dialogName}>{interlocutor.fullName}</span>
          }
          description={
            <ul className={style.lastMessage}>
              <MessageItem
                message={lastMessage.text}
                photo={lastMessage.photo}
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
