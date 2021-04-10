const SET_DATA_LOGIN_FORM = "SET_DATA_LOGIN_FORM";
const SET_DATA_GENERAL_FORM = "SET_DATA_GENERAL_FORM";
const SET_DATA_CONTACTS_FORM = "SET_DATA_CONTACT_FORM";
const SET_DATA_PHOTO_FORM = "SET_DATA_PHOTO_FORM";
const SET_VISIBLE_MODE = "SET_VISIBLE_MODE";

const regReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA_LOGIN_FORM: {
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          loginForm: action.data,
        },
        login: false,
      };
    }
    case SET_VISIBLE_MODE: {
      return {
        ...state,
        [action.key]: true,
      };
    }
    case SET_DATA_GENERAL_FORM: {
        return {
            ...state,
            dataForm: {
              ...state.dataForm,
              generalForm: action.data,
            },
            general: false,
          };
    }
    case SET_DATA_CONTACTS_FORM: {
        return {
            ...state,
            dataForm: {
              ...state.dataForm,
              contactsForm: action.data,
            },
            contacts: false,
          };
    }
    case SET_DATA_PHOTO_FORM: {
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          photo: action.data,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const setVisibleMode = (key) => ({
  type: SET_VISIBLE_MODE,
  key,
});

export const setDataLoginForm = (data) => ({
  type: SET_DATA_LOGIN_FORM,
  data,
});
export const setDataGeneralForm = (data) => ({
  type: SET_DATA_GENERAL_FORM,
  data,
});
export const setDataContactForm = (data) => ({
  type: SET_DATA_CONTACTS_FORM,
  data,
});
export const setDataPhotoForm = (data) => ({
  type: SET_DATA_PHOTO_FORM,
  data,
});
export default regReducer;
