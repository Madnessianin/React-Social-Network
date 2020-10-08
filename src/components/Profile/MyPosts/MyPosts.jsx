import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Utils/Validators/validators';
import { Textarea } from '../../Common/FormsControl/FormsControl';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';

const maxLength15 =  maxLengthCreator(15)
const AddPostForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <div>
        <Field component = {Textarea} 
               name = {"newPostText"} 
               placeholder = {"Enter new post text"} 
               validate = {[required, maxLength15]}/>
      </div>
      <div>
        <button>Add posts</button>
      </div>
    </form>
  )
}
const AddPostFormRedux = reduxForm({form : 'addPost'})(AddPostForm)


const MyPosts = (props) => {
      
  let postsElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount} />),
      addPost = (data) => {
        props.addPost(data.newPostText);
      }        
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
    
}

export default MyPosts;