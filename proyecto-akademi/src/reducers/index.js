import { combineReducers } from "redux";
import productsReducer from "./productReducer";

export default combineReducers({
  products: productsReducer, //guardo lo que viene del reducer
});
