import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/Api";

const ADD_POST = "social-network/profile/ADD_POST",
  SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE",
  SET_USER_STATUS = "social-network/profile/SET_USER_STATUS",
  SAVE_PHOTO_SUCSESS = "social-network/profile/SAVE_PHOTO_SUCSESS",
  LIKEDISLAKEPOST = "social-network/profile/LIKEDISLAKEPOST";

const initialState = {
  posts: [
    { id: "1", message: "Hi, how are you?", likesCount: "15", isLikes: false },
    {
      id: "2",
      message: "It`s my first post",
      likesCount: "10",
      isLikes: false,
    },
  ],
  profile: null,
  status: "",
};
// Заглушка на контакты
export const contacts = {
  youtube: "https://www.youtube.com/",
  facebook: "https://www.facebook.com/",
  vk: "https://vk.com/",
  github: "https://github.com/",
  twitter: "https://twitter.com/",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: "3",
            message: action.newPostText,
            likesCount: "0",
            isLikes: false,
          },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
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
        profile: { ...state.profile, photos: action.photos },
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

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
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

export const getUser = (userId) => async (dispatch) => {
  let data = await profileAPI.getUserProfile(userId);
  dispatch(setUsersProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatust(userId);
  dispatch(setUserStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.dispachPhoto(photo);
  if (response.resultCode === 0) {
    dispatch(savePhotosSucsess(response.data.photos));
  }
};

export const saveProfileInfo = (profile, nameForm) => async (
  dispatch,
  getState
) => {
  let response = await profileAPI.dispachProfileInfo(profile);
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
