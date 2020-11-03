import { stopSubmit, SubmissionError } from "redux-form";
import { profileAPI } from "../api/Api";

const ADD_POST = "social-network/profile/ADD_POST",
      SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE",
      SET_USER_STATUS = "social-network/profile/SET_USER_STATUS",
      SAVE_PHOTO_SUCSESS = "social-network/profile/SAVE_PHOTO_SUCSESS"

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
        case SAVE_PHOTO_SUCSESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        default :
            return state;
    } 
    
}

export const addPost = (newPostText) =>  ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) =>  ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotosSucsess = (photos) => ({type: SAVE_PHOTO_SUCSESS, photos})

export const getUser = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUsersProfile(data));
}


export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatust(userId)
    dispatch(setUserStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }   
}
export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.dispachPhoto(photo)
    if (response.resultCode === 0) {
        dispatch(savePhotosSucsess(response.data.photos))
    }
}

export const saveProfileInfo = (profile, nameForm) => async (dispatch, getState) => {

    let response = await profileAPI.dispachProfileInfo(profile)
    if (response.resultCode === 0) {
        dispatch(getUser(getState().auth.id))
    } else {
        if (response.data.messages.length > 0) {
            let contacts = {}
            for (let error in response.data.messages) {
            let errorName = response.data.messages[error].slice(response.data.messages[error].indexOf('>') + 1, -1).toLowerCase()
            contacts[errorName] = response.data.messages[error].slice(0, response.data.messages[error].indexOf('(') )
        }  
        dispatch(stopSubmit(nameForm, {"contacts": contacts}))
        return Promise.reject(response.data.messages[0])
        }
        
    }
}

export default profileReducer;