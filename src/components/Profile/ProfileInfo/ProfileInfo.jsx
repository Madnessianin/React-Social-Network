import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getContacts, getProfile } from "../../../Redux/profile-selectors";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import style from './ProfileInfo.module.scss'

const ProfileInfo = ({ isOwner }) => {
  const profile = useSelector((state) => getProfile(state));
  const {
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
  } = profile;

  return (
    <div className={style.profileInfo}>
      <div className={style.header}>
        <div className={style.headerItem}>
          <h1 className={style.profileName}>{fullName}</h1>
          <ProfileStatus isOwner={isOwner} />
        </div>
        <div className={style.headerItem}>
          
        </div>
      </div>
      
      <dd className={style.description}>
        <dl className={style.descriptionItem}>About: {aboutMe}</dl>
        <dl className={style.descriptionItem}>LookingForAJob: {lookingForAJob ? "yes" : "no"}</dl>
        <dl className={style.descriptionItem}>My profecional skills: {lookingForAJobDescription}</dl>
      </dd>
      <ContactList />
    </div>
  );
};

const ContactList = () => {
  const contacts = useSelector((state) => getContacts(state));
  const keys = Object.keys(contacts);
  const newContacts = keys.map((item) =>
    contacts[item] ? contacts[item] : ""
  );

  const createContact = (item, index) => {
    return (
      <List.Item style={{ fontSize: "16px", padding: "0", border: 'none'}}>
        {`${keys[index]}: ${item}`}
      </List.Item>
    );
  };

  return <List dataSource={newContacts} renderItem={createContact} />;
};

export default ProfileInfo;
