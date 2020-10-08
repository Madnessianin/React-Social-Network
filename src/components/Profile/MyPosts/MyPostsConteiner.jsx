import React from 'react';
import { addPost } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';





const mapStateToProps = (state) => {
  return {
    posts : state.profilePage.posts
  }
}

const mapDispatchYoProps =  {
  addPost
}
const MyPostsConteiner = connect(mapStateToProps, mapDispatchYoProps)(MyPosts);

export default MyPostsConteiner;