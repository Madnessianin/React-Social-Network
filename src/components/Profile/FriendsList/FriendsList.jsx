import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getFriends } from "../../../Redux/profile/profile-selectors";
import style from "./FriendsList.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const FriendAvatar = ({ name }) => {
  return (
    <div className={style.friendsListItem}>
      <Avatar
        className={style.friendAvatar}
        shape="circle"
        size={50}
        icon={<UserOutlined />}
      />
      <span className={style.friendName}>{name}</span>
    </div>
  );
};

const FriendsList = ({ isOwner }) => {
  const friends = useSelector((state) => getFriends(state));
  const friendsList = friends.map((item) => {
    return <FriendAvatar key={item.fullName} name={item.fullName} />;
  });
  return (
    <div className={style.wrapper}>
      <div className={style.btns}>
        <Button className={style.btnItem} type="link">
          друзья <span className={style.countFriend}>58</span>
        </Button>
        <Button className={style.btnItem} type="link">
          {isOwner ? "обновления" : "новости"}
        </Button>
      </div>
      <div className={style.friendsList}>{friendsList}</div>
    </div>
  );
};

export default FriendsList;
