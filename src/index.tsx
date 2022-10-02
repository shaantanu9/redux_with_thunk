import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode> */}
  </Provider>
);
