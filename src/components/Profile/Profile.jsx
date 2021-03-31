import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import style from "./Profile.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../assets/images/user.png";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import Button from "../Common/Button/Button";
import { useState } from "react";
import { submit } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { getAutorizedUserId, getProfile, getUserStatus } from "../../Redux/profile-selectors";
import { savePhoto, updateStatus } from "../../Redux/profile-reducer";

const Profile = (props) => {
  const profile = useSelector(state => getProfile(state))
  const status = useSelector(state => getUserStatus(state))
  const authUserId = useSelector(state => getAutorizedUserId(state))

  const dispatch = useDispatch()

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      dispatch(savePhoto(event.target.files[0]));
    }
  };

  
  
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className="">
      <div className={style.inner}>
        <div className={style.item}>
          <div className={style.wrapper}>
            <img
              className={style.avatar}
              src={props.profile.photos.large || userPhoto}
              alt=""
            />
            <div className={style.loadPhoto}>
              {props.isOwner && (
                <LoadFile onMainPhotoSelected={onMainPhotoSelected} />
              )}
            </div>
          </div>
          {props.isOwner && (
            <div className={style.wrapperBtn}>
              <Button textBtn={"Edit mode"} link={"/app/edit"} />
            </div>
          )}
        </div>

        <div className={style.item}>
          <div className={style.itemInner}>
            <div className={style.wrapper}>
              <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
              />
            </div>

            <div>{props.isOwner && <MyPostsConteiner />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProfileInfo = ({ profile, status, updateStatus, isOwner }) => {
  return (
    <div className={style.info}>
      <h3 className={style.name}>{profile.fullName}</h3>
      <div className={style.status}>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
      <div>About: {profile.aboutMe}</div>
      <div>LookingForAJob: {profile.lookingForAJob ? "yes" : "no"}</div>
      <div>My profecional skills: {profile.lookingForAJobDescription}</div>
      <div className={style.contacts}>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactKey={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
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

const Contact = ({ contactKey, contactValue }) => {
  return (
    <div className={style.contactsItem}>
      <label>{contactKey}: </label>
      <a className={style.link} href={contactValue} target={"_blank"}>
        {contactValue}
      </a>
    </div>
  );
};
export default Profile;
