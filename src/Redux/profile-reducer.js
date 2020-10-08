import { profileAPI } from "../api/Api";

const ADD_POST = "ADD_POST",
      SET_USER_PROFILE = "SET_USER_PROFILE",
      SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
    posts : [
        {id : "1", message : 'Hi, how are you?', likesCount : '15'},
        {id : "2", message : 'It`s my first post', likesCount : '10'}
    ],
    profile : null,
    status: "" 
    };

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id : "3", message : action.newPostText, likesCount : "0" }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile : action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status : action.status
            };
        }
        default :
            return state;
    } 
    
}

export const addPost = (newPostText) =>  ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) =>  ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUser = (userId) => {
    return (dispatch) => {
    profileAPI.getUserProfile(userId).then((data) => {
        dispatch(setUsersProfile(data));
    });}
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatust(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
            
        });
    }
}
export default profileReducer;