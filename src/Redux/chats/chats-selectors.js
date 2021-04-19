export const getDialogs = (state) => {
  return state.chatsPage.dialogs;
};

export const getMessages = (state) => {
  return state.dialogsPage.messages;
};
