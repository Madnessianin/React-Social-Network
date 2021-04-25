import { Avatar, Button, List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getFriends } from "../../../Redux/profile/profile-selectors";
import style from "./FriendsList.module.scss";
import PhotoAvatar from "../../Common/PhotoAvatar/PhotoAvatar";
import { Link } from "react-router-dom";

const FriendAvatar = ({ name, photo, description, id }) => {
  return (
    <List.Item>
      <Link to={`/app/profile/${id}`}>
      <List.Item.Meta
        avatar={<Avatar src={photo} size={60} />}
        title={<span className={style.friendName}>{name}</span>}
        description={description}
      />
      </Link>
    </List.Item>
    
    
  );
};

const FriendsList = ({ isOwner }) => {
  const friends = useSelector((state) => getFriends(state));
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
      <List
        className={style.friendsList}
        dataSource={friends}
        itemLayout="horizontal"
        renderItem={(item) => (
          <FriendAvatar
            key={item.id}
            id={item.id}
            name={item.name}
            photo={item.photos.large}
            description={item.lookingForAJobDescription}
          />
        )}
      />
    </div>
  );
};

export default FriendsList;
