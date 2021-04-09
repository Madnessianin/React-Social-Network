import { setAuth } from "../auth/auth-reducer.js";

const INITIALIZED_SUCCSESS = "social-network/app/INITIALIZED_SUCCSESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCSESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSucsess = () => ({ type: INITIALIZED_SUCCSESS });

export const initializeApp = () => async (dispatch) => {
  await dispatch(setAuth());
  dispatch(initializedSucsess());
};

export default appReducer;
