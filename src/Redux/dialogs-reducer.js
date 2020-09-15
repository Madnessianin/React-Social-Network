
const SEND_MESSAGE = "SEND_MESSAGE",
      UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    dialogs : [
        {id : "1", name : "Dima"},
        {id : "2", name : "Alex"},
        {id : "3", name : "Andrey"},
        {id : "4", name : "Sveta"},
        {id : "5", name : "Sasha"},
        {id : "6", name : "Victor"},
        {id : "7", name : "Valera"}
    ],
    messages : [
        {id : "1", message : "Hi"},
        {id : "2", message : "How are you?"},
        {id : "3", message : "Yo"},
        {id : "4", message : "Yo"},
        {id : "5", message : "Yo"}
    ],
    newMessageText : "Enter message"
};

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages : [
                    ...state.messages,
                    { id : "6", 
                      message : state.newMessageText}],
                newMessageText : ""
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newTextMessage
            };
    }
        default :
            return state;

    }
   
    
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text});

export default dialogsReducer;