export default (state = [], action) => {
  //actualizo estados
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload]; //agrego el nuevo producto sin perder los anteriores.

    case "FETCH_PRODUCTS":
      return action.payload;
    case "FETCH_PRODUCT":
      return action.payload;
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};
