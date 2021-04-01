import React from "react";
import { Row, Col } from 'antd';
import Preloader from "../Common/Preloader/Preloader";
import style from "./Profile.module.css";
import userPhoto from "../../assets/images/user.png";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { useDispatch, useSelector } from "react-redux";
import {
  getAutorizedUserId,
  getProfile,
  getUserStatus,
} from "../../Redux/profile-selectors";
import { savePhoto } from "../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const profile = useSelector((state) => getProfile(state));
  const authUserId = useSelector((state) => getAutorizedUserId(state));

  const dispatch = useDispatch();

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      dispatch(savePhoto(event.target.files[0]));
    }
  };

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className="">
      <Row>
        <Col span={18} push={6}>
          <div className={style.wrapper}>
            <img
              className={style.avatar}
              src={profile.photos.large || userPhoto}
              alt=""
            />
            <div className={style.loadPhoto}>
              {props.isOwner && (
                <LoadFile onMainPhotoSelected={onMainPhotoSelected} />
              )}
            </div>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <ProfileInfo isOwner={props.isOwner} />
          <MyPostsConteiner />
        </Col>
      </Row>
    </div>
  );
};


const LoadFile = (props) => {
  return (
    <div className={style.wrapperInput}>
      <i className="fas fa-download"></i>
      <input
        className={style.inputFile}
        onChange={props.onMainPhotoSelected}
        id="file"
        name={"file"}
        type={"file"}
      />
      <label className={style.inputLabel} htmlFor={"file"}>
        Choose file
      </label>
    </div>
  );
};


export default Profile;
