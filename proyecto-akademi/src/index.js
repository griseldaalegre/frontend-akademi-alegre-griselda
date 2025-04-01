import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const store = createStore(reducers, applyMiddleware(thunk)); //le paso a los reducers y el middleware thunk   (para acciones asincronicas

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
