export const getDialogs = (state) => {
  return state.chatsPage.dialogs;
};
export const getMembers = (state) => {
  return state.chatsPage.room.members;
};
export const getMessagesRoom = (state) => {
  return state.chatsPage.room.messages;
};
