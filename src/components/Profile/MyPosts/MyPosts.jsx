import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';




const MyPosts = (props) => {
      
      let postsElements = props.posts.map(post => <Post message={post.message} likeCounts={post.likesCount}/>),
          newPostElement = React.createRef(),
          addPost = () => {
            props.addPost();
          },
          onPostChange = () => {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
          }

    return <div className={classes.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
            </div>
            <div>
              <button onClick={addPost}>Add posts</button>
            </div>
          </div>
          <div className={classes.posts}>
            {postsElements}
          </div>
      </div>
    
}

export default MyPosts;