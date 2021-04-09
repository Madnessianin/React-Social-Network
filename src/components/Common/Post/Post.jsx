import React, { useState } from "react";
import { Avatar, Menu, List } from "antd";
import {
  DownSquareOutlined,
  CommentOutlined,
  ShareAltOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Count from "../../Common/Count/Count";
import { HeartOutlined } from "@ant-design/icons";
import style from "./Post.module.scss";
import userPhoto from "./../../../assets/images/user.png";
import { useDispatch } from "react-redux";
import { changePost, deletePost } from "../../../Redux/profile/profile-reducer";
import PostForm from "../PostForm/PostForm";

const { SubMenu } = Menu;

const Post = ({
  post: {
    fullName,
    id,
    author_photo: { large },
    post_text,
    likes,
  },
}) => {
  const dispatch = useDispatch();

  const [changeMode, setChangeMode] = useState(false)

  const setLike = () => {
    console.log("click!");
  };

  const changeThisPost = () => {
    setChangeMode(true)
  }

  const sendUpdatedPost = (data) => {
    dispatch(changePost(id, data))
    setChangeMode(false)
  }

  const deleteThisPost = () => {
    dispatch(deletePost(id));
  };

  if (changeMode) {
    return (
      <PostForm onSubmit={sendUpdatedPost} />
    )
  }

  return (
    <List.Item
      className={style.item}
      actions={[
        <LikeCount count={likes || 0} action={setLike} />,
        <CommentsCount count={likes || 0} action={setLike} />,
        <RepostCount count={likes || 0} action={setLike} />,
      ]}
      extra={
        <DropDownMenu
          deletePost={deleteThisPost}
          changePost={changeThisPost}
        />
      }
    >
      <List.Item.Meta
        avatar={<Avatar src={large || userPhoto} />}
        title={fullName}
        description={post_text}
      />
    </List.Item>
  );
};

const LikeCount = Count(({ count, action }) => (
  <HeartOutlined count={count} action={action} />
));

const CommentsCount = Count(({ count, action }) => (
  <CommentOutlined count={count} action={action} />
));
const RepostCount = Count(({ count, action }) => (
  <ShareAltOutlined count={count} action={action} />
));

const DropDownMenu = ({ deletePost, changePost }) => {
  return (
    <Menu mode="horizontal" className={style.dropDownMenu}>
      <SubMenu key="menu" icon={<DownSquareOutlined />}>
        <Menu.Item onClick={changePost} icon={<EditOutlined />} key="1">
          Изменить
        </Menu.Item>
        <Menu.Item onClick={deletePost} icon={<DeleteOutlined />} key="2">
          Удалить
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Post;
