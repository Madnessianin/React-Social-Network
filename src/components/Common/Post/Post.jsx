import React from "react";
import { Avatar, Button, List } from "antd";
import {
  DownSquareOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Count from "../../Common/Count/Count";
import { HeartOutlined } from "@ant-design/icons";
import style from "./Post.module.scss";

import userPhoto from "./../../../assets/images/user.png";

const Post = ({
  post: {
    fullName,
    id,
    author_photo: { large },
    post_text,
    likes,
  },
}) => {
  const setLike = () => {
    console.log("click!");
  };

  return (
    <List.Item
      className={style.item}
      actions={[
        <LikeCount count={likes || 0} action={setLike} />,
        <CommentsCount count={likes || 0} action={setLike} />,
        <RepostCount count={likes || 0} action={setLike} />,
      ]}
      extra={
        <Button
          className={style.menuBtn}
          size="large"
          icon={<DownSquareOutlined />}
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

export default Post;
