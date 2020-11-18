
export const getIsAuth = (state) => {
    return state.authPage.isAuth
}

export const getLogin = (state) => {
    return state.authPage.login
}

export const getCaptcha = (state) => {
    return state.authPage.captchaURL
}

export const getUserPhoto = (state) => {
    return state.authPage.userPhoto
}