export const getIsAuth = (state) => {
  return state.authPage.isAuth;
};

export const getLogin = (state) => {
  return state.authPage.login;
};

export const getCaptcha = (state) => {
  return state.authPage.captcha.captchaURL;
};
