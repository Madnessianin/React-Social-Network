import React, { useEffect } from "react";
import style from "./Chats.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "antd";
import PhotoLogin from "../Common/PhotoLogin/PhotoLogin";
import { MessageAvatar } from "./Messages/Messages";
import {getChats} from './../../Redux/chats/chats-reducer';
import {getDialogs} from './../../Redux/chats/chats-selectors';

const Chats = () => {
  const chats = useSelector((state) => getDialogs(state));
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getChats())
  }, [chats])
  console.log(chats)
  return (
    <div className={style.inner}>
      <List
        dataSource={chats}
        className={style.list}
        renderItem={(item) => (
          <ChatItem
            id={item.id}
            name={item.fullName}
            lastMessege={item.lastMessege}
          />
        )}
      />
    </div>
  );
};

const ChatItem = ({ id, name, lastMessege: { user } }) => {
  const linkUrl = `/app/chats/${id}`;
  return (
    <Link to={linkUrl}>
      <List.Item className={style.listItem}>
        <List.Item.Meta
          avatar={<PhotoLogin isLink={false} isLarge={true} />}
          title={<span className={style.dialogName}>{name}</span>}
          description={<MessageAvatar message={user.message} />}
        />
        <span className={style.data}></span>
      </List.Item>
    </Link>
  );
};

export default Chats;
