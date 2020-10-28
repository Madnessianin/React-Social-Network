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


class MyPosts extends React.PureComponent {
      
  /* shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  } */

  render() {
  let postsElements = this.props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount} />)
  
  let addPost = (data) => {
    this.props.addPost(data.newPostText);
  }        
    return (
      <div>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addPost} />
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    )
  }
}

export default MyPosts;