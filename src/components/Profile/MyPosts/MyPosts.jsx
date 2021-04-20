import { List } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../Redux/profile/profile-selectors";
import Post from "../../Common/Post/Post";
import Preloader from "../../Common/Preloader/Preloader";
import style from "./MyPosts.module.scss";

const MyPosts = () => {
  const posts = useSelector((state) => getPosts(state));
  const [myPosts, setMyPosts] = useState(posts);
  useEffect(() => {
    setMyPosts(posts);
  }, [posts]);
  
  if (posts.length === 0) {
    return <Preloader />
  }
  return (
    <div className={style.inner}>
      <List
        className={style.posts}
        dataSource={myPosts}
        itemLayout="vertical"
        renderItem={(post) => <Post key={post.id} post={post} />}
      />
    </div>
  );
};

export default MyPosts;
