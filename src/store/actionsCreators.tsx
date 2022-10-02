import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  GET_DATA
} from "./actionTypes";
const loginSuccess = (token: string): any => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

const loginFail = () => {
  return {
    type: LOGIN_FAIL
  };
};

const loginLoading = () => {
  return {
    type: LOGIN_LOADING
  };
};

const getData = (data: object[]) => {
  return {
    type: GET_DATA,
    payload: data
  };
};

const getDatafromURL = (searchTearm: string) => {
  return (dispatch: any) => {
    fetch(`https://camel-bedclothes.cyclic.app/bookmarks`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getData(res));
      });
  };
};

const defaultFetchData = (page: number = 1, limit: number = 10) => {
  const url: string = `https://camel-bedclothes.cyclic.app/bookmarks?page=${page}&limit=${limit}`;
  console.log(url);
  return (dispatch: any) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getData(res.bookmarks));
      });
  };
};

export {
  loginFail,
  loginLoading,
  loginSuccess,
  getData,
  getDatafromURL,
  defaultFetchData
};
