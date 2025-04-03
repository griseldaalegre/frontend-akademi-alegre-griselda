import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";

import App from "./components/App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const store = createStore(reducers, applyMiddleware(thunk));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
