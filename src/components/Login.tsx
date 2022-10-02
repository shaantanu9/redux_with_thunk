import { useDispatch, useSelector } from "react-redux";
import { initialStateT } from "../store/reducers";
import {
  loginFail,
  loginLoading,
  loginSuccess
} from "../store/actionsCreators";
const Login: React.FC = () => {
  const { token, isAuthenticate, loading } = useSelector(
    (state) => state as initialStateT
  );
  const dispatch = useDispatch();

  const successHandler = () => {
    const token = "thisistoken";
    dispatch(loginSuccess(token));
  };
  const failHandler = () => {
    dispatch(loginFail());
  };
  const loadingHandler = () => {
    dispatch(loginLoading());
  };
  return (
    <>
      <p>Login</p>
      <button onClick={successHandler}>Success</button>
      <button onClick={failHandler}>FAIL</button>
      <button onClick={loadingHandler}>LOADING</button>
      <p></p>
      <span>Token: </span>
      {token ? <span>{token}</span> : <span>null</span>}

      <p></p>
      {isAuthenticate ? (
        <h1>isAuthenticate true </h1>
      ) : (
        <p>isAuthenticate false</p>
      )}
      {loading ? <h1>Loading true</h1> : <p>LOADING False</p>}
    </>
  );
};

export default Login;
