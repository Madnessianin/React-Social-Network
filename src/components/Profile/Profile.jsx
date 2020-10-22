import React from 'react';


import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   
  return ( 
    <div>
      <ProfileInfo  profile = {props.profile}
                    status = {props.status}
                    updateStatus = {props.updateStatus} 
                    isOwner = {props.isOwner}
                    savePhoto = {props.savePhoto}/>
      <MyPostsConteiner />
    </div>
    )
}

export default Profile;