export const getDialogs = (state) => {
  return state.chatsPage.dialogs;
};
export const getMembers = (state) => {
  return state.chatsPage.room.members;
};
export const getMessagesRoom = (state) => {
  return state.chatsPage.room.messages;
};
export const getTitleRoom = (state) => {
  return state.chatsPage.room.chatInfo.title;
}
export const getPhotoRoom = (state) => {
  return state.chatsPage.room.chatInfo.photo;
}