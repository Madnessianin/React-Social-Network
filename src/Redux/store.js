import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";




let store = {
    _state : {
        dialogsPage : {
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
        },
        profilePage : {
            posts : [
                {id : "1", message : 'Hi, how are you?', likesCount : '15'},
                {id : "2", message : 'It`s my first post', likesCount : '10'}
            ],
            newPostText : "it-kamasutra.com"
        },
        sidebar : {

        }
    },
    _callSubscriber () {
        console.log("state changed!");
    },


    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;  
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
   
};



export default store;
window.state = store;






