import { List } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import { getContacts, getProfile } from '../../../Redux/profile-selectors';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ({isOwner }) => {
    const profile = useSelector(state => getProfile(state))
    const {
      fullName,
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      contacts,
    } = profile;
  
    const createContactList = (contacts) => {
      return Object.keys(profile.contacts).map((key) => {
        return (
          <Contact key={key} contactKey={key} contactValue={contacts[key]} />
        );
      });
    };
  
    return (
      <div className="">
        <h3 className="">{fullName}</h3>
        <ProfileStatus isOwner={isOwner} />
        <div>About: {aboutMe}</div>
        <div>LookingForAJob: {lookingForAJob ? "yes" : "no"}</div>
        <div>My profecional skills: {lookingForAJobDescription}</div>
        <div className="">{createContactList(contacts)}</div>
      </div>
    );
  };

const ContactList = () => {
    const contacts = useSelector(state=>getContacts(state))

    return (
        <List 
            dataSource={contacts}
            size="small"
            renderItem={}
        />
    )
}

const Contact = ({ contactKey, contactValue }) => {
return (
    <div className="">
    <label>{contactKey}: </label>
    <a className="" href={contactValue} target={"_blank"}>
        {contactValue}
    </a>
    </div>
);
};

export default ProfileInfo;