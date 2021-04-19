export const getIsAuth = (state) => {
  return state.authPage.isAuth;
};

export const getLogin = (state) => {
  return state.authPage.login;
};

export const getAutorizedUserId = (state) => {
  return state.authPage.userId;
};

export const getCaptcha = (state) => {
  return state.authPage.captcha.captchaURL;
};

export const getAuthUserPhoto = (state) => {
  return state.authPage.profile.photos.large;
};
