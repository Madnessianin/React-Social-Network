import { stopSubmit } from "redux-form";
import { profileAPI } from "../../Api/Api";

const ADD_POST = "social-network/profile/ADD_POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "social-network/profile/SET_USER_STATUS";
const SAVE_PHOTO_SUCSESS = "social-network/profile/SAVE_PHOTO_SUCSESS";
const LIKEDISLAKEPOST = "social-network/profile/LIKEDISLAKEPOST";
const SET_POSTS = "social-network/profile/SET_POSTS";
const DELETE_POST = "social-network/profile/DELETE_POST";
const CHANGE_POST = "social-network/profile/CHANGE_POST";

const initialState = {
  userId: "",
  status: "",
  aboutMe: "",
  lookingForAJob: true,
  lookingForAJobDescription: "",
  fullName: "",
  contacts: {
    youtube: "https://www.youtube.com/",
    facebook: "https://www.facebook.com/",
    vk: "https://vk.com/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  },
  posts: [],
  photos: {},
  friends: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.newPost],
      };
    }
    case CHANGE_POST: {
      return {
        ...state,
        posts: [
          ...state.posts.map((post) => post.id !== action.post.id ? post : action.post)
        ],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.id)],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        ...action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO_SUCSESS: {
      return {
        ...state,
        photos: action.photos,
      };
    }
    case SET_POSTS: {
      return {
        ...state,
        posts: [...action.posts],
      };
    }
    case LIKEDISLAKEPOST: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id == action.postId) {
            if (action.isLikes) {
              return {
                ...post,
                likesCount: parseInt(post.likesCount) - 1,
                isLikes: !action.isLikes,
              };
            } else {
              return {
                ...post,
                likesCount: parseInt(post.likesCount) + 1,
                isLikes: !action.isLikes,
              };
            }
          }
          return post;
        }),
      };
    }

    default:
      return state;
  }
};

export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const deleteThisPost = (id) => ({ type: DELETE_POST, id });
export const changeThisPost = (post) => ({ type: CHANGE_POST, post });
export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotosSucsess = (photos) => ({
  type: SAVE_PHOTO_SUCSESS,
  photos,
});
export const likeDislikeSucsess = (postId, isLikes) => ({
  type: LIKEDISLAKEPOST,
  postId,
  isLikes,
});
export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});

/* Thunk */

export const getUser = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId);
  dispatch(setUsersProfile(response.data));
  dispatch(getAllPosts());
};

export const getAllPosts = () => async (dispatch, getState) => {
  const id = getState().profilePage.id;
  const response = await profileAPI.getPosts(id);
  dispatch(setPosts(response.data.items));
};

export const sendNewPost = (post) => async (dispatch) => {
  const response = await profileAPI.addPost(post);
  if (response.data.resultCode === 0) {
    dispatch(addPost(response.data.data));
  }
};

export const deletePost = (id) => async (dispatch) => {
  const response = await profileAPI.deletePost(id);
  if (response.data.resultCode === 0) {
    dispatch(deleteThisPost(id));
  }
};

export const changePost = (id, post) => async (dispatch) => {
  const response = await profileAPI.changePost(id, post);
  if (response.data.resultCode === 0) {
    console.log(response.data.data);
    dispatch(changeThisPost(response.data.data));
  }
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const savePhoto = (photo) => async (dispatch) => {
  const response = await profileAPI.dispachPhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotosSucsess(response.data.data));
  }
};

export const saveProfileInfo = (profile, nameForm) => async (
  dispatch,
  getState
) => {
  const response = await profileAPI.dispachProfileInfo(profile);
  if (response.resultCode === 0) {
    dispatch(getUser(getState().auth.id));
  } else {
    if (response.data.messages.length > 0) {
      let contacts = {};
      for (let error of response.data.messages) {
        let errorName = error.slice(error.indexOf(">") + 1, -1).toLowerCase();
        contacts[errorName] = error.slice(0, error.indexOf("("));
      }
      dispatch(stopSubmit(nameForm, { contacts: contacts }));
      return Promise.reject(response.data.messages[0]);
    }
  }
};

export default profileReducer;
