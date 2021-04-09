import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../Redux/profile/profile-selectors";
import Post from "../../Common/Post/Post";
import style from "./MyPosts.module.scss";

const MyPosts = () => {
  const posts = useSelector((state) => getPosts(state));

  return (
    <div className={style.inner}>
      <List
        className={style.posts}
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <Post
              key={post.id}
              postId={post.id}
              message={post.message}
              likes={post.likesCount}
              isLikes={post.isLikes}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MyPosts;
