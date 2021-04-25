import { ChatsAPI } from "../../Api/Api";
import io from "socket.io-client";

const SEND_MESSAGE = "social-network/dialogs/SEND_MESSAGE";
const SET_CHATS = "social-network/dialogs/SET_CHATS";
const SET_ROOM = "social-network/dialogs/SET_ROOM";

const initialState = {
  dialogs: [],
  room: {
    chatInfo: {},
    members: [],
    messages: [],
  },
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS: {
      return {
        ...state,
        dialogs: [...action.chats],
      };
    }
    case SET_ROOM: {
      return {
        ...state,
        room: {
          chatInfo: {
            ...action.chatInfo,
          },
          members: [...action.data.users],
          messages: [...action.data.messages],
        },
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        room: {
          ...state.room,
          messages: [...state.room.messages, action.newMessage],
        },
      };
    }
    default:
      return state;
  }
};

export const addMessage = (newMessage) => ({
  type: SEND_MESSAGE,
  newMessage,
});
export const setChats = (chats) => ({
  type: SET_CHATS,
  chats,
});
export const setRoom = (data, chatInfo) => ({
  type: SET_ROOM,
  data,
  chatInfo,
});

/* Thunk */

export const getChats = () => async (dispatch) => {
  const response = await ChatsAPI.getChats();
  if (response.data.resultCode === 0) {
    dispatch(setChats(response.data.items));
  }
};

export const getMessages = (id, count = 100) => async (dispatch, getState) => {
  const response = await ChatsAPI.getMessages(id, count);
  if (response.data.resultCode === 0) {
    const chatInfo = getState().chatsPage.dialogs[id - 1];
    dispatch(setRoom(response.data.items, chatInfo));
  }
};

export const sendMessage = (message, userId, room) => async (dispatch) => {
  const socket = io("ws://192.168.0.104:8000/");
  socket.emit("join", {
    userId,
    room,
  });
  await socket.emit("sendMessage", {
    message,
    userId,
    room,
  });
  await socket.on("responseSendMessage", ({ data }) => {
    dispatch(addMessage(data));
  });
};

export const sendNewMessage = (message, from, to) => async (dispatch) => {
  const socket = io("ws://192.168.0.104:8000/");
  await socket.emit("sendMessage", {
    message,
    from,
    to,
  });
};

export default chatsReducer;
