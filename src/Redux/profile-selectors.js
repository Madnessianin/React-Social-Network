export const getProfile = (state) => {
  return state.profilePage.profile;
};

export const getUserStatus = (state) => {
  return state.profilePage.status;
};

export const getAutorizedUserId = (state) => {
  return state.authPage.userId;
};

export const getPosts = (state) => {
  return state.profilePage.posts;
};

export const getProfilePhoto = (state) => {
  return state.profilePage.profile.photos.large;
};

export const getContacts = (state) => {
  return state.profilePage.profile.contacts
}
