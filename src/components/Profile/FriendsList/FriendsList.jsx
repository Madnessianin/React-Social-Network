import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getFriends } from "../../../Redux/profile-selectors";
import style from "./FriendsList.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const FriendAvatar = ({ name }) => {
  return (
    <div className={style.friendsListItem}>
      <Avatar
        className={style.friendsListAvatar}
        shape="circle"
        size={50}
        icon={<UserOutlined />}
      />
      <span className={style.friendsListName}>{name}</span>
    </div>
  );
};

const FriendsList = ({ isOwner }) => {
  const friends = useSelector((state) => getFriends(state));
  const friendsList = friends.map((item) => {
    return <FriendAvatar key={item.fullName} name={item.fullName} />;
  });
  return (
    <div className={style.friendsList}>
      <div className={style.friendsListBtns}>
        <Button className={style.friendsListBtn} type="link">
          друзья <span className={style.friendsListCount}>58</span>
        </Button>
        <Button className={style.friendsListBtn} type="link">
          {isOwner ? "обновления" : "новости"}
        </Button>
      </div>
      <div className={style.friendsListInner}>{friendsList}</div>
    </div>
  );
};

export default FriendsList;
