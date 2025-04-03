import apiProductos from "../api/products";
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "./types";

export const addProduct = (formValues) => async (dispatch) => {
  try {
    const response = await apiProductos.post("/products", {
      ...formValues,
    });
    dispatch({
      //llamo a una accion para actualiizar estado en el reducer
      type: ADD_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    console.error("error en action");
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await apiProductos.get("/products");
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.error("error fetch");
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  try {
    const response = await apiProductos.delete(`/products/${id}`);
    dispatch({
      type: FETCH_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    console.error("error en action");
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await apiProductos.delete(`/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.error("eror en delete action", error);
  }
};

export const editProduct = (id) => async (dispatch) => {
  try {
    const response = await apiProductos.put(`/products/${id}`);
    dispatch({
      type: EDIT_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    // console.error("error en action");
  }
};
