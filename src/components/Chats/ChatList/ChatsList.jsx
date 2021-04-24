import React, { useEffect } from "react";
import style from "./ChatsList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "antd";
import { MessageItem } from "../Messages/Messages";
import PhotoAvatar from "../../Common/PhotoAvatar/PhotoAvatar";
import { getChats } from "../../../Redux/chats/chats-reducer";
import { getDialogs } from "../../../Redux/chats/chats-selectors";

const ChatsList = () => {
  const chats = useSelector((state) => getDialogs(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChats());
  }, []);
  console.log(chats);
  if (!chats) {
    return <Preloader />;
  }
  return (
    <div className={style.inner}>
      <List
        dataSource={chats}
        className={style.list}
        renderItem={(item) => (
          <ChatItem
            key={item.id}
            id={item.id}
            photo={item.photo}
            title={item.title}
            message={item.lastMessage}
          />
        )}
      />
    </div>
  );
};

const ChatItem = ({ photo, message, id, title }) => {
  return (
    <Link to={`/app/dialogs/room/${id}`}>
      <List.Item className={style.listItem}>
        <List.Item.Meta
          avatar={<PhotoAvatar photo={photo} />}
          title={<span className={style.dialogName}>{title}</span>}
          description={
            <ul className={style.lastMessage}>
              <MessageItem message={message.text} photo={message.photo} />
            </ul>
          }
        />
        <span className={style.data}></span>
      </List.Item>
    </Link>
  );
};

export default ChatsList;
