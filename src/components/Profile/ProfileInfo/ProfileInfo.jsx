import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';

import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {
    let onMainPhotoSelected = (event) => {
      if (event.target.files.length) {
        props.savePhoto(event.target.files[0])
      }
    }
    if(!props.profile) {
      return <Preloader />
    } 
    return (
        <div>
          <div className={classes.descriptionBlock}>
            <img className = {classes.avatar} src = {props.profile.photos.large || userPhoto} alt = ""/>
            <div>
              {props.isOwner && <input onChange = {onMainPhotoSelected} type = {"file"} />}
            </div>
            <div>
              <ProfileStatusWithHooks status = {props.status} 
                                      updateStatus = {props.updateStatus} />
            </div>
            <div>About: {props.profile.aboutMe}</div>
            <div>Contact: {props.profile.contacts.vk}</div>
          </div>
        </div>
    )
    
}
export default ProfileInfo;