import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNewPost } from "../../../Redux/profile/profile-reducer";
import {
  getAutorizedUserId,
  getProfileName,
  getProfilePhoto,
} from "../../../Redux/profile/profile-selectors";
import style from "./NewPost.module.scss";
import PhotoLogin from "../PhotoLogin/PhotoLogin";
import AdditionalBtns from "../AdditionalBtns/AdditionalBtns";
import PostForm from "../PostForm/PostForm";

const NewPost = () => {
  const dispatch = useDispatch();
  const profilePhoto = useSelector((state) => getProfilePhoto(state));
  const authUserId = useSelector((state) => getAutorizedUserId(state));
  const userName = useSelector((state) => getProfileName(state));

  const [newPostMode, setNewPostMode] = useState(false);

  const onSubmit = (newPostText) => {
    dispatch(sendNewPost(newPostText));
    setNewPostMode(false);
  };

  const setAddPostMode = () => {
    setNewPostMode(true);
  };
  if (newPostMode) {
    return (
      <PostForm
        onSubmit={onSubmit}
        name={userName}
        userId={authUserId}
        photo={profilePhoto}
        textBtn={"Добавить"}
      />
    );
  }
  return (
    <PreviewBlock
      setAddPostMode={setAddPostMode}
      photo={profilePhoto}
      userId={authUserId}
    />
  );
};

const PreviewBlock = ({ setAddPostMode, photo, userId }) => {
  return (
    <div className={style.previewBlock}>
      <div className={style.previewBlockItem}>
        <PhotoLogin photo={photo} link={`/app/profile/${userId}`} />
        <Button
          type="text"
          className={style.visibleBtn}
          onClick={setAddPostMode}
        >
          Что у вас нового?
        </Button>
      </div>
      <div className={style.previewBlockItem}>
        <AdditionalBtns />
      </div>
    </div>
  );
};

export default NewPost;
