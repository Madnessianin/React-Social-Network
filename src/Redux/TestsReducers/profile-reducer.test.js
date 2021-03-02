import React from "react";
import profileReducer, { addPost } from "../profile-reducer";

test("new post should be added", () => {
  let state = {
    posts: [
      { id: "1", message: "Hi, how are you?", likesCount: "15" },
      { id: "2", message: "It`s my first post", likesCount: "10" },
    ],
  };
  let action = addPost("new text");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
