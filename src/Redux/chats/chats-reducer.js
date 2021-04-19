import { ChatsAPI } from "../../Api/Api";

const SEND_MESSAGE = "social-network/dialogs/SEND_MESSAGE";
const SET_CHATS = "social-network/dialogs/SET_CHATS";

const initialState = {
  dialogs: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: "6", message: action.newMessageText },
        ],
      };
    }
    case SET_CHATS: {
      return {
        ...state,
        dialogs: [...action.chats],
      };
    }

    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});
export const setChats = (chats) => ({
  type: SET_CHATS,
  chats,
});

/* Thunk */

export const getChats = () => async (dispatch) => {
  const response = await ChatsAPI.getChats();
  if (response.data.resultCode === 0) {
    dispatch(setChats(response.data.items));
  }
};

export default chatsReducer;
