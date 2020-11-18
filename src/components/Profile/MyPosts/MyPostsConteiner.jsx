import React from 'react';
import { addPost, likeDislikeSucsess } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getPosts } from '../../../Redux/profile-selectors';





const mapStateToProps = (state) => {
  return {
    posts : getPosts(state)
  }
}

const mapDispatchYoProps =  {
  addPost,
  likeDislikeSucsess
}
const MyPostsConteiner = connect(mapStateToProps, mapDispatchYoProps)(MyPosts);

export default MyPostsConteiner;