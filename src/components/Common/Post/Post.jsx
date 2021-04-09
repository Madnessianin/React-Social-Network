import React from "react";
import { Button } from "antd";
import {
  DownSquareOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import Count from "../../Common/Count/Count";
import { HeartOutlined } from "@ant-design/icons";
import style from "./Post.module.scss";
import PhotoLogin from "../../Common/PhotoLogin/PhotoLogin";
import { useSelector } from "react-redux";
import {
  getAutorizedUserId,
  getProfileName,
  getProfilePhoto,
} from "../../../Redux/profile/profile-selectors";

const Post = ({ likes, message, isLikes }) => {
  const setLike = () => {
    console.log("click!");
  };

  return (
    <div className={style.item}>
      <div className={style.header}>
        <LocalPhotoLogin />
        <Button
          className={style.menuBtn}
          size="large"
          icon={<DownSquareOutlined />}
        />
      </div>
      <p className={style.postText}>{message}</p>
      <div className={style.blockBtn}>
        <LikeCount count={likes || 0} action={setLike} />
        <CommentsCount count={likes || 0} action={setLike} />
        <RepostCount count={likes || 0} action={setLike} />
      </div>
    </div>
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

const LocalPhotoLogin = () => {
  const profilePhoto = useSelector((state) => getProfilePhoto(state));
  const authUserId = useSelector((state) => getAutorizedUserId(state));
  const profileName = useSelector((state) => getProfileName(state));

  return (
    <PhotoLogin
      photo={profilePhoto}
      link={`/app/profile/${authUserId}`}
      name={profileName}
      isLink={true}
    />
  );
};

export default Post;
