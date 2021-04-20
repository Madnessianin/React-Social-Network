import React, { useState } from "react";
import { Avatar, Menu, List } from "antd";
import {
  DownSquareOutlined,
  CommentOutlined,
  ShareAltOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import count from "../../Common/Count/Count";
import { HeartOutlined } from "@ant-design/icons";
import style from "./Post.module.scss";
import userPhoto from "./../../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { changePost, deletePost } from "../../../Redux/profile/profile-reducer";
import PostForm from "../PostForm/PostForm";
import isOwnerPage from "../Hoc/isOwner";
import { getAuthUserName } from "../../../Redux/auth/auth-selectors";

const { SubMenu } = Menu;

const Post = ({
  post: {
    author,
    id,
    photo: { large },
    text,
    likes,
  },
}) => {
  const dispatch = useDispatch();

  const [changeMode, setChangeMode] = useState(false);

  const setLike = () => {
    console.log("click!");
  };

  const changeThisPost = () => {
    setChangeMode(true);
  };

  const sendUpdatedPost = (data) => {
    dispatch(changePost(id, data));
    setChangeMode(false);
  };

  const deleteThisPost = () => {
    dispatch(deletePost(id));
  };

  if (changeMode) {
    return (
      <PostForm
        onSubmit={sendUpdatedPost}
        userId={id}
        photo={large}
        name={author}
        textBtn={"Изменить"}
      />
    );
  }

  return (
    <List.Item
      className={style.item}
      actions={[
        <LikeCount quantity={likes || 0} action={setLike} />,
        <CommentsCount quantity={likes || 0} action={setLike} />,
        <RepostCount quantity={likes || 0} action={setLike} />,
      ]}
      extra={
        <DropDownMenu
          deletePost={deleteThisPost}
          changePost={changeThisPost}
          name={author}
        />
      }
    >
      <List.Item.Meta
        avatar={<Avatar src={large || userPhoto} />}
        title={author}
        description={text}
      />
    </List.Item>
  );
};

const LikeCount = count(({ quantity, action }) => (
  <HeartOutlined quantity={quantity} action={action} />
));

const CommentsCount = count(({ quantity, action }) => (
  <CommentOutlined quantity={quantity} action={action} />
));
const RepostCount = count(({ quantity, action }) => (
  <ShareAltOutlined quantity={quantity} action={action} />
));

const DropDownMenu = isOwnerPage(
  ({ deletePost, changePost, isOwner, name }) => {
    const authUserName = useSelector((state) => getAuthUserName(state));
    return (
      <Menu mode="horizontal" className={style.dropDownMenu}>
        <SubMenu
          key="menu"
          icon={<DownSquareOutlined />}
          disabled={!isOwner && name !== authUserName}
        >
          <Menu.Item onClick={changePost} icon={<EditOutlined />} key="1">
            Изменить
          </Menu.Item>
          <Menu.Item onClick={deletePost} icon={<DeleteOutlined />} key="2">
            Удалить
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
);

export default Post;
