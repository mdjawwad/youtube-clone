import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_OUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token")
    ? sessionStorage.getItem("ytc-access-token")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        error: payload,
        loading: false,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

      case LOGIN_OUT:
        return {
          ...prevState,
          accessToken:null,
          user: null,
        };

    default:
      return prevState;
  }
};
