import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  GET_DATA
} from "./actionTypes";

export type initialStateT = {
  token: null | string;
  isAuthenticate: boolean;
  loading: boolean;
  data: object[];
};

const initialState: initialStateT = {
  token: null,
  isAuthenticate: false,
  loading: false,
  data: []
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, isAuthenticate: false, token: null, loading: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        isAuthenticate: true
      };
    case LOGIN_LOADING:
      return { ...state, loading: true, token: null };
    case GET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducers;
