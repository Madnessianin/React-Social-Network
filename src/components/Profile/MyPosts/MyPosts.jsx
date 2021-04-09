import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../Redux/profile/profile-selectors";
import Post from "../../Common/Post/Post";
import style from "./MyPosts.module.scss";

const MyPosts = () => {
  const posts = useSelector((state) => getPosts(state));
  console.log(posts);
  return (
    <div className={style.inner}>
      <List
        className={style.posts}
        dataSource={posts}
        itemLayout="vertical"
        renderItem={(post) => <Post key={post.id} post={post} />}
      />
    </div>
  );
};

export default MyPosts;
