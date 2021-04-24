import { ChatsAPI } from "../../Api/Api";
import io from "socket.io-client";

const SEND_MESSAGE = "social-network/dialogs/SEND_MESSAGE";
const SET_CHATS = "social-network/dialogs/SET_CHATS";
const SET_ROOM = "social-network/dialogs/SET_ROOM";

const initialState = {
  dialogs: [],
  room: {
    id: null,
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
          id: action.data.id,
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
export const setRoom = (data) => ({
  type: SET_ROOM,
  data,
});

/* Thunk */

export const getChats = () => async (dispatch) => {
  const response = await ChatsAPI.getChats();
  if (response.data.resultCode === 0) {
    dispatch(setChats(response.data.items));
  }
};

export const getMessages = (id, count = 100) => async (dispatch) => {
  const response = await ChatsAPI.getMessages(id, count);
  if (response.data.resultCode === 0) {
    dispatch(setRoom(response.data.items));
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

export default chatsReducer;
