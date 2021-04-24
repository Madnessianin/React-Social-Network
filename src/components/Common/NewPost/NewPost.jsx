import { Avatar, Button, Form, Input, List } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNewPost } from "../../../Redux/profile/profile-reducer";
import style from "./NewPost.module.scss";
import AdditionalBtns from "../AdditionalBtns/AdditionalBtns";
import PostForm from "../PostForm/PostForm";
import {
  getAuthUserProfile,
  getAutorizedUserId,
} from "../../../Redux/auth/auth-selectors";
import userPhoto from "./../../../assets/images/user.png";
import PhotoAvatar from "../PhotoAvatar/PhotoAvatar";
import pageId from "../Hoc/pageId";
import Preloader from "../Preloader/Preloader";

const NewPost = pageId(({ pageId }) => {
  const dispatch = useDispatch();
  const authUserId = useSelector((state) => getAutorizedUserId(state));
  const [newPostMode, setNewPostMode] = useState(false);
  const profile = useSelector((state) => getAuthUserProfile(state));
  const onSubmit = (newPostText) => {
    dispatch(sendNewPost(newPostText, pageId));
    setNewPostMode(false);
  };

  const setAddPostMode = () => {
    setNewPostMode(true);
  };

  if (profile !== null) {
    const {
      fullName,
      photos: { large },
    } = profile;
    if (newPostMode) {
      return (
        <ul className={style.inner}>
          <List.Item>
            <List.Item.Meta
              avatar={<PhotoAvatar photo={large} />}
              title={<span className={style.name}>{fullName}</span>}
            />
          </List.Item>
          <PostForm
            onSubmit={onSubmit}
            userId={authUserId}
            textBtn={"Добавить"}
          />
        </ul>
      );
    }
    return (
      <PreviewBlock
        setAddPostMode={setAddPostMode}
        photo={large}
        userId={authUserId}
      />
    );
  }
  return <Preloader />;
});

const PreviewBlock = ({ setAddPostMode, photo, userId }) => {
  return (
    <div className={style.previewBlock}>
      <div className={style.previewBlockItem}>
        <Avatar src={photo || userPhoto} />
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
