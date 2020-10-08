
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
    ]

};

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages : [
                    ...state.messages,
                    { id : "6", 
                      message : action.newMessageText}]
            };
        }
        default :
            return state;

    }
   
    
}

export const sendMessage= (newMessageText) => ({type: SEND_MESSAGE, newMessageText});


export default dialogsReducer;