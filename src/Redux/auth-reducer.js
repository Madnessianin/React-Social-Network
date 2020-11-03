import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from '../api/Api.js'

const SET_USER_DATA = "social-network/auth/SET_USER_DATA",
      SET_CAPTCHA_URL = "social-network/auth/SET_CAPTCHA_URL";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth : false,
    captchaURL : null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.captcha
            }
        }
        default :
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data : {userId ,email, login, isAuth}});
export const setCaptchaURL = (captcha) => ({type: SET_CAPTCHA_URL, captcha})


export const setAuth = () => async (dispatch) => {
    let response = await authAPI.getAuth()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    
    
}

export const login = (data) => async (dispatch) => {
    let response = await authAPI.postAuth(data)
    if (response.data.resultCode === 0) {
        dispatch(setAuth())
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaURL())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error" 
            dispatch(stopSubmit("login", {_error: message}));
        }             
    }  
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.deleteAuth()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }            
}

export const getCaptchaURL = () => async (dispatch) => {
    let responseCaptcha = await securityAPI.getCaptchaURL()
    dispatch(setCaptchaURL(responseCaptcha.data.url))            
}



export default authReducer;