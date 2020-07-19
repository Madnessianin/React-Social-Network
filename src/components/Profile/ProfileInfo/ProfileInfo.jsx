import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div className={classes.intro}>
          <img src="https://www.stilographcorsani.com/wp-content/uploads/2017/10/Icy-Northern-Lights.jpg" />
        </div>
        <div className={classes.descriptionBlock}>
          avatar + description
        </div>
      </div>
    )
}

export default ProfileInfo;