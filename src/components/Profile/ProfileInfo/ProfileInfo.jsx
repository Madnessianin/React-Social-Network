import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader />
    } 
    return (
        <div>
          {/* <div className={classes.intro}>
            <img src="https://www.stilographcorsani.com/wp-content/uploads/2017/10/Icy-Northern-Lights.jpg" />
          </div> */}
          <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status = {props.status} 
                           updateStatus = {props.updateStatus} />
            <div>About: {props.profile.aboutMe}</div>
            <div>Contact: {props.profile.contacts.vk}</div>
          </div>
        </div>
    )
    
}
export default ProfileInfo;