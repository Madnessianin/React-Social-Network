const SET_DATA_LOGIN_FORM = "SET_DATA_LOGIN_FORM";
const SET_DATA_GENERAL_FORM = "SET_DATA_GENERAL_FORM";
const SET_DATA_CONTACTS_FORM = "SET_DATA_CONTACT_FORM";
const SET_DATA_PHOTO_FORM = "SET_DATA_PHOTO_FORM";
const SET_VISIBLE_MODE = "SET_VISIBLE_MODE";
const SET_SUBTITLE = "SET_SUBTITLE";

const regReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA_LOGIN_FORM: {
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          loginForm: action.data,
        },
      };
    }
    case SET_VISIBLE_MODE: {
      return {
        ...state,
        [action.key]: action.isVisible,
      };
    }
    case SET_SUBTITLE: {
      return {
        ...state,
        subtitle: action.subtitle,
      };
    }
    case SET_DATA_GENERAL_FORM: {
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          generalForm: action.data,
        },
      };
    }
    case SET_DATA_CONTACTS_FORM: {
      return {
        ...state,
        dataForm: {
          ...state.dataForm,
          contactsForm: action.data,
        },
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

export const setVisibleMode = (key, isVisible) => ({
  type: SET_VISIBLE_MODE,
  key,
  isVisible,
});

export const setSubtitle = (subtitle) => ({
  type: SET_SUBTITLE,
  subtitle,
});

export const setDataLoginForm = (data) => ({
  type: SET_DATA_LOGIN_FORM,
  data,
});
export const setDataGeneralForm = (data) => ({
  type: SET_DATA_GENERAL_FORM,
  data,
});
export const setDataContactsForm = (data) => ({
  type: SET_DATA_CONTACTS_FORM,
  data,
});
export const setDataPhotoForm = (data) => ({
  type: SET_DATA_PHOTO_FORM,
  data,
});
export default regReducer;
