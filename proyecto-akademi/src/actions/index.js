import apiProductos from "../api/products";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await apiProductos.get("/products");
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: response.data,
    });
  } catch (error) {
    console.error("error en action");
  }
};
