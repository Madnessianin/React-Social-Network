import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';





const mapStateToProps = (state) => {
  return {
    posts : state.profilePage.posts,
    newPostText : state.profilePage.newPostText
  }
}

const mapDispatchYoProps = (dispatch) => {
  return {
    updateNewPostText: (body) => {
      dispatch(updateNewPostTextCreator(body));
    },
    addPost : () => {
      dispatch(addPostCreator());
    }
  }
}
const MyPostsConteiner = connect(mapStateToProps, mapDispatchYoProps)(MyPosts);

export default MyPostsConteiner;