import React from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../Redux/profile-selectors";
import Post from "../../Common/Post/Post";
import style from "./MyPosts.module.scss";

const MyPosts = () => {
  const posts = useSelector((state) => getPosts(state));
  const postsElements = posts.map((post) => (
    <Post
      key={post.id}
      postId={post.id}
      message={post.message}
      likes={post.likesCount}
      isLikes={post.isLikes}
    />
  ));
  return (
    <div className={style.inner}>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
