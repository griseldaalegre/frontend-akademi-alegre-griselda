const productReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "FETCH_PRODUCTS":
      return action.payload;
    case "FETCH_PRODUCT":
      return action.payload;
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    case "EDIT_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    default:
      return state;
  }
};

export default productReducer;
