export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems + 1,
        totalPrice: state.totalPrice + action.payload
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems - 1,
        totalPrice: state.totalPrice - action.payload,
        items: state.items.filter((ele) => ele.id !== action.id)
      };
    default:
      break;
  }
};
