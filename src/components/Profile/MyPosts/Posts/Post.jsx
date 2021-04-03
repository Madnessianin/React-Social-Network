import React from "react";
import style from "./Post.module.scss";
import { useState } from "react";
import { useEffect } from "react";

import cn from "classnames";
import PhotoLogin from "../../../Common/PhotoLogin/PhotoLogin";

const Post = (props) => {
  let [likePost, setLikePost] = useState(props.likePost);
  useEffect(() => {
    setLikePost(props.likePost);
  }, [props.likePost]);

  return (
    <div className={style.item}>
      <div className={style.title}>
        <PhotoLogin />
      </div>
      <div className={style.messages}>{props.message}</div>

      <div className={style.likes}>
        <button
          className={cn(style.ButtonLike, likePost ? style.colorLike : "")}
          onClick={() => {
            setLikePost(!likePost);
            props.likeDislike(props.postId, likePost);
          }}
        >
          <i className="far fa-heart"></i>
          <span className={style.countLike}>{props.likeCounts}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
