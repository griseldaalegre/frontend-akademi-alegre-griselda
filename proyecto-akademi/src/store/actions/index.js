import apiProductos from "../../api/products";
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from "./types";

export const fetchProducts = () => async (dispatch) => {
  const response = await apiProductos.get("/products");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await apiProductos.get(`/products/${id}`);
  dispatch({
    type: FETCH_PRODUCT,
    payload: response.data,
  });
};

export const addProduct = (formValues) => async (dispatch) => {
  const response = await apiProductos.post("/products", {
    ...formValues,
  });
  dispatch({
    type: ADD_PRODUCT,
    payload: response.data,
  });
};

export const deleteProduct = (id) => async (dispatch) => {
  await apiProductos.delete(`/products/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};

export const editProduct = (id, formValues) => async (dispatch) => {
  const response = await apiProductos.patch(`/products/${id}`, formValues);
  dispatch({
    type: EDIT_PRODUCT,
    payload: response.data,
  });
};
