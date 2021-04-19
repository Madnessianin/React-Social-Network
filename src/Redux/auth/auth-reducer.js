import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, securityAPI } from "../../Api/Api.js";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const SET_CAPTCHA_URL = "social-network/auth/SET_CAPTCHA_URL";
const SET_AUTORIZED_USER = "social-network/auth/SET_AUTORIZED_USER";
const SET_CAPTCHA_TEXT = "social-network/auth/SET_CAPTCHA_TEXT";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: {
    captchaURL: null,
    captchaText: null,
  },
  profile: null,
};

const setToken = (response) => {
  const {
    data: { token },
  } = response;
  localStorage.setItem("user", token);
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captcha: {
          ...state.captcha,
          captchaURL: action.captcha,
        },
      };
    }
    case SET_CAPTCHA_TEXT: {
      return {
        ...state,
        captcha: {
          ...state.captcha,
          captchaText: action.captchaText,
        },
      };
    }
    case SET_AUTORIZED_USER: {
      return {
        ...state,
        profile: {
          ...action.profile,
        },
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});
export const setCaptchaURL = (captcha) => ({ type: SET_CAPTCHA_URL, captcha });
export const setCaptchaText = (captchaText) => ({
  type: SET_CAPTCHA_TEXT,
  captchaText,
});
export const setAuthUser = (profile) => ({
  type: SET_AUTORIZED_USER,
  profile,
});

export const setAuth = () => async (dispatch) => {
  const response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    const { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
    dispatch(getAuthUser(id));
  }
};

export const getAuthUser = (id) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(id);
  dispatch(setAuthUser(response.data));
};

export const login = (data) => async (dispatch, getState) => {
  const { captchaURL, captchaText } = getState().authPage.captcha;
  let newData = {
    ...data,
  };
  if (captchaURL) {
    newData.captcha = captchaText;
  }
  const response = await authAPI.postAuth(newData);
  if (response.data.resultCode === 0) {
    dispatch(setAuth());
    console.log(response);
    setToken(response);
    dispatch(setCaptchaURL(null));
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaURL());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.deleteAuth();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaURL = () => async (dispatch) => {
  const responseCaptcha = await securityAPI.getCaptchaURL();
  dispatch(setCaptchaURL(responseCaptcha.data.url));
};

export const registration = (data) => async (dispatch) => {
  const response = await authAPI.registration(data);
  if (response.data.resultCode === 0) {
    setToken(response.data);
  }
};

export default authReducer;
