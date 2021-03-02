import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";
import FormEditConteiner from "../../Common/Form/EditForm";

class MyPosts extends React.PureComponent {
  render() {
    let postsElements = this.props.posts.map((post) => (
      <Post
        key={post.id}
        postId={post.id}
        message={post.message}
        likeCounts={post.likesCount}
        likePost={post.isLikes}
        likeDislike={this.props.likeDislikeSucsess}
      />
    ));
    let addPost = (data) => {
      this.props.addPost(data.newPostText);
    };
    return (
      <div className={style.inner}>
        <div className={style.form}>
          <FormEditConteiner
            form={"addPost"}
            onSubmit={addPost}
            identifierText={"newPostText"}
          />
        </div>
        <div className={style.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;
