const SEND_MESSAGE = "social-network/dialogs/SEND_MESSAGE";

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
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "Yo" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
