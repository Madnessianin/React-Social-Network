import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getContacts, getProfile } from "../../../Redux/profile-selectors";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ isOwner }) => {
  const profile = useSelector((state) => getProfile(state));
  const {
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
  } = profile;

  return (
    <div className="">
      <h3 className="">{fullName}</h3>
      <ProfileStatus isOwner={isOwner} />
      <div>About: {aboutMe}</div>
      <div>LookingForAJob: {lookingForAJob ? "yes" : "no"}</div>
      <div>My profecional skills: {lookingForAJobDescription}</div>
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
      <List.Item style={{ fontSize: "16px", padding: "0" }}>
        {`${keys[index]}: ${item}`}
      </List.Item>
    );
  };

  return <List dataSource={newContacts} renderItem={createContact} />;
};

export default ProfileInfo;
