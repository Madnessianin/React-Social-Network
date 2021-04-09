import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNewPost } from "../../../Redux/profile/profile-reducer";
import {
  getAutorizedUserId,
  getProfilePhoto,
} from "../../../Redux/profile/profile-selectors";
import style from "./NewPost.module.scss";
import PhotoLogin from "../PhotoLogin/PhotoLogin";
import AdditionalBtns from "../AdditionalBtns/AdditionalBtns";
import PostForm from "../PostForm/PostForm";

const NewPost = () => {
  const dispatch = useDispatch();
  const [newPostMode, setNewPostMode] = useState(false);

  const onSubmit = (newPostText) => {
    dispatch(sendNewPost(newPostText));
    setNewPostMode(false);
  };

  const setAddPostMode = () => {
    setNewPostMode(true);
  };

  return (
    <div className={style.inner}>
      <div className={style.photoBtn}>
        <LocalPhotoLogin />
      </div>
      <div className={style.content}>
        {newPostMode ? (
          <PostForm onSubmit={onSubmit} />
        ) : (
          <PreviewBlock setAddPostMode={setAddPostMode} />
        )}
      </div>
    </div>
  );
};

const LocalPhotoLogin = () => {
  const profilePhoto = useSelector((state) => getProfilePhoto(state));
  const authUserId = useSelector((state) => getAutorizedUserId(state));

  return (
    <PhotoLogin photo={profilePhoto} link={`/app/profile/${authUserId}`} />
  );
};

const PreviewBlock = ({ setAddPostMode }) => {
  return (
    <div className={style.previewBlock}>
      <Button type="text" className={style.visibleBtn} onClick={setAddPostMode}>
        Что у вас нового?
      </Button>
      <AdditionalBtns />
    </div>
  );
};

export default NewPost;
