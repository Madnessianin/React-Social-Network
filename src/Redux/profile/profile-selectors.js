export const getProfile = (state) => {
  return state.profilePage;
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
  return state.profilePage.photos.large;
};

export const getContacts = (state) => {
  return state.profilePage.contacts;
};

export const getFriends = (state) => {
  return state.profilePage.friends;
};

export const getProfileName = (state) => {
  return state.profilePage.fullName;
};
