import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile/profile-reducer";
import dialogsReducer from "./dialogs/dialogs-reducer";
import usersReducer from "./users/users-reducer";
import authReducer from "./auth/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app/app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  authPage: authReducer,
  form: formReducer,
  app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
