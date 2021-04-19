import { ChatsAPI } from "../../Api/Api";

const SEND_MESSAGE = "social-network/dialogs/SEND_MESSAGE";
const SET_CHATS = "social-network/dialogs/SET_CHATS";

const initialState = {
  dialogs: [
    {
      id: "1",
      fullName: "User1",
      photo: {
        large: "",
        small: "",
      },
      lastMessege: {
        user: {
          id: "2",
          fullName: "User2",
          photo: {
            large: "",
            small: "",
          },
          message: "Abra codabra",
          data: "07.04.21",
        },
      },
    },
    {
      id: "2",
      fullName: "User2",
      photo: {
        large: "",
        small: "",
      },
      lastMessege: {
        user: {
          id: "3",
          fullName: "User3",
          photo: {
            large: "",
            small: "",
          },
          message: "Abra codabra",
          data: "07.04.21",
        },
      },
    },
    {
      id: "3",
      fullName: "User3",
      photo: {
        large: "",
        small: "",
      },
      lastMessege: {
        user: {
          id: "2",
          fullName: "User2",
          photo: {
            large: "",
            small: "",
          },
          message: "Abra codabra",
          data: "07.04.21",
        },
      },
    },
    {
      id: "4",
      fullName: "User4",
      photo: {
        large: "",
        small: "",
      },
      lastMessege: {
        user: {
          id: "2",
          fullName: "User2",
          photo: {
            large: "",
            small: "",
          },
          message: "Abra codabra",
          data: "07.04.21",
        },
      },
    },
    {
      id: "5",
      fullName: "User5",
      photo: {
        large: "",
        small: "",
      },
      lastMessege: {
        user: {
          id: "2",
          fullName: "User2",
          photo: {
            large: "",
            small: "",
          },
          message: "Abra codabra",
          data: "07.04.21",
        },
      },
    },
    {
      id: "6",
      fullName: "User6",
      photo: {
        large: "",
        small: "",
      },
      lastMessege: {
        user: {
          id: "2",
          fullName: "User2",
          photo: {
            large: "",
            small: "",
          },
          message: "Abra codabra",
          data: "07.04.21",
        },
      },
    },
  ]
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
        dialogs: [
          ...action.chats
        ]
      }
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
  chats
})

/* Thunk */

export const getChats = () => async (dispatch) => {
  const response = await ChatsAPI.getChats();
  if (response.data.resultCode === 0) {
    //dispatch(setChats(response.data.items));
  }
  console.log(response)
}


export default chatsReducer;
